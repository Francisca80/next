import Hero from "@/components/hero";
import heroImage from "public/home.jpg";

import Cases from "@/components/Cases";

import ServicesSection from "@/components/Services";
import Footer  from "@/components/footer";

import CTA from "@/components/CTA";
import SectionBanner from "@/components/SectionBanner";

import ContactSection from "@/components/Contact";
import FAQ from "@/components/FAQ";
import ClientLogoBanner from "@/components/ClientLogoBanner";


export default function Home() {
  return (
  <div>

    <Hero imgData={heroImage.src}  title="Creating space for BOLD designs" tagline="Design, developement" />
    <Cases />
    <CTA />
    <SectionBanner />
    <ServicesSection />
   
    <ClientLogoBanner />  
  
    <FAQ />
    <ContactSection />
    <Footer />
   
  
  </div>
  );
}
