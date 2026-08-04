import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 20, suffix: "+", label: "Projects Designed" },
  { value: 2, suffix: "+", label: "Years of Practice" },
  { value: 10, suffix: "+", label: "Tools & Methods" },
  { value: 100, suffix: "%", label: "Passion for Design" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1400;
          const steps = 40;
          const increment = target / steps;
          let current = 0;
          const interval = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(interval);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

const StatsBar = () => (
  <div className="border-y border-border/40 py-10 px-6">
    <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      {stats.map((s) => (
        <div key={s.label} className="space-y-1">
          <p className="text-foreground font-black text-4xl md:text-5xl tracking-tight">
            <Counter target={s.value} suffix={s.suffix} />
          </p>
          <p className="text-muted-foreground text-xs uppercase tracking-widest font-medium">{s.label}</p>
        </div>
      ))}
    </div>
  </div>
);

export default StatsBar;
