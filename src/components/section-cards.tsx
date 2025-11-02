import QrCode from "@/assets/qrcode-svg.svg";
import { cn } from "@/lib";
import {
  CornerRightDown,
  LucideActivity,
  LucideEqualApproximately,
  LucideGithub,
  LucideLinkedin,
  LucideMessageCircleMore,
} from "lucide-react";
import { ComponentProps } from "react";
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
        <strong>
          Fullstack Software Engineer with over 2 years of experience
        </strong>{" "}
        building scalable applications using TypeScript, Nest.JS, and React.{" "}
        <strong>
          Deep experience in backend system architecture (Clean Architecture,
          SOLID, DDD), developing RESTful APIs
        </strong>
        , and processing asynchronous tasks (BullMQ).{" "}
        <strong>Skilled in frontend development (React, Next.js)</strong> and
        managing the full{" "}
        <strong>
          DevOps lifecycle, including CI/CD (GitHub Actions) and production
          deployments to AWS (ECS, S3)
        </strong>
        .
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
        <Container className="w-fit">
          <WhatsAppLink />
          <Container className="w-32">
            <img src={QrCode} className="max-w-full" />
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
      href="https://wa.link/10uvyb"
    >
      <span>
        <LucideMessageCircleMore className="size-3 text-emerald-800 dark:text-emerald-300" />
      </span>
      <span className="text-xs">Fale comigo</span>
      <span>
        <CornerRightDown className="size-2" />
      </span>
    </SocialLink>
  );
};

const LinkedInLink = () => {
  return (
    <SocialLink
      href="https://www.linkedin.com/in/daaviib"
      aria-label="link for linkedin"
    >
      <span>
        <LucideLinkedin className="size-4 text-blue-400" />
      </span>
      <span>daaviib</span>
    </SocialLink>
  );
};

const GithubLink = () => {
  return (
    <SocialLink href="https://github.com/daavii-b" aria-label="link for github">
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
        value={"https://www.linkedin.com/in/daaviib/"}
        className={cn(props.className)}
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
