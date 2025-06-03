import { ResturantMenu } from "@/lib/types/types";

export const southamptontheJettyMenu: ResturantMenu[] = [
  {
    title: "Raw Bar & Seafood Platters",
    category: [
      {
        name: "Fresh from the Sea",
        items: [
          {
            name: "Dorset Oysters",
            description:
              "Half dozen fresh oysters with shallot vinegar, lemon and tabasco",
            price: 18,
            isGlutenFree: true,
          },
          {
            name: "Fruits de Mer",
            description:
              "Lobster, crab, prawns, crevettes, oysters, mussels, clams (for two to share)",
            price: 75,
            isGlutenFree: true,
          },
          {
            name: "Portland Crab",
            description: "Served with mayonnaise, lemon and brown bread",
            price: 16,
            isGlutenFree: false,
          },
        ],
      },
    ],
    description: "Featuring the freshest seafood from the south coast",
  },
  {
    title: "Starters",
    category: [
      {
        name: "Appetizers",
        items: [
          {
            name: "Jetty Prawn Cocktail",
            description:
              "Classic prawn cocktail with Marie Rose sauce and crisp lettuce",
            price: 12.5,
            isGlutenFree: true,
          },
          {
            name: "Seared Scallops",
            description:
              "Hand-dived scallops with cauliflower purée, crispy pancetta and herb oil",
            price: 15.95,
            isGlutenFree: true,
          },
          {
            name: "Smoked Salmon",
            description:
              "London cure smoked salmon with capers, shallots and brown bread",
            price: 13.95,
            isGlutenFree: false,
          },
          {
            name: "South Coast Crab on Toast",
            description:
              "Fresh local crab with herbs, lemon and sourdough toast",
            price: 14.5,
            isGlutenFree: false,
          },
        ],
      },
      {
        name: "Soups",
        items: [
          {
            name: "Seafood Bisque",
            description:
              "Rich shellfish soup with brandy, garlic croutons and rouille",
            price: 10.95,
            isGlutenFree: false,
          },
          {
            name: "Bouillabaisse",
            description:
              "Traditional Provençal fish soup with local fish and shellfish",
            price: 12.95,
            isGlutenFree: true,
          },
        ],
      },
    ],
    description: "Perfect beginnings featuring the best of Hampshire produce",
  },
  {
    title: "Mains",
    category: [
      {
        name: "Seafood Specialties",
        items: [
          {
            name: "Whole Dover Sole",
            description:
              "Grilled or meunière, served with new potatoes and seasonal vegetables",
            price: 42,
            isGlutenFree: true,
          },
          {
            name: "Jetty Fish & Chips",
            description:
              "Beer-battered South Coast cod with triple-cooked chips, mushy peas and tartare sauce",
            price: 18.95,
            isGlutenFree: false,
          },
          {
            name: "Seafood Linguine",
            description:
              "Fresh pasta with prawns, clams, mussels, garlic, chili and white wine",
            price: 24,
            isGlutenFree: false,
          },
          {
            name: "Pan-Fried Sea Bass",
            description:
              "Fillet of sea bass with crushed potatoes, samphire and shellfish butter sauce",
            price: 26.5,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "From the Land",
        items: [
          {
            name: "21-Day Aged Ribeye Steak",
            description:
              "Hampshire beef with triple-cooked chips, roasted tomatoes and béarnaise sauce",
            price: 34,
            isGlutenFree: true,
          },
          {
            name: "Herb-Crusted Rack of Lamb",
            description:
              "Local lamb with dauphinoise potatoes, seasonal vegetables and red wine jus",
            price: 29.95,
            isGlutenFree: false,
          },
          {
            name: "Roasted Vegetable Risotto",
            description:
              "Arborio rice with seasonal vegetables, herbs and parmesan",
            price: 17.95,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
    description:
      "Locally sourced ingredients prepared with skill and simplicity",
  },
  {
    title: "Sides",
    category: [
      {
        name: "Accompaniments",
        items: [
          {
            name: "Triple-Cooked Chips",
            description: "Crispy hand-cut potatoes",
            price: 4.95,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Buttered New Potatoes",
            description: "With fresh herbs",
            price: 4.5,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Seasonal Vegetables",
            description: "Locally sourced and simply prepared",
            price: 4.5,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Green Salad",
            description: "Mixed leaves with house dressing",
            price: 4.25,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
    description: "Perfect companions to our main courses",
  },
  {
    title: "Desserts",
    category: [
      {
        name: "Sweet Finishes",
        items: [
          {
            name: "Sticky Toffee Pudding",
            description:
              "Classic pudding with butterscotch sauce and vanilla ice cream",
            price: 8.95,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Lemon Posset",
            description:
              "Zesty lemon cream with shortbread biscuits and berry compote",
            price: 8.5,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Dark Chocolate Delice",
            description: "Rich chocolate dessert with salted caramel ice cream",
            price: 9.5,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Selection of British Cheeses",
            description: "Served with biscuits, grapes, celery and chutney",
            price: 12.95,
            isVegetarian: true,
            isGlutenFree: false,
          },
        ],
      },
    ],
    description: "Indulgent endings to your meal",
  },
];
