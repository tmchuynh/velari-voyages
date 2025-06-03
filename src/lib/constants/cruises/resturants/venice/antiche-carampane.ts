import { ResturantMenu } from "@/lib/types/types";

export const veniceanticheCarampaneMenu: ResturantMenu[] = [
  {
    title: "Appetizers",
    category: [
      {
        name: "Seafood Starters",
        items: [
          {
            name: "Sarde in Saor",
            description:
              "Sweet and sour sardines with onions, pine nuts and raisins",
            price: 17,
          },
          {
            name: "Baccalà Mantecato",
            description: "Creamed salt cod served with grilled polenta",
            price: 22,
          },
          {
            name: "Gamberetti with Polenta",
            description: "Fresh Venetian lagoon shrimp with soft polenta",
            price: 24,
          },
        ],
      },
    ],
    description: "",
  },
  {
    title: "Primi Piatti",
    category: [
      {
        name: "Pasta & Risotto",
        items: [
          {
            name: "Spaghetti alle Vongole",
            description: "Spaghetti with fresh clams in white wine sauce",
            price: 26,
          },
          {
            name: "Risotto di Gò",
            description: "Traditional Venetian risotto with goby fish",
            price: 28,
          },
          {
            name: "Tagliolini con Granchio",
            description: "Homemade thin pasta with fresh crab meat",
            price: 30,
          },
        ],
      },
    ],
    description: "",
  },
  {
    title: "Secondi Piatti",
    category: [
      {
        name: "Main Courses",
        items: [
          {
            name: "Fritto Misto di Pesce",
            description: "Mixed fried seafood platter with calamari and prawns",
            price: 32,
          },
          {
            name: "Rombo al Forno",
            description: "Oven-baked turbot with potatoes and herbs",
            price: 36,
          },
          {
            name: "Moleche Fritte",
            description:
              "Seasonal soft-shell crabs, lightly fried (when available)",
            price: 34,
          },
        ],
      },
    ],
    description: "",
  },
  {
    title: "Dolci",
    category: [
      {
        name: "Desserts",
        items: [
          {
            name: "Tiramisu della Casa",
            description: "House-made traditional tiramisu",
            price: 12,
          },
          {
            name: "Panna Cotta con Frutti di Bosco",
            description: "Cream pudding with mixed berries",
            price: 14,
          },
        ],
      },
    ],
    description: "",
  },
];
