import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

interface SplitTextProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "span";
  className?: string;
  delay?: number;
  stagger?: number;
  trigger?: "mount" | "scroll";
}

export function SplitText({
  text,
  as: Tag = "span",
  className = "",
  delay = 0.1,
  stagger = 0.025,
  trigger = "mount",
}: SplitTextProps) {
  const ref = useRef<HTMLElement>(null);
  const words = text.split(" ");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const chars = el.querySelectorAll<HTMLElement>("[data-char]");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      gsap.set(chars, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        chars,
        { opacity: 0, y: "0.55em" },
        {
          opacity: 1,
          y: "0em",
          duration: 0.6,
          ease: "power3.out",
          stagger,
          delay,
          scrollTrigger:
            trigger === "scroll" ? { trigger: el, start: "top 88%", once: true } : undefined,
        },
      );
    }, el);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return (
    <Tag ref={ref as React.Ref<HTMLHeadingElement>} className={className} aria-label={text}>
      {words.map((word, wIndex) => (
        <span key={wIndex} className="inline-block whitespace-nowrap" aria-hidden="true">
          {word.split("").map((char, cIndex) => (
            <span key={cIndex} data-char className="inline-block will-change-transform">
              {char}
            </span>
          ))}
          {wIndex < words.length - 1 ? " " : ""}
        </span>
      ))}
    </Tag>
  );
}
