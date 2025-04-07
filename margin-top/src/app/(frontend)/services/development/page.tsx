import React from 'react';
import Image from 'next/image';
import { FaCode, FaServer, FaDatabase, FaMobile, FaCloud } from 'react-icons/fa';
import { getPayload } from 'payload';
import config from '@/payload.config';
import { Development as DevelopmentType, Media } from '@/payload-types';
import ServiceFaqSection from '@/components/ServiceFaqSection';

interface Phase {
  phaseNumber: string;
  title: string;
  icon: string;
  steps: Array<{
    number: string;
    title: string;
    description: string;
  }>;
}

interface DevelopmentContent {
  id: string;
  title: string;
  slug: string;
  introduction: string;
  processTitle: string;
  processDescription: string;
  processImage: string | Media;
  approachTitle: string;
  approachDescription: string;
  phases: Phase[];
  faqTitle: string;
  faqDescription: string;
  faqs: {
    question: string;
    answer: string;
  }[];
  status: 'draft' | 'published';
  createdAt: string;
  updatedAt: string;
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

  const getImageUrl = (image: Media | string | null): string => {
    if (!image) return '/wordpress/wordpressdev.jpg';
    return typeof image === 'string' ? image : image.url || '/wordpress/wordpressdev.jpg';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-24 mt-24 max-w-5xl">
        {/* Introduction Section */}
        <section className="mb-24">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            {developmentContent?.title || 'Development'}
          </h2>
          <hr className="border-gray-600 mb-4 w-16 sm:w-20 md:w-24" />
          <p className="text-lg sm:text-xl text-gray-700 mb-8 whitespace-pre-line leading-relaxed">
            {developmentContent?.introduction || 'Development is het hart van digitale innovatie...'}
          </p>
        </section>

        {/* Process Section */}
        <section className="mb-24">
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="md:w-2/3">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                {developmentContent?.processTitle || 'Hoe wordt Development toegepast?'}
              </h2>
              <hr className="border-gray-600 mb-4 w-16 sm:w-20 md:w-24" />
              <p className="text-lg sm:text-xl text-gray-700 mb-8 whitespace-pre-line leading-relaxed">
                {developmentContent?.processDescription || 'Development is een complex proces...'}
              </p>
            </div>
            <div className="md:w-1/3 sticky top-8">
              <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={getImageUrl(developmentContent?.processImage)}
                  alt="Development Process"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="mb-24">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            {developmentContent?.approachTitle || 'Onze aanpak voor Development'}
          </h2>
          <hr className="border-gray-600 mb-4 w-16 sm:w-20 md:w-24" />
          <p className="text-lg sm:text-xl text-gray-700 mb-12">
            {developmentContent?.approachDescription || 'Het development-proces van Margin-Top...'}
          </p>

          <div className="space-y-12">
            {developmentContent?.phases?.map((phase, index) => (
              <div key={index} className="group border-b border-gray-200 pb-8">
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#4F8BD2] text-white mr-4">
                    {getIcon(phase.icon)}
                  </div>
                  <div>
                    <span className="text-[#4F8BD2] text-xs font-semibold tracking-wider uppercase">
                      {phase.phaseNumber}
                    </span>
                    <h3 className="text-xl font-bold">{phase.title}</h3>
                  </div>
                </div>

                <ul className="space-y-4 text-gray-700">
                  {phase.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-start">
                      <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#4F8BD2]/10 text-[#4F8BD2] mr-3">
                        {step.number}
                      </span>
                      <span className="pt-1">
                        <strong>{step.title}:</strong> {step.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <ServiceFaqSection 
          title={developmentContent?.faqTitle}
          description={developmentContent?.faqDescription}
          faqs={developmentContent?.faqs || []}
        />
      </div>
    </div>
  );
} 