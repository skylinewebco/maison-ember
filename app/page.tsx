import Link from "next/link";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import MenuSection from "@/components/MenuSection";
import FeaturedDish from "@/components/FeaturedDish";
import ParallaxImage from "@/components/ParallaxImage";
import TestimonialSlider from "@/components/TestimonialSlider";
import VisitReservation from "@/components/VisitReservation";
import { homeMenuCategories, testimonials } from "@/lib/data";
import { img } from "@/lib/images";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="pt-20 md:pt-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Maison Ember Picks"
            heading="Selected Menus"
            subtitle="Thoughtfully crafted dishes, seasonal ingredients and flavors shaped by fire."
          />
        </div>

        <div className="mt-8 md:mt-4">
          {homeMenuCategories.map((category, i) => (
            <div key={category.id}>
              <MenuSection
                category={category}
                images={
                  i % 4 === 0
                    ? img.menuStarters as [string, string]
                    : i % 4 === 1
                    ? img.menuMains as [string, string]
                    : i % 4 === 2
                    ? img.menuPasta as [string, string]
                    : img.menuDesserts as [string, string]
                }
                reverse={i % 2 === 1}
              />
              {i < homeMenuCategories.length - 1 && <div className="container-x"><div className="hairline" /></div>}
            </div>
          ))}
        </div>
      </section>

      <FeaturedDish src={img.featuredDish} eyebrow="Maison Ember Signature" title="Ember-Grilled Prime Steak" />

      <div className="container-x pb-16 md:pb-24 flex flex-col sm:flex-row items-center justify-center gap-5">
        <Link
          href="/menu"
          className="border border-ember bg-ember text-ink px-8 py-3.5 text-xs uppercase tracking-widest2 hover:bg-ember-light hover:border-ember-light transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          View Full Menu
        </Link>
        <Link
          href="/maison-ember-menu.pdf"
          className="border border-line px-8 py-3.5 text-xs uppercase tracking-widest2 text-cream hover:border-ember hover:text-ember transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Download Menu PDF
        </Link>
      </div>

      <ParallaxImage src={img.parallaxWide} alt="The dining room at Maison Ember at dusk" height="60vh" />

      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[radial-gradient(circle_at_50%_0%,#c9612b,transparent_60%)]" />
        </div>
        <div className="container-x relative">
          <TestimonialSlider items={testimonials} />
        </div>
      </section>

      <VisitReservation />
    </>
  );
}
