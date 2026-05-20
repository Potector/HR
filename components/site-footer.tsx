"use client";

import { PulseSightLogo } from "./pulsesight-logo";
import { useLanguage } from "@/lib/language-context";

export function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#050A14] border-t border-white/5 px-6 md:px-16 lg:px-24 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <PulseSightLogo variant="light" size="sm" />

        <p className="text-[#F5E6E0]/30 text-[12px] tracking-wide">
          {t.footer.tagline}
        </p>

        <p className="text-[#F5E6E0]/25 text-[11px]">
          {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
