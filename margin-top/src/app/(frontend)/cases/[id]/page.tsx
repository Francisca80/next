import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import MoreCases from '@/components/MoreCases';
import { Portfolio, Media } from '@/payload-types';
import LexicalContent from '@/components/LexicalContent';
import { headers } from 'next/headers';

interface CaseDetailProps {
  params: Promise<{
    id: string;
  }>;
}

interface Service {
  service: string;
  id: string;
}

export default async function CaseDetail({ params }: CaseDetailProps) {
  const resolvedParams = await params;
  const { id: slug } = resolvedParams;

  // Get the host from headers
  const headersList = await headers();
  const host = headersList.get('host');
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';

  // Get all published cases for the MoreCases component
  const allCasesResponse = await fetch(`${protocol}://${host}/api/cases`, {
    next: { revalidate: 0 }
  });

  if (!allCasesResponse.ok) {
    console.error('Failed to fetch cases:', await allCasesResponse.text());
    notFound();
  }

  const allCasesData = await allCasesResponse.json();
  
  // Handle case when Payload is not available or no cases exist
  if (!allCasesData.docs || allCasesData.docs.length === 0) {
    console.error('No cases available');
    notFound();
  }

  const allCases = allCasesData.docs;

  // Find the current case
  const caseItem = allCases.find((item: Portfolio) => item.slug === slug);

  if (!caseItem) {
    notFound();
  }

  const getImageUrl = (image: Media | string | null): string => {
    if (!image) return '/home.jpg';
    return typeof image === 'string' ? image : image.url || '/home.jpg';
  };

  const getImageAlt = (image: Media | string | null, fallback: string): string => {
    if (!image) return fallback;
    return typeof image === 'string' ? fallback : image.alt || fallback;
  };

  return (
    <div className="bg-white">
      <section className="w-11/12 max-w-5xl mx-auto py-16">
        {/* Title and Introduction */}
        <div className="inline-block mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4">
            {caseItem.title}
          </h1>
          <hr className="border-gray-600 mb-4 border-t-2" />
        </div>
        <p className="text-xl text-gray-600 max-w-3xl mb-12 leading-relaxed">{caseItem.introduction}</p>

        {/* Hero Image */}
        <div className="relative w-full aspect-[16/9] mb-24">
          <Image
            src={getImageUrl(caseItem.image)}
            alt={getImageAlt(caseItem.image, caseItem.title)}
            fill
            className="object-contain rounded-2xl shadow-xl"
            priority
          />
        </div>

        {/* About and Services Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          {/* Services */}
          <div>
            <h3 className="text-3xl mb-6">Services</h3>
            <div className="flex flex-wrap gap-3">
              {caseItem.services?.map((serviceObj: Service, idx: number) => (
                <span key={idx} className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors duration-200">
                  {serviceObj.service}
                </span>
              ))}
            </div>
          </div>

          {/* About and Website */}
          <div>
            <h3 className="text-3xl mb-12">Over het project</h3>
            <div className="text-gray-600 text-lg leading-relaxed mb-8">
              <LexicalContent content={caseItem.about} />
            </div>
            {caseItem.url && (
              <Link 
                href={caseItem.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-black font-medium hover:gap-3 transition-all duration-300 group"
              >
                Bezoek website <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            )}
          </div>
        </div>

        {/* Project Section */}
        <div className="mb-24">
          <h3 className="text-3xl mb-6">{caseItem.headingProject}</h3>
          <div className="text-gray-600 text-lg leading-relaxed">
            <LexicalContent content={caseItem.descriptionProject} />
          </div>
        </div>

        {/* Process Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <div>
            <h3 className="text-3xl mb-6">Het proces</h3>
            <div className="text-gray-600 text-lg leading-relaxed mb-8">
              <LexicalContent content={caseItem.procesDescription} />
            </div>
            {caseItem.figmalink && (
              <Link 
                href={caseItem.figmalink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-black font-medium hover:gap-3 transition-all duration-300 group"
              >
                Bekijk Ontwerp <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            )}
          </div>
          
          <div className="relative aspect-[4/3]">
            <Image
              src={getImageUrl(caseItem.procesImage)}
              alt={getImageAlt(caseItem.procesImage, "Proces")}
              width={800}
              height={600}
              className="object-contain rounded-2xl shadow-xl"
            />
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-gray-50 py-12 rounded-2xl">
          <div className="px-8 sm:px-16">
            <h3 className="text-3xl mb-12">{caseItem.resultHeading}</h3>
            <div className="text-gray-600 text-lg leading-relaxed max-w-3xl">
              <LexicalContent content={caseItem.resultText} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-12 mb-4 max-w-4xl mx-auto">
              {caseItem.resultImage && (
                <div className="relative w-full max-w-sm mx-auto">
                  <Image
                    src={getImageUrl(caseItem.resultImage)}
                    alt={getImageAlt(caseItem.resultImage, "Resultaat 1")}
                    width={384}
                    height={682}
                    className="object-contain rounded-2xl shadow-xl w-full h-auto"
                  />
                </div>
              )}
              {caseItem.resultImage2 && (
                <div className="relative w-full max-w-sm mx-auto">
                  <Image
                    src={getImageUrl(caseItem.resultImage2)}
                    alt={getImageAlt(caseItem.resultImage2, "Resultaat 2")}
                    width={384}
                    height={682}
                    className="object-contain rounded-2xl shadow-xl w-full h-auto"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className='py-6'>
        <MoreCases cases={allCases} currentCaseId={caseItem.slug} />
      </section>
    </div>
  );
}