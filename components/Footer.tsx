import Link from "next/link";
import { navLinks, restaurant } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-x py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs uppercase tracking-widest2 text-mute">
        <div className="flex items-center gap-6 order-2 md:order-1">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-ember transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-ember transition-colors"
          >
            Facebook
          </a>
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 order-1 md:order-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-ember transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <p className="order-3 text-mute/70">© 2026 {restaurant.name}</p>
      </div>
    </footer>
  );
}
