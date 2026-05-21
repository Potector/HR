"use client";

import { PulseSightLogo } from "./pulsesight-logo";
import { useLanguage } from "@/lib/language-context";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex flex-col gradient-hero-glow overflow-hidden">
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Main content — center-left like the deck cover */}
      <div className="relative flex-1 flex items-center px-6 md:px-16 lg:px-24 pt-24 pb-16">
        <div className="max-w-2xl">
          <PulseSightLogo variant="light" size="lg" className="mb-10" />

          {/* Tagline */}
          <p className="text-[clamp(1.25rem,3.5vw,1.75rem)] text-[#F5E6E0]/90 font-light leading-snug mb-10">
            {t.hero.tagline}
          </p>

          {/* CTA */}
          <a
            href="#contact"
            className="inline-block px-8 py-3.5 rounded-full bg-[#ff693b] text-white font-semibold text-sm tracking-wide hover:bg-[#e85a2e] transition-colors"
          >
            {t.hero.cta}
          </a>
        </div>
      </div>

      {/* Bottom corners — like deck cover */}
      <div className="relative px-6 md:px-16 lg:px-24 pb-8 flex justify-between items-end">
        <span className="text-[11px] text-[#F5E6E0]/35 tracking-widest uppercase">
          {t.hero.badge}
        </span>
        <span className="text-[11px] text-[#F5E6E0]/35 tracking-widest">
          {t.hero.email}
        </span>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-30">
        <div className="w-[1px] h-10 bg-[#F5E6E0] animate-pulse" />
      </div>
    </section>
  );
}
