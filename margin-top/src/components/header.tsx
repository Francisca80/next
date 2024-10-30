'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg p-2 z-50 w-full max-w-4xl">
      <nav className="flex items-center justify-between flex-wrap">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Company Logo Margin-Top"
            width={40}
            height={15}
            className="mr-2 object-contain"
            priority={true}
            style={{ width: 'auto', height: 'auto' }}
          />
          <span className="font-bold text-lg">Margin-Top</span>
        </Link>
        <div className="flex space-x-4">
          <Link href="/about" className="navButton text-sm">Over ons</Link>
          <Link href="/services" className="navButton text-sm">Diensten</Link>
          <Link href="/cases" className="navButton text-sm">Cases</Link>
   
          <Link href="/book-call">
            <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl text-sm">
              Plan een afspraak
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
