import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'nl'] as const,
  defaultLocale: 'nl',
  localePrefix: 'as-needed'
});

export const config = {
  matcher: ['/', '/(nl|en)/:path*']
};