import { Button, Card, CardFooter } from "@/components/ui";
import { CardContent, CardTitle } from "./cards";
import { EqualApproximately, Mail } from "lucide-react";
import { cn, ENV } from "@/lib";
import { Container } from "@/components";
import { GithubIcon } from "./github-icon";
import { LinkedinIcon } from "./linkedin-icon";

export const AboutCard = () => {
  return (
    <Card className="bg-accent/10 inset-shadow-ring/60 m-auto w-full max-w-2xl space-y-3 p-6 shadow-lg inset-shadow-2xs backdrop-blur-xl">
      <CardTitle>
        <h2 className="flex items-center gap-2">
          <span>
            <EqualApproximately className="size-4" />
          </span>
          About me
        </h2>
      </CardTitle>

      <CardContent className="p-0 font-medium">
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

      <CardFooter className="w-full p-0">
        <Container className="flex w-full items-center justify-between md:flex-row">
          <SocialLink href={`mailto:${ENV.EMAIL}`}>
            <span>
              <Mail className="size-4" />
            </span>
            Send me an email
          </SocialLink>

          <SocialLink href={ENV.GITHUB_LINK}>
            <span>
              <GithubIcon className="size-4 rounded-xs dark:fill-white" />
            </span>
            daavii-b
          </SocialLink>

          <SocialLink href={ENV.LKDIN_LINK}>
            <span>
              <LinkedinIcon className="border-border/80 inset-shadow-ring/50 size-6 rounded-sm border fill-blue-500 inset-shadow-2xs" />
            </span>
            daaviib
          </SocialLink>
        </Container>
      </CardFooter>
    </Card>
  );
};

const SocialLink = (props: React.ComponentProps<"a">) => {
  return (
    <Button
      asChild
      variant="link"
      className="p-0 underline transition-colors hover:text-sky-400 dark:hover:text-sky-200"
    >
      <a
        target="_blank"
        rel="noopener noreferrer"
        {...props}
        className={cn(props.className)}
      >
        {props.children}
      </a>
    </Button>
  );
};
