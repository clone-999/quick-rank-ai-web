import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default clerkMiddleware(async (auth, req) => {
    const url = req.nextUrl.pathname;

    const { userId } = await auth();

    // Protect /dashboard and sub-routes
    if (!userId && (url.startsWith("/dashboard") || url.startsWith("/chapters") || url.startsWith("/generate-chapters") || url.startsWith("/presentations") || url.startsWith("/generate-presentations"))) {
        return NextResponse.redirect(new URL("/sign-in", req.url));
    }

    // Redirect authenticated users away from auth routes
    if (userId && (url.startsWith("/sign-in") || url.startsWith("/sign-up"))) {
        return NextResponse.redirect(new URL("/auth-callback", req.url));
    }
});

export const config = {
    matcher: [
        "/((?!.*\\..*|_next).*)",
        "/(api|trpc)(.*)",
        "/dashboard(.*)",
        "/chapters(.*)",
        "/generate-chapters(.*)",
        "/presentations(.*)",
        "/generate-presentations(.*)",
        "/",
        "/sign-in",
        "/sign-up",
        "/auth-callback",
    ],
};