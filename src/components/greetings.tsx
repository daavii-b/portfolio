import { cn } from "@/lib";
import { ComponentProps } from "react";
import { TypingText } from "./ui/shadcn-io";

export const Greetings = ({ ...props }: ComponentProps<"h1">) => {
  return (
    <h1 {...props} className={cn("w-full", props.className)}>
      <TypingText
        text={[
          "Hello, I'm Davi.",
          "I'm a FullStack Developer.",
          "I build things for the web.",
        ]}
        typingSpeed={75}
        pauseDuration={3000}
        showCursor={true}
        className="text-foreground md:bg-foreground/1 h-full w-fit max-w-2xl rounded-sm p-2 text-center text-xl font-bold md:border md:border-white/2 md:text-2xl md:backdrop-blur-xl"
        cursorClassName="h-8 !text-muted-foreground"
        variableSpeed={{ min: 50, max: 120 }}
        as={"span"}
      />
    </h1>
  );
};
