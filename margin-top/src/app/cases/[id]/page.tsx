// app/cases/[id]/page.tsx

import { notFound } from 'next/navigation';
import { caseData } from '../../../lib/case-data';
import CaseDetailClient from '@/components/CaseDetailClient'; // Import the client component

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
      {/* Render the client component and pass the caseItem as a prop */}
      <CaseDetailClient caseItem={caseItem} />
    </div>
  );
};

export default CaseDetail;
