import booth from "@/assets/booth.jpg";

const About = () => {
  return (
    <section id="about" className="bg-background py-32 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <span className="text-brand-green text-xs uppercase tracking-[0.4em]">Our Story</span>
          <h2 className="font-serif-display text-5xl md:text-6xl leading-tight">
            A table set for <span className="italic text-brand-red">moments</span> that matter.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Born in the heart of Dambulla, Eleven is more than a restaurant — it&apos;s a living room
            for the city. Our chefs work with farm-fresh produce, slow-cooked stocks, and spices
            ground in-house every morning.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Whether you&apos;re here for a quiet lunch, a long dinner with friends, or a celebration,
            we set the table with the same care: honest food, warm light, and a little magic.
          </p>
          <div className="flex flex-wrap gap-6 pt-4">
            <div>
              <div className="font-serif-display text-4xl text-brand-blue">11+</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Signature dishes</div>
            </div>
            <div>
              <div className="font-serif-display text-4xl text-brand-green">100%</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Farm-fresh</div>
            </div>
            <div>
              <div className="font-serif-display text-4xl text-brand-red">7</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Days a week</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-to-br from-brand-blue/20 via-brand-green/10 to-brand-red/20 rounded-3xl blur-2xl" />
          <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-elegant">
            <img src={booth} alt="Cozy booth seating at Eleven Restaurant" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
