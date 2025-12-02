import models from "@/content/sections/models.json"
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Model {
  id: string;
  heading: string;
  description: string;
  image: string;
  url: string;
}

interface ModelsProps {
  title?: string;
  description?: string;
  buttonUrl?: string;
  buttonText?: string;
  features?: Model[];
}

export default function Models(
  {
    title = models.title,
    description = models.description,
    features = models.models,
    buttonUrl = "#",
    buttonText = "Get Qblox now"

  }: ModelsProps
) {

  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="mb-8 lg:max-w-sm">
          <h2 className="mb-3 text-3xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
            {title}
          </h2>
          {description && (
            <p className="text-muted-foreground mb-8 lg:text-lg">
              {description}
            </p>
          )}
          {buttonUrl && (
            <Button variant="link" asChild>
              <a
                href={buttonUrl}
                className="group flex items-center font-medium md:text-base lg:text-lg"
              >
                {buttonText}
                <ArrowRight />
              </a>
            </Button>
          )}
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {features.map((m: Model) => (
            <div
              key={m.id}
              className="border-border flex md:flex-col overflow-clip rounded-xl border"
            >
              {/*
              <a href={m.url} className="w-full lg:w-2/3 md:mx-auto">
                <img
                  src={m.image}
                  alt={m.heading}
                  className="aspect-square  h-full w-full object-contain object-center transition-opacity hover:opacity-80"
                />
              </a>*/}

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
      </div>
    </section>
  );
}
