import { ResturantMenu } from "@/lib/types/types";

export const tokyonarisawaMenu: ResturantMenu[] = [
  {
    title: "Seasonal Experience",
    category: [
      {
        name: "Chef's Menu",
        items: [
          {
            name: "Innovative Satoyama Cuisine",
            description:
              "Chef Yoshihiro Narisawa's multi-course tasting menu featuring sustainable Japanese ingredients, French techniques, and artistic presentation",
            price: 45000,
          },
          {
            name: "Wine Pairing",
            description:
              "Sommelier-selected wines from around the world to complement each course",
            price: 25000,
          },
          {
            name: "Non-Alcoholic Pairing",
            description:
              "Handcrafted juices, teas, and infusions designed to accompany the tasting menu",
            price: 15000,
          },
        ],
      },
    ],
    description:
      "The menu changes with the seasons to reflect Japan's natural bounty and the concept of 'Beneficial Satoyama'",
  },
  {
    title: "First Expressions",
    category: [
      {
        name: "Opening Dishes",
        items: [
          {
            name: "Bread of the Forest",
            description:
              "Signature bread course prepared tableside, capturing the essence of the Japanese forest",
            price: 0,
          },
          {
            name: "Gifting from the Sea",
            description:
              "Seasonal sashimi creation with pristine seafood from Japanese waters",
            price: 0,
          },
          {
            name: "Soil Soup",
            description:
              "Innovative clear consommé made from purified soil, vegetables, and herbs",
            price: 0,
          },
        ],
      },
    ],
    description: "These items are part of the tasting menu experience",
  },
  {
    title: "Land & Sea Compositions",
    category: [
      {
        name: "Main Creations",
        items: [
          {
            name: "Wagyu Essence",
            description:
              "Japanese Wagyu beef prepared with sustainable techniques and forest elements",
            price: 0,
          },
          {
            name: "Langoustine & Ash",
            description:
              "Langoustine encased in charcoal leek ash, embodying fire and ocean",
            price: 0,
          },
          {
            name: "Sustainable Fish",
            description:
              "Locally-sourced fish prepared with minimal cooking to preserve its natural flavors",
            price: 0,
          },
        ],
      },
    ],
    description: "These items are part of the tasting menu experience",
  },
  {
    title: "Sweet Conclusions",
    category: [
      {
        name: "Desserts",
        items: [
          {
            name: "Matcha Forest",
            description:
              "Green tea landscape with textural elements representing the Japanese woodland",
            price: 0,
          },
          {
            name: "Satoyama Sweets",
            description:
              "Seasonal fruits and herbs transformed into ethereal sweet expressions",
            price: 0,
          },
          {
            name: "Saké Kasu",
            description:
              "Dessert featuring saké brewing byproducts, highlighting Japanese craftsmanship and sustainability",
            price: 0,
          },
        ],
      },
    ],
    description: "These items are part of the tasting menu experience",
  },
];
