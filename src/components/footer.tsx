import { cn } from "@/lib";
import { ComponentProps } from "react";

export const Footer = ({ ...props }: ComponentProps<"footer">) => {
  return (
    <footer
      {...props}
      className={cn(
        "text-muted-foreground w-full rounded-sm p-2 py-4 text-center text-xs",
        props.className,
      )}
    >
      <p>&#169; 2025 | By Davi Brito</p>
    </footer>
  );
};
