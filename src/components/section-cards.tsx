import { cn, ENV_VARIABLES } from "@/lib";
import {
  CornerRightDown,
  LucideActivity,
  LucideEqualApproximately,
  LucideGithub,
  LucideLinkedin,
  LucideMessageCircleMore,
} from "lucide-react";
import type { ComponentProps } from "react";
import { Container } from "./container";
import { Button, Card, CardContent, CardHeader, CardTitle } from "./ui";

export const AboutCard = ({ ...props }: ComponentProps<typeof Card>) => {
  return (
    <SectionCard {...props}>
      <CardHeader>
        <SectionTitle>
          <span>
            <LucideEqualApproximately className="size-4" />
          </span>
          <span>About me</span>
        </SectionTitle>
      </CardHeader>
      <SectionContent>
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
      </SectionContent>
    </SectionCard>
  );
};

export const SocialCard = ({ ...props }: ComponentProps<typeof Card>) => {
  return (
    <SectionCard {...props}>
      <CardHeader>
        <SectionTitle>
          <span>
            <LucideActivity className="size-4" />
          </span>
          <span>Social</span>
        </SectionTitle>
      </CardHeader>
      <SectionContent className="flex flex-row">
        <Container className="flex w-full flex-col gap-1 lg:flex-row">
          <LinkedInLink />
          <GithubLink />
        </Container>
        <Container className="flex w-fit flex-col gap-1">
          <WhatsAppLink />
          <Container className="w-32">
            <img
              src={ENV_VARIABLES.QR_LINK}
              aria-label="QRCode from WhatsApp"
              className="max-w-full"
            />
          </Container>
        </Container>
      </SectionContent>
    </SectionCard>
  );
};

const WhatsAppLink = () => {
  return (
    <SocialLink
      className="p-0 hover:text-emerald-600 dark:hover:text-emerald-100"
      href={ENV_VARIABLES.WA_LINK}
    >
      <span>
        <LucideMessageCircleMore className="size-4 text-emerald-800 dark:text-emerald-300" />
      </span>
      <span className="text-xs">Message me</span>
      <span>
        <CornerRightDown className="size-2" />
      </span>
    </SocialLink>
  );
};

const LinkedInLink = () => {
  return (
    <SocialLink href={ENV_VARIABLES.LKDIN_LINK} aria-label="link for linkedin">
      <span>
        <LucideLinkedin className="size-4 text-blue-400" />
      </span>
      <span>daaviib</span>
    </SocialLink>
  );
};

const GithubLink = () => {
  return (
    <SocialLink href={ENV_VARIABLES.GITHUB_LINK} aria-label="link for github">
      <span>
        <LucideGithub className="size-4 text-slate-400" />
      </span>
      <span>daavii-b</span>
    </SocialLink>
  );
};

const SocialLink = ({ ...props }: ComponentProps<"a">) => {
  return (
    <a
      {...props}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(props.className)}
    >
      <Button
        variant={"link"}
        value={props.href}
        className={cn(
          "underline hover:text-sky-700 dark:hover:text-sky-300",
          props.className,
        )}
      >
        {props.children}
      </Button>
    </a>
  );
};

const SectionCard = ({ ...props }: ComponentProps<typeof Card>) => {
  return (
    <Card
      {...props}
      className={cn(
        "border-border/40 bg-accent/20 hover:border-border dark:shadow-accent w-full gap-1 rounded-sm shadow-sm backdrop-blur-xs transition-all hover:shadow-lg md:p-4",
        props.className,
      )}
    >
      {props.children}
    </Card>
  );
};

const SectionTitle = ({ ...props }: ComponentProps<typeof CardTitle>) => {
  return (
    <CardTitle
      {...props}
      className={cn(
        "text-muted-foreground flex items-center gap-1 p-1 text-sm",
        props.className,
      )}
    >
      {props.children}
    </CardTitle>
  );
};

const SectionContent = ({ ...props }: ComponentProps<typeof CardContent>) => {
  return (
    <CardContent
      className={cn(
        "text-foreground text-xs leading-5 tracking-wider md:text-sm",
        props.className,
      )}
    >
      {props.children}
    </CardContent>
  );
};
