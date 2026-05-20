"use client";

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
          {/* Large serif wordmark */}
          <h1
            className="text-[clamp(3.5rem,10vw,7rem)] font-serif font-semibold leading-[0.9] tracking-tight text-[#F5E6E0] mb-3"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            PulseSight.
          </h1>

          {/* HR ✣ CONSULTING sub-mark */}
          <div className="flex items-center gap-2 mb-10">
            <span className="text-[11px] md:text-[13px] font-bold tracking-[0.3em] uppercase text-[#F5E6E0]/70">
              HR
            </span>
            <svg viewBox="0 0 16 16" fill="currentColor" className="w-2.5 h-2.5 text-[#ff693b]" aria-hidden>
              <circle cx="4" cy="4" r="2" />
              <circle cx="12" cy="4" r="2" />
              <circle cx="4" cy="12" r="2" />
              <circle cx="12" cy="12" r="2" />
            </svg>
            <span className="text-[11px] md:text-[13px] font-bold tracking-[0.3em] uppercase text-[#F5E6E0]/70">
              CONSULTING
            </span>
          </div>

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
