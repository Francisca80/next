import React from 'react';
import styles from './services.module.css';

const servicesData = [
  { title: "Webdesign", description: "Crafting words that engage and convert." },
  { title: "Web Development", description: "Building high-performance websites." },
  { title: "Landing Pages", description: "Creating conversion-focused landing pages." },
  { title: "Creative Strategy", description: "Developing strategies that resonate." },
  { title: "UX Design", description: "Unique graphics tailored to your brand." },
  { title: "Branding", description: "Design a brand identity that stands out." },
];

const Services = () => {
  return (
    <div className={styles.servicesContainer}>
      <h2 className={styles.sectionTitle}>Our Services</h2>
      <div className={styles.servicesGrid}>
        {servicesData.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <h3 className={styles.serviceTitle}>{service.title}</h3>
            {/* Removed description to only show title */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

