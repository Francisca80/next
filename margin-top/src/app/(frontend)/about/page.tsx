'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    <main className="bg-white">
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center py-24">
        <div className="w-11/12 max-w-5xl mx-auto mt-24">
          <div 
            ref={ref}
            className={`flex flex-col md:flex-row items-center gap-12 transform transition-all duration-1000 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="md:w-1/2">
              <div className="inline-block">
                <h1 className="text-2xl sm:text-3xl md:text-4xl mb-4">About Margin-Top</h1>
                <hr className="border-gray-600 mb-8 border-t-2" />
              </div>
              <p className="text-base sm:text-lg md:text-xl text-gray-700">
                Bij Margin-Top geven we jouw visie de ruimte die het verdient. 
                Hierbij gaat het niet alleen om het bouwen van websites, maar om het creëren van digitale omgevingen 
                die de aandacht trekken en bezoekers ook blijven boeien.
              </p>
           <br></br>
            <p className="text-base sm:text-lg md:text-xl text-gray-700">
              Ik geloof dat gedurfde ontwerpen het verschil maken. Daarom zetten wordt jouw merk in de schijnwerpers gezet met innovatieve oplossingen 
              die verder gaan dan standaard webdesign.
            </p>
            <br></br>
            <p className="text-base sm:text-lg md:text-xl text-gray-700">
              Of het nu gaat om een volledige website, een unieke webshop, een app of een interactieve gebruikerservaring, 
              Ik bied de ruimte om jouw creatieve visie tot leven te brengen. Als expert in design en development 
              zorgen voor een naadloze combinatie van vorm en functionaliteit. Onze creativiteit kent geen grenzen – 
              samen realiseren we jouw unieke online aanwezigheid.
            </p>
            </div>
            <div
              className="md:w-1/2 flex justify-center transform transition-transform duration-300"
              style={{
                transform: `translate(${position.x * 0.1}px, ${position.y * 0.1}px)`,
              }}
            >
              <Image
                src="/section-about.png" 
                alt="About Us" 
                className="w-3/4 h-auto" 
                width={1920}
                height={1080}
                priority
              />
            </div>
          </div>
        </div>
      </section>

    

      {/* Team Section */}
      <section className="py-24">
        <div className="w-11/12 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
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
            <div className="md:w-1/2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl mb-6">Meet Margin-Top</h2>
              <hr className="border-gray-600 mb-8 border-t-2" />
              <div className="text-base sm:text-lg md:text-xl text-gray-700 space-y-6">
                <p>
                  Francisca is de oprichter van Margin-Top, een digitaal bureau dat gedreven wordt door een passie voor het ontwerpen van 
                  naadloze gebruikerservaringen en innovatieve digitale oplossingen. Met een achtergrond in UX-design, front-end ontwikkeling
                  en 25 jaar IT-ervaring heeft Francisca Margin-top opgericht om merken en bedrijven te voorzien van vooruitstrevende, 
                  gebruiksvriendelijke websites, apps en ander digital producten.
                </p>
                <p>
                  Margin-Top is de plek waar passie voor design, innovatie en technologie samenkomen, samen brengen we jouw visie tot leven. 
                  We hebben ervaring in diverse branches, van e-commerce tot B2B, van start-ups tot grote bedrijven.
                </p>
              </div>
              <div className="bg-[#340066] rounded-lg mt-12 p-6">
                <p className="text-lg !text-white mb-4">Neem contact op:</p>
                <div className="flex space-x-4">
                  <Link 
                    href="https://www.linkedin.com/in/francisca-van-maurik/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center bg-white px-6 py-3 rounded-lg text-blue-600 hover:bg-blue-50 transition-colors"
                  >
                    <FaLinkedin className="w-5 h-5" />
                    <span className="ml-2">LinkedIn</span>
                  </Link>
                  <Link 
                    href="mailto:francisca@margin-top.com" 
                    className="flex items-center bg-white px-6 py-3 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
                  >
                    <MdEmail className="w-5 h-5" />
                    <span className="ml-2">Email</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
