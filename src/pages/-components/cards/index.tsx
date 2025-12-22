import { Card, CardHeader } from "@/components/ui";
import { cn } from "@/lib";
import { LucideEqualApproximately } from "lucide-react";
import type { ComponentProps } from "react";
import { CardTitle } from "./card-title";
import { CardContent } from "./card-content";

const AboutCard = ({ ...props }: ComponentProps<typeof Card>) => {
  return (
    <Card
      {...props}
      className={cn(
        "border-border/40 bg-accent/20 hover:border-border dark:shadow-accent w-full gap-1 rounded-sm shadow-sm backdrop-blur-xs transition-all hover:shadow-lg md:p-4",
        props.className,
      )}
    >
      <CardHeader>
        <CardTitle>
          <span>
            <LucideEqualApproximately className="size-4" />
          </span>
          <span>About me</span>
        </CardTitle>
      </CardHeader>

      <CardContent>
        <p>
          I am a <strong>Fullstack Software Engineer</strong> with a proven
          track record of over two years in building scalable applications using
          <strong>TypeScript, Nest.JS, Next.Js and React</strong>.
        </p>
        <br />
        <p>
          I have extensive experience in{" "}
          <strong>backend system architecture</strong>, including Clean
          Architecture, SOLID, and DDD. In addition, I am skilled in developing
          RESTful APIs in accordance with best practices, including SOLID, Clean
          Code and Design Patterns.
        </p>
        <br />
        <p>
          In addition, I have experience of{" "}
          <strong>front-end development</strong> using React, Next.js and
          Tailwind. I have expertise in building robust and intuitive interfaces
          for multiple devices, with a focus on optimizing the user experience.
        </p>
      </CardContent>
    </Card>
  );
};
