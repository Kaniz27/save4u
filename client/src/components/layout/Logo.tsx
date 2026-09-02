import { Link } from "react-router-dom";
import { classNames } from "@/lib/utils";
import logoUrl from "@/assets/logo.png";

export function Logo({ light = false, compact = false }: { light?: boolean; compact?: boolean }) {
  return (
    <Link to="/" className="flex shrink-0 items-center">
      <img
        src={logoUrl}
        alt="Save4u — One Stop Solution Partner"
        className={classNames(
          "w-auto object-contain transition-all duration-300",
          compact ? "h-9" : "h-11",
          light && "drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]",
        )}
      />
    </Link>
  );
}
