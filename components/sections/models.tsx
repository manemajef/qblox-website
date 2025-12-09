import models from "@/content/sections/models.json";
import Image from "next/image";

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
          <h2 className="mb-3 pb-8 text-4xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
            {title}
          </h2>
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
      </div>
    </section>
  );
}
