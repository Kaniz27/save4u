import { Link } from "react-router-dom";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { classNames } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-brand-orange text-white hover:bg-brand-orange-dark hover:shadow-glow hover:scale-[1.03]",
  secondary:
    "bg-white text-brand-blue-dark border border-brand-blue/40 hover:bg-brand-blue/10",
  ghost: "text-white border border-white/60 hover:bg-white/10",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200";

interface LinkButtonProps {
  variant?: Variant;
  className?: string;
  children: ReactNode;
  to: string;
}

function isLinkButton(
  props: LinkButtonProps | (ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }),
): props is LinkButtonProps {
  return typeof (props as LinkButtonProps).to === "string";
}

export function Button(
  props: LinkButtonProps | (ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; children: ReactNode }),
) {
  const { variant = "primary", className } = props;
  const classes = classNames(baseClasses, variantClasses[variant], className);

  if (isLinkButton(props)) {
    return (
      <Link to={props.to} className={classes}>
        {props.children}
      </Link>
    );
  }

  const { variant: _variant, className: _className, ...rest } = props;
  return (
    <button className={classes} {...rest}>
      {props.children}
    </button>
  );
}
