"use client";

import { MdOutlineEmail, MdOutlinePhoneAndroid } from "react-icons/md";
import Image from 'next/image';
const ContactSectionDark = () => {
    return (
        <div className="relative bg-cover bg-black bg-center p-10">
            <div className="max-w-4xl mx-auto flex items-center justify-between border-2 border-white p-10 rounded-lg">
                <div className="flex items-center">
                <Image 
                        src="/logo.png" // Adjust the path to your logo image
                        alt="Logo" 
                        className="h-16 mr-4" 
                        width={64} // Set the desired width
                        height={64} // Set the desired height
                    />
                    <div className="text-left">
                        <h2 className="text-3xl font-bold text-[#6EC1E4]">Neem contact op</h2>
                        <p className="text-lg text-white">Neem contact op om te bespreken hoe we jou kunnen helpen.</p> {/* Text under the heading */}
                    </div>
                </div>
                <div className="flex flex-col items-end">
                    <div className="flex space-x-2 mb-2"> {/* Added space between links */}
                        <a 
                            aria-label="Send an email"
                            href="mailto:info@margin-top.com" // Replace with your email address
                            className="flex items-center bg-gray-500 text-white rounded px-4 py-2 hover:bg-gray-600 transition duration-200"
                        >
                            <span className="mr-2"> {/* Added span for margin */}
                                <MdOutlineEmail size={24} color="white" />
                            </span>
                            Mail
                        </a>
                        <a 
                            href="tel:+31653894771" // Replace with your phone number
                            className="flex items-center bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition duration-200"
                        >
                            <span className="mr-2"> {/* Added span for margin */}
                                <MdOutlinePhoneAndroid size={24} color="white" />
                            </span>
                            Bel 
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSectionDark; 