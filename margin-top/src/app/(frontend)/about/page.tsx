'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: teamRef, inView: teamInView } = useInView({
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
      <section className="min-h-[70vh] flex items-center py-12 md:py-16">
        <div className="w-11/12 max-w-5xl mx-auto mt-8 md:mt-16">
          <motion.div 
            ref={heroRef}
            className={`flex flex-col md:flex-row items-center gap-12`}
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="md:w-1/2">
              <div className="inline-block relative mb-8">
                <h1 className="text-2xl sm:text-3xl md:text-4xl mb-4 text-[#4F8BD2]">About Margin-Top</h1>
                <hr className="absolute bottom-0 left-0 w-full h-[2px] bg-black" />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="text-base sm:text-lg md:text-xl text-gray-700">
                  Bij Margin-Top geven we jouw visie de ruimte die het verdient. 
                  Hierbij gaat het niet alleen om het bouwen van websites, maar om het creëren van digitale omgevingen 
                  die de aandacht trekken en bezoekers ook blijven boeien.
                </p>
              </motion.div>
            </div>
            <motion.div
              className="md:w-1/2 flex justify-center"
              style={{
                y,
                transform: `translate(${position.x * 0.1}px, ${position.y * 0.1}px)`,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Image
                src="/media/mascotmm.png" 
                alt="About Us" 
                className="w-3/4 h-auto" 
                width={1920}
                height={1080}
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Text Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="w-11/12 max-w-5xl mx-auto">
          <motion.div
            ref={textRef}
            initial={{ opacity: 0, y: 50 }}
            animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            <div className="space-y-6">
              <motion.p 
                className="text-base sm:text-lg md:text-xl text-gray-700"
                initial={{ opacity: 0, x: -20 }}
                animate={textInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Vaak krijgen we de vraag om een website te bouwen, die vindbaar is op Google. 
                Door de inzet van SEO technieken wordt de website optimaal gemaakt voor zoekmachines, 
                maar ook voor de nieuwste manier van zoeken via AI-clients zoals ChatGPT.
              </motion.p>
              <motion.p 
                className="text-base sm:text-lg md:text-xl text-gray-700"
                initial={{ opacity: 0, x: -20 }}
                animate={textInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                We geloven dat gedurfde ontwerpen het verschil maken. Daarom zetten wordt jouw merk in de schijnwerpers gezet 
                met innovatieve oplossingen die verder gaan dan standaard webdesign.
              </motion.p>
            </div>
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              animate={textInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.p 
                className="text-base sm:text-lg md:text-xl text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Of het nu gaat om een volledige website, een unieke webshop, een app of een interactieve gebruikerservaring, 
                Margin-Top biedt de ruimte om jouw creatieve visie tot leven te brengen.
              </motion.p>
              <motion.p 
                className="text-base sm:text-lg md:text-xl text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                Als expert in design en development zorgen voor een naadloze combinatie van vorm en functionaliteit. 
                Onze creativiteit kent geen grenzen – samen realiseren we jouw unieke online aanwezigheid.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Meet Margin-Top Section */}
      <section className="py-12 md:py-16">
        <div className="w-11/12 max-w-5xl mx-auto">
          <motion.div 
            ref={teamRef}
            className="flex flex-col items-center gap-8 md:gap-10"
            initial={{ opacity: 0, y: 50 }}
            animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <div 
              className="w-full max-w-3xl text-center relative"
            >
              <div className="p-4 md:p-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl mb-6 text-[#4F8BD2]">
                  Meet Margin-Top
                </h2>
                <hr className="border-black mb-8 border-t-2 mx-auto w-1/3" />
                <div className="text-base sm:text-lg md:text-xl text-gray-700 space-y-6">
                  <p>
                    Francisca is de oprichter van Margin-Top, een digitaal bureau dat gedreven wordt door een passie voor het ontwerpen van 
                    naadloze gebruikerservaringen en innovatieve digitale oplossingen.
                  </p>
                  <p>
                    Margin-Top is de plek waar passie voor design, innovatie en technologie samenkomen, samen brengen we jouw visie tot leven. 
                    We hebben ervaring in diverse branches, van e-commerce tot B2B, van start-ups tot overheidsorganisaties en financiële instellingen.
                  </p>
                </div>
              </div>
              <div 
                className="bg-[#4F8BD2] rounded-lg mt-8 md:mt-10 p-6 md:p-8 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#6EC1E4] to-[#4F8BD2] opacity-20"></div>
                <div className="flex flex-col items-center">
                  <div className="mb-6">
                    <Image
                      src="/logo.png"
                      alt="Margin-Top Logo"
                      width={120}
                      height={40}
                      className="h-12 w-auto brightness-0 invert"
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl !text-white mb-6 relative font-medium">Neem contact op</h3>
                  <div className="flex flex-col sm:flex-row justify-center gap-4 relative w-full max-w-md">
                    <Link 
                      href="https://www.linkedin.com/in/francisca-van-maurik/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center bg-white px-8 py-4 rounded-lg text-[#4F8BD2] hover:bg-gray-50 transition-colors w-full sm:w-auto"
                    >
                      <FaLinkedin className="w-5 h-5" />
                      <span className="ml-2 font-medium">LinkedIn</span>
                    </Link>
                    <Link 
                      href="mailto:francisca@margin-top.com" 
                      className="flex items-center justify-center bg-white px-8 py-4 rounded-lg text-[#4F8BD2] hover:bg-gray-50 transition-colors w-full sm:w-auto"
                    >
                      <MdEmail className="w-5 h-5" />
                      <span className="ml-2 font-medium">Email</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Section - Moved after Meet Margin-Top */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              <motion.div 
                className="relative aspect-[4/5]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={teamInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="bg-white p-4 shadow-lg rotate-[-2deg] transform hover:rotate-0 transition-transform duration-300 h-full">
                  <div className="relative h-[80%]">
                    <Image
                      src="/francisca.jpg"
                      alt="Francisca van Maurik"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-center mt-4 font-handwriting text-xl text-gray-800">Francisca</p>
                </div>
              </motion.div>
              <motion.div 
                className="relative aspect-[4/5]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={teamInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="bg-white p-4 shadow-lg rotate-[2deg] transform hover:rotate-0 transition-transform duration-300 h-full">
                  <div className="relative h-[80%]">
                    <Image
                      src="/media/work.png"
                      alt="Francisca at Work"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-center mt-4 font-handwriting text-xl text-gray-800">At Work</p>
                </div>
              </motion.div>
              <motion.div 
                className="relative aspect-[4/5]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={teamInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="bg-white p-4 shadow-lg rotate-[-1deg] transform hover:rotate-0 transition-transform duration-300 h-full">
                  <div className="relative h-[80%]">
                    <Image
                      src="/media/dogs.jpg"
                      alt="Francisca with Team"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-center mt-4 font-handwriting text-xl text-gray-800">With Team</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default About;
