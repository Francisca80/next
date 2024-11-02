import React from 'react';
import Image from 'next/image';

const SectionBanner = () => {
    return (
        <div className="relative w-full h-64"> {/* Container for the banner */}
            <Image 
                src="/banner.png" // Replace with your image URL
                alt="Banner Image"
                className="absolute inset-0 w-full h-full object-cover"
                width={1920}
                height={64}        
            
            />
            <div className="absolute inset-0 bg-black opacity-20" /> {/* Optional overlay for better text visibility */}
            
        </div>
    );
};

export default SectionBanner;
