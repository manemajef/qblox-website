import intro from "@/content/sections/intro.json";
import Image from "next/image";

interface WaveSectionProps {
  title?: string;
  text: string;
}

export function WaveSection({ title, text }: WaveSectionProps) {
  return (
    <section className="relative bg-sky-100 text-sky-900 overflow-hidden rounded-4xl">
      <div className="container mx-auto px-6  sm:py-12 pb-18">
        {title && (
          <h2 className="text-4xl sm:text-8xl font-extrabold drop-shadow-sm mb-4">
            {title}
          </h2>
        )}
        <p className="max-w-lg  text-lg font-medium leading-relaxed">{text}</p>
      </div>

      {/* Bigger, Rounder Wave */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 180"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,120 C300,200 1140,40 1440,140 L1440,180 L0,180 Z"
          fill="#ffffff"
        />
      </svg>
    </section>
  );
}
export default function Intro() {
  return (
    <section className="py-32">
      <div className="container mx-auto">
        <h1 className="text-center text-4xl sm:text-6xl font-semibold">
          {" "}
          {intro.title}
        </h1>
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="mx-auto mt-6 flex flex-col justify-center p-4 px-6 rounded-4xl">
            <div className="bg-sky-100 rounded-4xl p-8">
              {intro.content.map(
                (c, i) =>
                  i != 2 && (
                    <p
                      className="text-xl leading-relaxed my-6 text-foreground/85 "
                      key={i}
                    >
                      {c}
                    </p>
                  ),
              )}
            </div>
          </div>
          <div className="relative w-full aspect-square max-w-lg mx-auto ">
            <Image
              src="/product/large-pac-set.jpg"
              fill
              className="object-cover object-center"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
