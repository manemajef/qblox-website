import Image from "next/image";

import cta from "@/content/sections/cta.json";
import { Button } from "../ui/button";
import { Lead } from "../ui/typography";
import { H3, H4, Li, Muted, Ul } from "../prose";
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
        <H4>{set.title}</H4>
      </CardHeader>
      <CardContent>
        <div className="grid sm:grid-cols-5 lg:grid-cols-1">
          <div className="space-y-3 sm:col-span-3">
            <div className="relative aspect-square overflow-hidden rounded-xl border">
              <Image
                src={set.img}
                alt={set.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="p-4 sm:col-span-2 flex flex-col justify-center">
            <Muted>{set.description}</Muted>
            {/* <Ul className="hidden sm:block lg:hidden mt-8"> */}
            {/*   {set.features.map((f) => ( */}
            {/*     <Li key={f} className="text-muted-foreground text-lg"> */}
            {/*       <span className="text-lg">{f}</span> */}
            {/*     </Li> */}
            {/*   ))} */}
            {/* </Ul> */}
            <br />
            {/* <div className="flex sm:flex-col lg:flex-row gap-8 justify-between items-center w-full"> */}
            {/*   <Ul> */}
            {/*     {set.features.map((f) => ( */}
            {/*       <Li key={f}> */}
            {/*         <span className="text-muted-foreground text-lg">{f}</span> */}
            {/*       </Li> */}
            {/*     ))} */}
            {/*   </Ul> */}
            {/*   <Button>{set.button}</Button> */}
            {/* </div> */}
          </div>
        </div>
        <div className="flex  lg:flex-row gap-8 justify-between items-center w-full mt-4">
          <Ul>
            {set.features.map((f) => (
              <Li key={f}>
                <span className="text-muted-foreground text-lg">{f}</span>
              </Li>
            ))}
          </Ul>
          <Button>{set.button}</Button>
        </div>
      </CardContent>
      {/* <CardContent className="grid gap-8 sm:grid-cols-2"> */}
      {/*   <div className="border flex flex-col justify-center"> */}
      {/*     <Muted>{set.description}</Muted> */}
      {/*     <Button className="mt-2 flex-none" size="lg"> */}
      {/*       {set.button} */}
      {/*     </Button> */}
      {/*   </div> */}
      {/*   <div className="space-y-3"> */}
      {/*     <div className="relative aspect-square overflow-hidden rounded-xl border"> */}
      {/*       <Image */}
      {/*         src={set.img} */}
      {/*         alt={set.title} */}
      {/*         fill */}
      {/*         className="object-cover" */}
      {/*       /> */}
      {/*     </div> */}
      {/*   </div> */}
      {/* </CardContent> */}
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

        <div className="space-y-10 mt-10">
          <div className="grid gap-6 lg:grid-cols-2">
            {cta.sets.map((set) => (
              <Set key={set.id} set={set} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
