// app/cases/[id]/page.tsx

import { notFound } from 'next/navigation';
import { caseData } from '../../../lib/case-data';
import Image from 'next/image'; // Import Image from Next.js
import ContactSection from '@/components/Contact';

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

      <div className="max-w-6xl mx-auto mt-10 flex flex-col md:flex-row">
      <div className="md:w-1/2">
            <h2 className="text-xl font-bold text-gray-800">{caseItem.headingProject}</h2>     </div>
            <p className="text-gray-600 max-w-md">
              {caseItem.descriptionProject}
            </p>
          
        </div>

      {/* Boxed Image Section */}
      <div className="max-w-6xl mx-auto my-10 p-4 bg-white ">

        <div className="relative w-full h-64 border-4 border-blue-400 rounded-lg overflow-hidden"> {/* Boxed image */}
          <Image src={caseItem.caseScreens} alt="Description" layout="fill" objectFit="cover" />
        </div>
        <p className="mt-4 text-gray-700">This is a description of the boxed image section.</p>
      </div>
   {/* New Process Description Section */}
   <div className="max-w-6xl mx-auto my-10 p-4 bg-gray-100 ">
        <h2 className="text-2xl font-bold mb-4">Proces Beschrijving</h2>
        <p className="text-lg mb-4">
          Our project development process involves several key stages to ensure quality and efficiency. We start with research and planning, followed by design, development, testing, and finally deployment.
        </p>
        
        {/* Used Techniques Section with Image */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold mb-2">Used Techniques:</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Wordpress</li>
              <li>UX Design</li>
              <li>Responsive Web Design</li>
         
            </ul>
          </div>
          <div className="md:w-1/2 flex justify-center mt-4 md:mt-0">
            <Image 
              src="/cases/jodaro_old.png" // Replace with the actual path to your image
              alt="Techniques Image"
              width={300} // Set the desired width
              height={200} // Set the desired height
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
        </div>
<div className="max-w-6xl mx-auto my-10 p-4 bg-blue-100   ">
        <h2 className="text-2xl font-bold mb-4">Resultaat</h2>
        <p className="text-lg mb-4">
          Our project development process involves several key stages to ensure quality and efficiency. We start with research and planning, followed by design, development, testing, and finally deployment.
        </p>
        
        {/* Used Techniques Section with Image */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold mb-2">Used Techniques:</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Wordpress</li>
              <li>UX Design</li>
              <li>Responsive Web Design</li>
         
            </ul>
            <button className="bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">     
          <a
            href={caseItem.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Website
          </a>
        </button>
          </div>
          <div className="md:w-1/2 flex justify-center mt-4 md:mt-0">
            <Image 
              src="/cases/jodaro_old.png" // Replace with the actual path to your image
              alt="Techniques Image"
              width={300} // Set the desired width
              height={200} // Set the desired height
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 flex justify-center mt-4 md:mt-0">
            <Image 
              src="/cases/jodaro_new.png" // Replace with the actual path to your image
              alt="Techniques Image"
              width={300} // Set the desired width
              height={200} // Set the desired height
              className="rounded-lg shadow-md"
            />
       
          </div>
        </div>
        </div>
    <ContactSection />
      </div>

  );
};

export default CaseDetail;
