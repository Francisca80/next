import Hero from "@/components/hero";
import heroImage from "public/home.jpg";

import CaseSection from "@/components/CaseSection";
import ServicesSection from "@/components/ServicesSection";

import SectionBanner from "@/components/SectionBanner";
import ClientLogoBanner from "@/components/ClientLogoBanner";



export default function Home() {
  return (
  <div>
    <Hero imgData={heroImage.src}  title="Creating space for BOLD designs" tagline="Margin-Top design & development" />
    <CaseSection />
    <SectionBanner />
    <ServicesSection />
    <ClientLogoBanner />  

  </div>
  );
}
