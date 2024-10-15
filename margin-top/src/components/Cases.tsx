import React from 'react';
import Link from 'next/link'; // Import Link from Next.js

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
    <div className="py-24 bg-gray-100 text-black">
      <section className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-8">Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {casesData.map((caseItem) => (
            <Link href={`/cases/${caseItem.id}`} key={caseItem.id}> {/* Wrap each case in a Link */}
              <div className="bg-white rounded-lg overflow-hidden transition-transform transform hover:scale-105"> {/* Removed shadow classes */}
                <img src={caseItem.image} alt={caseItem.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{caseItem.title}</h3>
                  <p className="text-gray-700">{caseItem.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <button className="mt-8 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Bekijk alle cases
        </button>
      </section>
    </div>
  );
};

export default Cases;
