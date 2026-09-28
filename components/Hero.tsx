"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Reveal from "./Reveal";
import { restaurant } from "@/lib/data";
import { img } from "@/lib/images";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const imgWrapRef = useRef<HTMLDivElement | null>(null);
  const cineRef = useRef<HTMLDivElement | null>(null);
  const scrimRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const imgWrap = imgWrapRef.current;
    const cine = cineRef.current;
    const scrim = scrimRef.current;
    const video = videoRef.current;
    if (!stage || !imgWrap || !cine) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;

    // Autoplay the ambient video only when motion isn't reduced; otherwise the
    // poster frame (the original hero photo) stays put as a static fallback.
    if (video && !reduceMotion) {
      video.play().catch(() => {});
    }

    if (reduceMotion) return;

    gsap.set(stage, { perspective: 1200 });

    // Scroll-linked camera move (unchanged): zoom / tilt / drift as the user scrolls.
    const scrollAnim = gsap.fromTo(
      imgWrap,
      { scale: 1.04, rotateX: 0, yPercent: 0 },
      {
        scale: 1.22,
        rotateX: isDesktop ? -7 : 0,
        yPercent: 7,
        ease: "none",
        scrollTrigger: {
          trigger: stage,
          start: "top top",
          end: "bottom top",
          scrub: 0.7,
        },
      }
    );

    // Cinematic opening shot: an establishing push-in that settles, then a slow,
    // perpetual ken-burns creep + drift so the frame never feels static — a
    // separate element/properties from the scroll camera above, so the two
    // layers compose instead of fighting each other.
    const driftX = isDesktop ? 1.4 : 0.6;
    const driftY = isDesktop ? 1 : 0.5;

    const tl = gsap.timeline({ delay: 0.15 });

    tl.fromTo(
      cine,
      { scale: 1.1, rotateX: isDesktop ? 3 : 0, xPercent: 0, yPercent: 0 },
      { scale: 1, rotateX: 0, duration: 2.6, ease: "power2.out" }
    ).to(
      cine,
      {
        scale: "+=0.045",
        duration: 9,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      },
      ">-0.2"
    );

    if (isDesktop) {
      tl.to(
        cine,
        {
          xPercent: driftX,
          yPercent: driftY,
          duration: 9,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        },
        "<"
      );
    }

    if (scrim) {
      gsap.fromTo(
        scrim,
        { opacity: 0.92 },
        { opacity: 1, duration: 7, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 0.6 }
      );
    }

    return () => {
      scrollAnim.scrollTrigger?.kill();
      scrollAnim.kill();
      tl.kill();
      gsap.killTweensOf(scrim);
    };
  }, []);

  return (
    <section ref={stageRef} className="relative h-[100svh] w-full overflow-hidden bg-ink">
      <div ref={imgWrapRef} className="absolute inset-0 will-change-transform">
        <div ref={cineRef} className="absolute inset-0 will-change-transform">
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            poster={img.heroHome}
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
          >
            <source src={img.heroVideo} type="video/mp4" />
          </video>
        </div>
        <div ref={scrimRef} className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-transparent" />
      </div>

      <div className="relative h-full container-x flex flex-col justify-center pt-20">
        <Reveal as="div" stagger delay={0.35} className="max-w-2xl">
          <p className="font-serif italic text-2xl md:text-3xl text-cream/90 mb-2">Welcome to</p>
          <h1 className="font-serif text-6xl sm:text-7xl lg:text-8xl text-ember leading-[0.95]">
            {restaurant.name}
          </h1>
          <p className="mt-8 text-base md:text-lg text-cream/80 max-w-md">{restaurant.tagline}</p>
          <a
            href="/contact"
            className="mt-10 inline-block border border-ember bg-ember text-ink px-8 py-4 text-xs uppercase tracking-widest2 hover:bg-ember-light hover:border-ember-light transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            Reserve Now
          </a>
        </Reveal>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-mute">
        <span className="text-[10px] uppercase tracking-widest2">Scroll</span>
        <span className="h-10 w-px bg-line" />
      </div>
    </section>
  );
}
