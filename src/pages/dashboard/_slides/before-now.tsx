import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Card, Item, SlideHeader, Stagger } from "../_components/ui.tsx";

const ROWS = [
  { area: "Branding platform", before: "No platform; scattered tools", now: "t@g: analytics, approvals, planning & assets" },
  { area: "Brand guidelines", before: "Inconsistent across campuses", now: "One brand book by 31 Dec 2026" },
  { area: "Websites", before: "Static and vendor-dependent", now: "Dynamic, in-house, one repository" },
  { area: "Website updates", before: "Every change via a third party", now: "80% handled by college coordinators" },
  { area: "Approvals", before: "Chased manually, no trail", now: "Role-bounded gates with an audit trail" },
  { area: "Social strategy", before: "Generic posts, organic reach only", now: "Monthly boosted posts + a deck per college" },
  { area: "Intelligence", before: "No single view of performance", now: "Live analytics + Tago AI" },
];

export default function BeforeNow() {
  return (
    <Stagger>
      <SlideHeader
        eyebrow="Before vs Now"
        title="The transformation at a glance."
        subtitle="Seven areas, one direction: from managing overhead to compounding digital value."
      />
      <Item>
        <Card className="overflow-hidden">
          <div className="hidden grid-cols-[200px_1fr_40px_1.2fr] items-center gap-4 border-b border-[#E8EAF2] bg-[#F6F7FB] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.14em] text-[#6B7280] md:grid">
            <span>Area</span>
            <span>Before</span>
            <span />
            <span className="text-[#F15A24]">Now</span>
          </div>
          {ROWS.map((r, i) => (
            <motion.div
              key={r.area}
              className="grid grid-cols-1 gap-1 border-b border-[#E8EAF2] px-6 py-4 last:border-b-0 md:grid-cols-[200px_1fr_40px_1.2fr] md:items-center md:gap-4"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + i * 0.1, duration: 0.35 }}
            >
              <span className="font-bold text-[#0B1437]">{r.area}</span>
              <span className="text-sm text-[#9CA3AF] line-through decoration-[#DC2626]/30">{r.before}</span>
              <ArrowRight className="hidden size-4 text-[#B4BCDB] md:block" />
              <span className="flex items-center gap-2 text-sm font-semibold text-[#0B1437]">
                <CheckCircle2 className="size-4 shrink-0 text-[#F15A24]" />
                {r.now}
              </span>
            </motion.div>
          ))}
        </Card>
      </Item>
    </Stagger>
  );
}
