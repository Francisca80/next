import './globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, unstable_setRequestLocale } from 'next-intl/server';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ContactSectionDark from '@/components/ContactSectionDark';
import CookieConsent from '@/components/CookieConsent';
import { CookieConsentProvider } from '@/context/CookieConsentContext';

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export default async function RootLayout({ children, params }: Props) {
  unstable_setRequestLocale(params.locale);
  
  const messages = await getMessages();

  return (
    <html lang={params.locale}>
      <body>
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          <CookieConsentProvider>
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <ContactSectionDark />    
            <Footer />
            <CookieConsent />
          </CookieConsentProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
