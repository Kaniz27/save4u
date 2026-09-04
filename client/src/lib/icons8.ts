const ICON8_BASE = "https://img.icons8.com";

export function icon8Url(slug: string, size: 48 | 64 | 96 = 96, style: "fluency" | "color" = "fluency"): string {
  return `${ICON8_BASE}/${style}/${size}/${slug}.png`;
}
