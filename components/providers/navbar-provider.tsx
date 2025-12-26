"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useRef,
  ReactNode,
} from "react";
import { usePathname } from "next/navigation";

type NavbarContextType = {
  isOverHero: boolean;
};

const NavbarContext = createContext<NavbarContextType>({ isOverHero: true });

export function NavbarProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [isOverHero, setIsOverHero] = useState(pathname === "/");
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinelEl = sentinelRef.current;
    if (!sentinelEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsOverHero(pathname === "/" && entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
      }
    );

    observer.observe(sentinelEl);

    return () => observer.disconnect();
  }, [pathname]);

  return (
    <NavbarContext.Provider value={{ isOverHero }}>
      <div
        ref={sentinelRef}
        className="absolute top-0 left-0 w-full -z-50 pointer-events-none h-[30vh]"
        aria-hidden="true"
      />

      {children}
    </NavbarContext.Provider>
  );
}

export const useNavbar = () => useContext(NavbarContext);
