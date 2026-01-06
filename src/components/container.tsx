import { cn } from "@/lib";
import type { ComponentProps } from "react";

export const Container = ({ ...props }: ComponentProps<"div">) => {
  return (
    <div {...props} className={cn(props.className)}>
      {props.children}
    </div>
  );
};

export const Section = ({ ...props }: ComponentProps<"section">) => {
  return (
    <section {...props} className={cn(props.className, "h-fit")}>
      {props.children}
    </section>
  );
};

export const Main = ({ ...props }: ComponentProps<"main">) => {
  return (
    <main {...props} className={cn("p-4", props.className)}>
      {props.children}
    </main>
  );
};
