import { NextRequest, NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;
const SUPPORTED_LOCALES = ["en", "uk"]; // Допустимые локали

export async function middleware(req: NextRequest) {
  const { pathname, locale, search } = req.nextUrl;

  // Пропускаем системные запросы и статические файлы
  if (
    pathname.startsWith("/_next") ||
    pathname.includes("/api/") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return;
  }

  // Проверяем, указана ли допустимая локаль
  if (!SUPPORTED_LOCALES.includes(locale)) {
    const savedLocale = req.cookies.get("NEXT_LOCALE")?.value || "en";

    return NextResponse.redirect(
      new URL(`/${savedLocale}${pathname}${search}`, req.url)
    );
  }

  return NextResponse.next();
}
