import {
  Badge,
  CardHeader,
  Item,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemHeader,
  ItemTitle,
} from "@/components/ui";
import { RootCard, CardTitle, CardContent, SubTitle } from ".";
import { ArrowUpRight, BriefcaseBusiness } from "lucide-react";
import { v4 } from "uuid";
import { Container } from "@/components";
import { useTranslation } from "react-i18next";
import type { TFunctionReturn } from "i18next";

type Experiences = TFunctionReturn<
  "translation",
  "HOME.TABS.EXPERIENCE.CONTENT",
  { returnObjects: true }
>;

export const ExperienceCard = () => {
  const { t } = useTranslation("translation");

  const experiences =
    t("HOME.TABS.EXPERIENCE.CONTENT", {
      returnObjects: true,
    }) ?? [];

  return (
    <RootCard>
      <CardHeader>
        <CardTitle>
          <SubTitle>
            <span>
              <BriefcaseBusiness className="size-4" />
            </span>
            {t("HOME.TABS.EXPERIENCE.TITLE")}
          </SubTitle>
        </CardTitle>
      </CardHeader>

      <CardContent>
        <ExperienceList exps={experiences} />
      </CardContent>
    </RootCard>
  );
};

const ExperienceList = ({ exps }: { exps: Experiences }) => {
  return (
    <ul>
      {exps.map((exp) => (
        <li key={v4()}>
          <Item variant="default" className="gap-8 py-0">
            <ItemHeader>
              <ItemTitle className="flex w-full flex-col items-start">
                <h3 className="text-foreground flex flex-row gap-2 text-sm">
                  {exp.title} <span>-</span> <span>{exp.company}</span>
                  <span>
                    <ArrowUpRight className="size-4 text-blue-400" />
                  </span>
                </h3>

                <Container>
                  <p className="text-xs font-semibold">{exp.period}</p>
                </Container>
              </ItemTitle>
            </ItemHeader>

            <ItemContent>
              <ul className="flex list-outside list-disc flex-col gap-2 pl-5">
                {exp.description.map((desc) => (
                  <li key={v4()}>
                    <ItemDescription className="line-clamp-none w-full font-medium text-inherit">
                      {desc}
                    </ItemDescription>
                  </li>
                ))}
              </ul>
            </ItemContent>

            <ItemFooter className="flex-wrap items-center justify-start">
              {exp.skills.map((skill) => (
                <Badge
                  key={v4()}
                  variant="outline"
                  className="text-accent-foreground dark:shadow-muted/30 inset-shadow basis-auto p-1 px-4 text-xs shadow-md"
                >
                  {skill}
                </Badge>
              ))}
            </ItemFooter>
          </Item>
        </li>
      ))}
    </ul>
  );
};
