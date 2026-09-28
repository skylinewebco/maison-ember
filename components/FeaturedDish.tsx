"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Reveal from "./Reveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FeaturedDish({
  src,
  eyebrow,
  title,
}: {
  src: string;
  eyebrow: string;
  title: string;
}) {
  const frameRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const frame = frameRef.current;
    const inner = imgRef.current;
    if (!frame || !inner) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    gsap.set(inner, { scale: 1.22 });

    const anim = gsap.to(inner, {
      scale: 1.04,
      ease: "none",
      scrollTrigger: {
        trigger: frame,
        start: "top bottom",
        end: "center center",
        scrub: 0.7,
      },
    });

    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, []);

  return (
    <Reveal className="container-x py-16 md:py-24">
      <div ref={frameRef} className="relative h-[70vh] md:h-[85vh] max-h-[900px] overflow-hidden">
        <div ref={imgRef} className="absolute inset-0 will-change-transform">
          <Image src={src} alt={title} fill sizes="100vw" className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-end text-center pb-12 md:pb-20 px-6">
          <span className="eyebrow mb-4">{eyebrow}</span>
          <h3 className="font-serif italic text-4xl md:text-6xl text-cream">{title}</h3>
        </div>
      </div>
    </Reveal>
  );
}
