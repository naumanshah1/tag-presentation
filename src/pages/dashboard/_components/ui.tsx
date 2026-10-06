import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

/** Brand tokens — same values as the landing page. */
export const C = {
  navy: "#0F1C4D",
  ink: "#0B1437",
  orange: "#F15A24",
  orangeHover: "#E04E1B",
  orangeTint: "#FFF1EB",
  surface: "#F6F7FB",
  border: "#E8EAF2",
  muted: "#6B7280",
  green: "#16A34A",
  red: "#DC2626",
  purple: "#7C3AED",
};

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

/** Wrap a slide (or a group) so its <Item> children animate in one after another. */
export function Stagger({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className={className}>
      {children}
    </motion.div>
  );
}

export function Item({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  );
}

/** Eyebrow → title → subtitle. Identical on every slide. */
export function SlideHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
}) {
  return (
    <Item className="mb-8">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F15A24]">{eyebrow}</p>
      <h1 className="mt-2 text-balance text-[clamp(28px,2.8vw,40px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#0B1437]">
        {title}
      </h1>
      {subtitle && <p className="mt-2 max-w-3xl text-base text-[#6B7280]">{subtitle}</p>}
    </Item>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-[#E8EAF2] bg-white shadow-[0_1px_2px_rgba(15,28,77,0.04),0_8px_24px_-12px_rgba(15,28,77,0.12)] ${className}`}
    >
      {children}
    </div>
  );
}

/** Small rounded icon tile used throughout. */
export function IconTile({
  children,
  tone = "orange",
  size = "md",
}: {
  children: ReactNode;
  tone?: "orange" | "navy" | "green" | "red" | "grey";
  size?: "sm" | "md" | "lg";
}) {
  const tones = {
    orange: "bg-[#FFF1EB] text-[#F15A24]",
    navy: "bg-[#0F1C4D] text-white",
    green: "bg-[#16A34A]/10 text-[#16A34A]",
    red: "bg-[#DC2626]/10 text-[#DC2626]",
    grey: "bg-[#F6F7FB] text-[#6B7280]",
  };
  const sizes = { sm: "size-8 rounded-lg", md: "size-10 rounded-xl", lg: "size-12 rounded-xl" };
  return (
    <span className={`flex shrink-0 items-center justify-center ${tones[tone]} ${sizes[size]}`}>{children}</span>
  );
}

export function Pill({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-[#E8EAF2] bg-white px-3 py-1 text-xs font-medium text-[#0B1437] ${className}`}
    >
      {children}
    </span>
  );
}
