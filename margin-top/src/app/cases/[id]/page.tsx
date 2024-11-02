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
      <div className="max-w-6xl mx-auto my-16 flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Over</h2>
          <p className="text-lg mb-4">{caseItem.about}</p>
        </div>
        <div className="md:w-1/2 flex flex-col pl-8">
          <h2 className="text-2xl font-bold mb-4">Services</h2>
          <div className="flex flex-wrap mb-4">
            {caseItem.services.split(',').map((service, index) => (
              <span key={index} className="inline-block bg-transparent border border-black text-black rounded-full px-4 py-2 mr-2 mb-2 hover:bg-black hover:text-white transition">
                {service.trim()}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto my-10 flex flex-col md:flex-row">
        <div className="md:w-1/2 ">
          <h2 className="text-xl  font-bold text-gray-800">{caseItem.headingProject}</h2>
        </div>
        <p className="text-gray-600 max-w-md pl-8">
          {caseItem.descriptionProject}
        </p>
      </div>

      {/* Boxed Image Section */}
      <div className="max-w-full mx-auto mt-10 bg-white ">
        <div className="relative w-full h-80  overflow-hidden"> {/* Boxed image */}
          <Image src={caseItem.caseScreens} alt="Description" layout="fill" objectFit="cover" />
        </div>

      </div>

      {/* New Process Description Section */}
      <div className="py-16 bg-black"> {/* Full width background */}
        <div className="max-w-6xl mx-auto"> {/* Boxed content */}
          <h2 className="text-2xl font-bold mb-4 text-white">Proces Beschrijving</h2>
          <p className="text-lg mb-4 text-white">
            Our project development process involves several key stages to ensure quality and efficiency. We start with research and planning, followed by design, development, testing, and finally deployment.
          </p>
          
          {/* Used Techniques Section with Image */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold mb-2 text-white">Used Techniques:</h3>
              <p className="text-white"> {caseItem.usedTechniques}</p>
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
      </div>

      {/* Resultaat Section */}
      <div className="py-16 bg-white"> {/* Full width background */}
        <div className="max-w-6xl mx-auto"> {/* Boxed content */}
          <h2 className="text-2xl font-bold mb-4 text-black">Resultaat</h2>
          <p className="text-lg pr-4 pb-4 mb-4">
            Our project development process involves several key stages to ensure quality and efficiency. We start with research and planning, followed by design, development, testing, and finally deployment.
          </p>
          
          {/* Used Techniques Section with Image */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold mb-2">Used Techniques:</h3>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                {caseItem.usedTechniques.split(',').map((technique, index) => (
                  <li key={index}>{technique.trim()}</li> // Trim whitespace and create list items
                ))}
              </ul>
              {/* Change button to text link with padding */}
              <a
                href={caseItem.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:underline font-bold mt-2"
              >
               Bekijk de website
              </a>
            </div>
            <div className="md:w-1/2 flex justify-center mt-4 md:mt-0">
              <Image 
                src={caseItem.resultImage} // Replace with the actual path to your image
                alt="Techniques Image"
                width={300} // Set the desired width
                height={200} // Set the desired height
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2 flex justify-center mt-4 md:mt-0">
              <Image 
                src={caseItem.resultImage2} // Replace with the actual path to your image
                alt="Techniques Image"
                width={300} // Set the desired width
                height={200} // Set the desired height
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseDetail;
