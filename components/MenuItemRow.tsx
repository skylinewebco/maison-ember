import type { MenuItem } from "@/lib/data";

export default function MenuItemRow({ item }: { item: MenuItem }) {
  return (
    <div className="py-4">
      <div className="flex items-end gap-3">
        <div className="flex items-center gap-2 shrink-0">
          <span className="font-serif text-lg md:text-xl text-cream">{item.name}</span>
          {item.badge && (
            <span className="text-[10px] uppercase tracking-widest2 text-ember border border-ember/50 px-2 py-0.5 shrink-0">
              {item.badge}
            </span>
          )}
        </div>
        <span
          className="flex-1 border-b border-dotted border-mute/40 mb-1.5"
          aria-hidden
        />
        <span className="font-serif text-lg md:text-xl text-ember shrink-0">{item.price}</span>
      </div>
      <p className="mt-1 text-sm text-mute">{item.description}</p>
    </div>
  );
}
