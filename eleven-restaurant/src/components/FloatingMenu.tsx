import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import biryani from "@/assets/food-biryani.jpg";
import wrap from "@/assets/food-wrap.jpg";
import stirfry from "@/assets/food-stirfry.jpg";

gsap.registerPlugin(ScrollTrigger);

const dishes = [
  { img: biryani, name: "Signature Chicken Biryani", desc: "Slow-cooked basmati, aromatic spices, tender chicken — served with three classic sides.", side: "left" },
  { img: wrap, name: "Eleven Shawarma Wrap", desc: "House-marinated chicken, crisp fries and tangy slaw, all wrapped warm.", side: "right" },
  { img: stirfry, name: "Garden Stir-Fry Bowl", desc: "Wok-tossed seasonal vegetables and chicken over fragrant steamed rice.", side: "left" },
];

const FloatingMenu = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = sectionRef.current!.querySelectorAll<HTMLElement>("[data-dish]");
      items.forEach((el) => {
        const fromLeft = el.dataset.side === "left";
        gsap.fromTo(
          el.querySelector("[data-dish-img]"),
          { x: fromLeft ? -200 : 200, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              end: "top 30%",
              scrub: 1,
            },
          }
        );
        gsap.fromTo(
          el.querySelector("[data-dish-text]"),
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              end: "top 40%",
              scrub: 1,
            },
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="menu" ref={sectionRef} className="relative bg-background py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-brand-red text-xs uppercase tracking-[0.4em]">Our Menu</span>
          <h2 className="font-serif-display text-5xl md:text-7xl mt-4">A Taste of Eleven</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Hand-crafted dishes that blend tradition with bold, modern flavors.
          </p>
        </div>

        <div className="space-y-32 md:space-y-48">
          {dishes.map((d, i) => (
            <div
              key={i}
              data-dish
              data-side={d.side}
              className={`grid md:grid-cols-2 gap-12 items-center ${d.side === "right" ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <div data-dish-img className="food-glow">
                <div className="relative rounded-2xl overflow-hidden aspect-square shadow-elegant">
                  <img src={d.img} alt={d.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>
              <div data-dish-text className="space-y-5">
                <div className="text-brand-blue text-sm uppercase tracking-[0.3em]">
                  Dish 0{i + 1}
                </div>
                <h3 className="font-serif-display text-4xl md:text-5xl leading-tight">{d.name}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-md">{d.desc}</p>
                <div className="flex gap-3 pt-2">
                  <span className="px-3 py-1 text-xs rounded-full border border-brand-green text-brand-green uppercase tracking-wider">Fresh</span>
                  <span className="px-3 py-1 text-xs rounded-full border border-brand-red text-brand-red uppercase tracking-wider">House Special</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FloatingMenu;
