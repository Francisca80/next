'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import Lenis from 'lenis';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LogoSlider = () => {
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
    speed: 8000,
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
    '/tools/angular-light.svg',
    '/tools/figma-light.svg',
    '/tools/nextjs-light.svg',
    '/tools/react-light.svg',
    '/tools/tailwind-light.svg',
    '/tools/shopify-white.svg',
    '/tools/angular-light.svg',
    '/tools/figma-light.svg',
    '/tools/nextjs-light.svg',
    '/tools/react-light.svg',
    '/tools/tailwind-light.svg',
    '/tools/shopify-white.svg',
  ];

  return (
    <div className="w-full overflow-hidden bg-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-2 md:px-4">
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index} className="px-2 md:px-4">
              <div className="bg-white rounded-lg p-2 md:p-4 h-16 md:h-24 flex items-center justify-center transition-transform duration-300 hover:scale-105">
                <Image
                  src={logo}
                  alt={`Client logo ${index + 1}`}
                  width={120}
                  height={60}
                  className="object-contain w-auto h-auto max-h-12 md:max-h-16"
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

export default LogoSlider;
