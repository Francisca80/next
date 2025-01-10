import Hero from "@/components/hero";
import heroImage from "public/home.jpg";

import CaseSection from "@/components/CaseSection";
import ServicesSection from "@/components/ServicesSection";

import SectionBanner from "@/components/SectionBanner";
import ClientLogoBanner from "@/components/ClientLogoBanner"; 
import { useTranslations } from 'next-intl';


export default function Home() {
  const t = useTranslations('home');

  return (
  <div>
    <Hero imgData={heroImage.src}  title={t('hero.title')} tagline={t('hero.tagline')} />
    <CaseSection />
    <SectionBanner />
    <ServicesSection />
    <ClientLogoBanner />  

  </div>
  );
}
