import { ResturantMenu } from "@/lib/types/types";

export const singaporeodetteMenu: ResturantMenu[] = [
  {
    title: "Degustation Menus",
    category: [
      {
        name: "Chef's Tasting Experience",
        items: [
          {
            name: "6-Course Experience",
            description:
              "A curated journey through Chef Julien's signature creations",
            price: 298,
          },
          {
            name: "8-Course Experience",
            description:
              "An extended tasting with additional seasonal specialties",
            price: 358,
          },
          {
            name: "Wine Pairing",
            description:
              "Expert sommelier selection to complement your tasting menu",
            price: 198,
          },
        ],
      },
    ],
    description: "Chef Julien Royer's expression of Modern French cuisine",
  },
  {
    title: "Entrées",
    category: [
      {
        name: "Starters",
        items: [
          {
            name: "Heirloom Beetroot Variation",
            description:
              "Salt-baked, pickled and smoked beetroot with stracciatella, honeycomb and horseradish",
            price: 38,
          },
          {
            name: "Mushroom Tart",
            description:
              "Delicate tart with seasonal wild mushrooms, parmesan cream and black truffle",
            price: 42,
          },
          {
            name: "Normandy Brown Crab",
            description:
              "Hand-picked crab with wasabi, Granny Smith apple and Kaluga caviar",
            price: 58,
          },
          {
            name: "Foie Gras Terrine",
            description:
              "Duck foie gras with seasonal fruit chutney and toasted brioche",
            price: 46,
          },
        ],
      },
    ],
    description: "",
  },
  {
    title: "Poisson et Viande",
    category: [
      {
        name: "Fish",
        items: [
          {
            name: "Kinki Fish",
            description:
              "Line-caught kinki fish with fennel, saffron and bouillabaisse",
            price: 72,
          },
          {
            name: "Brittany Lobster",
            description:
              "Roasted lobster with celeriac, black truffle and sauce Américaine",
            price: 88,
          },
        ],
      },
      {
        name: "Meat",
        items: [
          {
            name: "Pyrenees Lamb",
            description:
              "Herb-crusted rack of lamb with eggplant, chickpeas and harissa jus",
            price: 78,
          },
          {
            name: "Kagoshima Beef",
            description:
              "A5 Wagyu beef with pommes soufflées, asparagus and black garlic",
            price: 98,
          },
          {
            name: "French Pigeon",
            description:
              "Roasted breast and confit leg with cherry, pistachio and spiced jus",
            price: 76,
          },
        ],
      },
    ],
    description: "",
  },
  {
    title: "Fromages et Desserts",
    category: [
      {
        name: "Cheese",
        items: [
          {
            name: "Selection de Fromages",
            description:
              "Curated selection of fine French cheeses with condiments",
            price: 38,
          },
        ],
      },
      {
        name: "Desserts",
        items: [
          {
            name: "Guanaja Chocolate",
            description:
              "64% Valrhona chocolate cremeux with salted caramel and vanilla ice cream",
            price: 26,
          },
          {
            name: "Yoshino Yuzu",
            description: "Yuzu chiboust with sake granita, yogurt and shiso",
            price: 26,
          },
          {
            name: "French Strawberries",
            description:
              "Mara des Bois strawberries with vanilla chantilly, basil and meringue",
            price: 28,
          },
        ],
      },
    ],
    description: "",
  },
];
