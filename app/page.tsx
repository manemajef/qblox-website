import Hero from "@/components/sections/hero";
import Models from "@/components/sections/models";
import Intro from "@/components/sections/intro";
// import Features from "@/components/sections/features";
import FAQ from "@/components/sections/faq";
import Pricing from "@/components/sections/pricing";
import Footer from "@/components/sections/footer";
import Features from "@/components/sections/features2";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      <Hero />
      <Intro />

      <div id="guide">
        <Models />
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
  );
}
