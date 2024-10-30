import React from 'react';
import Link from 'next/link'; // Import Link from Next.js

const Footer: React.FC = () => {
  return (
    <footer style={{backgroundColor: '#6EC1E4'}} className="text-white py-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-bold text-white">Contact</h3>
         
          <p className="text-sm text-white">Adres: Bergfluiter 7, Nieuwegein, NL</p>
          <p className="text-sm text-white">
            Email: <a href="mailto:info@margin-top.com" className="underline">info@margin-top.com</a>
          </p>
          <p className="text-sm text-white">KVK: 85544481</p>
        </div>
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-bold text-white">Socials</h3>
          <div className="flex space-x-4">
            <Link href="https://instagram.com/margin_top_" target="_blank" rel="noopener noreferrer">
              <img src="/instagram.png" alt="Instagram" className="w-6 h-6 hover:text-blue-300" />
            </Link>
            <Link href="https://www.linkedin.com/company/margin-top/" target="_blank" rel="noopener noreferrer">
              <img src="/linkedin.png" alt="LinkedIn" className="w-6 h-6 hover:text-blue-300" />
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