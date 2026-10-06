import { FileQuestion, MessagesSquare, Split, UserX, XCircle } from "lucide-react";
import { Card, IconTile, Item, SlideHeader, Stagger } from "../_components/ui.tsx";

const PAINS = [
  {
    icon: MessagesSquare,
    title: "Requests on WhatsApp, e-mail & sheets",
    text: "Branding work arrived in a dozen places. Nothing was tracked end to end.",
  },
  {
    icon: UserX,
    title: "Approvals chased by hand",
    text: "Sign-offs depended on reminders and follow-ups, with no audit trail.",
  },
  {
    icon: Split,
    title: "Every campus on its own",
    text: "Each college tracked social media separately, so there was no group-level view.",
  },
  {
    icon: FileQuestion,
    title: "Brand files scattered",
    text: "Logos and templates lived on drives and phones, so old versions kept resurfacing.",
  },
];

export default function Challenge() {
  return (
    <Stagger>
      <SlideHeader
        eyebrow="The Challenge"
        title="Before t@g, our digital presence ran on scattered tools."
        subtitle="Four problems kept repeating across every institution."
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {PAINS.map(({ icon: Icon, title, text }) => (
          <Item key={title}>
            <Card className="flex h-full gap-4 p-6">
              <IconTile tone="red" size="lg">
                <Icon className="size-5" />
              </IconTile>
              <div>
                <p className="flex items-center gap-2 font-bold text-[#0B1437]">
                  <XCircle className="size-4 text-[#DC2626]" />
                  {title}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-[#6B7280]">{text}</p>
              </div>
            </Card>
          </Item>
        ))}
      </div>
      <Item className="mt-5">
        <div className="flex flex-col gap-2 rounded-2xl bg-[#0F1C4D] px-6 py-5 text-white sm:flex-row sm:items-center sm:justify-between">
          <p className="font-semibold">
            The result: delays, inconsistent branding, and no single view of performance.
          </p>
          <p className="text-sm text-white/60">t@g was built to fix exactly this →</p>
        </div>
      </Item>
    </Stagger>
  );
}
