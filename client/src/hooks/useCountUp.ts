import { useEffect, useRef, type RefObject } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function useCountUp<T extends HTMLElement>(end: number, suffix = ""): RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const counter = { value: 0 };
    const ctx = gsap.context(() => {
      gsap.to(counter, {
        value: end,
        duration: 1.6,
        ease: "power1.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          once: true,
        },
        onUpdate: () => {
          el.textContent = `${Math.round(counter.value).toLocaleString("en-GB")}${suffix}`;
        },
      });
    }, el);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [end, suffix]);

  return ref;
}

export { ScrollTrigger };
