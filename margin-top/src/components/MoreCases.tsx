'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

interface Case {
  id: string;
  title: string;
  introduction: string;
  image: {
    url: string;
    alt?: string;
  };
  services?: Array<{ service: string; id: string }>;
}

interface MoreCasesProps {
  cases: Case[];
  currentCaseId: string;
}

export default function MoreCases({ cases, currentCaseId }: MoreCasesProps) {
  // Filter out the current case and get 3 other cases
  const otherCases = cases
    .filter(caseItem => caseItem.id !== currentCaseId)
    .slice(0, 3);

  return (
    <div className="bg-gray-50 py-16">
      <div className="w-11/12 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Meer cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherCases.map((caseItem) => (
            <Link 
              href={`/cases/${encodeURIComponent(caseItem.title.toLowerCase().replace(/\s+/g, '-'))}`}
              key={caseItem.id}
              className="group"
            >
              <div className="overflow-hidden rounded-2xl">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={caseItem.image.url}
                    alt={caseItem.image.alt || caseItem.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold mb-2 !text-white">{caseItem.title}</h3>
                      <p className="text-white/90 text-sm line-clamp-2 mb-4">{caseItem.introduction}</p>
                      {caseItem.services && caseItem.services.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {caseItem.services.slice(0, 2).map((serviceObj, idx) => (
                            <span key={idx} className="text-white/80 text-xs bg-white/10 px-2 py-0.5 rounded-full">
                              {serviceObj.service}
                            </span>
                          ))}
                        </div>
                      )}
                      <span className="text-white text-sm font-medium group-hover:translate-x-2 transition-transform duration-300 inline-flex items-center gap-1">
                        Lees meer <FaArrowRight className="inline" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 