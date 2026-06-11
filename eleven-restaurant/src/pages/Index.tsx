import { useLenis } from "@/hooks/useLenis";
import Navbar from "@/components/Navbar";
import HeroSequence from "@/components/HeroSequence";
import TaglineReveal from "@/components/TaglineReveal";
import FloatingMenu from "@/components/FloatingMenu";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  useLenis();

  return (
    <main className="relative bg-background">
      <Navbar />
      <HeroSequence />
      <TaglineReveal />
      <About />
      <FloatingMenu />
      <Footer />
    </main>
  );
};

export default Index;