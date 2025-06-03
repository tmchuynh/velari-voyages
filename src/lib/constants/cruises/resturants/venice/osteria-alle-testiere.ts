import { ResturantMenu } from "@/lib/types/types";

export const veniceosteriaAlleTestiereMenu: ResturantMenu[] = [
  {
    title: "Antipasti",
    category: [
      {
        name: "Appetizers",
        items: [
          {
            name: "Capesante Gratinate",
            description: "Gratinated scallops with herbs and breadcrumbs",
            price: 22,
          },
          {
            name: "Moeche Fritte",
            description: "Fried soft-shell crabs (seasonal specialty)",
            price: 26,
          },
          {
            name: "Carpaccio di Pesce",
            description: "Raw fish carpaccio with citrus and olive oil",
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
        name: "First Courses",
        items: [
          {
            name: "Tagliolini con Granseola",
            description: "Homemade pasta with spider crab",
            price: 28,
          },
          {
            name: "Gnocchetti con Capesante e Zucchini",
            description: "Small gnocchi with scallops and zucchini",
            price: 26,
          },
          {
            name: "Risotto ai Frutti di Mare",
            description: "Seafood risotto with fresh daily catch",
            price: 24,
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
            name: "San Pietro all'Acqua Pazza",
            description:
              "John Dory fish in 'crazy water' with tomatoes and herbs",
            price: 32,
          },
          {
            name: "Seppie in Nero",
            description: "Cuttlefish in its ink with soft polenta",
            price: 28,
          },
          {
            name: "Rombo al Forno",
            description: "Oven-baked turbot with potatoes and white wine",
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
            name: "Panna Cotta al Limone",
            description: "Lemon-infused panna cotta",
            price: 12,
          },
          {
            name: "Millefoglie con Crema Chantilly",
            description: "Puff pastry with Chantilly cream and berries",
            price: 14,
          },
        ],
      },
    ],
    description: "",
  },
];
