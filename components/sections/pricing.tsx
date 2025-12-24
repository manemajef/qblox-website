import Image from "next/image";

import cta from "@/content/sections/cta.json";
import { Button } from "../ui/button";
import { Lead } from "../ui/typography";
import { H4, Li, Muted, Ul } from "../prose";
import { Card, CardContent, CardHeader } from "../ui/card";
import { lg_url, sm_url } from "@/lib/constants";
type SetType = (typeof cta.sets)[number];

const Set = ({ set }: { set: SetType }) => {
  const url = set.variant == "sm" ? sm_url : lg_url;
  return (
    <Card>
      <CardHeader className="sm:hidden md:block">
        <H4 className="mt-0 md:text-2xl text-center">{set.title}</H4>
      </CardHeader>
      <CardContent className="space-y-4 ">
        <div className="sm:flex gap-8 items-center md:block space-y-4">
          <div className="relative border shadow sm:w-1/2 md:w-full aspect-square bg-muted/30 rounded-xl overflow-hidden">
            <Image
              src={set.img}
              alt={set.title}
              fill
              className="object-contain"
            />
          </div>
          <div className="sm:w-1/2 md:w-full">
            <h4 className="hidden sm:block md:hidden text-2xl mb-4 text-foreground/75 font-bold">
              {set.title}
            </h4>
            <Muted className="">{set.description}</Muted>
          </div>
        </div>
        {/* <Ul className="mb-0">
          {set.features.map((f) => (
            <Li key={f} className="text-muted-foreground">
              {f}
            </Li>
          ))}
        </Ul> */}
        <div className="mt-8 flex justify-end">
          <Button size="lg" className="w-full sm:w-auto" asChild>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {set.button}
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default function Pricing() {
  return (
    <section className="py-24" id="pricing">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="text-center space-y-3 mb-12">
          <h1 className="text-4xl font-semibold text-balance">{cta.title}</h1>
          <Lead className="text-lg text-muted-foreground">{cta.subtitle}</Lead>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {cta.sets.map((set) => (
            <Set key={set.id} set={set} />
          ))}
        </div>
      </div>
    </section>
  );
}
