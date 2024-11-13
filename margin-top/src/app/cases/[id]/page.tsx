// app/cases/[id]/page.tsx

import { notFound } from 'next/navigation';
import { caseData } from '../../../lib/case-data';
import CaseDetailClient from '@/components/CaseDetailClient'; // Import the client component
import Image from 'next/image'; // Ensure you import the correct Image component
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
    <div className="max-w-full">
      <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(/servicehero.jpg)` }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white underline" style={{ textDecorationColor: '#4F8BD2' }}>
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
              <span key={index} className="inline-block bg-transparent border border-[#340066] text-[#340066] rounded-full px-4 py-2 mr-2 mb-2 hover:bg-[#340066] hover:text-white transition">
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

      <div > {/* Added padding for mobile responsiveness */}
        {/* Boxed Image Section */}
        <Link href={`/cases/${caseItem.id}`} className="relative w-full h-64"> {/* Made the tile clickable */}
          <div className="relative w-full h-80 overflow-hidden"> {/* Boxed image */}
            <Image 
              src={caseItem.caseScreens} 
              alt="Description" 
              width={1920} 
              height={1080} 
              className="object-cover w-full h-full" // Added w-full and h-full to make it full width
            />
          </div>
        </Link>
      </div>

      {/* New Process Description Section */}
      <div className="py-16 bg-black"> {/* Full width background */}
        <div className="max-w-6xl mx-auto p-4"> {/* Added padding for mobile responsiveness */}
          <h2 className="text-2xl font-bold mb-4 text-center md:text-left text-white">Proces Beschrijving</h2> {/* Centered title on mobile, left-aligned on larger screens */}
       
          {/* Used Techniques Section with Image */}
          <div className="flex flex-col md:flex-row items-center py-10"> {/* Center items on mobile */}
            <div className="md:w-1/2 pr-8 text-center md:text-left"> {/* Center text on mobile, left-aligned on larger screens */}
              <p className="text-lg text-white">
                {caseItem.procesDescription}
              </p>
            </div>
            <div className="md:w-1/2 flex flex-col items-center justify-center bg-white py-16 mt-4 md:mt-0 rounded-lg"> {/* Center image and caption */}
              <Image 
                src={caseItem.procesImage}
                alt="Techniques Image"
                width={300}
                height={200}
                className="rounded-lg shadow-md"
              />
              <p className="text-center text-black mt-2">{caseItem.procesImageCaption}</p> {/* Centered caption underneath the image */}
            </div>
          </div>
        </div>
      </div>
      <CaseDetailClient caseItem={caseItem} />
    </div>
  );
};

export default CaseDetail;
