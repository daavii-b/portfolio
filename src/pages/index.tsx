import {
  Container,
  Footer,
  Header,
  Main,
  NavigationBar,
  Section,
} from "@/components";
import { createFileRoute } from "@tanstack/react-router";
import { Greetings, LangToggle, TechStackMarquee } from "./-components";
import { AboutCard } from "./-components/about-card";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Container className="m-auto flex max-w-5xl flex-col gap-2 gap-y-6">
      <Header className="flex flex-row items-center p-4 md:px-6">
        <Greetings />
        <LangToggle />
        <NavigationBar />
      </Header>

      <Main className="space-y-8">
        <Section>
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
