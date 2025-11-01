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
    <Container className="w-full flex flex-col gap-2">
      <Container className="self-center p-2">
        <h2 className=" text-xl md:text-2xl">Tech Stack</h2>
      </Container>

      <Marquee>
        <MarqueeFade side="left" />
        <MarqueeContent speed={30} autoFill={false} className="p-4">
          {STACK_LOGOS.map(({ name, logoLink }, i) => (
            <MarqueeItem
              className="md:h-16 md:w-16 w-10 h-10"
              key={`marquee_item_${i}`}
              title={name}>
              <LogoIcon
                src={logoLink}
                alt={`${name} logo`}
                className="w-full max-w-full overflow-hidden rounded-full ring-2 ring-background border border-white/20 backdrop-blur-md bg-background/30"
              />
            </MarqueeItem>
          ))}
        </MarqueeContent>
        <MarqueeFade side="right" />
      </Marquee>
    </Container>
  );
};
