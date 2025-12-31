import { Button, Card } from "@/components/ui";
import { CardContent, CardTitle } from "./cards";
import { EqualApproximately } from "lucide-react";
import { cn } from "@/lib";
import { Container } from "@/components";
import { Trans, useTranslation } from "react-i18next";

export const AboutCard = () => {
  const { t } = useTranslation();

  return (
    <Card className="bg-accent/10 dark:inset-shadow-ring/60 dark:shadow-accent m-auto min-h-96 w-full space-y-1 p-4 py-6 shadow-lg inset-shadow-2xs backdrop-blur-xl md:p-6 md:py-8 md:text-lg dark:shadow-md/60">
      <CardTitle className="m-0 flex flex-col items-center justify-between gap-4 p-0 md:flex-row">
        <Container>
          <h3 className="flex items-center gap-2 text-xs md:text-sm">
            <span>
              <EqualApproximately className="size-4" />
            </span>
            {t("HOME.TABS.ABOUT.TITLE")}
          </h3>
        </Container>
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
