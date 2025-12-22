import { cn } from "@/lib";
import type { ComponentProps } from "react";

export const Header = ({ ...props }: ComponentProps<"header">) => {
  return (
    <header {...props} className={cn(props.className)}>
      {props.children}
    </header>
  );
};
