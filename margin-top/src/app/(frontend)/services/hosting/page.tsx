import React from 'react';
import Image from 'next/image';
import { getPayload } from 'payload';
import config from '@/payload.config';
import { Hosting as HostingType, Media } from '@/payload-types';
import ServiceCTA from '@/components/ServiceCTA';
import { FaServer, FaShieldAlt, FaTachometerAlt, FaCloud } from 'react-icons/fa';

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
      {/* Hero Section with Background Image */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hosting/hero-bg.jpg"
            alt="Hosting background"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="w-11/12 max-w-5xl mx-auto relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {content?.title || 'Hosting'}
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl">
            {content?.description || 'Betrouwbare en snelle hosting oplossingen voor jouw website.'}
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-11/12 max-w-5xl mx-auto py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <div className="text-blue-600 mb-4">
              <FaServer className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold mb-3">Betrouwbare Servers</h3>
            <p className="text-gray-600">Onze servers draaien 24/7 met een uptime van 99.9%</p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <div className="text-blue-600 mb-4">
              <FaShieldAlt className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold mb-3">Maximale Beveiliging</h3>
            <p className="text-gray-600">Bescherming tegen DDoS-aanvallen en malware</p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <div className="text-blue-600 mb-4">
              <FaTachometerAlt className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold mb-3">Snelle Prestaties</h3>
            <p className="text-gray-600">SSD-opslag en geoptimaliseerde netwerkinfrastructuur</p>
          </div>
        </div>

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

          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
            <Image
              src={getImageUrl(content?.image)}
              alt={content?.title || "Hosting service"}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-11/12 max-w-5xl mx-auto py-24 bg-gray-50 rounded-xl px-8">
        <h2 className="text-3xl font-bold mb-4">
          {content?.title2 || 'Mogelijkheden'}
        </h2>
        <p className="text-gray-600 text-xl">
          {content?.costsExplanation || 'Betrouwbare en snelle hosting oplossingen voor jouw website.'}
        </p>
      </section>

      {/* CTA Section */}
      <section className="py-16">
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