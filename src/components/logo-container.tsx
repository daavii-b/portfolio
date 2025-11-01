import { cn } from "@/lib";
import { ComponentProps } from "react";

export const LogoIcon = ({ ...props }: ComponentProps<"img">) => {
  return <img {...props} className={cn(props.className)} />;
};

export const LogoContainer = ({ ...props }: ComponentProps<"div">) => {
  return <div></div>;
};
