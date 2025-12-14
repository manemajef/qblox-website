"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
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
  { label: "Q&A", href: "#faq" },
  { label: "Pricing", href: "#pricing" },
];

const GetQbloxButton = ({ className }: { className?: string }) => (
  <Link
    href={AMAZON_PRODUCT_URL}
    target="_blank"
    rel="noopener noreferrer"
    className={className}
  >
    Get Qblox
  </Link>
);

const NavbarFloat = ({ isVisible }: { isVisible: boolean }) => (
  <div
    className={cn(
      "fixed top-6 left-1/2 -translate-x-1/2 z-[100] hidden xl:block transition-all duration-300",
      isVisible
        ? "opacity-100 scale-100"
        : "opacity-0 scale-95 pointer-events-none"
    )}
  >
    <nav className="flex items-center gap-6 text-sm font-semibold bg-black/40 backdrop-blur-xl px-8 py-3 rounded-full shadow-2xl shadow-black/50">
      <div className="flex items-center gap-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-white/90 hover:text-white hover:scale-105 transition-all border-b border-white/20 hover:border-white/60 leading-none pb-px"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="w-px h-4 bg-white/30 mx-3" />
      <Link
        href={AMAZON_PRODUCT_URL}
        className="text-white/90 hover:text-white text-xs px-3 py-1.5 border border-white/30 rounded-md hover:border-white/50 hover:bg-white/10 transition-all"
      >
        Get Qblox
      </Link>
    </nav>
  </div>
);

export default function Navbar() {
  const [isOverHero, setIsOverHero] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const initObserver = () => {
      const heroSection = document.getElementById("hero-section");
      if (!heroSection || !headerRef.current) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsOverHero(entry.isIntersecting);
        },
        {
          root: null,
          threshold: 0,
          rootMargin: "-80% 0px 0px 0px",
        }
      );

      observer.observe(heroSection);
      return observer;
    };

    let observer = initObserver();
    // Retry briefly to handle hydration timing or server component streaming
    const timer = setTimeout(() => {
      if (!observer) observer = initObserver();
    }, 100);

    return () => {
      observer?.disconnect();
      clearTimeout(timer);
    };
  }, [pathname]);

  return (
    <>
      <NavbarFloat isVisible={isOverHero} />
      <header
        ref={headerRef}
        className={cn(
          "fixed h-16 top-0 z-[100] w-full backdrop-blur supports-backdrop-filter:bg-background/75 shadow-sm transition-all duration-500 bg-background/85",
          isOverHero && "xl:opacity-0 xl:pointer-events-none"
        )}
      >
        <div className="container mx-auto flex items-center gap-6 py-3 px-4">
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

          {/* <div className="ml-auto hidden md:block">
            <GetQbloxButton className="text-sm font-semibold transition hover:underline border border-primary/50 rounded-md py-2 px-4 text-primary hover:text-primary/80" />
          </div> */}
          <div className="ml-auto flex items-center gap-4 ">
            <div className="ml-auto ">
              <GetQbloxButton className="text-sm font-semibold transition hover:underline border border-primary/50 rounded-md py-2 px-4 text-primary hover:text-primary/80" />
            </div>
            <div className="md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="min-w-[200px] z-[101]">
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
        </div>
      </header>
    </>
  );
}
