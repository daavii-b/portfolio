import { Container, Footer, Header, Main, Section } from "@/components";
import { createFileRoute } from "@tanstack/react-router";
import { Greetings, TechStackMarquee } from "./-components";
import { AboutCard } from "./-components/about-card";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Container className="m-auto flex max-w-5xl flex-col gap-2 gap-y-6">
      <Header className="p-4 md:px-6">
        <Greetings />
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
