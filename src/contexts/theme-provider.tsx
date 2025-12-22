import { createContext, useContext, useEffect, useState } from "react";

export enum ThemeEnum {
  Dark = "dark",
  Light = "light",
  System = "system",
}

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: ThemeEnum;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: ThemeEnum;
  setTheme: (theme: ThemeEnum) => void;
};

const initialState: ThemeProviderState = {
  theme: ThemeEnum.System,
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({ ...props }: ThemeProviderProps) {
  const { defaultTheme = ThemeEnum.System, storageKey = "vite-ui-theme" } =
    props;

  const [theme, setTheme] = useState<ThemeEnum>(
    () => (localStorage.getItem(storageKey) as ThemeEnum) || defaultTheme,
  );

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(ThemeEnum.Light, ThemeEnum.Dark);

    if (theme === ThemeEnum.System) {
      const isSystemThemeDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;

      const systemTheme = isSystemThemeDark ? ThemeEnum.Dark : ThemeEnum.Light;

      root.classList.add(systemTheme);

      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const handleChange = (theme: ThemeEnum) => {
    localStorage.setItem(storageKey, theme);

    setTheme(theme);
  };

  return (
    <ThemeProviderContext.Provider
      {...props}
      value={{ theme, setTheme: handleChange }}
    >
      {props.children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
