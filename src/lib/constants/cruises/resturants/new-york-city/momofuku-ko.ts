import { ResturantMenu } from "@/lib/types/types";

export const newYorkCitymomofukuKoMenu: ResturantMenu[] = [
  {
    title: "Tasting Menu",
    description:
      "Chef's multi-course tasting experience showcasing innovative techniques and seasonal ingredients",
    category: [
      {
        name: "Dinner Tasting",
        items: [
          {
            name: "Ko Tasting Menu",
            description:
              "Seasonal tasting menu comprising approximately 10 courses that change frequently based on market availability",
            price: 280,
            isGlutenFree: false,
          },
          {
            name: "Beverage Pairing",
            description:
              "Curated selection of wines, sakes, and other beverages paired with each course",
            price: 195,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Reserve Beverage Pairing",
            description:
              "Premium selection of rare and limited wines and spirits paired with each course",
            price: 295,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "À La Carte Bar Experience",
    description:
      "Available at the bar only, featuring a selection of small plates and specialties",
    category: [
      {
        name: "Small Plates",
        items: [
          {
            name: "Ko Foie Gras",
            description: "Seared foie gras with seasonal accompaniments",
            price: 38,
            isGlutenFree: false,
          },
          {
            name: "Cold Fried Chicken",
            description:
              "Signature chicken with caviar and buttermilk dressing",
            price: 24,
            isGlutenFree: false,
          },
          {
            name: "Beef Tartare",
            description: "Hand-cut beef with XO sauce and puffed tendons",
            price: 28,
            isGlutenFree: true,
          },
          {
            name: "Lobster Roll",
            description:
              "Butter-poached Maine lobster on house-made milk bread",
            price: 42,
            isGlutenFree: false,
          },
        ],
      },
      {
        name: "Ko Specialties",
        items: [
          {
            name: "Duck Pie",
            description:
              "Aged duck with foie gras and seasonal mushrooms in flaky pastry",
            price: 46,
            isGlutenFree: false,
          },
          {
            name: "Dry-Aged Ribeye",
            description:
              "28-day dry-aged beef with smoked potato purée and miso béarnaise",
            price: 58,
            isGlutenFree: true,
          },
          {
            name: "Vegetable Rice",
            description:
              "Seasonal vegetables with forbidden rice and toasted nori",
            price: 32,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Desserts",
    description:
      "Innovative sweet creations marrying Eastern and Western influences",
    category: [
      {
        name: "Sweet Finishes",
        items: [
          {
            name: "Hozon Soft Serve",
            description:
              "Fermented chickpea soft serve with pineapple and miso caramel",
            price: 14,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Black Truffle Bomb",
            description:
              "Dark chocolate shell with truffle-infused chocolate ganache",
            price: 17,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Milk Bar Pie",
            description:
              "Christina Tosi's famous gooey butter cake filling in a toasted oat crust",
            price: 15,
            isVegetarian: true,
            isGlutenFree: false,
          },
        ],
      },
    ],
  },
];
