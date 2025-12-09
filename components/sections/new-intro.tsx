import hero from "@/content/sections/hero.json";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

const QbloxWordmark = ({ className }: { className?: string }) => (
  <span className={cn("text-sky-800", className)}>
    <span className="text-red-700">Q</span>BL
    <span className="text-red-700">O</span>X
  </span>
);

const HeroButtons = ({ link }: { link: string }) => (
  <div className="flex w-full justify-center gap-3 sm:flex-row lg:justify-start">
    <Button asChild>
      <a href={link}>Get Qblox</a>
    </Button>
    <Button variant="outline" asChild>
      <a href="#learn-more">Learn more</a>
    </Button>
  </div>
);

export default function NewIntro() {
  const link =
    "https://www.amazon.com/QBLOX-Construction-Multi-Directional-Educational-Structures/dp/B0FLZ79GD4/ref=sr_1_2?crid=2C8HG2DDUXLTK&dib=eyJ2IjoiMSJ9.utt9lx44OGUJD1qA-xnY63I4ybCMQ8UD1IBs7wkzpM8.R-XyQs7VKFo8aNbdkNWjZxGHTFk8zpRdPxM8AFPXZco&dib_tag=se&keywords=qblox&qid=1765110496&sprefix=qblo%2Caps%2C244&sr=8-2&th=1";

  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto grid items-center gap-10 lg:grid-cols-2">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left px-4 gap-6">
          <h1 className="text-4xl font-semibold sm:text-6xl text-foreground/85 leading-tighter">
            <QbloxWordmark className="text-7xl sm:text-8xl" />
          </h1>
          <h2 className="tracking-tighter text-xl sm:text-2xl font-saira text-sky-800 leading-tight font-medium">
            {hero.title}
          </h2>
          <div className="text-muted-foreground text-lg max-w-xl space-y-3">
            {hero.content.map((c, i) => (
              <p key={i}>{c}</p>
            ))}
          </div>
          <HeroButtons link={link} />
        </div>

        <div className="relative w-full aspect-square max-w-lg mx-auto">
          <Image
            src="/product/large-pac-set.jpg"
            fill
            className="object-cover object-center rounded-4xl"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
