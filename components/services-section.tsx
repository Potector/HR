"use client";

import { useLanguage } from "@/lib/language-context";

export function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section id="services" className="gradient-services py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Heading row with decorative arrow */}
        <div className="flex items-start gap-4 mb-4">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6 text-[#F5E6E0]/30 mt-1 shrink-0" aria-hidden>
            <polyline points="4 8 4 4 8 4" />
            <line x1="4" y1="4" x2="14" y2="14" />
          </svg>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-[#F5E6E0] leading-tight">
            {t.services.title}
          </h2>
        </div>

        {/* 4-column grid — slide 4 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-14">
          {t.services.items.map((item) => (
            <div key={item.number} className="flex flex-col gap-5">
              {/* Orange circle with number */}
              <div className="w-10 h-10 rounded-full bg-[#F26522] flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-sm leading-none">{item.number}</span>
              </div>

              <h3 className="text-[#F5E6E0] font-bold text-lg leading-snug">
                {item.title}
              </h3>

              <p className="text-[#8E9499] text-sm leading-relaxed">
                {item.body}
              </p>

              {/* Highlights */}
              <ul className="flex flex-col gap-2 mt-1">
                {item.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-[#8E9499] text-[13px] leading-relaxed">
                    <span className="text-[#ff693b] mt-0.5 shrink-0">—</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Summary note — slide 4 bottom-right orange text */}
        <div className="flex justify-end mt-14">
          <div className="flex items-start gap-3 max-w-md">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-[#ff693b] mt-0.5 shrink-0" aria-hidden>
              <polyline points="5 12 12 5 19 12" />
              <line x1="12" y1="5" x2="12" y2="19" />
            </svg>
            <p className="text-[#ff693b] text-sm leading-relaxed">
              {t.services.summary}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
