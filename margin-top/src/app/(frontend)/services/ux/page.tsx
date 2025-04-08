import React from 'react';
import Image from 'next/image';
import { getPayload } from 'payload';
import config from '@/payload.config';
import { Ux as UxType, Media, Portfolio } from '@/payload-types';
import ServiceCTA from '@/components/ServiceCTA';
import MoreCases from '@/components/MoreCases';

interface Section {
  title: string;
  description: string;
  features?: Array<{
    feature: string;
  }>;
}

interface UxContent extends UxType {
  sections?: Section[];
}

export default async function UXPage() {
  const payloadConfig = await config;
  const payload = await getPayload({config: payloadConfig});
  
  const response = await (payload.find as any)({
    collection: 'ux',
    where: {
      status: {
        equals: 'published',
      },
    },
  });

  const uxContent = response.docs[0] as UxContent;

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
      <section className="w-11/12 max-w-5xl mx-auto py-24 mt-24">
        <div className="inline-block mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4">
            {uxContent?.title || 'UX Design'}
          </h1>
          <hr className="border-gray-600 mb-4 border-t-2" />
        </div>
        <p className="text-xl text-gray-600 max-w-3xl mb-24">
          {uxContent?.description || 'UX design, oftewel User Experience design, draait om het ontwerpen van gebruiksvriendelijke en waardevolle ervaringen voor jouw klanten.'}
        </p>

        {/* Main content sections */}
        <div className="space-y-24">
          {/* First two sections in a grid */}
          {uxContent?.sections && uxContent.sections.length >= 2 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {uxContent.sections.slice(0, 2).map((section: Section, index: number) => (
                <div 
                  key={index} 
                  className="bg-gray-50 p-8 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:bg-gray-100"
                >
                  <h2 className="text-2xl font-bold mb-6">{section.title}</h2>
                  <p className="text-gray-600 mb-8">
                    {section.description}
                  </p>
                  {section.features && section.features.length > 0 && (
                    <ul className="space-y-4 text-gray-600">
                      {section.features.map((feature, featureIndex: number) => (
                        <li 
                          key={featureIndex} 
                          className="flex items-start"
                        >
                          <span className="text-[#4F8BD2] mr-2">•</span>
                          <span>{feature.feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}
          
          {/* Third section with image */}
          {uxContent?.sections && uxContent.sections.length >= 3 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div 
                className="bg-gray-50 p-8 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:bg-gray-100"
              >
                <h2 className="text-2xl font-bold mb-6">{uxContent.sections[2].title}</h2>
                <p className="text-gray-600 mb-8">
                  {uxContent.sections[2].description}
                </p>
                {uxContent.sections[2].features && uxContent.sections[2].features.length > 0 && (
                  <ul className="space-y-4 text-gray-600">
                    {uxContent.sections[2].features.map((feature, featureIndex: number) => (
                      <li 
                        key={featureIndex} 
                        className="flex items-start"
                      >
                        <span className="text-[#4F8BD2] mr-2">•</span>
                        <span>{feature.feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              
              {/* Image next to the third section */}
              {uxContent?.image && (
                <div 
                  className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-[1.03]"
                >
                  <Image
                    src={getImageUrl(uxContent.image)}
                    alt={uxContent.title || "UX Design service"}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          )}
          
          {/* Remaining sections */}
          {uxContent?.sections && uxContent.sections.length > 3 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {uxContent.sections.slice(3).map((section: Section, index: number) => (
                <div 
                  key={index + 3} 
                  className="bg-gray-50 p-8 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:bg-gray-100"
                >
                  <h2 className="text-2xl font-bold mb-6">{section.title}</h2>
                  <p className="text-gray-600 mb-8">
                    {section.description}
                  </p>
                  {section.features && section.features.length > 0 && (
                    <ul className="space-y-4 text-gray-600">
                      {section.features.map((feature, featureIndex: number) => (
                        <li 
                          key={featureIndex} 
                          className="flex items-start"
                        >
                          <span className="text-[#4F8BD2] mr-2">•</span>
                          <span>{feature.feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
        
      </section>
      <section className='py-16'>
        <MoreCases cases={portfolioCases} currentCaseId="" />
      </section>  
      <section>
        <ServiceCTA 
          serviceType="ux"
          title="Klaar om je project te starten?"
          subtitle="Vraag vandaag nog een vrijblijvende offerte aan en ontdek hoe wij je kunnen helpen met het realiseren van je digitale ambities"
          ctaText="Vraag een offerte aan"
        />
      </section>
    </div>
  );
}