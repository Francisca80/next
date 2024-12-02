'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoClose, IoMenu } from 'react-icons/io5';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
        <div className="md:hidden">
          {isMenuOpen ? 
            <IoClose className="text-black text-2xl cursor-pointer" onClick={toggleMenu} /> : 
            <IoMenu className="text-black text-2xl cursor-pointer" onClick={toggleMenu} />
          }
        </div>
        <div className="hidden md:flex space-x-4 md:space-x-6">
          <Link href="/about" className="navButton text-sm" onClick={toggleMenu}>Over ons</Link>
          <Link href="/services" className="navButton text-sm" onClick={toggleMenu}>Services</Link>
          <Link href="/cases" className="navButton text-sm" onClick={toggleMenu}>Cases</Link>
          <Link href="/contact" className="navButton text-sm" onClick={toggleMenu}>Contact</Link>
          <Link href="https://calendly.com/francisca-margin-top" target="_blank" rel="noopener noreferrer">
            <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl text-sm">
              Plan een afspraak
            </button>
          </Link>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="fixed left-0 right-0 top-[85px] bg-white shadow-lg md:hidden">
          <div className="flex flex-col space-y-4 p-6">
            <Link href="/about" className="navButton text-sm" onClick={toggleMenu}>Over ons</Link>
            <Link href="/services" className="navButton text-sm" onClick={toggleMenu}>Services</Link>
            <Link href="/cases" className="navButton text-sm" onClick={toggleMenu}>Cases</Link>
            <Link href="/contact" className="navButton text-sm" onClick={toggleMenu}>Contact</Link>
            <Link href="https://calendly.com/francisca-margin-top" target="_blank" rel="noopener noreferrer">
              <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl text-sm w-full">
                Plan een afspraak
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
