"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
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
import { AMAZON_PRODUCT_URL } from "@/lib/constants";

const links = [
  { label: "Getting Started", href: "/v2" },
  { label: "Start Building", href: "#models" },
  { label: "Q&A", href: "#qa" },
  { label: "Pricing", href: "#pricing" },
];

const GetQbloxButton = ({ className }: { className?: string }) => (
  <Link href={AMAZON_PRODUCT_URL} className={className}>
    Get Qblox
  </Link>
);

const NavbarFloat = () => (
  <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden xl:block">
    <nav className="flex items-center gap-6 text-sm font-medium bg-black/20 backdrop-blur-md px-8 py-3 rounded-full shadow-2xl shadow-black/50">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-white hover:text-white hover:underline transition-all"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  </div>
);

export default function Navbar() {
  const [isOverHero, setIsOverHero] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const heroSection = document.getElementById("hero-section");
    if (!heroSection || !headerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsOverHero(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
        rootMargin: "-50% 0px 0px 0px",
      },
    );

    observer.observe(heroSection);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {isOverHero && <NavbarFloat />}
      <header
        ref={headerRef}
        className={cn(
          "sticky top-0 z-50 w-full backdrop-blur supports-backdrop-filter:bg-background/75 shadow-xl transition-colors bg-background/85",
          isOverHero && "xl:invisible"
        )}
      >
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
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/80 transition hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto hidden md:block">
            <GetQbloxButton className="text-sm font-semibold transition hover:underline border rounded-md py-2 px-4 text-primary hover:text-primary/80" />
          </div>
          <div className="ml-auto md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
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
                  <GetQbloxButton className="text-sm font-semibold transition hover:underline border rounded-md py-2 px-4 text-primary hover:text-primary/80" />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
    </>
  );
}
