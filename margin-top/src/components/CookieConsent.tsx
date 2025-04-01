'use client';
import { useState } from 'react';
import { useCookieConsent, type ConsentSettings } from '@/context/CookieConsentContext';

export default function CookieConsent() {
  const { consentSettings, updateConsentSettings, showBanner, setShowBanner } = useCookieConsent();
  const [showPreferences, setShowPreferences] = useState(false);
  const [localSettings, setLocalSettings] = useState(consentSettings);

  const handleAcceptAll = () => {
    const newSettings = {
      functionality: true,
      analytics: true,
      marketing: true,
      personalization: true
    };
    updateConsentSettings(newSettings);
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    const newSettings = {
      functionality: false,
      analytics: false,
      marketing: false,
      personalization: false
    };
    updateConsentSettings(newSettings);
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    updateConsentSettings(localSettings);
    setShowBanner(false);
  };

  const handleToggle = (type: keyof typeof localSettings) => {
    setLocalSettings(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-xl">
      <div className="w-11/12 max-w-5xl mx-auto py-6">
        {!showPreferences ? (
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <p className="text-gray-700 text-sm leading-relaxed">
              We gebruiken cookies om je ervaring te verbeteren. Standaard zijn alle cookies ingeschakeld.{' '}
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
                Weiger alles
              </button>
              <button
                onClick={handleAcceptAll}
                className="header-button"
              >
                Accepteer alles
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Cookie voorkeuren</h3>
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
                  <h4 className="font-medium">Functionele cookies</h4>
                  <p className="text-sm text-gray-600">Essentiële cookies voor de werking van de website</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={localSettings.functionality}
                    onChange={() => handleToggle('functionality')}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Analytische cookies</h4>
                  <p className="text-sm text-gray-600">Cookies die helpen bij het begrijpen van hoe bezoekers de website gebruiken</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={localSettings.analytics}
                    onChange={() => handleToggle('analytics')}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Marketing cookies</h4>
                  <p className="text-sm text-gray-600">Cookies die worden gebruikt om advertenties te personaliseren</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={localSettings.marketing}
                    onChange={() => handleToggle('marketing')}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Personaliseringscookies</h4>
                  <p className="text-sm text-gray-600">Cookies die de website aanpassen aan jouw voorkeuren</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={localSettings.personalization}
                    onChange={() => handleToggle('personalization')}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleSavePreferences}
                className="header-button"
              >
                Voorkeuren opslaan
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 