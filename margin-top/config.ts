export const locales = ["en", "nl"] as const;

export const defaultLocale = "nl" as const;

export type Locale = (typeof locales)[number];

// No need for pathnames object anymore
export const localePrefix = "as-needed";

// Define routes that need different paths per locale
export const routes = {
  home: "/",
  about: "/about",
  services: "/services",
  cases: "/cases",
  contact: "/contact"
} as const;
