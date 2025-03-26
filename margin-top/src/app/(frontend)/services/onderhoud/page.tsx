import React from 'react';
import Image from 'next/image';
import { getPayload } from 'payload';
import config from '@/payload.config';
import type { Hosting, Media } from '@/payload-types';

export default async function HostingPage() {
  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });

  const response = await payload.find({
    collection: 'hosting',
    where: {
      status: {
        equals: 'published',
      },
    },
    depth: 2,
  });

  const hostingItems = response.docs as Hosting[];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center py-24">
        <div className="w-11/12 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="inline-block">
                <h1 className="text-2xl sm:text-3xl md:text-4xl mb-4">Hosting</h1>
                <hr className="border-gray-600 mb-8 border-t-2" />
              </div>
              <p className="text-base sm:text-lg md:text-xl text-gray-700">
                Betrouwbare hosting oplossingen voor uw website. Wij zorgen ervoor dat uw website altijd online is en optimaal presteert.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <Image
                src="/hosting-hero.jpg" 
                alt="Hosting Services" 
                className="w-3/4 h-auto" 
                width={1920}
                height={1080}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="w-11/12 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hostingItems.map((item) => {
              const imageUrl = typeof item.image === 'string' 
                ? item.image 
                : (item.image as Media)?.url || '/placeholder.jpg';
              const imageAlt = typeof item.image === 'string' 
                ? item.title 
                : (item.image as Media)?.alt || item.title;

              return (
                <div
                  key={item.id}
                  className="group relative overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
                >
                  <div className="aspect-w-16 aspect-h-9 relative">
                    <Image
                      src={imageUrl}
                      alt={imageAlt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-3 text-gray-900 group-hover:text-[#4F8BD2] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="flex items-center text-[#4F8BD2] group-hover:text-[#6EC1E4] transition-colors">
                      <span>Meer informatie</span>
                      <svg
                        className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
} 