"use client";

import { useEffect, useState } from "react";
import type { Testimonial } from "@/lib/data";
import Reveal from "./Reveal";

export default function TestimonialSlider({ items }: { items: Testimonial[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % items.length), 6000);
    return () => clearInterval(t);
  }, [items.length]);

  return (
    <Reveal className="max-w-3xl mx-auto text-center">
      <span className="font-serif text-ember text-7xl leading-none select-none" aria-hidden>
        &ldquo;
      </span>
      <div className="relative min-h-[9rem] md:min-h-[7rem]">
        {items.map((t, i) => (
          <blockquote
            key={t.name}
            className={`absolute inset-0 transition-opacity duration-700 ease-editorial ${
              i === index ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <p className="font-serif text-xl md:text-3xl italic text-cream leading-relaxed">{t.quote}</p>
            <footer className="mt-6 eyebrow">— {t.name}</footer>
          </blockquote>
        ))}
      </div>
      <div className="mt-10 flex items-center justify-center gap-2">
        {items.map((t, i) => (
          <button
            key={t.name}
            aria-label={`Show testimonial from ${t.name}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-6 bg-ember" : "w-1.5 bg-line"
            }`}
          />
        ))}
      </div>
    </Reveal>
  );
}
