import {
  Container,
  Footer,
  Header,
  Main,
  NavigationBar,
  Section,
  SectionIds,
} from "@/components";
import { createFileRoute } from "@tanstack/react-router";
import { HomeCard, LangToggle, TechStackMarquee } from "./-components";
import { AboutCard } from "./-components/about-card";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Container className="w-ful relative m-auto flex h-16 min-h-screen w-full max-w-5xl flex-col gap-2 gap-y-6 px-4 py-8">
      <Header className="fixed right-0 left-0 z-50 mx-auto h-16 w-full max-w-5xl justify-between backdrop-blur-md">
        <NavigationBar />
        <LangToggle />
      </Header>

      <div className="h-16 w-full shrink-0 opacity-0" aria-hidden="true" />

      <Main className="mt-8 space-y-8">
        <Section id={SectionIds.Home}>
          <HomeCard />
        </Section>

        <Section id={SectionIds.About}>
          <AboutCard />
        </Section>

        <Section>
          <TechStackMarquee />
        </Section>
      </Main>

      <Footer />
    </Container>
  );
}
