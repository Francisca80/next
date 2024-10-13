'use client'
import React, { useEffect, useState } from 'react';
import styles from './About.module.css';

const AboutSection: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event;
    setPosition({ x: clientX, y: clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className={styles.boxedLayout}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2>Webdesign & Development</h2>
          <p>
            Bij Margin-Top geven we jouw visie de ruimte die het verdient. 
            Hierbij gaat het niet alleen om het bouwen van websites, maar om het creëren van digitale omgevingen 
            die de aandacht trekken en bezoekers blijven boeien. Wij geloven dat gedurfde ontwerpen het 
            verschil maken. Daarom zetten we jouw merk in de schijnwerpers met innovatieve en baanbrekende oplossingen 
            die verder gaan dan standaard webdesign.
            <br />
            Of het nu gaat om een volledige website, een unieke webshop, een app of een interactieve gebruikerservaring, 
            wij bieden de ruimte om jouw creatieve visie tot leven te brengen. Onze experts in design en development 
            zorgen voor een naadloze combinatie van vorm en functionaliteit, Onze creativiteit kent geen grenzen – 
            samen realiseren we jouw unieke online aanwezigheid.
          </p>
        </div>
        <div
          className={styles.imageContainer}
          style={{
            transform: `translate(${position.x * 0.05}px, ${position.y * 0.05}px)`, // Adjust the multiplier for sensitivity
          }}
        >
          <img src="/section-about.png" alt="About Us" className={styles.image} />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
