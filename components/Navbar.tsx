"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navLinks } from "@/lib/data";
import TopBar from "./TopBar";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.removeProperty("overflow");
    };
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <TopBar />
      <nav
        className={`transition-colors duration-500 ${
          scrolled || open ? "bg-ink/95 border-b border-line backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <div className="container-x flex items-center justify-between py-5">
          <Link
            href="/"
            className="border border-line px-4 py-2 font-serif text-lg tracking-wide text-cream hover:border-ember transition-colors"
          >
            Maison <span className="text-ember italic">Ember</span>
          </Link>

          <ul className="hidden lg:flex items-center gap-10 text-xs uppercase tracking-widest2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-block text-cream/80 hover:text-ember transition-all duration-300 hover:-translate-y-px"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="hidden lg:inline-block border border-ember px-5 py-2.5 text-xs uppercase tracking-widest2 text-ember hover:bg-ember hover:text-ink transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            Book a Table
          </Link>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center"
          >
            <span
              className={`block h-px w-6 bg-cream transition-transform duration-300 ${
                open ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-cream transition-transform duration-300 ${
                open ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      <div
        className={`lg:hidden fixed inset-x-0 top-[64px] bottom-0 bg-ink transition-transform duration-500 ease-editorial ${
          open ? "translate-y-0" : "-translate-y-[110%]"
        }`}
      >
        <ul className="flex flex-col items-center justify-center h-full gap-8 text-xl font-serif">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} onClick={() => setOpen(false)} className="text-cream hover:text-ember transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-block border border-ember px-6 py-3 text-xs uppercase tracking-widest2 text-ember transition-transform duration-200 active:scale-[0.97]"
            >
              Book a Table
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
