'use client';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { caseData } from '@/lib/case-data';
import { motion } from 'framer-motion';
import { FaArrowRight } from "react-icons/fa";

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

const Services: React.FC = () => {
  return (
    <div className="max-w-full"> {/* Full width for the hero section */}
      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center">
        {/* Optimized Image */}
        <Image 
          src="/servicehero.jpg" 
          alt="Creative Workspace" 
          fill 
          objectFit="cover" 
          className="z-0" 
          loading="lazy"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white underline" style={{ textDecorationColor: '#4F8BD2' }}>
            Services
          </h1>
        </div>
      </section>
      <div className="relative py-8 px-4 md:py-36 md:px-0 bg-white overflow-hidden">
        {/* Introduction Section */}
        <div className="max-w-6xl mx-auto text-left mb-12">
          <h1 className="text-3xl font-bold mb-4" style={{ color: '#340066' }}>Wat doen wij?</h1>
          <p className="text-lg text-gray-700">
            Binnen een paar seconden beslist een bezoeker of er verder wordt gekeken op jouw website. Het is dus van essentieel belang dat jouw website snel, betrouwbaar en aantrekkelijk is. 
            Kortom, het moet iets zijn dat bij jou past en dat jouw doelgroep aanspreekt.
            <br /><br />
            Bij Margin-Top.com brengen we uw merk naar een hoger niveau met maatwerk digitale oplossingen die echt impact maken. Wij combineren strategie, creativiteit en technologie om uw online doelen te bereiken. 
            Of u nu op zoek bent naar een nieuwe website, een UX-redesign of geavanceerde webapplicaties, wij bieden oplossingen die niet alleen mooi ogen, maar ook converteren.
            <br /><br />
            Met een scherp oog voor detail en een passie voor innovatie helpen wij u uw online zichtbaarheid te versterken en een krachtige indruk achter te laten op uw doelgroep.
          </p>
        </div>
        {/* Pastel floating circles */}
        <div className="absolute top-10 left-10 w-16 h-16 bg-pink-200 rounded-md opacity-70 transform rotate-45 hidden md:block"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-200 rounded-md opacity-50 hidden md:block"></div>
        <div className="absolute bottom-20 left-10 w-12 h-12 bg-violet-200 rounded-lg opacity-70 hidden md:block"></div>
        <div className="absolute bottom-30 right-20 w-20 h-20 bg-cyan-200 rounded-full opacity-70 hidden md:block"></div>
        <div className="absolute top-56 left-10 w-28 h-28 bg-sky-200 opacity-70 hidden md:block"></div>
        <div className="absolute bottom-32 left-40 w-20 h-20 bg-indigo-200 rounded-lg opacity-70 hidden md:block"></div>
        <div className="absolute top-72 right-10 w-16 h-16 bg-fuchsia-200 rounded opacity-70 hidden md:block"></div>

        {/* Call to Action Section */}
        <div className="max-w-6xl mx-auto text-center py-12 bg-gray-100 rounded-lg mt-12 mb-24">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#340066' }}>Klaar om te beginnen?</h2>
          <p className="text-lg text-gray-700 mb-6">
            Neem vandaag nog contact met ons op en ontdek hoe wij jouw online doelen kunnen bereiken.
          </p>
          <a href="mailto:info@margin-top.com">
            <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition">
              Neem contact op
            </button>
          </a>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-24 md:mb-0 text-left">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#340066' }}>Services</h2>
            <hr className="border-gray-300 mb-4 w-1/2" />
            <p className="text-lg">Uw complete online oplossing: van server tot scherm.</p>
          </div>
          <div className="md:w-1/2 grid grid-cols-1 gap-6">
            {servicesData.map((service, index) => (
              <Link href={service.link} key={index}>
                <motion.div 
                  className="flex flex-col cursor-pointer group border border-transparent hover:border-gray-200 rounded-lg"
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
                      <FaArrowRight className="opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300 text-[#4F8BD2]" />
                    </div>
                    <hr className="border-gray-300 my-2 w-full" />
                    <p className="text-gray-700">{service.description}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>

        {/* New CTA Banner */}
        <div className="w-full bg-[#340066] py-12 my-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 relative h-[300px] w-full mb-8 md:mb-0">
                <Image
                  src="/services.jpg"
                  alt="Contact us"
                  fill
                  className="object-cover rounded-lg"
                  loading="lazy"
                />
              </div>
              <div className="md:w-1/2 md:pl-12 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Hoe werkt het?
                </h2>
                <p className="text-white/90 mb-6">
                  Om jouw website te maken, gaan we in een aantal stappen te werk. Ieder project is uniek, het proces kan daarom afwijken.
                  De onderstaande stappen zijn een goed begin. <br/><br/>Jouw visie is belangrijk voor ons om een unieke website te maken. We bepalen samen wat de beste oplossing is.
                  Neem contact op voor een vrijblijvend gesprek
                </p>
                <a href="mailto:info@margin-top.com?subject=Vraag over services">
                  <button className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
                    Mail ons
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Website Creation Process Section */}
        <div className="max-w-6xl mx-auto mt-12 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-left" style={{ color: '#340066' }}>Het basis proces van het maken van een nieuwe website</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { step: 'Stap 1: Kennismaken', description: 'Kennis maken: We bespreken jouw behoeften en doelen.' },
              { step: 'Stap 2: Planning', description: 'Onderzoek & Strategie: We maken een plan en onderzoeken de doelgroep.' },
              { step: 'Stap 3: Idee', description: 'Concept & Structuur: We maken een eerste prototype, navigatiestructuur en wireframes.' },
              { step: 'Stap 3: Ontwerp', description: 'Design & Prototyping: We creëren visuele ontwerpen voor de website met feedbackrondes.' },
              { step: 'Stap 4: Ontwikkeling', description: 'Ontwikkeling & Implementatie: We bouwen de website met de nieuwste technologieën.' },
              { step: 'Stap 5: Testen', description: 'Testen en Optimalisatie: We testen de website op functionaliteit en gebruiksvriendelijkheid.' },
              { step: 'Stap 6: Lancering', description: 'Lancering: We lanceren de website en zorgen voor een soepele overgang.'},
              { step: '', description: 'Ieder project is uniek, het proces kan daarom afwijken. Vanaf begin 2025 controleren we ook of websites op digitale toegankelijkheid voldoen aan de eisen.', isFinalStep: true }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-blue-200 p-4 rounded-lg shadow-md mb-4"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h3 className="font-semibold text-lg">{item.step}</h3>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            ))}
            
          </div>
                {/* Cases Section */}
        <div className="max-w-6xl mx-auto mt-12">
          <h2 className="text-2xl font-bold mb-6 text-left" style={{ color: '#340066' }}>Bekijk onze meest recente cases</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {caseData.slice(0, 3).map((caseItem) => (
              <Link key={caseItem.id} href={`/cases/${caseItem.id}`}>
                <div className="relative border border-gray-200 rounded-lg overflow-hidden shadow-md cursor-pointer">
                  <Image 
                    src={caseItem.image} 
                    alt={`Image for ${caseItem.title}`} 
                    width={300} 
                    height={300} 
                    className="w-full h-48 object-cover" 
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-center p-4">
                    <h3 className="text-xl text-white font-semibold">{caseItem.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        </div>

      </div>
    </div>
  );
};

export default Services;
