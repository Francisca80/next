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
  metadataBase: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://margin-top.com' 
      : 'http://localhost:3000'
  ),
  title: 'Margin-Top',
  description: 'Design & Development Studio',
  openGraph: {
    images: ['/logo.png'],
  },
  twitter: {
    images: ['/logo.png'],
  },
};

export default async function RootLayout({
  children,
}: Props) {
  return (
    <html lang="en" suppressHydrationWarning className={outfit.className}>
      <head>
      <meta name="google-site-verification" content="Whfiv8sqhOfvsI_KYo_3PD-kn9xKas9hs_QUjUpebVw" />
      <meta name="p:domain_verify" content="1144c73cdd493c80e6b220c617015349"/>
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
