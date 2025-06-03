import { ResturantMenu } from "@/lib/types/types";

export const lisbonpastIsDeBelMMenu: ResturantMenu[] = [
  {
    title: "Pastéis de Belém",
    description:
      "The famous original custard tarts since 1837, made with the secret recipe from Mosteiro dos Jerónimos",
    category: [
      {
        name: "Signature Pastries",
        items: [
          {
            name: "Pastel de Belém",
            description:
              "The original custard tart with crispy puff pastry and creamy filling, dusted with cinnamon and powdered sugar",
            price: 1.3,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Pack of 6 Pastéis de Belém",
            description: "Box with six original custard tarts",
            price: 7.8,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Pack of 12 Pastéis de Belém",
            description: "Box with twelve original custard tarts",
            price: 15.6,
            isVegetarian: true,
            isGlutenFree: false,
          },
        ],
      },
    ],
  },
  {
    title: "Outras Doçarias",
    description: "Other traditional Portuguese pastries and cakes",
    category: [
      {
        name: "Traditional Pastries",
        items: [
          {
            name: "Bolo de Arroz",
            description: "Traditional Portuguese rice cake with a crunchy top",
            price: 1.2,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Queijada",
            description: "Small cheese tart with a hint of cinnamon",
            price: 1.15,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Palmier",
            description: "Caramelized puff pastry in a butterfly shape",
            price: 1.1,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Torta de Laranja",
            description: "Orange roll cake with light cream filling",
            price: 2.3,
            isVegetarian: true,
            isGlutenFree: false,
          },
        ],
      },
    ],
  },
  {
    title: "Bebidas",
    description: "Hot and cold beverages to accompany your pastries",
    category: [
      {
        name: "Coffee & Tea",
        items: [
          {
            name: "Café (Espresso)",
            description: "Traditional Portuguese espresso",
            price: 0.8,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Meia de Leite",
            description: "Coffee with milk (similar to caffè latte)",
            price: 1.4,
            isVegetarian: true,
            isVegan: false,
            isGlutenFree: true,
          },
          {
            name: "Galão",
            description: "Coffee with lots of hot milk served in a glass",
            price: 1.6,
            isVegetarian: true,
            isVegan: false,
            isGlutenFree: true,
          },
          {
            name: "Chá",
            description: "Tea selection (black, green, herbal)",
            price: 1.5,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Cold Drinks",
        items: [
          {
            name: "Água Mineral",
            description: "Still or sparkling mineral water",
            price: 1.3,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Sumo de Laranja Natural",
            description: "Fresh squeezed orange juice",
            price: 3,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Refrigerante",
            description: "Soft drinks (Coca-Cola, Sprite, etc.)",
            price: 1.8,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Refeições Leves",
    description: "Light meals and sandwiches available at the café",
    category: [
      {
        name: "Sandwiches & Snacks",
        items: [
          {
            name: "Tosta Mista",
            description: "Toasted ham and cheese sandwich",
            price: 3.5,
            isVegetarian: false,
            isGlutenFree: false,
          },
          {
            name: "Pão com Manteiga",
            description: "Bread roll with butter",
            price: 1.2,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Sopa do Dia",
            description: "Soup of the day with bread",
            price: 2.8,
            isVegetarian: false,
            isGlutenFree: false,
          },
        ],
      },
    ],
  },
];
