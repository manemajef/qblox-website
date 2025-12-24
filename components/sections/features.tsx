import features from "@/content/sections/features.json";
import Image from "next/image";
import { H4, Muted } from "../prose";
import { H2 } from "../prose";
import { cn } from "@/lib/utils";
interface FeatureType {
  title: string;
  img: string;
  content: string;
}

const Feature = ({
  title,
  img,
  content,
  reverse,
}: FeatureType & { reverse?: boolean }) => {
  return (
    <div
      className={cn(
        "flex flex-col md:gap-12",
        reverse ? "sm:flex-row-reverse" : "sm:flex-row",
        "gap-6 items-center"
      )}
    >
      <div className="w-full sm:w-4/7 md:w-1/2  shrink-0">
        <div className="relative aspect-4/3 rounded-xl overflow-hidden">
          <Image src={img} fill alt={title} className="object-cover" />
        </div>
      </div>
      <div
        className={cn("flex-1  space-y-2  ", reverse ? "lg:pe-12" : "lg:ps-12")}
      >
        <H4 className="sm:text-2xl md:text-3xl lg:text-4xl mt-0 lg:mb-6">
          {title}
        </H4>
        <Muted className="md:text-xl md:leading-relaxed">{content}</Muted>
      </div>
    </div>
  );
};

export default function Features() {
  return (
    <section className="py-24" id={features.id}>
      <div className="container mx-auto max-w-5xl px-4">
        <H2 className="text-center mb-16">{features.title}</H2>
        <div className="space-y-12 sm:space-y-16">
          {features.features.map((f: FeatureType, i) => (
            <Feature
              title={f.title}
              img={f.img}
              content={f.content}
              reverse={i % 2 === 1}
              key={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
