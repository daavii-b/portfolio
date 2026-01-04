import "i18next";
import type { LanguageEnum, RESOURCES } from "@/lib/i18n";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "translation";
    resources: (typeof RESOURCES)[LanguageEnum.EN];
    returnObjects: true;
  }
}
