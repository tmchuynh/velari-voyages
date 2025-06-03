import { ResturantMenu } from "@/lib/types/types";

export const lisbontimeOutMarketLisboaMenu: ResturantMenu[] = [
  {
    title: "Henrique Sá Pessoa",
    description:
      "Portuguese cuisine by Michelin-starred Chef Henrique Sá Pessoa",
    category: [
      {
        name: "Signature Dishes",
        items: [
          {
            name: "Bacalhau à Brás",
            description:
              "Shredded salted cod with onions, thinly sliced potatoes, eggs, olives and parsley",
            price: 14.5,
            isVegetarian: false,
            isGlutenFree: true,
          },
          {
            name: "Pork Cheeks",
            description:
              "Slow-cooked pork cheeks with potato purée and seasonal vegetables",
            price: 16.5,
            isVegetarian: false,
            isGlutenFree: true,
          },
          {
            name: "Octopus à Lagareiro",
            description:
              "Grilled octopus with crushed potatoes, garlic and olive oil",
            price: 17,
            isVegetarian: false,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Manteigaria",
    description: "Famous Portuguese custard tarts and pastries",
    category: [
      {
        name: "Pastries",
        items: [
          {
            name: "Pastel de Nata",
            description:
              "Traditional Portuguese custard tart with crispy pastry shell",
            price: 1.1,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Pastel de Nata with Coffee",
            description: "Custard tart served with espresso",
            price: 2.3,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Box of 6 Pastéis de Nata",
            description: "Take-away box with six freshly baked custard tarts",
            price: 6.5,
            isVegetarian: true,
            isGlutenFree: false,
          },
        ],
      },
    ],
  },
  {
    title: "Marisqueira Azul",
    description: "Fresh seafood and shellfish from Portuguese waters",
    category: [
      {
        name: "Seafood",
        items: [
          {
            name: "Camarão Cozido",
            description: "Steamed prawns with sea salt and lemon",
            price: 15,
            isVegetarian: false,
            isGlutenFree: true,
          },
          {
            name: "Sapateira Recheada",
            description: "Stuffed crab served in its shell",
            price: 22,
            isVegetarian: false,
            isGlutenFree: true,
          },
          {
            name: "Gambas ao Alho",
            description: "Garlic prawns cooked in olive oil and chili",
            price: 15,
            isVegetarian: false,
            isGlutenFree: true,
          },
          {
            name: "Seafood Platter (for 2)",
            description:
              "Selection of clams, mussels, prawns, crab and oysters",
            price: 45,
            isVegetarian: false,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "O Prego da Peixaria",
    description: "Gourmet Portuguese steak sandwiches with a twist",
    category: [
      {
        name: "Prego Sandwiches",
        items: [
          {
            name: "Prego Tradicional",
            description:
              "Traditional steak sandwich with garlic butter on Portuguese bread",
            price: 9.5,
            isVegetarian: false,
            isGlutenFree: false,
          },
          {
            name: "Prego de Atum",
            description: "Seared tuna steak sandwich with wasabi mayonnaise",
            price: 11,
            isVegetarian: false,
            isGlutenFree: false,
          },
          {
            name: "Prego à Café",
            description: "Beef steak sandwich with foie gras and truffle sauce",
            price: 14.5,
            isVegetarian: false,
            isGlutenFree: false,
          },
          {
            name: "Prego Menu",
            description: "Prego sandwich, french fries and drink",
            price: 15,
            isVegetarian: false,
            isGlutenFree: false,
          },
        ],
      },
    ],
  },
  {
    title: "Monte Mar",
    description: "High-quality fish and seafood restaurant with river views",
    category: [
      {
        name: "Fish & Seafood",
        items: [
          {
            name: "Amêijoas à Bulhão Pato",
            description: "Clams in white wine, garlic and coriander sauce",
            price: 15,
            isVegetarian: false,
            isGlutenFree: true,
          },
          {
            name: "Arroz de Marisco",
            description: "Seafood rice with prawns, clams and mussels",
            price: 17,
            isVegetarian: false,
            isGlutenFree: true,
          },
          {
            name: "Peixe Grelhado do Dia",
            description: "Grilled catch of the day with olive oil and herbs",
            price: 22,
            isVegetarian: false,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Drinks & Desserts",
    description:
      "Selection of wines, beers and sweet treats from multiple vendors",
    category: [
      {
        name: "Beverages",
        items: [
          {
            name: "Vinho Verde Glass",
            description: "Portuguese green wine by the glass",
            price: 4.5,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Super Bock Draft",
            description: "Portuguese lager beer, 0.33L",
            price: 3.5,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: false,
          },
          {
            name: "Sangria Glass",
            description: "Red wine sangria with fresh fruit",
            price: 5,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Sweet Endings",
        items: [
          {
            name: "Chocolate Mousse",
            description: "Rich chocolate mousse with sea salt",
            price: 4,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Pudim Abade de Priscos",
            description:
              "Traditional Portuguese pudding with port wine and bacon",
            price: 5.5,
            isVegetarian: false,
            isGlutenFree: true,
          },
          {
            name: "Gelado Artesanal",
            description: "Artisanal ice cream in various flavors",
            price: 3.5,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
];
