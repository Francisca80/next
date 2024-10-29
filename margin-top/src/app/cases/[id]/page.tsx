// app/cases/[id]/page.tsx

import { notFound } from 'next/navigation';
import { caseData } from '../../../lib/case-data';
import Image from 'next/image'; // Import Image from Next.js

// Define the props type for CaseDetail
interface CaseDetailProps {
  params: Promise<{
    id: string; // The id is a string as it comes from the URL parameters
  }>;
}

// Generate static paths for the dynamic routes
export async function generateStaticParams() {
  return caseData.map((caseItem) => ({
    id: caseItem.id.toString(), // Ensure id is a string for the path
  }));
} 

// The component to display case details
const CaseDetail = async ({ params }: CaseDetailProps) => {
  const { id } = await params; // Await params before using its properties
  const caseId = parseInt(id, 10); // Convert `id` from params to integer
  const caseItem = caseData.find((c) => c.id === caseId); // Find the case by id

  if (!caseItem) {
    notFound(); // Renders the 404 page if the case is not found
  }

  return (
    <div className="max-w-full"> {/* Full width for the hero section */}
      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${caseItem.backgroundImage})` }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white ">
            {caseItem.title}
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl text-white">
            {caseItem.description}
          </p>
        </div>
      </section>
  
      {/* Additional Content Section */}
      <div className="max-w-6xl mx-auto mt-10 flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Over</h2>
          <p className="text-lg mb-4">{caseItem.about}</p>
        </div>
        <div className="md:w-1/2 flex flex-col">
          <h2 className="text-2xl font-bold mb-4">Services</h2>
          <div className="flex flex-wrap mb-4">
            {caseItem.services.split(',').map((service, index) => (
              <span key={index} className="inline-block bg-blue-600 text-white rounded-full px-4 py-2 mr-2 mb-2 hover:bg-blue-700 transition">
                {service.trim()}
              </span>
            ))}
          </div>
          <h2 className="text-2xl font-bold mb-4">Wanneer</h2>
          <p className="text-lg mb-4">{caseItem.when}</p>
        </div>
      </div>

      {/* Boxed Image Section */}
      <div className="max-w-6xl mx-auto my-10 p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Featured Image</h2>
        <div className="relative w-full h-64 border-4 border-blue-400 rounded-lg overflow-hidden"> {/* Boxed image */}
          <Image src={caseItem.caseScreens} alt="Description" layout="fill" objectFit="cover" />
        </div>
        <p className="mt-4 text-gray-700">This is a description of the boxed image section.</p>
      </div>

     
      <div className="mt-8">
        <button className="bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">     
          <a
            href={caseItem.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Website
          </a>
        </button>
        <br />
        <button className="bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
          <a href="/cases">
            Back to Cases
          </a>
        </button>
      </div>
    </div>
  );
};

export default CaseDetail;
