import hero from "@/content/sections/hero.json";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { AMAZON_PRODUCT_URL } from "@/lib/constants";
import { H1, Muted } from "../prose";

const QbloxWordmark = ({ className }: { className?: string }) => (
  <span className={cn("text-sky-800", className)}>
    <span className="text-red-700">Q</span>BL
    <span className="text-red-700">O</span>X
  </span>
);

const HeroButtons = ({ link }: { link: string }) => (
  <div className="flex w-full justify-center gap-3 sm:flex-row lg:justify-start">
    <Button asChild>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Get Qblox
      </a>
    </Button>
    <Button variant="outline" asChild>
      <a href="#guide">Learn more</a>
    </Button>
  </div>
);

export default function Intro() {
  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto grid items-center gap-10 lg:grid-cols-2">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left px-4 gap-6">
          <h1 className="text-4xl font-semibold sm:text-6xl text-foreground/85 leading-tighter font-saira">
            <QbloxWordmark className="text-7xl sm:text-8xl" />
          </h1>
          <h2 className="tracking-tighter text-xl sm:text-2xl font-saira text-sky-800 leading-tight font-medium">
            {hero.title}
          </h2>
          <div className="text-muted-foreground text-lg max-w-xl space-y-3">
            {hero.content.map((c, i) => (
              // <p key={i}>{c}</p>
              <Muted key={i}>{c}</Muted>
            ))}
          </div>
          <HeroButtons link={AMAZON_PRODUCT_URL} />
        </div>

        <div className="relative w-full aspect-square max-w-lg mx-auto">
          <Image
            src="/product/large-pac-set.jpg"
            fill
            className="object-cover object-center rounded-4xl"
            alt="Qblox construction set package"
          />
        </div>
      </div>
    </section>
  );
}
