import { clerkMiddleware } from "@clerk/nextjs/server";


export default clerkMiddleware(
//     {
//     publicRoutes: [
//         '/',
//         '/events/:id',
//         '/api/webhook/clerk',
//         '/api/webhook/stripe',
//         '/api/uploadthing'
//       ],
//       ignoredRoutes: [
//         '/api/webhook/clerk',
//         '/api/webhook/stripe',
//         '/api/uploadthing'
//       ]
// }
);

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};


// import {
//     clerkMiddleware,
//     createRouteMatcher
//   } from '@clerk/nextjs/server';
  
//   const isProtectedRoute = createRouteMatcher([
//     '/dashboard(.*)',
//     '/forum(.*)',
//   ]);
  
//   export default clerkMiddleware((auth, req) => {
//     if (isProtectedRoute(req)) auth().protect();
//   });
  
//   export const config = {
//     matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
//   };