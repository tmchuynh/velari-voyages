"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "ocean" | "gradient" | "neon" | "sunset" | "forest";
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
    gradient:
      "bg-gradient-to-br from-sky-700/10 via-sky-400/10 to-blue-500/20 border-gradient-to-r border-teal-500/20 text-foreground shadow-md",
    neon: "bg-gray-900 border-cyan-400/50 text-cyan-100 shadow-lg shadow-cyan-400/25",
    sunset:
      "bg-gradient-to-br from-orange-500/10 via-red-500/10 to-pink-500/10 border-orange-400/30 text-foreground shadow-lg shadow-orange-200/20",
    forest:
      "bg-gradient-to-br from-green-600/10 via-emerald-500/10 to-teal-600/10 border-green-500/30 text-foreground shadow-md shadow-green-200/20",
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
}: React.HTMLAttributes<HTMLHeadingElement> & {
  variant?: CardProps["variant"];
}) {
  const variantTextClasses = {
    default: "text-foreground",
    ocean: "text-foreground",
    glass: "text-white",
    gradient: "text-purple-900 dark:text-purple-100",
    neon: "text-cyan-100",
    minimal: "text-gray-900",
    elevated: "text-gray-900",
    sunset: "text-orange-900 dark:text-orange-100",
    forest: "text-green-900 dark:text-green-100",
    dark: "text-gray-100",
    metallic: "text-slate-800",
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
}: React.HTMLAttributes<HTMLParagraphElement> & {
  variant?: CardProps["variant"];
}) {
  const variantTextClasses = {
    default: "text-muted-foreground",
    ocean: "text-muted-foreground",
    glass: "text-white/80",
    gradient: "text-purple-700 dark:text-purple-200",
    neon: "text-cyan-200",
    minimal: "text-gray-600",
    elevated: "text-gray-600",
    sunset: "text-orange-700 dark:text-orange-200",
    forest: "text-green-700 dark:text-green-200",
    dark: "text-gray-300",
    metallic: "text-slate-600",
  };

  return (
    <p
      className={cn("text-sm", variantTextClasses[variant], className)}
      {...props}
    />
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
    sunset: "text-orange-800 dark:text-orange-100",
    forest: "text-green-800 dark:text-green-100",
    dark: "text-gray-200",
    metallic: "text-slate-700",
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

export function SunsetCard({ children, className, ...props }: CardProps) {
  return (
    <Card
      variant="sunset"
      className={cn(
        "hover:shadow-orange-300/40 hover:border-orange-400/50",
        className
      )}
      {...props}
    >
      {children}
    </Card>
  );
}

export function ForestCard({ children, className, ...props }: CardProps) {
  return (
    <Card
      variant="forest"
      className={cn(
        "hover:shadow-green-300/40 hover:border-green-500/50",
        className
      )}
      {...props}
    >
      {children}
    </Card>
  );
}
