import { motion } from "motion/react";
import { Check, Flag, Megaphone, Palette, Rocket } from "lucide-react";
import { Card, Item, SlideHeader, Stagger } from "../_components/ui.tsx";

const PHASES = [
  {
    days: "Days 1–30",
    month: "October 2026",
    title: "Complete the Move",
    icon: Rocket,
    items: ["Remaining college sites onto the dynamic platform", "Content audit: remove outdated information", "Onboard & train every college coordinator"],
  },
  {
    days: "Days 31–60",
    month: "November 2026",
    title: "Apply the Brand",
    icon: Palette,
    items: ["Brand guidelines reviewed with management", "Brand applied to websites & social templates", "Refresh content so every site is current"],
  },
  {
    days: "Days 61–90",
    month: "December 2026",
    title: "Roll Out the Strategy",
    icon: Megaphone,
    items: ["Monthly boosted posts for every college", "A dedicated presentation per college", "Final brand guidelines released by 31 Dec"],
  },
];

export default function Roadmap() {
  return (
    <Stagger>
      <SlideHeader
        eyebrow="Next 90 Days"
        title="October to December 2026."
        subtitle="Three phases, each building on the last."
      />

      {/* Timeline bar */}
      <Item className="mb-5 hidden md:block">
        <div className="relative flex items-center justify-between px-1 text-xs font-semibold">
          <span className="z-10 rounded-full bg-[#0F1C4D] px-3 py-1 text-white">Today · 6 Oct</span>
          <span className="z-10 inline-flex items-center gap-1.5 rounded-full bg-[#F15A24] px-3 py-1 text-white">
            <Flag className="size-3" /> Day 90 · 31 Dec 2026
          </span>
          <div className="absolute inset-x-0 top-1/2 h-1 -translate-y-1/2 rounded-full bg-[#E8EAF2]">
            <motion.div
              className="h-full origin-left rounded-full bg-gradient-to-r from-[#0F1C4D] to-[#F15A24]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
            />
          </div>
        </div>
      </Item>

      <div className="grid gap-4 md:grid-cols-3">
        {PHASES.map((p, i) => (
          <Item key={p.title}>
            <Card className="flex h-full flex-col p-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#F15A24]">{p.days}</span>
                <span className="text-xs font-medium text-[#6B7280]">{p.month}</span>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <span className={`flex size-11 items-center justify-center rounded-xl ${i === 2 ? "bg-[#F15A24]" : "bg-[#0F1C4D]"} text-white`}>
                  <p.icon className="size-5" />
                </span>
                <p className="text-lg font-bold text-[#0B1437]">{p.title}</p>
              </div>
              <ul className="mt-5 space-y-3 border-t border-[#E8EAF2] pt-5">
                {p.items.map((it) => (
                  <li key={it} className="flex gap-2.5 text-sm text-[#0B1437]">
                    <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-[#FFF1EB]">
                      <Check className="size-2.5 text-[#F15A24]" strokeWidth={3.5} />
                    </span>
                    {it}
                  </li>
                ))}
              </ul>
            </Card>
          </Item>
        ))}
      </div>

      <Item className="mt-4">
        <div className="grid gap-3 rounded-2xl bg-[#0F1C4D] p-5 text-sm text-white sm:grid-cols-2">
          <p><span className="text-white/50">Today: </span>Sites live on the new platform · guidelines in draft · strategy defined</p>
          <p><span className="text-[#F15A24]">Day 90: </span>Every site dynamic & current · brand live everywhere · strategy running monthly</p>
        </div>
      </Item>
    </Stagger>
  );
}
