import { authMiddleware } from '@clerk/nextjs'

export default authMiddleware({
  // Pages that stay public
  publicRoutes: [
    '/',               // landing
    '/sign-in(.*)',    // auth pages
    '/sign-up(.*)',
    '/favicon(.*)',    // static & next internals
    '/_next(.*)',
    '/images(.*)',
    '/assets(.*)',
    '/status'          // optional status page
  ],
  signInUrl: '/sign-in', // where to send unauthenticated users
})

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
