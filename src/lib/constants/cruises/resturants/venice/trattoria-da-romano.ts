import { ResturantMenu } from "@/lib/types/types";

export const venicetrattoriaDaRomanoMenu: ResturantMenu[] = [
  {
    title: "Antipasti",
    category: [
      {
        name: "Starters",
        items: [
          {
            name: "Antipasto di Pesce",
            description: "Selection of local seafood appetizers",
            price: 28,
          },
          {
            name: "Crostini con Baccalà",
            description: "Toasted bread with creamed salt cod",
            price: 15,
          },
          {
            name: "Insalata di Mare",
            description: "Seafood salad with octopus, squid, and shrimp",
            price: 22,
          },
        ],
      },
    ],
    description: "",
  },
  {
    title: "Risotti",
    category: [
      {
        name: "Risotto Specialties",
        items: [
          {
            name: "Risotto di Gò",
            description: "Famous Burano risotto made with goby fish broth",
            price: 26,
          },
          {
            name: "Risotto al Nero di Seppia",
            description: "Black squid ink risotto",
            price: 24,
          },
          {
            name: "Risotto ai Frutti di Mare",
            description: "Seafood risotto with clams, mussels and shrimp",
            price: 28,
          },
        ],
      },
    ],
    description: "",
  },
  {
    title: "Secondi",
    category: [
      {
        name: "Main Courses",
        items: [
          {
            name: "Branzino alla Griglia",
            description: "Grilled sea bass with olive oil and herbs",
            price: 32,
          },
          {
            name: "Frittura di Pesce dell'Adriatico",
            description: "Mixed fried fish from the Adriatic Sea",
            price: 30,
          },
          {
            name: "Anguilla ai Ferri",
            description: "Grilled eel, a local specialty",
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
            name: "Bussolai Buranei",
            description: "Traditional Burano butter cookies",
            price: 10,
          },
          {
            name: "Torta della Nonna",
            description: "Grandmother's cake with pine nuts and custard",
            price: 12,
          },
        ],
      },
    ],
    description: "",
  },
];
