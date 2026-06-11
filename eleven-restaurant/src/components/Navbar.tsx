import logo from "@/assets/logo.jpg";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 flex items-center justify-between mix-blend-difference">
      <div className="flex items-center gap-3">
        <img src={logo} alt="Eleven Restaurant logo" className="w-10 h-10 rounded-lg object-cover" />
        <span className="font-serif-display text-white text-xl tracking-wide">Eleven</span>
      </div>
      <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-[0.2em] text-white/90">
        <a href="#about" className="hover:text-brand-blue transition-colors">About</a>
        <a href="#menu" className="hover:text-brand-green transition-colors">Menu</a>
        <a href="#contact" className="hover:text-brand-red transition-colors">Contact</a>
      </nav>
    </header>
  );
};

export default Navbar;
