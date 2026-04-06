import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useToast } from "@/hooks/use-toast";
import projectSwoot from "@/assets/project-swoot.png";
import projectVerdant from "@/assets/project-verdant.png";
import projectLifeSage from "@/assets/life-sage.png";

const projects = [
  {
    title: "Swoot",
    description:
      'Swoot is a <strong>sports-tech mobile application</strong> designed to simplify court booking and player engagement for racket sports like padel and pickleball. The platform allows players to discover courts, join matches, track performance, and participate in tournaments through a unified experience.',
    roles: ["Experience Research", "Visual Design"],
    image: projectSwoot,
    imagePosition: "right" as const,
    link: "https://www.behance.net/gallery/246989857/Application-Case-Study",
  },
  {
    title: "Verdant Equanim",
    description:
      'Verdant Equanim is a <strong>web-based SaaS dashboard</strong> designed to help users manage and monitor services for their own operational needs. The platform focuses on providing a centralized interface where users can organize data, track performance, and control multiple functions from a single dashboard.',
    roles: ["Experience Research", "Visual Design"],
    image: projectVerdant,
    imagePosition: "left" as const,
    confidential: true,
  },
  {
    title: "LifeSage",
    description:
      'LifeSage is a <strong>dark-theme mobile health tracking application</strong> designed to help users monitor and manage their daily health metrics through integration with a smartwatch. The app collects real-time health data and presents it in a clear, easy-to-understand interface, allowing users to track their physical activity, etc',
    roles: ["Experience Research", "Interface Design"],
    image: projectLifeSage,
    imagePosition: "right" as const,
  },
];

const ProjectsSection = () => {
  const titleRef = useScrollReveal();

  return (
    <section id="projects" className="grid-pattern py-16 md:py-24 px-6 md:px-16">
      <h2
        ref={titleRef}
        className="scroll-reveal text-foreground font-bold text-4xl md:text-6xl text-center mb-12 tracking-tight"
      >
        Projects
      </h2>

      <div className="max-w-5xl mx-auto space-y-8">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
};

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useScrollReveal();
  const cardRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const isImageRight = project.imagePosition === "right";

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    card.style.transform = `perspective(1000px) rotateY(${x * 5}deg) rotateX(${-y * 3}deg) scale3d(1.01,1.01,1.01)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current)
      cardRef.current.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)";
  };

  return (
    <div
      ref={ref}
      className="scroll-reveal"
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="project-card-glow rounded-2xl p-6 md:p-12 group"
        style={{ transformStyle: "preserve-3d", transition: "transform 0.18s ease, box-shadow 0.4s ease", willChange: "transform" }}
      >
        <div className={`flex flex-col ${isImageRight ? "md:flex-row" : "md:flex-row-reverse"} gap-6 md:gap-12 items-center`}>
          {/* Text side */}
          <div className="w-full md:w-1/2">
            <h3 className="text-foreground font-bold text-2xl md:text-3xl mb-5 tracking-tight">
              {project.title}
            </h3>
            <p
              className="text-muted-foreground text-sm md:text-[15px] leading-[1.75] mb-7 [&_strong]:text-foreground/90 [&_strong]:font-semibold"
              dangerouslySetInnerHTML={{ __html: project.description }}
            />
            <div className="mb-7">
              <p className="text-foreground font-semibold mb-2 tracking-widest uppercase text-[11px]">
                Role
              </p>
              {project.roles.map((role) => (
                <p key={role} className="text-muted-foreground text-sm">{role}</p>
              ))}
            </div>
            {project.comingSoon ? (
              <span className="inline-flex items-center gap-1.5 text-[hsl(40_90%_55%)] text-sm font-semibold">
                Coming Soon <span className="animate-spin text-base">✳︎</span>
              </span>
            ) : project.confidential ? (
              <button
                onClick={() =>
                  toast({
                    description:
                      "Due to confidentiality and privacy considerations, the detailed case study for this project cannot be publicly shared.",
                  })
                }
                className="inline-flex items-center gap-1.5 text-accent text-sm font-medium hover:gap-2.5 transition-all duration-300"
              >
                View Project
                <ArrowUpRight size={14} className="transition-transform duration-300" />
              </button>
            ) : (
              <a
                href={project.link ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-accent text-sm font-medium group/link hover:gap-2.5 transition-all duration-300"
              >
                View Project
                <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300" />
              </a>
            )}
          </div>

          {/* Image side */}
          <div className="w-full md:w-1/2">
            <div className="relative rounded-xl overflow-hidden image-glow group-hover:shadow-[0_12px_50px_-8px_hsl(0_0%_0%/0.8)] transition-shadow duration-500">
              <img
                src={project.image}
                alt={project.title}
                className={`w-full group-hover:scale-[1.03] transition-transform duration-700 ease-out ${
                  project.comingSoon ? "blur-sm scale-[1.03] brightness-50" : ""
                }`}
              />
              {project.comingSoon && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                  <span className="text-foreground/90 text-sm font-semibold tracking-widest uppercase">Coming Soon</span>
                  <span className="w-8 h-px bg-foreground/30" />
                  <span className="text-foreground/40 text-xs tracking-wider">Case study in progress</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;
