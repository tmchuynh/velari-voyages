import { ResturantMenu } from "@/lib/types/types";

export const miamijoeMenu: ResturantMenu[] = [
  {
    title: "Raw Bar",
    description:
      "Fresh seafood towers and oysters from the premier stone crab institution of Miami",
    category: [
      {
        name: "Seafood Towers",
        items: [
          {
            name: "Joe's Seafood Platter",
            description:
              "Alaskan king crab, Maine lobster, jumbo shrimp, oysters, and clams",
            price: 150,
            isGlutenFree: true,
          },
          {
            name: "Large Stone Crab Dinner",
            description:
              "Five jumbo stone crab claws with Joe's famous mustard sauce, coleslaw, and hash browns",
            price: 45,
            isGlutenFree: true,
          },
          {
            name: "Medium Stone Crab Dinner",
            description:
              "Five medium stone crab claws with Joe's famous mustard sauce, coleslaw, and hash browns",
            price: 45,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Oysters & Shellfish",
        items: [
          {
            name: "East Coast Oysters",
            description:
              "Half dozen fresh oysters with mignonette and cocktail sauce",
            price: 24,
            isGlutenFree: true,
          },
          {
            name: "Jumbo Shrimp Cocktail",
            description:
              "Six jumbo shrimp with classic cocktail sauce and lemon",
            price: 26,
            isGlutenFree: true,
          },
          {
            name: "Alaskan King Crab Legs",
            description: "1lb of steamed king crab legs with drawn butter",
            price: 45,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Starters",
    description: "Classic appetizers to begin your seafood feast",
    category: [
      {
        name: "Appetizers",
        items: [
          {
            name: "Lobster Bisque",
            description: "Rich, creamy soup with Maine lobster and sherry",
            price: 15,
            isGlutenFree: false,
          },
          {
            name: "Conch Fritters",
            description: "Served with mustard remoulade",
            price: 17,
            isGlutenFree: false,
          },
          {
            name: "Crab Cakes",
            description: "Two jumbo lump crab cakes with mustard sauce",
            price: 28,
            isGlutenFree: false,
          },
          {
            name: "Joe's Chopped Salad",
            description:
              "Hearts of palm, artichoke hearts, tomato, cucumber with house dressing",
            price: 14,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Stone Crabs",
    description:
      "Joe's world famous seasonal Florida stone crabs (October 15th to May 1st)",
    category: [
      {
        name: "By Size",
        items: [
          {
            name: "Select Stone Crabs",
            description: "Smallest size (approx. 3oz per claw)",
            price: 45,
            isGlutenFree: true,
          },
          {
            name: "Medium Stone Crabs",
            description: "Medium size (approx. 4oz per claw)",
            price: 45,
            isGlutenFree: true,
          },
          {
            name: "Large Stone Crabs",
            description: "Large size (approx. 5oz per claw)",
            price: 45,
            isGlutenFree: true,
          },
          {
            name: "Jumbo Stone Crabs",
            description: "Jumbo size (approx. 6oz+ per claw)",
            price: 45,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Entrées",
    description: "Classic seafood preparations and Joe's favorites",
    category: [
      {
        name: "Seafood Specialties",
        items: [
          {
            name: "Grilled Florida Yellowtail Snapper",
            description: "With tomato, fresh herbs, lemon and butter",
            price: 38,
            isGlutenFree: true,
          },
          {
            name: "Blackened Mahi-Mahi",
            description: "With mango salsa and lemon butter sauce",
            price: 35,
            isGlutenFree: true,
          },
          {
            name: "Broiled Maine Lobster",
            description:
              "1½ lb Maine lobster, split and broiled with drawn butter",
            price: 60,
            isGlutenFree: true,
          },
          {
            name: "Jumbo Alaskan King Crab Legs",
            description: "1lb steamed and served with drawn butter",
            price: 45,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Meat & Poultry",
        items: [
          {
            name: "Filet Mignon",
            description: "10oz USDA Prime filet with maitre d' butter",
            price: 54,
            isGlutenFree: true,
          },
          {
            name: "New York Strip",
            description: "16oz USDA Prime strip steak with maitre d' butter",
            price: 56,
            isGlutenFree: true,
          },
          {
            name: "Half Fried Chicken",
            description: "Joe's famous fried chicken with honey garlic sauce",
            price: 28,
            isGlutenFree: false,
          },
        ],
      },
    ],
  },
  {
    title: "Sides",
    description: "Classic steakhouse and seafood accompaniments",
    category: [
      {
        name: "Signature Sides",
        items: [
          {
            name: "Hash Browns",
            description: "Joe's famous crispy potato hash browns",
            price: 10,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Creamed Spinach",
            description: "Classic creamy spinach with nutmeg",
            price: 12,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Grilled Asparagus",
            description: "With hollandaise sauce",
            price: 14,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Joe's Classic Coleslaw",
            description: "Creamy house-made coleslaw",
            price: 8,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Lyonnaise Potatoes",
            description: "With caramelized onions",
            price: 10,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Desserts",
    description: "Joe's legendary key lime pie and other sweet finishes",
    category: [
      {
        name: "Sweet Endings",
        items: [
          {
            name: "Joe's Famous Key Lime Pie",
            description:
              "The original recipe from 1913, with graham cracker crust and whipped cream",
            price: 12,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Apple Pie",
            description: "Classic apple pie with vanilla ice cream",
            price: 11,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Chocolate Fudge Cake",
            description: "Multi-layered chocolate cake with fudge frosting",
            price: 12,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "New York Style Cheesecake",
            description: "Traditional cheesecake with fresh berries",
            price: 12,
            isVegetarian: true,
            isGlutenFree: false,
          },
        ],
      },
    ],
  },
];
