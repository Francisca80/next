export interface GtagEventParams {
  event_category?: string;
  event_label?: string;
  value?: number;
  page_path?: string;
  page_title?: string;
  page_location?: string;
  send_to?: string;
  [key: string]: string | number | undefined;
}

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string,
      params?: GtagEventParams
    ) => void;
  }
}

export {}; 