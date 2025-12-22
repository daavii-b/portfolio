import {
  type LucideIcon,
  LucideMoon,
  LucideSun,
  LucideSunMoon,
} from "lucide-react";
import type { ComponentProps } from "react";
import { ThemeEnum, useTheme } from "../contexts";
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui";

const ThemeIcons: Record<ThemeEnum, LucideIcon> = {
  light: LucideSun,
  dark: LucideMoon,
  system: LucideSunMoon,
};

export const ThemeToggle = (
  props: React.ComponentProps<typeof DropdownMenuTrigger>,
) => {
  const { theme, setTheme } = useTheme();

  const Icon = ThemeIcons[theme];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger {...props} asChild>
        <Button variant="outline" size="icon-lg">
          <Icon className="size-4 transition-all md:size-5" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="border-border/40 bg-accent/30 flex flex-col justify-center gap-2 border p-1 py-2 font-bold backdrop-blur-xs"
      >
        <MenuItem onClick={() => setTheme(ThemeEnum.Light)}>
          <LucideSun className="size-3 md:size-4" />
          <span>Light</span>
        </MenuItem>
        <MenuItem onClick={() => setTheme(ThemeEnum.Dark)}>
          <LucideMoon className="size-3 md:size-4" />
          <span>Dark</span>
        </MenuItem>
        <MenuItem onClick={() => setTheme(ThemeEnum.System)}>
          <LucideSunMoon className="size-3 md:size-4" />
          <span>System</span>
        </MenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const MenuItem = ({ ...props }: ComponentProps<typeof DropdownMenuItem>) => {
  return (
    <DropdownMenuItem
      {...props}
      className="text-muted-foreground text-xs md:text-sm"
    >
      {props.children}
    </DropdownMenuItem>
  );
};
