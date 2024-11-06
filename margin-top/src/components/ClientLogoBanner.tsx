'use client'; // Ensure this is a client component

import React from 'react';
import Image from 'next/image';

const logos = [
    '/cases/rijksoverheid.svg', // Replace with your actual logo paths
    '/cases/volksbank.svg',
    '/cases/jodaro/jodarologo.png',
    '/cases/rft/rftemple.png',
    '/cases/MPS.jpg',
    '/cases/redora_logo.jpeg',
    '/cases/broeders.png',
];

const ClientLogoBanner: React.FC = () => {
    return (
        <div className="flex flex-col items-center py-10 bg-gray-100"> {/* Center logos and add padding */}
            <h2 className="text-xl font-bold mb-10 text-center">Margin-Top heeft bijgedragen aan projecten voor</h2> {/* Heading above logos */}
            <div className="flex flex-wrap justify-center space-x-8 mb-4"> {/* Space between logos and wrap on smaller screens */}
                {logos.map((logo, index) => (
                    <div key={index} className="flex-shrink-0 h-20 mb-4"> {/* Set a fixed height for logos and margin for spacing */}
                        <Image 
                            src={logo} 
                            alt={`Client Logo ${index + 1}`} 
                            width={100} 
                            height={80} 
                            className="object-contain h-full" // Make logos responsive
                            priority // Optional: Use this if you want to load the image with high priority
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ClientLogoBanner; 