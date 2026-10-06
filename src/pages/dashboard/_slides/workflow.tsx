import { motion } from "motion/react";
import { CalendarClock, CheckCircle2, FilePlus2, Palette, Send, ShieldCheck } from "lucide-react";
import { Card, Item, SlideHeader, Stagger } from "../_components/ui.tsx";

const STEPS = [
  { icon: FilePlus2, title: "Raise Request", who: "Coordinator" },
  { icon: Palette, title: "Design", who: "Designer" },
  { icon: ShieldCheck, title: "Review & Approve", who: "Approval gate", gate: true },
  { icon: CalendarClock, title: "Schedule", who: "Post Planner" },
  { icon: Send, title: "Publish & Measure", who: "Social Handler" },
];

const STATUSES = [
  { label: "Pending", color: "#F59E0B" },
  { label: "Approved", color: "#16A34A" },
  { label: "Rejected", color: "#DC2626" },
  { label: "Posted", color: "#7C3AED" },
  { label: "Delivered", color: "#0B1437" },
];

const FEED = [
  { kind: "Request raised", text: "Main Screen Backdrops", color: "#F59E0B" },
  { kind: "Design submitted", text: "Two-Day Workshop on Personality Development", color: "#0F1C4D" },
  { kind: "Approved", text: "Welcome Banner · UG & PG Graduation Day 2026", color: "#16A34A" },
  { kind: "Approved", text: "Stage footer · UG & PG Graduation Day 2026", color: "#16A34A" },
];

export default function Workflow() {
  return (
    <Stagger>
      <SlideHeader
        eyebrow="Request-to-Post Workflow"
        title="From idea to published post, with an approval gate at every step."
        subtitle="Every request has an owner, a status and a history. Nothing goes live without sign-off."
      />

      {/* Flow */}
      <Item>
        <Card className="px-6 py-8">
          <div className="relative grid grid-cols-1 gap-6 md:grid-cols-5 md:gap-2">
            {/* connector line (desktop) */}
            <div className="absolute left-[10%] right-[10%] top-7 hidden h-0.5 bg-[#E8EAF2] md:block">
              <motion.div
                className="h-full origin-left bg-[#F15A24]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.1, delay: 0.3, ease: "easeInOut" }}
              />
            </div>
            {STEPS.map((s, i) => (
              <motion.div
                key={s.title}
                className="relative flex items-center gap-4 md:flex-col md:text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.22, duration: 0.35 }}
              >
                <span
                  className={`relative flex size-14 shrink-0 items-center justify-center rounded-2xl border-4 border-white ${
                    s.gate
                      ? "bg-[#F15A24] text-white shadow-[0_10px_24px_-8px_rgba(241,90,36,0.7)]"
                      : "bg-[#0F1C4D] text-white"
                  }`}
                >
                  <s.icon className="size-6" />
                </span>
                <div className="md:mt-3">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#6B7280]">Step {i + 1}</p>
                  <p className="font-bold text-[#0B1437]">{s.title}</p>
                  <p className={`text-sm ${s.gate ? "font-semibold text-[#F15A24]" : "text-[#6B7280]"}`}>{s.who}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Card>
      </Item>

      <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_1.4fr]">
        <Item>
          <Card className="h-full p-6">
            <p className="font-bold text-[#0B1437]">Live status, always visible</p>
            <p className="mt-1 text-sm text-[#6B7280]">Every request carries one of five states, the same ones used in the portal.</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {STATUSES.map((s) => (
                <span
                  key={s.label}
                  className="inline-flex items-center gap-2 rounded-full border border-[#E8EAF2] px-3 py-1.5 text-sm font-medium text-[#0B1437]"
                >
                  <span className="size-2.5 rounded-full" style={{ background: s.color }} />
                  {s.label}
                </span>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-3 rounded-xl bg-[#F6F7FB] p-4">
              <CheckCircle2 className="size-5 shrink-0 text-[#16A34A]" />
              <p className="text-sm text-[#0B1437]">
                <span className="font-bold">37 requests approved</span> for NCET's coordinator since July.
              </p>
            </div>
          </Card>
        </Item>
        <Item>
          <Card className="h-full p-6">
            <div className="flex items-center justify-between">
              <p className="font-bold text-[#0B1437]">Recent activity · NCET</p>
              <span className="flex items-center gap-1.5 text-xs font-medium text-[#16A34A]">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#16A34A] opacity-60" />
                  <span className="relative inline-flex size-2 rounded-full bg-[#16A34A]" />
                </span>
                Live
              </span>
            </div>
            <ul className="mt-4 divide-y divide-[#E8EAF2]">
              {FEED.map((f, i) => (
                <motion.li
                  key={i}
                  className="flex items-center gap-3 py-3"
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + i * 0.15 }}
                >
                  <span className="size-2 shrink-0 rounded-full" style={{ background: f.color }} />
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-[#0B1437]">{f.kind}</p>
                    <p className="truncate text-sm text-[#6B7280]">{f.text}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </Card>
        </Item>
      </div>
    </Stagger>
  );
}
