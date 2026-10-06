import { motion } from "motion/react";
import { Activity, BookMarked, Building2, Camera, Crown, Globe, Inbox, Share2, UserPlus } from "lucide-react";
import { Card, IconTile, Item, SlideHeader, Stagger } from "../_components/ui.tsx";

const TOOLS = [
  { icon: Building2, title: "Organisations", text: "Add colleges, link their social accounts and websites." },
  { icon: UserPlus, title: "User Management", text: "Create users, assign roles, grant view-only access." },
  { icon: Activity, title: "Activity Logs", text: "Every action across every college, searchable." },
  { icon: Inbox, title: "College Requests", text: "All incoming requests from every college, in one inbox." },
  { icon: BookMarked, title: "Branding Register", text: "The group-wide record of branding work and assets." },
  { icon: Share2, title: "Social Handlers", text: "Who manages which accounts, for which college." },
  { icon: Globe, title: "Websites", text: "Every college website, linked and monitored." },
  { icon: Crown, title: "Premium Packs", text: "Premium service packs, managed centrally." },
  { icon: Camera, title: "Photographers", text: "Photo coverage assigned across institutions." },
];

const LOG = [
  { who: "Super Admin", what: "added a team member", detail: "Created user “Venugopal Reddy” (User)" },
  { who: "Coordinator", what: "raised a request", detail: "“One Day VTU SEEL Workshop”" },
  { who: "Designer", what: "submitted a design", detail: "“Day 1 of Two Day Workshop on Personality Development”" },
  { who: "Reviewer", what: "approved content", detail: "“Banners for the UG & PG Graduation Day 2026”" },
];

export default function Admin() {
  return (
    <Stagger>
      <SlideHeader
        eyebrow="Admin Control Centre"
        title="One console to run the whole group."
        subtitle="The Super Admin console adds administration and management tools on top of everything the other roles can do."
      />
      <div className="grid gap-4 xl:grid-cols-[1.6fr_1fr]">
        <div className="grid gap-3 sm:grid-cols-3">
          {TOOLS.map(({ icon: Icon, title, text }) => (
            <Item key={title}>
              <Card className="h-full p-4">
                <IconTile tone="navy" size="sm"><Icon className="size-4" /></IconTile>
                <p className="mt-3 text-sm font-bold text-[#0B1437]">{title}</p>
                <p className="mt-0.5 text-xs leading-relaxed text-[#6B7280]">{text}</p>
              </Card>
            </Item>
          ))}
        </div>
        <Item>
          <Card className="h-full p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold text-[#0B1437]">Activity Logs</p>
              <span className="rounded-full bg-[#FFF1EB] px-2.5 py-1 text-[11px] font-semibold text-[#F15A24]">Administrator Console</span>
            </div>
            <ul className="mt-4 space-y-3">
              {LOG.map((l, i) => (
                <motion.li
                  key={i}
                  className="relative pl-5"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.15 }}
                >
                  <span className="absolute left-0 top-1.5 size-2 rounded-full bg-[#F15A24]" />
                  {i < LOG.length - 1 && <span className="absolute left-[3px] top-4 h-[calc(100%+4px)] w-0.5 bg-[#E8EAF2]" />}
                  <p className="text-[13px] text-[#0B1437]"><b>{l.who}</b> {l.what}</p>
                  <p className="text-xs text-[#6B7280]">{l.detail}</p>
                </motion.li>
              ))}
            </ul>
            <p className="mt-4 border-t border-[#E8EAF2] pt-3 text-[11px] text-[#6B7280]">
              Organisation switcher, platform-wide overview and Tago AI on the admin home.
            </p>
          </Card>
        </Item>
      </div>
    </Stagger>
  );
}
