import { Languages } from "lucide-react";
import { useTranslation } from "react-i18next";
import { LanguageEnum } from "@/lib/i18n";
import { Toggle, ToggleContent, ToggleItem, ToggleTrigger } from "./toggle";

const LANGUAGE_LABELS = {
  [LanguageEnum.PT]: "Português",
  [LanguageEnum.EN]: "English",
};

export function LangToggle() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Toggle>
      <ToggleTrigger>
        <Languages className="size-4 transition-all" />
        <span className="sr-only">Toggle language</span>
      </ToggleTrigger>
      <ToggleContent>
        {Object.values(LanguageEnum).map((lang) => (
          <ToggleItem
            key={lang}
            onClick={() => changeLanguage(lang)}
            data-active={i18n.resolvedLanguage === lang}
          >
            <span>
              <Languages className="size-3 fill-current text-inherit" />
            </span>
            {LANGUAGE_LABELS[lang]}
          </ToggleItem>
        ))}
      </ToggleContent>
    </Toggle>
  );
}
