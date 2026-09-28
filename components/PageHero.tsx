"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Reveal from "./Reveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function PageHero({
  src,
  eyebrow,
  title,
  subtitle,
}: {
  src: string;
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const imgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const inner = imgRef.current;
    if (!section || !inner) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    gsap.set(inner, { scale: 1.08 });

    const anim = gsap.to(inner, {
      scale: 1.2,
      yPercent: 6,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        scrub: 0.6,
      },
    });

    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[62vh] min-h-[440px] w-full overflow-hidden">
      <div ref={imgRef} className="absolute inset-0 will-change-transform">
        <Image src={src} alt={title} fill priority sizes="100vw" className="object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/50 to-ink" />
      <div className="relative h-full container-x flex flex-col items-center justify-center text-center pt-16">
        <Reveal as="div" stagger className="flex flex-col items-center">
          <span className="eyebrow mb-5">{eyebrow}</span>
          <h1 className="font-serif text-5xl md:text-7xl text-cream">{title}</h1>
          <p className="mt-6 font-serif italic text-lg md:text-2xl text-mute max-w-xl">{subtitle}</p>
        </Reveal>
      </div>
    </section>
  );
}
