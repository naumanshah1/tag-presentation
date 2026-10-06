import { useEffect, useRef, useState } from "react";

/** Counts from 0 to `to` once on mount. Honours prefers-reduced-motion. */
export default function CountUp({
  to,
  duration = 1200,
  delay = 0,
  decimals = 0,
}: {
  to: number;
  duration?: number;
  delay?: number;
  decimals?: number;
}) {
  const [value, setValue] = useState(0);
  const raf = useRef<number>(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setValue(to);
      return;
    }
    let start: number | null = null;
    const timer = window.setTimeout(() => {
      const tick = (t: number) => {
        if (start === null) start = t;
        const p = Math.min((t - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setValue(to * eased);
        if (p < 1) raf.current = requestAnimationFrame(tick);
      };
      raf.current = requestAnimationFrame(tick);
    }, delay);
    return () => {
      window.clearTimeout(timer);
      cancelAnimationFrame(raf.current);
    };
  }, [to, duration, delay]);

  return (
    <>
      {value.toLocaleString("en-IN", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
    </>
  );
}
