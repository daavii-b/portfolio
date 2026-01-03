import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui";
import { cn } from "@/lib";

export const ToggleTrigger = (
  props: React.ComponentProps<typeof DropdownMenuTrigger>,
) => {
  return (
    <DropdownMenuTrigger asChild>
      <Button
        variant="ghost"
        size="icon"
        {...props}
        className={cn(
          "dark:inset-shadow-accent shadow-accent/40 border-border/20 border shadow-md inset-shadow-2xs hover:text-blue-600 focus-visible:ring-0",
          props.className,
        )}
      />
    </DropdownMenuTrigger>
  );
};

export const ToggleContent = (
  props: React.ComponentProps<typeof DropdownMenuContent>,
) => {
  return (
    <DropdownMenuContent
      align="end"
      {...props}
      className={cn(
        "border-border/40 bg-accent/30 backdrop-blur-x2 space-y-2 p-1 py-2",
        props.className,
      )}
    />
  );
};

export const ToggleItem = (
  props: React.ComponentProps<typeof DropdownMenuItem>,
) => {
  return (
    <DropdownMenuItem
      {...props}
      className={cn(
        "border-border/10 bg-background/40 rounded-sm border p-2 font-semibold",
        "inset-shadow-2xs data-[active=true]:bg-blue-500/5 data-[active=true]:text-blue-400",
        "flex flex-row gap-2 text-xs",
        props.className,
      )}
    />
  );
};

export const Toggle = (props: React.ComponentProps<typeof DropdownMenu>) => {
  return <DropdownMenu {...props} />;
};
