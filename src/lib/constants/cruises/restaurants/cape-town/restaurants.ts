import { Restaurant } from "@/lib/types/types";

export const capeTownRestaurants: Restaurant[] = [
  {
    name: "The Test Kitchen",
    description:
      "Award-winning fine dining restaurant showcasing innovative South African cuisine with international influences.",
    cuisine: "African",
    priceRange: "$$$$",
    rating: 4.9,
    openingHours: {
      monday: "Closed",
      tuesday: "18:00-23:00",
      wednesday: "18:00-23:00",
      thursday: "18:00-23:00",
      friday: "18:00-23:00",
      saturday: "18:00-23:00",
      sunday: "Closed",
    },
    contactInfo: {
      contactNumber: "+27 21 447 2337",
      contactEmail: "reservations@thetestkitchen.co.za",
    },
    isVegetarianFriendly: true,
    isVeganFriendly: true,
    isGlutenFreeFriendly: true,
    isHalalFriendly: false,
    isKosherFriendly: false,
    isFineDining: true,
    isAdultOnly: false,
    isIndoorSeating: true,
    isReservationsAccepted: true,
    isRomantic: true,
    isPopular: true,
  },
];
