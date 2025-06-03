import { ResturantMenu } from "@/lib/types/types";

export const newYorkCityleBernardinMenu: ResturantMenu[] = [
  {
    title: "Prix Fixe Menus",
    description:
      "Chef Eric Ripert's carefully crafted tasting experiences showcasing the finest seafood",
    category: [
      {
        name: "Tasting Menus",
        items: [
          {
            name: "Chef's Tasting Menu",
            description:
              "Eight-course menu featuring Chef Ripert's signature dishes and seasonal specialties",
            price: 298,
            isGlutenFree: false,
          },
          {
            name: "Le Bernardin Tasting Menu",
            description:
              "Six-course menu highlighting the restaurant's most celebrated seafood preparations",
            price: 235,
            isGlutenFree: false,
          },
          {
            name: "Vegetarian Tasting Menu",
            description:
              "Six-course plant-based tasting menu featuring seasonal vegetables and fruits",
            price: 235,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Wine Pairing",
            description: "Expertly selected wines to complement each course",
            price: 195,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Le Bernardin Classics",
    description:
      "À la carte selections of signature dishes that have defined Le Bernardin's legacy",
    category: [
      {
        name: "First Course",
        items: [
          {
            name: "Tuna",
            description:
              "Thinly pounded yellowfin tuna, foie gras, toasted baguette, chives and olive oil",
            price: 58,
            isGlutenFree: false,
          },
          {
            name: "Langoustine",
            description:
              "Sautéed langoustine, truffle and chanterelle, aged balsamic vinaigrette",
            price: 64,
            isGlutenFree: true,
          },
          {
            name: "Caviar",
            description: "Osetra caviar, king crab, Meyer lemon gelée",
            price: 95,
            isGlutenFree: true,
          },
          {
            name: "Hamachi",
            description:
              "Hamachi tartare, wasabi tobiko, ginger-coriander emulsion",
            price: 54,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Second Course",
        items: [
          {
            name: "Black Bass",
            description:
              "Crispy black bass, roasted shallots, Persian cucumbers, black garlic-Persian lime sauce",
            price: 68,
            isGlutenFree: true,
          },
          {
            name: "Lobster",
            description:
              "Poached lobster, truffle butter sauce, pea shoots and sugar snap peas",
            price: 72,
            isGlutenFree: true,
          },
          {
            name: "Dover Sole",
            description:
              "Pan-sautéed Dover sole, almonds, brown butter and soy-lime emulsion",
            price: 76,
            isGlutenFree: true,
          },
          {
            name: "Salmon",
            description:
              "Barely cooked organic salmon, spring vegetables, black truffle dashi",
            price: 64,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Third Course",
        items: [
          {
            name: "Wagyu Beef",
            description:
              "Seared Wagyu beef, wild mushrooms, baby spinach, black truffle sauce",
            price: 78,
            isGlutenFree: true,
          },
          {
            name: "Lamb",
            description:
              "Roasted rack of lamb, spring onion, fava beans, natural jus",
            price: 70,
            isGlutenFree: true,
          },
          {
            name: "Chocolate",
            description:
              "Dark chocolate cremeux, Sicilian pistachio, candied orange, brown butter ice cream",
            price: 24,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Strawberry",
            description:
              "Strawberry composition with vanilla crémeux, elderflower granita, and strawberry sorbet",
            price: 24,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Lounge Menu",
    description: "Casual dining options available in the lounge area",
    category: [
      {
        name: "Lounge Specialties",
        items: [
          {
            name: "Peekytoe Crab Cake",
            description: "Maryland crab cake with mustard emulsion",
            price: 38,
            isGlutenFree: false,
          },
          {
            name: "Le Bernardin Salmon Rillette",
            description:
              "Smoked and fresh salmon spread with toasted baguette slices",
            price: 32,
            isGlutenFree: false,
          },
          {
            name: "Lobster 'En Brioche'",
            description:
              "Warm lobster sandwich on toasted brioche with truffle butter",
            price: 46,
            isGlutenFree: false,
          },
        ],
      },
    ],
  },
];
