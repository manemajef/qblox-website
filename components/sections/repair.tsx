import repair from "@/content/sections/repair.json";
import { Button } from "../ui/button";
import { ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { YOUTUBE_REPAIR_SHORT } from "@/lib/constants";

export default function Repair() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1.5 text-sm font-medium text-orange-700 border border-orange-200 mb-8">
              <ShieldCheck className="h-4 w-4" />
              Repair & Safety
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight text-foreground">
              {repair.title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              {repair.content}
            </p>

            <Button
              size="lg"
              className="group"
              asChild
            >
              <a href={YOUTUBE_REPAIR_SHORT} target="_blank"
                rel="noopener noreferrer"
              >
                See the guide
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

          {/* Right Card */}
          <div className="bg-white rounded-3xl p-8 border shadow-xl shadow-black/5">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              Quick Check
            </h3>
            <ul className="space-y-4">
              {repair.list.map((item, i) => (
                <li className="flex items-start gap-3" key={i}>
                  <CheckCircle2 className="h-6 w-6 text-orange-600 shrink-0 mt-0.5" />
                  <span className="text-muted-foreground leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
