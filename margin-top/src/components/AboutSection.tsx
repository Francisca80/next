'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import useTypewriter from '@/hooks/useTypewriter';
import LogoSlider from './LogoSlider';

const AboutSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const quote = "Margin-top is de plek waar design, technologie en strategie samenkomen om merken te laten groeien. Wij creëren digitale oplossingen die het verschil maken.";
  const { displayText, isTyping } = useTypewriter(quote, 40, 500);

  return (
    <section ref={ref} className="w-11/12 max-w-5xl mx-auto min-h-screen flex flex-col relative">
      <div className="flex-1 flex items-center">
        <div 
          className={`grid grid-cols-1 md:grid-cols-2 gap-12 transform transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Left side - Quote */}
          <div className="relative flex items-center">
            <blockquote className="text-2xl md:text-3xl font-light leading-relaxed text-gray-800">
            &quot;{displayText}&quot;
              <span className={`inline-block w-0.5 h-6 bg-gray-800 ml-1 ${isTyping ? 'animate-blink' : 'opacity-0'}`} />
            </blockquote>
          </div>

          {/* Right side - Text and Button */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                Bij Margin-Top geloven we dat design niet alleen mooi moet zijn, maar ook impactvol en innovatief.
                Met onze slogan &quot;Creating space for BOLD Design&quot; maken we duidelijk waar we voor staan: wij creëren 
                de ruimte – technisch, visueel en strategisch – voor gedurfd, vernieuwend design dat opvalt en werkt.
              </p>
              <p className="text-lg text-gray-700 mb-6">
              Of het nu gaat om het bouwen van slimme websites, het ontwikkelen van digitale producten of het inzetten 
              van nieuwe technologieën zoals AI  – wij zorgen voor de basis waarop jouw sterke ideeën tot leven komen. 
              Van standaardoplossingen tot maatwerk met lef en visie, gebruiksvriendelijk en innovatief.
              </p>

              <p className="text-lg text-gray-700">
              Onze visie is duidelijk: we ontwerpen en ontwikkelen scherpe, design-first digitale ervaringen, technisch passend, altijd met een creatieve hoed op.
              </p>
            </div>
            
            <Link 
              href="/about" 
              className="group inline-flex items-center space-x-2 text-lg relative w-fit"
            >
              <span className="relative">
              Meer over ons
                <span className="absolute left-0 right-0 bottom-0 h-px bg-black transform origin-right scale-x-0 transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100" />
              </span>
              <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>

      {/* Logo Slider */}
      <div className="w-full">
        <div className="h-px bg-gray-200 mb-12" />
        <div className="pb-12">
          <LogoSlider />
        </div>
        <div className="h-px bg-gray-200" />
      </div>
    </section>
  );
};

export default AboutSection;