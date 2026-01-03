import { Card } from "@/components/ui";
import { cn } from "@/lib";

export const RootCard = (props: React.ComponentProps<typeof Card>) => {
  return (
    <Card
      {...props}
      className={cn(
        "h-fit gap-2 border-none bg-transparent shadow-none",
        props.className,
      )}
    />
  );
};
