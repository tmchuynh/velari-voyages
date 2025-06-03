import { ResturantMenu } from "@/lib/types/types";

export const seattleshiroMenu: ResturantMenu[] = [
  {
    title: "Omakase Experience",
    category: [
      {
        name: "Chef's Selection",
        items: [
          {
            name: "Edomae Omakase",
            description:
              "Traditional multi-course sushi experience featuring seasonal specialties (18-20 pieces)",
            price: 185,
          },
          {
            name: "Kaiseki Omakase",
            description:
              "Premium seasonal tasting menu with both cooked dishes and sushi",
            price: 225,
          },
          {
            name: "Sake Pairing",
            description:
              "Curated sake selection to complement your omakase experience",
            price: 85,
          },
        ],
      },
    ],
    description: "Let our master chefs guide your dining experience",
  },
  {
    title: "Sashimi",
    category: [
      {
        name: "Fresh Selections",
        items: [
          {
            name: "Sashimi Moriawase",
            description: "Chef's selection of premium sashimi (15 pieces)",
            price: 68,
          },
          {
            name: "Premium Bluefin Tuna Flight",
            description: "Akami, chutoro, and otoro tasting",
            price: 58,
          },
          {
            name: "Hamachi Usuzukuri",
            description: "Thinly sliced yellowtail with ponzu and jalapeño",
            price: 24,
          },
          {
            name: "Hokkaido Scallop Sashimi",
            description: "Sweet scallops with yuzu kosho and sea salt",
            price: 32,
          },
        ],
      },
    ],
    description: "",
  },
  {
    title: "Nigiri Sushi",
    category: [
      {
        name: "Traditional Edomae Style (2 pieces)",
        items: [
          {
            name: "Bluefin Akami (Lean Tuna)",
            description: "Wild-caught Pacific bluefin tuna",
            price: 14,
          },
          {
            name: "Chutoro (Medium-fatty Tuna)",
            description: "Marbled medium-fatty tuna belly",
            price: 20,
          },
          {
            name: "Otoro (Fatty Tuna)",
            description: "Premium fatty tuna belly",
            price: 24,
          },
          {
            name: "Ikura (Salmon Roe)",
            description: "House-marinated salmon eggs",
            price: 12,
          },
          {
            name: "Uni (Sea Urchin)",
            description: "Santa Barbara or Hokkaido (seasonal)",
            price: 22,
          },
          {
            name: "A5 Wagyu Beef",
            description: "Lightly torched Japanese wagyu with nikiri sauce",
            price: 26,
          },
        ],
      },
    ],
    description: "",
  },
  {
    title: "Rolls",
    category: [
      {
        name: "Maki Sushi",
        items: [
          {
            name: "Negitoro Maki",
            description: "Fatty tuna with green onion",
            price: 18,
          },
          {
            name: "Alaskan King Crab Roll",
            description: "Fresh crab meat, avocado, cucumber",
            price: 22,
          },
          {
            name: "Spicy Salmon Roll",
            description: "Wild salmon with spicy sauce and cucumber",
            price: 16,
          },
          {
            name: "Shiro's Special Roll",
            description:
              "Yellowtail, albacore, avocado, and tobiko with special sauce",
            price: 24,
          },
        ],
      },
    ],
    description: "",
  },
  {
    title: "Hot Dishes",
    category: [
      {
        name: "Kitchen Specialties",
        items: [
          {
            name: "Black Cod Kasuzuke",
            description: "Miso-marinated black cod with pickled vegetables",
            price: 32,
          },
          {
            name: "Tempura Moriawase",
            description:
              "Assortment of lightly battered seafood and vegetables",
            price: 28,
          },
          {
            name: "Wagyu Ishiyaki",
            description: "A5 wagyu beef cooked tableside on hot stone",
            price: 42,
          },
          {
            name: "Chawanmushi",
            description: "Savory egg custard with seafood and mushrooms",
            price: 16,
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
            name: "Matcha Green Tea Crème Brûlée",
            description: "Creamy custard infused with premium matcha",
            price: 12,
          },
          {
            name: "Mochi Ice Cream",
            description:
              "Assorted flavors of traditional Japanese rice cake with ice cream",
            price: 10,
          },
          {
            name: "Seasonal Fruit with Yuzu Sorbet",
            description: "Fresh fruit selection with house-made yuzu sorbet",
            price: 14,
          },
        ],
      },
    ],
    description: "",
  },
];
