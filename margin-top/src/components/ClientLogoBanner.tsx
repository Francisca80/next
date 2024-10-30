'use client'; // Ensure this is a client component

import React from 'react';
import Image from 'next/image';

const logos = [
  
    '/cases/rijksoverheid.svg', // Replace with your actual logo paths
    '/cases/volksbank.svg',
    '/cases/jodarologo.png',
    '/cases/rftemple.png',
    '/cases/MPS.jpg',
    '/cases/redora_logo.jpeg',


];


const ClientLogoBanner: React.FC = () => {
    return (
        <div className="flex flex-col items-center py-6 bg-gray-100"> {/* Center logos and add padding */}
            <h2 className="text-xl font-bold mb-4">Clients</h2> {/* Heading above logos */}
            <div className="flex space-x-8 mb-4"> {/* Space between logos */}
                {logos.map((logo, index) => (
                    <div key={index} className="flex-shrink-0 h-20"> {/* Set a fixed height for logos */}
                        <Image 
                            src={logo} 
                            alt={`Client Logo ${index + 1}`} 
                            width={100} 
                            height={80} 
                            className="object-contain h-full " // Make logos black
                            priority // Optional: Use this if you want to load the image with high priority
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ClientLogoBanner; 