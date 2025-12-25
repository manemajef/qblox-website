import { ReactNode } from "react";

interface AnimatedInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  splitChars?: boolean;
  charDelay?: number;
}

export function AnimatedIn({
  children,
  delay = 0,
  className = "",
  splitChars = false,
  charDelay = 30,
}: AnimatedInProps) {
  // If splitChars is enabled and children is a string, split into characters
  if (splitChars && typeof children === "string") {
    const words = children.split(" ");
    let charIndex = 0;

    return (
      <span className={className}>
        {words.map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block whitespace-nowrap">
            {word.split("").map((char, index) => {
              const currentCharIndex = charIndex++;
              return (
                <span
                  key={index}
                  className="inline-block opacity-0"
                  style={{
                    animation: "fadeInUp 0.4s ease-out forwards",
                    animationDelay: `${delay + currentCharIndex * charDelay}ms`,
                  }}
                >
                  {char}
                </span>
              );
            })}
            {wordIndex < words.length - 1 && (
              <span
                className="inline-block opacity-0"
                style={{
                  animation: "fadeInUp 0.4s ease-out forwards",
                  animationDelay: `${delay + charIndex++ * charDelay}ms`,
                }}
              >
                {"\u00A0"}
              </span>
            )}
          </span>
        ))}
      </span>
    );
  }

  // Default behavior - animate the whole element
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
