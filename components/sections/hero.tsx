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
    <section className="py-32">
      <div className="container mx-auto">
        <div className="grid items-center gap-8 lg:grid-cols-5 xl:gap-32">
          <div className="flex flex-col items-center text-center max-w-xl mx-auto lg:items-start lg:text-left lg:col-span-2 ">
            {/*<h1 className="my-6 text-pretty text-4xl font-bold lg:text-3xl">
              {hero.title}
            </h1>*/}

            <Qblox className="text-8xl font-bold leading-tighter" />
            <Lead className="tracking-tighter text-sky-800 leading-tighter font-medium text-xl">
              {hero.title}
            </Lead>
            <div className="mt-4 mb-8">
              {hero.content.map((c, i) => (
                <p className="text-muted-foreground" key={i}>
                  {c}
                </p>
              ))}
            </div>

            {/*<p className="text-muted-foreground mb-8 mac-w-xl lg:text-lg mt-8">
              {hero.content}
            </p>*/}
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              <Button asChild className="w-full sm:w-auto">
                <a href="#">Get Qblox</a>
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
