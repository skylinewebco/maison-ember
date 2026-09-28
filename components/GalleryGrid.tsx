"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import { img } from "@/lib/images";

const PAGE_SIZE = 9;

export default function GalleryGrid() {
  const [visible, setVisible] = useState(PAGE_SIZE);
  const items = img.gallery.slice(0, visible);

  return (
    <div className="container-x py-16 md:py-24">
      <Reveal as="div" stagger className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {items.map((item, i) => (
          <div key={i} className={`relative w-full overflow-hidden break-inside-avoid ${item.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
            <Image
              src={item.src}
              alt="Maison Ember dining moment"
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover hover:scale-105 transition-transform duration-700 ease-editorial"
            />
          </div>
        ))}
      </Reveal>

      {visible < img.gallery.length && (
        <div className="flex justify-center mt-14">
          <button
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
            className="border border-ember px-8 py-3 text-xs uppercase tracking-widest2 text-ember hover:bg-ember hover:text-ink transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
