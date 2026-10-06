import { useCallback, useEffect, useRef, useState, type ComponentType } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, MotionConfig, motion } from "motion/react";
import Sidebar from "./_components/sidebar.tsx";
import Topbar from "./_components/topbar.tsx";
import { SLIDES, type SlideId, type SlideProps } from "./_data/slides.ts";
import Overview from "./_slides/overview.tsx";
import Challenge from "./_slides/challenge.tsx";
import Roles from "./_slides/roles.tsx";
import Workflow from "./_slides/workflow.tsx";
import ContentHub from "./_slides/content-hub.tsx";
import Analytics from "./_slides/analytics.tsx";
import TagoAI from "./_slides/tago-ai.tsx";
import Audit from "./_slides/audit.tsx";
import Organisations from "./_slides/organisations.tsx";
import WebsitesBrand from "./_slides/websites-brand.tsx";
import BeforeNow from "./_slides/before-now.tsx";
import Roadmap from "./_slides/roadmap.tsx";
import ThankYou from "./_slides/thank-you.tsx";
import AccessMap from "./_slides/access-map.tsx";
import Dashboards from "./_slides/dashboards.tsx";
import Planning from "./_slides/planning.tsx";
import Essentials from "./_slides/essentials.tsx";
import DeepDive from "./_slides/deep-dive.tsx";
import Goals from "./_slides/goals.tsx";
import Admin from "./_slides/admin.tsx";

const REGISTRY: Record<SlideId, ComponentType<SlideProps>> = {
  overview: Overview,
  challenge: Challenge,
  roles: Roles,
  access: AccessMap,
  dashboards: Dashboards,
  planning: Planning,
  essentials: Essentials,
  "deep-dive": DeepDive,
  goals: Goals,
  admin: Admin,
  workflow: Workflow,
  content: ContentHub,
  analytics: Analytics,
  tago: TagoAI,
  audit: Audit,
  organisations: Organisations,
  websites: WebsitesBrand,
  "before-now": BeforeNow,
  roadmap: Roadmap,
  thanks: ThankYou,
};

const idFromHash = (): SlideId => {
  const h = window.location.hash.replace("#", "") as SlideId;
  return SLIDES.some((s) => s.id === h) ? h : "overview";
};

export default function DashboardPage() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState<SlideId>(idFromHash);
  const [direction, setDirection] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const index = SLIDES.findIndex((s) => s.id === current);

  const go = useCallback(
    (id: SlideId) => {
      const next = SLIDES.findIndex((s) => s.id === id);
      if (next === -1 || id === current) return;
      setDirection(next > index ? 1 : -1);
      window.location.hash = id; // pushes history → back button works
      setMenuOpen(false);
    },
    [current, index],
  );

  const step = useCallback(
    (delta: number) => {
      const next = SLIDES[index + delta];
      if (next) go(next.id);
    },
    [index, go],
  );

  // hash → state (covers clicks, keyboard and browser back/forward)
  useEffect(() => {
    const onHash = () => {
      const id = idFromHash();
      setCurrent((prev) => {
        const a = SLIDES.findIndex((s) => s.id === prev);
        const b = SLIDES.findIndex((s) => s.id === id);
        setDirection(b >= a ? 1 : -1);
        return id;
      });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0 });
  }, [current]);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen?.();
    else document.exitFullscreen?.();
  }, []);

  useEffect(() => {
    const onFs = () => setIsFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onFs);
    return () => document.removeEventListener("fullscreenchange", onFs);
  }, []);

  // keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("input, textarea, [contenteditable]")) return;
      if (["ArrowRight", "PageDown", " "].includes(e.key)) {
        e.preventDefault();
        step(1);
      } else if (["ArrowLeft", "PageUp"].includes(e.key)) {
        e.preventDefault();
        step(-1);
      } else if (e.key === "Escape") {
        if (!document.fullscreenElement) go("overview");
      } else if (e.key.toLowerCase() === "f" && !e.metaKey && !e.ctrlKey) {
        toggleFullscreen();
      } else if (e.key === "Home") {
        go("overview");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [step, go, toggleFullscreen]);

  // swipe (touch devices)
  const touchX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => (touchX.current = e.touches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 60) step(dx < 0 ? 1 : -1);
    touchX.current = null;
  };

  const Slide = REGISTRY[current];
  const meta = SLIDES[index];

  return (
    <MotionConfig reducedMotion="user">
      <div className="flex h-dvh w-full overflow-hidden bg-[#F6F7FB]">
        {/* Desktop sidebar */}
        <aside className="hidden shrink-0 lg:block">
          <Sidebar current={current} onSelect={go} />
        </aside>

        {/* Mobile drawer */}
        <AnimatePresence>
          {menuOpen && (
            <>
              <motion.div
                className="fixed inset-0 z-40 bg-[#0B1437]/50 lg:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMenuOpen(false)}
              />
              <motion.aside
                className="fixed inset-y-0 left-0 z-50 lg:hidden"
                initial={{ x: -280 }}
                animate={{ x: 0 }}
                exit={{ x: -280 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <Sidebar current={current} onSelect={go} />
              </motion.aside>
            </>
          )}
        </AnimatePresence>

        <div className="flex min-w-0 flex-1 flex-col">
          <Topbar
            title={meta.label}
            index={index}
            total={SLIDES.length}
            isFullscreen={isFullscreen}
            onPrev={() => step(-1)}
            onNext={() => step(1)}
            onHome={() => navigate("/")}
            onToggleFullscreen={toggleFullscreen}
            onOpenMenu={() => setMenuOpen(true)}
          />

          <main
            ref={scrollRef}
            className="relative flex-1 overflow-y-auto overflow-x-hidden"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <AnimatePresence mode="wait" custom={direction} initial={false}>
              <motion.div
                key={current}
                custom={direction}
                variants={{
                  enter: (d: number) => ({ opacity: 0, x: d * 24 }),
                  center: { opacity: 1, x: 0 },
                  exit: (d: number) => ({ opacity: 0, x: d * -24 }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="mx-auto flex min-h-full w-full max-w-[1400px] flex-col justify-center px-5 py-8 sm:px-10 sm:py-10"
              >
                <FitToScreen containerRef={scrollRef}>
                  <Slide go={go} />
                </FitToScreen>
              </motion.div>
            </AnimatePresence>
          </main>

          <footer className="hidden h-9 shrink-0 items-center justify-between border-t border-[#E8EAF2] bg-white px-6 text-[11px] text-[#6B7280] sm:flex">
            <span>
              <Kbd>←</Kbd> <Kbd>→</Kbd> navigate · <Kbd>Esc</Kbd> overview · <Kbd>F</Kbd> fullscreen
            </span>
            <span>t@g · tag.ncet.co.in</span>
          </footer>
        </div>
      </div>
    </MotionConfig>
  );
}

/**
 * On desktop, scales a slide down (never up) so it always fits the screen
 * without scrolling, e.g. on a 1366×768 laptop or projector.
 * Phones and tablets keep normal scrolling.
 */
function FitToScreen({
  children,
  containerRef,
}: {
  children: React.ReactNode;
  containerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const innerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [height, setHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    const inner = innerRef.current;
    const outer = containerRef.current;
    if (!inner || !outer) return;
    const measure = () => {
      if (window.innerWidth < 1024) {
        setScale(1);
        setHeight(undefined);
        return;
      }
      const cs = getComputedStyle(inner.parentElement!.parentElement!);
      const available = outer.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom);
      const natural = inner.offsetHeight; // unaffected by transforms
      setScale((prev) => {
        const next = Math.max(0.5, Math.min(1, available / natural));
        return Math.abs(next - prev) > 0.004 ? next : prev;
      });
      setHeight(natural);
    };
    const t = window.setTimeout(measure, 40);
    const ro = new ResizeObserver(measure);
    ro.observe(outer);
    ro.observe(inner);
    return () => {
      window.clearTimeout(t);
      ro.disconnect();
    };
  }, [containerRef]);

  return (
    <div style={{ height: height ? height * scale : undefined }}>
      <div
        ref={innerRef}
        style={{
          width: `${100 / scale}%`,
          transform: scale < 1 ? `scale(${scale})` : undefined,
          transformOrigin: "top left",
        }}
      >
        {children}
      </div>
    </div>
  );
}

function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="rounded border border-[#E8EAF2] bg-[#F6F7FB] px-1.5 py-px font-sans text-[10px] font-semibold text-[#0B1437]">
      {children}
    </kbd>
  );
}
