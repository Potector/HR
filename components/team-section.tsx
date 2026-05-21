"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language-context";

export function TeamSection() {
  const { t } = useLanguage();

  return (
    <section id="team" className="gradient-light py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[clamp(2rem,5vw,3rem)] font-bold text-[#002B45] leading-tight mb-14">
          {t.team.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {t.team.members.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

type Member = {
  name: string;
  image: string;
  role: string;
  bio: string;
  tags: readonly string[];
};

function TeamCard({ member }: { member: Member }) {
  return (
    <article className="bg-[#FFF8F4]/90 rounded-[28px] px-8 pt-10 pb-8 shadow-[0_4px_24px_rgba(0,43,69,0.06)] flex flex-col">
      <div className="relative mx-auto mb-8 w-52 h-52">
        {/* Orange circle fills the entire container */}
        <div className="absolute inset-0 rounded-full bg-[#FF5722]" aria-hidden />
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="relative z-10 object-contain object-bottom"
          sizes="208px"
        />
      </div>

      <h3 className="text-[#002B45] font-bold text-[clamp(1.5rem,3vw,1.875rem)] leading-tight">
        {member.name}
      </h3>
      <p className="text-[#002B45] font-bold text-sm mt-1.5">{member.role}</p>

      <p className="text-[#002B45]/75 text-sm leading-relaxed mt-5 flex-1">
        {member.bio}
      </p>

      <div className="flex flex-wrap gap-2.5 mt-8">
        {member.tags.map((tag) => (
          <span
            key={tag}
            className="px-4 py-1.5 rounded-full bg-white text-[#002B45] text-[10px] font-bold tracking-[0.12em] uppercase shadow-[0_1px_4px_rgba(0,43,69,0.06)]"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
