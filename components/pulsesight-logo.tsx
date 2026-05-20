import { type HTMLAttributes } from "react";

type Variant = "light" | "dark";

interface Props extends HTMLAttributes<HTMLDivElement> {
  variant?: Variant;
  size?: "sm" | "md" | "lg";
}

export function FourDotIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <circle cx="4"  cy="4"  r="2" />
      <circle cx="12" cy="4"  r="2" />
      <circle cx="4"  cy="12" r="2" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

export function PulseSightLogo({ variant = "light", size = "md", className = "" }: Props) {
  const textColor =
    variant === "light"
      ? "text-[#F5E6E0]"
      : "text-[#0D2B3E]";

  const sizeMap = {
    sm: { brand: "text-xl",   sub: "text-[9px]",  gap: "gap-[2px]" },
    md: { brand: "text-2xl",  sub: "text-[10px]", gap: "gap-[3px]" },
    lg: { brand: "text-4xl",  sub: "text-[13px]", gap: "gap-1"     },
  };

  const s = sizeMap[size];

  return (
    <div className={`flex flex-col items-start ${s.gap} ${textColor} ${className}`}>
      <span
        className={`${s.brand} font-serif font-semibold leading-none tracking-tight`}
        style={{ fontFamily: "var(--font-playfair), serif" }}
      >
        PulseSight.
      </span>
      <span
        className={`flex items-center gap-[5px] ${s.sub} font-sans font-bold tracking-[0.22em] uppercase leading-none opacity-85`}
      >
        HR
        <FourDotIcon className="w-[7px] h-[7px]" />
        CONSULTING
      </span>
    </div>
  );
}
