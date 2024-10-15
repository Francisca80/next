'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 rounded-full shadow-lg p-4 z-50 w-full max-w-4xl">
      <nav className="flex items-center justify-between flex-wrap">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Company Logo Margin-Top"
            width={50}
            height={18}
            className="mr-2"
          />
          <span className="font-bold text-lg">Margin-Top</span>
        </Link>
        <div className="flex space-x-6">
          <Link href="#about" className="navButton">Over ons</Link>
          <Link href="#services" className="navButton">Diensten</Link>
          <Link href="#cases" className="navButton">Cases</Link>
          <Link href="#contact" className="navButton">Contact</Link>
          <Link href="#book-call">
            <button className="bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
              Plan een afspraak
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
