'use client';

import React from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import { FaArrowRight, FaPalette, FaUserFriends, FaWordpress, FaCode, FaMobile, FaServer, FaTools, FaGoogle } from 'react-icons/fa';
import Link from 'next/link';
import * as gtag from '@/lib/gtag';

const servicesData = [
  {
    title: 'Web Design',
    description: 'Website ontwerp, product design en Design Systems zijn oplossingen die wij aanbieden om jouw idee om te zetten in een visueel aantrekkelijke oplossing. Gebruikers ervaring is hierbij de focus.',
    link: '/',
    icon: FaPalette,
    color: '#4F8BD2'
  },
  {
    title: 'UX Design',
    description: 'User Experience Design: begrijpt je gebruiker je website, product of applicatie? Margin-Top levert intuïtieve en boeiende gebruikerservaringen door middel van doordacht ontwerp. Ontwerp wat aansluit bij jouw doelen en die van je gebruiker.',
    link: '/services/ux',
    icon: FaUserFriends,
    color: '#10B981'
  },
  {
    title: 'Wordpress Websites',
    description: 'Het creëren van op maat gemaakte WordPress-sites geoptimaliseerd voor prestaties en SEO. WordPress is een flexibel platform dat aan jouw behoeften kan voldoen.',
    link: '/services/wordpress',
    icon: FaWordpress,
    color: '#8B5CF6'
  },
  {
    title: 'Web Development',
    description: 'Snelle, schaalbare en veilige websites bouwen met de nieuwste technologieën. React, Next.js, Tailwind CSS en TypeScript zijn onze tools van keuze, maar ook andere technologieën zijn mogelijk.',
    link: '/',
    icon: FaCode,
    color: '#EF4444'
  },
  {
    title: 'Mobile App Development',
    description: 'Het ontwerpen en ontwikkelen van mobiele apps voor iOS- en Android-platforms. Zowel native als cross-platform apps zijn mogelijk.',
    link: '/',
    icon: FaMobile,
    color: '#F59E0B'
  },
  {
    title: 'Social Media Management',
    description: 'Opzetten en onderhouden van social media accounts. Het creëren van content, engagement en analyse.',
    link: '/',
    icon: FaMobile,
    color: '#4F8BD2'
  },
  {
    title: 'SEO / SEA',
    description: 'SEO en SEA zijn strategieën om jouw website te helpen ranken in zoekmachines zoals Google en te helpen groeien in traffic.',
    link: '/',
    icon: FaGoogle,
    color: '#4F8BD2'
  },
  {
    title: 'Hosting',
    description: 'Betrouwbare hostingoplossingen met hoge prestaties en uptime. ',
    link: '/',
    icon: FaServer,
    color: '#6366F1'
  },
  {
    title: 'Onderhoud',
    description: 'Voortdurende websiteondersteuning en onderhoud om je site niet alleen soepel te laten draaien, maar ook bij te blijven op techniek en veiligheid.',
    link: '/',
    icon: FaTools,
    color: '#14B8A6'
  },
];

const ServicesSection: React.FC = () => {
  const handleServiceClick = (serviceName: string) => {
    gtag.event({
      action: 'service_click',
      category: 'engagement',
      label: serviceName,
    });
  };

  return (
    <div className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-left mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#340066' }}>Services</h2>
          <hr className="border-gray-300 mb-4 w-1/4 ml-0" />
          <p className="text-lg">Uw complete online oplossing: van server tot scherm.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <Link 
              href={service.link} 
              key={index} 
              className="group" 
              onClick={() => handleServiceClick(service.title)}
            >
              <motion.div 
                className="h-full bg-white border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex flex-col p-6">
                  <div className="flex items-center justify-between mb-4">
                    <service.icon 
                      className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
                      style={{ color: service.color }}
                    />
                    <FaArrowRight 
                      className="opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300 text-[#4F8BD2] w-4 h-4"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 
                    className="text-xl font-semibold mb-2 group-hover:text-[#4F8BD2] transition-colors" 
                    style={{ color: '#340066' }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
