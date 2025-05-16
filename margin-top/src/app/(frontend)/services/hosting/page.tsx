import React from 'react';
import Image from 'next/image';
import { getPayload } from 'payload';
import config from '@/payload.config';
import { Hosting as HostingType, Media, Portfolio } from '@/payload-types';
import ServiceCTA from '@/components/ServiceCTA';
import MoreCases from '@/components/MoreCases';
import { FaCloud } from 'react-icons/fa';

interface Section {
  title: string;
  title2?: string;
  description: string;
  features?: Array<{
    feature: string;
  }>;
}

interface HostingContent extends HostingType {
  sections?: Section[];
  costsExplanation?: string;
  title2?: string;
}

export default async function HostingPage() {
  const payloadConfig = await config;
  const payload = await getPayload({config: payloadConfig});
  
  const response = await (payload.find as any)({
    collection: 'hosting',
    where: {
      status: {
        equals: 'published',
      },
    },
  });

  const content = response.docs[0] as HostingContent;

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
    if (!image) return '/banner.png';
    return typeof image === 'string' ? image : image.url || '/banner.png';
  };

  return (
    <div className="bg-white">
      <section className="w-11/12 max-w-5xl mx-auto py-12 md:py-16 mt-4 md:mt-8">
        <div className="inline-block mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4">
            {content?.title || 'Hosting'}
          </h1>
          <hr className="border-gray-600 mb-4 border-t-2" />
        </div>
        <p className="text-xl text-gray-600 max-w-3xl mb-12 md:mb-16">
          {content?.description || 'Betrouwbare en snelle hosting oplossingen voor jouw website.'}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {content?.sections?.map((section: Section, index: number) => (
            <div key={index}>
              <h2 className="text-2xl font-bold mb-6">{section.title}</h2>
              <p className="text-gray-600 mb-8">
                {section.description}
              </p>
              {section.features && section.features.length > 0 && (
                <ul className="space-y-4 text-gray-600">
                  {section.features.map((feature, featureIndex: number) => (
                    <li key={featureIndex} className="flex items-start">
                      <FaCloud className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                      <span>{feature.feature}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
            <Image
              src={getImageUrl(content?.image)}
              alt={content?.title || "Hosting service"}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className='py-16'>
        <MoreCases cases={portfolioCases} currentCaseId="" />
      </section>  

      <section>
        <ServiceCTA 
          serviceType="hosting"
          title="Klaar om je project te starten?"
          subtitle="Vraag vandaag nog een vrijblijvende offerte aan en ontdek hoe wij je kunnen helpen met het realiseren van je digitale ambities"
          ctaText="Vraag een offerte aan"
        />
      </section>
    </div>
  );
} 