import React from 'react';
import Link from 'next/link'; // Import Link from Next.js
import Image from 'next/image'; // Import Image from Next.js
import { caseData } from '@/lib/case-data'; // Ensure this path is correct

const Cases: React.FC = () => {
    return (
      <div className="py-24 bg-blue-50 text-black">
        <section className="max-w-6xl mx-auto text-left mt-12 mb-12">
        <h2 className="text-4xl font-bold mb-8 text-left">Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseData.map((caseItem) => ( // Show only the first 3 cases
            <div key={caseItem.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer">
              <Image 
                src={caseItem.image} 
                alt={`Image for ${caseItem.title}`} 
                width={500} // Set appropriate width
                height={300} // Set appropriate height
                className="w-full h-48 object-contain mt-2"
                loading="lazy" // Changed to object-cover for better image fitting
              />
              <div className="p-6 text-left" style={{ height: '250px' }}>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#340066' }}>{caseItem.title}</h3>
                <p className="text-gray-700 line-clamp-5">{caseItem.description}</p> {/* Optional line clamp for description */}
                <Link href={`/cases/${caseItem.id}`} className="text-blue-500 hover:underline">
                  Lees meer
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
          
  );
};
      
  
  export default Cases;
  