'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { updateConsent } from '@/lib/gtag';

export interface ConsentSettings {
  functionality: boolean;
  analytics: boolean;
  marketing: boolean;
  personalization: boolean;
}

interface CookieConsentContextType {
  showBanner: boolean;
  setShowBanner: (show: boolean) => void;
  consentSettings: ConsentSettings;
  updateConsentSettings: (settings: ConsentSettings) => void;
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

export function CookieConsentProvider({ children }: { children: React.ReactNode }) {
  const [showBanner, setShowBanner] = useState(false); // Start hidden
  const [consentSettings, setConsentSettings] = useState<ConsentSettings>({
    functionality: true,
    analytics: true,
    marketing: true,
    personalization: true
  });

  useEffect(() => {
    // Check if user has already made a choice
    const hasChosen = localStorage.getItem('cookieConsentChosen');
    const savedSettings = localStorage.getItem('cookieConsent');
    
    if (savedSettings) {
      try {
        const parsedSettings = JSON.parse(savedSettings);
        setConsentSettings(parsedSettings);
      } catch (error) {
        console.error('Error parsing cookie consent settings:', error);
      }
    }

    // Only show banner if user hasn't made a choice yet
    if (!hasChosen) {
      // Small delay to ensure page is fully loaded
      setTimeout(() => {
        setShowBanner(true);
      }, 1000);
    }
  }, []);

  const updateConsentSettings = (newSettings: ConsentSettings) => {
    setConsentSettings(newSettings);
    localStorage.setItem('cookieConsent', JSON.stringify(newSettings));
    localStorage.setItem('cookieConsentChosen', 'true'); // Mark that user has made a choice
    updateConsent(newSettings);
    setShowBanner(false);
  };

  return (
    <CookieConsentContext.Provider
      value={{
        showBanner,
        setShowBanner,
        consentSettings,
        updateConsentSettings,
      }}
    >
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