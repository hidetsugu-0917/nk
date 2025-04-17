"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FlipCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: [React.ReactNode, React.ReactNode];
}

interface FlipCardContextValue {
  isFlipped: boolean;
  setIsFlipped: React.Dispatch<React.SetStateAction<boolean>>;
}

const FlipCardContext = React.createContext<FlipCardContextValue | undefined>(
  undefined
);

export function FlipCard({ children, className, ...props }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = React.useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <FlipCardContext.Provider value={{ isFlipped, setIsFlipped }}>
      <div
        className={cn(
          "relative cursor-pointer perspective-1000",
          className
        )}
        onClick={handleClick}
        {...props}
      >
        <div
          className={cn(
            "relative h-full w-full transition-transform duration-700 transform-style-3d",
            isFlipped ? "rotate-y-180" : ""
          )}
        >
          {children}
        </div>
      </div>
    </FlipCardContext.Provider>
  );
}

interface FlipCardSideProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function FlipCardFront({ children, className, ...props }: FlipCardSideProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 h-full w-full backface-hidden",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function FlipCardBack({ children, className, ...props }: FlipCardSideProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 h-full w-full rotate-y-180 backface-hidden",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}