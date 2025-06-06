'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface HorizontalCarouselProps {
  children: React.ReactNode;
  itemWidth?: string;
  className?: string;
}

const HorizontalCarousel: React.FC<HorizontalCarouselProps> = ({
  children,
  itemWidth = '45vw',
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      const items = containerRef.current.querySelectorAll('.carousel-item');
      setTotalItems(items.length);
    }
  }, [children]);

  const updateActiveIndex = useCallback((index: number) => {
    if (containerRef.current) {
      const container = containerRef.current;
      const items = container.querySelectorAll('.carousel-item');
      const item = items[index];
      
      if (item) {
        const itemRect = item.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        const scrollLeft = (item as HTMLElement).offsetLeft - (containerRect.width - itemRect.width) / 2;
        
        gsap.to(container, {
          scrollLeft: scrollLeft,
          duration: 0.8,
          ease: 'power2.inOut'
        });
        
        setActiveIndex(index);
      }
    }
  }, []);

  const handlePrev = () => {
    if (activeIndex > 0) {
      updateActiveIndex(activeIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex < totalItems - 1) {
      updateActiveIndex(activeIndex + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      handleNext();
    }
  };

  return (
    <>
      <style jsx global>{`
        .carousel-nav-button {
          -webkit-tap-highlight-color: transparent !important;
          -webkit-focus-ring-color: transparent !important;
          outline: none !important;
          box-shadow: none !important;
          background: none !important;
          background-color: transparent !important;
        }
        .carousel-nav-button:focus {
          -webkit-tap-highlight-color: transparent !important;
          -webkit-focus-ring-color: transparent !important;
          outline: none !important;
          box-shadow: none !important;
          background: none !important;
          background-color: transparent !important;
        }
        .carousel-nav-button:focus-visible {
          -webkit-tap-highlight-color: transparent !important;
          -webkit-focus-ring-color: transparent !important;
          outline: none !important;
          box-shadow: none !important;
          background: none !important;
          background-color: transparent !important;
        }
        .carousel-nav-button:active {
          -webkit-tap-highlight-color: transparent !important;
          -webkit-focus-ring-color: transparent !important;
          outline: none !important;
          box-shadow: none !important;
          background: none !important;
          background-color: transparent !important;
        }
        .carousel-nav-button::-moz-focus-inner {
          border: 0 !important;
          background: none !important;
          background-color: transparent !important;
        }
        .carousel-nav-button:focus::-moz-focus-inner {
          border: 0 !important;
          background: none !important;
          background-color: transparent !important;
        }
      `}</style>
      <div 
        className={`relative ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        {/* Navigation Arrows */}
        <button
          type="button"
          onClick={handlePrev}
          className={`carousel-nav-button absolute left-4 top-1/2 -translate-y-1/2 z-10 transition-all duration-300 ${
            activeIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:scale-110'
          } ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          disabled={activeIndex === 0}
          aria-label="Previous item"
        >
          <FaChevronLeft className="w-8 h-8 text-white drop-shadow-lg" />
        </button>

        <button
          type="button"
          onClick={handleNext}
          className={`carousel-nav-button absolute right-4 top-1/2 -translate-y-1/2 z-10 transition-all duration-300 ${
            activeIndex === totalItems - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:scale-110'
          } ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          disabled={activeIndex === totalItems - 1}
          aria-label="Next item"
        >
          <FaChevronRight className="w-8 h-8 text-white drop-shadow-lg" />
        </button>

        {/* Carousel Container */}
        <div 
          ref={containerRef}
          className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          <div className="flex space-x-6 px-4">
            {React.Children.map(children, (child, index) => (
              <div 
                className="carousel-item snap-start"
                style={{ 
                  width: itemWidth, 
                  flexShrink: 0,
                  scrollSnapAlign: 'center'
                }}
              >
                {child}
              </div>
            ))}
          </div>
        </div>

        {/* Indicator Lines */}
        <div className="flex justify-center space-x-3 mt-8">
          {Array.from({ length: totalItems }).map((_, index) => (
            <div
              key={index}
              onClick={() => updateActiveIndex(index)}
              className={`h-1 transition-all duration-300 cursor-pointer ${
                index === activeIndex 
                  ? 'w-24 bg-black' 
                  : 'w-12 bg-gray-300 hover:bg-gray-400'
              }`}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  updateActiveIndex(index);
                }
              }}
              aria-label={`Go to item ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default HorizontalCarousel; 