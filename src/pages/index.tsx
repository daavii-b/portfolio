import {
  Container,
  Greetings,
  Header,
  MainContainer,
  NavigationBar,
  SectionContainer,
} from "@/components";
import { TechStackMarquee } from "@/components/tech-stack-marquee";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Container className="m-auto flex max-w-5xl flex-col gap-2">
      <Header className="flex w-full items-center justify-between p-2 md:justify-start md:p-4 md:px-6">
        <Greetings />
        <NavigationBar />
      </Header>
      <MainContainer>
        <SectionContainer></SectionContainer>
        <SectionContainer>
          <TechStackMarquee />
        </SectionContainer>
      </MainContainer>
    </Container>
  );
}
