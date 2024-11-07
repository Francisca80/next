// app/cases/[id]/page.tsx

import { notFound } from 'next/navigation';
import { caseData } from '../../../lib/case-data';
import Image from 'next/image'; // Import Image from Next.js
import Link from 'next/link';

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
      <div className="max-w-6xl mx-auto my-16 flex flex-col md:flex-row p-4"> {/* Added padding for mobile responsiveness */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">Over</h2>
          <p className="text-lg mb-4">{caseItem.about}</p>
          <button className="bg-black text-white px-4 py-2 rounded-md">
            <Link href={caseItem.url} target="_blank" rel="noopener noreferrer">Bekijk de website</Link>
          </button>
        </div>
        <div className="md:w-1/2 flex flex-col pl-0 md:pl-8">
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

      <div className="w-full bg-blue-50 py-10"> {/* Full width for the section */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row p-4"> {/* Added padding for mobile responsiveness */}
          <div className="md:w-1/2">
            <h2 className="text-xl font-bold text-gray-800">{caseItem.headingProject}</h2>
          </div>
          <p className="text-gray-600 max-w-md pl-0 md:pl-8 mt-4">
            {caseItem.descriptionProject}
          </p>
        </div>
      </div>

      <div className="p-8"> {/* Added padding for mobile responsiveness */}
        {/* Boxed Image Section */}
        <Link href={`/cases/${caseItem.id}`} className="relative w-full h-64"> {/* Made the tile clickable */}
          <div className="relative w-full h-80 overflow-hidden"> {/* Boxed image */}
            <Image src={caseItem.caseScreens} alt="Description" width={1920} height={1080} className="object-cover" />
          </div>
        </Link>
      </div>

      {/* New Process Description Section */}
      <div className="py-16 bg-black"> {/* Full width background */}
        <div className="max-w-6xl mx-auto p-4"> {/* Added padding for mobile responsiveness */}
          <h2 className="text-2xl font-bold mb-4 text-white">Proces Beschrijving</h2>
       
          {/* Used Techniques Section with Image */}
          <div className="flex flex-col md:flex-row items-start py-10">
            <div className="md:w-1/2 pr-8">
              <p className="text-lg text-left text-white">
                {caseItem.procesDescription}
              </p>
            </div>
            <div className="md:w-1/2 flex bg-white justify-center py-16 mt-4 md:mt-0 rounded-lg">
              <Image 
                src={caseItem.procesImage}
                alt="Techniques Image"
                width={300}
                height={200}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
          <p className="text-right text-white mt-2">{caseItem.procesImageCaption}</p>
        </div>
      </div>

      {/* Resultaat Section */}
      <div className="w-full py-16 bg-gray-100"> {/* Full width background */}
        <div className="max-w-6xl mx-auto p-4"> {/* Added padding for mobile responsiveness */}
          <h2 className="text-2xl font-bold mb-4 ">Resultaat</h2>
          <p className="text-lg text-black pr-4 pb-4 mb-4">
            {caseItem.resultText}
          </p>
          
          <div className="flex flex-col md:flex-row items-start py-10">
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold mb-2">Gebruikte Technieken / Stack:</h3>
              <ul className="list-disc list-inside text-gray-600">
                {caseItem.usedTechniques.split(',').map((technique, index) => (
                  <li key={index}>{technique.trim()}</li> 
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 flex flex-col items-center mt-4 md:mt-0">
              <Image 
                src={caseItem.resultImage}
                alt="Result Image 1"
                width={300}
                height={200}
                className="rounded-lg shadow-md"
              />
              <p className="text-black mt-2 text-center">{caseItem.resultImageCaption}</p>
            </div>
            <div className="md:w-1/2 flex flex-col items-center mt-4 md:mt-0">
              <Image 
                src={caseItem.resultImage2}
                alt="Result Image 2"
                width={300}
                height={200}
                className="rounded-lg shadow-md"
              />
              <p className="text-black mt-2 text-center">{caseItem.resultImageCaption2}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseDetail;
