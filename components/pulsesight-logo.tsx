import Image from "next/image";
import { type HTMLAttributes } from "react";

type Variant = "light" | "dark";

interface Props extends HTMLAttributes<HTMLDivElement> {
  variant?: Variant;
  size?: "sm" | "md" | "lg";
}

const SIZES = {
  sm: {
    wordmark: { width: 132, height: 32, className: "w-[132px]" },
    tagline: { width: 132, height: 10, className: "w-[132px]" },
    gap: "gap-1",
  },
  md: {
    wordmark: { width: 176, height: 42, className: "w-[176px]" },
    tagline: { width: 176, height: 14, className: "w-[176px]" },
    gap: "gap-1.5",
  },
  lg: {
    wordmark: { width: 420, height: 100, className: "w-[min(420px,72vw)]" },
    tagline: { width: 420, height: 32, className: "w-[min(420px,72vw)]" },
    gap: "gap-2",
  },
} as const;

export function PulseSightLogo({
  variant = "light",
  size = "md",
  className = "",
  ...props
}: Props) {
  const s = SIZES[size];
  const tone = variant === "dark" ? "brightness-0 saturate-100" : "";

  return (
    <div
      className={`flex flex-col items-start ${s.gap} ${className}`}
      {...props}
    >
      <Image
        src="/brand/pulsesight.png"
        alt="PulseSight"
        width={s.wordmark.width}
        height={s.wordmark.height}
        className={`h-auto ${s.wordmark.className} ${tone}`}
        style={{ height: "auto" }}
        priority={size === "lg"}
      />
      <Image
        src="/brand/hr-consulting.png"
        alt="HRxConsulting"
        width={s.tagline.width}
        height={s.tagline.height}
        className={`h-auto ${s.tagline.className} ${tone}`}
        style={{ height: "auto" }}
        priority={size === "lg"}
      />
    </div>
  );
}
