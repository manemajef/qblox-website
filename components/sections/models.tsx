import models from "@/content/sections/models.json";
import Image from "next/image";
import { Button } from "../ui/button";

interface Model {
  id: string;
  heading: string;
  description: string;
  image: string;
  url: string;
}

export default function Models() {
  const title = models.title;
  const description = models.description;
  const features = models.models;

  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="mb-8 max-w-lg text-center mx-auto">
          <h2 className="mb-3 text-3xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
            {title}
          </h2>

          <p className="text-muted-foreground mb-8 lg:text-lg">{description}</p>
        </div>
        <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2 lg:gap-8">
          {features.map((m: Model) => (
            <div
              key={m.id}
              className="border-border flex md:flex-col overflow-clip rounded-xl border"
            >
              <a href={m.url} className="w-full lg:w-2/3 md:mx-auto">
                <div className="relative w-full aspect-square">
                  <Image
                    src={`/${m.image}`}
                    alt={m.heading}
                    fill
                    className="object-contain object-center transition-opacity hover:opacity-80"
                    sizes="100vw"
                  />
                </div>
              </a>

              <div className="px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                  {m.heading}
                </h3>
                <p className="text-muted-foreground lg:text-lg">
                  {m.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <div className="max-w-4xl p-8 rounded-xl shadow bg-red-200/75 mx-auto">
            <h2 className="text-2xl font-semibold text-red-950">
              {models.repair.title}
            </h2>

            <p className="mt-6 text-lg text-foreground/85">
              {models.repair.content}
            </p>
            <div className="flex justify-end mt-8">
              <Button asChild className="">
                <a href="#">See the Guide</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
