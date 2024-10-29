import Hero from "@/components/hero";
import heroImage from "public/home.jpg";

import Cases from "@/components/Cases";
import AboutSection from "@/components/About";
import ServicesSection from "@/components/Services";
import Footer  from "@/components/footer";
import Contact from "./contact/page";


export default function Home() {
  return (
  <div>

    <Hero imgData={heroImage.src}  title="Creating space for BOLD designs" tagline="Design, developement" />

    <AboutSection />
    <ServicesSection />
    <Cases />
    <Contact />
    <Footer />
   
  
  </div>
  );
}
