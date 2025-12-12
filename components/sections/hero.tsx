import { Button } from "../ui/button";
import { HeroVideo } from "./hero-video";

const HeroOverlay = () => <div className="absolute inset-0 bg-black/35" />;

const HeroContent = () => (
  <div className="relative z-10 flex h-full items-center justify-center px-4 py-16">
    <div className="flex flex-col items-center gap-6 text-center text-white">
      <div className="flex flex-col items-center gap-3 sm:flex-row">
        <Button asChild>
          <a href="#intro">Explore Qblox</a>
        </Button>
        <Button
          variant="outline"
          asChild
          className="border-white/60 bg-white/0 text-white hover:bg-white/10 hover:text-white"
        >
          <a href="#pricing">Get Started</a>
        </Button>
      </div>
    </div>
  </div>
);

export default function Hero() {
  return (
    <div className="xl:-mt-18 xl:z-50">
      <section
        id="hero-section"
        className="relative isolate w-full aspect-video overflow-hidden"
      >
        <HeroVideo />
        <HeroOverlay />
       

        <div className="hidden sm:block h-full">
          <HeroContent />
        </div>
      </section>
    </div>
  );
}
