"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * Wraps an image block and adds a restrained, cursor-driven 3D tilt.
 * Desktop + fine-pointer only; a no-op elsewhere and under reduced motion.
 */
export default function TiltImage({
  children,
  className = "",
  max = 6,
}: {
  children: React.ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const canTilt = window.matchMedia("(hover: hover) and (pointer: fine) and (min-width: 768px)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!canTilt || reduceMotion) return;

    el.style.transformStyle = "preserve-3d";
    el.style.backfaceVisibility = "hidden";

    const rotateX = gsap.quickTo(el, "rotateX", { duration: 0.6, ease: "power3.out" });
    const rotateY = gsap.quickTo(el, "rotateY", { duration: 0.6, ease: "power3.out" });
    const scale = gsap.quickTo(el, "scale", { duration: 0.6, ease: "power3.out" });

    function onEnter() {
      el!.style.willChange = "transform";
    }

    function onMove(e: MouseEvent) {
      const rect = el!.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      rotateX(-py * max);
      rotateY(px * max);
      scale(1.02);
    }

    function onLeave() {
      rotateX(0);
      rotateY(0);
      scale(1);
      gsap.delayedCall(0.6, () => {
        if (el) el.style.willChange = "auto";
      });
    }

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [max]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
