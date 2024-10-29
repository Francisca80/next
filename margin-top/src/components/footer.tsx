import React from 'react';
import Link from 'next/link'; // Import Link from Next.js

const Footer: React.FC = () => {
  return (
    <footer style={{backgroundColor: '#3B82F6'}} className="text-white py-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-bold text-white">Contact</h3>
          <p className="text-sm text-white">
            Email: <a href="mailto:info@margin-top.com" className="underline">info@margin-top.com</a>
          </p>
        </div>
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-bold text-white">Socials</h3>
          <div className="flex space-x-4">
          
            <Link href="https://instagram.com/margin_top_" target="_blank" rel="noopener noreferrer">
              <span className="hover:text-blue-300">Instagram</span>
            </Link>
            <Link href="https://www.linkedin.com/company/margin-top/" target="_blank" rel="noopener noreferrer">
              <span className="hover:text-blue-300">LinkedIn</span>
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