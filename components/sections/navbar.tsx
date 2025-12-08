import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";

import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const links = [
  { label: "Getting Started", href: "/v2" },
  { label: "Start Building", href: "#models" },
  { label: "Q&A", href: "#qa" },
  { label: "Pricing", href: "#pricing" },
];

const GetQblox = () => (
  <Link
    href="#"
    className="text-sm font-semibold text-primary transition hover:underline"
  >
    Get Qblox
  </Link>
);
export default function Navbar() {
  const headerClass =
    "sticky top-0 z-50 w-full bg-background/85 backdrop-blur supports-backdrop-filter:bg-background/75";
  const linkClass = "transition text-foreground/80 hover:text-foreground";

  return (
    <header className={headerClass}>
      <div className="container mx-auto flex items-center gap-6 py-4 px-4">
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
          className="hidden md:flex items-center gap-6 text-sm font-medium"
        >
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={linkClass}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto hidden md:block">
          <GetQblox />
        </div>
        <div className="ml-auto md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="min-w-[200px]">
              <DropdownMenuLabel className="font-semibold">
                Menu
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              {links.map((link) => (
                <DropdownMenuItem key={link.href} asChild>
                  <Link href={link.href}>{link.label}</Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <GetQblox />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
