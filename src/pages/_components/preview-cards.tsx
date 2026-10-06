import { motion } from "motion/react";
import { Check, Sparkles } from "lucide-react";
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";

const PLATFORMS = [
  { name: "LinkedIn", value: 11914, Icon: LinkedinLogo, chip: "bg-[#0A66C2]" },
  { name: "Facebook", value: 8056, Icon: FacebookLogo, chip: "bg-[#1877F2]" },
  { name: "Instagram", value: 3746, Icon: InstagramLogo, chip: "bg-[#E1306C]" },
  { name: "YouTube", value: 1580, Icon: YoutubeLogo, chip: "bg-[#FF0000]" },
];

function FloatCard({
  children,
  className,
  delay,
  phase,
  duration,
}: {
  children: React.ReactNode;
  className: string;
  delay: number;
  phase: number;
  duration: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration, repeat: Infinity, ease: "easeInOut", delay: phase }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default function PreviewCards() {
  return (
    <div className="relative h-[520px] w-[440px] origin-center scale-[0.8] sm:scale-90 xl:scale-100">
      <FloatCard delay={0.3} phase={0} duration={7} className="absolute left-5 top-12 w-[400px]">
        <div className="rounded-[20px] bg-white p-6 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)]">
          <p className="text-xs font-medium text-[#6B7280]">Total Followers · NCET</p>
          <div className="mt-1 flex items-end justify-between">
            <div>
              <p className="text-4xl font-extrabold tracking-tight text-[#0B1437]">25,296</p>
              <span className="mt-1 inline-block rounded-full bg-[#16A34A]/10 px-2 py-0.5 text-xs font-semibold text-[#16A34A]">
                ↑ 260 in 28 days
              </span>
            </div>
            <svg viewBox="0 0 120 40" className="h-10 w-28" fill="none">
              <path
                d="M0 32 C15 30 20 20 35 22 S55 30 70 18 S95 8 120 4"
                stroke="#0F1C4D"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="mt-5 space-y-3.5">
            {PLATFORMS.map(({ name, value, Icon, chip }) => (
              <div key={name} className="flex items-center gap-3">
                <span className={`flex size-7 shrink-0 items-center justify-center rounded-lg ${chip}`}>
                  <Icon size={15} weight="fill" className="text-white" />
                </span>
                <div className="flex-1">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-[#0B1437]">{name}</span>
                    <span className="font-semibold text-[#0B1437]">{value.toLocaleString()}</span>
                  </div>
                  <div className="mt-1 h-1 rounded-full bg-[#E8EAF2]">
                    <div className="h-1 rounded-full bg-[#0F1C4D]" style={{ width: `${(value / 11914) * 100}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FloatCard>

      <FloatCard delay={0.45} phase={1.5} duration={6} className="absolute -left-4 bottom-4 w-[260px]">
        <div className="rounded-2xl bg-white p-4 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)]">
          <div className="flex items-center gap-2 text-sm font-bold text-[#0B1437]">
            <span className="flex size-6 items-center justify-center rounded-md bg-[#FFF1EB]">
              <Sparkles className="size-3.5 text-[#F15A24]" />
            </span>
            Tago AI
          </div>
          <p className="mt-1.5 text-xs leading-relaxed text-[#6B7280]">
            NCET is making great strides on LinkedIn with consistent audience growth.
          </p>
        </div>
      </FloatCard>

      <FloatCard delay={0.6} phase={3} duration={8} className="absolute -top-2 right-[-8px] w-[230px]">
        <div className="rounded-2xl bg-white p-3.5 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)]">
          <div className="flex items-center gap-2 text-sm font-bold text-[#0B1437]">
            <span className="flex size-5 items-center justify-center rounded-full bg-[#16A34A]">
              <Check className="size-3 text-white" strokeWidth={3} />
            </span>
            Approved
          </div>
          <p className="mt-1 text-xs text-[#0B1437]">Welcome Banner · Graduation Day 2026</p>
          <p className="mt-1 text-[10px] text-[#6B7280]">Coordinator → Designer → Approved</p>
        </div>
      </FloatCard>
    </div>
  );
}
