'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import * as gtag from '@/lib/gtag';

interface ServiceProps {
  title: string;
  description: string;    
  link: string;
  id: string;
  order: number;
  slug: string;
  image?: {
    url: string;
    alt: string;
  };
}

interface ServicesSectionProps {
  initialServices?: ServiceProps[];
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ initialServices = [] }) => {
  const [services, setServices] = useState<ServiceProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(initialServices.length === 0);
  const [hoveredService, setHoveredService] = useState<ServiceProps | null>(null);

  useEffect(() => {
    if (initialServices.length > 0) {
      const sortedInitialServices = [...initialServices].sort((a, b) => a.order - b.order);
      setServices(sortedInitialServices);
      setIsLoading(false);
      return;
    }

    const fetchServices = async () => {
      try {
        const response = await fetch('/api/services?depth=1');
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

  const handleServiceClick = (serviceName: string) => {
    gtag.event({
      action: 'service_click',
      category: 'engagement',
      label: serviceName,
    });
  };

  return (
    <div className="h-[100vh] bg-black text-white ">
      <div className="sticky top-0 h-full container mx-auto px-4 sm:px-6 lg:px-8 w-11/12 max-w-5xl flex flex-col justify-center">
        <div className="text-left mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4 !text-white">Services</h1>
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
          <div className="space-y-2 w-full">
            {services.map((service, index) => (
              <Link 
                href={`/services/${service.slug}`} 
                key={service.id || index}
                className="block group relative border-b border-gray-800 hover:border-[#4F8BD2] transition-colors"
                onClick={() => handleServiceClick(service.title)}
                onMouseEnter={() => setHoveredService(service)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <motion.div 
                  className="flex items-center justify-between group cursor-pointer"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    delay: index * 0.1,
                    duration: 0.6,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                  whileHover={{ x: -10 }}
                >
                  <motion.div 
                    className="flex-grow pr-8 overflow-hidden py-4"
                    layout
                    transition={{
                      layout: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
                    }}
                  >
                    <AnimatePresence mode="wait">
                      {hoveredService?.id === service.id ? (
                        <motion.div
                          key="description-container"
                          className="w-full"
                          initial={{ opacity: 0 }}
                          animate={{ 
                            opacity: 1,
                            transition: {
                              duration: 0.4,
                              ease: [0.4, 0, 0.2, 1]
                            }
                          }}
                          exit={{ 
                            opacity: 0,
                            transition: {
                              duration: 0.3,
                              ease: [0.4, 0, 0.2, 1]
                            }
                          }}
                        >
                          <motion.p
                            className="text-sm sm:text-base md:text-lg !text-white max-w-3xl"
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ 
                              opacity: 1, 
                              y: 0,
                              transition: { 
                                duration: 0.4,
                                delay: 0.05,
                                ease: [0.4, 0, 0.2, 1] 
                              }
                            }}
                            exit={{ 
                              opacity: 0, 
                              y: -5,
                              transition: { 
                                duration: 0.3,
                                ease: [0.4, 0, 0.2, 1] 
                              }
                            }}
                          >
                            {service.description}
                          </motion.p>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="title"
                          className="relative inline-block"
                        >
                          <motion.h3
                            className="text-lg sm:text-xl md:text-2xl !text-white group-hover:text-[#4F8BD2] transition-colors font-normal"
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ 
                              opacity: 1, 
                              y: 0,
                              transition: { 
                                duration: 0.4,
                                ease: [0.4, 0, 0.2, 1] 
                              }
                            }}
                            exit={{ 
                              opacity: 0, 
                              y: -5,
                              transition: { 
                                duration: 0.3,
                                ease: [0.4, 0, 0.2, 1] 
                              }
                            }}
                          >
                            {service.title}
                          </motion.h3>
                          <motion.div 
                            className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#6EC1E4] to-[#4F8BD2]"
                            initial={{ scaleX: 0 }}
                            animate={{ 
                              scaleX: hoveredService?.id === service.id ? 1 : 0,
                              transition: { 
                                duration: 0.4,
                                ease: [0.4, 0, 0.2, 1] 
                              }
                            }}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                  <motion.div 
                    className="flex-shrink-0 w-6 py-4"
                    initial={{ opacity: 0, x: 5 }}
                    animate={{ 
                      opacity: hoveredService?.id === service.id ? 1 : 0, 
                      x: hoveredService?.id === service.id ? -5 : 0,
                      transition: { 
                        duration: 0.4,
                        ease: [0.4, 0, 0.2, 1] 
                      }
                    }}
                  >
                    <FaArrowRight 
                      className="text-[#4F8BD2] w-3 h-3"
                      aria-hidden="true"
                    />
                  </motion.div>
                </motion.div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicesSection;
