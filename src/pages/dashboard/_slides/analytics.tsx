import { motion } from "motion/react";
import { Link2, Trophy, Users } from "lucide-react";
import { LinkedinLogo } from "@phosphor-icons/react";
import CountUp from "../../_components/count-up.tsx";
import { Card, IconTile, Item, Pill, SlideHeader, Stagger } from "../_components/ui.tsx";

const ORGS = [
  { name: "NCET", value: 25296 },
  { name: "NPUC Yelahanka", value: 9571 },
  { name: "NCMS", value: 9543 },
  { name: "NDC", value: 7382 },
  { name: "ToriiMinds", value: 4351 },
  { name: "NPUC CBPur", value: 2473 },
  { name: "EduCare", value: 71 },
];
const MAX = ORGS[0].value;

const MODES = ["Overview grid", "Per organisation", "Compare organisations", "Paid promotion", "Weekly Excel import", "Meta auto-sync"];

export default function Analytics() {
  return (
    <Stagger>
      <SlideHeader
        eyebrow="Social Analytics"
        title="Four platforms, eight organisations, one live view."
        subtitle="LinkedIn, Instagram, YouTube and Facebook, tracked side by side for every college."
      />

      <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
        <Item>
          <Card className="h-full p-5">
            <div className="flex items-start justify-between">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#6B7280]">Total audience</p>
              <IconTile size="sm"><Users className="size-4" /></IconTile>
            </div>
            <p className="mt-2 text-3xl font-extrabold tracking-tight text-[#0B1437]"><CountUp to={58687} /></p>
            <p className="mt-1 text-xs text-[#6B7280]">Followers & subscribers, group-wide</p>
          </Card>
        </Item>
        <Item>
          <Card className="h-full p-5">
            <div className="flex items-start justify-between">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#6B7280]">Accounts linked</p>
              <IconTile size="sm"><Link2 className="size-4" /></IconTile>
            </div>
            <p className="mt-2 text-3xl font-extrabold tracking-tight text-[#0B1437]">
              <CountUp to={30} /> <span className="text-lg font-semibold text-[#6B7280]">/ 40</span>
            </p>
            <div className="mt-2.5 h-1.5 rounded-full bg-[#E8EAF2]">
              <motion.div
                className="h-full rounded-full bg-[#F15A24]"
                initial={{ width: 0 }}
                animate={{ width: "75%" }}
                transition={{ duration: 1, delay: 0.4 }}
              />
            </div>
          </Card>
        </Item>
        <Item>
          <Card className="h-full p-5">
            <div className="flex items-start justify-between">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#6B7280]">Top organisation</p>
              <IconTile size="sm"><Trophy className="size-4" /></IconTile>
            </div>
            <p className="mt-2 text-3xl font-extrabold tracking-tight text-[#0B1437]">NCET</p>
            <p className="mt-1 text-xs text-[#6B7280]">25,296 total audience</p>
          </Card>
        </Item>
        <Item>
          <Card className="h-full p-5">
            <div className="flex items-start justify-between">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#6B7280]">Leading platform</p>
              <span className="flex size-8 items-center justify-center rounded-lg bg-[#0A66C2]">
                <LinkedinLogo size={16} weight="fill" className="text-white" />
              </span>
            </div>
            <p className="mt-2 text-3xl font-extrabold tracking-tight text-[#0B1437]">LinkedIn</p>
            <p className="mt-1 text-xs text-[#6B7280]">19,859 combined audience</p>
          </Card>
        </Item>
      </div>

      <Item className="mt-4">
        <Card className="p-6">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <p className="font-bold text-[#0B1437]">Total audience by organisation</p>
            <p className="text-xs text-[#6B7280]">Followers + subscribers across all four platforms · 6 Oct 2026</p>
          </div>
          <div className="mt-5 space-y-3">
            {ORGS.map((o, i) => (
              <div key={o.name} className="grid grid-cols-[120px_1fr_64px] items-center gap-3 sm:grid-cols-[150px_1fr_72px]">
                <span className={`truncate text-sm ${i === 0 ? "font-bold text-[#0B1437]" : "text-[#0B1437]"}`}>{o.name}</span>
                <div className="h-6 rounded-md bg-[#F6F7FB]">
                  <motion.div
                    className="h-full rounded-md"
                    style={{ background: i === 0 ? "#0F1C4D" : "#B4BCDB" }}
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.max((o.value / MAX) * 100, 0.6)}%` }}
                    transition={{ duration: 0.8, delay: 0.35 + i * 0.07, ease: "easeOut" }}
                  />
                </div>
                <span className="text-right text-sm font-semibold tabular-nums text-[#0B1437]">{o.value.toLocaleString("en-IN")}</span>
              </div>
            ))}
          </div>
        </Card>
      </Item>

      <Item className="mt-4 flex flex-wrap gap-2">
        {MODES.map((m) => (
          <Pill key={m}>{m}</Pill>
        ))}
      </Item>
    </Stagger>
  );
}
