import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import resumePdf from "@/assets/Resume - Manav Kaushal.pdf";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 py-5 transition-all duration-500 ${
          scrolled || menuOpen ? "nav-blur border-b border-border/50" : ""
        }`}
      >
        <span className="text-foreground font-semibold text-lg tracking-tight">
          Manav Kaushal
        </span>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
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

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-foreground/70 hover:text-foreground transition-colors duration-300 p-1"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      <div
        className={`fixed top-[65px] left-0 right-0 z-40 nav-blur border-b border-border/50 flex flex-col items-center gap-6 py-8 md:hidden transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-2"
        }`}
      >
        <a
          href="#projects"
          onClick={closeMenu}
          className="text-foreground/70 hover:text-foreground transition-colors duration-300 text-base font-medium"
        >
          Projects
        </a>
        <a
          href="#about"
          onClick={closeMenu}
          className="text-foreground/70 hover:text-foreground transition-colors duration-300 text-base font-medium"
        >
          Who I Am
        </a>
        <a
          href={resumePdf}
          download="Resume - Manav Kaushal.pdf"
          onClick={closeMenu}
          className="flex items-center gap-2 border border-foreground/20 rounded-full px-6 py-2.5 text-sm font-medium text-foreground hover:border-foreground/40 hover:bg-foreground/5 transition-all duration-300"
        >
          <Download size={14} />
          Resume
        </a>
      </div>
    </>
  );
};

export default Navbar;
