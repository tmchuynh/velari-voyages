"use client";

import React from "react";
import { motion } from "framer-motion";

interface LoadingProps {
  size?: "sm" | "md" | "lg";
  text?: string;
  variant?: "dots" | "wave" | "pulse" | "spinner";
  className?: string;
}

export default function Loading({
  size = "md",
  text,
  variant = "wave",
  className = "",
}: LoadingProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  };

  const containerSizeClasses = {
    sm: "gap-1",
    md: "gap-2",
    lg: "gap-3",
  };

  const textSizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  const renderDots = () => (
    <div className={`flex items-center ${containerSizeClasses[size]}`}>
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className={`${sizeClasses[size]} bg-primary rounded-full`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: index * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );

  const renderWave = () => (
    <div className={`flex items-end ${containerSizeClasses[size]}`}>
      {[0, 1, 2, 3, 4].map((index) => (
        <motion.div
          key={index}
          className={`w-1 bg-gradient-to-t from-primary to-accent rounded-full`}
          animate={{
            height: ["8px", "24px", "8px"],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            delay: index * 0.1,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );

  const renderPulse = () => (
    <motion.div
      className={`${sizeClasses[size]} border-2 border-primary rounded-full`}
      animate={{
        scale: [1, 1.5, 1],
        opacity: [1, 0.3, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );

  const renderSpinner = () => (
    <motion.div
      className={`${sizeClasses[size]} border-2 border-muted border-t-primary rounded-full`}
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );

  const renderVariant = () => {
    switch (variant) {
      case "dots":
        return renderDots();
      case "wave":
        return renderWave();
      case "pulse":
        return renderPulse();
      case "spinner":
        return renderSpinner();
      default:
        return renderWave();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`flex flex-col items-center justify-center gap-4 min-h-screen ${className}`}
      role="status"
      aria-label="Loading"
    >
      {renderVariant()}
      {text && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`${textSizeClasses[size]} text-muted-foreground font-medium`}
        >
          {text}
        </motion.p>
      )}
    </motion.div>
  );
}

// Ocean-themed loading component
export function OceanLoading({
  className = "",
  text = "Navigating the seas...",
}: {
  className?: string;
  text?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className={`flex flex-col items-center justify-center gap-6 p-8 ${className}`}
      role="status"
      aria-label="Loading"
    >
      {/* Animated waves */}
      <div className="relative w-16 h-16">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="absolute inset-0 border-2 border-accent rounded-full"
            animate={{
              scale: [1, 2, 1],
              opacity: [1, 0, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: index * 1,
              ease: "easeInOut",
            }}
          />
        ))}
        <div className="absolute inset-4 bg-gradient-to-br from-primary to-secondary rounded-full" />
      </div>

      {/* Text with wave animation */}
      <motion.div
        className="text-center"
        animate={{ y: [0, -5, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <p className="font-medium text-lg gradient-ocean">{text}</p>
        <div className="flex justify-center gap-1 mt-2">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="bg-accent rounded-full w-1 h-1"
              animate={{
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.3,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
