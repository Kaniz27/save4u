import type { ReactNode } from "react";
import { classNames } from "@/lib/utils";

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={classNames(
        "rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300",
        className,
      )}
    >
      {children}
    </div>
  );
}
