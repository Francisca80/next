import React from 'react';
import Link from 'next/link'; // Import Link from Next.js
import styles from './Cases.module.css'; // Import the CSS module

const casesData = [
  {
    id: 'nfi', // Add an ID for routing
    title: 'NFI',
    description: 'Nederlands Forensisch Instituut',
    image: '/cases/rijksoverheid.svg',
  },
  {
    id: 'volksbank', // Add an ID for routing
    title: 'Volksbank',
    description: 'Volksbank',
    image: '/cases/volksbank.svg',
  },
  {
    id: 'totheroot', // Add an ID for routing
    title: 'ToTheRoot',
    description: 'ToTheRoot',
    image: '/cases/totheroot.svg',
  },
  {
    id: 'redora', // Add an ID for routing
    title: 'Redora',
    description: 'Redora',
    image: '/cases/redora.svg',
  }
];

const Cases: React.FC = () => {
  return (
    <div className={styles.boxedLayout}>
      <section className={styles.casesSection}>
        <h2>Projecten</h2>
        <div className={styles.casesContainer}>
          {casesData.map((caseItem) => (
            <Link href={`/cases/${caseItem.id}`} key={caseItem.id}> {/* Wrap each case in a Link */}
              <div className={styles.caseItem}>
                <img src={caseItem.image} alt={caseItem.title} className={styles.caseImage} />
                <div className={styles.textContainer}>
                  <h3>{caseItem.title}</h3>
                  <p>{caseItem.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <button className={styles.viewAllButton}>
          Bekijk al ons werk
        </button>
      </section>
    </div>
  );
};

export default Cases;
