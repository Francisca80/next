'use client';
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaRocket,FaCode, FaServer, FaPalette, FaChartLine, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import * as gtag from '@/lib/gtag';

interface ServiceCTAProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  serviceType?: 'hosting' | 'development' | 'ux' | 'branding' | 'ai' | 'services' | 'margin-top';
}

const ServiceCTA: React.FC<ServiceCTAProps> = ({
  title = "Klaar om je project te starten?",
  subtitle = "Wij helpen je met het realiseren van je digitale ambities",
  ctaText = "Neem contact op",
  ctaLink = "/contact",
  serviceType = "hosting"
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const handleCTAClick = () => {
    gtag.event({
      action: 'service_cta_click',
      category: 'conversion',
      label: serviceType,
    });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const buttonVariants = {
    rest: { 
      scale: 1,
      x: 0
    },
    hover: { 
      scale: 1.1,
      x: 10,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  // Get icon based on service type
  const getServiceIcon = () => {
    switch (serviceType) {
      case 'hosting':
        return <FaServer className="w-12 h-12 text-[#4F8BD2]" />;
      case 'development':
        return <FaCode className="w-12 h-12 text-[#4F8BD2]" />;
      case 'ux':
        return <FaChartLine className="w-12 h-12 text-[#4F8BD2]" />;
      case 'branding':
        return <FaPalette className="w-12 h-12 text-[#4F8BD2]" />;
      case 'ai':
        return <FaRocket className="w-12 h-12 text-[#4F8BD2]" />;
      case 'services':
        return <FaRocket className="w-12 h-12 text-[#4F8BD2]" />;
      case 'margin-top':
        return <FaRocket className="w-12 h-12 text-[#4F8BD2]" />;
      default:
        return <FaRocket className="w-12 h-12 text-[#4F8BD2]" />;
    }
  };

  // Get service-specific features
  const getServiceFeatures = () => {
    switch (serviceType) {
      case 'hosting':
        return [
          "Betrouwbare en snelle servers",
          "Dagelijks back-ups",
          "Domein registratie"
        ];
      case 'development':
        return [
          "Custom webapplicaties",
          "Responsive design",
          "API integraties",
          "Performance optimalisatie"
        ];
      case 'ux':
        return [
          "Gebruikersonderzoek",
          "Wireframing & prototyping",
          "Usability testing",
          "Conversie optimalisatie"
        ];
      case 'branding':
        return [
          "Logo & huisstijl ontwikkeling",
          "Visuele identiteit",
          "Brand guidelines",
          "Marketing materiaal"
        ];
      case 'ai':
        return [
          "AI-integratie in applicaties",
          "Data analyse",
          "Automatisering",
          "Generatieve AI"
        ];      
      case 'services':
        return [
          "Professionele dienstverlening",
          "Op maat gemaakte oplossingen",
          "Expertise & ervaring",
          "Persoonlijke aanpak"
        ];
      case 'margin-top':
        return [
          "Alle diensten onder één hoed",
          "Professionele dienstverlening",
          "Op maat gemaakte oplossingen",
          "Expertise & ervaring",
          "Persoonlijke aanpak"
        ];
      default:
        return [
          "Professionele dienstverlening",
          "Op maat gemaakte oplossingen",
          "Expertise & ervaring",
          "Persoonlijke aanpak"
        ];
    }
  };

  return (
    <motion.div 
      className="bg-white text-black py-12 sm:py-16 md:py-24 px-4 overflow-hidden relative"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-20 -right-20 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-[#4F8BD2] rounded-full opacity-10"
          animate={{ 
            scale: isMobile ? [1, 1.1, 1] : [1, 1.2, 1],
            rotate: isMobile ? [0, 45, 0] : [0, 90, 0]
          }}
          transition={{ 
            duration: isMobile ? 25 : 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -bottom-20 -left-20 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-[#4F8BD2] rounded-full opacity-10"
          animate={{ 
            scale: isMobile ? [1.1, 1, 1.1] : [1.2, 1, 1.2],
            rotate: isMobile ? [45, 0, 45] : [90, 0, 90]
          }}
          transition={{ 
            duration: isMobile ? 25 : 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="w-full md:w-1/2 mb-8 md:mb-0 md:ml-8 lg:ml-16"
            variants={itemVariants}
          >
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 relative inline-block text-[#4F8BD2]"
              variants={itemVariants}
            >
              {title}
            </motion.h2>
            <motion.p 
              className="text-base sm:text-lg mb-4 sm:mb-6 text-gray-700"
              variants={itemVariants}
            >
              {subtitle}
            </motion.p>
            
            <motion.div 
              className="flex items-center mb-4 sm:mb-6"
              variants={itemVariants}
            >
              {serviceType === 'margin-top' ? (
                <div className="relative w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-full overflow-hidden mr-3 sm:mr-4 bg-white">
                  <Image
                    src="/margin-top-logo.png"
                    alt="Margin Top Team"
                    fill
                    className="object-contain p-1 sm:p-2"
                  />
                </div>
              ) : (
                <motion.div 
                  className="bg-white p-2 sm:p-3 rounded-full mr-3 sm:mr-4 border-2 border-[#4F8BD2]"
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {getServiceIcon()}
                </motion.div>
              )}
              <div>
                <h3 className="text-lg sm:text-xl font-semibold capitalize text-[#4F8BD2]">{serviceType} </h3>
                <p className="text-sm sm:text-base text-gray-600">Professionele oplossingen op maat</p>
              </div>
            </motion.div>

            <motion.ul 
              className="space-y-2 mb-6 sm:mb-8"
              variants={itemVariants}
            >
              {getServiceFeatures().map((feature, index) => (
                <motion.li 
                  key={index}
                  className="flex items-center"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="w-2 h-2 bg-[#4F8BD2] rounded-full mr-3"></span>
                  <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              variants={itemVariants}
            >
              <Link href={ctaLink}>
                <motion.button
                  className="header-button inline-flex items-center text-sm sm:text-base"
                  variants={buttonVariants}
                  initial="rest"
                  whileHover="hover"
                  onClick={handleCTAClick}
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                >
                  {ctaText}
                  <motion.span 
                    className="inline-block ml-2"
                    animate={{ x: isHovered ? 10 : 0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <FaArrowRight />
                  </motion.span>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0"
            variants={itemVariants}
          >
            {serviceType === 'margin-top' ? (
              <motion.div 
                className="relative w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64"
                animate={{ 
                  rotate: isMobile ? [0, 5, 0, -5, 0] : [0, 10, 0, -10, 0],
                  scale: isMobile ? [1, 1.05, 1] : [1, 1.1, 1]
                }}
                transition={{ 
                  duration: isMobile ? 20 : 15,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-[#4F8BD2] to-[#4F8BD2]/50 rounded-full opacity-30"
                  animate={{ 
                    scale: isMobile ? [1, 1.05, 1] : [1, 1.1, 1],
                    opacity: isMobile ? [0.3, 0.35, 0.3] : [0.3, 0.4, 0.3]
                  }}
                  transition={{ 
                    duration: isMobile ? 15 : 12,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div 
                  className="absolute inset-4 bg-gradient-to-br from-[#4F8BD2] to-[#4F8BD2]/30 rounded-full opacity-40"
                  animate={{ 
                    scale: isMobile ? [1, 1.02, 1] : [1, 1.05, 1],
                    opacity: isMobile ? [0.4, 0.45, 0.4] : [0.4, 0.5, 0.4]
                  }}
                  transition={{ 
                    duration: isMobile ? 12 : 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div 
                  className="absolute inset-8 bg-gradient-to-br from-[#4F8BD2] to-[#4F8BD2]/20 rounded-full opacity-50 flex items-center justify-center"
                  animate={{ 
                    scale: isMobile ? [1, 1.01, 1] : [1, 1.02, 1],
                    opacity: isMobile ? [0.5, 0.55, 0.5] : [0.5, 0.6, 0.5]
                  }}
                  transition={{ 
                    duration: isMobile ? 10 : 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
                    <Image
                      src="/media/mascotmm.png"
                      alt="Margin Top Team"
                      fill
                      className="object-contain p-4 sm:p-6"
                    />
                  </div>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div 
                className="relative w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64"
                animate={{ 
                  rotate: isMobile ? [0, 5, 0, -5, 0] : [0, 10, 0, -10, 0],
                  scale: isMobile ? [1, 1.05, 1] : [1, 1.1, 1]
                }}
                transition={{ 
                  duration: isMobile ? 20 : 15,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-[#4F8BD2] to-[#4F8BD2]/50 rounded-full opacity-30"
                  animate={{ 
                    scale: isMobile ? [1, 1.05, 1] : [1, 1.1, 1],
                    opacity: isMobile ? [0.3, 0.35, 0.3] : [0.3, 0.4, 0.3]
                  }}
                  transition={{ 
                    duration: isMobile ? 15 : 12,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div 
                  className="absolute inset-4 bg-gradient-to-br from-[#4F8BD2] to-[#4F8BD2]/30 rounded-full opacity-40"
                  animate={{ 
                    scale: isMobile ? [1, 1.02, 1] : [1, 1.05, 1],
                    opacity: isMobile ? [0.4, 0.45, 0.4] : [0.4, 0.5, 0.4]
                  }}
                  transition={{ 
                    duration: isMobile ? 12 : 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div 
                  className="absolute inset-8 bg-gradient-to-br from-[#4F8BD2] to-[#4F8BD2]/20 rounded-full opacity-50 flex items-center justify-center"
                  animate={{ 
                    scale: isMobile ? [1, 1.01, 1] : [1, 1.02, 1],
                    opacity: isMobile ? [0.5, 0.55, 0.5] : [0.5, 0.6, 0.5]
                  }}
                  transition={{ 
                    duration: isMobile ? 10 : 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <motion.div 
                    className="text-4xl sm:text-5xl md:text-6xl text-white opacity-90"
                    animate={{ 
                      rotate: isMobile ? [0, 5, 0, -5, 0] : [0, 10, 0, -10, 0],
                      scale: isMobile ? [1, 1.05, 1] : [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: isMobile ? 8 : 5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {getServiceIcon()}
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCTA; 