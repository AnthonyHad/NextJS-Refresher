import { NextResponse } from "next/server";

// Typically meant to take a look at requests. Could be used for Auth.
export function middleware(request) {
  console.log(request);
  return NextResponse.next();
}

// Alows to filter for pages

export const config = {
  matcher: "/news",
};
