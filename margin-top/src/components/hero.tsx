'use client';

import Image from 'next/image';
import { useTheme } from '../app/theme-context';
import styles from './hero.module.css';

interface HeroProps {
  imgData: string;
  imgAlt: string;
  title: string;
}

export default function Hero({ imgData, imgAlt, title }: HeroProps) {
  const { theme } = useTheme();

  return (
    <div className={`${styles.heroContainer} ${styles[theme]}`}>
      <div className={styles.imageWrapper}>
        <Image 
          src={imgData}
          alt={imgAlt}
          fill
          style={{objectFit: "cover"}}
        />
        <div className={styles.overlay}></div>
      </div>
      
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>{title}</h1>
      </div>
      
      {/* Wave SVG */}
      {/* <div className={styles.waveWrapper}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className={styles.waveSvg}>
          <path className={styles.wavePath} d="M0,288L48,282.7C96,277,192,267,288,266.7C384,267,480,277,576,277.3C672,277,768,267,864,261.3C960,256,1056,256,1152,261.3C1248,267,1344,277,1392,282.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div> */}
    </div>
  );
}
