import features from "@/content/sections/features.json";
import Image from "next/image";
import { H1, Large } from "../ui/typography";

interface FeatureType {
  title: string;
  img: string;
  content: string;
  left?: boolean;
}

const FeatureInteractive = ({
  title,
  img,
  content,
  left = true,
}: FeatureType) => {
  const imageOrder = left ? "sm:order-1" : "sm:order-2";
  const textOrder = left ? "sm:order-2" : "sm:order-1";

  return (
    <div className="border rounded-xl overflow-hidden max-w-md pb-4 mx-auto  sm:pb-0 sm:max-w-4xl  sm:grid sm:grid-cols-2 md:grid-cols-5 sm:gap-8 mt-12">
      <div
        className={`aspect-square relative w-full ${imageOrder} md:col-span-2`}
      >
        <Image src={img} fill alt="" className="object-cover" />
      </div>
      <div className={`mt-4 sm:mt-0 p-4 ${textOrder} md:col-span-3`}>
        <Large className="text-2xl">{title}</Large>
        <p className="mt-4 text-lg text-foreground/85">{content}</p>
      </div>
    </div>
  );
};

const Feature3 = ({ title, img, content, left = true }: FeatureType) => {
  const imageOrder = left ? "sm:order-1" : "sm:order-2";
  const textOrder = left ? "sm:order-2" : "sm:order-1";

  return (
    <div className="border rounded-xl overflow-hidden max-w-md pb-4 mx-auto  sm:pb-0 sm:max-w-4xl  sm:grid sm:grid-cols-2 md:grid-cols-5 sm:gap-8 mt-12">
      <div
        className={`aspect-square relative w-full ${imageOrder} md:col-span-2`}
      >
        <Image src={img} fill alt="" className="object-cover" />
      </div>
      <div className={`mt-4 sm:mt-0 p-4 ${textOrder} md:col-span-3`}>
        <Large className="text-2xl">{title}</Large>
        <p className="mt-4 text-lg text-foreground/85">{content}</p>
      </div>
    </div>
  );
};

export default function Features() {
  return (
    <section className="py-24" id={features.id}>
      <div className="container mx-auto">
        <h1 className="text-4xl font-semibold text-center">{features.title}</h1>

        {features.features.map((f: FeatureType, i) => (
          <FeatureInteractive
            title={f.title}
            img={f.img}
            content={f.content}
            key={i}
            left={(i + 1) % 2 == 0}
          />
        ))}
        <div className="bg-sky-100">
          {features.features.map((f, i) => (
            <Feature3
              title={f.title}
              img={f.img}
              content={f.content}
              key={i}
              left={(i + 1) % 2 == 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
