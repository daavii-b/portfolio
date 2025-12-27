import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import ptBrResources from "./locales/pt-br.json";
import enUsResources from "./locales/en-us.json";

export enum LanguageEnum {
  EN = "en-us",
  PT = "pt-br",
}

export const RESOURCES = {
  [LanguageEnum.EN]: { translation: enUsResources },
  [LanguageEnum.PT]: { translation: ptBrResources },
} as const;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    defaultNS: "translation",
    lowerCaseLng: true,
    resources: RESOURCES,
    interpolation: { escapeValue: false },
  });
