import React from 'react';
import Link from 'next/link'; // Import Link from Next.js
import Image from 'next/image'; // Import Image from Next.js
import { caseData } from '@/lib/case-data'; // Ensure this path is correct


import CasesSection from '@/components/Cases'; // Ensure this path is correct

const Cases: React.FC = () => {
  return (
   <CasesSection />
  );
};

export default Cases;
