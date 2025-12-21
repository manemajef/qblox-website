"use client";
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
import { AMAZON_PRODUCT_URL } from "@/lib/constants";
import { useNavbar } from "../providers/navbar-provider";

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

export default function Navbar() {
  const { isOverHero } = useNavbar();

  return (
    <header
      className={cn(
        "fixed z-[100] transition-all duration-500",
        // Mobile: always at top
        "top-0 left-0 w-full",
        // Desktop: Default to floating (matches initial isOverHero: true)
        // This prevents hydration flash
        "xl:top-6 xl:left-1/2 xl:-translate-x-1/2 xl:w-auto",
        // When scrolled past hero, move to top
        !isOverHero && "xl:top-0 xl:left-0 xl:translate-x-0 xl:w-full"
      )}
    >
      <div
        className={cn(
          "backdrop-blur transition-all duration-500",
          // Mobile styles
          "h-16 bg-background/85 shadow-sm",
          // Desktop: Default to floating styles (matches initial state)
          "xl:h-auto xl:bg-black/40 xl:backdrop-blur-xl xl:rounded-full xl:shadow-2xl xl:shadow-black/50",
          // When scrolled past hero, switch to solid styles
          !isOverHero && "xl:h-16 xl:bg-background/85 xl:backdrop-blur xl:rounded-none xl:shadow-sm"
        )}
      >
        <div
          className={cn(
            "flex items-center gap-6 py-3 px-4",
            // Desktop: Default to compact padding (floating state)
            "xl:mx-0 xl:px-8",
            // When scrolled, use container
            !isOverHero && "xl:container xl:mx-auto xl:px-4"
          )}
        >
          {/* Logo - Hidden by default on xl (floating state), shown when scrolled */}
          <Link
            href="/"
            className={cn(
              "flex items-center gap-3 shrink-0",
              // Default: hidden on xl (floating navbar has no logo)
              "xl:hidden",
              // When scrolled past hero, show logo
              !isOverHero && "xl:flex"
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

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary"
            className={cn(
              "hidden md:flex items-center gap-6 text-sm font-medium",
              // Default: semibold white text (floating state)
              "xl:font-semibold",
              // When scrolled: regular weight
              !isOverHero && "xl:font-medium"
            )}
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "transition",
                  // Default: white text with underline (floating state)
                  "xl:text-white/90 xl:hover:text-white xl:hover:scale-105",
                  "xl:border-b xl:border-white/20 xl:hover:border-white/60",
                  "xl:leading-none xl:pb-px",
                  // When scrolled: dark text, no underline
                  !isOverHero && [
                    "xl:text-foreground/80 xl:hover:text-foreground xl:hover:scale-100",
                    "xl:border-b-0"
                  ]
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Divider - shown by default (floating), hidden when scrolled */}
          <div className={cn(
            "hidden xl:block w-px h-4 bg-white/30 mx-3",
            !isOverHero && "xl:hidden"
          )} />

          {/* Get Qblox Button */}
          <div className="ml-auto hidden md:block">
            <GetQbloxButton
              className={cn(
                "text-sm font-semibold transition hover:underline border rounded-md py-2 px-4",
                // Default: white compact button (floating state)
                "xl:text-white/90 xl:hover:text-white xl:text-xs xl:px-3 xl:py-1.5",
                "xl:border-white/30 xl:hover:border-white/50 xl:hover:bg-white/10",
                // When scrolled: primary colored button
                !isOverHero && [
                  "xl:border-primary/50 xl:text-primary xl:hover:text-primary/80",
                  "xl:text-sm xl:px-4 xl:py-2 xl:hover:bg-transparent"
                ]
              )}
            />
          </div>

          {/* Mobile Menu */}
          <div className="ml-auto md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="min-w-[200px] z-[101]">
                <DropdownMenuLabel className="font-semibold">Menu</DropdownMenuLabel>
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
  );
}
