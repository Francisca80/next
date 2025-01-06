'use client';

import React from 'react';
import LogoSlider from './LogoSlider';
import Link from 'next/link';
import Image from 'next/image';

interface HeroProps {
  imgData: string;
  title: string;
  tagline: string;
}

const Hero: React.FC<HeroProps> = ({ imgData, title, tagline }) => {
  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${imgData})` }}>
      <Image 
        src={imgData}
        alt="Hero background"
        fill
        priority
        className="object-cover"
        quality={90}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white underline mb-4" style={{ textDecorationColor: '#4F8BD2' }}>{title}</h1>
        <p className="text-lg md:text-xl text-white mb-8">{tagline}</p>
        <div className="space-x-4">
          <Link 
            href="https://calendly.com/francisca-margin-top" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#6EC1E4] to-[#4F8BD2] text-white font-bold py-2 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl text-sm inline-block"
          >
            Plan een afspraak
          </Link>
          <Link 
            href="/cases"
            className="border-2 border-white text-white font-bold py-2 px-6 rounded-full transition-colors hover:bg-white/10 text-sm inline-block"
          >
            Bekijk Cases
          </Link>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
        <LogoSlider />
      </div>
    </div>
  );
};

export default Hero;
