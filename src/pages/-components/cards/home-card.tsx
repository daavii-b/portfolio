import { Container } from "@/components";
import { CardDescription, CardHeader } from "@/components/ui";
import { Mail, Tag } from "lucide-react";
import { CardContent, CardTitle, RootCard } from ".";
import { ENV } from "@/lib";
import { LinkedinIcon } from "./../linkedin-icon";
import { GithubIcon } from "./../github-icon";
import { useTranslation } from "react-i18next";

const NETWORK_LINKS = [
  {
    icon: Mail,
    label: "Email",
    href: `mailto:${ENV.EMAIL}`,
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    href: ENV.LKDIN_LINK,
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    href: ENV.GITHUB_LINK,
  },
];

export const HomeCard = () => {
  const { t } = useTranslation();

  return (
    <RootCard className="space-y-6">
      <CardHeader className="flex w-full flex-col items-center justify-center gap-4">
        <CardTitle className="text-primary w-full justify-center text-5xl lg:text-6xl">
          <h1>Davi Brito</h1>
        </CardTitle>

        <CardDescription className="text-primary dark:shadow-accent/20 flex flex-row items-center gap-2 rounded-3xl border p-2 px-6 text-xs font-semibold shadow-md dark:brightness-105">
          <Tag className="size-4" />
          <p>{t("HOME.WORK_TAG")}</p>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-8">
        <Container>
          <NetworkList />
        </Container>
      </CardContent>
    </RootCard>
  );
};

const NetworkList = () => {
  return (
    <ul className="flex flex-row gap-4 font-semibold md:gap-16">
      {NETWORK_LINKS.map((social) => (
        <li key={social.label}>
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="dark:shadow-accent/20 border-border dark:border-accent/40 darK:text-white flex flex-row items-center gap-2 rounded-3xl border px-8 py-3 text-xs shadow-md transition-colors hover:fill-blue-500 hover:text-blue-500 md:py-2 dark:fill-white"
          >
            <social.icon className="size-4" />
            <span className="hidden md:inline">{social.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};
