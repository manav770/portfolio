import { useScrollReveal } from "@/hooks/useScrollReveal";
import aboutCreativity from "@/assets/about-creativity.jpg";
import aboutPersonal from "@/assets/about-personal.jpg";
import aboutNature from "@/assets/about-nature.jpg";

const images = [
  { src: aboutCreativity, alt: "Creativity - lightbulb" },
  { src: aboutPersonal, alt: "Manav personal" },
  { src: aboutNature, alt: "Nature inspiration" },
];

const AboutSection = () => {
  const titleRef = useScrollReveal();
  const textRef = useScrollReveal();
  const imagesRef = useScrollReveal();

  return (
    <section id="about" className="grid-pattern py-16 md:py-24 px-6 md:px-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2
          ref={titleRef}
          className="scroll-reveal text-foreground font-bold text-4xl md:text-6xl mb-10 tracking-tight"
        >
          About Me
        </h2>

        <div ref={textRef} className="scroll-reveal space-y-7" style={{ transitionDelay: "100ms" }}>
          <p className="text-muted-foreground text-lg font-light">
            Hi, I'm Manav, from Chandigarh.
          </p>
          <p className="text-muted-foreground text-lg leading-[1.8] font-light">
            Creativity is something that stays with me all the time —
            so much that{" "}
            <strong className="text-foreground font-semibold">
              design ideas occasionally visit me in my dreams.
            </strong>
          </p>
          <div className="space-y-1">
            <p className="text-foreground font-semibold text-lg">
              Nature keeps me grounded.
            </p>
            <p className="text-muted-foreground text-lg leading-[1.8] font-light">
              The sky, open spaces, and quiet moments often inspire the
              way I think about simplicity in design.
            </p>
          </div>
          <p className="text-muted-foreground text-lg leading-[1.8] font-light">
            And somewhere between ideas and inspiration, there's
            cricket — a game I love both on the screen and on the field.
          </p>
        </div>

        <div
          ref={imagesRef}
          className="scroll-reveal flex justify-center gap-3 md:gap-5 mt-12"
          style={{ transitionDelay: "250ms" }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className={`w-[30vw] max-w-[11rem] h-[38vw] max-h-[14rem] md:w-56 md:h-72 rounded-2xl overflow-hidden image-glow group cursor-pointer ${["float-1","float-2","float-3"][i]}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
