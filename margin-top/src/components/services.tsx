'use client';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion

const servicesData = [
  {
    title: 'Web Design',
    description: 'Het creëren van visueel aantrekkelijke en gebruiksvriendelijke websites die zijn afgestemd op jouw merk.',
    link: '/services/web-design',
  },
  {
    title: 'Web Development',
    description: 'Snelle, schaalbare en veilige websites bouwen met de nieuwste technologieën.',
    link: '/services/web-development',
  },
  {
    title: 'Web App Development',
    description: 'Het ontwikkelen van robuuste webapplicaties om aan de behoeften van jouw bedrijf te voldoen.',
    link: '/services/web-app-development',
  },
  {
    title: 'Mobile App Development',
    description: 'Het ontwerpen en ontwikkelen van mobiele apps voor iOS- en Android-platforms.',
    link: '/services/mobile-app-development',
  },
  {
    title: 'UI/UX Design',
    description: 'Het leveren van intuïtieve en boeiende gebruikerservaringen door middel van doordacht ontwerp.',
    link: '/services/ui-ux-design',
  },
  {
    title: 'Wordpress Websites',
    description: 'Het creëren van op maat gemaakte WordPress-sites geoptimaliseerd voor prestaties en SEO.',
    link: '/services/wordpress-websites',
  },
  {
    title: 'Hosting',
    description: 'Betrouwbare hostingoplossingen met hoge prestaties en uptime.',
    link: '/services/hosting',
  },
  {
    title: 'Onderhoud',
    description: 'Voortdurende websiteondersteuning en onderhoud om je site soepel te laten draaien.',
    link: '/services/onderhoud',
  },
  {
    title: 'React/Next/Angular Development',
    description: 'Moderne, dynamische webapplicaties bouwen met React, Next.js en Angular.',
    link: '/services/react-next-angular-development',
  },
];

const ServicesSection: React.FC = () => {
  return (
    <div className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row">
        <div className="md:w-1/2 mb-12 md:mb-0 text-left">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#340066' }}>Services</h2>
          <hr className="border-gray-300 mb-4 w-1/2" />
          <p className="text-lg">Uw complete online oplossing: van server tot scherm.</p>
        </div>
        <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col" 
              initial={{ x: -100, opacity: 0 }} // Start position
              animate={{ x: 0, opacity: 1 }} // End position
              transition={{ duration: 0.5, delay: index * 0.5 }} // Increased delay for slower animation
            >
              <div className="flex flex-col">
                <Link href={service.link}>
                  <h3 className="text-xl font-semibold mb-1" style={{ color: '#340066' }}>
                    <span className="hover:underline cursor-pointer">{service.title}</span>
                  </h3>
                </Link>
                <hr className="border-gray-300 mb-1 w-full" />
              </div>
              <p className="text-gray-700">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
