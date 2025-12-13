import Image from "next/image";

import cta from "@/content/sections/cta.json";
import { Button } from "../ui/button";
import { Lead } from "../ui/typography";
import { H3, Li, Muted, Ul } from "../prose";
import { Card, CardContent, CardHeader } from "../ui/card";

type SetType = (typeof cta.sets)[number];

const SetCard = ({ set }: { set: SetType }) => {
  return (
    <article className="rounded-2xl border bg-background p-6 shadow-sm transition hover:shadow-md m-4 ">
      <div className="grid gap-8 sm:grid-cols-2 items-start">
        <div className="space-y-4">
          <H3>{set.title}</H3>
          {/* <p className="text-foreground/80">{set.description}</p> */}
          <Muted>{set.description}</Muted>
          <Ul>
            {set.features.map((f, i) => (
              <Li className="text-muted-foreground " key={i}>
                {f}
              </Li>
            ))}
          </Ul>
          {/* <ul className="space-y-2 text-sm text-foreground/85"> */}
          {/*   {set.features.map((feature) => ( */}
          {/*     <li key={feature} className="flex items-start gap-2"> */}
          {/*       <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" /> */}
          {/*       <span>{feature}</span> */}
          {/*     </li> */}
          {/*   ))} */}
          {/* </ul> */}
          <Button className="mt-2" size="lg">
            {set.button}
          </Button>
        </div>

        <div className="space-y-3">
          <div className="relative aspect-square overflow-hidden rounded-xl border bg-muted/30">
            <Image
              src={set.img}
              alt={set.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </article>
  );
};
const Set = ({ set }: { set: SetType }) => {
  return (
    <Card>
      <CardHeader>
        <H3>{set.title}</H3>
      </CardHeader>
      <CardContent className="grid gap-8 sm:grid-cols-2">
        <div className="border flex flex-col justify-center">
          <Muted>{set.description}</Muted>
          <Button className="mt-2 flex-none" size="lg">
            {set.button}
          </Button>
        </div>
        <div className="space-y-3">
          <div className="relative aspect-square overflow-hidden rounded-xl border">
            <Image
              src={set.img}
              alt={set.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
export default function Pricing() {
  return (
    <section className="py-24" id="pricing">
      <div className="container mx-auto">
        <div className="text-center space-y-3">
          <h1 className="text-4xl font-semibold text-balance">{cta.title}</h1>
          <Lead className="text-lg text-muted-foreground">{cta.subtitle}</Lead>
        </div>

        <div className="space-y-10">
          <div className="grid gap-6 xl:grid-cols-2">
            {cta.sets.map((set) => (
              <SetCard key={set.id} set={set} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
