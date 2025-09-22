// ✅ Server-only import so Edge middleware doesn't pull UI components
import { authMiddleware } from '@clerk/nextjs/server'

export default authMiddleware({
  // Routes that stay public
  publicRoutes: [
    '/',               // landing
    '/sign-in(.*)',    // auth pages
    '/sign-up(.*)',
    '/favicon(.*)',    // static & Next internals
    '/_next(.*)',
    '/images(.*)',
    '/assets(.*)',
    '/status'          // optional status page
  ],
  // If someone isn't signed in, send them here
  signInUrl: '/sign-in',
})

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
