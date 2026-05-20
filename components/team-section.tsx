"use client";

import { useLanguage } from "@/lib/language-context";

export function TeamSection() {
  const { t } = useLanguage();

  return (
    <section id="team" className="gradient-light py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[clamp(2rem,5vw,3rem)] font-bold text-[#0D2B3E] leading-tight mb-14">
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
  role: string;
  bio: string;
  tags: readonly string[];
};

function TeamCard({ member }: { member: Member }) {
  const initials = member.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="bg-[#F2F2F2] rounded-3xl p-7 shadow-[0_4px_24px_rgba(0,0,0,0.06)] flex flex-col gap-6">
      {/* Top row: photo + name */}
      <div className="flex items-center gap-5">
        {/* Orange halo + initials placeholder (team photos added by client) */}
        <div className="relative shrink-0">
          <div className="w-16 h-16 rounded-full bg-[#ff693b] flex items-center justify-center">
            <span className="text-white font-bold text-lg tracking-tight">{initials}</span>
          </div>
        </div>

        <div>
          <h3 className="text-[#0D2B3E] font-bold text-xl leading-tight">{member.name}</h3>
          <p className="text-[#0A2533]/60 text-sm mt-0.5">{member.role}</p>
        </div>
      </div>

      {/* Bio */}
      <p className="text-[#0A2533]/70 text-sm leading-relaxed">
        {member.bio}
      </p>

      {/* Pill tags */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {member.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full bg-white text-[#0D2B3E] text-[11px] font-bold tracking-wider uppercase border border-[#0D2B3E]/10"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
