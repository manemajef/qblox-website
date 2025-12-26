import { H1, H4, Muted } from "@/components/prose";
import Image from "next/image";
export default function Page() {
  const pics = [];
  for (let i = 1; i <= 6; i++) {
    pics.push(`/colorwheel/0${i}.jpg`);
  }

  return (
    <div className="mt-12 p-4 container mx-auto">
      <H1 className="text-center mb-12">Guide for ColorWheel</H1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {pics.map((p, i) => (
          <div key={i} className="border shadow rounded-3xl overflow-hidden">
            <div className="relative aspect-square w-full overflow-hidden">
              <Image src={p} fill alt="pic1" className="object-cover" />
            </div>

            <div className=" p-4">
              <H4>Level {i + 1}:</H4>
              <Muted className="mb-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
                quisquam sapiente, porro eos maxime cupiditate officia.
              </Muted>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
