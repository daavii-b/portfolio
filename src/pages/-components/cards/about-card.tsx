import { CardHeader } from "@/components/ui";
import { CardContent, CardTitle, RootCard, SubTitle } from ".";
import { EqualApproximately } from "lucide-react";
import { Trans, useTranslation } from "react-i18next";

export const AboutCard = () => {
  const { t } = useTranslation();

  return (
    <RootCard>
      <CardHeader>
        <CardTitle>
          <SubTitle>
            <span>
              <EqualApproximately className="size-4" />
            </span>
            {t("HOME.TABS.ABOUT.TITLE")}
          </SubTitle>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="px-4 text-balance">
          <Trans
            i18nKey={"HOME.TABS.ABOUT.CONTENT"}
            components={[
              <strong key="0" />,
              <strong key="1" />,
              <strong key="2" />,
            ]}
          />
        </p>
      </CardContent>
    </RootCard>
  );
};
