"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?:
    | "default"
    | "ocean"
    | "glass"
    | "gradient"
    | "neon"
    | "minimal"
    | "elevated";
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
    ocean:
      "bg-gradient-to-br from-primary/5 to-secondary/5 border-accent/20 text-foreground",
    glass:
      "bg-white/10 backdrop-blur-md border-white/20 text-foreground shadow-lg",
    gradient:
      "bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-teal-500/10 border-gradient-to-r border-purple-500/20 text-foreground shadow-md",
    neon: "bg-gray-900 border-cyan-400/50 text-cyan-100 shadow-lg shadow-cyan-400/25",
    minimal:
      "bg-transparent border-gray-200 text-foreground shadow-none hover:shadow-sm",
    elevated:
      "bg-white border-gray-100 text-foreground shadow-xl shadow-gray-200/50",
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
  variant = "default",
  ...props
}: React.HTMLAttributes<HTMLHeadingElement> & { variant?: CardProps["variant"] }) {
  const variantTextClasses = {
    default: "text-foreground",
    ocean: "text-foreground",
    glass: "text-white",
    gradient: "text-purple-900 dark:text-purple-100",
    neon: "text-cyan-100",
    minimal: "text-gray-900",
    elevated: "text-gray-900",
  };

  return (
    <h3
      className={cn(
        "text-lg font-semibold leading-none tracking-tight",
        variantTextClasses[variant],
        className
      )}
      {...props}
    />
  );
}

export function CardDescription({
  className,
  variant = "default",
  ...props
}: React.HTMLAttributes<HTMLParagraphElement> & { variant?: CardProps["variant"] }) {
  const variantTextClasses = {
    default: "text-muted-foreground",
    ocean: "text-muted-foreground",
    glass: "text-white/80",
    gradient: "text-purple-700 dark:text-purple-200",
    neon: "text-cyan-200",
    minimal: "text-gray-600",
    elevated: "text-gray-600",
  };

  return (
    <p className={cn("text-sm", variantTextClasses[variant], className)} {...props} />
  );
}

export function CardContent({
  className,
  variant = "default",
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { variant?: CardProps["variant"] }) {
  const variantTextClasses = {
    default: "text-foreground",
    ocean: "text-foreground",
    glass: "text-white/90",
    gradient: "text-purple-800 dark:text-purple-100",
    neon: "text-cyan-100",
    minimal: "text-gray-800",
    elevated: "text-gray-800",
  };

  return (
    <div
      className={cn("p-6 pt-0", variantTextClasses[variant], className)}
      {...props}
    />
  );
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

export function GradientCard({ children, className, ...props }: CardProps) {
  return (
    <Card
      variant="gradient"
      className={cn("hover:shadow-purple-500/20", className)}
      {...props}
    >
      {children}
    </Card>
  );
}

export function EnhancedGlassCard({
  children,
  className,
  ...props
}: CardProps) {
  return (
    <Card
      variant="glass"
      className={cn("hover:bg-white/20 transition-colors", className)}
      {...props}
    >
      {children}
    </Card>
  );
}

export function NeonCard({ children, className, ...props }: CardProps) {
  return (
    <Card
      variant="neon"
      className={cn(
        "hover:shadow-cyan-400/40 hover:border-cyan-400/70",
        className
      )}
      {...props}
    >
      {children}
    </Card>
  );
}

export function MinimalCard({ children, className, ...props }: CardProps) {
  return (
    <Card
      variant="minimal"
      className={cn("hover:border-gray-300 hover:bg-gray-50/50", className)}
      {...props}
    >
      {children}
    </Card>
  );
}

export function ElevatedCard({ children, className, ...props }: CardProps) {
  return (
    <Card
      variant="elevated"
      className={cn(
        "hover:shadow-2xl hover:shadow-gray-200/60 hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </Card>
  );
}
