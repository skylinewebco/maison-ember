"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Props = {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  delay?: number;
  y?: number;
  /** stagger direct children instead of animating the wrapper as one block */
  stagger?: boolean;
  [key: string]: any;
};

export default function Reveal({
  children,
  as = "div",
  className = "",
  delay = 0,
  y = 28,
  stagger = false,
  ...rest
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = stagger ? Array.from(el.children) : el;

    if (reduceMotion) {
      gsap.set(targets, { opacity: 1, y: 0 });
      return;
    }

    gsap.set(targets, { opacity: 0, y, scale: stagger ? 1 : 0.985 });

    const anim = gsap.to(targets, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1.2,
      delay,
      ease: "power4.out",
      stagger: stagger ? 0.1 : 0,
      scrollTrigger: {
        trigger: el,
        start: "top 88%",
        once: true,
      },
    });

    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, [delay, y, stagger]);

  const Comp = as as any;
  return (
    <Comp ref={ref} className={className} {...rest}>
      {children}
    </Comp>
  );
}
