import { CardContent as SCardContent } from "@/components/ui";
import { cn } from "@/lib";
import type { ComponentProps } from "react";

export const CardContent = ({
  ...props
}: ComponentProps<typeof SCardContent>) => {
  return (
    <SCardContent
      className={cn(
        "text-foreground text-xs leading-5 tracking-wider md:text-sm",
        props.className,
      )}
    >
      {props.children}
    </SCardContent>
  );
};
