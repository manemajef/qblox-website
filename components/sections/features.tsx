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
    <div className="border rounded-xl  overflow-hidden max-w-md pb-4 mx-auto">
      <div className="aspect-square relative">
        <Image src={img} fill alt="" className="object-cover" />
      </div>
      <div className="mt-4 p-4">
        <Large className="text-2xl">{title}</Large>
        <p className="mt-4 text-lg text-foreground/85">{content}</p>
      </div>
    </div>
  );
};
const Feature2 = ({ title, img, content, left = true }: FeatureType) => {
  return (
    <div className="  overflow-hidden max-w-4xl grid sm:grid-cols-2 md:grid-cols-5 mt-12 mx-auto gap-8">
      {left && (
        <>
          <div className="aspect-square relative w-full md:col-span-2">
            <Image src={img} fill alt="" className="object-cover" />
          </div>
        </>
      )}
      <div className="mt-4 p-4 md:col-span-3">
        <Large className="text-2xl">{title}</Large>
        <p className="mt-4 text-lg text-foreground/85">{content}</p>
      </div>
      {!left && (
        <div className="aspect-square relative md:col-span-2 w-full">
          <Image src={img} fill alt="" className="object-cover" />
        </div>
      )}
    </div>
  );
};

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

        <div className="hidden">
          <div className="hidden sm:block">
            {features.features.map((f: FeatureType, i) => (
              <Feature2
                title={f.title}
                img={f.img}
                content={f.content}
                key={i}
                left={(i + 1) % 2 == 0}
              />
            ))}
          </div>
          <div className="grid sm:grid-cols-2 gap-4 sm:hidden">
            {features.features.map((f: FeatureType, i) => (
              <Feature
                title={f.title}
                img={f.img}
                content={f.content}
                key={i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
