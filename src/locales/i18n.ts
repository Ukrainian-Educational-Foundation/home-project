import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./en";
import uk from "./uk";

const resources = {
  en,
  uk,
} as const;

const defaultNS = "common";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: (typeof resources)["en"];
  }
}

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: "en",
    resources,
    detection: {
      order: ["navigator"],
      caches: ["cookie"],
    },
    ns: Object.keys(resources),
    defaultNS,
  });

export default i18next;
