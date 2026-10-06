import { Camera, CalendarDays, Flag, Images, LayoutTemplate, Palette } from "lucide-react";
import { Card, IconTile, Item, SlideHeader, Stagger } from "../_components/ui.tsx";

const ITEMS = [
  { icon: LayoutTemplate, title: "Templates", text: "Ready-made, on-brand layouts for posts, posters and banners, so nobody starts from scratch." },
  { icon: Palette, title: "Brand Library", text: "The latest approved logos, colours and files, never an outdated version." },
  { icon: Images, title: "Assets", text: "Photos, graphics and media for every campus, organised and searchable." },
  { icon: CalendarDays, title: "Events", text: "Every event's creatives in one place, from first request to final post." },
  { icon: Flag, title: "Signage", text: "Campus signage and print collateral tracked alongside digital work." },
  { icon: Camera, title: "Photographers", text: "Photo coverage assigned and managed centrally across institutions." },
];

export default function ContentHub() {
  return (
    <Stagger>
      <SlideHeader
        eyebrow="Content Hub"
        title="One source of truth for every approved asset."
        subtitle="Everything a team needs to create on-brand content lives in t@g, not on someone's phone."
      />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {ITEMS.map(({ icon: Icon, title, text }) => (
          <Item key={title}>
            <Card className="group h-full p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_16px_32px_-16px_rgba(15,28,77,0.25)]">
              <IconTile size="lg">
                <Icon className="size-5" />
              </IconTile>
              <p className="mt-5 text-lg font-bold text-[#0B1437]">{title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-[#6B7280]">{text}</p>
            </Card>
          </Item>
        ))}
      </div>
    </Stagger>
  );
}
