'use client';
import './globals.css';
import Header from '../components/header';
import Footer from '../components/footer';
import ContactSectionDark from '@/components/ContactSectionDark';
import CookieConsent from '@/components/CookieConsent';
import { useEffect, useState, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import * as gtag from '@/lib/gtag';
import Script from 'next/script';
import { CookieConsentProvider } from '@/context/CookieConsentContext';

function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + searchParams.toString()
    gtag.pageview(url)
  }, [pathname, searchParams])

  return null;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();
  const isLinkInBio = pathname === '/link-in-bio';

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {gtag.isAnalyticsAllowed() && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
            />
            <Script
              id="gtag-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gtag.GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body>
        <CookieConsentProvider>
          <Suspense fallback={null}>
            <Analytics />
          </Suspense>
          {!isLinkInBio && <Header />}
          <main className="flex-grow">
            {isMounted ? children : null}
          </main>
          {!isLinkInBio && (
            <>
              <ContactSectionDark />    
              <Footer />
            </>
          )}
          <CookieConsent />
        </CookieConsentProvider>
      </body>
    </html>
  );
}
