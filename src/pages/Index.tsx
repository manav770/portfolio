import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import SkillsTicker from "@/components/SkillsTicker";
import ProjectsSection from "@/components/ProjectsSection";
import StatsBar from "@/components/StatsBar";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const PARTICLE_COUNT = 18;

const Index = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!glowRef.current) return;
      glowRef.current.style.left = `${e.clientX}px`;
      glowRef.current.style.top = `${e.clientY}px`;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Cursor glow */}
      <div ref={glowRef} className="cursor-glow" />

      {/* Floating background particles */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {Array.from({ length: PARTICLE_COUNT }).map((_, i) => {
          const size = Math.random() * 3 + 1.5;
          const left = Math.random() * 100;
          const duration = Math.random() * 18 + 12;
          const delay = Math.random() * 14;
          return (
            <span
              key={i}
              className="particle"
              style={{
                width: size,
                height: size,
                left: `${left}%`,
                bottom: `-${size}px`,
                animationDuration: `${duration}s`,
                animationDelay: `${delay}s`,
              }}
            />
          );
        })}
      </div>

      <Navbar />
      <HeroSection />
      <PhilosophySection />
      <SkillsTicker />
      <ProjectsSection />
      <StatsBar />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
