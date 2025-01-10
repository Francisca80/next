'use client';

import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { useCookieConsent } from '@/context/CookieConsentContext';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';

const Footer: React.FC = () => {
  const { setShowBanner } = useCookieConsent();
  const t = useTranslations('footer');
  const locale = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="text-white bg-black py-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start px-4 mb-8 text-center md:text-left">
        <div className="mb-8 md:mb-0">
          <h3 className="text-lg font-bold text-white">{t('address')}</h3>
          <p className="text-sm text-white">Bergfluiter 7, Nieuwegein, NL</p>
          <p className="text-sm text-white">
            {t('email')}: <a href="mailto:francisca@margin-top.com" className="underline">francisca@margin-top.com</a>
          </p>
          <p className="text-sm text-white">{t('kvk')}: 95142754</p>
        </div>

        <div className="mb-8 md:mb-0">
          <h3 className="text-lg font-bold text-white">{t('links.title')}</h3>
          <div className="flex flex-col space-y-2 items-center md:items-start">
            <Link href={`/${locale}/cases`} className="underline text-white">{t('links.cases')}</Link>
            <Link href={`/${locale}/services`} className="underline text-white">{t('links.services')}</Link>
            <Link href={`/${locale}/about`} className="underline text-white">{t('links.about')}</Link>
            <Link href={`/${locale}/contact`} className="underline text-white">{t('links.contact')}</Link>
          </div>
        </div>

        <div className="mb-8 md:mb-0">
          <h3 className="text-lg font-bold text-white">{t('socials.title')}</h3>
          <div className="flex flex-col space-y-2 items-center md:items-start">
            <Link 
              href="https://www.linkedin.com/company/margin-top" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <FaLinkedin size={20} color="white" />
              <span className="ml-2">{t('socials.linkedin')}</span>
            </Link>
            <Link 
              href="https://wa.me/31653894771" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <FaWhatsapp size={20} color="white" />
              <span className="ml-2">{t('socials.whatsapp')}</span>
            </Link>
            <Link 
              href="https://instagram.com/margin_top_" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <FaInstagram size={20} color="white" />
              <span className="ml-2">{t('socials.instagram')}</span>
            </Link>
            <Link 
              href="https://facebook.com/margintopnl" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <FaFacebook size={20} color="white" />
              <span className="ml-2">{t('socials.facebook')}</span>
            </Link>
          </div>
        </div>

        <div className="mb-8 md:mb-0">
          <h3 className="text-lg font-bold text-white">{t('legal.title')}</h3>
          <div className="flex flex-col space-y-2 items-center md:items-start">
            <Link href={`/${locale}/privacy`} className="underline text-white">
              {t('legal.privacy')}
            </Link>
            <a 
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setShowBanner(true);
              }}
              className="underline text-white hover:text-gray-300 transition-colors"
            >
              {t('legal.cookies')}
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 pt-8 border-t border-gray-800">
        <p className="text-sm text-white">{t('copyright', { year })}</p>
      </div>
    </footer>
  );
};

export default Footer;