import { motion } from "motion/react";
import { Check } from "lucide-react";
import { Card, Item, SlideHeader, Stagger } from "../_components/ui.tsx";

/**
 * Feature access per role, taken from each role's sidebar in the live portal.
 * Order of flags: [Super Admin, Coordinator, Designer, Social Handler]
 */
type Row = [feature: string, access: [boolean, boolean, boolean, boolean]];
const Y = true;
const N = false;

const SECTIONS: { title: string; rows: Row[] }[] = [
  {
    title: "Content",
    rows: [
      ["Dashboard & Tago AI", [Y, Y, Y, Y]],
      ["Templates", [Y, Y, Y, Y]],
      ["Assets", [Y, Y, Y, Y]],
      ["Brand Library", [Y, Y, Y, Y]],
      ["Events", [Y, Y, Y, Y]],
      ["Signage", [Y, N, Y, Y]],
      ["Photographers", [Y, N, N, N]],
    ],
  },
  {
    title: "Workflow",
    rows: [
      ["Raise a Request", [N, Y, N, N]],
      ["College Requests", [Y, N, N, N]],
      ["Approvals", [Y, N, Y, Y]],
      ["Designs to be Done", [Y, Y, Y, N]],
      ["To Be Posted", [Y, Y, N, Y]],
      ["Assigned Work", [Y, N, Y, Y]],
      ["Post Planner", [Y, N, Y, Y]],
      ["Posting Calendar", [Y, N, Y, Y]],
      ["People", [N, Y, Y, Y]],
    ],
  },
  {
    title: "Insights",
    rows: [
      ["Social Analytics", [Y, Y, Y, Y]],
      ["Approval Analytics", [N, N, Y, Y]],
      ["Reports", [N, N, Y, Y]],
      ["B&M Report", [Y, N, N, N]],
      ["Growth Goals", [Y, N, N, N]],
    ],
  },
  {
    title: "Administration",
    rows: [
      ["Organisations", [Y, N, N, N]],
      ["User Management", [Y, N, N, N]],
      ["Activity Logs", [Y, N, N, N]],
      ["Branding Register", [Y, N, N, N]],
      ["Social Handlers", [Y, N, N, N]],
      ["Websites", [Y, N, N, N]],
      ["Premium Packs", [Y, N, N, N]],
      ["Notifications & Profile", [Y, Y, Y, Y]],
    ],
  },
];

const ROLES = [
  { short: "SA", name: "Super Admin", tone: "bg-[#0F1C4D]" },
  { short: "CN", name: "Coordinator", tone: "bg-[#F15A24]" },
  { short: "D", name: "Designer", tone: "bg-[#7C3AED]" },
  { short: "SH", name: "Social Handler", tone: "bg-[#16A34A]" },
];

function Table({ sections, offset }: { sections: typeof SECTIONS; offset: number }) {
  let n = offset;
  return (
    <Card className="overflow-hidden">
      <div className="grid grid-cols-[1fr_repeat(4,52px)] items-center border-b border-[#E8EAF2] bg-[#F6F7FB] px-4 py-2.5">
        <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#6B7280]">Feature</span>
        {ROLES.map((r) => (
          <span key={r.short} className="flex justify-center" title={r.name}>
            <span className={`flex size-7 items-center justify-center rounded-full text-[10px] font-bold text-white ${r.tone}`}>
              {r.short}
            </span>
          </span>
        ))}
      </div>
      {sections.map((sec) => (
        <div key={sec.title}>
          <p className="border-b border-[#E8EAF2] bg-white px-4 pb-1 pt-2.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#F15A24]">
            {sec.title}
          </p>
          {sec.rows.map(([feature, access]) => {
            const i = n++;
            return (
              <motion.div
                key={feature}
                className="grid grid-cols-[1fr_repeat(4,52px)] items-center border-b border-[#E8EAF2] px-4 py-[7px] last:border-b-0 hover:bg-[#F6F7FB]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 + i * 0.025 }}
              >
                <span className="truncate text-[13px] font-medium text-[#0B1437]">{feature}</span>
                {access.map((on, j) => (
                  <span key={j} className="flex justify-center">
                    {on ? (
                      <span className="flex size-5 items-center justify-center rounded-full bg-[#E7F6EC]">
                        <Check className="size-3 text-[#16A34A]" strokeWidth={3} />
                      </span>
                    ) : (
                      <span className="h-0.5 w-2.5 rounded-full bg-[#E8EAF2]" />
                    )}
                  </span>
                ))}
              </motion.div>
            );
          })}
        </div>
      ))}
    </Card>
  );
}

export default function AccessMap() {
  const total = SECTIONS.reduce((a, s) => a + s.rows.length, 0);
  return (
    <Stagger>
      <SlideHeader
        eyebrow="Feature Access Map"
        title={`${total} features, each one scoped to the right role.`}
        subtitle="Taken directly from each role's menu in the live portal. Nobody sees a button they shouldn't press."
      />
      <div className="grid items-start gap-4 lg:grid-cols-2">
        <Item>
          <Table sections={SECTIONS.slice(0, 2)} offset={0} />
        </Item>
        <Item>
          <Table sections={SECTIONS.slice(2)} offset={16} />
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#6B7280]">
            {ROLES.map((r) => (
              <span key={r.short} className="inline-flex items-center gap-1.5">
                <span className={`size-2.5 rounded-full ${r.tone}`} /> {r.short} = {r.name}
              </span>
            ))}
          </div>
        </Item>
      </div>
    </Stagger>
  );
}
