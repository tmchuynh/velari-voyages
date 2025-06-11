import { BookingStep } from "@/lib/types/booking";
import {
  CheckCircleIcon,
  CreditCardIcon,
  GlobeAltIcon,
  MapPinIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import React from "react";

export const BOOKING_STEPS: BookingStep[] = [
  {
    id: "guest-info",
    title: "Guest Information",
    description: "Number of guests and residency details",
    icon: React.createElement(UserGroupIcon, { className: "w-5 h-5" }),
  },
  {
    id: "passengers",
    title: "Passenger Details",
    description: "Add traveler details and documents",
    icon: React.createElement(UserIcon, { className: "w-5 h-5" }),
  },
  {
    id: "cabin",
    title: "Select Cabin",
    description: "Choose your accommodation",
    icon: React.createElement(MapPinIcon, { className: "w-5 h-5" }),
  },
  {
    id: "preferences",
    title: "Preferences & Extras",
    description: "Dining, excursions, and special requests",
    icon: React.createElement(GlobeAltIcon, { className: "w-5 h-5" }),
  },
  {
    id: "payment",
    title: "Payment",
    description: "Secure payment and billing information",
    icon: React.createElement(CreditCardIcon, { className: "w-5 h-5" }),
  },
  {
    id: "confirmation",
    title: "Confirmation",
    description: "Review and confirm your booking",
    icon: React.createElement(CheckCircleIcon, { className: "w-5 h-5" }),
  },
];
