import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";

const detectorOptions = {
  order: ["localStorage", "cookie", "htmlTag", "path", "subdomain"],
  caches: ["localStorage", "cookie"],
};

export const supported_languages = [
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
  {
    code: "bs",
    name: "Bosnian",
    country_code: "ba",
  },
];

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["en", "bs"],
    fallbackLng: "en",
    detection: detectorOptions,
    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json",
    },
    react: {
      useSuspense: true,
    },
  });
