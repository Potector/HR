"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language-context";

export function VisionSection() {
  const { t } = useLanguage();

  return (
    <section id="vision" className="gradient-light py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-[#0D2B3E] leading-tight mb-8">
          {t.vision.title}
        </h2>

        {/* Lead paragraph */}
        <p className="max-w-3xl text-[#0A2533]/80 text-base md:text-lg leading-relaxed mb-16">
          {t.vision.lead}
        </p>

        {/* Two pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {t.vision.pillars.map((pillar) => (
            <div key={pillar.title} className="flex flex-col gap-4">
              <Image
                src="/brand/bullet.png"
                alt=""
                aria-hidden
                width={28}
                height={28}
                className="w-7 h-7"
              />
              <h3 className="text-xl font-bold text-[#0D2B3E]">{pillar.title}</h3>
              <p className="text-[#0A2533]/70 text-sm md:text-base leading-relaxed">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
