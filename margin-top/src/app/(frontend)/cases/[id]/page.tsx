import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getPayload } from 'payload';
import config from '@/payload.config';
import { FaArrowRight } from 'react-icons/fa';
import MoreCases from '@/components/MoreCases';

interface CaseDetailProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  const payloadConfig = await config;
  const payload = await getPayload({config: payloadConfig});
  
  const response = await (payload.find as any)({
    collection: 'case',
    where: {
      status: {
        equals: 'published'
      }
    }
  });

  return response.docs.map((caseItem: any) => ({
    id: caseItem.slug,
  }));
}

export default async function CaseDetail({ params }: CaseDetailProps) {
  const { id } = await params;
  
  const payloadConfig = await config;
  const payload = await getPayload({config: payloadConfig});
  
  // Get all published cases for the MoreCases component
  const allCasesResponse = await (payload.find as any)({
    collection: 'case',
    where: {
      status: {
        equals: 'published'
      }
    },
    depth: 2
  });

  // Get the current case
  const response = await (payload.find as any)({
    collection: 'case',
    where: {
      status: {
        equals: 'published'
      },
      slug: {
        equals: id
      }
    },
    depth: 2
  });

  const caseItem = response.docs[0];

  if (!caseItem) {
    notFound();
  }

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
            src={caseItem.image.url}
            alt={caseItem.image.alt || caseItem.title}
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
              {caseItem.services?.map((serviceObj: { service: string, id: string }, idx: number) => (
                <span key={idx} className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors duration-200">
                  {serviceObj.service}
                </span>
              ))}
            </div>
          </div>

          {/* About and Website */}
          <div>
            <h2 className="text-2xl font-bold mb-8">Over het project</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">{caseItem.about}</p>
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
          <p className="text-gray-600 text-lg leading-relaxed">{caseItem.descriptionProject}</p>
        </div>

        {/* Process Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-2xl font-bold mb-8">Het proces</h2>
            <p className="text-gray-600 text-lg leading-relaxed">{caseItem.procesDescription}</p>
          </div>
          <div className="relative aspect-[4/3]">
            <Image
              src={caseItem.procesImage.url}
              alt={caseItem.procesImage.alt || "Proces"}
              fill
              className="object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-gray-50 py-20 rounded-2xl">
          <div className="px-12">
            <h2 className="text-3xl font-bold mb-12">Het resultaat</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              {caseItem.resultaImages?.map((image: any, idx: number) => (
                <div key={idx} className="relative aspect-[4/3]">
                  <Image
                    src={image.url}
                    alt={image.alt || `Resultaat ${idx + 1}`}
                    fill
                    className="object-cover rounded-2xl shadow-xl"
                  />
                </div>
              ))}
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">{caseItem.resultaDescription}</p>
          </div>
        </div>
      </section>

      {/* More Cases Section */}
      <MoreCases cases={allCasesResponse.docs} currentCaseId={caseItem.id} />
    </div>
  );
}