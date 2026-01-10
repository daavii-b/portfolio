import { CardHeader } from "@/components/ui";
import { RootCard } from "./card";
import { CardTitle, SubTitle } from "./card-title";
import { Code } from "lucide-react";
import { CardContent } from "./card-content";
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/ui/shadcn-io";
import { v4 } from "uuid";
import {
  SiNestjs,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiVitest,
  SiVite,
  SiJest,
  SiDocker,
  SiTailwindcss,
  SiAmazonwebservices,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiHtml5,
  SiCss3,
  SiFastify,
  SiExpress,
  SiJavascript,
  SiPython,
  SiPostgresql,
  SiPrisma,
  SiMongodb,
  SiRedis,
} from "react-icons/si";
import type { IconType } from "react-icons/lib";

export const SkillsCard = () => {
  return (
    <RootCard>
      <CardHeader>
        <CardTitle>
          <SubTitle>
            <span>
              <Code className="size-4" />
            </span>
            Skills
          </SubTitle>
        </CardTitle>
      </CardHeader>

      <CardContent>
        <Marquee>
          <MarqueeFade side="left" />
          <MarqueeContent speed={30} autoFill={false} className="p-4">
            {getTechStack().map(({ name, icon: Icon }) => (
              <MarqueeItem
                className="h-8 w-8 md:h-10 md:w-10"
                key={v4()}
                title={name}
              >
                <span>{<Icon className="size-8" />}</span>
              </MarqueeItem>
            ))}
          </MarqueeContent>
          <MarqueeFade side="right" />
        </Marquee>
      </CardContent>
    </RootCard>
  );
};

function getTechStack(): { name: string; icon: IconType }[] {
  return [
    {
      name: "React.js",
      icon: SiReact,
    },
    {
      name: "Tailwind",
      icon: SiTailwindcss,
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
    },
    {
      name: "Node.js",
      icon: SiNodedotjs,
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
    },
    {
      name: "Javascript",
      icon: SiJavascript,
    },
    {
      name: "Nest.js",
      icon: SiNestjs,
    },
    {
      name: "Fastify",
      icon: SiFastify,
    },
    {
      name: "Express",
      icon: SiExpress,
    },
    {
      name: "Python",
      icon: SiPython,
    },
    {
      name: "Vitest",
      icon: SiVitest,
    },
    {
      name: "Vite",
      icon: SiVite,
    },
    {
      name: "jest",
      icon: SiJest,
    },
    {
      name: "Docker",
      icon: SiDocker,
    },
    {
      name: "AWS",
      icon: SiAmazonwebservices,
    },
    {
      name: "Git",
      icon: SiGit,
    },
    {
      name: "Github",
      icon: SiGithub,
    },
    {
      name: "Github Actions",
      icon: SiGithubactions,
    },
    {
      name: "HTML5",
      icon: SiHtml5,
    },
    {
      name: "CSS3",
      icon: SiCss3,
    },
    {
      name: "PrismaORM",
      icon: SiPrisma,
    },
    {
      name: "PostgreSQL",
      icon: SiPostgresql,
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
    },
    {
      name: "Redis",
      icon: SiRedis,
    },
  ];
}
