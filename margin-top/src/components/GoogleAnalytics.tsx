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
          
          // Initialize consent mode v2 with enhanced privacy settings
          gtag('consent', 'default', {
            'ad_user_data': 'denied',
            'ad_personalization': 'denied',
            'ad_storage': 'denied',
            'analytics_storage': 'denied',
            'functionality_storage': 'denied',
            'personalization_storage': 'denied',
            'security_storage': 'granted',
            'wait_for_update': 500,
            'cookie_flags': 'SameSite=Strict;Secure;HttpOnly',
            'cookie_domain': 'auto',
            'cookie_expires': 63072000,
            'restricted_data_processing': 'true',
            'allow_google_signals': 'false',
            'allow_ad_personalization_signals': 'false',
            'attribution_reporting': 'denied',
            'ads_data_redaction': 'true',
            'third_party_cookies': 'denied',
            'url_passthrough': 'false',
            'client_id_passthrough': 'false',
            'user_data_redaction': 'true',
            'google_analytics_4_consent_mode': 'true'
          });

          // Configure gtag with enhanced privacy-focused settings
          gtag('config', '${GA_TRACKING_ID}', {
            page_path: window.location.pathname,
            transport_type: 'beacon',
            cookie_flags: 'SameSite=Strict;Secure;HttpOnly',
            anonymize_ip: true,
            allow_google_signals: false,
            allow_ad_personalization_signals: false,
            restricted_data_processing: true,
            ads_data_redaction: true,
            third_party_cookies: 'denied',
            url_passthrough: false,
            client_id_passthrough: false,
            user_data_redaction: true,
            google_analytics_4_consent_mode: true,
            send_page_view: true,
            debug_mode: false,
            debug_view: false,
            non_interaction: true,
            session_control: 'start',
            session_timeout: 1800,
            session_engagement: false,
            session_quality: false,
            session_quality_threshold: 0,
            session_quality_timeout: 0,
            session_quality_engagement: false,
            session_quality_engagement_threshold: 0,
            session_quality_engagement_timeout: 0
          });
        `}
      </Script>
    </>
  );
} 