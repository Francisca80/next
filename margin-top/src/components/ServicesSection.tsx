'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';

interface ServiceProps {
  title: string;
  description: string;    
  id: string;
  order: number;
  slug: string;
  image: {
    url: string;
    alt: string;
  };
  status: 'draft' | 'published';
  updatedAt: string;
  createdAt: string;
}

interface ServicesSectionProps {
  initialServices?: ServiceProps[];
}

interface MenuItemProps {
  service: ServiceProps;
}

const MenuItem: React.FC<MenuItemProps> = ({ service }) => {
  const itemRef = React.useRef<HTMLDivElement>(null);
  const marqueeRef = React.useRef<HTMLDivElement>(null);
  const marqueeInnerRef = React.useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleHoverStart = (ev: React.MouseEvent | React.TouchEvent) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    setIsHovered(true);
    
    const rect = itemRef.current.getBoundingClientRect();
    const y = 'touches' in ev ? ev.touches[0].clientY - rect.top : ev.clientY - rect.top;
    const edge = y < rect.height / 2 ? 'top' : 'bottom';

    gsap.timeline({ defaults: { duration: 0.6, ease: 'expo' } })
      .set(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' })
      .set(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' })
      .to([marqueeRef.current, marqueeInnerRef.current], { y: '0%' });
  };

  const handleHoverEnd = () => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    setIsHovered(false);

    gsap.timeline({ defaults: { duration: 0.6, ease: 'expo' } })
      .to(marqueeRef.current, { y: '101%' })
      .to(marqueeInnerRef.current, { y: '-101%' });
  };

  return (
    <div 
      className="flex-1 relative overflow-hidden text-center shadow-[0_-1px_0_0_#fff]" 
      ref={itemRef}
    >
      <Link
        className={`flex items-center justify-center h-full relative cursor-pointer uppercase no-underline font-medium text-white text-[3vh] ${
          isHovered ? 'text-[#060606]' : ''
        } focus:text-white focus-visible:text-[#060606]`}
        href={`/services/${service.slug}`}
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}
        onTouchStart={handleHoverStart}
        onTouchEnd={handleHoverEnd}
      >
        {service.title}
      </Link>
      <div
        className={`absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none bg-white ${
          isHovered ? 'translate-y-0' : 'translate-y-[101%]'
        }`}
        ref={marqueeRef}
      >
        <div className="h-full w-full flex items-center justify-center" ref={marqueeInnerRef}>
          <div className="flex items-center justify-center">
            <span className="text-[#060606] uppercase font-normal text-[3vh] leading-[1.2] p-[1vh_1vw_0]">
              {service.title}
            </span>
            {service.image && (
              <div
                className="w-[200px] h-[7vh] my-[2em] mx-[2vw] p-[1em_0] rounded-[50px] bg-cover bg-center"
                style={{ backgroundImage: `url(${service.image.url})` }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesSection: React.FC<ServicesSectionProps> = ({ initialServices = [] }) => {
  const [services, setServices] = useState<ServiceProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(initialServices.length === 0);

  useEffect(() => {
    if (initialServices.length > 0) {
      const sortedInitialServices = [...initialServices].sort((a, b) => a.order - b.order);
      setServices(sortedInitialServices);
      setIsLoading(false);
      return;
    }

    const fetchServices = async () => {
      try {
        const response = await fetch('/api/service?depth=1');
        const data = await response.json();
        const sortedServices = [...(data.docs || [])].sort((a: ServiceProps, b: ServiceProps) => a.order - b.order);
        setServices(sortedServices);
      } catch (error) {
        console.error('Error fetching services:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchServices();
  }, [initialServices]);

  return (
    <div className="h-[100vh] bg-black text-white">
      <div className="h-full container mx-auto px-4 sm:px-6 lg:px-8 w-11/12 max-w-5xl flex flex-col justify-center pb-20">
        <div className="text-left mb-8 md:mb-12 mt-[10vh]">
          <h1 className="text-2xl sm:text-3xl md:text-4xl mb-4 !text-white">Services</h1>
          <hr className="border-gray-600 mb-4 w-24 sm:w-32 md:w-1/4 ml-0" />
          <p className="text-xl text-left text-white mb-8">
            Design, code en strategie — allemaal onder één hoed.
          </p>
        </div>
        
        {isLoading ? (
          <div className="space-y-2 w-full">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="h-12 bg-gray-800 animate-pulse rounded-lg"></div>
            ))}
          </div>
        ) : (
          <div className="w-full h-full overflow-hidden">
            <nav className="flex flex-col h-full m-0 p-0">
              {services.map((service) => (
                <MenuItem key={service.id} service={service} />
              ))}
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicesSection;
