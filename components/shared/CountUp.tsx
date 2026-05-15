"use client";

import { useEffect, useRef, useState } from "react";

export function CountUp({
  value,
  duration = 1800,
  className,
}: {
  value: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayed, setDisplayed] = useState("0");
  const [started, setStarted] = useState(false);

  const numericPart = value.match(/\d+(?:\.\d+)?/)?.[0] ?? "";
  const target = parseFloat(numericPart);
  const prefix = value.slice(0, value.indexOf(numericPart));
  const suffix = value.slice(value.indexOf(numericPart) + numericPart.length);

  useEffect(() => {
    if (!ref.current || started || Number.isNaN(target)) {
      if (Number.isNaN(target)) setDisplayed(value);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          setStarted(true);
          const startTime = performance.now();
          const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = target * eased;
            const formatted =
              target % 1 === 0
                ? Math.round(current).toLocaleString()
                : current.toFixed(1);
            setDisplayed(formatted);
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target, duration, value, started]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayed}
      {suffix}
    </span>
  );
}
