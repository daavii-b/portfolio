import {
  AboutCard,
  Container,
  Footer,
  Greetings,
  Header,
  MainContainer,
  NavigationBar,
  SectionContainer,
  SocialCard,
} from "@/components";
import { TechStackMarquee } from "@/components/tech-stack-marquee";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Container className="m-auto flex max-w-5xl flex-col gap-2 gap-y-6">
      <Header className="flex w-full items-center justify-between gap-2 p-2 md:justify-start md:p-4 md:px-6">
        <Greetings />
        <NavigationBar />
      </Header>
      <MainContainer className="w-full space-y-6">
        <SectionContainer className="grid w-full gap-4 md:grid-cols-2">
          <AboutCard />
          <SocialCard />
        </SectionContainer>
        <SectionContainer>
          <TechStackMarquee />
        </SectionContainer>
      </MainContainer>
      <Footer />
    </Container>
  );
}
