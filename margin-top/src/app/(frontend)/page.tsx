import Hero from "@/components/hero";
import CaseSection from "@/components/CaseSection";
import ServicesSection from "@/components/ServicesSection";
import ClientLogoBanner from "@/components/ClientLogoBanner"; 
import { getPayload } from "payload";
import config from "@/payload.config";
import AboutSection from "@/components/AboutSection";
import ServiceCTA from "@/components/ServiceCTA";

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

async function getHomeData() {
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

  return {
    homepage,
    heroImages,
    services
  };
}

export default async function Home() {
  const { homepage, heroImages, services } = await getHomeData();

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="md:sticky md:top-0 relative z-0 h-screen">
        <Hero 
          image={homepage.heroImage}
          title={homepage.heroTitle} 
          tagline={homepage.heroTagline}
          images={heroImages}
          buttons={homepage.buttons}
        />
      </div>
      
      {/* Content that scrolls over the hero */}
      <div className="relative md:z-10 z-0 bg-white">
        <AboutSection />
        <CaseSection />
        <ServicesSection initialServices={services} />
        <ServiceCTA
          serviceType="margin-top"
          title="Klaar om je project te starten?"
          subtitle="Vraag vandaag nog een vrijblijvende offerte aan en ontdek hoe wij je kunnen helpen met het realiseren van je digitale ambities"
          ctaText="Vraag een offerte aan"
        />
        <ClientLogoBanner />  
      </div>
    </div>
  );
}
