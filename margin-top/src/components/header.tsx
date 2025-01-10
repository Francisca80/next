'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoClose, IoMenu } from 'react-icons/io5';
import * as gtag from '@/lib/gtag';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { locales } from '@/i18n/routing';
import LangToggle from './LangToggle';

const Header: React.FC = () => {
  const t = useTranslations('navigation');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (destination: string) => {
    gtag.event({
      action: 'navigation_click',
      category: 'navigation',
      label: destination,
    });
  };

  const handleAppointmentClick = () => {
    gtag.event({
      action: 'appointment_click',
      category: 'conversion',
      label: 'header_calendly',
    });
  };

  const toggleLanguage = () => {
    const newLocale = locale === 'nl' ? 'en' : 'nl';
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <header className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg p-2 z-50 w-full max-w-4xl">
      <nav className="flex items-center justify-between flex-wrap">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Margin-Top Logo"
            width={40}
            height={40}            
            className="w-auto h-auto"
            priority
          />
          <span className="font-bold ml-2 text-lg">Margin-Top</span>
        </Link>
        <div className="md:hidden">
          {isMenuOpen ? 
            <IoClose className="text-black text-2xl cursor-pointer" onClick={toggleMenu} /> : 
            <IoMenu className="text-black text-2xl cursor-pointer" onClick={toggleMenu} />
          }
        </div>
        <div className="hidden md:flex space-x-4 md:space-x-6">
          <Link href={`/${locale}/about`} className="navButton text-sm">{t('about')}</Link>
          <Link href={`/${locale}/services`} className="navButton text-sm">{t('services')}</Link>
          <Link href={`/${locale}/cases`} className="navButton text-sm">{t('cases')}</Link>
          <Link href={`/${locale}/contact`} className="navButton text-sm">{t('contact')}</Link>
          <LangToggle />
          <Link 
            href="https://calendly.com/francisca-margin-top" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={handleAppointmentClick}
          >
            <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl text-sm">
              Plan een afspraak
            </button>
          </Link>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="fixed left-0 right-0 top-[85px] bg-white shadow-lg md:hidden">
          <div className="flex flex-col space-y-4 p-6">
            <Link href={`/${locale}/about`}>{t('about')}</Link>
            <Link href={`/${locale}/services`}>{t('services')}</Link>
            <Link href={`/${locale}/cases`}>{t('cases')}</Link>
            <Link href={`/${locale}/contact`}>{t('contact')}</Link>
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
