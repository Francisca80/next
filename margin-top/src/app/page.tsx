import Hero from "@/components/hero";
import heroImage from "public/home.jpg";

import Cases from "@/components/Cases";
import AboutSection from "@/components/About";
import Services from "@/components/services";
import Footer  from "@/components/footer";
import CTA from "@/components/cta";


export default function Home() {
  return (
  <div>

    <Hero imgData={heroImage.src} imgAlt="hero" title="Creating space for BOLD designs" tagline="Design, developement" />

    <AboutSection />
    <Services />
    <Cases />
    <CTA/>
    <Footer />
   
  
  </div>
  );
}
