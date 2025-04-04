import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import CookieConsent from '@/components/CookieConsent';
import { CookieConsentProvider } from '@/context/CookieConsentContext';
import LenisProvider from '@/components/LenisProvider';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import { Analytics } from '@/components/Analytics';
import { Outfit } from 'next/font/google';
import ContactSection from '@/components/ContactSection';

interface Props {
  children: React.ReactNode;
}

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata = {
  title: 'Margin-Top',
  description: 'Design & Development Studio',
};

export default async function RootLayout({
  children,
}: Props) {
  return (
    <html lang="en" suppressHydrationWarning className={outfit.className}>
      <head>
        <GoogleAnalytics />
      </head>
      <body suppressHydrationWarning>
        <LenisProvider>
          <CookieConsentProvider>
            <Header />
            <main className="flex-grow">{children}</main>
            <ContactSection />    
            <Footer />
            <CookieConsent />
            <Analytics />
          </CookieConsentProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
