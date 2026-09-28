"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const fields = [
  { name: "name", label: "Name", type: "text" },
  { name: "email", label: "Email", type: "email" },
  { name: "phone", label: "Phone", type: "tel" },
] as const;

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <Reveal className="border border-line px-8 py-16 text-center">
        <p className="eyebrow mb-4">Thank You</p>
        <p className="font-serif text-2xl md:text-3xl text-cream">
          Your message has been received. Our team will be in touch shortly.
        </p>
      </Reveal>
    );
  }

  return (
    <Reveal as="form" onSubmit={handleSubmit} className="space-y-8">
      <div className="grid sm:grid-cols-2 gap-8">
        {fields.map((f) => (
          <label key={f.name} className="block">
            <span className="eyebrow block mb-3">{f.label}</span>
            <input
              type={f.type}
              name={f.name}
              required={f.name !== "phone"}
              className="w-full bg-transparent border-b border-line focus:border-ember outline-none py-2 text-cream placeholder:text-mute/50 transition-colors"
              placeholder={f.label}
            />
          </label>
        ))}
      </div>
      <label className="block">
        <span className="eyebrow block mb-3">Message</span>
        <textarea
          name="message"
          required
          rows={4}
          className="w-full bg-transparent border-b border-line focus:border-ember outline-none py-2 text-cream placeholder:text-mute/50 transition-colors resize-none"
          placeholder="Tell us about your visit..."
        />
      </label>
      <button
        type="submit"
        className="border border-ember bg-ember text-ink px-8 py-3.5 text-xs uppercase tracking-widest2 hover:bg-ember-light hover:border-ember-light transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
      >
        Send Message
      </button>
    </Reveal>
  );
}
