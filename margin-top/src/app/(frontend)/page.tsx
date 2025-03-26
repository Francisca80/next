import Hero from "@/components/hero";
import CaseSection from "@/components/CaseSection";
import ServicesSection from "@/components/ServicesSection";
import ClientLogoBanner from "@/components/ClientLogoBanner"; 
import { getPayload } from "payload";
import { headers as GetHeaders } from 'next/headers';
import config from "@/payload.config";
import AboutSection from "@/components/AboutSection";

interface PageData {
  heroImage: {
    url: string;
    filename: string;
  } | null;
  heroTitle: string;
  heroTagline: string;
  buttons: {
    primary: {
      text: string;
      url: string;
    };
    secondary: {
      text: string;
      url: string;
    };
  };
}

export default async function Home() {
  const headers = await GetHeaders();
  const payloadConfig = await config;
  const payload = await getPayload({config: payloadConfig});
  
  const response = await (payload.find as any)({
    collection: 'pages',
    where: {
      slug: { equals: 'home' }
    }
  });

  const homepage = response.docs[0] as unknown as PageData;

  if (!homepage) {
    throw new Error('Homepage not found');
  }
  
  // Fetch data from hero collection
  const heroResponse = await (payload.find as any)({
    collection: 'hero',
    limit: 1,
    depth: 2 // To get nested media objects
  });
  
  // Get hero images if they exist
  const heroImages = heroResponse?.docs?.[0]?.images?.map((item: { image: any }) => item.image) || [];

  // Fetch services data
  const servicesResponse = await (payload.find as any)({
    collection: 'service',
    limit: 20,
    depth: 2
  });

  const services = servicesResponse?.docs || [];

  return (
    <div className="relative">
      {/* Sticky Hero */}
      <div className="sticky top-0 z-0 h-screen">
        <Hero 
          image={homepage.heroImage}
          title={homepage.heroTitle} 
          tagline={homepage.heroTagline}
          images={heroImages}
          buttons={homepage.buttons}
        />
      </div>
      
      {/* Content that scrolls over the hero */}
      <div className="relative z-10 bg-white">
      <AboutSection />
       <CaseSection />
        <ServicesSection initialServices={services} />
        <ClientLogoBanner />  
      </div>
    </div>
  );
}
