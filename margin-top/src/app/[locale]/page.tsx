import Hero from "@/components/hero";
import heroImage from "public/home.jpg";
import CaseSection from "@/components/CaseSection";
import ServicesSection from "@/components/ServicesSection";
import SectionBanner from "@/components/SectionBanner";
import ClientLogoBanner from "@/components/ClientLogoBanner"; 
import { getTranslations } from 'next-intl/server';
import { client, urlFor } from '@/lib/sanity';
import { groq } from 'next-sanity';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

<<<<<<< HEAD
interface PageProps {
  params: Promise<{ locale: string }>;
}

interface HomePageData {
  hero: {
    title: string;
    tagline: string;
    image: SanityImageSource;
  };
  language: string;
}

async function getHomeData() {
  try {
    const query = groq`*[_type == "homepage"] {
      hero {
        title,
        tagline,
        image
      },
      language
    }`;

    const data = await client.fetch(query);
    console.log('Sanity Data:', data);
    return data;
  } catch (error) {
    console.error('Sanity Query Error:', error);
    return null;
  }
}

export async function generateMetadata({ 
  params 
}: PageProps) {
  const { locale } = await params;
  return {
    title: `Home - ${locale.toUpperCase()}`,
  };
}

export default async function Home({
  params
}: PageProps) {
  const { locale } = await params;
  console.log('Current locale:', locale);

  // Fetch both data and translations in parallel
  const [allData, t] = await Promise.all([
    getHomeData(),
    getTranslations('home')
  ]);

  // Find the content for the current language
  const data = allData?.find((item: HomePageData) => item.language === locale);
  console.log('Language specific data:', data);

  // Get hero image URL from Sanity or fallback
  const heroImageUrl = data?.hero?.image 
    ? urlFor(data.hero.image).url() 
    : heroImage.src;

  return (
    <div>
      <Hero 
        imgData={heroImageUrl}
        title={data?.hero?.title || t('hero.title')}
        tagline={data?.hero?.tagline || t('hero.tagline')}
      />
=======
export default function Home() {
  const t = useTranslations('home');

  return (
    <div>
      <Hero imgData={heroImage.src} title={t('hero.title')} tagline={t('hero.tagline')} />
>>>>>>> 4d37bc6 (language 2)
      <CaseSection />
      <SectionBanner />
      <ServicesSection />
      <ClientLogoBanner />  
    </div>
  );
}
