'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import * as gtag from '@/lib/gtag';
import Lenis from 'lenis';
import { Portfolio, Media } from '@/payload-types';

const CasesSection: React.FC = () => {
  const [cases, setCases] = useState<Portfolio[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    const fetchCases = async () => {
      try {
        const response = await fetch('/api/cases');
        const data = await response.json();
        if (data.docs) {
          setCases(data.docs);
        }
      } catch (error) {
        console.error('Error fetching cases:', error);
      }
    };

    fetchCases();
  }, []);

  useEffect(() => {
    // Initialize Lenis
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisRef.current?.destroy();
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const scrollContainer = scrollContainerRef.current;
    if (!container || !scrollContainer) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const containerTop = rect.top;
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress
      const progress = Math.max(0, Math.min(1, (windowHeight - containerTop) / windowHeight));
      
      if (progress === 1) {
        // Calculate how far we've scrolled past the sticky point
        const scrollPastSticky = Math.max(0, -containerTop);
        
        // Calculate total scrollable width
        const totalScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        
        // Map vertical scroll to horizontal scroll with easing
        const horizontalScroll = Math.min(totalScroll, scrollPastSticky * 1.5);
        
        // Apply smooth scrolling with easing
        scrollContainer.scrollTo({
          left: horizontalScroll,
          behavior: 'smooth'
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCaseClick = (e: React.MouseEvent<HTMLAnchorElement>, caseTitle: string) => {
    gtag.event({
      action: 'case_click',
      category: 'engagement',
      label: caseTitle,
    });
  };

  const getImageUrl = (image: Media | string | null): string => {
    if (!image) return '/home.jpg';
    return typeof image === 'string' ? image : image.url || '/home.jpg';
  };

  const getImageAlt = (image: Media | string | null, fallback: string): string => {
    if (!image) return fallback;
    return typeof image === 'string' ? fallback : image.alt || fallback;
  };

  return (
    <div ref={containerRef} className="min-h-[200vh] relative">
      <div className="h-screen sticky top-0 flex flex-col justify-center bg-white">
        <section ref={ref} className="w-11/12 max-w-5xl mx-auto">
          <div className={`transform transition-all duration-1000 mb-12 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="inline-block relative mb-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4">Recent Werk</h1>
              <hr className="absolute bottom-0 left-0 w-full border-gray-600 border-t-2" />
            </div>
            <p className="text-left text-gray-700 text-lg max-w-3xl">
            Bij Margin-top werken we aan digitale oplossingen die ondernemers verder helpen. 
            Van branding tot vernieuwende websites. Een selectie van ons recente werk.
            </p>
          </div>

          <div className="relative">
            <div 
              ref={scrollContainerRef}
              className="flex space-x-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory"
            >
              {cases.map((caseItem, index) => (
                <Link 
                  href={`/cases/${caseItem.slug}`} 
                  key={caseItem.slug}
                  onClick={(e) => handleCaseClick(e, caseItem.title)}
                  className={`group relative flex-none w-[85vw] sm:w-[45vw] lg:w-[30vw] snap-start ${
                    inView 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{ 
                    transitionDelay: `${index * 200}ms`
                  }}
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
                    <Image 
                      src={getImageUrl(caseItem.image)} 
                      alt={getImageAlt(caseItem.image, caseItem.title)}
                      fill
                      priority={index === 0}
                      loading={index === 0 ? 'eager' : 'lazy'}
                      sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 30vw"
                      className="object-cover transform transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <h3 className="dark text-2xl text-white font-normal mb-2">{caseItem.title}</h3>
                      <div className="flex items-center space-x-2">
                        <span className="text-white text-sm">View Case</span>
                        <FaArrowRight className="w-4 h-4 text-white transform group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CasesSection;

