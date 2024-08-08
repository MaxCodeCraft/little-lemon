import HeroSection from "@/components/sections/HeroSection";
import Highlights from "@/components/sections/Highlights";
import Testimonials from "@/components/sections/Testimonials";
import About from "@/components/sections/About";

export default function Home() {
  return (
    <main className="grid grid-cols-12">
      <HeroSection />
      <Highlights />
      <Testimonials />
      <About />
    </main>
  );
}
