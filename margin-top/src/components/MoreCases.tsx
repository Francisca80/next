'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import { Portfolio, Media } from '@/payload-types';

interface MoreCasesProps {
  cases: Portfolio[];
  currentCaseId: string;
}

const getImageUrl = (image: Media | string | null): string => {
  if (!image) return '/home-1.jpg';
  return typeof image === 'string' ? image : image.url || '/home-1.jpg';
};

const getImageAlt = (image: Media | string | null, fallback: string): string => {
  if (!image) return fallback;
  return typeof image === 'string' ? fallback : image.alt || fallback;
};

export default function MoreCases({ cases, currentCaseId }: MoreCasesProps) {
  // Filter out the current case and get 3 other cases
  const otherCases = cases
    .filter(caseItem => caseItem.slug !== currentCaseId)
    .slice(0, 3);

  return (
    <div className="bg-gray-50 py-16">
      <div className="w-11/12 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Meer cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherCases.map((caseItem) => (
            <Link 
              href={`/cases/${caseItem.slug}`}
              key={caseItem.slug}
              className="group"
            >
              <div className="overflow-hidden rounded-2xl">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={getImageUrl(caseItem.image)}
                    alt={getImageAlt(caseItem.image, caseItem.title)}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold !text-white mb-2">
                        {caseItem.title}
                      </h3>
                      <p className="text-white/90 line-clamp-2 mb-4">
                        {caseItem.introduction}
                      </p>
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