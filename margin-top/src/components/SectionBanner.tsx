import React from 'react';

const SectionBanner = () => {
    return (
        <div className="relative w-full h-64"> {/* Container for the banner */}
            <img 
                src="banner.png" // Replace with your image URL
                alt="Banner Image"
                className="absolute inset-0 w-full h-full object-cover" // Full-sized image
            />
            <div className="absolute inset-0 bg-black opacity-50" /> {/* Optional overlay for better text visibility */}
            
        </div>
    );
};

export default SectionBanner;
