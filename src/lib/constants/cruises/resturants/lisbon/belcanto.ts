import { ResturantMenu } from "@/lib/types/types";

export const lisbonbelcantoMenu: ResturantMenu[] = [
  {
    title: "Tasting Menus",
    description:
      "Curated experiences by Chef José Avillez featuring seasonal Portuguese cuisine",
    category: [
      {
        name: "Chef's Selection",
        items: [
          {
            name: "Menu Clássico",
            description:
              "Six-course classic tasting menu showcasing signature dishes",
            price: 185,
            isVegetarian: false,
            isGlutenFree: false,
          },
          {
            name: "Menu Lisboa",
            description:
              "Eight-course journey through Portuguese gastronomy with contemporary techniques",
            price: 22,
            isVegetarian: false,
            isGlutenFree: false,
          },
          {
            name: "Menu Vegetariano",
            description:
              "Six-course vegetarian tasting menu featuring seasonal produce",
            price: 170,
            isVegetarian: true,
            isGlutenFree: false,
          },
        ],
      },
    ],
  },
  {
    title: "Entrada",
    description: "Artistic appetizers that highlight fresh local ingredients",
    category: [
      {
        name: "Starters",
        items: [
          {
            name: "The Garden of the Goose that Laid the Golden Eggs",
            description: "Foie gras, vegetable textures, golden egg yolk",
            price: 52,
            isVegetarian: false,
            isGlutenFree: true,
          },
          {
            name: "Sea Bass Carpaccio",
            description: "Powdered olive, codium seaweed and smoked avocado",
            price: 48,
            isVegetarian: false,
            isGlutenFree: true,
          },
          {
            name: "Scarlet Shrimp from Algarve",
            description: "Served with roasted pepper and shrimp head sauce",
            price: 55,
            isVegetarian: false,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Peixe",
    description:
      "Fish and seafood dishes celebrating Portugal's Atlantic coast",
    category: [
      {
        name: "Seafood",
        items: [
          {
            name: "Dip in the Sea",
            description: "Sea bass, seaweed, shellfish broth, plankton",
            price: 64,
            isVegetarian: false,
            isGlutenFree: true,
          },
          {
            name: "Aged Turbot",
            description:
              "With fermented garlic, coriander and a light clam sauce",
            price: 68,
            isVegetarian: false,
            isGlutenFree: true,
          },
          {
            name: "Algarve Prawn",
            description:
              "With spheres of passion fruit, chili oil and Thai basil",
            price: 66,
            isVegetarian: false,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Carne",
    description:
      "Innovative preparations of premium meats with Portuguese influence",
    category: [
      {
        name: "Meat",
        items: [
          {
            name: "Suckling Pig Revisited",
            description:
              "Crispy suckling pig skin, confit meat, orange purée and pepper jus",
            price: 58,
            isVegetarian: false,
            isGlutenFree: true,
          },
          {
            name: "Portuguese Partridge",
            description: "With chestnut purée, truffle and game jus",
            price: 62,
            isVegetarian: false,
            isGlutenFree: true,
          },
          {
            name: "Alentejo Lamb",
            description: "Herb-crusted, with eggplant, yogurt and mint",
            price: 60,
            isVegetarian: false,
            isGlutenFree: false,
          },
        ],
      },
    ],
  },
  {
    title: "Sobremesas",
    description:
      "Artistic desserts that blend traditional Portuguese flavors with modern technique",
    category: [
      {
        name: "Desserts",
        items: [
          {
            name: "Mandarin",
            description:
              "Mandarin sorbet, mandarin foam and crispy orange blossom",
            price: 24,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "The Forest",
            description:
              "Chocolate textures, mushroom powder, pine nut ice cream and tonka bean",
            price: 26,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Portuguese Trilogy",
            description:
              "Modern interpretation of three classic Portuguese desserts",
            price: 24,
            isVegetarian: true,
            isGlutenFree: false,
          },
        ],
      },
    ],
  },
];
