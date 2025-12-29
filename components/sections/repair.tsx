import repair from "@/content/sections/repair.json";
import { Button } from "../ui/button";
import { ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { YOUTUBE_REPAIR_SHORT } from "@/lib/constants";
import { H2, H3, H4, Muted } from "../prose";
import Image from "next/image";

const Img = () => (
  <div className="relative aspect-square w-full max-w-xs sm:max-w-sm rounded-2xl overflow-hidden ">
    <Image
      src="/repair.jpg"
      fill
      className="object-cover object-top"
      alt="Qblox cube repair demonstration"
    />
  </div>
);
export default function Repair() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-4 mb-16">
        <H2 className="mb-8 text-center">Build To Last</H2>

        <div className="bg-white rounded-3xl border shadow-xl shadow-black/5 p-8 lg:p-12">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="contents md:block">
              <div className="space-y-6">
                <H3>Qubes May Seperate, But They Dont Break</H3>

                <Muted className="leading-relaxed">
                  The cubes are designed to detach safely under impact rather
                  than cracking, and they can be reassembled in seconds.
                </Muted>
              </div>

              <div className="flex justify-center md:justify-end md:hidden my-6">
                {/* <div className="relative aspect-square w-full max-w-xs sm:max-w-sm rounded-2xl overflow-hidden">
                  <Image
                    src="/repair.jpg"
                    fill
                    className="object-cover object-top"
                    alt="Qblox cube repair demonstration"
                  />
                </div> */}
                <Img />
              </div>

              <div className="space-y-6">
                <Muted className="leading-relaxed">
                  If a cube detaches, just reconnect the pieces and continue
                  building. If help is needed, see the guide below.
                </Muted>

                <Button size="lg" className="group" asChild>
                  <a
                    href={YOUTUBE_REPAIR_SHORT}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    See The Guide
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="hidden md:flex justify-center md:justify-end ">
              <Img />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 hidden">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1.5 text-sm font-medium text-orange-700 border border-orange-200 mb-0">
              <ShieldCheck className="h-4 w-4" />
              Repair & Safety
            </div>
            <H3>{repair.title}</H3>
            <Muted>{repair.content}</Muted>
            <br />

            <Button size="lg" className="group" asChild>
              <a
                href={YOUTUBE_REPAIR_SHORT}
                target="_blank"
                rel="noopener noreferrer"
              >
                See the guide
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

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
