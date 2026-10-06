import { motion } from "motion/react";
import { BarChart2, FileBarChart, FileText, Target, TrendingUp } from "lucide-react";
import CountUp from "../../_components/count-up.tsx";
import { Card, IconTile, Item, SlideHeader, Stagger } from "../_components/ui.tsx";

const R = 62;
const CIRC = 2 * Math.PI * R;

const REPORTS = [
  { icon: Target, title: "Growth Goals", who: "Super Admin", text: "Set quarterly follower targets per college and track progress live." },
  { icon: BarChart2, title: "Approval Analytics", who: "Designer · Social Handler", text: "How many requests, how fast, and how many approved vs rejected." },
  { icon: FileText, title: "Reports", who: "Designer · Social Handler", text: "Ready-made performance reports per platform and period." },
  { icon: FileBarChart, title: "B&M Report", who: "Super Admin", text: "The group-level branding & marketing report for leadership." },
];

export default function Goals() {
  return (
    <Stagger>
      <SlideHeader
        eyebrow="Goals & Reports"
        title="Targets you can see, reports you don't have to build."
        subtitle="Goals turn analytics into accountability; reports turn them into something leadership can read."
      />
      <div className="grid gap-4 lg:grid-cols-[1fr_1.4fr]">
        <Item>
          <Card className="flex h-full flex-col p-6">
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold text-[#0B1437]">Quarterly follower goal</p>
              <span className="rounded-full bg-[#E7F6EC] px-2.5 py-1 text-[11px] font-bold text-[#16A34A]">Achieved</span>
            </div>
            <div className="flex flex-1 flex-col items-center justify-center gap-5 py-4 sm:flex-row">
              <div className="relative size-[160px] shrink-0">
                <svg viewBox="0 0 150 150" className="size-full -rotate-90">
                  <circle cx="75" cy="75" r={R} fill="none" stroke="#E8EAF2" strokeWidth="14" />
                  <motion.circle cx="75" cy="75" r={R} fill="none" stroke="#16A34A" strokeWidth="14" strokeLinecap="round"
                    strokeDasharray={CIRC} initial={{ strokeDashoffset: CIRC }} animate={{ strokeDashoffset: 0 }}
                    transition={{ duration: 1.3, delay: 0.3, ease: "easeOut" }} />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-extrabold text-[#0B1437]"><CountUp to={103} delay={300} />%</span>
                  <span className="text-[11px] text-[#6B7280]">of target</span>
                </div>
              </div>
              <div className="space-y-3">
                <div><p className="text-2xl font-extrabold text-[#0B1437]">+566</p><p className="text-xs text-[#6B7280]">new followers this quarter</p></div>
                <div><p className="text-2xl font-extrabold text-[#0B1437]">550</p><p className="text-xs text-[#6B7280]">quarterly target</p></div>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-[#0F1C4D] px-4 py-3 text-white">
              <TrendingUp className="size-5 shrink-0 text-[#F15A24]" />
              <p className="text-sm"><b>1.11M</b> LinkedIn impressions tracked in the last 365 days · <b>15.8%</b> engagement</p>
            </div>
            <p className="mt-2 text-[11px] text-[#6B7280]">ToriiMinds workspace on t@g, September 2026</p>
          </Card>
        </Item>

        <div className="grid gap-3 sm:grid-cols-2">
          {REPORTS.map(({ icon: Icon, title, who, text }) => (
            <Item key={title}>
              <Card className="flex h-full flex-col p-5">
                <IconTile size="lg"><Icon className="size-5" /></IconTile>
                <p className="mt-4 text-lg font-bold text-[#0B1437]">{title}</p>
                <p className="mt-1 flex-1 text-sm leading-relaxed text-[#6B7280]">{text}</p>
                <span className="mt-4 w-fit rounded-full bg-[#F6F7FB] px-2.5 py-1 text-[11px] font-semibold text-[#0B1437]">{who}</span>
              </Card>
            </Item>
          ))}
        </div>
      </div>
    </Stagger>
  );
}
