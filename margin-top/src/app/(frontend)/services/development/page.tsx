import React from "react";
import { FaCloud, FaCode,  FaDatabase, FaMobile, FaServer } from "react-icons/fa";
import ServiceCTA from '@/components/ServiceCTA';
import Image from 'next/image';
import Link from 'next/link';
import { getPayload } from 'payload';
import config from '@/payload.config';
import { Development as DevelopmentType, Media, Portfolio } from '@/payload-types';
import ServiceFaqSection from '@/components/ServiceFaqSection';
import MoreCases from '@/components/MoreCases';

interface Section {
  title: string;
  description: string;
  features?: Array<{
    feature: string;
  }>;
  link?: {
    text: string;
    url: string;
  };
}

interface DevelopmentContent extends DevelopmentType {
  sections?: Section[];
  description?: string;
  image?: Media | string;
  faqTitle?: string;
  faqDescription?: string;
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
}

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaCode':
      return <FaCode className="w-6 h-6" />;
    case 'FaServer':
      return <FaServer className="w-6 h-6" />;
    case 'FaDatabase':
      return <FaDatabase className="w-6 h-6" />;
    case 'FaMobile':
      return <FaMobile className="w-6 h-6" />;
    case 'FaCloud':
      return <FaCloud className="w-6 h-6" />;
    default:
      return <FaCode className="w-6 h-6" />;
  }
};

export default async function DevelopmentPage() {
  const payloadConfig = await config;
  const payload = await getPayload({config: payloadConfig});
  
  const response = await (payload.find as any)({
    collection: 'development',
    where: {
      status: {
        equals: 'published',
      },
    },
  });

  const developmentContent = response.docs[0] as DevelopmentContent;

  // Fetch portfolio cases for the MoreCases component
  const portfolioResponse = await (payload.find as any)({
    collection: 'portfolio',
    where: {
      status: {
        equals: 'published',
      },
    },
  });

  const portfolioCases = portfolioResponse.docs as Portfolio[];

  const getImageUrl = (image: Media | string | null): string => {
    if (!image) return '/wordpress/wordpressdev.jpg';
    return typeof image === 'string' ? image : image.url || '/wordpress/wordpressdev.jpg';
  };

  return (
    <div className="bg-white">
      <section className="w-11/12 max-w-5xl mx-auto py-12 md:py-16 mt-4 md:mt-8">
        <div className="inline-block mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4">
            {developmentContent?.title || 'Development'}
          </h1>
          <hr className="border-gray-600 mb-4 border-t-2" />
        </div>
        <p className="text-xl text-gray-600 max-w-3xl mb-12 md:mb-16">
          {developmentContent?.description || 'Development is het hart van digitale innovatie...'}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {developmentContent?.sections?.map((section: Section, index: number) => (
            <div key={index}>
              <h2 className="text-2xl font-bold mb-6">{section.title}</h2>
              <p className="text-gray-600 mb-8">
                {section.description}
              </p>
              {section.features && section.features.length > 0 && (
                <ul className="mt-6 space-y-4">
                  {section.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-6 w-6 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="ml-3 text-gray-700">{feature.feature}</span>
                    </li>
                  ))}
                </ul>
              )}
              {section.link && section.link.url && (
                <div className="mt-8">
                  <Link 
                    href={section.link.url.startsWith('/') ? section.link.url : `/${section.link.url}`}
                    className="header-button"
                  >
                    {section.link.text}
                  </Link>
                </div>
              )}
            </div>
          ))}

          <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
            <Image
              src={getImageUrl(developmentContent?.image || null)}
              alt={developmentContent?.title || "Development service"}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <section>
        <MoreCases cases={portfolioCases} currentCaseId="" />
      </section>

      <section>
        <ServiceCTA 
          serviceType="development"
          title="Klaar om je project te starten?"
          subtitle="Vraag vandaag nog een vrijblijvende offerte aan en ontdek hoe wij je kunnen helpen met het realiseren van je digitale ambities"
          ctaText="Vraag een offerte aan"
        />
      </section>

      <section className="w-11/12 max-w-5xl mx-auto py-24">
        <ServiceFaqSection 
          title={developmentContent?.faqTitle || "Veelgestelde vragen"}
          description={developmentContent?.faqDescription || "Antwoorden op de meest gestelde vragen over development"}
          faqs={developmentContent?.faqs || []}
        />
      </section>
    </div>
  );
} 