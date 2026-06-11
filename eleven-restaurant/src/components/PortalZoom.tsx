import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import exterior from "@/assets/exterior.jpg";
import interior from "@/assets/interior.jpg";

gsap.registerPlugin(ScrollTrigger);

const PortalZoom = () => {
  const stageRef = useRef<HTMLDivElement>(null);
  const exteriorRef = useRef<HTMLDivElement>(null);
  const interiorRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Zoom-origin centered on the doorway of the exterior image (adjusted to 50% 92%)
      gsap.set(exteriorRef.current, { 
        transformOrigin: "50% 92%",
        backfaceVisibility: "hidden",
        transformStyle: "preserve-3d",
        scale: 1 
      });
      gsap.set(interiorRef.current, { opacity: 0, scale: 1.2 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: stageRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      tl.to(exteriorRef.current, { 
          scale: 20, 
          ease: "power2.in", 
          duration: 1,
          modifiers: {
            scale: gsap.utils.clamp(1, 100),
            scaleX: gsap.utils.clamp(1, 100),
            scaleY: gsap.utils.clamp(1, 100)
          } 
        }, 0)
        .to(heroRef.current, { opacity: 0, ease: "power2.out", duration: 0.3 }, 0)
        .to(exteriorRef.current, { opacity: 0, ease: "power2.inOut", duration: 0.4 }, 0.6)
        .to(interiorRef.current, { opacity: 1, scale: 1, ease: "power2.inOut", duration: 0.4 }, 0.6);
    }, stageRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={stageRef} className="scroll-stage bg-black">
      <div className="pinned-frame">
        {/* Interior (revealed underneath) */}
        <div ref={interiorRef} className="zoom-layer">
          <img src={interior} alt="Inside Eleven Restaurant" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Exterior (zooms into door) */}
        <div ref={exteriorRef} className="zoom-layer overflow-hidden will-change-transform">
          <img src={exterior} alt="Eleven Restaurant entrance" className="w-full h-full object-cover" />
        </div>

        {/* Hero overlay */}
        <div
          ref={heroRef}
          className="absolute inset-0 z-10 flex flex-col items-center justify-end pb-24 px-6 text-center pointer-events-none"
        >
          <div className="absolute inset-0 bg-overlay-dark" />
          <div className="relative max-w-4xl">
            <span className="inline-block px-4 py-1.5 text-xs uppercase tracking-[0.35em] text-white/90 border border-white/30 rounded-full mb-6 backdrop-blur-sm">
              Dambulla · Sri Lanka
            </span>
            <h1 className="font-serif-display text-white text-6xl md:text-8xl lg:text-9xl leading-[0.95] text-glow">
              Eleven
            </h1>
            <p className="mt-6 text-white/80 text-sm md:text-base tracking-[0.3em] uppercase">
              Scroll to enter
            </p>
            <div className="mt-8 mx-auto w-px h-16 bg-gradient-to-b from-white/80 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortalZoom;
