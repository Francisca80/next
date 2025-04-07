import React from 'react';
import Image from 'next/image';
import { getPayload } from 'payload';
import config from '@/payload.config';
import { Hosting as HostingType, Media } from '@/payload-types';
import ServiceCTA from '@/components/ServiceCTA';

interface Section {
  title: string;
  description: string;
  features?: Array<{
    feature: string;
  }>;
}

interface HostingContent extends HostingType {
  sections?: Section[];
}

export default async function HostingPage() {
  const payload = await getPayload({ config });
  
  const { docs: [hostingContent] } = await payload.find({
    collection: 'hosting',
    where: {
      status: {
        equals: 'published',
      },
    },
  });

  const content = hostingContent as HostingContent;

  const getImageUrl = (image: Media | string | null): string => {
    if (!image) return '/banner.png';
    return typeof image === 'string' ? image : image.url || '/banner.png';
  };

  return (
    <div className="bg-white">
      <section className="w-11/12 max-w-5xl mx-auto py-24 mt-24">
        <div className="inline-block mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4">
            {content?.title || 'Hosting'}
          </h1>
          <hr className="border-gray-600 mb-4 border-t-2" />
        </div>
        <p className="text-xl text-gray-600 max-w-3xl mb-24">
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
                    <li key={featureIndex}>• {feature.feature}</li>
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