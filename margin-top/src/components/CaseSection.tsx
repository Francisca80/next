import React from 'react';
import Link from 'next/link'; // Import Link from Next.js
import Image from 'next/image'; // Import Image from Next.js
import { caseData } from '../lib/case-data'; // Ensure this path is correct
import { FaArrowRight } from 'react-icons/fa';

const CasesSection: React.FC = () => {
  return (
    <div className="py-24 bg-white text-black">
      <section className="max-w-6xl mx-auto text-center mb-12 p-8">
        <h2 className="text-4xl font-bold mb-4 md:ml-8 text-left">Recent Werk</h2>
        <p className="text-left text-gray-700 mb-8">Met trots werken we aan projecten die onze klanten helpen hun merken te laten groeien door slimme, digitale oplossingen</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseData.slice(0, 3).map((caseItem) => ( // Show only the first 3 cases
            <Link href={`/cases/${caseItem.id}`} key={caseItem.id} className="relative border border-gray-200 rounded-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer">
              <Image 
                src={caseItem.image} 
                alt={`Image for ${caseItem.title}`} 
                width={500} // Set appropriate width
                height={400} // Set appropriate height
                className="w-full h-48 object-cover" // Changed to object-cover for better image fitting
              />
              <div className="p-6 text-left flex flex-col justify-between" style={{ height: '250px' }}>
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: '#340066' }}>{caseItem.title}</h3>
                  <p className="text-gray-700 line-clamp-5">{caseItem.description}</p>
                </div>
                <div className="text-right mt-auto"> {/* Pushes the link to the bottom right */}
                  <span className="text-lg hover:underline" style={{ color: '#340066' }}>
                    Lees meer <FaArrowRight className="inline" style={{ color: '#340066' }}/> 
                  </span>
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
