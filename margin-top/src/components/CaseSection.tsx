'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { caseData } from '../lib/case-data';
import { FaArrowRight } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import * as gtag from '@/lib/gtag';

const CasesSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handleCaseClick = (e: React.MouseEvent<HTMLAnchorElement>, caseTitle: string) => {
    gtag.event({
      action: 'case_click',
      category: 'engagement',
      label: caseTitle,
    });
  };

  return (
    <div className="py-24 bg-gradient-to-b from-white to-gray-50">
      <section ref={ref} className="max-w-6xl mx-auto mb-12 p-8">
        <div className={`transform transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-5xl font-bold mb-6 text-left bg-clip-text text-[#340066]">
            Recent Werk
          </h2>
          <p className="text-left text-gray-700 mb-12 text-lg max-w-2xl">
            Met trots zijn deze projecten gemaakt voor klanten die hun merken laten groeien door slimme, digitale oplossingen
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseData.slice(0, 3).map((caseItem, index) => (
            <Link 
              href={`/cases/${caseItem.id}`} 
              key={caseItem.id}
              onClick={(e) => handleCaseClick(e, caseItem.title)}
              className={`group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${
                inView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: `${index * 200}ms`
              }}
            >
              <Image 
                src={caseItem.image} 
                alt={`Image for ${caseItem.title}`} 
                width={500}
                height={400}
                className="w-full h-48 object-cover transform transition-transform group-hover:scale-105 duration-500"
              />
              <div className="p-6 text-left flex flex-col justify-between" style={{ height: '250px' }}>
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: '#340066' }}>{caseItem.title}</h3>
                  <p className="text-gray-700 line-clamp-5">{caseItem.description}</p>
                </div>
                <div className="text-right mt-auto">
                  <span className="text-lg group-hover:underline transition-all duration-300" style={{ color: '#340066' }}>
                    Lees meer <FaArrowRight className="inline transform group-hover:translate-x-2 transition-transform duration-300" style={{ color: '#340066' }}/> 
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CasesSection;
