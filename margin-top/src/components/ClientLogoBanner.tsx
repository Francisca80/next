'use client'; // Ensure this is a client component

import React from 'react';
import Image from 'next/image';

const logos = [
    '/cases/rijksoverheid.svg', // Replace with your actual logo paths
    '/cases/volksbank.svg',
    '/cases/jodaro/jodarogymlogo.png',
    '/cases/redflowertemple/rftlogo.png',
    '/cases/MPS.jpg',
    '/cases/redora_logo.jpeg',
    '/cases/broeders/broederslogo.png',
];

const ClientLogoBanner: React.FC = () => {
    return (
        <div className="flex flex-col items-center py-10 bg-[#340066] p-8">
            <h2 className="text-xl font-bold mb-10 text-center text-white">Margin-Top heeft bijgedragen aan projecten voor</h2>
            <div className="w-full max-w-5xl overflow-hidden">
                <div className="animate-scroll flex gap-8 pt-4"
                     style={{ animationDelay: `${logos.length * 0.2 + 0.5}s` }}>
                    {/* First set of logos */}
                    {logos.map((logo, index) => (
                        <div 
                            key={`first-${index}`} 
                            className="relative flex-shrink-0 w-[200px] h-[120px] bg-white rounded-lg shadow-sm p-4 
                                     flex items-center justify-center
                                     animate-bounce-in"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <div className="relative w-full h-full">
                                <Image 
                                    src={logo} 
                                    alt={`Client Logo ${index + 1}`} 
                                    fill
                                    className="object-contain p-2"
                                    priority
                                />
                            </div>
                        </div>
                    ))}
                    {/* Duplicate set for continuous scroll */}
                    {logos.map((logo, index) => (
                        <div 
                            key={`second-${index}`} 
                            className="relative flex-shrink-0 w-[200px] h-[120px] bg-white rounded-lg shadow-sm p-4 
                                     flex items-center justify-center"
                        >
                            <div className="relative w-full h-full">
                                <Image 
                                    src={logo} 
                                    alt={`Client Logo ${index + 1}`} 
                                    fill
                                    className="object-contain p-2"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ClientLogoBanner; 