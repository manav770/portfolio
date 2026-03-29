import { Download } from "lucide-react";
import { useEffect, useState } from "react";
import resumePdf from "@/assets/Resume - Manav Kaushal.pdf";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-5 transition-all duration-500 ${
        scrolled ? "nav-blur border-b border-border/50" : ""
      }`}
    >
      <span className="text-foreground font-semibold text-lg tracking-tight">
        Manav Kaushal
      </span>
      <div className="flex items-center gap-10">
        <a
          href="#projects"
          className="link-underline text-foreground/70 hover:text-foreground transition-colors duration-300 text-sm font-medium"
        >
          Projects
        </a>
        <a
          href="#about"
          className="link-underline text-foreground/70 hover:text-foreground transition-colors duration-300 text-sm font-medium"
        >
          Who I Am
        </a>
        <a
          href={resumePdf}
          download="Resume - Manav Kaushal.pdf"
          className="group flex items-center gap-2 border border-foreground/20 rounded-full px-5 py-2.5 text-sm font-medium text-foreground hover:border-foreground/40 hover:bg-foreground/5 transition-all duration-300 active:scale-[0.96]"
        >
          <Download size={14} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
