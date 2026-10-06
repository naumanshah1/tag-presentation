import { motion } from "motion/react";
import { CalendarDays, ClipboardList, FilePlus2, Inbox, Palette, Send, UserCheck } from "lucide-react";
import { LinkedinLogo, InstagramLogo, FacebookLogo, YoutubeLogo } from "@phosphor-icons/react";
import { Card, IconTile, Item, SlideHeader, Stagger } from "../_components/ui.tsx";

const QUEUES = [
  {
    title: "Designs to be Done",
    who: "Designer",
    icon: Palette,
    tone: "#0F1C4D",
    cards: ["Day 1 · Personality Development Workshop", "One Day VTU SEEL Workshop", "Main Screen Backdrops"],
  },
  {
    title: "Approvals",
    who: "Reviewer",
    icon: UserCheck,
    tone: "#F15A24",
    cards: ["Selfie Booth · Graduation Day 2026", "Food coupons · Graduation Day 2026"],
  },
  {
    title: "To Be Posted",
    who: "Social Handler",
    icon: Send,
    tone: "#16A34A",
    cards: ["Welcome Banner · Graduation Day 2026", "Stage footer · Graduation Day 2026"],
  },
];

const TOOLS = [
  { icon: FilePlus2, title: "Raise a Request", text: "Coordinators brief the team in one form. No more WhatsApp threads." },
  { icon: Inbox, title: "College Requests", text: "Admins see every incoming request from every college in one inbox." },
  { icon: ClipboardList, title: "Assigned Work", text: "Each person sees exactly what's on their plate, and acknowledges it." },
  { icon: CalendarDays, title: "Post Planner & Calendar", text: "Schedule posts per platform and see the month at a glance." },
];

// Illustrative posting calendar for October 2026 (starts Thursday)
const SCHEDULED: Record<number, string[]> = {
  2: ["li"], 3: ["li", "ig"], 7: ["fb"], 9: ["li", "yt"], 13: ["ig"], 15: ["li"], 17: ["fb", "ig"],
  21: ["li"], 23: ["yt"], 26: ["ig", "li"], 29: ["fb"], 30: ["li"],
};
const DOT: Record<string, { c: string; I: typeof LinkedinLogo }> = {
  li: { c: "#0A66C2", I: LinkedinLogo },
  ig: { c: "#E1306C", I: InstagramLogo },
  fb: { c: "#1877F2", I: FacebookLogo },
  yt: { c: "#FF0000", I: YoutubeLogo },
};

export default function Planning() {
  const lead = 4; // Oct 1 2026 is a Thursday
  const cells = [...Array(lead).fill(null), ...Array.from({ length: 31 }, (_, i) => i + 1)];
  return (
    <Stagger>
      <SlideHeader
        eyebrow="Planning & Publishing"
        title="Clear queues, a shared planner, nothing forgotten."
        subtitle="Every piece of work sits in exactly one queue, with an owner, until it's live."
      />

      <div className="grid gap-4 xl:grid-cols-[1.35fr_1fr]">
        {/* Queues */}
        <Item>
          <Card className="h-full p-5">
            <div className="flex items-center justify-between"><p className="text-sm font-bold text-[#0B1437]">Work queues</p><span className="text-[10px] text-[#6B7280]">Example board · real NCET request titles</span></div>
            <div className="mt-3 grid gap-3 md:grid-cols-3">
              {QUEUES.map((q, qi) => (
                <div key={q.title} className="rounded-xl bg-[#F6F7FB] p-3">
                  <div className="flex items-center gap-2">
                    <span className="flex size-6 items-center justify-center rounded-md text-white" style={{ background: q.tone }}>
                      <q.icon className="size-3.5" />
                    </span>
                    <p className="text-[13px] font-bold text-[#0B1437]">{q.title}</p>
                  </div>
                  <p className="mt-0.5 pl-8 text-[11px] text-[#6B7280]">{q.who}</p>
                  <div className="mt-3 space-y-2">
                    {q.cards.map((c, ci) => (
                      <motion.div
                        key={c}
                        className="rounded-lg border border-[#E8EAF2] bg-white px-3 py-2 text-xs font-medium text-[#0B1437] shadow-[0_1px_2px_rgba(15,28,77,0.05)]"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35 + qi * 0.2 + ci * 0.08 }}
                      >
                        {c}
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </Item>

        {/* Calendar */}
        <Item>
          <Card className="h-full p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold text-[#0B1437]">Posting Calendar · October 2026</p>
              <span className="text-[10px] text-[#6B7280]">Illustrative</span>
            </div>
            <div className="mt-3 grid grid-cols-7 gap-1 text-center text-[10px] font-semibold text-[#6B7280]">
              {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => <span key={i}>{d}</span>)}
            </div>
            <div className="mt-1 grid grid-cols-7 gap-1">
              {cells.map((d, i) =>
                d === null ? (
                  <span key={i} />
                ) : (
                  <motion.div
                    key={i}
                    className={`flex aspect-[1.15] flex-col items-center justify-start rounded-md border pt-1 text-[10px] ${d === 6 ? "border-[#F15A24] bg-[#FFF1EB] font-bold text-[#F15A24]" : "border-[#EEF0F6] text-[#0B1437]"}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 + i * 0.012 }}
                  >
                    {d}
                    <span className="mt-0.5 flex gap-0.5">
                      {(SCHEDULED[d] ?? []).map((k) => (
                        <span key={k} className="size-1.5 rounded-full" style={{ background: DOT[k].c }} />
                      ))}
                    </span>
                  </motion.div>
                ),
              )}
            </div>
            <div className="mt-3 flex flex-wrap gap-3 text-[10px] text-[#6B7280]">
              {Object.entries(DOT).map(([k, { c, I }]) => (
                <span key={k} className="inline-flex items-center gap-1"><I size={11} weight="fill" style={{ color: c }} />{k === "li" ? "LinkedIn" : k === "ig" ? "Instagram" : k === "fb" ? "Facebook" : "YouTube"}</span>
              ))}
            </div>
          </Card>
        </Item>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {TOOLS.map(({ icon: Icon, title, text }) => (
          <Item key={title}>
            <Card className="flex h-full gap-3 p-4">
              <IconTile size="sm"><Icon className="size-4" /></IconTile>
              <div>
                <p className="text-sm font-bold text-[#0B1437]">{title}</p>
                <p className="mt-0.5 text-xs leading-relaxed text-[#6B7280]">{text}</p>
              </div>
            </Card>
          </Item>
        ))}
      </div>
    </Stagger>
  );
}
