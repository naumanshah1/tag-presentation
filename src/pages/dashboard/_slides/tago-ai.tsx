import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { LayoutDashboard, LineChart, MessageSquareText, RefreshCw, Sparkles } from "lucide-react";
import { Card, IconTile, Item, SlideHeader, Stagger } from "../_components/ui.tsx";

const INSIGHT = "NCET is making great strides on LinkedIn with consistent audience growth!";

const POINTS = [
  { icon: LineChart, title: "Reads your live analytics", text: "Tago looks at the same numbers as the dashboard: followers, reach and engagement." },
  { icon: MessageSquareText, title: "Explains them in plain language", text: "No charts to decode. Leadership gets a one-line read on what's working." },
  { icon: LayoutDashboard, title: "Built into every dashboard", text: "Admins, coordinators, designers and social handlers all see it the moment they log in." },
];

function useTypewriter(text: string, speed = 28, delay = 600) {
  const [out, setOut] = useState("");
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setOut(text);
      return;
    }
    let i = 0;
    let iv: number | undefined;
    const t = window.setTimeout(() => {
      iv = window.setInterval(() => {
        i += 1;
        setOut(text.slice(0, i));
        if (i >= text.length) window.clearInterval(iv);
      }, speed);
    }, delay);
    return () => {
      window.clearTimeout(t);
      window.clearInterval(iv);
    };
  }, [text, speed, delay]);
  return out;
}

export default function TagoAI() {
  const typed = useTypewriter(INSIGHT);
  const done = typed.length === INSIGHT.length;

  return (
    <Stagger>
      <SlideHeader
        eyebrow="Tago AI"
        title={
          <>
            An analyst built into <span className="text-[#F15A24]">every dashboard.</span>
          </>
        }
        subtitle="Numbers tell you what happened. Tago tells you what it means."
      />
      <div className="grid items-center gap-6 lg:grid-cols-[1.15fr_1fr]">
        <Item>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#141B4D] via-[#2A1E3F] to-[#3B1F2B] p-6 sm:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px]" aria-hidden />
            <div className="absolute -right-16 -top-16 size-72 rounded-full bg-[#F15A24] opacity-25 blur-[90px]" aria-hidden />
            <Card className="relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-[#E8EAF2] bg-[#FFF8F4] px-5 py-4">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#F15A24] to-[#F97316] text-white">
                    <Sparkles className="size-5" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-[#0B1437]">Tago's read on your numbers</p>
                    <p className="text-xs text-[#6B7280]">AI insight from your live analytics</p>
                  </div>
                </div>
                <span className="hidden items-center gap-1.5 rounded-full border border-[#E8EAF2] bg-white px-3 py-1 text-xs font-medium text-[#0B1437] sm:inline-flex">
                  <RefreshCw className="size-3" /> Refresh
                </span>
              </div>
              <div className="p-5">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0A66C2]/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#0A66C2]">
                  LinkedIn
                </span>
                <p className="mt-3 min-h-[3.5rem] text-xl font-bold leading-snug text-[#0B1437]">
                  {typed}
                  {!done && <span className="ml-0.5 inline-block h-5 w-0.5 translate-y-0.5 animate-pulse bg-[#F15A24]" />}
                </p>
                <motion.div
                  className="mt-4 flex flex-wrap gap-2 text-xs"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: done ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <span className="rounded-full bg-[#F6F7FB] px-2.5 py-1 font-medium text-[#0B1437]">11,914 followers</span>
                  <span className="rounded-full bg-[#16A34A]/10 px-2.5 py-1 font-semibold text-[#16A34A]">↑ 217 in 28 days</span>
                  <span className="rounded-full bg-[#F6F7FB] px-2.5 py-1 font-medium text-[#0B1437]">Leading platform</span>
                </motion.div>
              </div>
            </Card>
          </div>
        </Item>

        <div className="space-y-3">
          {POINTS.map(({ icon: Icon, title, text }) => (
            <Item key={title}>
              <Card className="flex gap-4 p-5">
                <IconTile>
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
      </div>
    </Stagger>
  );
}
