'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from '../app/theme-context';
import styles from './Header.module.css';


const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();




  return (
    <header className={`${styles.header} ${styles[theme]}`}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logoLink}>
          <Image
            src="/logo.png"
            alt="Company Logo Margin-Top"
            width={50}
            height={18}
            className={styles.logo}
          />
        </Link>
        <div className={styles.navbar}>
          <Link href="/about" className={styles.navButton}>About</Link>
          <Link href="/services" className={styles.navButton}>Services</Link>
          <Link href="/cases" className={styles.navButton}>Cases</Link>
        </div>
     
        <button onClick={toggleTheme} className={styles.themeSwitch}>
          <span className={`${styles.switchIcon} ${styles.sunIcon}`}>☀️</span>
          <span className={`${styles.switchIcon} ${styles.moonIcon}`}>🌙</span>
          <span className={styles.switchKnob}></span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
