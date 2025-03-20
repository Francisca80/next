'use client';

import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LogoSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
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

  return (
    <div className="w-full py-5 px-4 rounded">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="px-2">
            <Image
              src={logo}
              alt={`Partner logo ${index + 1}`}
              width={80}
              height={40}
              className="object-contain h-6 w-auto mx-auto filter brightness-0 invert opacity-75 hover:opacity-100 transition-opacity"
              loading="lazy"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LogoSlider;
