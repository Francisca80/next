import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'nl'] as const,
  defaultLocale: 'nl',
  localePrefix: 'always'
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};