export const GA_TRACKING_ID = 'G-ZG4Q00ZZY5';

// Initialize consent mode
export const initializeConsent = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      'consent': 'default',
      'security_storage': 'granted'  // Always granted for essential functionality
    });
  }
};

type ConsentSettings = {
  analytics: boolean;
  marketing: boolean;
  personalization: boolean;
  functionality: boolean;
};

// Update consent state
export const updateConsent = (settings: ConsentSettings) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      'consent': 'default',
      'analytics_storage': settings.analytics ? 'granted' : 'denied',
      'ad_storage': settings.marketing ? 'granted' : 'denied',
      'functionality_storage': settings.functionality ? 'granted' : 'denied',
      'personalization_storage': settings.personalization ? 'granted' : 'denied',
        'security_storage': 'granted'  // Always granted for essential functionality
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