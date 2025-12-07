import hero from "@/content/sections/hero.json";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Lead } from "../ui/typography";
const Qblox = ({ className }: { className?: string }) => (
  <h1 className={cn("text-2xl text-semibold text-sky-800", className)}>
    <span className="text-red-700">Q</span>BL
    <span className="text-red-700">O</span>X
  </h1>
);
export default function Hero() {
  return (
    <section className="py-12 lg:py-32">
      <div className="container mx-auto">
        <div className="grid items-center gap-8 lg:grid-cols-5 xl:gap-32">
          <div className="flex flex-col items-center text-center max-w-xl mx-auto lg:items-start lg:text-left lg:col-span-2 ">
            {/*<h1 className="my-6 text-pretty text-4xl font-bold lg:text-3xl">
              {hero.title}
            </h1>*/}

            <Qblox className="text-8xl font-bold leading-tighter" />
            <Lead className="tracking-tighter text-sky-800 leading-tighter font-medium text-2xl ">
              {hero.title}
            </Lead>
            <div className="mt-4 mb-8">
              <p className="text-muted-foreground text-lg max-w-lg mx-auto">
                {hero.content.map((c, i) => (
                  <span key={i} className="">
                    {c}
                    <span className="min-w-4" />
                  </span>
                ))}
              </p>
              {/*{hero.content.map((c, i) => (
                <p className="text-muted-foreground text-lg" key={i}>
                  {c}
                </p>
              ))}*/}
            </div>

            {/*<p className="text-muted-foreground mb-8 mac-w-xl lg:text-lg mt-8">
              {hero.content}
            </p>*/}
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              <Button asChild className="w-full sm:w-auto">
                <a href="https://www.amazon.com/QBLOX-Construction-Multi-Directional-Educational-Structures/dp/B0FLZ79GD4/ref=sr_1_2?crid=2C8HG2DDUXLTK&dib=eyJ2IjoiMSJ9.utt9lx44OGUJD1qA-xnY63I4ybCMQ8UD1IBs7wkzpM8.R-XyQs7VKFo8aNbdkNWjZxGHTFk8zpRdPxM8AFPXZco&dib_tag=se&keywords=qblox&qid=1765110496&sprefix=qblo%2Caps%2C244&sr=8-2&th=1">
                  Get Qblox
                </a>
              </Button>
              <Button variant="outline" asChild className="w-full sm:w-auto">
                <a href="#">Learn more</a>
              </Button>
            </div>
          </div>
          <div className="lg:col-span-3">
            <iframe
              className="aspect-video rounded-xl"
              src="https://www.youtube.com/embed/t_Us_D8lJIU?si=mNHGElRhjMoZmC7Sa&autoplay=1&loop=1&controls=0&rel=1&mute=1&loop=1&playlist=t_Us_D8lJIU"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
