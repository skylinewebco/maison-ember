"use client";

import { useState } from "react";
import Reveal from "./Reveal";

export default function Newsletter() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <section className="bg-panel">
      <Reveal className="container-x py-16 md:py-24 text-center flex flex-col items-center">
        <span className="eyebrow mb-5">Stay in the Know</span>
        <h2 className="font-serif text-3xl md:text-5xl text-cream max-w-xl">
          Seasonal menus, special evenings and stories from our kitchen.
        </h2>

        {subscribed ? (
          <p className="mt-8 text-ember">You&rsquo;re on the list. Welcome to Maison Ember.</p>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubscribed(true);
            }}
            className="mt-10 w-full max-w-md flex flex-col sm:flex-row gap-4"
          >
            <input
              type="email"
              required
              placeholder="Your email address"
              className="flex-1 bg-transparent border border-line focus:border-ember outline-none px-4 py-3 text-cream placeholder:text-mute/50 transition-colors"
            />
            <button
              type="submit"
              className="border border-ember bg-ember text-ink px-6 py-3 text-xs uppercase tracking-widest2 hover:bg-ember-light hover:border-ember-light transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shrink-0"
            >
              Subscribe
            </button>
          </form>
        )}
      </Reveal>
    </section>
  );
}
