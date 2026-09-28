import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { restaurant } from "@/lib/data";
import { img } from "@/lib/images";

export default function VisitReservation() {
  return (
    <section className="grid md:grid-cols-2">
      <Reveal className="relative min-h-[520px] md:min-h-[640px]">
        <Image
          src={img.visitExterior}
          alt={`${restaurant.name} entrance in ${restaurant.city}`}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="relative h-full flex flex-col justify-end p-8 md:p-14">
          <span className="eyebrow mb-4">Visit Us</span>
          <h3 className="font-serif text-3xl md:text-4xl text-cream mb-1">{restaurant.name}</h3>
          <p className="text-mute">{restaurant.address}</p>

          <div className="mt-8">
            <span className="eyebrow block mb-2">Open Hours</span>
            <p className="text-cream">{restaurant.hours}</p>
          </div>

          <a
            href="https://maps.google.com/?q=1700+Post+Oak+Blvd+Houston+TX+77056"
            target="_blank"
            rel="noreferrer noopener"
            className="mt-8 inline-block w-fit border-b border-ember text-ember text-xs uppercase tracking-widest2 pb-1 hover:text-ember-light hover:border-ember-light transition-colors"
          >
            Get Directions
          </a>
        </div>
      </Reveal>

      <Reveal className="bg-panel flex items-center">
        <div className="p-8 md:p-14 w-full max-w-md mx-auto">
          <span className="eyebrow block mb-4">Book a Table</span>
          <h3 className="font-serif text-3xl md:text-4xl text-cream mb-6">Reservation</h3>
          <p className="text-mute mb-10">
            Planning an intimate dinner or celebrating something special? Reserve your table at Maison Ember.
          </p>

          <div className="space-y-5 text-sm">
            <span className="eyebrow block">Booking</span>
            <div className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">Email</span>
              <a href={`mailto:${restaurant.email}`} className="text-cream hover:text-ember transition-colors">
                {restaurant.email}
              </a>
            </div>
            <div className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">Call</span>
              <a href={`tel:${restaurant.phone.replace(/[^+\d]/g, "")}`} className="text-cream hover:text-ember transition-colors">
                {restaurant.phone}
              </a>
            </div>
          </div>

          <Link
            href="/contact"
            className="mt-10 inline-block w-full text-center border border-ember bg-ember text-ink px-6 py-3.5 text-xs uppercase tracking-widest2 hover:bg-ember-light hover:border-ember-light transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            Online Reservation
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
