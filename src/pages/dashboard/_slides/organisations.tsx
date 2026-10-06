import { Globe, ShieldCheck } from "lucide-react";
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";
import { Card, Item, SlideHeader, Stagger } from "../_components/ui.tsx";

type Linked = { li: boolean; ig: boolean; fb: boolean; yt: boolean; web: boolean };

const ORGS: { name: string; audience: number; color: string; linked: Linked }[] = [
  { name: "NCET", audience: 25296, color: "#0F1C4D", linked: { li: true, ig: true, fb: true, yt: true, web: true } },
  { name: "NCMS", audience: 9543, color: "#4D7C0F", linked: { li: true, ig: true, fb: true, yt: true, web: true } },
  { name: "NDC", audience: 7382, color: "#0369A1", linked: { li: true, ig: true, fb: true, yt: true, web: true } },
  { name: "NPUC Yelahanka", audience: 9571, color: "#C2410C", linked: { li: false, ig: true, fb: true, yt: true, web: true } },
  { name: "NPUC CBPur", audience: 2473, color: "#7F1D1D", linked: { li: false, ig: true, fb: true, yt: true, web: true } },
  { name: "ToriiMinds", audience: 4351, color: "#F15A24", linked: { li: true, ig: true, fb: false, yt: true, web: true } },
  { name: "EduCare", audience: 71, color: "#EF4444", linked: { li: false, ig: true, fb: true, yt: false, web: true } },
  { name: "Nagarjuna Vidyaniketan", audience: 0, color: "#6366F1", linked: { li: false, ig: false, fb: false, yt: false, web: false } },
];

const ICONS = [
  { key: "li", Icon: LinkedinLogo, color: "#0A66C2", label: "LinkedIn" },
  { key: "ig", Icon: InstagramLogo, color: "#E1306C", label: "Instagram" },
  { key: "fb", Icon: FacebookLogo, color: "#1877F2", label: "Facebook" },
  { key: "yt", Icon: YoutubeLogo, color: "#FF0000", label: "YouTube" },
] as const;

export default function Organisations() {
  return (
    <Stagger>
      <SlideHeader
        eyebrow="Multi-Organisation"
        title="Eight institutions. One governance layer."
        subtitle="Each college sees only its own data. Leadership sees the whole group, side by side."
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {ORGS.map((o) => (
          <Item key={o.name}>
            <Card className="flex h-full flex-col p-5">
              <div className="flex items-center gap-3">
                <span
                  className="flex size-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-white"
                  style={{ background: o.color }}
                >
                  {o.name[0]}
                </span>
                <div className="min-w-0">
                  <p className="truncate font-bold text-[#0B1437]">{o.name}</p>
                  <p className="truncate text-xs text-[#6B7280]">{Object.values(o.linked).filter(Boolean).length} of 5 channels linked</p>
                </div>
              </div>
              <p className="mt-4 text-2xl font-extrabold tracking-tight text-[#0B1437]">
                {o.audience.toLocaleString("en-IN")}
                <span className="ml-1.5 text-xs font-medium text-[#6B7280]">audience</span>
              </p>
              <div className="mt-auto flex items-center gap-1.5 pt-4">
                {ICONS.map(({ key, Icon, color, label }) => {
                  const on = o.linked[key];
                  return (
                    <span
                      key={key}
                      title={`${label}: ${on ? "linked" : "not linked"}`}
                      className="flex size-7 items-center justify-center rounded-lg"
                      style={{ background: on ? color : "#EEF0F6" }}
                    >
                      <Icon size={14} weight="fill" className={on ? "text-white" : "text-[#B4BCDB]"} />
                    </span>
                  );
                })}
                <span
                  title={`Website: ${o.linked.web ? "linked" : "not linked"}`}
                  className={`flex size-7 items-center justify-center rounded-lg ${o.linked.web ? "bg-[#0F1C4D] text-white" : "bg-[#EEF0F6] text-[#B4BCDB]"}`}
                >
                  <Globe className="size-3.5" />
                </span>
              </div>
            </Card>
          </Item>
        ))}
      </div>
      <Item className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#6B7280]">
        <span className="inline-flex items-center gap-2 font-medium text-[#0B1437]">
          <ShieldCheck className="size-4 text-[#16A34A]" /> Data scoped per institution
        </span>
        <span>30 of 40 accounts linked</span>
        <span>7 of 8 websites linked</span>
        <span className="inline-flex items-center gap-1.5">
          <span className="size-3 rounded bg-[#EEF0F6]" /> Grey = not yet linked
        </span>
      </Item>
    </Stagger>
  );
}
