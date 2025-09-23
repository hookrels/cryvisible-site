// middleware.ts
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/favicon.ico",
  "/robots.txt",
]);

export default clerkMiddleware(async (auth, req) => {
  // Allow public routes through
  if (isPublicRoute(req)) return;

  // Require auth for everything else
  const { userId, redirectToSignIn } = await auth();
  if (!userId) {
    return redirectToSignIn();
  }
});

export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next).*)", // everything except static files and _next
    "/",                           // root
    "/(api|trpc)(.*)",             // include API routes
  ],
};