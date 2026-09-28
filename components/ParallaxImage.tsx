"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ParallaxImage({
  src,
  alt,
  height = "70vh",
  speed = 1,
}: {
  src: string;
  alt: string;
  height?: string;
  /** relative parallax intensity — pass different values across a page for layered motion */
  speed?: number;
}) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const inner = imgRef.current;
    if (!wrap || !inner) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const travel = 9 * speed;
    gsap.set(inner, { scale: 1.15 });

    const anim = gsap.fromTo(
      inner,
      { yPercent: -travel, scale: 1.15 },
      {
        yPercent: travel,
        scale: 1.28,
        ease: "none",
        scrollTrigger: {
          trigger: wrap,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.6,
        },
      }
    );

    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, [speed]);

  return (
    <div ref={wrapRef} className="relative w-full overflow-hidden" style={{ height }}>
      <div ref={imgRef} className="absolute inset-0 will-change-transform">
        <Image src={src} alt={alt} fill sizes="100vw" className="object-cover" />
      </div>
      <div className="absolute inset-0 bg-ink/25" />
    </div>
  );
}
