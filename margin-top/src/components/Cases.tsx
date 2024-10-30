import React from 'react';
import Link from 'next/link'; // Import Link from Next.js
import Image from 'next/image'; // Import Image from Next.js
import { caseData } from '../lib/case-data'; // Ensure this path is correct




const CasesSection: React.FC = () => {
  return (
    <div className="py-24 bg-blue-50 text-black">
      <section className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-8 text-left">Recent Werk</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseData.slice(0, 3).map((caseItem) => ( // Show only the first 3 cases
            <Link href={`/cases/${caseItem.id}`} key={caseItem.id}> {/* Link to CaseDetail page */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105 cursor-pointer">
                <Image 
                  src={caseItem.image} 
                  alt={caseItem.title} 
                  width={500} // Set appropriate width
                  height={300} // Set appropriate height
                  className="w-full h-48 object-contain mt-2" // Changed to object-cover for better image fitting
                />
                <div className="p-6" style={{ height: '200px' }}  >
                  <h3 className="text-xl font-semibold mb-2" style={{ color: '#340066' }}>{caseItem.title}</h3>
                  <p className="text-gray-700 line-clamp-5">{caseItem.description}</p> {/* Optional line clamp for description */}
                </div>
              </div>
            </Link>
          ))}
        </div>
       
      </section>
    </div>
  );
};

export default CasesSection;
