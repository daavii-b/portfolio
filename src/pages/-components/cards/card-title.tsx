import type { ComponentProps } from "react";
import { CardTitle as SCardTitle } from "@/components/ui";
import { cn } from "@/lib";

export const CardTitle = (props: ComponentProps<typeof SCardTitle>) => {
  return (
    <SCardTitle
      {...props}
      className={cn(
        "text-muted-foreground flex items-center gap-1 p-1 text-sm",
        props.className,
      )}
    >
      {props.children}
    </SCardTitle>
  );
};
