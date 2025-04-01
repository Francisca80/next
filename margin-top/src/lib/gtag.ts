export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || '';

// Initialize consent mode
export const initializeConsent = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    // Set default consent state
    window.gtag('consent', 'default', {
      'default_storage': 'denied',
      'analytics_storage': 'denied',
      'ad_storage': 'denied',
      'functionality_storage': 'denied',
      'personalization_storage': 'denied',
      'security_storage': 'granted',
      'wait_for_update': 500,
      // First-party cookie settings
      'cookie_flags': 'SameSite=Strict',
      'cookie_domain': 'auto',
      'cookie_expires': 63072000, // 2 years
      // Privacy settings
      'restricted_data_processing': 'true',
      'allow_google_signals': 'false',
      'allow_ad_personalization_signals': 'false',
      // Attribution settings
      'attribution_reporting': 'denied',
      'ads_data_redaction': 'true'
    });
  }
};

export const updateConsent = (settings: {
  functionality: boolean;
  analytics: boolean;
  marketing: boolean;
  personalization: boolean;
}) => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('consent', 'update', {
    'analytics_storage': settings.analytics ? 'granted' : 'denied',
    'functionality_storage': settings.functionality ? 'granted' : 'denied',
    'personalization_storage': settings.personalization ? 'granted' : 'denied',
    'ad_storage': settings.marketing ? 'granted' : 'denied',
  });
};

export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: url,
    });
  }
};

type GTagEvent = {
  action: string;
  category: string;
  label: string;
  value?: number;
};

export const event = ({ action, category, label, value }: GTagEvent): void => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

export const isAnalyticsAllowed = () => {
  if (typeof window !== 'undefined') {
    const consent = localStorage.getItem('cookieConsent');
    if (consent) {
      const settings = JSON.parse(consent);
      return settings.analytics === true;
    }
  }
  return false;
};

// Update analytics cleanup
const cleanupAnalytics = () => {
  // Use visibilitychange instead of unload
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'page_view', {
          'transport_type': 'beacon'
        });
      }
    }
  });
};

export const loadGoogleAnalytics = () => {
  if (!document.getElementById('ga-script')) {
    const script1 = document.createElement('script');
    script1.id = 'ga-script';
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    script1.async = true;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.id = 'ga-config';
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_TRACKING_ID}', {
        page_path: window.location.pathname,
        transport_type: 'beacon'
      });
    `;
    document.head.appendChild(script2);

    cleanupAnalytics();
  }
};

declare global {
  interface Window {
    gtag: (
      command: 'consent' | 'config' | 'event',
      action: string,
      params?: Record<string, any>
    ) => void;
  }
}