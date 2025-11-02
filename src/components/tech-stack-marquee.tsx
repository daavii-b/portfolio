import { STACK_LOGOS } from "@/lib";
import { Container } from "./container";
import { LogoIcon } from "./logo-container";
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "./ui/shadcn-io";

export const TechStackMarquee = () => {
  return (
    <Container className="flex w-full flex-col gap-2">
      <Container className="self-center p-2">
        <h2 className="text-xl md:text-2xl">Tech Stack</h2>
      </Container>

      <Marquee>
        <MarqueeFade side="left" />
        <MarqueeContent speed={30} autoFill={false} className="p-4">
          {STACK_LOGOS.map(({ name, logoLink }, i) => (
            <MarqueeItem
              className="h-10 w-10 md:h-16 md:w-16"
              key={`marquee_item_${i}`}
              title={name}
            >
              <LogoIcon
                src={logoLink}
                alt={`${name} logo`}
                className="ring-background bg-background/30 w-full max-w-full overflow-hidden ring-2 backdrop-blur-md"
              />
            </MarqueeItem>
          ))}
        </MarqueeContent>
        <MarqueeFade side="right" />
      </Marquee>
    </Container>
  );
};
