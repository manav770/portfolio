const skills = [
  "UI Design", "UX Research", "Figma", "Prototyping", "Wireframing",
  "Design Systems", "User Testing", "Interaction Design", "Visual Design", "Information Architecture",
];

const SkillsTicker = () => {
  const doubled = [...skills, ...skills];

  return (
    <div className="relative overflow-hidden border-y border-border/40 py-4 bg-background/60">
      {/* fade edges */}
      <div className="absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

      <div className="marquee-track">
        {doubled.map((skill, i) => (
          <span key={i} className="flex items-center gap-6 px-6 text-sm font-medium text-foreground/40 whitespace-nowrap tracking-widest uppercase">
            {skill}
            <span className="w-1 h-1 rounded-full bg-accent/50 inline-block" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsTicker;
