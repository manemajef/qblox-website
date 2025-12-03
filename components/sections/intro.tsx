import intro from "@/content/sections/intro.json";
import Image from "next/image";
export default function Intro() {
  return (
    <section className="py-32">
      <div className="container mx-auto">
        <h1 className="text-center text-4xl font-semibold"> {intro.title}</h1>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="mx-auto mt-6 flex flex-col justify-center p-4 px-6 rounded-4xl">
            {intro.content.map((c, i) => (
              <p
                className="text-xl mt-6 text-foreground/85 bg-sky-100 p-6 rounded-4xl"
                key={i}
              >
                {c}
              </p>
            ))}
          </div>
          <div className="relative w-full aspect-square ">
            <Image
              src="/product/large-pac-set.jpg"
              fill
              className="object-cover object-center"
              alt=""
            />
          </div>
        </div>
        {/*<div className="max-w-4xl  aspect-97/60 mx-auto mt-6 relative">
          <Image
            src="/modules/family.jpg"
            fill
            alt="family with qblox"
            className="object-cover"
          />
        </div>*/}
        {/*<div className="flex flex-col md:flex-row gap-4 mx-auto mt-12">
          <div className="relative w-full max-w-150 aspect-square">
            <Image
              src="/lifestyle/child-play2.jpeg"
              fill
              alt=""
              className="object-cover rounded-xl"
            ></Image>
          </div>
          <div className="relative w-full max-w-150 aspect-square">
            <Image
              src="/lifestyle/QbloxGrandma.jpg"
              fill
              alt=""
              className="object-contain rounded-xl"
            ></Image>
          </div>
        </div>*/}
      </div>
    </section>
  );
}
