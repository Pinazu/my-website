// src/components/ui/gradient.tsx
import * as React from "react";
import { cn } from "@/lib/utils";

interface GradientProps extends React.ComponentProps<"div"> {
  gradient: string;
}

export function Gradient({
  gradient,
  className,
  ...props
}: GradientProps) {
  return (
    <div
      className={cn(className)}
      style={{ backgroundImage: gradient }}
      {...props}
    />
  );
}
