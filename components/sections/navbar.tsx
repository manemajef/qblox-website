import Image from "next/image";
import Link from "next/link";

import { Button } from "../ui/button";

const links = [
  { label: "Getting Started", href: "#intro" },
  { label: "Start Building", href: "#models" },
  { label: "Q&A", href: "#qa" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/85 backdrop-blur supports-backdrop-filter:bg-background/75">
      <div className="container mx-auto flex items-center gap-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-3 shrink-0"
          aria-label="Qblox home"
        >
          <Image
            src="/logo.png"
            alt="Qblox logo"
            width={160}
            height={48}
            className="h-10 w-auto"
            priority
          />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden md:flex items-center gap-6 text-sm font-medium text-foreground/80"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <Button asChild variant="outline">
            <Link href="#pricing">Get Qblox</Link>
          </Button>
        </div>
      </div>

      <div className="md:hidden border-t bg-background/90">
        <div className="container mx-auto flex gap-4 overflow-x-auto px-4 py-3 text-sm font-medium text-foreground/80">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="shrink-0 rounded-full border px-3 py-1.5 transition hover:border-primary/60 hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
