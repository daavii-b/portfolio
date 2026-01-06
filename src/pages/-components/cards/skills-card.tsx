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
import { STACK_LOGOS } from "@/lib";
import { LogoIcon } from "@/components";
import { v4 } from "uuid";

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
            {STACK_LOGOS.map(({ name, logoLink }) => (
              <MarqueeItem
                className="h-8 w-8 md:h-10 md:w-10"
                key={v4()}
                title={name}
              >
                <LogoIcon
                  src={logoLink}
                  alt={`${name} logo`}
                  className="overflow-hidden"
                />
              </MarqueeItem>
            ))}
          </MarqueeContent>
          <MarqueeFade side="right" />
        </Marquee>
      </CardContent>
    </RootCard>
  );
};
