import { Button, Card, Item, ItemGroup } from "@/components/ui";
import { CardContent, CardTitle } from "./cards";
import { EqualApproximately, Mail } from "lucide-react";
import { cn, ENV } from "@/lib";
import { GithubIcon } from "./github-icon";
import { LinkedinIcon } from "./linkedin-icon";
import { v4 } from "uuid";
import { Container } from "@/components";

const SOCIAL_LINKS = [
  { id: v4(), Icon: GithubIcon, link: ENV.GITHUB_LINK, title: "Github" },
  { id: v4(), Icon: LinkedinIcon, link: ENV.LKDIN_LINK, title: "LinkedIn" },
  { id: v4(), Icon: Mail, link: `mailto:${ENV.EMAIL}`, title: "Email" },
];

export const AboutCard = () => {
  return (
    <Card className="bg-accent/10 dark:inset-shadow-ring/60 dark:shadow-accent m-auto w-full max-w-2xl space-y-1 p-4 py-6 shadow-lg inset-shadow-2xs backdrop-blur-xl md:p-6 md:py-8 md:text-lg dark:shadow-md/60">
      <CardTitle className="m-0 flex flex-col items-center justify-between gap-4 p-0 md:flex-row">
        <Container>
          <h2 className="flex items-center gap-2 text-xs">
            <span>
              <EqualApproximately className="size-4" />
            </span>
            About me
          </h2>
        </Container>

        <ItemGroup className="flex flex-row gap-2">
          {SOCIAL_LINKS.map(({ Icon, ...social }) => (
            <Item
              key={social.id}
              variant="outline"
              asChild
              className="dark:shadow-accent/35 dark:inset-shadow-ring/70 inset-shadow-ring/30 p-0 shadow-md inset-shadow-xs"
              title={social.title}
            >
              <SocialLink href={social.link}>
                <Icon />
              </SocialLink>
            </Item>
          ))}
        </ItemGroup>
      </CardTitle>

      <CardContent className="p-0 font-medium">
        <p>
          I am a <strong>Fullstack Software Engineer</strong> with a proven
          track record of over two years in building scalable applications using{" "}
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

const SocialLink = (props: React.ComponentProps<"a">) => {
  return (
    <Button
      asChild
      variant="link"
      className="flex items-center justify-center p-0 underline transition-colors hover:text-sky-400 dark:hover:text-sky-300"
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

/*

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
*/
