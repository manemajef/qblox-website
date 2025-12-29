import models from "@/content/sections/models.json";
import Image from "next/image";
import { H2, H3, H4, Muted } from "../prose";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

interface Model {
  id: string;
  heading: string;
  description: string;
  image: string;
  url: string;
}

export default function Models() {
  const { title, models: modelsList } = models;
  return (
    <section className="py-4 px-4">
      <div className="container mx-auto">
        <div className="mb-8 max-w-lg text-center mx-auto">
          {/* <h2 className="mb-3 pb-8 text-4xl font-semibold md:mb-4 md:text-4xl lg:mb-6"> */}
          {/*   {title} */}
          {/* </h2> */}
          <H2>{title}</H2>
        </div>
        <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {modelsList.map((m: Model) => (
            <div
              key={m.id}
              className="border-border sm:flex md:flex-col max-w-sm mx-auto sm:max-w-none overflow-clip rounded-xl border"
            >
              <div className="w-full sm:w-2/5 md:w-full max-w-sm mx-auto md:mx-auto shrink-0">
                <div className="relative w-full mx-auto aspect-square">
                  <Image
                    src={`/${m.image}`}
                    alt={m.heading}
                    fill
                    className="object-contain object-center transition-opacity hover:opacity-80"
                    sizes="100vw"
                  />
                </div>
              </div>

              <div className="px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                {/* <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6"> */}
                {/*   {m.heading} */}
                {/* </h3> */}
                <H4>{m.heading}</H4>
                <Muted>{m.description}</Muted>

                {/* <p className="text-muted-foreground lg:text-lg"> */}
                {/*   {m.description} */}
                {/* </p> */}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-start">
          <Button size="lg" asChild className="group mt-6">
            <a href="/guides/colorwheel" className="text-xl p-4">
              Go to Detailed Guide
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
        <div className="bg-white border max-w-3xl mx-auto rounded-3xl shadow-xl shadow-black/5 mt-16 p-8 lg:p-12 hidden">
          <div className="text-center space-y-6">
            <H3>Endless Possibilities</H3>

            <div className="space-y-4 max-w-2xl mx-auto">
              <Muted className="text-lg">
                While we wish to provide you with as much guidance as possible,
                since there are endless possibilities, one cannot provide a
                guide for everything.
              </Muted>
              <Muted>
                That being said, we did provide a detailed guide for the
                colorwheel.
              </Muted>
            </div>

            <Button size="lg" asChild className="group mt-6">
              <a href="/guides/colorwheel">
                Go to Detailed Guide
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
