export const GA_TRACKING_ID = 'G-ZG4Q00ZZY5';

// Initialize consent mode
export const initializeConsent = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    // Set default consent state
    window.gtag('config', GA_TRACKING_ID, {
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

type ConsentSettings = {
  analytics: boolean;
  marketing: boolean;
  personalization: boolean;
  functionality: boolean;
};

// Update consent state with first-party data handling
export const updateConsent = (settings: ConsentSettings) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      'analytics_storage': settings.analytics ? 'granted' : 'denied',
      'ad_storage': settings.marketing ? 'granted' : 'denied',
      'functionality_storage': settings.functionality ? 'granted' : 'denied',
      'personalization_storage': settings.personalization ? 'granted' : 'denied',
      'security_storage': 'granted',
      'restricted_data_processing': settings.marketing ? 'false' : 'true',
      'allow_google_signals': settings.marketing ? 'true' : 'false',
      'allow_ad_personalization_signals': settings.marketing ? 'true' : 'false',
      'attribution_reporting': settings.marketing ? 'granted' : 'denied',
      'ads_data_redaction': settings.marketing ? 'false' : 'true',
      'first_party_collection': '1',
      'url_passthrough': '1'
    });
  }
};

export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
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
    const consent = localStorage.getItem('cookie-consent-settings');
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
        window.gtag('config', GA_TRACKING_ID, {
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