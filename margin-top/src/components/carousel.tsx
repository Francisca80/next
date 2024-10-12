'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './carousel.module.css';

interface Case {
  title: string;
  description: string;
  image: string;
}

const cases: Case[] = [
  {
    title: 'NFI',
    description: 'Nederlands Forensisch Instituut',
    image: '/cases/rijksoverheid.svg',
  },
  {
    title: 'Volksbank',
    description: 'Volksbank',
    image: '/cases/volksbank.svg',
  },
  {
    title: 'ToTheRoot',
    description:'ToTheRoot',
    image: '/cases/totheroot.svg',
  },
  {
    title: 'Redora',
    description:'Redora',
    image: '/cases/redora.svg',
  }
];

const CaseCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cases.length);
  };

  const showPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cases.length) % cases.length);
  };

  useEffect(() => {
    const interval = setInterval(showNext, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.carousel}>
      <h2>Cases</h2>
      <div className={styles.carouselContainer}>
        {cases.map((caseItem, index) => (
          <div
            key={index}
            className={styles.carouselSlide}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            <div className={styles.caseItem}>
              <Image
                src={caseItem.image}
                alt={caseItem.title}
                width={400}
                height={300}
                objectFit="cover"
              />
              <h3>{caseItem.title}</h3>
              <p>{caseItem.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button className={styles.carouselPrev} onClick={showPrev}>&#10094;</button>
      <button className={styles.carouselNext} onClick={showNext}>&#10095;</button>
    </div>
  );
};

export default CaseCarousel;