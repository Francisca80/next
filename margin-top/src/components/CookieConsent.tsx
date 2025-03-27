'use client';
import { useState, useEffect } from 'react';
import { GA_TRACKING_ID, initializeConsent, updateConsent as updateGtagConsent } from '@/lib/gtag';
import { useCookieConsent, type ConsentSettings } from '@/context/CookieConsentContext';
import Link from 'next/link';

export default function CookieConsent() {
  const { showBanner, setShowBanner, consentSettings, updateConsentSettings } = useCookieConsent();
  const [showPreferences, setShowPreferences] = useState(false);
  const [localSettings, setLocalSettings] = useState(consentSettings);

  useEffect(() => {
    setLocalSettings(consentSettings);
  }, [consentSettings]);

  // Don't render anything if banner should be hidden
  if (!showBanner) return null;

  const handleAcceptAll = () => {
    const newSettings = {
      functionality: true,
      analytics: true,
      marketing: true,
      personalization: true
    };
    updateConsentSettings(newSettings);
  };

  const handleRejectAll = () => {
    const newSettings = {
      functionality: false,
      analytics: false,
      marketing: false,
      personalization: false
    };
    updateConsentSettings(newSettings);
  };

  const handleSavePreferences = () => {
    updateConsentSettings(localSettings);
  };

  const handleToggle = (type: keyof typeof localSettings) => {
    setLocalSettings(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const loadGoogleAnalytics = () => {
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
        });
      `;
      document.head.appendChild(script2);
    }
  };

  const removeGoogleAnalytics = () => {
    ['ga-script', 'ga-config'].forEach(id => {
      const script = document.getElementById(id);
      if (script) {
        script.remove();
      }
    });
    window.dataLayer = [];
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-xl">
      <div className="w-11/12 max-w-5xl mx-auto py-6">
        {!showPreferences ? (
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <p className="text-gray-700 text-sm leading-relaxed">
              We gebruiken cookies om je ervaring te verbeteren. Alle cookies zijn standaard ingeschakeld.{' '}
              <button
                onClick={() => setShowPreferences(true)}
                className="header-button"
              >
                Beheer voorkeuren
              </button>
            </p>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button
                onClick={handleRejectAll}
                className="header-button"
              >
                Alles weigeren
              </button>
              <button
                onClick={handleAcceptAll}
                className="header-button"
              >
                Alles accepteren
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Cookie voorkeuren</h3>
                <p className="text-sm text-gray-600 mt-1">Alle cookies zijn standaard ingeschakeld. Je kunt je voorkeuren hier aanpassen.</p>
              </div>
              <button
                onClick={() => setShowPreferences(false)}
                className="header-button"
              >
                Sluiten
              </button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Essentiële cookies</p>
                  <p className="text-sm text-gray-600">Noodzakelijk voor de basisfunctionaliteit van de website.</p>
                </div>
                <input 
                  type="checkbox" 
                  checked 
                  disabled 
                  className="h-4 w-4 text-black border-gray-300 rounded focus:ring-black cursor-not-allowed" 
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Functionaliteit cookies</p>
                  <p className="text-sm text-gray-600">Voor verbeterde functionaliteit en personalisatie.</p>
                </div>
                <input
                  type="checkbox"
                  checked={localSettings.functionality}
                  onChange={() => handleToggle('functionality')}
                  className="h-4 w-4 text-black border-gray-300 rounded focus:ring-black cursor-pointer"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Analytics cookies</p>
                  <p className="text-sm text-gray-600">Helpen ons te begrijpen hoe bezoekers de website gebruiken.</p>
                </div>
                <input
                  type="checkbox"
                  checked={localSettings.analytics}
                  onChange={() => handleToggle('analytics')}
                  className="h-4 w-4 text-black border-gray-300 rounded focus:ring-black cursor-pointer"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Marketing cookies</p>
                  <p className="text-sm text-gray-600">Voor het tonen van relevante advertenties.</p>
                </div>
                <input
                  type="checkbox"
                  checked={localSettings.marketing}
                  onChange={() => handleToggle('marketing')}
                  className="h-4 w-4 text-black border-gray-300 rounded focus:ring-black cursor-pointer"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Personalisatie cookies</p>
                  <p className="text-sm text-gray-600">Voor het onthouden van je voorkeuren.</p>
                </div>
                <input
                  type="checkbox"
                  checked={localSettings.personalization}
                  onChange={() => handleToggle('personalization')}
                  className="h-4 w-4 text-black border-gray-300 rounded focus:ring-black cursor-pointer"
                />
              </div>
            </div>
            <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
              <button
                onClick={handleRejectAll}
                className="header-button"
              >
                Alles weigeren
              </button>
              <button
                onClick={handleSavePreferences}
                className="header-button"
              >
                Voorkeuren opslaan
              </button>
            </div>
            <p className="text-xs text-gray-600">
              Voor meer informatie over ons cookiebeleid, zie onze{' '}
              <Link href="/privacy" className="text-black hover:text-gray-800 underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        )}
      </div>
    </div>
  );
} 