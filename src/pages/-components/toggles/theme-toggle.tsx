import {
  type LucideIcon,
  LucideMoon,
  LucideSun,
  LucideSunMoon,
} from "lucide-react";
import { ThemeEnum, useTheme } from "@/contexts";
import { ToggleContent, ToggleTrigger, ToggleItem, Toggle } from "./toggle";

const THEME_ICONS: Record<ThemeEnum, LucideIcon> = {
  light: LucideSun,
  dark: LucideMoon,
  system: LucideSunMoon,
} as const;

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const Icon = THEME_ICONS[theme];

  return (
    <Toggle>
      <ToggleTrigger>
        <Icon className="size-4 transition-all" />
        <span className="sr-only">Toggle theme</span>
      </ToggleTrigger>
      <ToggleContent>
        {Object.entries(ThemeEnum).map(([key, value]) => (
          <ToggleItem
            key={key}
            onClick={() => setTheme(value)}
            data-active={value === theme}
          >
            {(() => {
              const Icon = THEME_ICONS[value];
              return <Icon className="size-3 fill-current text-inherit" />;
            })()}
            <span>{key}</span>
          </ToggleItem>
        ))}
      </ToggleContent>
    </Toggle>
  );
};
