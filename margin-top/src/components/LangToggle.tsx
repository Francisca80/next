'use client';
<<<<<<< HEAD

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function LangToggle() {
=======

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';

const LangToggle = () => {
  const locale = useLocale();
  const router = useRouter();
>>>>>>> 4d37bc6 (language 2)
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = params.locale as string;

<<<<<<< HEAD
  const getNewPathname = (locale: string) => {
    const segments = pathname.split('/');
    segments[1] = locale; // Replace the locale segment
    return segments.join('/');
=======
  const toggleLanguage = (newLocale: 'en' | 'nl') => {
    router.replace(pathname, { locale: newLocale });
>>>>>>> 4d37bc6 (language 2)
  };

  return (
    <div className="flex items-center space-x-2 text-sm">
      <Link
        href={getNewPathname('nl')}
        className={`cursor-pointer transition-all duration-200 ${
          currentLocale === 'nl'
            ? 'text-[#4F8BD2] font-medium border-b-2 border-[#4F8BD2]'
            : 'text-gray-500 hover:text-[#4F8BD2]'
        }`}
      >
        NL
      </Link>
      <span className="text-gray-300">|</span>
      <Link
        href={getNewPathname('en')}
        className={`cursor-pointer transition-all duration-200 ${
          currentLocale === 'en'
            ? 'text-[#4F8BD2] font-medium border-b-2 border-[#4F8BD2]'
            : 'text-gray-500 hover:text-[#4F8BD2]'
        }`}
      >
        EN
      </Link>
    </div>
  );
};

export default LangToggle;
