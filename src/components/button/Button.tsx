"use client";

import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex justify-center items-center disabled:opacity-50 rounded-lg font-medium text-sm whitespace-nowrap disabled:pointer-events-none interactive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow-md",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-border bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        ocean:
          "bg-gradient-to-r from-primary to-secondary text-white hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-xl",
        wave: "bg-gradient-to-r from-accent to-tertiary text-white hover:from-accent/90 hover:to-tertiary/90",
        glass:
          "glass border-white/20 text-foreground hover:bg-white/20 backdrop-blur-md",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-lg px-8",
        xl: "h-12 rounded-lg px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      loading = false,
      icon,
      iconPosition = "left",
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        disabled={isDisabled}
        {...props}
      >
        {loading && (
          <div className="mr-2 border-2 border-current border-t-transparent rounded-full w-4 h-4 animate-spin" />
        )}
        {icon && iconPosition === "left" && !loading && (
          <div className="flex justify-center items-center mr-2 w-4 h-4">
            {icon}
          </div>
        )}
        {children}
        {icon && iconPosition === "right" && !loading && (
          <div className="flex justify-center items-center ml-2 w-4 h-4">
            {icon}
          </div>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

// Specialized ocean-themed buttons
export function OceanButton({ children, className, ...props }: ButtonProps) {
  return (
    <Button variant="ocean" className={cn("ocean-pulse", className)} {...props}>
      {children}
    </Button>
  );
}

export function WaveButton({ children, className, ...props }: ButtonProps) {
  return (
    <Button
      variant="wave"
      className={cn("wave-animation", className)}
      {...props}
    >
      {children}
    </Button>
  );
}

export function GlassButton({ children, className, ...props }: ButtonProps) {
  return (
    <Button variant="glass" className={className} {...props}>
      {children}
    </Button>
  );
}

export { Button, buttonVariants };
