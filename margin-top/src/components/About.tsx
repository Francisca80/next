import React from 'react';
import styles from './About.module.css';

const AboutSection: React.FC = () => {
  return (
    <div className={styles.boxedLayout}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2>Webdesign & Development</h2>
          <p>
          Bij  Margin-Top geven we jouw visie de ruimte die het verdient. 
          Hierbij gaat het niet alleen om het bouwen van websites, maar om het creëren van digitale omgevingen 
          die de aandacht trekken en bezoekers blijven boeien. Wij geloven dat gedurfde ontwerpen het 
          verschil maken. Daarom zetten we jouw merk in de schijnwerpers met innovatieve en baanbrekende oplossingen 
          die verder gaan dan standaard webdesign.
          <br />
          Of het nu gaat om een volledige website, een unieke webshop, een app of een interactieve gebruikerservaring, 
          wij bieden de ruimte om jouw creatieve visie tot leven te brengen. Onze experts in design en development 
          zorgen voor een naadloze combinatie van vorm en functionaliteit, Onze creativiteit kent geen grenzen – 
          samen realiseren we jouw unieke online aanwezigheid.
          </p>
        </div>
        <img src="/section-about.png" alt="About Us" className={styles.image} />
      </div>
    </div>
  );
};

export default AboutSection;
