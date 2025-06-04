"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

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
}

export default function RestaurantHours({
  openingHours,
  className,
}: RestaurantHoursProps) {
  const { theme } = useTheme();
  const isDarkMode =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

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

  return (
    <div
      className={cn("flex flex-col justify-between mt-4 text-sm", className)}
    >
      <h5>Hours:</h5>
      <p
        className={cn("", {
          "font-extrabold uppercase": currentDay === "monday",
          "text-fancy": isDarkMode && currentDay === "monday",
          "text-accent": !isDarkMode && currentDay === "monday",
        })}
      >
        <strong>Monday: </strong>
        {openingHours?.monday}
      </p>
      <p
        className={cn("", {
          "font-extrabold uppercase": currentDay === "tuesday",
          "text-fancy": isDarkMode && currentDay === "tuesday",
          "text-accent": !isDarkMode && currentDay === "tuesday",
        })}
      >
        <strong>Tuesday: </strong>
        {openingHours?.tuesday}
      </p>
      <p
        className={cn("", {
          "font-extrabold uppercase": currentDay === "wednesday",
          "text-fancy": isDarkMode && currentDay === "wednesday",
          "text-accent": !isDarkMode && currentDay === "wednesday",
        })}
      >
        <strong>Wednesday: </strong>
        {openingHours?.wednesday}
      </p>
      <p
        className={cn("", {
          "font-extrabold uppercase": currentDay === "thursday",
          "text-fancy": isDarkMode && currentDay === "thursday",
          "text-accent": !isDarkMode && currentDay === "thursday",
        })}
      >
        <strong>Thursday: </strong>
        {openingHours?.thursday}
      </p>
      <p
        className={cn("", {
          "font-extrabold uppercase": currentDay === "friday",
          "text-fancy": isDarkMode && currentDay === "friday",
          "text-accent": !isDarkMode && currentDay === "friday",
        })}
      >
        <strong>Friday: </strong>
        {openingHours?.friday}
      </p>
      <p
        className={cn("", {
          "font-extrabold uppercase": currentDay === "saturday",
          "text-fancy": isDarkMode && currentDay === "saturday",
          "text-accent": !isDarkMode && currentDay === "saturday",
        })}
      >
        <strong>Saturday: </strong>
        {openingHours?.saturday}
      </p>
      <p
        className={cn("", {
          "font-extrabold uppercase": currentDay === "sunday",
          "text-fancy": isDarkMode && currentDay === "sunday",
          "text-accent": !isDarkMode && currentDay === "sunday",
        })}
      >
        <strong>Sunday: </strong>
        {openingHours?.sunday}
      </p>
    </div>
  );
}
