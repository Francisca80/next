"use client"; // This directive makes the component a client component

import { useState, useEffect } from 'react';
import Image from 'next/image'; // Import Image from Next.js

interface CaseDetailClientProps {
  caseItem: {
    resultText: string;
    resultImage: string;
    resultImageCaption: string;
    resultImage2: string;
    resultImageCaption2: string;
  }; // Define the type according to your caseItem structure
}

const CaseDetailClient = ({ caseItem }: CaseDetailClientProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // State for the selected image
  const [zoomLevel, setZoomLevel] = useState(1); // State for zoom level

  const openModal = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
    setZoomLevel(1); // Reset zoom level when opening the modal
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="max-w-full">
      {/* Resultaat Section */}
      <div className="w-full py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto p-4">
          <h2 className="text-2xl font-bold mb-4 text-center md:text-left">Resultaat</h2>
          <p className="text-lg text-black pr-4 pb-4 mb-4 text-center md:text-left">
            {caseItem.resultText}
          </p>
          
          <div className="flex flex-col justify-start md:flex-row items-center justify-center py-10">
            <div className="md:w-1/2 flex flex-col items-center">
              <p className="text-black mt-2 text-center">{caseItem.resultImageCaption}</p>
              <Image 
                src={caseItem.resultImage}
                alt="Result Image 1"
                width={300}
                height={200}
                className="rounded-lg shadow-md cursor-pointer"
                onClick={() => openModal(caseItem.resultImage)} // Open modal on click
              />
            </div>
            <div className="md:w-1/2 flex flex-col items-center">
              <p className="text-black mt-2 text-center">{caseItem.resultImageCaption2}</p>
              <Image 
                src={caseItem.resultImage2}
                alt="Result Image 2"
                width={300}
                height={200}
                className="rounded-lg shadow-md cursor-pointer"
                onClick={() => openModal(caseItem.resultImage2)} // Open modal on click
              />
            </div>
          </div>
        </div>
      </div>

      {/* Modal for displaying larger image */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50" onClick={closeModal}>
          <div className="flex flex-col items-center">
            <img 
              src={selectedImage!} 
              alt="Large View" 
              className={`max-w-full max-h-full transition-transform duration-300`} 
              style={{ transform: `scale(${zoomLevel})` }} // Apply zoom level
            />
            <input 
              type="range" 
              min="1" 
              max="3" 
              step="0.1" 
              value={zoomLevel} 
              onChange={(e) => setZoomLevel(parseFloat(e.target.value))} 
              className="mt-4 w-1/2 cursor-pointer" // Slider for zoom control
            />
            <label className="text-white mt-2">Zoom Level: {zoomLevel.toFixed(1)}x</label>
          </div>
        </div>
      )}
    </div>
  );
};

export default CaseDetailClient;