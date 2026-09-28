import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import Newsletter from "@/components/Newsletter";
import VisitReservation from "@/components/VisitReservation";
import { restaurant } from "@/lib/data";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Contact | Maison Ember",
  description: "Get in touch with Maison Ember in Houston, Texas — address, phone, email and reservations.",
};

const details = [
  { label: "Address", value: `${restaurant.address}` },
  { label: "Phone", value: restaurant.phone, href: `tel:${restaurant.phone.replace(/[^+\d]/g, "")}` },
  { label: "Email", value: restaurant.email, href: `mailto:${restaurant.email}` },
  { label: "Hours", value: restaurant.hours },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        src={img.heroContact}
        eyebrow="Reach Out"
        title="Contact Maison Ember"
        subtitle="We'd love to host you."
      />

      <section className="container-x py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <SectionHeading align="left" eyebrow="Get In Touch" heading="We're here to help" />
            <Reveal as="dl" stagger className="mt-10 space-y-6">
              {details.map((d) => (
                <div key={d.label} className="flex flex-col border-b border-line pb-5">
                  <dt className="eyebrow mb-2">{d.label}</dt>
                  <dd className="text-cream text-lg">
                    {d.href ? (
                      <a href={d.href} className="hover:text-ember transition-colors">
                        {d.value}
                      </a>
                    ) : (
                      d.value
                    )}
                  </dd>
                </div>
              ))}
            </Reveal>
          </div>

          <ContactForm />
        </div>
      </section>

      <Reveal className="container-x pb-20 md:pb-28">
        <div className="relative w-full h-[420px] border border-line grayscale hover:grayscale-0 transition-all duration-700">
          <iframe
            title="Map to Maison Ember, Houston, Texas"
            src="https://maps.google.com/maps?q=1700+Post+Oak+Blvd,+Houston,+TX+77056&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="absolute inset-0 w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Reveal>

      <Newsletter />
      <VisitReservation />
    </>
  );
}
