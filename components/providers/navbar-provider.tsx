"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type NavbarContextType = {
  isOverHero: boolean;
};

const NavbarContext = createContext<NavbarContextType>({ isOverHero: true });

export function NavbarProvider({ children }: { children: ReactNode }) {
  const [isOverHero, setIsOverHero] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Simple threshold: 70% of viewport height
      setIsOverHero(window.scrollY < window.innerHeight * 0.2);
    };

    handleScroll(); // Set initial state
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <NavbarContext.Provider value={{ isOverHero }}>
      {children}
    </NavbarContext.Provider>
  );
}

export const useNavbar = () => useContext(NavbarContext);
