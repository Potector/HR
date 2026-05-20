"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { PulseSightLogo } from "./pulsesight-logo";
import { useLanguage } from "@/lib/language-context";
import type { Lang } from "@/lib/site-content";

export function SiteHeader() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#vision",   label: t.nav.vision   },
    { href: "#why-us",   label: t.nav.whyUs    },
    { href: "#services", label: t.nav.services  },
    { href: "#team",     label: t.nav.team      },
    { href: "#contact",  label: t.nav.contact   },
  ];

  const toggle = (l: Lang) => { setLang(l); setMenuOpen(false); };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050A14]/92 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between h-16 md:h-18">
        {/* Logo */}
        <a href="#" aria-label="PulseSight HR Consulting">
          <PulseSightLogo variant="light" size="sm" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-[13px] font-medium tracking-wide">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[#F5E6E0]/70 hover:text-[#F5E6E0] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Lang toggle + CTA */}
        <div className="hidden md:flex items-center gap-4">
          <LangToggle lang={lang} onToggle={toggle} />
          <a
            href="#contact"
            className="px-4 py-2 rounded-full bg-[#ff693b] text-white text-[13px] font-semibold tracking-wide hover:bg-[#e85a2e] transition-colors"
          >
            {t.hero.cta}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#F5E6E0]/80 hover:text-[#F5E6E0]"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-[#050A14]/98 backdrop-blur-md border-t border-white/5 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#F5E6E0]/80 hover:text-[#F5E6E0] text-base font-medium transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="flex items-center gap-4 pt-2 border-t border-white/10">
            <LangToggle lang={lang} onToggle={toggle} />
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="flex-1 text-center px-4 py-2 rounded-full bg-[#ff693b] text-white text-sm font-semibold hover:bg-[#e85a2e] transition-colors"
            >
              {t.hero.cta}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function LangToggle({ lang, onToggle }: { lang: Lang; onToggle: (l: Lang) => void }) {
  return (
    <div className="flex items-center rounded-full border border-white/20 overflow-hidden text-[12px] font-bold tracking-widest">
      {(["es", "en"] as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => onToggle(l)}
          className={`px-3 py-1 uppercase transition-colors ${
            lang === l
              ? "bg-[#ff693b] text-white"
              : "text-[#F5E6E0]/60 hover:text-[#F5E6E0]"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
