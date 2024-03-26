import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextRequest, NextResponse } from "next/server";
import { languages } from "./constants/languages";

// https://nextjs.org/docs/app/building-your-application/routing/internationalization
// get browser locale
const getLocale = (req: NextRequest) => {
  const headers = {
    "accept-language": req.headers.get("accept-language") ?? "",
  };
  const negotiator = new Negotiator({ headers });
  const acceptedLanguages = negotiator.languages();
  const defaultLocale = "en";

  return match(acceptedLanguages, languages, defaultLocale);
};

// redirect to accept-language
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const pathnameHasLocale = languages.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return;
  }

  const locale = getLocale(req);
  req.nextUrl.pathname = `/${locale}${pathname}`;

  return NextResponse.redirect(req.nextUrl);
}

export const config = {
  matcher: [
    "/((?!_next).*)",
  ],
};
