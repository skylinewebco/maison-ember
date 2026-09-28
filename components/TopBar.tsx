import { restaurant } from "@/lib/data";

export default function TopBar() {
  return (
    <div className="hidden md:block relative z-40 border-b border-line bg-ink/40">
      <div className="container-x flex items-center justify-between py-2.5 text-xs uppercase tracking-widest2 text-mute">
        <span>{restaurant.city}</span>
        <div className="flex items-center gap-6">
          <a href={`tel:${restaurant.phone.replace(/[^+\d]/g, "")}`} className="hover:text-cream transition-colors">
            {restaurant.phone}
          </a>
          <span className="w-px h-3 bg-line" aria-hidden />
          <a href={`mailto:${restaurant.email}`} className="hover:text-cream transition-colors">
            {restaurant.email}
          </a>
        </div>
      </div>
    </div>
  );
}
