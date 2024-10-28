// app/cases/[id]/page.tsx

import { notFound } from 'next/navigation';
import { caseData } from '../../../lib/case-data';
import { ICaseData } from '../../../lib/types';
import Image from 'next/image'; // Import Image from Next.js

// Define the props type for CaseDetail
interface CaseDetailProps {
  params: {
    id: string; // The id is a string as it comes from the URL parameters
  };
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
    <div className="relative w-full h-screen bg-cover bg-center">
      <h1 className="text-4xl font-bold mb-4">{caseItem.title}</h1>
      <Image 
        src={caseItem.image} 
        alt={caseItem.title} 
        width={500} // Set appropriate width
        height={300} // Set appropriate height
        className="w-full rounded-lg mb-6 object-contain" // Ensure aspect ratio is maintained
        priority // Optional: Use this if you want to load the image with high priority
      />
      <p className="text-lg mb-4">{caseItem.description}</p>
      <a
        href={caseItem.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
      >
        Visit Website
      </a>
      <br />
      <a href="/cases" className="inline-block mt-4 text-blue-600 hover:underline">
        Back to Cases
      </a>
    </div>
  );
};

export default CaseDetail;
