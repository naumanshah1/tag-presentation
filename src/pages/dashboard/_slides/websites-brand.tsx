import { motion } from "motion/react";
import { Check, Code2, GitBranch, Globe, Loader2, Palette, Server } from "lucide-react";
import { Card, IconTile, Item, SlideHeader, Stagger } from "../_components/ui.tsx";

const R = 54;
const CIRC = 2 * Math.PI * R;

const BRAND_STEPS = [
  { label: "Brand audit", state: "done" },
  { label: "Drafting", state: "active" },
  { label: "Management review", state: "next" },
  { label: "Final release", state: "next", note: "by 31 Dec 2026" },
] as const;

const COVERS = ["Logo & lockups", "Colour palette", "Typography", "Social templates", "Photography", "Tone of voice", "Print & signage", "Web standards"];

export default function WebsitesBrand() {
  return (
    <Stagger>
      <SlideHeader
        eyebrow="Websites & Brand"
        title="Dynamic sites and one brand book, managed in-house."
        subtitle="No more vendor tickets for a text change, and no more five versions of the same logo."
      />
      <div className="grid gap-4 lg:grid-cols-2">
        {/* Websites */}
        <Item>
          <Card className="h-full p-6">
            <div className="flex items-center gap-3">
              <IconTile tone="navy"><Globe className="size-5" /></IconTile>
              <div>
                <p className="font-bold text-[#0B1437]">Websites</p>
                <p className="text-sm text-[#6B7280]">Static & vendor-run → dynamic & in-house</p>
              </div>
            </div>

            <div className="mt-6 flex flex-col items-center gap-6 sm:flex-row">
              <div className="relative size-[150px] shrink-0">
                <svg viewBox="0 0 140 140" className="size-full -rotate-90">
                  <circle cx="70" cy="70" r={R} fill="none" stroke="#E8EAF2" strokeWidth="16" />
                  <motion.circle
                    cx="70" cy="70" r={R} fill="none" stroke="#F15A24" strokeWidth="16" strokeLinecap="round"
                    strokeDasharray={CIRC}
                    initial={{ strokeDashoffset: CIRC }}
                    animate={{ strokeDashoffset: CIRC * 0.2 }}
                    transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-extrabold text-[#0B1437]">80%</span>
                  <span className="text-[11px] text-[#6B7280]">of updates</span>
                </div>
              </div>
              <div className="w-full space-y-3">
                <div className="flex items-start gap-3">
                  <span className="mt-1 size-3 shrink-0 rounded-full bg-[#F15A24]" />
                  <p className="text-sm text-[#0B1437]"><span className="font-bold">80% · College coordinators</span><br /><span className="text-[#6B7280]">News, events, notices, gallery, faculty, admissions</span></p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 size-3 shrink-0 rounded-full bg-[#E8EAF2]" />
                  <p className="text-sm text-[#0B1437]"><span className="font-bold">20% · Central Torii team</span><br /><span className="text-[#6B7280]">Design, structure & technical changes</span></p>
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-2 border-t border-[#E8EAF2] pt-5 text-center">
              {[
                { icon: Server, t: "7 / 8 sites linked" },
                { icon: GitBranch, t: "One central repo" },
                { icon: Code2, t: "Days → minutes" },
              ].map(({ icon: Icon, t }) => (
                <div key={t} className="rounded-xl bg-[#F6F7FB] px-2 py-3">
                  <Icon className="mx-auto size-4 text-[#F15A24]" />
                  <p className="mt-1.5 text-xs font-semibold text-[#0B1437]">{t}</p>
                </div>
              ))}
            </div>
          </Card>
        </Item>

        {/* Brand */}
        <Item>
          <Card className="h-full p-6">
            <div className="flex items-center gap-3">
              <IconTile><Palette className="size-5" /></IconTile>
              <div>
                <p className="font-bold text-[#0B1437]">Brand Guidelines</p>
                <p className="text-sm text-[#6B7280]">One brand book for every institution</p>
              </div>
            </div>

            <ol className="mt-6 space-y-0">
              {BRAND_STEPS.map((s, i) => (
                <motion.li
                  key={s.label}
                  className="relative flex gap-4 pb-5 last:pb-0"
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 + i * 0.15 }}
                >
                  {i < BRAND_STEPS.length - 1 && (
                    <span className={`absolute left-[13px] top-7 h-[calc(100%-20px)] w-0.5 ${s.state === "done" ? "bg-[#16A34A]" : "bg-[#E8EAF2]"}`} />
                  )}
                  <span
                    className={`relative flex size-7 shrink-0 items-center justify-center rounded-full ${
                      s.state === "done"
                        ? "bg-[#16A34A] text-white"
                        : s.state === "active"
                          ? "bg-[#F15A24] text-white"
                          : "border-2 border-[#E8EAF2] bg-white text-[#6B7280]"
                    }`}
                  >
                    {s.state === "done" ? <Check className="size-4" strokeWidth={3} /> : s.state === "active" ? <Loader2 className="size-4 animate-spin [animation-duration:2.5s]" /> : <span className="text-xs font-bold">{i + 1}</span>}
                  </span>
                  <div className="flex flex-1 items-center justify-between gap-2 pt-0.5">
                    <p className="font-semibold text-[#0B1437]">{s.label}</p>
                    <span className={`text-xs font-semibold ${s.state === "done" ? "text-[#16A34A]" : s.state === "active" ? "text-[#F15A24]" : "text-[#6B7280]"}`}>
                      {s.state === "done" ? "Done" : s.state === "active" ? "In progress" : "note" in s ? s.note : "Next"}
                    </span>
                  </div>
                </motion.li>
              ))}
            </ol>

            <div className="mt-6 border-t border-[#E8EAF2] pt-5">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#6B7280]">What it covers</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {COVERS.map((c) => (
                  <span key={c} className="rounded-full bg-[#F6F7FB] px-2.5 py-1 text-xs font-medium text-[#0B1437]">{c}</span>
                ))}
              </div>
            </div>
          </Card>
        </Item>
      </div>
    </Stagger>
  );
}
