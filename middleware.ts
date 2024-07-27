import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define public and ignored routes
const isPublicRoute = createRouteMatcher([
  "/",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/events/:id",
  "/api/webhook/clerk",
  "/api/webhook/stripe",
  "/api/uploadthing",
]);

const isIgnoredRoute = createRouteMatcher([
  "/api/webhook/clerk",
  "/api/webhook/stripe",
  "/api/uploadthing",
]);

export default clerkMiddleware((auth, req) => {
  // Protect routes that are not public or ignored
  if (!isPublicRoute(req) && !isIgnoredRoute(req)) {
    auth().protect();
  }
});

export const config = {
  // Define which routes should be processed by this middleware
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
