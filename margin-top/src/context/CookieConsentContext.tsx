'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type CookieConsentContextType = {
  showBanner: boolean;
  setShowBanner: (show: boolean) => void;
};

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [showBanner, setShowBanner] = useState(false);

  return (
    <CookieConsentContext.Provider value={{ showBanner, setShowBanner }}>
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