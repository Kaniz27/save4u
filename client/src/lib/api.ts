import type { ApiResponse } from "@/types";

const BASE_URL = import.meta.env.VITE_API_URL || "/api";

export class ApiClientError extends Error {
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  });

  const body = (await res.json().catch(() => ({}))) as ApiResponse<T>;

  // A non-JSON or unexpected-shape response (e.g. an SPA fallback HTML page
  // served where an API route was expected) must not be treated as success.
  if (!res.ok || !body.success) {
    throw new ApiClientError(res.status, body.message || "Something went wrong");
  }

  return body.data;
}

export const api = {
  get: <T>(path: string) => request<T>(path),
  post: <T>(path: string, data?: unknown) =>
    request<T>(path, { method: "POST", body: data ? JSON.stringify(data) : undefined }),
  put: <T>(path: string, data?: unknown) =>
    request<T>(path, { method: "PUT", body: data ? JSON.stringify(data) : undefined }),
  patch: <T>(path: string, data?: unknown) =>
    request<T>(path, { method: "PATCH", body: data ? JSON.stringify(data) : undefined }),
  delete: <T>(path: string) => request<T>(path, { method: "DELETE" }),
};

export async function fetchWithMeta<T>(
  path: string,
): Promise<{ data: T; meta?: ApiResponse<T>["meta"] }> {
  const res = await fetch(`${BASE_URL}${path}`, { credentials: "include" });
  const body = (await res.json().catch(() => ({}))) as ApiResponse<T>;
  if (!res.ok || !body.success) {
    throw new ApiClientError(res.status, body.message || "Something went wrong");
  }
  return { data: body.data, meta: body.meta };
}
