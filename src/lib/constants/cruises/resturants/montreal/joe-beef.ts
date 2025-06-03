import { ResturantMenu } from "@/lib/types/types";

export const montrealjoeBeefMenu: ResturantMenu[] = [
  {
    title: "Daily Specials",
    description:
      "Ever-changing, market-inspired dishes written on our famous chalkboard",
    category: [
      {
        name: "Seafood Specials",
        items: [
          {
            name: "Lobster Spaghetti",
            description:
              "Rich lobster-infused tomato sauce, cognac cream, and generous chunks of lobster",
            price: 49,
            isGlutenFree: false,
          },
          {
            name: "Dover Sole Meunière",
            description:
              "Whole Dover sole with brown butter, lemon and caper sauce",
            price: 55,
            isGlutenFree: true,
          },
          {
            name: "Oysters & Caviar",
            description:
              "Selection of east coast oysters with traditional garnishes and Northern Divine caviar",
            price: 60,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Meat Specials",
        items: [
          {
            name: "Côte de Boeuf Royale",
            description:
              "40oz bone-in ribeye for two with bone marrow, served with bernaise and peppercorn sauce",
            price: 145,
            isGlutenFree: true,
          },
          {
            name: "Foie de Veau",
            description:
              "Pan-seared calf's liver with caramelized onions, bacon and sauce Robert",
            price: 36,
            isGlutenFree: true,
          },
          {
            name: "Venison Forestière",
            description:
              "Quebec venison loin with wild mushroom sauce, juniper, and seasonal vegetables",
            price: 48,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Les Entrées",
    description: "Starters showcasing rustic French-Canadian influences",
    category: [
      {
        name: "Appetizers",
        items: [
          {
            name: "Foie Gras Double Down",
            description:
              "Joe Beef's famous foie gras 'sandwich' with maple syrup and bacon",
            price: 34,
            isGlutenFree: false,
          },
          {
            name: "Oeufs Mayo & Caviar",
            description:
              "Classic deviled eggs topped with Northern Divine caviar",
            price: 24,
            isGlutenFree: true,
          },
          {
            name: "Steak Tartare",
            description:
              "Hand-cut beef with cornichons, shallots, capers, and egg yolk",
            price: 22,
            isGlutenFree: true,
          },
          {
            name: "Escargots Forestière",
            description:
              "Wild Burgundy snails in garlic butter with forest mushrooms",
            price: 18,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Fruits de Mer",
    description:
      "Fresh seafood preparations showcasing the best of seasonal catches",
    category: [
      {
        name: "Seafood",
        items: [
          {
            name: "Plateau de Fruits de Mer",
            description:
              "Extravagant seafood tower with lobster, crab, shrimp, oysters, clams, and mussels",
            price: 145,
            isGlutenFree: true,
          },
          {
            name: "Homard à l'Américaine",
            description: "Lobster in a rich tomato, cognac and tarragon sauce",
            price: 55,
            isGlutenFree: true,
          },
          {
            name: "Truite Meunière",
            description: "Whole Quebec trout with brown butter and almonds",
            price: 38,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Les Plats Principaux",
    description:
      "Hearty main courses featuring the best of Quebec's local produce and proteins",
    category: [
      {
        name: "Main Courses",
        items: [
          {
            name: "Horse Steak",
            description:
              "Joe Beef's signature dish - horse tenderloin with truffle sauce and frites",
            price: 42,
            isGlutenFree: true,
          },
          {
            name: "Lapin à la Moutarde",
            description:
              "Rabbit in mustard sauce with spätzle and seasonal vegetables",
            price: 39,
            isGlutenFree: false,
          },
          {
            name: "Magret de Canard",
            description:
              "Duck breast with honey-lavender glaze, parsnip purée, and cherry sauce",
            price: 44,
            isGlutenFree: true,
          },
          {
            name: "Porcelet de Gaspor",
            description:
              "Slow-roasted suckling pig with apple cider reduction and seasonal vegetables",
            price: 46,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Les Desserts",
    description: "Decadent sweet finishes to a memorable meal",
    category: [
      {
        name: "Sweet Finishes",
        items: [
          {
            name: "Paris-Brest",
            description:
              "Wheel-shaped choux pastry with praline cream and caramelized hazelnuts",
            price: 15,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Pouding Chômeur",
            description:
              "Traditional Quebec maple syrup pudding cake with crème fraîche",
            price: 14,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Marjolaine",
            description:
              "Layered almond meringue cake with chocolate and praline buttercream",
            price: 15,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Fromages du Québec",
            description:
              "Selection of artisanal Quebec cheeses with house-made preserves",
            price: 22,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
];
