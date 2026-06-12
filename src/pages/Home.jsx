import About from "../components/home/About";
import BrandTicker from "../components/home/BrandTicker";
import ContactSection from "../components/home/ContactSection";
import FounderCeo from "../components/home/FounderCeo";
import Hero from "../components/home/Hero";
import Process from "../components/home/Process";
import Projects from "../components/home/Projects";
import Services from "../components/home/Services";
import Testimonials from "../components/home/Testimonials";

export default function Home() {
  return (
    <div className="w-full ">
      <Hero />
      <Services />
      <About />
      <FounderCeo />
      <Projects />
      <Testimonials />
      <Process />
      <ContactSection />
      <BrandTicker />
    </div>
  );
}
