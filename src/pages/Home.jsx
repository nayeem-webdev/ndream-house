import About from "../components/home/About";
import ContactSection from "../components/home/ContactSection";
import Hero from "../components/home/Hero";

export default function Home() {
  return (
    <div className="w-full ">
      <Hero />
      <About />
      <ContactSection />
    </div>
  );
}
