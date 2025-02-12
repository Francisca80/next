'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';

const LangToggle = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = (newLocale: 'en' | 'nl') => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center space-x-2 text-sm">
      <span
        onClick={() => toggleLanguage('nl')}
        className={`cursor-pointer transition-all duration-200 ${
          locale === 'nl'
            ? 'text-[#4F8BD2] font-medium border-b-2 border-[#4F8BD2]'
            : 'text-gray-500 hover:text-[#4F8BD2]'
        }`}
      >
        NL
      </span>
      <span className="text-gray-300">|</span>
      <span
        onClick={() => toggleLanguage('en')}
        className={`cursor-pointer transition-all duration-200 ${
          locale === 'en'
            ? 'text-[#4F8BD2] font-medium border-b-2 border-[#4F8BD2]'
            : 'text-gray-500 hover:text-[#4F8BD2]'
        }`}
      >
        EN
      </span>
    </div>
  );
};

export default LangToggle;
