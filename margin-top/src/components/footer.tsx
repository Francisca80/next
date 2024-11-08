import React from 'react';
import Link from 'next/link'; 
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="text-white bg-black py-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start px-4">
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-bold text-white">Adres</h3>
          <p className="text-sm text-white">Bergfluiter 7, Nieuwegein, NL</p>
          <p className="text-sm text-white">
            Email: <a href="mailto:info@margin-top.com" className="underline">info@margin-top.com</a>
          </p>
          <p className="text-sm text-white">KVK: 95142754</p>
        </div>
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-bold text-white">Links</h3>
          <div className="flex space-x-4">
            <Link href="/cases" className="underline text-white">Cases</Link>
            <Link href="/services" className="underline text-white">Services</Link>
          
          </div>
        </div>
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-bold text-white">Socials</h3>
          <div className="flex space-x-4">
            <Link 
              href="https://instagram.com/margin_top_" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Visit our Instagram page"
            >
              <FaInstagram size={24} color="white" />
              <span className="ml-2">Instagram</span>
            </Link>
            <Link 
              href="https://facebook.com/margintopnl" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Visit our Facebook page"
            >
              <FaFacebook size={24} color="white" />
              <span className="ml-2">Facebook</span>
            </Link>
            <Link 
              href="https://www.linkedin.com/company/margin-top/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Visit our LinkedIn page"
            >
              <FaLinkedin size={24} color="white" />
              <span className="ml-2">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <p className="text-sm text-white">&copy; {new Date().getFullYear()} Margin Top. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;