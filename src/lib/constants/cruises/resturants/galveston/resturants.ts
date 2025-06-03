import { Resturant } from "@/lib/types/types";

export const galvestonResturants: Resturant[] = [
  {
    name: "Gaido's Seafood Restaurant",
    description:
      "Historic seafood restaurant serving Gulf Coast classics since 1911",
    cuisine: "American",
    priceRange: "$$$",
    rating: 4.6,
    isPopular: true,
    isReservationsAccepted: true,
    tags: ["seafood", "historic", "local favorite"],
    contactInfo: {
      contactNumber: "+1-409-762-9625",
      contactEmail: "info@gaidos.com",
    },
  },
  {
    name: "Shrimp 'N Stuff",
    description: "Casual eatery known for fresh seafood at affordable prices",
    cuisine: "Cajun",
    priceRange: "$$",
    rating: 4.4,
    isPopular: true,
    tags: ["seafood", "casual", "family-friendly"],
  },
  {
    name: "The Steakhouse at San Luis Resort",
    description:
      "Upscale steakhouse offering premium cuts and fine dining experience",
    cuisine: "American",
    priceRange: "$$$$",
    rating: 4.8,
    isFineDining: true,
    isRomantic: true,
    isReservationsAccepted: true,
    tags: ["steak", "fine dining", "special occasion"],
  },
  {
    name: "BLVD Seafood",
    description:
      "Modern seafood restaurant with local Gulf catches and craft cocktails",
    cuisine: "American",
    priceRange: "$$$",
    rating: 4.5,
    isGlutenFreeFriendly: true,
    isReservationsAccepted: true,
    tags: ["seafood", "cocktails", "local ingredients"],
  },
  {
    name: "La King's Confectionery",
    description:
      "Historic candy shop and ice cream parlor with old-fashioned treats",
    cuisine: "American",
    priceRange: "$",
    rating: 4.7,
    isPopular: true,
    tags: ["dessert", "ice cream", "family-friendly"],
    isIndoorSeating: true,
  },
  {
    name: "Mosquito Cafe",
    description:
      "Charming cafe serving healthy breakfast and lunch options in a historic building",
    cuisine: "American",
    priceRange: "$$",
    rating: 4.6,
    isVegetarianFriendly: true,
    isVeganFriendly: true,
    isGlutenFreeFriendly: true,
    tags: ["breakfast", "lunch", "healthy options"],
  },
];
