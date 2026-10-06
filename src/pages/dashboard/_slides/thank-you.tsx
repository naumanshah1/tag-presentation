import { motion } from "motion/react";
import { ArrowUpRight, LayoutGrid } from "lucide-react";
import type { SlideProps } from "../_data/slides.ts";

export default function ThankYou({ go }: SlideProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative flex min-h-[min(640px,calc(100dvh-200px))] flex-col items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-[#141B4D] via-[#2A1E3F] to-[#3B1F2B] px-6 py-16 text-center text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px]" aria-hidden />
      <div className="absolute left-1/2 top-1/2 size-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F15A24] opacity-20 blur-[120px]" aria-hidden />

      <motion.p
        className="relative text-[40px] font-extrabold tracking-tight"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
      >
        t<span className="text-[#F15A24]">@</span>g
      </motion.p>
      <motion.h1
        className="relative mt-4 text-[clamp(48px,7vw,88px)] font-extrabold leading-none tracking-[-0.03em]"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
      >
        Thank you
      </motion.h1>
      <motion.p
        className="relative mt-4 text-lg text-white/70"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
      >
        Questions &amp; Discussion
      </motion.p>
      <motion.div
        className="relative mt-10 flex flex-wrap justify-center gap-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
      >
        <a
          href="https://tag.ncet.co.in"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 items-center gap-2 rounded-xl bg-[#F15A24] px-6 text-[15px] font-semibold text-white shadow-[0_8px_20px_-6px_rgba(241,90,36,0.55)] transition-all hover:-translate-y-px hover:bg-[#E04E1B]"
        >
          Open t@g · tag.ncet.co.in <ArrowUpRight className="size-4" />
        </a>
        <button
          onClick={() => go("overview")}
          className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/30 px-6 text-[15px] font-semibold text-white transition-all hover:-translate-y-px hover:bg-white/10"
        >
          <LayoutGrid className="size-4" /> Back to Overview
        </button>
      </motion.div>
      <p className="relative mt-12 text-xs text-white/50">
        Presented by Team Torii · Nagarjuna Group of Institutions · October 2026
      </p>
    </motion.div>
  );
}
