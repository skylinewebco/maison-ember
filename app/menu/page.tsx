import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import MenuItemRow from "@/components/MenuItemRow";
import VisitReservation from "@/components/VisitReservation";
import { fullMenuCategories } from "@/lib/data";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Menu | Maison Ember",
  description: "The full Maison Ember menu — starters, mains, pasta, sides, desserts and signature cocktails.",
};

export default function MenuPage() {
  return (
    <>
      <PageHero
        src={img.heroMenu}
        eyebrow="The Full Menu"
        title="Our Menu"
        subtitle="Modern European fare, shaped by fire and season."
      />

      <section className="container-x py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-16">
          {fullMenuCategories.map((category) => (
            <Reveal key={category.id} as="div" stagger className="flex flex-col">
              <span className="eyebrow mb-4 border-b border-ember/40 inline-block w-fit pb-1">{category.title}</span>
              <div className="divide-y divide-line">
                {category.items.map((item) => (
                  <MenuItemRow key={item.name} item={item} />
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <a
            href="/maison-ember-menu.pdf"
            className="border border-ember px-8 py-3.5 text-xs uppercase tracking-widest2 text-ember hover:bg-ember hover:text-ink transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            Download Full Menu
          </a>
        </div>
      </section>

      <VisitReservation />
    </>
  );
}
