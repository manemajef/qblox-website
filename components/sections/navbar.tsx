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

type LinkType = {
  label: string;
  href: string;
};

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
const MobileDropdown = ({ links }: { links: LinkType[] }) => (
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
);
export default function Navbar() {
  const { isOverHero } = useNavbar();

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-[100] transition-all duration-500",
        // When over hero on desktop: float in center
        // xl:left-1/2 xl:-translate-x-1/2 xl:w-auto
        isOverHero && "xl:top-6 xl:flex xl:justify-center"
      )}
    >
      <div
        className={cn(
          "h-16 bg-background/85 backdrop-blur shadow-sm transition duration-500",
          // When over hero on desktop: floating glass style
          isOverHero && [
            "xl:h-auto xl:bg-black/40 xl:backdrop-blur-xl",
            "xl:rounded-full xl:shadow-2xl xl:shadow-black/50",
          ]
        )}
      >
        <div
          className={cn(
            "container mx-auto flex items-center gap-6 py-3 px-4",
            // When over hero: compact padding, no container constraints
            isOverHero && "xl:mx-0 xl:px-8"
          )}
        >
          {/* Logo - hidden on xl when over hero */}
          <Link
            href="/"
            className={cn(
              "flex items-center gap-3 shrink-0",
              isOverHero && "xl:hidden"
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
              isOverHero && "xl:font-semibold"
            )}
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-foreground/80 hover:text-foreground transition",
                  // When over hero: white text with underline
                  isOverHero && [
                    "xl:text-white/90 xl:hover:text-white xl:hover:scale-105",
                    "xl:border-b xl:border-white/20 xl:hover:border-white/60",
                    "xl:leading-none xl:pb-px",
                  ]
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Divider - only show when over hero */}
          {isOverHero && (
            <div className="hidden xl:block w-px h-4 bg-white/30 mx-3" />
          )}

          {/* Get Qblox Button */}
          <div className="ml-auto hidden md:block">
            <GetQbloxButton
              className={cn(
                "text-sm font-semibold transition hover:underline border border-primary/50 rounded-md py-2 px-4 text-primary hover:text-primary/80",
                // When over hero: white compact button
                isOverHero && [
                  "xl:text-white/90 xl:hover:text-white xl:text-xs xl:px-3 xl:py-1.5",
                  "xl:border-white/30 xl:hover:border-white/50 xl:hover:bg-white/10",
                ]
              )}
            />
          </div>

          {/* Mobile Menu */}
          <div className="ml-auto md:hidden">
            <MobileDropdown links={links} />
          </div>
        </div>
      </div>
    </header>
  );
}
