import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, Home, Maximize2, Menu, Minimize2 } from "lucide-react";

const iconBtn =
  "flex size-9 items-center justify-center rounded-lg border border-[#E8EAF2] bg-white text-[#0B1437] transition-colors hover:bg-[#F6F7FB] disabled:opacity-35 disabled:hover:bg-white";

export default function Topbar({
  title,
  index,
  total,
  isFullscreen,
  onPrev,
  onNext,
  onHome,
  onToggleFullscreen,
  onOpenMenu,
}: {
  title: string;
  index: number;
  total: number;
  isFullscreen: boolean;
  onPrev: () => void;
  onNext: () => void;
  onHome: () => void;
  onToggleFullscreen: () => void;
  onOpenMenu: () => void;
}) {
  return (
    <header className="relative shrink-0 border-b border-[#E8EAF2] bg-white">
      <div className="flex h-16 items-center gap-3 px-4 sm:px-6">
        <button className={`${iconBtn} lg:hidden`} onClick={onOpenMenu} aria-label="Open menu">
          <Menu className="size-4" />
        </button>
        <span className="hidden rounded-full bg-[#FFF1EB] px-3 py-1 text-xs font-semibold text-[#F15A24] sm:inline">
          Presentation Mode
        </span>

        <p className="min-w-0 flex-1 truncate text-center text-sm font-semibold text-[#0B1437]">{title}</p>

        <span className="hidden text-sm tabular-nums text-[#6B7280] sm:inline">
          <span className="font-semibold text-[#0B1437]">{index + 1}</span> / {total}
        </span>
        <div className="flex items-center gap-1.5">
          <button className={iconBtn} onClick={onPrev} disabled={index === 0} aria-label="Previous slide">
            <ChevronLeft className="size-4" />
          </button>
          <button className={iconBtn} onClick={onNext} disabled={index === total - 1} aria-label="Next slide">
            <ChevronRight className="size-4" />
          </button>
          <button className={`${iconBtn} hidden sm:flex`} onClick={onToggleFullscreen} aria-label="Toggle fullscreen (F)">
            {isFullscreen ? <Minimize2 className="size-4" /> : <Maximize2 className="size-4" />}
          </button>
          <button className={iconBtn} onClick={onHome} aria-label="Back to landing page">
            <Home className="size-4" />
          </button>
        </div>
      </div>

      {/* progress */}
      <div className="absolute inset-x-0 bottom-[-1px] h-[3px] bg-transparent">
        <motion.div
          className="h-full bg-[#F15A24]"
          initial={false}
          animate={{ width: `${((index + 1) / total) * 100}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>
    </header>
  );
}
