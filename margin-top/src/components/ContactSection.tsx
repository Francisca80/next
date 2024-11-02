// margin-top/src/components/Contact.tsx
"use client";
import Image from 'next/image';

const ContactSection = () => {
    return (
        <div className="relative bg-cover bg-center p-10">
            <div className="max-w-4xl mx-auto flex items-center justify-between border-2 border-gray-300 p-10 rounded-lg">
                <div className="flex items-center">
                   <Image 
                        src="/logo.png" // Adjust the path to your logo image
                        alt="Logo" 
                        className="h-16 mr-4" 
                        width={64} // Set the desired width
                        height={64} // Set the desired height
                    />
                    <div className="text-left">
                        <h2 className="text-3xl font-bold">Neem contact op</h2>
                        <p className="text-lg text-gray-700">Neem gerust contact op om te bespreken hoe we jou kunnen helpen.</p> {/* Text under the heading */}
                    </div>
                </div>
                <div className="flex flex-col items-end">
                    <div className="flex space-x-2 mb-2"> {/* Added space between buttons */}
                    <button 
                        aria-label="Send an email"
                        onClick={() => window.location.href = "mailto:info@margin-top.com"} // Replace with your email address
                        className="flex items-center bg-gray-500 text-white rounded px-4 py-2 hover:bg-gray-600 transition duration-200"
                    >
                        <Image src="/mail.png" alt="Email Icon" 
                        width={24}
                        height={24}
                        className="h-5 w-5 mr-2" /> {/* Adjust the path and size as needed */}
                        Mail
                    </button>
                        <button 
                            onClick={() => window.location.href = "tel:+31653894771"} // Replace with your phone number
                            className="flex items-center bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition duration-200"
                        >
                            <Image   src="/phone-call.png" alt="Phone Icon" 
                            width={24}
                            height={24}
                            className="h-5 w-5 mr-2" /> {/* Adjust the path and size as needed */}
                            Bel 
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection; 