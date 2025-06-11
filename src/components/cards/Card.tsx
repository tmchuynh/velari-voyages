"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glass" | "ocean" | "elevated";
  interactive?: boolean;
  children: React.ReactNode;
}

export function Card({
  className,
  variant = "default",
  interactive = false,
  children,
  ...props
}: CardProps) {
  const baseClasses = "rounded-lg border transition-all duration-300";

  const variantClasses = {
    default: "bg-card text-card-foreground border-border shadow-sm",
    glass: "glass border-white/20 text-foreground",
    ocean:
      "bg-gradient-to-br from-primary/5 to-secondary/5 border-accent/20 text-foreground",
    elevated:
      "bg-card text-card-foreground border-border shadow-lg hover:shadow-xl",
  };

  const interactiveClasses = interactive
    ? "micro-interaction cursor-pointer hover:border-accent/50"
    : "";

  return (
    <div
      className={cn(
        baseClasses,
        variantClasses[variant],
        interactiveClasses,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    />
  );
}

export function CardTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "text-lg font-semibold leading-none tracking-tight",
        className
      )}
      {...props}
    />
  );
}

export function CardDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-sm text-muted-foreground", className)} {...props} />
  );
}

export function CardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6 pt-0", className)} {...props} />;
}

export function CardFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex items-center p-6 pt-0", className)} {...props} />
  );
}

// Animated card variants
export function AnimatedCard({
  children,
  className,
  delay = 0,
  ...props
}: CardProps & { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
    >
      <Card
        className={cn("transition-transform duration-300", className)}
        interactive
        {...props}
      >
        {children}
      </Card>
    </motion.div>
  );
}

export function OceanCard({ children, className, ...props }: CardProps) {
  return (
    <Card
      variant="ocean"
      className={cn("border-gradient-ocean hover:shadow-accent/20", className)}
      {...props}
    >
      {children}
    </Card>
  );
}

export function GlassCard({ children, className, ...props }: CardProps) {
  return (
    <Card
      variant="glass"
      className={cn("backdrop-blur-md", className)}
      {...props}
    >
      {children}
    </Card>
  );
}
