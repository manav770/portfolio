import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="grid-pattern border-t border-border/50 py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-6">

        {/* Name + tagline */}
        <div className="text-center space-y-2">
          <p className="text-foreground font-bold text-xl tracking-tight">Manav Kaushal</p>
          <p className="text-muted-foreground text-sm font-light">UI/UX Designer · Turning ideas into experiences</p>
        </div>

        {/* Divider */}
        <div className="w-px h-6 bg-border/60" />

        {/* Social icons */}
        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/manav-kaushal-63aa29248/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-10 h-10 rounded-full border border-foreground/15 flex items-center justify-center text-foreground/50 hover:text-foreground hover:border-foreground/40 hover:bg-foreground/5 transition-all duration-300"
          >
            <Linkedin size={15} />
          </a>
          <a
            href="mailto:manav.k134410@gmail.com"
            aria-label="Email"
            className="w-10 h-10 rounded-full border border-foreground/15 flex items-center justify-center text-foreground/50 hover:text-foreground hover:border-foreground/40 hover:bg-foreground/5 transition-all duration-300"
          >
            <Mail size={15} />
          </a>
        </div>

        {/* Email */}
        <a
          href="mailto:manav.k134410@gmail.com"
          className="text-muted-foreground text-sm font-light hover:text-foreground transition-colors duration-300 tracking-wide"
        >
          manav.k134410@gmail.com
        </a>

        {/* Copyright */}
        <p className="text-foreground/20 text-xs font-light tracking-wider">
          © 2025 Manav Kaushal. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
