'use client';

import React from 'react';
import Image from 'next/image';

const logos = [

  '/angular-light.svg',
  '/figma-light.svg',
  '/nextjs-light.svg',
  '/react-light.svg',
  '/tailwind-light.svg',

];

const LogoSlider: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <div className="flex animate-marquee space-x-8 py-4 bg-transparent">
        {logos.concat(logos).map((logo, index) => (
          <div key={index} className="flex-shrink-0 w-32">
            <Image 
              src={logo} 
              alt={`Logo ${index + 1}`} 
              width={100} 
              height={80} 
              className="object-contain filter brightness-0 invert" // Make logos white
              priority // Optional: Use this if you want to load the image with high priority
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
