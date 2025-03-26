import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ContactSectionDark from '@/components/ContactSectionDark';
import CookieConsent from '@/components/CookieConsent';
import { CookieConsentProvider } from '@/context/CookieConsentContext';
import LenisProvider from '@/components/LenisProvider';
import Script from 'next/script';
import { GA_TRACKING_ID } from '@/lib/gtag';
import { Analytics } from '@/components/Analytics';

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
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body suppressHydrationWarning style={{ fontFamily: 'Montserrat, sans-serif' }}>
        <LenisProvider>
          <CookieConsentProvider>
            <Header />
            <main className="flex-grow">{children}</main>
            <ContactSectionDark />    
            <Footer />
            <CookieConsent />
            <Analytics />
          </CookieConsentProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
