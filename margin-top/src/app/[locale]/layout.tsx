import './globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ContactSectionDark from '@/components/ContactSectionDark';
import CookieConsent from '@/components/CookieConsent';
import { CookieConsentProvider } from '@/context/CookieConsentContext';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

interface Props {
  children: React.ReactNode;
  params: Promise<{ locale: 'en' | 'nl' }>;
}

export default async function RootLayout({
  children,
  params
}: Props) {
  const { locale } = await params;
  
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <html lang={locale} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <CookieConsentProvider>
            <Header />
            <main className="flex-grow">{children}</main>
            <ContactSectionDark />    
            <Footer />
            <CookieConsent />
          </CookieConsentProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
