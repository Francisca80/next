'use client';

import React from 'react';
import { useTheme } from '../app/theme-context';
import styles from './theme-switch.module.css';

const ThemeSwitch: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={styles.switchContainer}>
      <button onClick={toggleTheme} className={styles.switchButton}>
        <span className={styles.switchIcon}>
          {theme === 'light' ? '🌙' : '☀️'}
        </span>
        <span className={styles.switchText}>
          {theme === 'light' ? 'Dark' : 'Light'} Mode
        </span>
      </button>
    </div>
  );
};

export default ThemeSwitch;
