import { ArrowUpRight } from "lucide-react";
import { SLIDES, type SlideProps } from "../_data/slides.ts";
import { IconTile, Item, SlideHeader, Stagger } from "../_components/ui.tsx";

export default function Overview({ go }: SlideProps) {
  const features = SLIDES.filter((s) => s.id !== "overview");
  return (
    <Stagger>
      <SlideHeader
        eyebrow="Overview"
        title={
          <>
            Everything your brand needs, <span className="text-[#F15A24]">in one engine.</span>
          </>
        }
        subtitle="Pick any feature to explore it, or press → to walk through them in order."
      />
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <Item key={f.id}>
              <button
                onClick={() => go(f.id)}
                className="group flex h-full w-full flex-col rounded-2xl border border-[#E8EAF2] bg-white p-4 text-left shadow-[0_1px_2px_rgba(15,28,77,0.04)] transition-all duration-200 hover:-translate-y-1 hover:border-[#F15A24]/40 hover:shadow-[0_16px_32px_-16px_rgba(15,28,77,0.25)]"
              >
                <div className="flex items-start justify-between">
                  <IconTile>
                    <Icon className="size-5" />
                  </IconTile>
                  <span className="flex items-center gap-1 text-[11px] font-semibold tabular-nums text-[#6B7280]/70 group-hover:text-[#F15A24]">
                    {String(i + 2).padStart(2, "0")}
                    <ArrowUpRight className="size-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                  </span>
                </div>
                <p className="mt-3 font-bold text-[#0B1437]">{f.label}</p>
                <p className="mt-1 flex-1 text-sm leading-snug text-[#6B7280]">{f.blurb}</p>
                
              </button>
            </Item>
          );
        })}
      </div>
    </Stagger>
  );
}
