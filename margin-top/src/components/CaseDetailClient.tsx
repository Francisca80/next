"use client"; // This directive makes the component a client component

import { useState, useEffect } from 'react';
import Image from 'next/image'; // Import Image from Next.js
import { IoClose } from 'react-icons/io5';  // Add this import at the top

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
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const openModal = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
    setZoomLevel(1); // Reset zoom level when opening the modal
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoomLevel > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
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
      <section className="w-full py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto p-4">
          <h2 className="text-2xl font-bold mb-4 text-center md:text-left">Resultaat</h2>
          <p className="text-lg text-black pr-4 pb-4 mb-4 text-center md:text-left">
            {caseItem.resultText}
          </p>
          
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center py-10 gap-8">
            <div className="md:w-1/2 flex flex-col items-center md:items-start">
              <div className="h-20 flex items-center">
                <p className="text-black text-center md:text-left">{caseItem.resultImageCaption}</p>
              </div>
              <Image 
                src={caseItem.resultImage}
                alt="Result Image 1"
                width={300}
                height={200}
                className="rounded-lg shadow-md cursor-pointer"
                onClick={() => openModal(caseItem.resultImage)}
              />
            </div>
            <div className="md:w-1/2 flex flex-col items-center md:items-start">
              <div className="h-20 flex items-center">
                <p className="text-black text-center md:text-left">{caseItem.resultImageCaption2}</p>
              </div>
              <Image 
                src={caseItem.resultImage2}
                alt="Result Image 2"
                width={300}
                height={200}
                className="rounded-lg shadow-md cursor-pointer"
                onClick={() => openModal(caseItem.resultImage2)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black z-50">
          {/* Close button */}
          <IoClose 
            onClick={closeModal}
            className="absolute top-4 right-4 text-white text-3xl cursor-pointer hover:text-gray-300 transition-colors z-50"
          />

          {/* Image container */}
          <div className="w-screen h-screen flex items-center justify-center">
            <img 
              src={selectedImage!} 
              alt="Large View" 
              className={`
                w-auto h-auto max-w-[90vw] max-h-[90vh] object-contain select-none
                transition-transform duration-200 ease-out
                ${zoomLevel > 1 ? 'cursor-grab active:cursor-grabbing' : ''}
              `}
              style={{ 
                transform: `scale(${zoomLevel}) translate(${position.x}px, ${position.y}px)`,
              }}
              draggable="false"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            />
          </div>

          {/* Zoom control */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col items-center h-64 justify-center bg-black/20 backdrop-blur-sm rounded-full px-2">
            <input 
              type="range" 
              min="1" 
              max="2" 
              step="0.1" 
              value={zoomLevel} 
              onChange={(e) => setZoomLevel(parseFloat(e.target.value))} 
              className="w-48 -rotate-90 absolute
                         appearance-none bg-transparent cursor-pointer
                         [&::-webkit-slider-runnable-track]:h-1
                         [&::-webkit-slider-runnable-track]:rounded-full 
                         [&::-webkit-slider-runnable-track]:bg-white/20
                         [&::-webkit-slider-thumb]:appearance-none 
                         [&::-webkit-slider-thumb]:h-3
                         [&::-webkit-slider-thumb]:w-3
                         [&::-webkit-slider-thumb]:rounded-full 
                         [&::-webkit-slider-thumb]:bg-white
                         [&::-webkit-slider-thumb]:-mt-1
                         [&::-webkit-slider-thumb]:shadow-sm
                         [&::-moz-range-track]:h-1
                         [&::-moz-range-track]:rounded-full 
                         [&::-moz-range-track]:bg-white/20
                         [&::-moz-range-thumb]:h-3
                         [&::-moz-range-thumb]:w-3
                         [&::-moz-range-thumb]:rounded-full 
                         [&::-moz-range-thumb]:bg-white
                         [&::-moz-range-thumb]:border-0"
            />
            <span className="text-white text-xs mt-2 absolute bottom-2">
              {zoomLevel.toFixed(1)}x
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CaseDetailClient;