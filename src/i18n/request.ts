import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

const locales = ["uk", "en"];

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!locale || !locales.includes(locale as any)) notFound();

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
