import { GtagEventParams } from "@/types/gtag";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string,
      params?: GtagEventParams | undefined
    ) => void;
  }
}

export const GA_TRACKING_ID = 'G-ZG4Q00ZZY5';

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
    const consent = localStorage.getItem('cookie-consent');
    return consent === 'all';
  }
  return false;
}; 