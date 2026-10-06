import { Check, Eye } from "lucide-react";
import { Card, Item, SlideHeader, Stagger } from "../_components/ui.tsx";

const ROLES = [
  {
    initials: "SA",
    name: "Super Admin",
    purpose: "Oversees every college",
    tone: "bg-[#0F1C4D] text-white",
    items: ["Organisations, users & activity logs", "College requests & B&M report", "Branding register, websites, social handlers", "Growth goals & premium packs"],
  },
  {
    initials: "CN",
    name: "Coordinator",
    purpose: "The college's voice",
    tone: "bg-[#F15A24] text-white",
    items: ["Raise a request in seconds", "Track designs & posts to delivery", "College social analytics", "Templates, assets & brand library"],
  },
  {
    initials: "D",
    name: "Designer",
    purpose: "Builds the creative",
    tone: "bg-[#7C3AED] text-white",
    items: ["Designs to be done & assigned work", "Templates, assets, brand library, signage", "Post planner & calendar", "Approval analytics & reports"],
  },
  {
    initials: "SH",
    name: "Social Handler",
    purpose: "Publishes on-brand",
    tone: "bg-[#16A34A] text-white",
    items: ["To be posted queue & approvals", "Post planner & calendar", "Social & approval analytics, reports", "Only approved content goes out"],
  },
];

export default function Roles() {
  return (
    <Stagger>
      <SlideHeader
        eyebrow="One Login, Four Roles"
        title="Every person sees exactly what their role needs."
        subtitle="Each college team member gets a secure login. Menus, data and actions are scoped to their role and institution."
      />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {ROLES.map((r) => (
          <Item key={r.name}>
            <Card className="flex h-full flex-col p-6">
              <span className={`flex size-12 items-center justify-center rounded-full text-sm font-bold ${r.tone}`}>
                {r.initials}
              </span>
              <p className="mt-4 text-lg font-bold text-[#0B1437]">{r.name}</p>
              <p className="text-sm text-[#6B7280]">{r.purpose}</p>
              <ul className="mt-5 space-y-2.5 border-t border-[#E8EAF2] pt-5">
                {r.items.map((it) => (
                  <li key={it} className="flex gap-2.5 text-sm text-[#0B1437]">
                    <Check className="mt-0.5 size-4 shrink-0 text-[#16A34A]" strokeWidth={2.5} />
                    {it}
                  </li>
                ))}
              </ul>
            </Card>
          </Item>
        ))}
      </div>
      <Item className="mt-5">
        <span className="inline-flex items-center gap-2 rounded-full bg-[#FFF1EB] px-4 py-2 text-sm font-medium text-[#0B1437]">
          <Eye className="size-4 text-[#F15A24]" />
          View-only access is also available for reviewers and leadership.
        </span>
      </Item>
    </Stagger>
  );
}
