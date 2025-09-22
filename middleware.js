import { NextResponse } from 'next/server'
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// Public routes that stay open
const isPublicRoute = createRouteMatcher([
  '/',                 // Landing page
  '/sign-in(.*)',      // Auth pages
  '/sign-up(.*)',
  '/favicon(.*)',      // Static & Next internals
  '/_next(.*)',
  '/images(.*)',
  '/assets(.*)',
  '/status'            // Optional status page
])

export default clerkMiddleware((auth, req) => {
  // Always allow public routes
  if (isPublicRoute(req)) return NextResponse.next()

  // If not signed in → send to sign-in and come back after
  const { userId } = auth
  if (!userId) {
    return auth.redirectToSignIn({ returnBackUrl: req.url })
  }

  // Signed in → allow
  return NextResponse.next()
})

export const config = {
  matcher: ['/((?!_next/static|_next/im]()
