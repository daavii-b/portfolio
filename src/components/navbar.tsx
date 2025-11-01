import { cn } from "@/lib";
import { ThemeToggle } from "./theme-toggle";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "./ui";

export const NavigationBar = ({ ...props }) => {
  return (
    <NavigationMenu {...props} className={cn(props.className)}>
      <NavigationMenuList className="w-full">
        <NavigationMenuItem asChild className="w-fit">
          <ThemeToggle />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
