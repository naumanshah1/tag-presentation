import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { GROUPS, SLIDES, type SlideId } from "../_data/slides.ts";

export default function Sidebar({
  current,
  onSelect,
}: {
  current: SlideId;
  onSelect: (id: SlideId) => void;
}) {
  const navRef = useRef<HTMLElement>(null);
  useEffect(() => {
    navRef.current
      ?.querySelector('[aria-current="page"]')
      ?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }, [current]);

  return (
    <div className="flex h-full w-[264px] flex-col bg-[#0F1C4D] text-white">
      <div className="px-6 pb-4 pt-6">
        <p className="text-[30px] font-extrabold leading-none tracking-tight">
          t<span className="text-[#F15A24]">@</span>g
        </p>
        <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
          Digital Pulse of NGI
        </p>
      </div>

      <nav ref={navRef} className="flex-1 overflow-y-auto px-3 pb-4 [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.2)_transparent]">
        {GROUPS.map((group) => (
          <div key={group} className="mt-3 first:mt-0">
            <p className="px-3 pb-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">{group}</p>
            {SLIDES.filter((s) => s.group === group).map((s) => {
              const active = s.id === current;
              const Icon = s.icon;
              return (
                <button
                  key={s.id}
                  onClick={() => onSelect(s.id)}
                  aria-current={active ? "page" : undefined}
                  className={`relative flex w-full items-center gap-3 rounded-xl px-3 py-[7px] text-left text-[13.5px] font-medium transition-colors ${
                    active ? "text-white" : "text-white/70 hover:bg-white/[0.08] hover:text-white"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-xl bg-[#F15A24] shadow-[0_8px_20px_-8px_rgba(241,90,36,0.7)]"
                      transition={{ type: "spring", stiffness: 500, damping: 40 }}
                    />
                  )}
                  <Icon className="relative size-[18px] shrink-0" />
                  <span className="relative truncate">{s.label}</span>
                </button>
              );
            })}
          </div>
        ))}
      </nav>

      <div className="m-3 hidden rounded-xl bg-white/[0.06] px-4 py-3 [@media(min-height:1000px)]:block">
        <p className="text-xs font-semibold">Presented by Team Torii</p>
        <p className="mt-0.5 text-[11px] text-white/50">NGI · October 2026</p>
      </div>
    </div>
  );
}
