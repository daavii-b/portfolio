import { cn } from "@/lib";
import type { ComponentProps } from "react";

export const LogoIcon = ({ ...props }: ComponentProps<"img">) => {
  return (
    <img
      aria-label="Logo"
      alt="Logo"
      {...props}
      className={cn(props.className)}
    />
  );
};

export const LogoContainer = ({ ...props }: ComponentProps<"div">) => {
  return <div {...props} className={cn(props.className)} />;
};
