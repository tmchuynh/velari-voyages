import { ResturantMenu } from "@/lib/types/types";

export const melbournevueDeMondeMenu: ResturantMenu[] = [
  {
    title: "Degustation",
    description:
      "Chef Shannon Bennett's theatrical culinary experience with panoramic city views from Rialto Tower",
    category: [
      {
        name: "Chef's Tasting Menu",
        items: [
          {
            name: "Premium Degustation",
            description:
              "Full experience of 10+ courses with premium Australian and French ingredients",
            price: 330,
            isGlutenFree: false,
          },
          {
            name: "Prestige Degustation",
            description:
              "Extended 14-course journey with luxury ingredients including truffles and caviar",
            price: 375,
            isGlutenFree: false,
          },
        ],
      },
    ],
  },
  {
    title: "Signature Dishes",
    description:
      "Standout courses that have defined Vue de Monde's culinary identity",
    category: [
      {
        name: "Vue Classics",
        items: [
          {
            name: "Marron Tail",
            description:
              "West Australian marron, brown butter emulsion, finger lime",
            price: 85,
            isGlutenFree: true,
          },
          {
            name: "Duck Egg",
            description: "Duck egg yolk, truffle, Paris mash, potato chips",
            price: 75,
            isGlutenFree: true,
          },
          {
            name: "Blackmore Wagyu",
            description:
              "David Blackmore's Wagyu beef, smoked bone marrow butter, native herbs",
            price: 95,
            isGlutenFree: true,
          },
          {
            name: "Barramundi",
            description:
              "Steamed wild barramundi, sea succulents, shellfish emulsion",
            price: 82,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Beverage Program",
    description:
      "Exceptional drink pairings and selections to elevate the dining experience",
    category: [
      {
        name: "Wine Pairings",
        items: [
          {
            name: "Sommelier's Selection",
            description:
              "Premium wine pairing with each course featuring Australian and French wines",
            price: 195,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Prestige Wine Journey",
            description:
              "Rare and exceptional wines from renowned producers and vintage years",
            price: 295,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Non-Alcoholic Pairing",
            description: "House-made juices, infusions and fermented drinks",
            price: 125,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Champagne Selection",
        items: [
          {
            name: "Champagne Trolley",
            description:
              "Tableside selection of premium champagnes by the glass",
            price: 55,
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
      "Artistic and innovative sweet creations to conclude your dining experience",
    category: [
      {
        name: "Sweet Finale",
        items: [
          {
            name: "Chocolate Soufflé",
            description:
              "Valrhona chocolate, crème anglaise, house-made vanilla bean ice cream",
            price: 38,
            isVegetarian: true,
          },
          {
            name: "Eucalyptus Ice Cream",
            description:
              "Native eucalyptus, Victorian honey, caramelized puffed rice",
            price: 36,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Mille-Feuille",
            description:
              "Caramelized puff pastry, Madagascar vanilla, seasonal berries",
            price: 36,
            isVegetarian: true,
          },
        ],
      },
    ],
  },
];
