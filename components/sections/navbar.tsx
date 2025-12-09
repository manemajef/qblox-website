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

const links = [
  { label: "Getting Started", href: "/v2" },
  { label: "Start Building", href: "#models" },
  { label: "Q&A", href: "#qa" },
  { label: "Pricing", href: "#pricing" },
];
const amazonLink =
  "https://www.amazon.com/QBLOX-Construction-Multi-Directional-Educational-Structures/dp/B0FLZ79GD4/ref=sr_1_2?crid=2C8HG2DDUXLTK&dib=eyJ2IjoiMSJ9.utt9lx44OGUJD1qA-xnY63I4ybCMQ8UD1IBs7wkzpM8.R-XyQs7VKFo8aNbdkNWjZxGHTFk8zpRdPxM8AFPXZco&dib_tag=se&keywords=qblox&qid=1765110496&sprefix=qblo%2Caps%2C244&sr=8-2&th=1";
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

  const headerClass = cn(
    "sticky top-0 z-50 w-full backdrop-blur supports-backdrop-filter:bg-background/75 shadow-xl transition-colors",
    isOverHero
      ? "xl:bg-black/25 xl:max-w-3/5 xl:mx-auto xl:mt-4 xl:rounded-xl"
      : "bg-background/85",
  );

  const linkClass = cn(
    "transition hover:text-foreground",
    isOverHero
      ? "xl:text-white xl:hover:underline xl:hover:text-white  text-foreground/80"
      : "text-foreground/80",
  );
  const getQbloxClass = cn(
    "text-sm font-semibold transition hover:underline border  rounded-md py-2 px-4",
    isOverHero
      ? "xl:text-white bg-white/10 xl:hover:text-white xl:hover:underline "
      : "text-primary hover:text-primary/80",
  );
  const GetQblox = () => (
    <Link href={amazonLink} className={getQbloxClass}>
      Get Qblox
    </Link>
  );

  return (
    <header ref={headerRef} className={headerClass}>
      <div className="container mx-auto flex items-center gap-6 py-4 px-4">
        <Link
          href="/"
          className={cn(
            isOverHero ? "xl:hidden" : "flex items-center gap-3 shrink-0",
          )}
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
        <Link
          href="/"
          className={cn(
            isOverHero ? "hidden xl:flex items-center gap-3 shrink-0" : "hidden",
          )}
          aria-label="Qblox home"
        >
          <Image
            src="/logo-white-bg.png"
            alt="Qblox logo"
            width={140}
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
