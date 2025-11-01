import { cn } from "@/lib";
import { ComponentProps } from "react";

export const Container = ({ ...props }: ComponentProps<"div">) => {
  return (
    <div {...props} className={cn(props.className)}>
      {props.children}
    </div>
  );
};

export const SectionContainer = ({ ...props }: ComponentProps<"section">) => {
  return (
    <section {...props} className={cn(props.className)}>
      {props.children}
    </section>
  );
};
