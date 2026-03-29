import { useScrollReveal } from "@/hooks/useScrollReveal";

const PhilosophySection = () => {
  const ref2 = useScrollReveal();
  const ref3 = useScrollReveal();

  return (
    <section className="grid-pattern py-16 md:py-24">
      {/* Second block */}
      <div ref={ref2} className="scroll-reveal text-center max-w-2xl mx-auto px-6 space-y-4" style={{ transitionDelay: "0ms" }}>
        <p className="text-foreground/70 text-lg md:text-xl font-light">
          Good design doesn't start in Figma.
        </p>
        <p className="text-foreground/60 text-lg md:text-xl leading-[1.8] font-light">
          It starts in everyday moments— a confused user, a missed tap, someone muttering{" "}
          <span className="cursive-accent text-xl md:text-2xl">"why is this so hard?"</span>
        </p>
      </div>

      {/* Punchline */}
      <div ref={ref3} className="scroll-reveal text-center max-w-2xl mx-auto px-6 mt-12" style={{ transitionDelay: "200ms" }}>
        <p className="text-foreground text-xl md:text-2xl font-medium tracking-tight">
          And fixing them is where great experiences begin.
        </p>
      </div>
    </section>
  );
};

export default PhilosophySection;
