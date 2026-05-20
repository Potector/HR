"use client";

import { useLanguage } from "@/lib/language-context";

export function ContactSection() {
  const { t } = useLanguage();
  const mailto = `mailto:${t.contact.email}?subject=Consultoría PulseSight`;

  return (
    <section id="contact" className="gradient-hero py-24 px-6 md:px-16 lg:px-24 relative overflow-hidden">
      {/* Subtle coral radial glow bottom-left */}
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 0% 100%, rgba(255,105,59,0.12) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">
        {/* Left: tagline + body */}
        <div className="max-w-xl">
          <h2
            className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-[#F5E6E0] leading-tight mb-6"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            {t.contact.tagline}
          </h2>
          <p className="text-[#F5E6E0]/65 text-base md:text-lg leading-relaxed">
            {t.contact.body}
          </p>
        </div>

        {/* Right: CTA + email — bottom-right corner like closing slide */}
        <div className="flex flex-col items-start lg:items-end gap-3">
          <a
            href={mailto}
            className="inline-block px-8 py-4 rounded-full bg-[#ff693b] text-white font-semibold text-base tracking-wide hover:bg-[#e85a2e] transition-colors"
          >
            {t.contact.cta}
          </a>
          <a
            href={`mailto:${t.contact.email}`}
            className="text-[#F5E6E0]/40 text-sm hover:text-[#F5E6E0]/70 transition-colors"
          >
            {t.contact.email}
          </a>
        </div>
      </div>
    </section>
  );
}
