import { motion } from "motion/react";
import { Bell, Building2, Eye, KeyRound, Moon, Settings, Sparkles, UserCircle2, Users } from "lucide-react";
import { Card, IconTile, Item, SlideHeader, Stagger } from "../_components/ui.tsx";

const FEATURES = [
  { icon: KeyRound, title: "Personal secure login", text: "One login per person, so every action is traceable to a name." },
  { icon: Users, title: "People", text: "The college's team directory: who does what and who to ask." },
  { icon: Bell, title: "Notifications", text: "Alerts for new requests, approvals and work assigned to you." },
  { icon: UserCircle2, title: "My Profile & Settings", text: "Each user manages their own details and preferences." },
  { icon: Eye, title: "View-only access", text: "Reviewers can see everything but change nothing. Edits are blocked." },
  { icon: Building2, title: "Organisation switcher", text: "Admins flip between colleges from the dashboard header." },
  { icon: Moon, title: "Light & dark mode", text: "Comfortable to use all day, on any screen." },
  { icon: Sparkles, title: "Tago AI everywhere", text: "One click from any page, in every role's header." },
];

export default function Essentials() {
  return (
    <Stagger>
      <SlideHeader
        eyebrow="Everyday Essentials"
        title="The small things that make it work every day."
        subtitle="Built-in collaboration, access control and comfort features, available to every role."
      />
      <div className="grid gap-4 xl:grid-cols-[1fr_1.6fr]">
        {/* mock: view-only banner + notifications */}
        <Item>
          <Card className="h-full overflow-hidden">
            <div className="flex items-center gap-2 border-b border-[#F5E6B8] bg-[#FFF9E6] px-4 py-2.5 text-xs font-medium text-[#8A6100]">
              <Eye className="size-3.5" /> View-only access: you can see everything but can't make changes.
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold text-[#0B1437]">Notifications</p>
                <span className="relative">
                  <Bell className="size-5 text-[#0B1437]" />
                  <motion.span
                    className="absolute -right-1.5 -top-1.5 flex size-4 items-center justify-center rounded-full bg-[#F15A24] text-[9px] font-bold text-white"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 400 }}
                  >
                    3
                  </motion.span>
                </span>
              </div>
              <ul className="mt-4 space-y-2.5">
                {[
                  { t: "New request raised", d: "Main Screen Backdrops", c: "#F59E0B" },
                  { t: "Design submitted for approval", d: "Day 1 · Personality Development Workshop", c: "#0F1C4D" },
                  { t: "Content approved", d: "Welcome Banner · Graduation Day 2026", c: "#16A34A" },
                ].map((n, i) => (
                  <motion.li
                    key={n.t}
                    className="flex gap-3 rounded-xl border border-[#E8EAF2] p-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.15 }}
                  >
                    <span className="mt-1.5 size-2 shrink-0 rounded-full" style={{ background: n.c }} />
                    <div className="min-w-0">
                      <p className="text-[13px] font-semibold text-[#0B1437]">{n.t}</p>
                      <p className="truncate text-xs text-[#6B7280]">{n.d}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-4 flex items-center gap-2 rounded-xl bg-[#FDECEC] px-3 py-2.5 text-xs font-medium text-[#B91C1C]">
                <Settings className="size-3.5" /> This is a view-only account. Changes are not permitted.
              </div>
            </div>
          </Card>
        </Item>

        <div className="grid gap-3 sm:grid-cols-2">
          {FEATURES.map(({ icon: Icon, title, text }) => (
            <Item key={title}>
              <Card className="flex h-full gap-3 p-4">
                <IconTile size="sm"><Icon className="size-4" /></IconTile>
                <div>
                  <p className="text-sm font-bold text-[#0B1437]">{title}</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-[#6B7280]">{text}</p>
                </div>
              </Card>
            </Item>
          ))}
        </div>
      </div>
    </Stagger>
  );
}
