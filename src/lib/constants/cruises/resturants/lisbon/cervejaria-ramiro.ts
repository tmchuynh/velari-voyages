import { ResturantMenu } from "@/lib/types/types";

export const lisboncervejariaRamiroMenu: ResturantMenu[] = [
  {
    title: "Entradas",
    description: "Traditional Portuguese appetizers and starters",
    category: [
      {
        name: "Starters",
        items: [
          {
            name: "Pão com Manteiga",
            description: "Fresh bread with butter",
            price: 2.5,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Azeitonas",
            description: "Marinated Portuguese olives",
            price: 3.5,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Presunto Pata Negra",
            description: "Thinly sliced Iberian ham",
            price: 22,
            isVegetarian: false,
            isGlutenFree: true,
          },
          {
            name: "Queijo da Serra",
            description:
              "Traditional creamy sheep cheese from Serra da Estrela",
            price: 15,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Mariscos",
    description: "Fresh shellfish and seafood, priced by weight",
    category: [
      {
        name: "Shellfish",
        items: [
          {
            name: "Camarão Tigre Grelhado",
            description: "Grilled tiger prawns with garlic and olive oil",
            price: 22,
            isVegetarian: false,
            isGlutenFree: true,
          },
          {
            name: "Lagosta",
            description:
              "Fresh lobster prepared to your preference (grilled or boiled)",
            price: 120,
            isVegetarian: false,
            isGlutenFree: true,
          },
          {
            name: "Sapateira",
            description:
              "Stone crab served cold with its own mayonnaise-based stuffing",
            price: 35,
            isVegetarian: false,
            isGlutenFree: true,
          },
          {
            name: "Percebes",
            description:
              "Goose barnacles, a rare Iberian delicacy steamed with sea water",
            price: 10,
            isVegetarian: false,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Bivalves",
    description: "Fresh clams and other bivalve mollusks",
    category: [
      {
        name: "Clams & Mussels",
        items: [
          {
            name: "Amêijoas à Bulhão Pato",
            description:
              "Clams cooked in olive oil, garlic, cilantro and white wine",
            price: 22,
            isVegetarian: false,
            isGlutenFree: true,
          },
          {
            name: "Mexilhões à Marinheira",
            description: "Mussels cooked in a tomato, garlic and herb sauce",
            price: 15,
            isVegetarian: false,
            isGlutenFree: true,
          },
          {
            name: "Berbigão ao Natural",
            description: "Steamed cockles with lemon",
            price: 17,
            isVegetarian: false,
            isGlutenFree: true,
          },
          {
            name: "Navalhas Grelhadas",
            description: "Grilled razor clams with garlic and olive oil",
            price: 24,
            isVegetarian: false,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Peixes",
    description:
      "Fish dishes prepared simply to highlight freshness and quality",
    category: [
      {
        name: "Fish",
        items: [
          {
            name: "Gambas ao Alho",
            description: "Garlic prawns sizzling in olive oil and chili",
            price: 20,
            isVegetarian: false,
            isGlutenFree: true,
          },
          {
            name: "Carabineiros Grelhados",
            description: "Grilled scarlet prawns with sea salt",
            price: 17,
            isVegetarian: false,
            isGlutenFree: true,
          },
          {
            name: "Filetes de Polvo",
            description: "Octopus fillets with olive oil and roasted potatoes",
            price: 25,
            isVegetarian: false,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Sobremesas",
    description: "Sweet endings to your seafood feast",
    category: [
      {
        name: "Desserts",
        items: [
          {
            name: "Prego no Pão",
            description:
              "Traditional steak sandwich served as dessert (a Ramiro tradition)",
            price: 12,
            isVegetarian: false,
            isGlutenFree: false,
          },
          {
            name: "Mousse de Chocolate",
            description: "Homemade chocolate mousse",
            price: 6,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Pudim Flan",
            description: "Classic caramel custard",
            price: 5,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Bebidas",
    description: "Drinks to complement your meal",
    category: [
      {
        name: "Drinks",
        items: [
          {
            name: "Cerveja à Pressão",
            description: "Draft beer (Sagres or Super Bock)",
            price: 3,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: false,
          },
          {
            name: "Vinho Verde",
            description: "Young, crisp Portuguese green wine",
            price: 15,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Vinho Branco da Casa",
            description: "House white wine (bottle)",
            price: 14,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Água Mineral",
            description: "Still or sparkling mineral water",
            price: 2.5,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
];
