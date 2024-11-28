'use client';

import React from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const servicesData = [
  {
    title: 'Web Design',
    description: 'Website ontwerp, product design en Design Systems zijn oplossingen die wij aanbieden om jouw idee om te zetten in een visueel aantrekkelijke oplossing. Gebruikers ervaring is hierbij de focus.',
    link: '/',
  },
  {
    title: 'UX Design',
    description: 'User Experience Design: begrijpt je gebruiker je website, product of applicatie? Margin-Top levert intuïtieve en boeiende gebruikerservaringen door middel van doordacht ontwerp. Ontwerp wat aansluit bij jouw doelen en die van je gebruiker.',
    link: '/services/ux',
  },
  {
    title: 'Wordpress Websites',
    description: 'Het creëren van op maat gemaakte WordPress-sites geoptimaliseerd voor prestaties en SEO. WordPress is een flexibel platform dat aan jouw behoeften kan voldoen.',
    link: '/services/wordpress',
  },
  {
    title: 'Web Development',
    description: 'Snelle, schaalbare en veilige websites bouwen met de nieuwste technologieën. React, Next.js, Tailwind CSS en TypeScript zijn onze tools van keuze, maar ook andere technologieën zijn mogelijk.',
    link: '/',
  },
  {
    title: 'Mobile App Development',
    description: 'Het ontwerpen en ontwikkelen van mobiele apps voor iOS- en Android-platforms. Zowel native als cross-platform apps zijn mogelijk.',
    link: '/',
  },
  {
    title: 'Hosting',
    description: 'Betrouwbare hostingoplossingen met hoge prestaties en uptime. ',
    link: '/',
  },
  {
    title: 'Onderhoud',
    description: 'Voortdurende websiteondersteuning en onderhoud om je site niet alleen soepel te laten draaien, maar ook bij te blijven op techniek en veiligheid.',
    link: '/',
  },
];

const ServicesSection: React.FC = () => {
  return (
    <div className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row p-8">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#340066' }}>Services</h2>
          <hr className="border-gray-300 mb-4 w-1/2" />
          <p className="text-lg">Uw complete online oplossing: van server tot scherm.</p>
        </div>
        
        <div className="md:w-1/2">
          <div className="grid grid-cols-2 gap-4">
            {servicesData.map((service, index) => (
              <Link href={service.link} key={index} className="col-span-2 sm:col-span-1">
                <motion.div 
                  className="h-full flex flex-col cursor-pointer group border border-transparent hover:border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex flex-col p-4 rounded-lg transition-all duration-300 hover:bg-gray-50">
                    <div className="flex justify-between items-center">
                      <h3 
                        className="text-xl font-semibold group-hover:text-[#4F8BD2] transition-colors" 
                        style={{ color: '#340066' }}
                      >
                        {service.title}
                      </h3>
                      <FaArrowRight 
                        className="opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300 text-[#4F8BD2]"
                        aria-hidden="true"
                      />
                    </div>
                    <hr className="border-gray-300 my-2 w-full" />
                    <p className="text-gray-700">{service.description}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
