"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Reveal from "./Reveal";
import TiltImage from "./TiltImage";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function LayeredMenuImages({
  images,
  title,
}: {
  images: [string, string];
  title: string;
}) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const backRef = useRef<HTMLDivElement | null>(null);
  const frontRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const back = backRef.current;
    const front = frontRef.current;
    if (!wrap || !back || !front) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        back,
        { yPercent: -4 },
        {
          yPercent: 4,
          ease: "none",
          scrollTrigger: { trigger: wrap, start: "top bottom", end: "bottom top", scrub: 0.6 },
        }
      );
      gsap.fromTo(
        front,
        { yPercent: 6 },
        {
          yPercent: -6,
          ease: "none",
          scrollTrigger: { trigger: wrap, start: "top bottom", end: "bottom top", scrub: 0.6 },
        }
      );
    }, wrap);

    return () => ctx.revert();
  }, []);

  return (
    <Reveal className="relative h-[420px] md:h-[520px]">
      <div ref={wrapRef} className="relative w-full h-full">
        <div ref={backRef} className="absolute left-0 top-6 w-[62%] h-[78%] will-change-transform">
          <TiltImage className="relative w-full h-full overflow-hidden" max={4}>
            <Image
              src={images[0]}
              alt={`${title} dish presentation`}
              fill
              sizes="(min-width: 768px) 30vw, 60vw"
              className="object-cover"
            />
          </TiltImage>
        </div>
        <div ref={frontRef} className="absolute right-0 bottom-0 w-[52%] h-[62%] border-4 border-ink shadow-2xl will-change-transform">
          <TiltImage className="relative w-full h-full overflow-hidden" max={4}>
            <Image
              src={images[1]}
              alt={`${title} detail`}
              fill
              sizes="(min-width: 768px) 26vw, 50vw"
              className="object-cover"
            />
          </TiltImage>
        </div>
      </div>
    </Reveal>
  );
}
