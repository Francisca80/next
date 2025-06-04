import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// List of protected API routes that require authentication
const PROTECTED_API_ROUTES = [
  '/api/admin',
  '/api/payload',
  '/api/graphql',
  '/api/graphql-playground',
];

// List of sensitive paths that should be blocked
const SENSITIVE_PATHS = [
  '/_next',
  '/node_modules',
  '/src',
  '/.env',
  '/.git',
  '/.github',
  '/.vscode',
  '/.idea',
];

// List of paths that should bypass middleware
const BYPASS_PATHS = [
  '/admin',
  '/admin/login',

];

export function middleware(request: NextRequest) {
  // Check if the path should bypass middleware
  const shouldBypass = BYPASS_PATHS.some(path => 
    request.nextUrl.pathname.startsWith(path)
  );

  if (shouldBypass) {
    return NextResponse.next();
  }

  const response = NextResponse.next();

  // Add security headers
  response.headers.set('X-DNS-Prefetch-Control', 'on');
  response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  
  // Prevent directory listing
  response.headers.set('X-Directory-Listing', 'disabled');

  // Block access to sensitive paths
  const isSensitivePath = SENSITIVE_PATHS.some(path => 
    request.nextUrl.pathname.startsWith(path)
  );

  if (isSensitivePath) {
    return new NextResponse(null, { status: 404 });
  }

  // Check if the request is for a protected API route
  const isProtectedApiRoute = PROTECTED_API_ROUTES.some(route => 
    request.nextUrl.pathname.startsWith(route)
  );

  if (isProtectedApiRoute) {
    // Here you would check for authentication
    // For example, check for a valid session token
    const authToken = request.headers.get('authorization');
    
    if (!authToken) {
      return new NextResponse(
        JSON.stringify({ error: 'Authentication required' }),
        { 
          status: 401,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // You would validate the token here
    // If invalid, return 401
  }

  return response;
}

// Configure which routes to run middleware on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|public/).*)',
  ],
}; 