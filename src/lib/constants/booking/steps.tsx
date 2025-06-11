import {
  UserGroupIcon,
  UserIcon,
  MapPinIcon,
  GlobeAltIcon,
  CreditCardIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import { BookingStep } from "@/lib/types/booking";

export const BOOKING_STEPS: BookingStep[] = [
  {
    id: "guest-info",
    title: "Guest Information",
    description: "Number of guests and residency details",
    icon: <UserGroupIcon className="w-5 h-5" />,
  },
  {
    id: "passengers",
    title: "Passenger Details",
    description: "Add traveler details and documents",
    icon: <UserIcon className="w-5 h-5" />,
  },
  {
    id: "cabin",
    title: "Select Cabin",
    description: "Choose your accommodation",
    icon: <MapPinIcon className="w-5 h-5" />,
  },
  {
    id: "preferences",
    title: "Preferences & Extras",
    description: "Dining, excursions, and special requests",
    icon: <GlobeAltIcon className="w-5 h-5" />,
  },
  {
    id: "payment",
    title: "Payment",
    description: "Secure payment and billing information",
    icon: <CreditCardIcon className="w-5 h-5" />,
  },
  {
    id: "confirmation",
    title: "Confirmation",
    description: "Review and confirm your booking",
    icon: <CheckCircleIcon className="w-5 h-5" />,
  },
];
