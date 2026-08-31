import { useEffect, useRef, type RefObject } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface Options {
  y?: number;
  stagger?: number;
  selector?: string;
}

export function useScrollReveal<T extends HTMLElement>(options: Options = {}): RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const targets = options.selector ? el.querySelectorAll(options.selector) : el;
      gsap.from(targets, {
        opacity: 0,
        y: options.y ?? 32,
        duration: 0.7,
        ease: "power2.out",
        stagger: options.stagger ?? 0.12,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
      });
    }, el);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
}

export function refreshScrollTrigger(): void {
  ScrollTrigger.refresh();
}
