import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MotionConfig, motion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";
import CountUp from "./_components/count-up.tsx";
import PreviewCards from "./_components/preview-cards.tsx";

const STATS = [
  { value: 58687, label: "Total audience" },
  { value: 8, label: "Organisations" },
  { value: 4, label: "Platforms" },
  { value: 4, label: "Role-based logins" },
];

const NETWORK_ICONS = [LinkedinLogo, InstagramLogo, YoutubeLogo, FacebookLogo];

const rise = (i: number) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, delay: i * 0.08, ease: "easeOut" as const },
});

export default function Index() {
  const navigate = useNavigate();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === "ArrowRight") navigate("/dashboard");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [navigate]);

  return (
    <MotionConfig reducedMotion="user">
      <div className="flex min-h-dvh w-full flex-col bg-white lg:h-dvh lg:flex-row lg:overflow-hidden">
        {/* Left column */}
        <section className="flex flex-col justify-between gap-12 bg-white px-6 py-10 sm:px-12 lg:w-[55%] lg:gap-6 lg:px-20 lg:py-16">
          <motion.div {...rise(0)} className="flex items-center gap-4">
            <span className="text-[28px] font-extrabold tracking-tight text-[#0B1437]">
              t<span className="text-[#F15A24]">@</span>g
            </span>
            <span className="h-6 w-px bg-[#E8EAF2]" />
            <span className="text-sm text-[#6B7280]">Digital Pulse of NGI</span>
          </motion.div>

          <div>
            <motion.span
              {...rise(1)}
              className="inline-flex items-center gap-2 rounded-full bg-[#FFF1EB] px-3.5 py-1.5 text-xs font-semibold text-[#F15A24]"
            >
              <span className="size-1.5 rounded-full bg-[#F15A24]" />
              Branding &amp; Digital Governance Platform
            </motion.span>
            <motion.h1
              {...rise(2)}
              className="mt-6 text-balance text-[clamp(40px,5vw,72px)] font-extrabold leading-[1.05] tracking-[-0.02em] text-[#0B1437]"
            >
              One intelligent engine for your entire{" "}
              <span className="text-[#F15A24]">digital footprint.</span>
            </motion.h1>
            <motion.p {...rise(3)} className="mt-6 max-w-[560px] text-lg leading-[1.6] text-[#6B7280]">
              t@g replaces scattered chats, lost files and manual follow-ups with one role-bounded workflow, protecting brand integrity through approval gates and turning every digital interaction into live business intelligence.
            </motion.p>
            <motion.div {...rise(4)} className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => navigate("/dashboard")}
                className="inline-flex h-12 cursor-pointer items-center gap-2 rounded-xl bg-[#F15A24] px-6 text-[15px] font-semibold text-white shadow-[0_8px_20px_-6px_rgba(241,90,36,0.55)] transition-all hover:-translate-y-px hover:bg-[#E04E1B]"
              >
                Explore t@g <ArrowRight className="size-4" />
              </button>
              <a
                href="https://tag.ncet.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 cursor-pointer items-center gap-2 rounded-xl border border-[#E8EAF2] px-6 text-[15px] font-semibold text-[#0F1C4D] transition-all hover:-translate-y-px hover:bg-[#F6F7FB]"
              >
                Visit tag.ncet.co.in <ArrowUpRight className="size-4" />
              </a>
            </motion.div>
          </div>

          <motion.div {...rise(5)}>
            <div className="grid grid-cols-2 gap-y-6 sm:flex sm:gap-0">
              {STATS.map((s, i) => (
                <div
                  key={s.label}
                  className={`sm:px-6 sm:first:pl-0 ${i > 0 ? "sm:border-l sm:border-[#E8EAF2]" : ""}`}
                >
                  <p className="text-[32px] font-bold leading-none tracking-tight text-[#0B1437]">
                    <CountUp to={s.value} />
                  </p>
                  <p className="mt-1.5 text-[13px] text-[#6B7280]">{s.label}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-[#6B7280]">
              Presented to the College Management · Nagarjuna Group of Institutions · Team Torii · October 2026
            </p>
          </motion.div>
        </section>

        {/* Right column */}
        <section className="relative flex min-h-[520px] flex-1 items-center justify-center overflow-hidden bg-gradient-to-br from-[#141B4D] via-[#2A1E3F] to-[#3B1F2B] py-16 lg:min-h-0 lg:w-[45%] lg:flex-none">
          <div
            className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px]"
            aria-hidden
          />
          <div className="absolute left-1/2 top-1/2 size-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F15A24] opacity-25 blur-[120px]" aria-hidden />

          <div className="absolute right-6 top-6 flex items-center gap-4 text-white sm:right-8 sm:top-8">
            <span className="hidden text-xs text-white/60 sm:inline">Press → or Enter</span>
            <button
              onClick={() => navigate("/dashboard")}
              className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-white/40 px-3.5 py-1.5 text-sm font-semibold transition-all hover:-translate-y-px hover:bg-white/10"
            >
              Begin <ArrowRight className="size-3.5" />
            </button>
          </div>

          <div className="relative">
            <PreviewCards />
          </div>

          <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-2 px-4 text-xs text-white/60 sm:bottom-8">
            {NETWORK_ICONS.map((Icon, i) => (
              <Icon key={i} size={14} weight="fill" />
            ))}
            <span>LinkedIn · Instagram · YouTube · Facebook</span>
          </div>
        </section>
      </div>
    </MotionConfig>
  );
}
