import { Languages } from "lucide-react";
import { useTranslation } from "react-i18next";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Button,
} from "@/components/ui";
import { cn } from "@/lib";
import { LanguageEnum } from "@/lib/i18n";

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
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="dark:inset-shadow-accent shadow-accent/40 border border-blue-600/30 shadow-md inset-shadow-2xs focus-visible:ring-0"
        >
          <Languages className="size-4" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="border-border/40 bg-accent/30 backdrop-blur-x2 space-y-2 p-1 py-2"
      >
        {Object.values(LanguageEnum).map((lang) => (
          <MenuItem
            key={lang}
            onClick={() => changeLanguage(lang)}
            data-active={i18n.resolvedLanguage === lang}
            className="flex flex-row gap-2 text-xs"
          >
            <span>
              <Languages className="size-3 fill-current text-inherit" />
            </span>
            {LANGUAGE_LABELS[lang]}
          </MenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

const MenuItem = (props: React.ComponentProps<typeof DropdownMenuItem>) => {
  return (
    <DropdownMenuItem
      {...props}
      className={cn(
        "border-border/10 bg-background/40 rounded-sm border p-2 font-semibold",
        "shadow-[inset_0_0_10px_rgba(59,130,246,0.1)] data-[active=true]:bg-blue-500/5 data-[active=true]:text-blue-400",
        props.className,
      )}
    />
  );
};
