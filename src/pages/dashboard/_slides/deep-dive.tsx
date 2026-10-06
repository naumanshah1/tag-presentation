import { motion } from "motion/react";
import { CheckCircle2, FileSpreadsheet, Megaphone, RefreshCw, Upload } from "lucide-react";
import { Card, Item, Pill, SlideHeader, Stagger } from "../_components/ui.tsx";

const EXPORTS = [
  { name: "Content", status: "200 posts" },
  { name: "Followers", status: "Demographics" },
  { name: "Visitors", status: "Demographics" },
  { name: "Competitors", status: "15 pages" },
];

const POSTS = [
  { title: "Beyond the Degree: Learning from Real-World Experience", date: "01 Oct", imp: 2180, clicks: 1276, react: 52 },
  { title: "Just 4 Days to Go: Nagarjuna College of Engineering…", date: "03 Oct", imp: 1558, clicks: 65, react: 29 },
  { title: "Turning logic into code and ambition into success…", date: "02 Oct", imp: 964, clicks: 164, react: 32 },
  { title: "Let us honor the Mahatma by embodying truth…", date: "02 Oct", imp: 448, clicks: 8, react: 32 },
];

const COMPARE = [
  { name: "NCET", v: 11914, c: "#0F1C4D" },
  { name: "ToriiMinds", v: 3873, c: "#F15A24" },
  { name: "NDC", v: 2432, c: "#0369A1" },
  { name: "NCMS", v: 1640, c: "#4D7C0F" },
];

const LINKEDIN_TABS = ["Content", "Visitors", "Followers", "Competitors", "Search appearances", "Leads"];

export default function DeepDive() {
  return (
    <Stagger>
      <SlideHeader
        eyebrow="Analytics Deep Dive"
        title="From group totals down to a single post."
        subtitle="Drill into any college and platform, compare institutions, and track paid promotion, all fed by automatic imports."
      />

      <div className="grid gap-4 xl:grid-cols-[1.5fr_1fr]">
        {/* Post performance */}
        <Item>
          <Card className="h-full p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-sm font-bold text-[#0B1437]">Per organisation · NCET · LinkedIn</p>
              <span className="text-[11px] text-[#6B7280]">Post performance · 200 posts tracked</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {LINKEDIN_TABS.map((t, i) => (
                <span key={t} className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${i === 0 ? "bg-[#0F1C4D] text-white" : "bg-[#F6F7FB] text-[#0B1437]"}`}>{t}</span>
              ))}
            </div>
            <div className="mt-4 overflow-hidden rounded-xl border border-[#E8EAF2]">
              <div className="grid grid-cols-[1fr_80px_64px_72px] gap-2 bg-[#F6F7FB] px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-[#6B7280]">
                <span>Post</span><span className="text-right">Impr.</span><span className="text-right">Clicks</span><span className="text-right">Reactions</span>
              </div>
              {POSTS.map((p, i) => (
                <motion.div
                  key={p.title}
                  className="grid grid-cols-[1fr_80px_64px_72px] items-center gap-2 border-t border-[#E8EAF2] px-3 py-2.5 text-xs"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 + i * 0.1 }}
                >
                  <span className="min-w-0">
                    <span className="block truncate font-semibold text-[#0B1437]">{p.title}</span>
                    <span className="text-[10px] text-[#6B7280]">{p.date} 2026 · Organic</span>
                  </span>
                  <span className="text-right font-semibold tabular-nums text-[#0B1437]">{p.imp.toLocaleString("en-IN")}</span>
                  <span className="text-right tabular-nums text-[#0B1437]">{p.clicks.toLocaleString("en-IN")}</span>
                  <span className="text-right tabular-nums text-[#0B1437]">{p.react}</span>
                </motion.div>
              ))}
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              <Pill>Report</Pill><Pill>Enter metrics</Pill><Pill>Competitors</Pill><Pill>Instagram · YouTube · Facebook views</Pill>
            </div>
          </Card>
        </Item>

        <div className="flex flex-col gap-4">
          {/* Compare */}
          <Item>
            <Card className="p-5">
              <p className="text-sm font-bold text-[#0B1437]">Compare organisations · LinkedIn followers</p>
              <div className="mt-3 space-y-2">
                {COMPARE.map((o, i) => (
                  <div key={o.name} className="grid grid-cols-[76px_1fr_48px] items-center gap-2 text-xs">
                    <span className="text-[#0B1437]">{o.name}</span>
                    <div className="h-3.5 rounded bg-[#F6F7FB]">
                      <motion.div className="h-full rounded" style={{ background: o.c }}
                        initial={{ width: 0 }} animate={{ width: `${(o.v / 11914) * 100}%` }}
                        transition={{ duration: 0.8, delay: 0.4 + i * 0.08 }} />
                    </div>
                    <span className="text-right font-semibold tabular-nums text-[#0B1437]">{o.v.toLocaleString("en-IN")}</span>
                  </div>
                ))}
              </div>
            </Card>
          </Item>

          {/* Data sources */}
          <Item className="flex-1">
            <Card className="h-full p-5">
              <p className="text-sm font-bold text-[#0B1437]">Data flows in automatically</p>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {EXPORTS.map((e) => (
                  <div key={e.name} className="flex items-center gap-2 rounded-lg bg-[#F6F7FB] px-2.5 py-2">
                    <CheckCircle2 className="size-3.5 shrink-0 text-[#16A34A]" />
                    <span className="text-[11px]"><span className="font-semibold text-[#0B1437]">{e.name}</span> <span className="text-[#6B7280]">· {e.status}</span></span>
                  </div>
                ))}
              </div>
              <ul className="mt-3 space-y-2 text-xs text-[#0B1437]">
                <li className="flex items-start gap-2"><Upload className="mt-0.5 size-3.5 shrink-0 text-[#F15A24]" /><span><b>LinkedIn exports</b> merge weekly · 457 days stored (Jul 2025 → Oct 2026)</span></li>
                <li className="flex items-start gap-2"><RefreshCw className="mt-0.5 size-3.5 shrink-0 text-[#F15A24]" /><span><b>Meta auto-sync</b> connected · 8 pages, 8 Instagram accounts</span></li>
                <li className="flex items-start gap-2"><FileSpreadsheet className="mt-0.5 size-3.5 shrink-0 text-[#F15A24]" /><span><b>Weekly Excel import</b> · past data is never removed</span></li>
                <li className="flex items-start gap-2"><Megaphone className="mt-0.5 size-3.5 shrink-0 text-[#F15A24]" /><span><b>Paid promotion</b> tracked separately from organic reach</span></li>
              </ul>
            </Card>
          </Item>
        </div>
      </div>
    </Stagger>
  );
}
