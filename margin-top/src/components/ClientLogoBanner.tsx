'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import Lenis from 'lenis';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ClientLogoBanner = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisRef.current?.destroy();
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    arrows: false,
    swipeToSlide: true,
    touchThreshold: 10,
    rtl: false,
    waitForAnimate: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          speed: 5000,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          speed: 4000,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          speed: 3000,
        }
      }
    ]
  };

  // Duplicate logos to create seamless loop
  const logos = [
    '/cases/rijksoverheid.svg', 
    '/cases/jodaro/jodarogymlogo.png',
    '/cases/redflowertemple/rftlogo.png',
    '/cases/MPS.jpg',
    '/cases/redora_logo.jpeg',
    '/cases/broeders/broederslogo.png',
    '/cases/rijksoverheid.svg', 
    '/cases/jodaro/jodarogymlogo.png',
    '/cases/redflowertemple/rftlogo.png',
    '/cases/MPS.jpg',
    '/cases/redora_logo.jpeg',
    '/cases/broeders/broederslogo.png',
  ];

  return (
    <div className="flex flex-col items-center py-8 md:py-12 bg-white p-6 md:p-8">
      <h2 className="text-lg md:text-xl mb-8 md:mb-12 text-center text-gray-800">
        Margin-Top heeft bijgedragen aan projecten voor
      </h2>
      <div className="w-full max-w-5xl">
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index} className="px-2 md:px-4">
              <div className="bg-white rounded-lg p-3 md:p-4 h-20 md:h-28 flex items-center justify-center transition-transform duration-300 hover:scale-105">
                <Image
                  src={logo}
                  alt={`Client logo ${index + 1}`}
                  width={120}
                  height={60}
                  className="object-contain w-auto h-auto max-h-16 md:max-h-20"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ClientLogoBanner;