import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale: requestLocale }) => {
  return {
    locale: requestLocale,
    messages: (await import(`../../messages/${requestLocale}.json`)).default,
    timeZone: 'Europe/Amsterdam'
  };
});
