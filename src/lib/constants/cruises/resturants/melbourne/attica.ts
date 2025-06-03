import { ResturantMenu } from "@/lib/types/types";

export const melbourneatticaMenu: ResturantMenu[] = [
  {
    title: "Tasting Menu",
    description:
      "Chef Ben Shewry's signature culinary journey featuring native Australian ingredients",
    category: [
      {
        name: "Chef's Degustation",
        items: [
          {
            name: "The Whole Marron",
            description: "Hand-dived marron, bush condiments, finger lime",
            price: 78,
            isGlutenFree: true,
          },
          {
            name: "Black Ant Lamington",
            description: "Native black ant, coconut, chocolate, raspberry",
            price: 45,
            isGlutenFree: false,
          },
          {
            name: "Kangaroo with Wattleseed",
            description: "Charred kangaroo, macadamia cream, quandong",
            price: 65,
            isGlutenFree: true,
          },
          {
            name: "Saltbush Lamb",
            description: "Salt-cured lamb, eucalyptus, native pepper berry",
            price: 72,
            isGlutenFree: true,
          },
          {
            name: "Emu Egg",
            description: "Smoked emu egg custard with native Australian spices",
            price: 55,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Set Menu Experience",
    description:
      "A complete dining experience showcasing the best of Australian cuisine and indigenous ingredients",
    category: [
      {
        name: "Full Tasting Experience",
        items: [
          {
            name: "Complete Chef's Menu",
            description:
              "Full tasting menu with 16+ courses featuring the chef's current inspiration and seasonal ingredients",
            price: 310,
            isGlutenFree: false,
          },
          {
            name: "Native Australian Menu",
            description:
              "Special menu focusing exclusively on indigenous Australian ingredients and traditional preparation methods",
            price: 330,
            isGlutenFree: false,
          },
        ],
      },
      {
        name: "Beverage Pairings",
        items: [
          {
            name: "Premium Wine Pairing",
            description:
              "Curated selection of Australian wines to complement each course",
            price: 185,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Non-Alcoholic Pairing",
            description:
              "House-made juices and infusions featuring native Australian botanicals",
            price: 125,
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
      "Sweet endings inspired by the Australian landscape and indigenous traditions",
    category: [
      {
        name: "Sweet Finale",
        items: [
          {
            name: "Bunya Bunya",
            description:
              "Native pine nut ice cream, lemon myrtle, burnt butter",
            price: 28,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Strawberry & Eucalyptus",
            description: "Native strawberry gum meringue, eucalyptus cream",
            price: 26,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Pukeko's Egg",
            description: "Chocolate sphere, wattleseed ganache, Davidson plum",
            price: 30,
            isVegetarian: true,
            isGlutenFree: false,
          },
        ],
      },
    ],
  },
];
