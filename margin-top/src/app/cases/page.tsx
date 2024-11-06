import React from 'react';
import Link from 'next/link'; // Import Link from Next.js
import Image from 'next/image'; // Import Image from Next.js
import { caseData } from '@/lib/case-data';
import { FaArrowRight } from 'react-icons/fa';

const backgroundColors = [
  'bg-red-500',
  'bg-teal-500',
  'bg-black',
  'bg-blue-800',
  'bg-purple-500',
  'bg-pink-500',
  'bg-indigo-500',
  'bg-teal-500',
]; // Add more colors as needed

const Cases: React.FC = () => {
    return (
      <div className="py-24 bg-blue-50">
        <section className="max-w-6xl mx-auto text-left text-white mt-12 mb-12">
        <h2 className="text-4xl font-bold mb-8 text-left">Cases</h2>
        <p className="text-xl text-left text-gray-700 mb-8">Met trots werken we aan projecten die onze klanten helpen hun merken te laten groeien door slimme, digitale oplossingen</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseData.map((caseItem, index) => ( // Show all cases
            <div 
              key={caseItem.id} 
              className={` border border-gray-200 rounded-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer ${backgroundColors[index % backgroundColors.length]}`} // Assign background color
            >
              <div className="bg-white"> {/* White background for the image part */}
                <Image 
                  src={caseItem.image} 
                  alt={`Image for ${caseItem.title}`} 
                  width={500} // Set appropriate width
                  height={300} // Set appropriate height
                  className="w-full h-48 object-cover" // Changed to object-cover for better image fitting
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col justify-between" style={{ height: '250px' }}> {/* Flexbox for alignment */}
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{caseItem.title}</h3>
                  <p className="text-white line-clamp-5">{caseItem.description}</p> {/* Description in gray for contrast */}
                </div>
                <Link href={`/cases/${caseItem.id}`} className="text-white text-xl hover:underline mt-4 inline-block self-end">
                  Lees meer <FaArrowRight className="inline" /> 
                </Link>
              </div>
            </div>
          ))} // Ensure the map function is correctly closed
        </div>
      </section>
    </div>
          
  );
};
      
  
  export default Cases;
  