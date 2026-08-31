import type { ReactNode } from "react";
import { classNames } from "@/lib/utils";

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={classNames(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
        className,
      )}
    >
      {children}
    </span>
  );
}
