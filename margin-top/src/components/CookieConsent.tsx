'use client';
import { useState, useEffect } from 'react';
import { GA_TRACKING_ID, initializeConsent, updateConsent as updateGtagConsent } from '@/lib/gtag';
import { useCookieConsent, type ConsentSettings } from '@/context/CookieConsentContext';

export default function CookieConsent() {
  const { showBanner, setShowBanner, updateConsent, consentSettings } = useCookieConsent();
  // Initialize local settings with all options enabled
  const [localSettings, setLocalSettings] = useState({
    analytics: true,
    marketing: true,
    personalization: true,
    functionality: true
  });

  // Only sync with consentSettings when they exist in localStorage
  useEffect(() => {
    const storedConsent = localStorage.getItem('cookie-consent-settings');
    if (storedConsent) {
      setLocalSettings(prev => ({
        ...prev,
        analytics: consentSettings.analytics,
        marketing: consentSettings.marketing
      }));
    }
  }, [consentSettings]);

  useEffect(() => {
    initializeConsent();
  }, []);

  const handleAcceptAll = () => {
    const newSettings = {
      analytics: true,
      marketing: true,
      personalization: true,
      functionality: true
    };
    updateConsent(newSettings);
    updateGtagConsent(newSettings);
    setShowBanner(false);
    loadGoogleAnalytics();
  };

  const handleRejectAll = () => {
    const newSettings = {
      analytics: false,
      marketing: false,
      personalization: false,
      functionality: false
    };
    updateConsent(newSettings);
    updateGtagConsent(newSettings);
    setShowBanner(false);
    removeGoogleAnalytics();
  };

  const handleCustomSave = () => {
    updateConsent(localSettings);
    updateGtagConsent(localSettings);
    setShowBanner(false);
    if (localSettings.analytics) {
      loadGoogleAnalytics();
    } else {
      removeGoogleAnalytics();
    }
  };

  const handleToggle = (type: keyof ConsentSettings) => {
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
    <>
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50">
          <div className="w-11/12 max-w-5xl mx-auto py-8">
            <form 
              id="cookie-consent-form" 
              role="form"
              onSubmit={(e) => e.preventDefault()}
              className="space-y-6"
            >
              <div>
                <h2 className="text-2xl mb-2">Cookie voorkeuren</h2>
                <p className="text-gray-600">
                  We gebruiken cookies om je ervaring te verbeteren. Sommige functies vereisen cookies om goed te werken. Je kunt kiezen welke optionele cookies je wilt toestaan.
                  <a href="/privacy" className="text-[#4F8BD2] hover:text-[#6EC1E4] ml-1 underline">
                    Privacy Policy
                  </a>
                </p>
              </div>

              <div className="space-y-4">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    id="cookie-functionality"
                    checked={localSettings.functionality}
                    onChange={() => handleToggle('functionality' as keyof ConsentSettings)}
                    className="mt-1 rounded border-gray-300 text-[#4F8BD2] focus:ring-[#4F8BD2]"
                  />
                  <div>
                    <div className="font-medium mb-1">Functionele cookies</div>
                    <div className="text-sm text-gray-600">
                      Deze cookies zijn noodzakelijk voor de basisfunctionaliteit van de website
                    </div>
                  </div>
                </label>

                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    id="cookie-analytics"
                    checked={localSettings.analytics}
                    onChange={() => handleToggle('analytics')}
                    className="mt-1 rounded border-gray-300 text-[#4F8BD2] focus:ring-[#4F8BD2]"
                  />
                  <div>
                    <div className="font-medium mb-1">Analytics cookies</div>
                    <div className="text-sm text-gray-600">
                      Helpen ons te begrijpen hoe bezoekers onze website gebruiken
                    </div>
                  </div>
                </label>

                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    id="cookie-marketing"
                    checked={localSettings.marketing}
                    onChange={() => handleToggle('marketing')}
                    className="mt-1 rounded border-gray-300 text-[#4F8BD2] focus:ring-[#4F8BD2]"
                  />
                  <div>
                    <div className="font-medium mb-1">Marketing cookies</div>
                    <div className="text-sm text-gray-600">
                      Worden gebruikt om relevante advertenties te tonen
                    </div>
                  </div>
                </label>

                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    id="cookie-personalization"
                    checked={localSettings.personalization}
                    onChange={() => handleToggle('personalization' as keyof ConsentSettings)}
                    className="mt-1 rounded border-gray-300 text-[#4F8BD2] focus:ring-[#4F8BD2]"
                  />
                  <div>
                    <div className="font-medium mb-1">Personalisatie cookies</div>
                    <div className="text-sm text-gray-600">
                      Maken aangepaste functies en content mogelijk
                    </div>
                  </div>
                </label>
              </div>

              <div className="flex justify-end gap-4 pt-4 border-t border-gray-200">
                <button
                  type="button"
                  onClick={handleRejectAll}
                  className="px-6 py-3 text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Alles weigeren
                </button>
                <button
                  type="button"
                  onClick={handleCustomSave}
                  className="px-6 py-3 text-sm font-medium text-[#4F8BD2] hover:text-[#6EC1E4] transition-colors"
                >
                  Voorkeuren opslaan
                </button>
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-[#6EC1E4] to-[#4F8BD2] rounded hover:opacity-90 transition-colors"
                >
                  Alles accepteren
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
} 