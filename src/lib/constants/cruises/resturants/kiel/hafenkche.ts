import { ResturantMenu } from "@/lib/types/types";

export const kielhafenkCheMenu: ResturantMenu[] = [
  {
    title: "Frische Fänge",
    description:
      "Fresh catches from the Baltic Sea, prepared with seasonal ingredients",
    category: [
      {
        name: "Cold Seafood Starters",
        items: [
          {
            name: "Austern",
            description:
              "Fresh oysters with mignonette sauce and lemon (3 pieces)",
            price: 12.5,
            isGlutenFree: true,
          },
          {
            name: "Krabbenbrot",
            description:
              "Open-faced sandwich with North Sea shrimps, egg and herb mayonnaise",
            price: 12.9,
          },
          {
            name: "Räucherfisch-Variation",
            description:
              "Selection of smoked fish with horseradish cream, capers and toast",
            price: 15.8,
          },
        ],
      },
      {
        name: "Soups",
        items: [
          {
            name: "Hafenküche Fischsuppe",
            description:
              "Rich fish soup with mussels, shrimp, fish and saffron",
            price: 8.9,
          },
          {
            name: "Creme von Sylter Kartoffeln",
            description: "Creamy Sylt potato soup with crispy bacon and chives",
            price: 7.5,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Fisch Hauptgerichte",
    description:
      "Main courses featuring the freshest fish from the Baltic and North Sea",
    category: [
      {
        name: "Fish Specialties",
        items: [
          {
            name: "Kieler Sprotten",
            description:
              "Traditional smoked sprats with mustard sauce, potatoes and salad",
            price: 17.9,
            isGlutenFree: true,
          },
          {
            name: "Ostsee-Dorsch",
            description:
              "Pan-fried Baltic cod fillet with mustard sauce and roasted potatoes",
            price: 22,
            isGlutenFree: true,
          },
          {
            name: "Gebratene Scholle",
            description:
              "Whole fried plaice with North Sea shrimps, parsley butter and potatoes",
            price: 24,
            isGlutenFree: true,
          },
          {
            name: "Matjes 'Hausfrauen Art'",
            description:
              "Soused herring with apples, onions, sour cream and boiled potatoes",
            price: 16.9,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Seafood Platters",
        items: [
          {
            name: "Fischplatte Hafenküche",
            description:
              "Selection of grilled and smoked fish with shrimps, mussels and two sides",
            price: 28.9,
            isGlutenFree: true,
          },
          {
            name: "Muschelplatte (saisonal)",
            description:
              "Steamed mussels in white wine and herbs with bread and fries",
            price: 21,
          },
        ],
      },
    ],
  },
  {
    title: "Fleisch & Vegetarisches",
    description: "Options for meat-lovers and vegetarians alike",
    category: [
      {
        name: "Meat Dishes",
        items: [
          {
            name: "Wiener Schnitzel",
            description:
              "Traditional breaded veal cutlet with potato salad and lingonberries",
            price: 21,
          },
          {
            name: "Holsteiner Bauernfrühstück",
            description: "Pan-fried potatoes with bacon, onions and eggs",
            price: 14.5,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Vegetarian Choices",
        items: [
          {
            name: "Gemüserisotto",
            description:
              "Creamy risotto with seasonal vegetables, herbs and parmesan",
            price: 14.9,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Spinat-Käse Tarte",
            description: "Homemade spinach and cheese tart with mixed salad",
            price: 13.5,
            isVegetarian: true,
          },
        ],
      },
    ],
  },
  {
    title: "Nachspeisen",
    description: "Delicious desserts with a Northern German twist",
    category: [
      {
        name: "Sweet Temptations",
        items: [
          {
            name: "Norddeutsche Rote Grütze",
            description: "Red berry compote with vanilla sauce",
            price: 7.5,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Friesische Teecreme",
            description:
              "East Frisian tea custard with caramelized sugar and shortbread",
            price: 7.9,
            isVegetarian: true,
          },
          {
            name: "Apfel-Zimt-Parfait",
            description: "Apple-cinnamon parfait with caramel sauce",
            price: 8.5,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Getränke",
    description:
      "Refreshing beverages to accompany your harbor-side dining experience",
    category: [
      {
        name: "Wines",
        items: [
          {
            name: "Riesling Trocken (Glas)",
            description: "Dry German Riesling with mineral notes (0.2L)",
            price: 6.9,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Grauer Burgunder (Glas)",
            description:
              "Pinot Gris from Baden region with pear and almond notes (0.2L)",
            price: 7.2,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Local Drinks",
        items: [
          {
            name: "Kieler Sprotte",
            description: "Local beer specialty with a hint of smoke (0.3L)",
            price: 4.2,
          },
          {
            name: "Hausgemachte Schorle",
            description: "Homemade fruit spritzer with seasonal fruits",
            price: 4.5,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
];
