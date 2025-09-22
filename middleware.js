import { NextResponse } from 'next/server'
import { clerkMiddleware, createRouteMatcher, clerkClient } from '@clerk/nextjs/server'

const isPublicRoute = createRouteMatcher([
  '/',                 // Landing page (public)
  '/sign-in(.*)',      // Auth pages (public)
  '/sign-up(.*)',
  '/favicon(.*)',      // Static & Next internals
  '/_next(.*)',
  '/images(.*)',
  '/assets(.*)',
  '/status'            // Optional status page
])

export default clerkMiddleware(async (auth, req) => {
  const { userId } = auth
  const path = req.nextUrl.pathname

  if (isPublicRoute(req)) return NextResponse.next()

  if (!userId) {
    return auth.redirectToSignIn({ returnBackUrl: req.url })
  }

  try {
    const user = await clerkClient.users.getUser(userId)
    const role = (user.publicMetadata && user.publicMetadata.role) || ''

    if (process.env.CLOSED_BETA === '1') {
      if (!['admin', 'tester', 'customer'].includes(role)) {
        return new NextResponse('Invite only. Ask the owner for access.', { status: 403 })
      }
    }

    if (path.startsWith('/admin') && role !== 'admin') {
      return new NextResponse('Forbidden', { status: 403 })
    }
  } catch {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  return NextResponse.next()
})

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
