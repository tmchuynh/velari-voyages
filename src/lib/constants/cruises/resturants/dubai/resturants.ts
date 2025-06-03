import { Resturant } from "@/lib/types/types";

export const dubaiResturants: Resturant[] = [
  {
    name: "Al Mahara",
    description: "Luxurious seafood restaurant with stunning underwater views",
    cuisine: "Middle Eastern",
    priceRange: "$$$$",
    rating: 4.8,
    isFineDining: true,
    isReservationsAccepted: true,
    isRomantic: true,
    isPopular: true,
    tags: ["seafood", "fine dining", "romantic", "views"],
    contactInfo: {
      contactNumber: "+971-4-301-7777",
      contactEmail: "almahara@burjalarab.com",
    },
  },
  {
    name: "Ravi Restaurant",
    description:
      "Iconic Pakistani eatery known for authentic flavors and affordable prices",
    cuisine: "Pakistani",
    priceRange: "$",
    rating: 4.5,
    isPopular: true,
    tags: ["authentic", "local favorite", "casual dining"],
    isHalalFriendly: true,
  },
  {
    name: "Pierchic",
    description:
      "Elegant over-water dining experience with Mediterranean seafood",
    cuisine: "Mediterranean",
    priceRange: "$$$$",
    rating: 4.7,
    isFineDining: true,
    isRomantic: true,
    isReservationsAccepted: true,
    tags: ["seafood", "romantic", "waterfront"],
  },
  {
    name: "Arabian Tea House",
    description: "Traditional Emirati cuisine in a charming heritage setting",
    cuisine: "Middle Eastern",
    priceRange: "$$",
    rating: 4.6,
    isPopular: true,
    isIndoorSeating: true,
    tags: ["authentic", "traditional", "local cuisine"],
  },
  {
    name: "Zuma Dubai",
    description: "Contemporary Japanese cuisine in a sophisticated setting",
    cuisine: "Japanese",
    priceRange: "$$$$",
    rating: 4.9,
    isFineDining: true,
    isPopular: true,
    isReservationsAccepted: true,
    tags: ["sushi", "izakaya", "fine dining"],
  },
];
