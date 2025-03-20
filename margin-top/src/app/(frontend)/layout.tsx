import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ContactSectionDark from '@/components/ContactSectionDark';
import CookieConsent from '@/components/CookieConsent';
import { CookieConsentProvider } from '@/context/CookieConsentContext';
import LenisProvider from '@/components/LenisProvider';

interface Props {
  children: React.ReactNode;
}

export const metadata = {
  title: 'Margin-Top',
  description: 'Design & Development Studio',
};

export default async function RootLayout({
  children,
}: Props) {
  return (
    <html lang="en" suppressHydrationWarning style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning style={{ fontFamily: 'Montserrat, sans-serif' }}>
        <LenisProvider>
          <CookieConsentProvider>
            <Header />
            <main className="flex-grow">{children}</main>
            <ContactSectionDark />    
            <Footer />
            <CookieConsent />
          </CookieConsentProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
