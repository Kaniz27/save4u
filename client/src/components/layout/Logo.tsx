import { Link } from "react-router-dom";
import { classNames } from "@/lib/utils";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex shrink-0 items-center gap-2.5">
      <svg width="40" height="34" viewBox="0 0 40 34" fill="none" className="shrink-0" aria-hidden>
        <rect x="12" y="1" width="26" height="17" rx="4" fill="url(#save4u-card-top)" transform="rotate(8 12 1)" />
        <rect x="1" y="12" width="26" height="17" rx="4" fill="url(#save4u-card-bottom)" />
        <rect x="5" y="18" width="18" height="2.4" rx="1.2" fill="white" fillOpacity="0.85" />
        <path
          d="M17.6 20.6l-3.2 4.2h2l-.9 3 3.6-4.4h-2.1l.6-2.8z"
          fill="#FFD166"
          stroke="white"
          strokeWidth="0.4"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id="save4u-card-top" x1="12" y1="1" x2="38" y2="18" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF7A59" />
            <stop offset="1" stopColor="#FE6B04" />
          </linearGradient>
          <linearGradient id="save4u-card-bottom" x1="1" y1="12" x2="27" y2="29" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4FB1E5" />
            <stop offset="1" stopColor="#2E8FC2" />
          </linearGradient>
        </defs>
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={classNames(
            "font-heading text-xl font-extrabold tracking-tight",
            light ? "text-white" : "text-brand-orange",
          )}
        >
          SAVE<span className={light ? "text-white/90" : "text-brand-blue-dark"}>4U</span>
        </span>
        <span
          className={classNames(
            "mt-1 text-[9px] font-bold uppercase tracking-[0.14em]",
            light ? "text-white/70" : "text-brand-blue-dark",
          )}
        >
          One Stop Solution Partner
        </span>
      </span>
    </Link>
  );
}
