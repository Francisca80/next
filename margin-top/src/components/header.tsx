'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoClose, IoMenu } from 'react-icons/io5';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="sticky top-0 z-50 px-4 py-5">
      <header className="bg-white/85 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 w-11/12 max-w-5xl mx-auto transition-all duration-300">
      <div className="px-4 py-3">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center" onClick={handleNavigation}>
            <Image
              src="/logo.png"
              alt="Margin-Top Logo"
              width={35}
              height={35}            
              className="w-auto h-auto"
              priority
            />
            <span className="font-medium ml-2 text-lg font-['Outfit'] tracking-wider uppercase">Margin-Top</span>
          </Link>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu" className="header-button">
              {isMenuOpen ? 
                <IoClose className="text-white text-xl" /> : 
                <IoMenu className="text-white text-xl" />
              }
            </button>
          </div>
          <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
            <Link href="/about" className="navButton" onClick={handleNavigation}>About</Link>
            <Link href="/services" className="navButton" onClick={handleNavigation}>Services</Link>
            <Link href="/cases" className="navButton" onClick={handleNavigation}>Cases</Link>
            <Link href="/journal" className="navButton" onClick={handleNavigation}>Journal</Link>
            <Link href="/contact" className="header-button" onClick={handleNavigation}>Contact</Link>
          </div>
        </nav>
      </div>
      {isMenuOpen && (
        <div 
          ref={menuRef}
            className="absolute left-0 right-0 top-full bg-white/95 backdrop-blur-sm rounded-b-xl w-full border-t border-gray-100 shadow-sm md:hidden overflow-hidden"
        >
            <div className="flex flex-col p-4 space-y-2">
              <Link href="/about" className="py-4 px-2 border-b border-gray-100" onClick={handleNavigation}>About</Link>
              <Link href="/services" className="py-4 px-2 border-b border-gray-100" onClick={handleNavigation}>Services</Link>
              <Link href="/cases" className="py-4 px-2 border-b border-gray-100" onClick={handleNavigation}>Cases</Link>
              <Link href="/journal" className="py-4 px-2 border-b border-gray-100" onClick={handleNavigation}>Journal</Link>
              <Link href="/contact" className="mt-2 header-button" onClick={handleNavigation}>Contact</Link>
          </div>
        </div>
      )}
    </header>
    </div>
  );
};

export default Header;
