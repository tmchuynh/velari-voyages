"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useState } from "react";
import { Card, CardContent, CardHeader } from "./ui/card";

interface OpeningHours {
  monday?: string;
  tuesday?: string;
  wednesday?: string;
  thursday?: string;
  friday?: string;
  saturday?: string;
  sunday?: string;
}

interface RestaurantHoursProps {
  openingHours?: OpeningHours;
  className?: string;
  variant?: "card" | "page" | "compact";
}

export default function RestaurantHours({
  openingHours,
  className,
  variant = "card", // Default to card variant
}: RestaurantHoursProps) {
  const { theme } = useTheme();
  const isDarkMode =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  const [expanded, setExpanded] = useState(false);

  // Get the current day of the week
  const getCurrentDay = () => {
    const days = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ];
    const today = new Date().getDay(); // 0 is Sunday, 1 is Monday, etc.
    return days[today];
  };

  const currentDay = getCurrentDay();

  const days = [
    { name: "monday", label: "Monday", hours: openingHours?.monday },
    { name: "tuesday", label: "Tuesday", hours: openingHours?.tuesday },
    { name: "wednesday", label: "Wednesday", hours: openingHours?.wednesday },
    { name: "thursday", label: "Thursday", hours: openingHours?.thursday },
    { name: "friday", label: "Friday", hours: openingHours?.friday },
    { name: "saturday", label: "Saturday", hours: openingHours?.saturday },
    { name: "sunday", label: "Sunday", hours: openingHours?.sunday },
  ];

  // Extract today's schedule for the compact version
  const todaySchedule = days.find((day) => day.name === currentDay);

  // Card variant - the current implementation
  if (variant === "card") {
    return (
      <div
        className={cn("flex flex-col justify-between mt-4 text-sm", className)}
      >
        <h5>Hours:</h5>
        <p className="text-xs">
          Here’s when we’re open! Be sure to check back for any holiday or
          special hours.
        </p>
        {days.map((day) => (
          <p
            key={day.name}
            className={cn("", {
              "font-extrabold uppercase": currentDay === day.name,
              "text-tertiary": isDarkMode && currentDay === day.name,
              "text-accent": !isDarkMode && currentDay === day.name,
            })}
          >
            <strong>{day.label}: </strong>
            {day.hours}
          </p>
        ))}
      </div>
    );
  }

  // Page variant - more spacious for dedicated page sections
  if (variant === "page") {
    return (
      <Card
        className={cn("space-y-3 border rounded-lg bg-card h-full", className)}
      >
        <CardHeader>
          <h2 className="mb-0">Restaurant Hours</h2>
          <h5>
            Our current operating hours. Please note that times may vary on
            holidays or during special events.
          </h5>
        </CardHeader>
        <CardContent className="gap-4 grid grid-cols-1 md:grid-cols-2">
          {days.map((day) => (
            <div
              key={day.name}
              className={cn("p-1 rounded-md", {
                "bg-primary/10 border-l-4 border-primary":
                  currentDay === day.name,
              })}
            >
              <p className="flex justify-between items-center px-2">
                <span
                  className={cn("font-medium", {
                    "font-bold": currentDay === day.name,
                    "text-tertiary": isDarkMode && currentDay === day.name,
                    "text-accent": !isDarkMode && currentDay === day.name,
                  })}
                >
                  {day.label}
                  {currentDay === day.name && (
                    <span className="ml-2 text-sm">(Today)</span>
                  )}
                </span>
                <span>{day.hours || "Closed"}</span>
              </p>
            </div>
          ))}
        </CardContent>
      </Card>
    );
  }

  // Compact variant - minimalist with expand option
  return (
    <div className={cn("text-sm", className)}>
      <div className="flex justify-between items-center mb-2">
        <h5 className="font-medium">Hours</h5>
        <p className="text-xs">
          Below are our standard hours of operation. Holiday or special event
          hours may differ.
        </p>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-primary text-xs hover:underline"
        >
          {expanded ? "Show Less" : "Show All"}
        </button>
      </div>

      <div className="bg-card/50 mb-2 p-3 border rounded-md">
        <p className="font-semibold">
          Today ({todaySchedule?.label}):{" "}
          <span>{todaySchedule?.hours || "Closed"}</span>
        </p>
      </div>

      {expanded && (
        <div className="border rounded-md divide-y text-sm overflow-hidden">
          {days
            .filter((day) => day.name !== currentDay)
            .map((day) => (
              <div key={day.name} className="flex justify-between p-2">
                <span>{day.label}</span>
                <span>{day.hours || "Closed"}</span>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
