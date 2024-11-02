'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
const About: React.FC = () => {
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
        <div className="md:w-1/2 text-center md:text-left md:pr-8">
          <h2 className="text-4xl font-bold mb-4">Webdesign & Development</h2>
          <p className="mb-6">
            Bij Margin-Top geven we jouw visie de ruimte die het verdient. 
            Hierbij gaat het niet alleen om het bouwen van websites, maar om het creëren van digitale omgevingen 
            die de aandacht trekken en bezoekers blijven boeien. Wij geloven dat gedurfde ontwerpen het 
            verschil maken. Daarom zetten we jouw merk in de schijnwerpers met innovatieve en baanbrekende oplossingen 
            die verder gaan dan standaard webdesign.
            <br />
            Of het nu gaat om een volledige website, een unieke webshop, een app of een interactieve gebruikerservaring, 
            wij bieden de ruimte om jouw creatieve visie tot leven te brengen. Onze experts in design en development 
            zorgen voor een naadloze combinatie van vorm en functionaliteit. Onze creativiteit kent geen grenzen – 
            samen realiseren we jouw unieke online aanwezigheid.
          </p>
        </div>
        <div
          className="md:w-1/2 transform transition-transform duration-300 md:ml-8"
          style={{
            transform: `translate(${position.x * 0.1}px, ${position.y * 0.1}px)`, // Increased multiplier for more movement
          }}
        >
          <Image           src="/section-about.png" alt="About Us" className="w-3/4 h-auto" 
            width={1920}
            height={1080}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
