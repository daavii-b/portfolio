import { CardHeader } from "@/components/ui";
import { CardContent, CardTitle, RootCard } from ".";
import { EqualApproximately } from "lucide-react";
import { Trans, useTranslation } from "react-i18next";

export const AboutCard = () => {
  const { t } = useTranslation();

  return (
    <RootCard>
      <CardHeader>
        <CardTitle>
          <h2 className="flex items-center gap-2 text-left text-sm font-semibold md:text-base">
            <span>
              <EqualApproximately className="size-4" />
            </span>
            {t("HOME.TABS.ABOUT.TITLE")}
          </h2>
        </CardTitle>
      </CardHeader>
      <CardContent className="text-muted-foreground font-medium">
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
    </RootCard>
  );
};
