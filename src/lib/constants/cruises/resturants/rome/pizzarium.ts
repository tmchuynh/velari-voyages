import { ResturantMenu } from "@/lib/types/types";

export const romepizzariumMenu: ResturantMenu[] = [
  {
    title: "Pizza al Taglio",
    description:
      "Gabriele Bonci's famous Roman-style pizza by the slice with artisanal toppings",
    category: [
      {
        name: "Pizze Classiche",
        items: [
          {
            name: "Margherita",
            description:
              "San Marzano tomato sauce, fresh mozzarella, basil, extra virgin olive oil",
            price: 4.5,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Marinara",
            description:
              "San Marzano tomato sauce, garlic, oregano, extra virgin olive oil",
            price: 3.5,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: false,
          },
          {
            name: "Patate e Rosmarino",
            description:
              "Thinly sliced potatoes, rosemary, extra virgin olive oil",
            price: 4.0,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: false,
          },
          {
            name: "Prosciutto e Fichi",
            description:
              "Fresh figs, prosciutto di Parma, mozzarella, honey drizzle (seasonal)",
            price: 6.5,
            isGlutenFree: false,
          },
        ],
      },
      {
        name: "Pizze Gourmet",
        items: [
          {
            name: "Mortadella e Pistacchio",
            description: "Mortadella, stracciatella cheese, crushed pistachios",
            price: 6.0,
            isGlutenFree: false,
          },
          {
            name: "Zucca e Gorgonzola",
            description:
              "Roasted pumpkin, gorgonzola cheese, walnuts, honey (seasonal)",
            price: 5.5,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Burrata e Pomodorini",
            description:
              "Cherry tomatoes, burrata cheese, basil, extra virgin olive oil",
            price: 6.0,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Carbonara",
            description: "Egg cream, guanciale, pecorino cheese, black pepper",
            price: 6.5,
            isGlutenFree: false,
          },
        ],
      },
      {
        name: "Pizze Stagionali",
        items: [
          {
            name: "Pizza del Giorno",
            description:
              "Daily special pizza featuring the freshest seasonal ingredients",
            price: 6.5,
            isGlutenFree: false,
          },
          {
            name: "Carciofi e Pecorino",
            description: "Artichokes, pecorino cheese, mint (seasonal)",
            price: 6.0,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Funghi Porcini",
            description: "Porcini mushrooms, thyme, garlic oil (seasonal)",
            price: 7.0,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: false,
          },
        ],
      },
    ],
  },
  {
    title: "Suppli",
    description: "Roman rice croquettes with various fillings",
    category: [
      {
        name: "Traditional Roman Street Food",
        items: [
          {
            name: "Supplì al Telefono",
            description:
              "Fried rice croquette with tomato sauce and mozzarella",
            price: 3.5,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Supplì Carbonara",
            description:
              "Fried rice croquette with egg, guanciale, and pecorino",
            price: 4.0,
            isGlutenFree: false,
          },
          {
            name: "Supplì Cacio e Pepe",
            description:
              "Fried rice croquette with Pecorino Romano and black pepper",
            price: 4.0,
            isVegetarian: true,
            isGlutenFree: false,
          },
        ],
      },
    ],
  },
  {
    title: "Specialità della Casa",
    description: "House specialties and seasonal creations",
    category: [
      {
        name: "Bonci Specials",
        items: [
          {
            name: "Focaccia con Mortadella",
            description: "Freshly baked focaccia with pistachio mortadella",
            price: 7.5,
            isGlutenFree: false,
          },
          {
            name: "Pane e Porchetta",
            description: "Housemade bread with traditional roasted porchetta",
            price: 8.0,
            isGlutenFree: false,
          },
          {
            name: "Trapizzino",
            description:
              "Pocket bread filled with traditional Roman stews (rotating fillings)",
            price: 6.5,
            isGlutenFree: false,
          },
        ],
      },
    ],
  },
  {
    title: "Dolci",
    description: "Sweet treats to finish your meal",
    category: [
      {
        name: "Desserts",
        items: [
          {
            name: "Pizza alla Nutella",
            description: "Sweet pizza topped with Nutella and powdered sugar",
            price: 5.5,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Maritozzo",
            description:
              "Traditional Roman sweet bun filled with whipped cream",
            price: 4.5,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Ciambellone",
            description: "Traditional Roman ring cake",
            price: 4.0,
            isVegetarian: true,
            isGlutenFree: false,
          },
        ],
      },
    ],
  },
  {
    title: "Bevande",
    description: "Drinks to complement your pizza",
    category: [
      {
        name: "Drinks",
        items: [
          {
            name: "Craft Beer",
            description: "Selection of Italian craft beers",
            price: 6.0,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: false,
          },
          {
            name: "Natural Wines",
            description: "Selection of natural wines by the glass",
            price: 7.0,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Acqua Minerale",
            description: "Still or sparkling mineral water",
            price: 2.0,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Bibite Artigianali",
            description: "Craft sodas made in Italy",
            price: 3.5,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
];
