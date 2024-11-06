'use client';
import Link from 'next/link';
import React from 'react';

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

const Services: React.FC = () => {
  return (
    <div className="relative py-36 bg-white overflow-hidden">
      {/* Pastel floating circles */}
      <div className="absolute top-10 left-20 w-16 h-16 bg-pink-200 rounded-md opacity-70 transform rotate-45"></div>
      <div className="absolute top-32 right-32 w-24 h-24 bg-blue-200 rounded-md opacity-50"></div>
      <div className="absolute bottom-10 left-10 w-12 h-12 bg-violet-200 rounded-lg opacity-70"></div>
      <div className="absolute bottom-20 right-40 w-20 h-20 bg-cyan-200 rounded-full opacity-70"></div>

      <div className="absolute top-56 left-10 w-28 h-28 bg-sky-200 opacity-70 transform skew-y-12"></div>
      <div className="absolute bottom-32 left-40 w-20 h-20 bg-indigo-200 rounded-lg opacity-70"></div>
      <div className="absolute top-72 right-10 w-16 h-16 bg-fuchsia-200 rounded opacity-70"></div>


      <div className="max-w-6xl mx-auto flex flex-col md:flex-row">
        <div className="md:w-1/2 mb-12 md:mb-0 text-left">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#340066' }}>Diensten</h2>
          <hr className="border-gray-300 mb-4 w-1/2" />
          <p className="text-lg">Uw complete online oplossing: van server tot scherm.</p>
        </div>
        <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex flex-col">
                <Link href={service.link}>
                  <h3 className="text-xl font-semibold mb-1" style={{ color: '#340066' }}>
                    <span className="hover:underline cursor-pointer">{service.title}</span>
                  </h3>
                </Link>
                <hr className="border-gray-300 mb-1 w-full" />
              </div>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
