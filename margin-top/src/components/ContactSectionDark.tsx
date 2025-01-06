"use client";

import { MdOutlineEmail, MdOutlinePhoneAndroid } from "react-icons/md";
import Image from 'next/image';

const ContactSectionDark = () => {
    return (
        <div className="relative bg-black p-10">
            <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row items-center justify-between p-10">
                    <div className="flex items-center mb-4 md:mb-0">
                        <Image 
                            src="/logo.png"
                            alt="Logo" 
                            width={64}
                            height={64}
                            className="h-16 w-16 mr-4 object-contain"
                            loading="lazy"
                        />
                        <div className="text-left">
                            <h2 className="text-3xl font-bold text-[#6EC1E4]">Neem contact op</h2>
                            <p className="text-lg text-gray-200">Neem contact op om te bespreken hoe we jou kunnen helpen.</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-end">
                        <div className="flex space-x-2 mb-2">
                            <button 
                                aria-label="Send an email"
                                id="email-button-dark"
                                name="email-button-dark"
                                onClick={() => window.location.href = "mailto:francisca@margin-top.com"}
                                className="flex items-center bg-blue-500/90 text-white rounded px-4 py-2 hover:bg-blue-600 transition duration-200"
                            >
                                <span className="mr-2">
                                    <MdOutlineEmail size={24} color="white" />
                                </span>
                                Mail
                            </button>
                            <button 
                                id="phone-button-dark"
                                name="phone-button-dark"
                                onClick={() => window.location.href = "tel:+31653894771"}
                                className="flex items-center bg-blue-500/90 text-white rounded px-4 py-2 hover:bg-blue-600 transition duration-200"
                            >
                                <span className="mr-2">
                                    <MdOutlinePhoneAndroid size={24} color="white" />
                                </span>
                                Bel 
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSectionDark; 