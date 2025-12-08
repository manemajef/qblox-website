import models from "@/content/sections/models.json";
import repair from "@/content/sections/repair.json";
import { Button } from "../ui/button";
export default function Repair() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="grid gap-10 rounded-3xl border shadow-red-200 bg-white p-10 shadow-sm md:grid-cols-2">
          <div className="space-y-4">
            <span className="inline-flex items-center rounded-full  px-3 py-1 text-xs font-semibold uppercase tracking-wide text-foreground shadow-sm bg-red-200">
              Repair & Safety
            </span>
            <h2 className="text-3xl font-semibold text-foreground">
              {repair.title}
            </h2>
            <p className="text-lg leading-relaxed text-foreground/85">
              {repair.content}
            </p>
          </div>

          <div className="space-y-4 rounded-2xl bg-muted/50 p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-foreground">Quick check</h3>
            <ul className="space-y-3 text-foreground/85 leading-relaxed list-disc">
              {repair.list.map((l, i) => (
                <li className="flex items-baseline gap-3" key={i}>
                  <span className="mt-1.5 size-1.5 flex-none rounded-full bg-primary/70" />
                  <span>{l}</span>
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <Button asChild>
                <a href="#">See the guide</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
