'use client';

import React, { useRef, useState, useEffect } from 'react';

interface HorizontalCarouselProps {
  children: React.ReactNode;
  className?: string;
  itemWidth?: string;
  gap?: string;
}

const HorizontalCarousel: React.FC<HorizontalCarouselProps> = ({
  children,
  className = '',
  itemWidth = '45vw',
  gap = '1.5rem'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const items = containerRef.current.children;
      setTotalItems(items.length);
    }
  }, [children]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrollPosition = containerRef.current.scrollLeft;
      const itemWidth = containerRef.current.clientWidth;
      const newIndex = Math.round(scrollPosition / itemWidth);
      setActiveIndex(newIndex);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const handleDragStart = (clientX: number) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    const rect = containerRef.current.getBoundingClientRect();
    setStartX(clientX - rect.left);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    setIsMouseDown(false);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMouseDown(true);
    handleDragStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown) return;
    e.preventDefault();
    handleDragMove(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    handleDragStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleDragMove(e.touches[0].clientX);
  };

  const scrollToIndex = (index: number) => {
    if (!containerRef.current) return;
    const itemWidth = containerRef.current.clientWidth;
    containerRef.current.scrollTo({
      left: index * itemWidth,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className={`flex overflow-x-auto hide-scrollbar snap-x snap-mandatory cursor-grab active:cursor-grabbing select-none touch-pan-x ${className}`}
        style={{ gap }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleDragEnd}
      >
        {React.Children.map(children, (child) => (
          <div className="flex-none snap-start" style={{ width: itemWidth }}>
            {child}
          </div>
        ))}
      </div>

      {/* Indicator Dots */}
      <div className="flex justify-center gap-4 mt-8">
        {Array.from({ length: totalItems }).map((_, index) => (
          <div
            key={index}
            onClick={() => scrollToIndex(index)}
            style={{
              height: '2px',
              width: index === activeIndex ? '48px' : '24px',
              backgroundColor: index === activeIndex ? 'rgb(0, 0, 0)' : 'rgba(0, 0, 0, 0.2)',
              transition: 'all 500ms ease-in-out',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              if (index !== activeIndex) {
                e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
              }
            }}
            onMouseLeave={(e) => {
              if (index !== activeIndex) {
                e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
              }
            }}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                scrollToIndex(index);
              }
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HorizontalCarousel; 