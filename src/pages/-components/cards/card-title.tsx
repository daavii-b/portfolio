import { CardTitle as SCardTitle } from "@/components/ui";
import { cn } from "@/lib";

export const CardTitle = (props: React.ComponentProps<typeof SCardTitle>) => {
  return (
    <SCardTitle
      {...props}
      className={cn(
        "text-primary flex items-center gap-1 p-1 text-sm",
        props.className,
      )}
    >
      {props.children}
    </SCardTitle>
  );
};

export const SubTitle = (props: React.ComponentProps<"h2">) => {
  return (
    <h2
      {...props}
      className={cn(
        "flex items-center gap-2 text-left text-sm font-semibold md:text-base",
        props.className,
      )}
    />
  );
};
