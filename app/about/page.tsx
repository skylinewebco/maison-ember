import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import TiltImage from "@/components/TiltImage";
import VisitReservation from "@/components/VisitReservation";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "About | Maison Ember",
  description: "The philosophy behind Maison Ember — fire, seasonality, craftsmanship and hospitality in Houston, Texas.",
};

const philosophyPoints = [
  {
    title: "Fire as Craft",
    text: "Every dish passes near the ember at some point in its journey — a technique, not a gimmick, that draws out depth in even the simplest ingredients.",
  },
  {
    title: "Seasonal First",
    text: "Our menu shifts with the market. Ingredients are sourced for peak flavor, not convenience, and the kitchen adapts week to week.",
  },
  {
    title: "Quiet Hospitality",
    text: "Service at Maison Ember is attentive without being intrusive — the room is designed to feel like a private dining room among friends.",
  },
  {
    title: "Considered Craft",
    text: "From the plates to the pour, every detail is chosen with intention. Nothing on the table is accidental.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        src={img.heroAbout}
        eyebrow="Our Story"
        title="About Maison Ember"
        subtitle="Where fire meets finesse."
      />

      <section className="container-x py-20 md:py-28">
        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-12 md:gap-20">
          <SectionHeading align="left" eyebrow="Our Mission" heading="A restaurant built around fire and intention." />
          <Reveal as="div" className="space-y-6 text-mute text-base md:text-lg leading-relaxed">
            <p>
              Maison Ember was founded on a simple belief: that the most memorable meals come from restraint, not
              excess. Modern European technique meets the primal warmth of the ember — every course shaped by fire,
              finished by hand.
            </p>
            <p>
              Set along Post Oak Boulevard, the dining room was designed to feel intimate even on its busiest
              nights — low light, warm materials, and a kitchen open enough to feel like part of the conversation.
            </p>
            <p>
              We work with seasonal, thoughtfully sourced ingredients and let them speak plainly. The result is food
              that feels honest, generous, and quietly luxurious — an evening meant to be lingered over.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-panel py-20 md:py-28">
        <div className="container-x">
          <SectionHeading eyebrow="Our Philosophy" heading="Four ideas that guide every service" />

          <div className="mt-16 grid md:grid-cols-2 gap-x-16 gap-y-20">
            {philosophyPoints.map((point, i) => (
              <div key={point.title} className={`flex flex-col md:flex-row gap-8 items-center ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                <Reveal className="relative w-full max-w-[260px] aspect-[3/4] shrink-0 rounded-t-[140px] border border-line">
                  <TiltImage className="relative w-full h-full overflow-hidden rounded-t-[136px]" max={5}>
                    <Image
                      src={img.philosophy[i]}
                      alt={point.title}
                      fill
                      sizes="260px"
                      className="object-cover"
                    />
                  </TiltImage>
                </Reveal>
                <Reveal as="div" delay={0.1}>
                  <span className="eyebrow">{`0${i + 1}`}</span>
                  <h3 className="font-serif text-2xl md:text-3xl text-cream mt-3 mb-4">{point.title}</h3>
                  <p className="text-mute leading-relaxed">{point.text}</p>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      <VisitReservation />
    </>
  );
}
