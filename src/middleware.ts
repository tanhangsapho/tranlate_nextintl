import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/route";

export default createMiddleware({
  locales: routing.locales,
  defaultLocale: routing.defaultLocale,
  localePrefix: "always",
});

export const config = {
  matcher: ["/", "/(en|km)/:path*"],
};
