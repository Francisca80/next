import React from 'react';
import Image from 'next/image';
import { getPayload } from 'payload';
import config from '@/payload.config';
import { Branding as BrandingType, Media, Portfolio } from '@/payload-types';
import ServiceCTA from '@/components/ServiceCTA';
import MoreCases from '@/components/MoreCases';

interface Section {
  title: string;
  description: string;
  features?: Array<{
    feature: string;
  }>;
}

interface BrandingContent extends BrandingType {
  sections?: Section[];
}

export default async function BrandingPage() {
  const payloadConfig = await config;
  const payload = await getPayload({config: payloadConfig});
  
  const response = await (payload.find as any)({
    collection: 'branding',
    where: {
      status: {
        equals: 'published',
      },
    },
  });

  const brandingContent = response.docs[0] as BrandingContent;

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
            {brandingContent?.title || 'Design'}
          </h1>
          <hr className="border-gray-600 mb-4 border-t-2" />
        </div>
        <p className="text-xl text-gray-600 max-w-3xl mb-12 md:mb-16">
          {brandingContent?.description || 'Branding, copy en visual design — allemaal onder één hoed.'}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {brandingContent?.sections?.map((section: Section, index: number) => (
            <div key={index}>
              <h2 className="text-2xl font-bold mb-6">{section.title}</h2>
              <p className="text-gray-600 mb-8">
                {section.description}
              </p>
              {section.features && section.features.length > 0 && (
                <ul className="space-y-4 text-gray-600">
                  {section.features.map((feature, featureIndex: number) => (
                    <li key={featureIndex}>• {feature.feature}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-gray-50">
            <Image
              src={getImageUrl(brandingContent?.image)}
              alt={brandingContent?.title || "Design service"}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
        
      </section>
      <section className='py-16'>
        <MoreCases cases={portfolioCases} currentCaseId="" />
      </section>  
      <section>
        <ServiceCTA 
          serviceType="branding"
          title="Klaar om je merk te versterken?"
          subtitle="Laat ons je helpen met het ontwikkelen van een sterke visuele identiteit"
        />
      </section>
    </div>
  );
}           
