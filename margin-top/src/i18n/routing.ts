export const locales = ['en', 'nl'] as const;
export const defaultLocale = 'nl' as const;
export const supportedLocales = ['en', 'nl'] as const;

export type Locale = (typeof locales)[number];

export const routing = {
  locales,
  defaultLocale,
  localePrefix: 'as-needed'
};