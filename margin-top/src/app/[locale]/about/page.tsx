'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';



const About: React.FC = () => {
  const t = useTranslations('about');
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event;
    setPosition({ x: clientX, y: clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-36 bg-white text-black">
      <div className="flex flex-col md:flex-row max-w-6xl w-full items-center">
        <div className="md:w-1/2 text-center md:text-left md:pr-8 mx-4">
          <h2 className="text-4xl font-bold mb-4 md:mb-6">{t('title')}</h2>
          <p className="mb-6">
            Bij Margin-Top geven we jouw visie de ruimte die het verdient. 
            Hierbij gaat het niet alleen om het bouwen van websites, maar om het creëren van digitale omgevingen 
            die de aandacht trekken en bezoekers ook blijven boeien. Ik geloof dat gedurfde ontwerpen het 
            verschil maken. Daarom zetten wordt jouw merk in de schijnwerpers gezet met innovatieve oplossingen 
            die verder gaan dan standaard webdesign.
            <br/><br/> 
            Of het nu gaat om een volledige website, een unieke webshop, een app of een interactieve gebruikerservaring, 
            Ik bied de ruimte om jouw creatieve visie tot leven te brengen. Als expert in design en development 
            zorgen voor een naadloze combinatie van vorm en functionaliteit. Onze creativiteit kent geen grenzen – 
            samen realiseren we jouw unieke online aanwezigheid.
          </p>
        </div>
        <div
          className="md:w-1/2 flex justify-center transform transition-transform duration-300 mx-4"
          style={{
            transform: `translate(${position.x * 0.1}px, ${position.y * 0.1}px)`,
          }}
        >
          <Image
            src="/section-about.png" alt="About Us" className="w-3/4 h-auto" 
            width={1920}
            height={1080}
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row max-w-6xl w-full items-center mt-20">
        <div className="md:w-1/2 relative flex justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-purple-200 transform rotate-6 rounded-full blur-lg"></div>
          <div className="relative">
            <Image
              src="/francisca.jpg"
              alt="Team Member"
              width={400}
              height={400}
              className="rounded-full border-4 border-white shadow-lg z-10 relative"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-300 rounded-full -z-10"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-300 rounded-full -z-10"></div>
          </div>
        </div>
        <div className="md:w-1/2 text-center md:text-left md:pl-8 mx-4 mt-8 md:mt-0">
          <h2 className="text-3xl font-bold mb-4">Meet Margin-Top</h2>
          <p className="text-gray-700">
          Francisca is de oprichter van Margin-Top, een digitaal bureau dat gedreven wordt door een passie voor het ontwerpen van 
          naadloze gebruikerservaringen en innovatieve digitale oplossingen. Met een achtergrond in UX-design, front-end ontwikkeling
          en 25 jaar IT-ervaring heeft Francisca Margin-top opgericht om merken en bedrijven te voorzien van vooruitstrevende, 
          gebruiksvriendelijke websites,apps en ander digital producten. <br/><br/> 
          Margin-Top is de plek waar passie voor design, innovatie en technologie samenkomen, samen brengen we jouw visie tot leven. 
          We hebben ervaring in diverse branches, van e-commerce tot B2B, 
          van start-ups tot grote bedrijven. 
          </p>
          <div className="bg-[#340066] rounded-lg mt-8 p-4 shadow-sm border border-gray-100">
            <p className="text-sm text-white mb-3">Neem contact op:</p>
            <div className="flex space-x-4 justify-center md:justify-start">
                <Link 
                href="https://www.linkedin.com/in/francisca-van-maurik/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center bg-white px-4 py-2 rounded-md text-blue-600 hover:bg-blue-50 transition-colors"
              >
                <FaLinkedin className="w-5 h-5" />
                <span className="ml-2">{t('linkedin')}</span>
              </Link>
              <Link 
                href="mailto:francisca@margin-top.com" 
                className="flex items-center bg-white px-4 py-2 rounded-md text-gray-600 hover:bg-gray-50 transition-colors"
              >
                <MdEmail className="w-5 h-5" />
                <span className="ml-2">{t('email')}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
