import { ReactNode } from "react";

interface AnimatedInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function AnimatedIn({ children, delay = 0, className = "" }: AnimatedInProps) {
  return (
    <span
      className={`inline-block opacity-0 ${className}`}
      style={{
        animation: "fadeInUp 0.6s ease-out forwards",
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </span>
  );
}
