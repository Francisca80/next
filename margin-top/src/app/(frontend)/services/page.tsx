import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { FaArrowRight } from "react-icons/fa";
import { getPayload } from 'payload';
import config from '@/payload.config';
import { Service, Media } from '@/payload-types';
import HowItWorksSection from '@/components/HowItWorksSection';
import ServiceCTA from '@/components/ServiceCTA';

export default async function Services() {
  const payloadConfig = await config;
  const payload = await getPayload({config: payloadConfig});
  
  const response = await (payload.find as any)({
    collection: 'service',
    sort: 'order',
    depth: 2
  });

  const services = response.docs as Service[];

  return (
    <div className="bg-white">
      <section className="w-11/12 max-w-5xl mx-auto py-24">
        <div className="inline-block relative mb-8 mt-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4">
            Services 
          </h1>
          <hr className="absolute bottom-0 left-0 w-full border-gray-600 border-t-2" />
        </div>

        <p className="text-xl text-gray-600 max-w-3xl mb-24">
          Met trots werken we aan projecten van onze klanten! We helpen graag merken te laten groeien door slimme, digitale oplossingen
        </p>

        {/* Services List Section */}
        <div className="space-y-16">
          {services.map((service) => {
            const mediaImage = service.image as Media | undefined;
            
            return (
              <Link 
                href={`/services/${service.slug}`} 
                key={service.id} 
                className="block group"
              >
                <div className="flex flex-col md:flex-row items-start gap-12">
                  {mediaImage?.url && (
                    <div className="relative w-full md:w-1/2 aspect-[4/3]">
                      <Image 
                        src={mediaImage.url}
                        alt={service.title} 
                        fill
                        className="object-cover rounded-lg transition-transform duration-500 group-hover:scale-105" 
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  )}
                  <div className={`flex-1 text-left ${!mediaImage?.url ? 'md:w-full' : ''}`}>
                    <h3 className="text-3xl mb-6">
                      {service.title}
                    </h3>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <span className="text-[#4F8BD2] font-medium group-hover:translate-x-2 transition-transform duration-300 inline-flex items-center gap-2">
                      Lees meer <FaArrowRight className="inline" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })} 
        </div>
      </section>

      {/* How it works Section */}
      <HowItWorksSection />

      {/* Global CTA Section */}
      <section className="w-11/12 max-w-6xl mx-auto pb-24">
        <ServiceCTA 
          title="Klaar om je project te starten?"
          subtitle="Vraag vandaag nog een vrijblijvende offerte aan en ontdek hoe wij je kunnen helpen met het realiseren van je digitale ambities"
          ctaText="Vraag een offerte aan"
          serviceType="services"
        />
      </section>
    </div>
  );
}
