'use client';

import React from 'react';
import LogoSlider from './LogoSlider';
import Link from 'next/link';

interface HeroProps {
  imgData: string; // URL for the background image

  title: string;   // Title text
  tagline: string; // Tagline text
}

const Hero: React.FC<HeroProps> = ({ imgData, title, tagline }) => {
  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${imgData})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
        <h1 className="text-6xl md:text-6xl font-bold text-white mb-4">{title}</h1>
        <p className="text-lg md:text-xl text-white mb-8">{tagline}</p>
        <Link href="/book-call">
          <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl text-sm">
            Plan een afspraak
          </button>
        </Link>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
        <LogoSlider /> {/* Integrate the LogoSlider here */}
      </div>
    </div>
  );
};

export default Hero;
