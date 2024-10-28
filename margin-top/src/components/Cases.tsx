import React from 'react';
import Link from 'next/link'; // Import Link from Next.js
import Image from 'next/image'; // Import Image from Next.js
import { caseData } from '../lib/case-data'; // Ensure this path is correct




const CasesSection: React.FC = () => {
  return (
    <div className="py-24 bg-blue-50 text-black">
      <section className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-8 text-left">Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseData.slice(0, 3).map((caseItem) => ( // Show only the first 3 cases
            <Link href={`/cases/${caseItem.id}`} key={caseItem.id}> {/* Link to CaseDetail page */}
              <div className="bg-white rounded-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer">
                <Image 
                  src={caseItem.image} 
                  alt={caseItem.title} 
                  width={500} // Set appropriate width
                  height={300} // Set appropriate height
                  className="w-full h-48 object-cover" 
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2" style={{ color: '#340066' }}>{caseItem.title}</h3>
                  <p className="text-gray-700">{caseItem.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Link href={`/cases`} > 
        <button className="mt-8 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
  
          Bekijk alle cases
        </button>
        </Link>
      </section>
    </div>
  );
};

export default CasesSection;
