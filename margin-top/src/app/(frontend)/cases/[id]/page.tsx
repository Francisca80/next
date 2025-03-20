import { notFound } from 'next/navigation';
import { caseData } from '../../../../lib/case-data';
import CaseDetailClient from '@/components/CaseDetailClient';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

interface CaseDetailProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return caseData.map((caseItem) => ({
    id: caseItem.id.toString(),
  }));
}

const CaseDetail = async ({ params }: CaseDetailProps) => {
  const { id } = await params;
  const caseId = parseInt(id, 10);
  const caseItem = caseData.find((c) => c.id === caseId);

  if (!caseItem) {
    notFound();
  }

  return (
    <div className="max-w-full">
      <section className="relative h-screen">
        <Image
          src={caseItem.backgroundImage}
          alt={caseItem.title}
          fill
          priority
          className="object-cover"
          quality={85}
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl !text-white font-bold text-center">
            {caseItem.title}
          </h1>
        </div>
      </section>

      <div className="max-w-6xl mx-auto my-16 flex flex-col md:flex-row p-4">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">Over</h2>
          <p className="text-lg mb-4">{caseItem.about}</p>
          <button className="bg-black !text-white px-4 py-2 rounded-md">
            <Link href={caseItem.url} target="_blank" rel="noopener noreferrer">Bekijk de website</Link>
          </button>
        </div>
        <div className="md:w-1/2 flex flex-col pl-0 md:pl-8">
          <h2 className="text-2xl font-bold mb-4">Services</h2>
          <div className="flex flex-wrap mb-4">
            {caseItem.services.split(',').map((service, index) => (
              <span key={index} className="inline-block bg-transparent border border-[#340066] text-[#340066] rounded-full px-4 py-2 mr-2 mb-2 hover:bg-[#340066] hover:!text-white transition">
                {service.trim()}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full bg-blue-50 py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row p-4">
          <div className="md:w-1/2">
            <h2 className="text-xl font-bold text-gray-800">{caseItem.headingProject}</h2>
          </div>
          <p className="text-gray-600 max-w-md pl-0 md:pl-8 mt-4">
            {caseItem.descriptionProject}
          </p>
        </div>
      </div>

      <div>
        <Link href={`/cases/${caseItem.id}`} className="group relative w-full h-64">
          <div className="relative w-full h-80 overflow-hidden">
            <Image 
              src={caseItem.caseScreens} 
              alt="Description" 
              width={1920} 
              height={1080} 
              className="object-cover w-full h-full"
              loading="lazy"  
            />
            <div className="absolute bottom-0 right-0 p-6 text-right">
              <span className="text-lg !text-white group-hover:underline transition-all duration-300">
                Lees meer <FaArrowRight className="inline transform group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
        </Link>
      </div>

      <div className="py-16 bg-black">
        <div className="max-w-6xl mx-auto p-4">
          <h2 className="text-2xl font-bold mb-4 text-center md:text-left !text-white">Proces Beschrijving</h2>
          <div className="flex flex-col md:flex-row items-center py-10">
            <div className="md:w-1/2 pr-8 text-center md:text-left">
              <p className="text-lg !text-white">
                {caseItem.procesDescription}
              </p>
            </div>
            <div className="md:w-1/2 flex flex-col items-center justify-center bg-white py-16 mt-4 md:mt-0 rounded-lg">
              <Image 
                src={caseItem.procesImage}
                alt="Techniques Image"
                width={1200}
                height={675}
                className="w-full h-auto object-contain"
                loading="lazy"
              />
              <p className="text-center text-black mt-2">{caseItem.procesImageCaption}</p>
            </div>
          </div>
        </div>
      </div>
      <CaseDetailClient caseItem={caseItem} />
    </div>
  );
};

export default CaseDetail;