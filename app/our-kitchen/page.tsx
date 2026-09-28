import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import TiltImage from "@/components/TiltImage";
import VisitReservation from "@/components/VisitReservation";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Our Kitchen | Maison Ember",
  description: "Inside the Maison Ember kitchen — chefs, ingredients and a cooking philosophy shaped by fire.",
};

export default function OurKitchenPage() {
  return (
    <>
      <PageHero
        src={img.heroKitchen}
        eyebrow="Behind the Pass"
        title="Our Kitchen"
        subtitle="Crafted over flame. Finished with intention."
      />

      <section className="container-x py-20 md:py-28">
        <Reveal className="relative h-[50vh] md:h-[70vh] max-h-[720px] overflow-hidden group cursor-pointer">
          <Image
            src={img.heroKitchen}
            alt="The Maison Ember kitchen at work over open flame"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-ink/45 group-hover:bg-ink/35 transition-colors" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full border border-cream/60 group-hover:border-ember group-hover:scale-105 transition-all">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="ml-1">
                <path d="M5 3L20 12L5 21V3Z" fill="#f4ede4" />
              </svg>
            </span>
          </div>
          <span className="absolute bottom-8 left-8 eyebrow">Inside The Kitchen</span>
        </Reveal>
      </section>

      <section className="bg-panel py-20 md:py-28">
        <div className="container-x grid md:grid-cols-[0.9fr_1.1fr] gap-12 md:gap-20">
          <SectionHeading align="left" eyebrow="The Mediterranean Kitchen" heading="The Maison Ember Kitchen" />
          <Reveal as="div" className="space-y-6 text-mute text-base md:text-lg leading-relaxed">
            <p>
              Our kitchen is led by a team devoted to technique — years spent over open flame, learning how heat
              transforms simple ingredients into something worth savoring. Every station works in close rhythm, from
              the ember grill to the pass.
            </p>
            <p>
              Ingredients arrive daily from regional farms and trusted purveyors. Nothing is over-engineered; the
              kitchen&rsquo;s job is to bring out what&rsquo;s already there — char, smoke, acid, salt — in careful
              balance.
            </p>
            <p>
              The result is food that feels grounded in classical European technique, but shaped entirely by fire
              and by Houston&rsquo;s own seasons.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionHeading eyebrow="Signature Techniques" heading="Dishes Defined by Flame" />
        </div>

        <div className="mt-14 flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory container-x pb-4">
          {img.kitchenCarousel.map((dish) => (
            <Reveal
              key={dish.name}
              className="relative shrink-0 w-[78%] sm:w-[45%] lg:w-[32%] aspect-[3/4] snap-start overflow-hidden"
            >
              <TiltImage className="absolute inset-0" max={5}>
                <Image
                  src={dish.src}
                  alt={dish.name}
                  fill
                  sizes="(min-width: 1024px) 32vw, (min-width: 640px) 45vw, 78vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
                <span className="absolute bottom-6 left-6 font-serif text-2xl text-cream">{dish.name}</span>
              </TiltImage>
            </Reveal>
          ))}
        </div>
      </section>

      <VisitReservation />
    </>
  );
}
