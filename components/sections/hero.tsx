// import hero from "@/content/sections/hero.json";
import { Button } from "../ui/button";
import { ExternalLink, Volume2 } from "lucide-react";
const youtube = "https://www.youtube.com/watch?v=t_Us_D8lJIU";

function HeroVideo() {
  return (
    <div className="absolute inset-0">
      <iframe
        className="h-full w-full"
        src="https://www.youtube.com/embed/t_Us_D8lJIU?autoplay=1&controls=0&rel=1&mute=1&loop=1&playlist=t_Us_D8lJIU&iv_load_policy
=3&start=6&end=53"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}

const HeroOverlay = () => <div className="absolute inset-0 bg-black/35" />;

function HeroControls() {
  return (
    <div className="absolute inset-x-0 top-0 xl:top-5 z-20 flex justify-end p-4">
      <div className="w-full max-w-7xl mx-auto flex justify-end">
        <div className="flex items-center gap-2 rounded-full bg-black/40 px-2 py-1 backdrop-blur">
          <Button
            size="icon"
            variant="ghost"
            className="h-9 w-9 rounded-full text-white hover:bg-white/15"
            asChild
          >
            <a href={youtube} aria-label="Toggle sound">
              <Volume2 className="h-4 w-4" />
            </a>
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="h-9 w-9 rounded-full text-white hover:bg-white/15"
            asChild
          >
            <a href={youtube} aria-label="Open on YouTube">
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

const HeroContent = ({ link }: { link: string }) => (
  <div className="relative z-10 flex h-full items-center justify-center px-4 py-16">
    <div className="flex flex-col items-center gap-6 text-center text-white">
      <div className="flex flex-col items-center gap-3 sm:flex-row">
        <Button asChild className="">
          <a href="#intro">Explore Qblox</a>
        </Button>
        <Button
          variant="outline"
          asChild
          className="border-white/60 bg-white/0  text-white hover:bg-white/10 hover:text-white"
        >
          <a href="#intro">Contact Us</a>
        </Button>
      </div>
    </div>
  </div>
);

export default function Hero() {
  return (
    <div className="xl:-mt-24 xl:z-50 ">
      <section
        id="hero-section"
        className="relative isolate w-full aspect-video overflow-hidden"
      >
        <HeroVideo />
        <HeroOverlay />
        <div className="max-w-7xl mx-auto">
          <HeroControls />
        </div>

        <div className="hidden sm:block h-full">
          <HeroContent link="#intro" />
        </div>
      </section>
    </div>
  );
}
