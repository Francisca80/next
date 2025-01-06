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
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 z-50">
          <div className="max-w-6xl mx-auto flex flex-col gap-4">
            <div className="text-sm text-gray-600">
              We use cookies and similar technologies to improve your experience on our website. You can choose which categories to allow.
              <a href="/privacy" className="text-blue-500 hover:text-blue-600 ml-1">
                Privacy Policy
              </a>
            </div>

            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={localSettings.functionality}
                  onChange={() => handleToggle('functionality' as keyof ConsentSettings)}
                  className="rounded border-gray-300 text-blue-500 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-600">
                  Functional cookies enable basic website functionality and are always necessary
                </span>
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={localSettings.analytics}
                  onChange={() => handleToggle('analytics')}
                  className="rounded border-gray-300 text-blue-500 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-600">
                  Analytics cookies help us understand how visitors use our website
                </span>
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={localSettings.marketing}
                  onChange={() => handleToggle('marketing')}
                  className="rounded border-gray-300 text-blue-500 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-600">
                  Marketing cookies are used to deliver relevant advertisements
                </span>
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={localSettings.personalization}
                  onChange={() => handleToggle('personalization' as keyof ConsentSettings)}
                  className="rounded border-gray-300 text-blue-500 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-600">
                  Personalization cookies enable customized features and content
                </span>
              </label>
            </div>

            <div className="flex justify-end gap-4">
              <button
                onClick={handleRejectAll}
                className="px-4 py-2 text-sm text-blue-500 border border-blue-500 rounded bg-transparent hover:bg-blue-50 transition-colors"
              >
                Reject All
              </button>
              <button
                onClick={handleCustomSave}
                className="px-4 py-2 text-sm text-blue-500 border border-blue-500 rounded bg-transparent hover:bg-blue-50 transition-colors"
              >
                Save Settings
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-4 py-2 text-sm bg-gradient-to-r from-[#6EC1E4] to-[#4F8BD2] text-white rounded hover:opacity-90 transition-colors"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 