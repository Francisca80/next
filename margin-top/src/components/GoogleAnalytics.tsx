'use client';

import Script from 'next/script';
import { GA_TRACKING_ID } from '@/lib/gtag';

export default function GoogleAnalytics() {
  return (
    <>
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
            transport_type: 'beacon'
          });
          // Initialize consent mode
          gtag('consent', 'default', {
            'default_storage': 'denied',
            'analytics_storage': 'denied',
            'ad_storage': 'denied',
            'functionality_storage': 'denied',
            'personalization_storage': 'denied',
            'security_storage': 'granted',
            'wait_for_update': 500,
            'cookie_flags': 'SameSite=Strict',
            'cookie_domain': 'auto',
            'cookie_expires': 63072000,
            'restricted_data_processing': 'true',
            'allow_google_signals': 'false',
            'allow_ad_personalization_signals': 'false',
            'attribution_reporting': 'denied',
            'ads_data_redaction': 'true'
          });
        `}
      </Script>
    </>
  );
} 