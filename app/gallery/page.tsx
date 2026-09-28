import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import GalleryGrid from "@/components/GalleryGrid";
import VisitReservation from "@/components/VisitReservation";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Gallery | Maison Ember",
  description: "A look inside Maison Ember — dishes, the kitchen, the dining room and the details in between.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        src={img.heroGallery}
        eyebrow="In The Room"
        title="Gallery"
        subtitle="A glimpse into life at Maison Ember."
      />
      <GalleryGrid />
      <VisitReservation />
    </>
  );
}
