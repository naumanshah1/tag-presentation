import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { MousePointerClick, SquareDashed, Zap } from "lucide-react";
import CountUp from "../../_components/count-up.tsx";
import { Card, IconTile, Item, SlideHeader, Stagger } from "../_components/ui.tsx";

const LEVELS = ["#EEF0F6", "#C9D3F0", "#93A6E0", "#5577CC", "#2952B3"];
const TODAY = new Date(2026, 9, 6); // 6 Oct 2026
const ACTIVE_FROM = new Date(2026, 7, 1); // activity starts Aug 2026
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// small deterministic PRNG so the pattern is identical on every load
function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type Cell = { date: Date; level: number } | null;

function buildGrid() {
  const rand = mulberry32(42);
  const start = new Date(TODAY);
  start.setDate(start.getDate() - 52 * 7 - TODAY.getDay()); // align to a Sunday, ~1 year back
  const weeks: Cell[][] = [];
  const cursor = new Date(start);
  while (cursor <= TODAY) {
    const week: Cell[] = [];
    for (let d = 0; d < 7; d++) {
      if (cursor > TODAY) week.push(null);
      else {
        let level = 0;
        if (cursor >= ACTIVE_FROM && rand() < 0.62) level = 1 + Math.floor(rand() * 4);
        week.push({ date: new Date(cursor), level });
      }
      cursor.setDate(cursor.getDate() + 1);
    }
    weeks.push(week);
  }
  return weeks;
}

const EXPLAIN = [
  { icon: Zap, title: "High activity", text: "A bright cluster marks a busy day: launches, approvals or bursts of moderation." },
  { icon: SquareDashed, title: "Empty days stay visible", text: "Gaps in platform activity stand out immediately." },
  { icon: MousePointerClick, title: "Click to inspect", text: "Select a day to see exactly who did what. The heatmap doubles as an audit tool." },
];

export default function Audit() {
  const weeks = useMemo(buildGrid, []);
  const [hover, setHover] = useState<string | null>(null);

  return (
    <Stagger>
      <SlideHeader
        eyebrow="Audit Radar"
        title="Every action, by every person, on one timeline."
        subtitle="A 365-day activity heatmap on every dashboard: accountability without asking anyone for a report."
      />

      <Item>
        <Card className="p-6">
          <div className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
            <div className="min-w-0 flex-1 overflow-x-auto pb-1">
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#6B7280]">Activity density · last 365 days</p>
                <p className="h-4 text-xs font-medium text-[#0B1437]">{hover}</p>
              </div>
              <div className="mt-3 inline-flex gap-[3px]">
                {weeks.map((week, wi) => (
                  <div key={wi} className="flex flex-col gap-[3px]">
                    {week.map((cell, di) =>
                      cell ? (
                        <motion.span
                          key={di}
                          className="block size-[11px] rounded-[3px] 2xl:size-[14px]"
                          style={{ background: LEVELS[cell.level] }}
                          initial={cell.level ? { opacity: 0, scale: 0.4 } : false}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + wi * 0.012, duration: 0.25 }}
                          onMouseEnter={() =>
                            setHover(
                              `${cell.date.getDate()} ${MONTHS[cell.date.getMonth()]} · ${cell.level ? "Active day" : "No activity"}`,
                            )
                          }
                          onMouseLeave={() => setHover(null)}
                        />
                      ) : (
                        <span key={di} className="block size-[11px] 2xl:size-[14px]" />
                      ),
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-3 flex items-center gap-1.5 text-[11px] text-[#6B7280]">
                Less
                {LEVELS.map((c) => (
                  <span key={c} className="size-[11px] rounded-[3px]" style={{ background: c }} />
                ))}
                More
                <span className="ml-auto">Oct 2025 → Oct 2026 · illustrative pattern</span>
              </div>
            </div>

            <div className="grid shrink-0 grid-cols-2 gap-3 xl:w-[260px]">
              {[
                { v: 512, l: "Actions" },
                { v: 41, l: "Active days", suffix: " / 365" },
                { v: 1.4, l: "Daily average", d: 1 },
                { v: 35, l: "Best day" },
              ].map((s) => (
                <div key={s.l} className="rounded-xl bg-[#0F1C4D] px-4 py-3 text-white">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/55">{s.l}</p>
                  <p className="mt-1 text-2xl font-extrabold tabular-nums">
                    <CountUp to={s.v} decimals={s.d ?? 0} />
                    {s.suffix && <span className="text-sm font-semibold text-white/50">{s.suffix}</span>}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </Item>

      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {EXPLAIN.map(({ icon: Icon, title, text }) => (
          <Item key={title}>
            <Card className="flex h-full gap-4 p-5">
              <IconTile tone="navy">
                <Icon className="size-5" />
              </IconTile>
              <div>
                <p className="font-bold text-[#0B1437]">{title}</p>
                <p className="mt-1 text-sm leading-relaxed text-[#6B7280]">{text}</p>
              </div>
            </Card>
          </Item>
        ))}
      </div>
    </Stagger>
  );
}
