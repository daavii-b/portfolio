import { cn } from "@/lib";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui";
import {
  BriefcaseBusiness,
  Code,
  EqualApproximately,
  Home,
  type LucideIcon,
} from "lucide-react";
import { v4 } from "uuid";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import type { TFunction } from "i18next";
import { SectionIds } from "@/enums";

type Section = {
  id: SectionIds;
  title: string;
  icon: LucideIcon;
};

export const NavigationBar = ({ ...props }) => {
  const { t } = useTranslation();

  const SECTIONS: Section[] = useMemo(() => getTranslations(t), [t]);

  return (
    <NavigationMenu {...props} className={cn("m-auto", props.className)}>
      <NavigationMenuList className="flex w-full flex-none flex-row gap-8 md:gap-4">
        {SECTIONS.map((section) => (
          <NavigationMenuItem key={v4()}>
            <NavigationMenuLink
              className="flex w-full flex-row items-center gap-2 rounded-sm p-2 transition-colors hover:bg-blue-500/5 hover:text-blue-500 focus:bg-blue-500/10 focus:text-blue-600 md:px-4"
              href={`#${section.id}`}
              title={section.title}
            >
              <section.icon className="size-5 text-inherit md:size-5" />
              <span className="hidden md:inline-block">{section.title}</span>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

function getTranslations(t: TFunction<"translation">): Section[] {
  return [
    { title: t("HEADER.NAVBAR.HOME"), id: SectionIds.Home, icon: Home },
    {
      title: t("HEADER.NAVBAR.ABOUT"),
      id: SectionIds.About,
      icon: EqualApproximately,
    },
    {
      title: t("HEADER.NAVBAR.EXPERIENCE"),
      id: SectionIds.Experience,
      icon: BriefcaseBusiness,
    },
    {
      title: t("HEADER.NAVBAR.SKILLS"),
      id: SectionIds.Skills,
      icon: Code,
    },
  ];
}
