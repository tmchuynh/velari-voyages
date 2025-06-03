import { ResturantMenu } from "@/lib/types/types";

export const galvestongaidoMenu: ResturantMenu[] = [
  {
    title: "Appetizers",
    category: [
      {
        name: "Cold Starters",
        items: [
          {
            name: "Shrimp Cocktail",
            description: "Gulf shrimp with cocktail sauce and lemon",
            price: 14.99,
          },
          {
            name: "Ceviche",
            description:
              "Fresh Gulf fish, lime, cilantro, avocado and pico de gallo",
            price: 16.99,
          },
          {
            name: "Oysters on the Half Shell",
            description:
              "Half dozen fresh Gulf oysters with mignonette and cocktail sauce",
            price: 50,
          },
        ],
      },
      {
        name: "Hot Appetizers",
        items: [
          {
            name: "Crab Cakes",
            description: "Lump blue crab with remoulade sauce",
            price: 18.99,
          },
          {
            name: "Oysters Rockefeller",
            description: "Half dozen baked with spinach, bacon and hollandaise",
            price: 19.99,
          },
          {
            name: "Calamari",
            description: "Flash-fried with marinara and lemon aioli",
            price: 14.99,
          },
        ],
      },
    ],
    description: "",
  },
  {
    title: "Soups & Salads",
    category: [
      {
        name: "Signature Soups",
        items: [
          {
            name: "Seafood Gumbo",
            description: "Gaido's famous recipe with Gulf shrimp and crab",
            price: 14,
          },
          {
            name: "Clam Chowder",
            description: "New England style with potatoes and bacon",
            price: 12,
          },
        ],
      },
      {
        name: "Fresh Salads",
        items: [
          {
            name: "House Salad",
            description:
              "Mixed greens, tomato, cucumber, red onion and house dressing",
            price: 8.99,
          },
          {
            name: "Caesar Salad",
            description: "Romaine, croutons, parmesan and classic dressing",
            price: 9.99,
          },
          {
            name: "Shrimp Remoulade Salad",
            description:
              "Boiled Gulf shrimp over greens with remoulade dressing",
            price: 16.99,
          },
        ],
      },
    ],
    description: "",
  },
  {
    title: "Seafood Entrees",
    category: [
      {
        name: "Gaido's Classics",
        items: [
          {
            name: "Snapper Gaido",
            description:
              "Grilled Gulf snapper topped with lump crab in lemon butter",
            price: 34.99,
          },
          {
            name: "Shrimp Platter",
            description:
              "Fried, grilled and scampi-style Gulf shrimp with rice pilaf",
            price: 29.99,
          },
          {
            name: "Seafood Platter",
            description:
              "Fried shrimp, fish, oysters, stuffed crab and hush puppies",
            price: 32.99,
          },
          {
            name: "Blackened Redfish",
            description: "Cajun seasoned with crawfish étouffée",
            price: 31.99,
          },
        ],
      },
      {
        name: "Fresh Catch",
        items: [
          {
            name: "Gulf Snapper",
            description: "Prepared grilled, blackened or broiled",
            price: 50,
          },
          {
            name: "Mahi Mahi",
            description: "Served with seasonal vegetables and choice of potato",
            price: 28.99,
          },
          {
            name: "Grilled Salmon",
            description: "Atlantic salmon with lemon dill butter",
            price: 26,
          },
        ],
      },
    ],
    description: "",
  },
  {
    title: "Land Favorites",
    category: [
      {
        name: "From the Grill",
        items: [
          {
            name: "Filet Mignon",
            description: "8 oz center cut with garlic herb butter",
            price: 42.99,
          },
          {
            name: "Surf & Turf",
            description: "6 oz filet with grilled Gulf shrimp",
            price: 49.99,
          },
          {
            name: "Chicken Piccata",
            description: "Pan-seared with capers, lemon and white wine sauce",
            price: 24,
          },
        ],
      },
    ],
    description: "",
  },
  {
    title: "Sides",
    category: [
      {
        name: "A La Carte",
        items: [
          {
            name: "Loaded Baked Potato",
            description: "With butter, sour cream, bacon and chives",
            price: 5.99,
          },
          {
            name: "Asparagus",
            description: "Grilled with hollandaise",
            price: 7.99,
          },
          {
            name: "Garlic Mashed Potatoes",
            description: "Creamy whipped potatoes with roasted garlic",
            price: 4.99,
          },
          {
            name: "Mac & Cheese",
            description: "Baked with a four-cheese blend",
            price: 6.99,
          },
        ],
      },
    ],
    description: "",
  },
  {
    title: "Desserts",
    category: [
      {
        name: "Sweet Finishes",
        items: [
          {
            name: "Pecan Ball",
            description:
              "Vanilla ice cream rolled in pecans with chocolate sauce",
            price: 8.99,
          },
          {
            name: "Key Lime Pie",
            description: "House-made with graham cracker crust",
            price: 7.99,
          },
          {
            name: "Bread Pudding",
            description: "Warm with bourbon sauce and vanilla ice cream",
            price: 8.99,
          },
          {
            name: "Chocolate Mousse Cake",
            description: "Rich chocolate cake with mousse layers",
            price: 9.99,
          },
        ],
      },
    ],
    description: "",
  },
];
