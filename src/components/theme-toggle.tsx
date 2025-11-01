import { LucideMoon, LucideSun, LucideSunMoon } from "lucide-react";
import { Activity, ComponentProps } from "react";
import { useTheme } from "./theme-provider";
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon-lg">
          <Activity mode={theme == "light" ? `visible` : "hidden"}>
            <LucideSun className="size-4 transition-all md:size-5" />
          </Activity>

          <Activity mode={theme == "dark" ? `visible` : "hidden"}>
            <LucideMoon className="size-4 transition-all md:size-5" />
          </Activity>

          <Activity mode={theme == "system" ? `visible` : "hidden"}>
            <LucideSunMoon className="size-4 transition-all md:size-5" />
          </Activity>

          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="border-border/40 bg-accent/30 flex flex-col justify-center gap-2 border p-1 py-2 font-bold backdrop-blur-xs"
      >
        <MenuItem onClick={() => setTheme("light")}>
          <LucideSun className="size-3 md:size-4" />
          <span>Light</span>
        </MenuItem>
        <MenuItem onClick={() => setTheme("dark")}>
          <LucideMoon className="size-3 md:size-4" />
          <span>Dark</span>
        </MenuItem>
        <MenuItem onClick={() => setTheme("system")}>
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
