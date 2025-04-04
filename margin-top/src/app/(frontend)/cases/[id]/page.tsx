import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getPayload } from 'payload';
import config from '@/payload.config';
import { FaArrowRight } from 'react-icons/fa';
import MoreCases from '@/components/MoreCases';
import { Portfolio, Media } from '@/payload-types';
import LexicalContent from '@/components/LexicalContent';

interface CaseDetailProps {
  params: Promise<{
    id: string;
  }>;
} 

export async function generateStaticParams() {
  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });
  const response = await payload.find({ 
    collection: 'portfolio',
    where: { status: { equals: "published" } },
  });

  return response.docs.map((caseItem: Portfolio) => ({ id: caseItem.slug }));
}

export default async function CaseDetail(props: CaseDetailProps) {
  const params = await props.params;
  const { id: slug } = params;

  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });

  // Get all published cases for the MoreCases component
  const allCasesResponse = await payload.find({
    collection: 'portfolio',
    where: {
      status: {
        equals: 'published'
      }
    },
    depth: 2
  });

  // Get the current case
  const response = await payload.find({
    collection: 'portfolio',
    where: {
      status: {
        equals: 'published'
      },
      slug: {
        equals: slug
      }
    },
    depth: 2
  });

  const caseItem = response.docs[0] as Portfolio;

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
      <section className="w-11/12 max-w-5xl mx-auto py-24">
        {/* Title and Introduction */}
        <div className="inline-block mb-16 mt-32">
          <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4">
            {caseItem.title}
          </h1>
          <hr className="border-gray-600 mb-4 border-t-2" />
        </div>
        <p className="text-xl text-gray-600 max-w-3xl mb-16 leading-relaxed">{caseItem.introduction}</p>

        {/* Hero Image */}
        <div className="relative w-full aspect-[16/9] mb-24">
          <Image
            src={getImageUrl(caseItem.image)}
            alt={getImageAlt(caseItem.image, caseItem.title)}
            fill
            className="object-cover rounded-2xl shadow-xl"
            priority
          />
        </div>

        {/* About and Services Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Services */}
          <div>
            <h2 className="text-2xl font-bold mb-8">Gebruikte diensten</h2>
            <div className="flex flex-wrap gap-3">
              {caseItem.services?.map((serviceObj, idx) => (
                <span key={idx} className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors duration-200">
                  {serviceObj.service}
                </span>
              ))}
            </div>
          </div>

          {/* About and Website */}
          <div>
            <h2 className="text-2xl font-bold mb-8">Over het project</h2>
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
          <h2 className="text-3xl font-bold mb-8">{caseItem.headingProject}</h2>
          <div className="text-gray-600 text-lg leading-relaxed">
            <LexicalContent content={caseItem.descriptionProject} />
          </div>
        </div>

        {/* Process Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-2xl font-bold mb-8">Het proces</h2>
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
        <div className="bg-gray-50 py-24 rounded-2xl my-24">
          <div className="px-8 sm:px-16">
            <h2 className="text-3xl font-bold mb-12">{caseItem.resultHeading}</h2>
            <div className="text-gray-600 text-lg leading-relaxed max-w-3xl">
              <LexicalContent content={caseItem.resultText} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 mb-8 max-w-4xl mx-auto">
              {caseItem.resultImage && (
                <div className="relative aspect-[9/16] max-w-sm mx-auto">
                  <Image
                    src={getImageUrl(caseItem.resultImage)}
                    alt={getImageAlt(caseItem.resultImage, "Resultaat 1")}
                    width={384}
                    height={682}
                    className="object-contain rounded-2xl shadow-xl"
                  />
                </div>
              )}
              {caseItem.resultImage2 && (
                <div className="relative aspect-[9/16] max-w-sm mx-auto">
                  <Image
                    src={getImageUrl(caseItem.resultImage2)}
                    alt={getImageAlt(caseItem.resultImage2, "Resultaat 2")}
                    width={384}
                    height={682}
                    className="object-contain rounded-2xl shadow-xl"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* More Cases Section */}
      <MoreCases cases={allCasesResponse.docs as Portfolio[]} currentCaseId={caseItem.slug} />
    </div>
  );
}