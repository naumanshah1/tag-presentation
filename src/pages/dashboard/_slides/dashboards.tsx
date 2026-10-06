import { motion } from "motion/react";
import { CheckCircle2, Clock, FileText, Layers, LayoutTemplate, Send, XCircle } from "lucide-react";
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";
import CountUp from "../../_components/count-up.tsx";
import { Card, Item, SlideHeader, Stagger } from "../_components/ui.tsx";

// Live figures from the NCET Coordinator login, 6 Oct 2026
const COUNTERS = [
  { label: "My pending", value: 1, icon: Clock },
  { label: "My approved", value: 37, icon: CheckCircle2 },
  { label: "My rejected", value: 1, icon: XCircle },
  { label: "My posted", value: 2, icon: Send },
];
const LIBRARY = [
  { label: "Templates", value: 6, icon: LayoutTemplate },
  { label: "Assets", value: 3, icon: Layers },
];

const PLATFORMS = [
  { name: "LinkedIn", value: "12k", delta: "+4.6k", up: true, Icon: LinkedinLogo, color: "#0A66C2", path: "M0 30 C20 28 30 22 50 20 S80 14 100 10 S130 6 160 2" },
  { name: "Instagram", value: "3.7k", delta: "+211", up: true, Icon: InstagramLogo, color: "#E1306C", path: "M0 30 L30 28 L60 26 L90 18 L110 14 L140 10 L160 4" },
  { name: "Facebook", value: "8.1k", delta: "−16", up: false, Icon: FacebookLogo, color: "#1877F2", path: "M0 10 L20 12 L35 8 L55 14 L75 12 L95 16 L120 18 L140 22 L160 26" },
  { name: "YouTube", value: "1.6k", delta: "+60", up: true, Icon: YoutubeLogo, color: "#FF0000", path: "M0 30 L20 30 L20 24 L50 24 L50 16 L90 16 L90 10 L120 10 L120 4 L160 4" },
];

// Approval trend (approx. from the portal chart): May → Oct
const TREND = { total: [0, 0, 0, 10, 30, 6], approved: [0, 0, 0, 10, 23, 5] };
const MONTHS = ["May", "Jun", "Jul", "Aug", "Sep", "Oct"];

function trendPath(values: number[], w = 300, h = 110, max = 32) {
  const pts = values.map((v, i) => [(i / (values.length - 1)) * w, h - (v / max) * h]);
  return pts.reduce((d, [x, y], i) => {
    if (i === 0) return `M${x} ${y}`;
    const [px, py] = pts[i - 1];
    const cx = (px + x) / 2;
    return `${d} C${cx} ${py} ${cx} ${y} ${x} ${y}`;
  }, "");
}

const STATUS = [
  { label: "Approved", value: 37, color: "#16A34A" },
  { label: "Delivered", value: 6, color: "#0B1437" },
  { label: "Posted", value: 2, color: "#7C3AED" },
  { label: "Pending", value: 1, color: "#F59E0B" },
  { label: "Rejected", value: 1, color: "#DC2626" },
];

function Donut() {
  const total = STATUS.reduce((a, s) => a + s.value, 0);
  const r = 38;
  const c = 2 * Math.PI * r;
  let acc = 0;
  return (
    <svg viewBox="0 0 100 100" className="size-28 -rotate-90">
      {STATUS.map((s, i) => {
        const len = (s.value / total) * c;
        const el = (
          <motion.circle
            key={s.label}
            cx="50" cy="50" r={r} fill="none" stroke={s.color} strokeWidth="14"
            strokeDasharray={`${len} ${c - len}`}
            strokeDashoffset={-acc}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 + i * 0.1 }}
          />
        );
        acc += len;
        return el;
      })}
    </svg>
  );
}

export default function Dashboards() {
  return (
    <Stagger>
      <SlideHeader
        eyebrow="Role Dashboards"
        title="Your work and your numbers, the moment you log in."
        subtitle="Every role lands on a personal dashboard. Shown here: the NCET Coordinator's live view on 6 Oct 2026."
      />

      <div className="grid gap-4 xl:grid-cols-[1fr_1fr_1.1fr]">
        {/* Counters */}
        <Item>
          <Card className="h-full p-5">
            <p className="text-sm font-bold text-[#0B1437]">My requests</p>
            <div className="mt-3 grid grid-cols-2 gap-2.5">
              {COUNTERS.map(({ label, value, icon: Icon }) => (
                <div key={label} className="rounded-xl border border-[#E8EAF2] p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-[#6B7280]">{label}</span>
                    <Icon className="size-3.5 text-[#F15A24]" />
                  </div>
                  <p className="mt-1 text-2xl font-extrabold text-[#0B1437]"><CountUp to={value} duration={900} /></p>
                </div>
              ))}
            </div>
            <div className="mt-2.5 grid grid-cols-2 gap-2.5">
              {LIBRARY.map(({ label, value, icon: Icon }) => (
                <div key={label} className="flex items-center gap-2.5 rounded-xl bg-[#F6F7FB] p-3">
                  <Icon className="size-4 text-[#0F1C4D]" />
                  <span className="text-[11px] text-[#6B7280]">{label}</span>
                  <span className="ml-auto font-bold text-[#0B1437]">{value}</span>
                </div>
              ))}
            </div>
          </Card>
        </Item>

        {/* Approval trends + status */}
        <Item>
          <Card className="h-full p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold text-[#0B1437]">Approval trends</p>
              <span className="text-[11px] text-[#6B7280]">Last 6 months</span>
            </div>
            <svg viewBox="0 0 300 120" className="mt-3 h-[110px] w-full overflow-visible" preserveAspectRatio="none">
              <motion.path d={`${trendPath(TREND.total)} L300 110 L0 110 Z`} fill="#7C3AED" opacity={0.08}
                initial={{ opacity: 0 }} animate={{ opacity: 0.08 }} transition={{ delay: 0.6 }} />
              <motion.path d={trendPath(TREND.total)} fill="none" stroke="#7C3AED" strokeWidth="2"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.3 }} />
              <motion.path d={trendPath(TREND.approved)} fill="none" stroke="#16A34A" strokeWidth="2"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.45 }} />
            </svg>
            <div className="mt-1 flex justify-between text-[10px] text-[#6B7280]">
              {MONTHS.map((m) => <span key={m}>{m}</span>)}
            </div>
            <div className="mt-4 flex items-center gap-4 border-t border-[#E8EAF2] pt-4">
              <Donut />
              <ul className="space-y-1 text-xs">
                {STATUS.map((s) => (
                  <li key={s.label} className="flex items-center gap-2 text-[#0B1437]">
                    <span className="size-2 rounded-full" style={{ background: s.color }} />
                    {s.label}
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </Item>

        {/* Audience growth */}
        <Item>
          <Card className="h-full p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold text-[#0B1437]">Audience growth</p>
              <span className="text-[11px] text-[#6B7280]">Per platform</span>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2.5">
              {PLATFORMS.map(({ name, value, delta, up, Icon, color, path }, i) => (
                <div key={name} className="rounded-xl border border-[#E8EAF2] p-3">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-[#0B1437]">
                      <Icon size={13} weight="fill" style={{ color }} /> {name}
                    </span>
                    <span className={`rounded-full px-1.5 py-px text-[10px] font-bold ${up ? "bg-[#E7F6EC] text-[#16A34A]" : "bg-[#FDECEC] text-[#DC2626]"}`}>{delta}</span>
                  </div>
                  <p className="mt-1 text-xl font-extrabold text-[#0B1437]">{value}</p>
                  <svg viewBox="0 0 160 34" className="mt-1 h-8 w-full" preserveAspectRatio="none">
                    <motion.path d={path} fill="none" stroke={color} strokeWidth="2"
                      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.9, delay: 0.4 + i * 0.1 }} />
                  </svg>
                </div>
              ))}
            </div>
            <p className="mt-3 text-[11px] text-[#6B7280]">Plus platform cards, Tago AI insight, activity heatmap, recent activity and uploads.</p>
          </Card>
        </Item>
      </div>

      <Item className="mt-4 grid gap-3 sm:grid-cols-3">
        {[
          { icon: FileText, t: "Platform-wise requests", d: "See which channels the college asks for most" },
          { icon: CheckCircle2, t: "Status distribution", d: "Pending, approved, rejected, posted, delivered" },
          { icon: Layers, t: "My recent uploads", d: "Templates and assets you added, one click away" },
        ].map(({ icon: Icon, t, d }) => (
          <div key={t} className="flex items-center gap-3 rounded-xl border border-[#E8EAF2] bg-white px-4 py-3">
            <Icon className="size-4 shrink-0 text-[#F15A24]" />
            <p className="text-sm"><span className="font-semibold text-[#0B1437]">{t}</span> <span className="text-[#6B7280]">· {d}</span></p>
          </div>
        ))}
      </Item>
    </Stagger>
  );
}
