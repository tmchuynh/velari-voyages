import { Resturant } from "@/lib/types/types";

export const kielResturants: Resturant[] = [
  {
    name: "Kieler Brauerei",
    description:
      "Traditional German brewery restaurant serving hearty local specialties",
    cuisine: "German",
    priceRange: "$$",
    rating: 4.5,
    isPopular: true,
    isIndoorSeating: true,
    tags: ["beer", "traditional", "local cuisine"],
    openingHours: {
      monday: "12:00-23:00",
      tuesday: "12:00-23:00",
      wednesday: "12:00-23:00",
      thursday: "12:00-23:00",
      friday: "12:00-00:00",
      saturday: "12:00-00:00",
      sunday: "12:00-22:00",
    },
  },
  {
    name: "Foerdeblick",
    description: "Seafood restaurant with panoramic views of Kiel Fjord",
    cuisine: "Scandinavian",
    priceRange: "$$$",
    rating: 4.7,
    isRomantic: true,
    isReservationsAccepted: true,
    tags: ["seafood", "waterfront", "views"],
  },
  {
    name: "Alt Kiel",
    description: "Authentic German cuisine in a cozy historical setting",
    cuisine: "German",
    priceRange: "$$",
    rating: 4.4,
    isIndoorSeating: true,
    tags: ["traditional", "historic", "comfort food"],
  },
  {
    name: "Hafenküche",
    description: "Modern harbor-side restaurant focusing on Baltic seafood",
    cuisine: "German",
    priceRange: "$$$",
    rating: 4.6,
    isPopular: true,
    isReservationsAccepted: true,
    tags: ["seafood", "local", "waterfront"],
  },
  {
    name: "Nordische Stube",
    description:
      "Family-owned restaurant offering traditional Scandinavian dishes",
    cuisine: "Scandinavian",
    priceRange: "$$",
    rating: 4.3,
    isVegetarianFriendly: true,
    tags: ["traditional", "family-friendly", "cozy"],
  },
];
