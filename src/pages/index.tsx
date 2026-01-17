import {
  Container,
  Footer,
  Header,
  Main,
  NavigationBar,
  Section,
} from "@/components";
import { SectionIds } from "@/enums";
import { createFileRoute } from "@tanstack/react-router";
import {
  AboutCard,
  ExperienceCard,
  HomeCard,
  SkillsCard,
} from "./-components/cards";
import { LangToggle, ThemeToggle } from "./-components/toggles";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Container className="relative m-auto max-w-5xl md:py-4">
      <Header className="fixed right-0 left-0 z-50 m-auto max-w-5xl">
        <NavigationBar />
        <Container className="flex items-center justify-between gap-2">
          <LangToggle />
          <ThemeToggle />
        </Container>
      </Header>

      <div className="h-16 w-full shrink-0 opacity-0" aria-hidden="true" />

      <Main className="max-w-full space-y-2">
        <Section id={SectionIds.Home}>
          <HomeCard />
        </Section>

        <Section id={SectionIds.About}>
          <AboutCard />
        </Section>

        <Section id={SectionIds.Experience}>
          <ExperienceCard />
        </Section>

        <Section id={SectionIds.Skills}>
          <SkillsCard />
        </Section>
      </Main>

      <Footer className="my-12" />
    </Container>
  );
}
