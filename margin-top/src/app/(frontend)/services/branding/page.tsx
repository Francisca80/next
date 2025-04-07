import React from 'react';
import Image from 'next/image';
import { getPayload } from 'payload';
import config from '@/payload.config';
import { Branding as BrandingType, Media } from '@/payload-types';

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

  const getImageUrl = (image: Media | string | null): string => {
    if (!image) return '/banner.png';
    return typeof image === 'string' ? image : image.url || '/banner.png';
  };

  return (
    <div className="bg-white">
      <section className="w-11/12 max-w-5xl mx-auto py-24 mt-24">
        <div className="inline-block mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4">
            {brandingContent?.title || 'Design'}
          </h1>
          <hr className="border-gray-600 mb-4 border-t-2" />
        </div>
        <p className="text-xl text-gray-600 max-w-3xl mb-24">
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

          <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
            <Image
              src={getImageUrl(brandingContent?.image)}
              alt={brandingContent?.title || "Design service"}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}           
