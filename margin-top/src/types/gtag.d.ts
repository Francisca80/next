export interface GtagEventParams {
  event_category?: string;
  event_label?: string;
  value?: number;
  page_path?: string;
  page_title?: string;
  page_location?: string;
  send_to?: string;
  analytics_storage?: 'granted' | 'denied';
  ad_storage?: 'granted' | 'denied';
  ad_user_data?: 'granted' | 'denied';
  ad_personalization?: 'granted' | 'denied';
  wait_for_update?: number;
  [key: string]: string | number | undefined;
}

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (
      command: 'config' | 'event' | 'js' | 'consent',
      targetId: string | 'default' | 'update',
      params?: GtagEventParams
    ) => void;
  }
}

export {};