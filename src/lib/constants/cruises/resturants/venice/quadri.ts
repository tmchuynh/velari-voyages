import { ResturantMenu } from "@/lib/types/types";

export const venicequadriMenu: ResturantMenu[] = [
  {
    title: "Degustazione",
    category: [
      {
        name: "Tasting Menu",
        items: [
          {
            name: "Menu Classico",
            description: "Five-course classic Venetian tasting menu",
            price: 180,
          },
          {
            name: "Menu Quadri Contemporary",
            description: "Seven-course innovative tasting experience",
            price: 22,
          },
        ],
      },
    ],
    description: "",
  },
  {
    title: "Antipasti",
    category: [
      {
        name: "Appetizers",
        items: [
          {
            name: "Capesante e Caviale",
            description: "Seared scallops with Venetian caviar and citrus",
            price: 48,
          },
          {
            name: "Carpaccio di Manzo",
            description: "Beef carpaccio with black truffle and Parmesan",
            price: 42,
          },
          {
            name: "Insalata di Mare Adriatico",
            description: "Adriatic seafood salad with seasonal vegetables",
            price: 45,
          },
        ],
      },
    ],
    description: "",
  },
  {
    title: "Primi",
    category: [
      {
        name: "First Courses",
        items: [
          {
            name: "Bigoli in Salsa",
            description:
              "Traditional Venetian pasta with anchovy sauce, reimagined",
            price: 38,
          },
          {
            name: "Risotto al Nero di Seppia",
            description: "Cuttlefish ink risotto with gold leaf",
            price: 45,
          },
          {
            name: "Ravioli di Branzino",
            description: "Sea bass ravioli with fennel and orange essence",
            price: 42,
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
            name: "Fegato alla Veneziana",
            description:
              "Modernized Venetian-style liver with caramelized onions",
            price: 46,
          },
          {
            name: "Rombo con Carciofi",
            description: "Turbot with Venetian artichokes and saffron",
            price: 52,
          },
          {
            name: "Piccione al Forno",
            description: "Roasted pigeon with cherry sauce and foie gras",
            price: 54,
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
            name: "Tiramisu Scomposto",
            description: "Deconstructed tiramisu with coffee gelato",
            price: 24,
          },
          {
            name: "Cioccolato Veneziano",
            description: "Venetian chocolate variation with gold dust",
            price: 26,
          },
          {
            name: "Zabaione con Frutta",
            description: "Zabaglione with seasonal fruits and biscotti",
            price: 22,
          },
        ],
      },
    ],
    description: "",
  },
];
