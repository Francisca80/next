'use client';
import React from 'react';
import { useTheme } from '@/app/theme-context';
import styles from './services.module.css';

const servicesData = [
  {
    title: 'Web Design',
  },
  {
    title: 'Web Development',
  },
  {
    title: 'Web App Development',
  },
  {
    title: 'Mobile App Development',
  },
  {
    title: 'UI/UX Design',
  },
  {
    title: 'Wordpress Websites',
  },
  {
    title: 'Hosting',
  },
  {
    title: 'Onderhoud',
  },
  {
    title: 'React/Next/Angular Development',
  },
  // Add more services as needed
];

const Services: React.FC = () => {
  const { theme } = useTheme(); // Get the current theme

  return (
    <div className={`${styles.servicesContainer} ${theme}`}>
      <h2 className={styles.sectionTitle}>Services</h2>
      <div className={styles.servicesGrid}>
        {servicesData.map((service, index) => (
          <div className={styles.serviceCard} key={index}>
            <h3 className={styles.serviceTitle}>{service.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
