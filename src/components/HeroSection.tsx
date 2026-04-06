import profileImg from "@/assets/profile-hero.jpg";
import { useEffect, useState } from "react";

const roles = [
  "UI/UX Designer",
  "Problem Solver",
  "Visual Thinker",
  "Experience Crafter",
];

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Typewriter
  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center grid-pattern overflow-hidden">

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
        aria-hidden="true"
      />

      {/* Ambient glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-accent/3 blur-[100px] pointer-events-none" />

      {/* Background faded text */}
      <div
        className={`absolute top-[12%] left-1/2 -translate-x-1/2 text-ghost font-black text-[4rem] sm:text-[7rem] md:text-[11rem] xl:text-[10rem] leading-none tracking-[-0.06em] select-none pointer-events-none whitespace-nowrap transition-all duration-[1.2s] ease-out ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        aria-hidden="true"
      >
        HI, I'M
      </div>

      {/* Arch photo with ring */}
      <div
        className={`relative z-10 w-52 h-[17rem] md:w-60 md:h-[20rem] arch-clip overflow-hidden photo-ring-pulse mt-12 transition-all duration-[1s] ease-out delay-200 ${
          loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <img
          src={profileImg}
          alt="Manav Kaushal"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Big name */}
      <h1
        className={`relative z-10 text-foreground font-black text-[3.8rem] sm:text-[5.5rem] md:text-[10rem] xl:text-[9rem] leading-[0.82] -mt-8 sm:-mt-12 md:-mt-20 tracking-[-0.05em] hero-name-shadow transition-all duration-[1s] ease-out delay-300 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        MANAV
      </h1>

      {/* Typewriter subtitle */}
      <p
        className={`relative z-10 text-muted-foreground text-base md:text-lg mt-6 text-center font-light tracking-wide transition-all duration-[1s] ease-out delay-500 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        A{" "}
        <span className="text-foreground font-medium">
          {displayed}
          <span className="inline-block w-[2px] h-[1em] bg-accent ml-0.5 align-middle animate-pulse" />
        </span>
      </p>

      {/* Bottom tagline */}
      <div
        className={`absolute bottom-8 md:bottom-14 left-1/2 -translate-x-1/2 w-full px-6 text-center space-y-1 transition-all duration-[1s] ease-out delay-700 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p className="text-foreground/90 text-base md:text-xl font-light">
          Design begins in{" "}
          <span className="cursive-accent text-lg md:text-2xl">everyday life</span>
        </p>
        <p className="text-foreground/60 text-sm md:text-lg font-light">a chai break, a late night idea,</p>
        <p className="text-foreground/60 text-sm md:text-lg font-light">a problem waiting to be simplified.</p>
      </div>
    </section>
  );
};

export default HeroSection;
