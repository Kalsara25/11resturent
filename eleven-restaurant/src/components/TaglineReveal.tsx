import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import indoor from "@/assets/indoor.jpg";

gsap.registerPlugin(ScrollTrigger);

const LINE_1 = "Where great taste";
const LINE_2 = "meets great moments.";
const LINE_3 = "Fresh flavors, cozy vibes.";

const splitWords = (text: string) =>
  text.split(" ").map((word, i) => (
    <span key={i} className="inline-block overflow-hidden mr-[0.25em] align-bottom">
      <span className="reveal-char inline-block">{word}</span>
    </span>
  ));

const TaglineReveal = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const chars = sectionRef.current!.querySelectorAll(".reveal-char");
      gsap.to(chars, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.06,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 20%",
          scrub: 1,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden"
    >
      <div className="absolute inset-0">
        <img src={indoor} alt="Eleven Restaurant interior dining hall" className="w-full h-full object-cover scale-110 blur-sm" />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      <div className="relative z-10 max-w-5xl text-center">
        <span className="inline-block text-brand-blue text-xs uppercase tracking-[0.4em] mb-8">
          — The Eleven Promise —
        </span>
        <h2 className="font-serif-display text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05]">
          <span className="block">{splitWords(LINE_1)}</span>
          <span className="block">{splitWords(LINE_2)}</span>
          <span className="block mt-4 text-brand-blue italic text-3xl sm:text-5xl md:text-6xl">
            {splitWords(LINE_3)}
          </span>
        </h2>
      </div>
    </section>
  );
};

export default TaglineReveal;
