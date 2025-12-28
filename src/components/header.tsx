import { cn } from "@/lib";
import type { ComponentProps } from "react";

export const Header = ({ ...props }: ComponentProps<"header">) => {
  return (
    <header
      {...props}
      className={cn(
        "bg-background/60 border-b-accent/20 shadow-accent/10 dark:inset-shadow-accent/20 flex flex-row items-center rounded-sm border-b p-2 py-4 shadow-md inset-shadow-xs backdrop-blur-md md:p-4 md:px-8 lg:px-12",
        props.className,
      )}
    >
      {props.children}
    </header>
  );
};
