"use client";

import { useLanguage } from "@/lib/language-context";

export function WhyUsSection() {
  const { t } = useLanguage();

  return (
    <section id="why-us" className="gradient-dark-glow py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-[#F5E6E0] leading-tight mb-6">
          {t.whyUs.title}
        </h2>

        {/* Lead */}
        <p className="max-w-3xl text-[#F5E6E0]/60 text-base md:text-lg leading-relaxed mb-14">
          {t.whyUs.lead}
        </p>

        {/* Cards — 4-column like slide 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {t.whyUs.pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="relative flex flex-col gap-4 rounded-2xl overflow-hidden"
              style={{ background: "#0d2b3e" }}
            >
              {/* Coral top bar */}
              <div className="h-1 w-full bg-[#ff693b]" />

              <div className="px-6 pb-8 flex flex-col gap-3">
                {/* Large number */}
                <span className="text-[2.5rem] font-bold leading-none text-[#ff693b]">
                  {pillar.number}.
                </span>
                <h3 className="text-[#F5E6E0] font-semibold text-base leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-[#F5E6E0]/55 text-sm leading-relaxed">
                  {pillar.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
