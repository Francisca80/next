'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export type ConsentSettings = {
  analytics: boolean;
  marketing: boolean;
};

type CookieConsentContextType = {
  showBanner: boolean;
  setShowBanner: (show: boolean) => void;
  consentSettings: ConsentSettings;
  updateConsent: (settings: Partial<ConsentSettings>) => void;
  getConsent: (type: keyof ConsentSettings) => boolean;
};

// Default to no consent
const defaultConsent: ConsentSettings = {
  analytics: false,
  marketing: false,
};

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [showBanner, setShowBanner] = useState(true); // Always show banner by default
  const [consentSettings, setConsentSettings] = useState<ConsentSettings>(defaultConsent);

  useEffect(() => {
    const storedConsent = localStorage.getItem('cookie-consent-settings');
    if (storedConsent) {
      try {
        const parsedConsent = JSON.parse(storedConsent);
        setConsentSettings(parsedConsent);
        setShowBanner(false); // Only hide banner if consent was previously given
      } catch (error) {
        console.error('Error parsing consent settings:', error);
        localStorage.removeItem('cookie-consent-settings'); // Clear invalid settings
      }
    }
  }, []);

  const updateConsent = (settings: Partial<ConsentSettings>) => {
    const newSettings = { ...consentSettings, ...settings };
    setConsentSettings(newSettings);
    localStorage.setItem('cookie-consent-settings', JSON.stringify(newSettings));
  };

  const getConsent = (type: keyof ConsentSettings): boolean => {
    return consentSettings[type];
  };

  return (
    <CookieConsentContext.Provider value={{ 
      showBanner, 
      setShowBanner, 
      consentSettings, 
      updateConsent,
      getConsent 
    }}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);
  if (context === undefined) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider');
  }
  return context;
} 