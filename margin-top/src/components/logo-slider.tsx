'use client';

import React from 'react';
import Image from 'next/image';
import { useTheme } from '@/app/theme-context';
import styles from './logo-slider.module.css';

interface Logo {
  light: string;
  dark: string;
}

const logos: Logo[] = [
  { light: '/adobe-light.svg', dark: '/typescript-dark.svg' },
  { light: '/angular-light.svg', dark: '/typescript-dark.svg' },
  { light: '/figma-light.svg', dark: '/typescript-dark.svg' },
  { light: '/nextjs-light.svg', dark: '/typescript-dark.svg' },
  { light: '/react-light.svg', dark: '/typescript-dark.svg'},
  { light: '/tailwind-light.svg', dark: '/typescript-dark.svg'},
  { light: '/typescript-light.svg', dark: '/typescript-dark.svg' },
];

const LogoSlider: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`${styles.logoSlider} ${styles[theme]}`}>
      <div className={styles.sliderTrack}>
        {logos.concat(logos).map((logo, index) => (
          <div key={index} className={styles.slide}>
            <Image 
              src={theme === 'light' ? logo.light : logo.dark} 
              alt={`Logo ${index + 1}`} 
              width={100} 
              height={80} 
              style={{ objectFit: 'contain' }} // This is now acceptable
              priority // Optional: Use this if you want to load the image with high priority
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
