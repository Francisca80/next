'use client';

import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import { useInView } from 'react-intersection-observer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LogoSlider = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const settings = {
    dots: false,
    infinite: true,
    speed: 8000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  const logos = [
    '/tools/angular-light.svg',
    '/tools/figma-light.svg',
    '/tools/nextjs-light.svg',
    '/tools/react-light.svg',
    '/tools/tailwind-light.svg',
    '/tools/shopify-white.svg',
  ];

  // Double the logos array for smoother infinite scroll
  const extendedLogos = [...logos, ...logos];

  return (
    <div 
      ref={ref} 
      className={`transform transition-all duration-1000 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="px-12">
        <Slider {...settings}>
          {extendedLogos.map((logo, index) => (
            <div key={index} className="px-4">
              <Image
                src={logo}
                alt={`Tool ${index + 1}`}
                width={80}
                height={40}
                className="object-contain h-8 w-auto mx-auto opacity-75 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default LogoSlider;
