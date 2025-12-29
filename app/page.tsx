import Hero from "@/components/sections/hero";
import Models from "@/components/sections/models";
import Intro from "@/components/sections/intro";
import FAQ from "@/components/sections/faq";
import Pricing from "@/components/sections/pricing";
import Footer from "@/components/sections/footer";
import Features from "@/components/sections/features";
import Repair from "@/components/sections/repair";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="max-w-6xl mx-auto">
        <div id="intro">
          <Intro />
        </div>
        <div id="guide">
          <Models />
          <Repair />
        </div>
        <Features />
        <div id="pricing">
          <Pricing />
        </div>
        <div id="faq">
          <FAQ />
        </div>
        <div id="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}
