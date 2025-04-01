'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { updateConsent } from '@/lib/gtag';

export interface ConsentSettings {
  functionality: boolean;
  analytics: boolean;
  marketing: boolean;
  personalization: boolean;
}

interface CookieConsentContextType {
  consentSettings: ConsentSettings;
  updateConsentSettings: (settings: ConsentSettings) => void;
  showBanner: boolean;
  setShowBanner: (show: boolean) => void;
}

const CookieConsentContext = createContext<CookieConsentContextType | null>(null);

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [showBanner, setShowBanner] = useState(true);
  const [consentSettings, setConsentSettings] = useState<ConsentSettings>({
    functionality: true,
    analytics: true,
    marketing: true,
    personalization: true
  });

  useEffect(() => {
    const hasChosen = localStorage.getItem('cookieConsentChosen');
    const savedSettings = localStorage.getItem('cookieConsent');

    if (hasChosen === 'true' && savedSettings) {
      setConsentSettings(JSON.parse(savedSettings));
      setShowBanner(false);
    }
  }, []);

  const updateConsentSettings = (settings: ConsentSettings) => {
    setConsentSettings(settings);
    localStorage.setItem('cookieConsent', JSON.stringify(settings));
    localStorage.setItem('cookieConsentChosen', 'true');
  };

  return (
    <CookieConsentContext.Provider
      value={{
        consentSettings,
        updateConsentSettings,
        showBanner,
        setShowBanner,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider');
  }
  return context;
} 