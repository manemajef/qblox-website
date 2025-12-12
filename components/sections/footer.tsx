import Image from "next/image";
import Link from "next/link";

import footer from "@/content/sections/footer.json";
import { Button } from "../ui/button";
import { Muted, Small } from "../ui/typography";

export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-muted/20">
      <div className="container mx-auto space-y-8 py-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="/logo.png"
              alt="Qblox logo"
              width={140}
              height={42}
              className="h-10 w-auto"
            />
            <div className="space-y-1">
              <h3 className="text-xl font-semibold leading-tight">
                {footer.title}
              </h3>
              <Muted className="text-sm max-w-xl">
                {footer.description}
              </Muted>
            </div>
          </div>

          {footer.button?.url && (
            <Button asChild size="lg">
              <Link href={footer.button.url}>{footer.button.label}</Link>
            </Button>
          )}
        </div>

        {footer.links && footer.links.length > 0 && (
          <div className="flex flex-wrap items-center gap-4 text-sm">
            {footer.links.map((link) => (
              <Link
                key={link.url}
                href={link.url}
                className="rounded-full border px-3 py-1.5 text-foreground/85 transition hover:border-primary/60 hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}

        <div className="flex flex-col gap-2 border-t pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <Small className="text-muted-foreground">{footer.tagline}</Small>
          <div className="flex flex-col md:flex-row gap-1 md:gap-4 md:items-center">
            <Small className="text-muted-foreground">{footer.copyright}</Small>
            <span className="hidden md:inline text-muted-foreground/30">|</span>
            <Small className="text-muted-foreground">
              Made by{" "}
              <a
                href="https://github.com/manemajef"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground underline underline-offset-2 transition-colors"
              >
                RotemDavids
              </a>
            </Small>
          </div>
        </div>
      </div>
    </footer>
  );
}
