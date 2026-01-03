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
import { AboutCard, HomeCard, LangToggle } from "./-components";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Container className="relative m-auto max-w-5xl py-4">
      <Header className="fixed right-0 left-0 z-50 m-auto max-w-5xl">
        <NavigationBar />
        <LangToggle />
      </Header>

      <div className="h-16 w-full shrink-0 opacity-0" aria-hidden="true" />

      <Main className="max-w-full space-y-4">
        <Section id={SectionIds.Home}>
          <HomeCard />
        </Section>

        <Section>
          <AboutCard />
        </Section>
      </Main>

      <Footer />
    </Container>
  );
}
