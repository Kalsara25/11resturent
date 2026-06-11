import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import logo from "@/assets/logo.jpg";

const ADDRESS = "No 641 Anuradhapura Road, Dambulla, Sri Lanka, 21122";
const PHONE = "077 340 7408";
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;

const Footer = () => {
  return (
    <footer id="contact" className="relative bg-[hsl(220_30%_8%)] text-white py-24 px-6 overflow-hidden">
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-brand-blue/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-brand-green/20 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand-blue text-xs uppercase tracking-[0.4em]">Visit Us</span>
          <h2 className="font-serif-display text-5xl md:text-7xl mt-4">Find Eleven</h2>
          <p className="text-white/60 mt-4 max-w-xl mx-auto italic">
            Where great taste meets great moments. Fresh flavors, cozy vibes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-brand-red/50 transition-colors">
            <div className="w-12 h-12 rounded-full bg-brand-red/15 flex items-center justify-center mb-5">
              <MapPin className="w-5 h-5 text-brand-red" />
            </div>
            <h3 className="font-serif-display text-xl mb-2">Address</h3>
            <p className="text-white/70 leading-relaxed text-sm">{ADDRESS}</p>
          </div>

          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-brand-blue/50 transition-colors">
            <div className="w-12 h-12 rounded-full bg-brand-blue/15 flex items-center justify-center mb-5">
              <Phone className="w-5 h-5 text-brand-blue" />
            </div>
            <h3 className="font-serif-display text-xl mb-2">Reservations</h3>
            <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="text-white/70 hover:text-brand-blue transition-colors text-sm">
              {PHONE}
            </a>
          </div>

          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-brand-green/50 transition-colors">
            <div className="w-12 h-12 rounded-full bg-brand-green/15 flex items-center justify-center mb-5">
              <Clock className="w-5 h-5 text-brand-green" />
            </div>
            <h3 className="font-serif-display text-xl mb-2">Hours</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Open Daily<br />11:00 AM — 11:00 PM
            </p>
          </div>
        </div>

        <div className="text-center">
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-brand-green text-white font-medium tracking-wide hover:scale-105 transition-transform glow-green"
          >
            <Navigation className="w-5 h-5" />
            Open in Google Maps
          </a>
        </div>

        <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Eleven logo" className="w-9 h-9 rounded-lg" />
            <div>
              <div className="font-serif-display text-lg">Eleven Restaurant</div>
              <div className="text-xs text-white/50">Dambulla · Sri Lanka</div>
            </div>
          </div>
          <div className="text-xs text-white/40 tracking-widest uppercase">
            © {new Date().getFullYear()} Eleven · All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
