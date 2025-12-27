import { Button, Card, Item, ItemGroup } from "@/components/ui";
import { CardContent, CardTitle } from "./cards";
import { EqualApproximately, Mail } from "lucide-react";
import { cn, ENV } from "@/lib";
import { GithubIcon } from "./github-icon";
import { LinkedinIcon } from "./linkedin-icon";
import { v4 } from "uuid";
import { Container } from "@/components";
import { Trans, useTranslation } from "react-i18next";

const SOCIAL_LINKS = [
  { id: v4(), Icon: GithubIcon, link: ENV.GITHUB_LINK, title: "Github" },
  { id: v4(), Icon: LinkedinIcon, link: ENV.LKDIN_LINK, title: "LinkedIn" },
  { id: v4(), Icon: Mail, link: `mailto:${ENV.EMAIL}`, title: "Email" },
];

export const AboutCard = () => {
  const { t } = useTranslation();

  return (
    <Card className="bg-accent/10 dark:inset-shadow-ring/60 dark:shadow-accent m-auto w-full max-w-4xl space-y-1 p-4 py-6 shadow-lg inset-shadow-2xs backdrop-blur-xl md:p-6 md:py-8 md:text-lg dark:shadow-md/60">
      <CardTitle className="m-0 flex flex-col items-center justify-between gap-4 p-0 md:flex-row">
        <Container>
          <h3 className="flex items-center gap-2 text-xs md:text-sm">
            <span>
              <EqualApproximately className="size-4" />
            </span>
            {t("HOME.TABS.ABOUT.TITLE")}
          </h3>
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

      <CardContent className="text-accent-foreground/80 p-0 font-medium">
        <Trans
          i18nKey={"HOME.TABS.ABOUT.CONTENT"}
          components={[
            <strong key="0" />,
            <strong key="1" />,
            <br key="2" />,
            <br key="3" />,
            <strong key="4" />,
            <br key="5" />,
            <br key="6" />,
            <strong key="7" />,
          ]}
        />
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
