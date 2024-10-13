import Hero from "@/components/hero";
import heroImage from "public/home.jpg";
import LogoSlider from "@/components/logo-slider";
import Cases from "@/components/Cases";
import AboutSection from "@/components/About";
import Services from "@/components/services";


export default function Home() {
  return (
  <div>

    <Hero imgData={heroImage.src} imgAlt="hero" title="Margin-Top" tagline="Creating space for BOLD designs" />
    <LogoSlider />
    <AboutSection />
    <Services />
    <Cases />
  </div>
  );
}
