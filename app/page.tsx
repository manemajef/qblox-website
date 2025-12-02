import Hero from "@/components/sections/hero";
import Models from "@/components/sections/models";
import Intro from "@/components/sections/intro";
import Features from "@/components/sections/features";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      <Hero />
      <Intro />
      <Features />
      <Models />
    </div>
  );
}
