import features from "@/content/sections/features.json";
import Image from "next/image";
import { Large } from "../ui/typography";

interface FeatureType {
  title: string;
  img: string;
  content: string;
  left?: boolean;
}

const Feature = ({ title, img, content }: FeatureType) => {
  return (
    <div className="border rounded-xl  overflow-hidden  pb-4 mx-auto mt-4">
      <div className="aspect-square relative">
        <Image src={img} fill alt="" className="object-cover" />
      </div>
      <div className="mt-4 p-4">
        <Large className="text-xl">{title}</Large>
        <p className="mt-4 text-lg text-foreground/85">{content}</p>
      </div>
    </div>
  );
};

export default function Features() {
  return (
    <section className="py-24" id={features.id}>
      <div className="container mx-auto max-w-6xl p-4">
        <h1 className="text-4xl font-semibold text-center">{features.title}</h1>
        <div className="grid sm:grid-cols-2 gap-8">
          {features.features.map((f: FeatureType, i) => (
            <Feature title={f.title} img={f.img} content={f.content} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
