import { H1, H4, Muted } from "@/components/prose";
import Image from "next/image";
import colorwheel from "@/content/sections/colorwheel.json";
export default function Page() {
  const pics = [];
  for (let i = 1; i <= 6; i++) {
    pics.push(`/colorwheel/0${i}.jpg`);
  }

  return (
    <div className="mt-12 p-4 container mx-auto">
      <H1 className="text-center mb-12 mt-8">Guide for ColorWheel</H1>
      <div className=" mx-auto text-lg md:text-xl lg:flex justify-center gap-16 text-muted-foreground mb-12">
        <div className="flex flex-col justify-center">
          {colorwheel.description.map((d, i) => (
            <p key={i} className="p-4 lg:max-w-2xl">
              {d}
            </p>
          ))}
        </div>
        <div className="aspect-square max-w-md w-full hidden lg:block relative">
          <Image
            src="/product/large-set.jpg"
            fill
            alt=""
            className="object-cover"
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {colorwheel.stages.map((p, i) => (
          <div
            key={p.stage}
            className="border shadow rounded-3xl overflow-hidden"
          >
            <div className="relative aspect-square w-full overflow-hidden">
              <Image src={p.img} fill alt="pic1" className="object-cover" />
            </div>

            <div className=" p-4">
              <H4>Stage {p.stage}:</H4>
              <Muted className="mb-4">
                {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
                quisquam sapiente, porro eos maxime cupiditate officia. */}
                {p.content}
              </Muted>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
