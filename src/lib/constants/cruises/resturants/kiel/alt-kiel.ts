import { ResturantMenu } from "@/lib/types/types";

export const kielaltKielMenu: ResturantMenu[] = [
  {
    title: "Traditionsgerichte",
    description:
      "Traditional dishes that have been served in Kiel for generations",
    category: [
      {
        name: "Local Starters",
        items: [
          {
            name: "Kieler Sprotten",
            description:
              "Smoked sprats from Kiel with buttered rye bread and pickles",
            price: 9.8,
            isGlutenFree: false,
          },
          {
            name: "Hausgemachte Sülze",
            description:
              "Homemade meat aspic with remoulade sauce, fried potatoes and salad",
            price: 10,
            isGlutenFree: true,
          },
          {
            name: "Matjes Tatar",
            description:
              "Young herring tartare with apple, onion, pickle and egg on pumpernickel",
            price: 11,
            isGlutenFree: false,
          },
        ],
      },
    ],
  },
  {
    title: "Suppen & Eintöpfe",
    description: "Hearty soups and stews perfect for Kiel's maritime climate",
    category: [
      {
        name: "Soups & Stews",
        items: [
          {
            name: "Erbsensuppe mit Würstchen",
            description:
              "Traditional split pea soup with smoked sausage and bacon",
            price: 8.5,
            isGlutenFree: true,
          },
          {
            name: "Bohnensuppe",
            description: "Bean soup with beef, vegetables and herbs",
            price: 7.9,
            isGlutenFree: true,
          },
          {
            name: "Holsteiner Kartoffelsuppe",
            description:
              "Creamy Holstein potato soup with leeks, carrots and smoked ham",
            price: 7.5,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Hauptgerichte",
    description: "Main courses celebrating north German culinary traditions",
    category: [
      {
        name: "Regional Specialties",
        items: [
          {
            name: "Labskaus",
            description:
              "Traditional sailor's dish with corned beef, beetroot, pickle, fried egg and herring",
            price: 16.9,
            isGlutenFree: false,
          },
          {
            name: "Kohlroulade",
            description:
              "Cabbage roll filled with ground meat and rice, served with potatoes and white sauce",
            price: 15.8,
            isGlutenFree: true,
          },
          {
            name: "Grünkohl mit Kassler",
            description:
              "Kale with smoked pork chop, sausages and caramelized potatoes (seasonal)",
            price: 17.5,
            isGlutenFree: true,
          },
          {
            name: "Schnüsch",
            description:
              "Traditional vegetable stew with potatoes, beans, carrots and cream",
            price: 14.5,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Fish Dishes",
        items: [
          {
            name: "Kieler Fischfrikadellen",
            description:
              "Fish patties with mustard sauce, potatoes and cucumber salad",
            price: 15.9,
            isGlutenFree: false,
          },
          {
            name: "Brathering",
            description:
              "Fried marinated herring with onions, potatoes and mixed salad",
            price: 14.8,
            isGlutenFree: true,
          },
          {
            name: "Räucherfischplatte",
            description:
              "Assortment of smoked fish with horseradish cream, bread and butter",
            price: 19.5,
            isGlutenFree: false,
          },
        ],
      },
      {
        name: "Meat Dishes",
        items: [
          {
            name: "Holsteiner Schnitzel",
            description:
              "Breaded pork schnitzel with fried egg, capers and anchovy, served with fried potatoes",
            price: 18.9,
            isGlutenFree: false,
          },
          {
            name: "Rinderroulade",
            description:
              "Beef roulade with bacon, onion and pickle filling, served with red cabbage and potatoes",
            price: 19.8,
            isGlutenFree: true,
          },
          {
            name: "Schweinenacken",
            description:
              "Slow-roasted pork neck with braised vegetables and potato dumplings",
            price: 17.5,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Für den kleinen Hunger",
    description: "Smaller dishes for a light meal or snack",
    category: [
      {
        name: "Light Meals",
        items: [
          {
            name: "Strammer Max",
            description:
              "Open-faced rye bread sandwich with ham and fried eggs",
            price: 9.9,
            isGlutenFree: false,
          },
          {
            name: "Kartoffelpuffer",
            description: "Potato pancakes with apple sauce and sour cream",
            price: 8.9,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Heringsteller",
            description:
              "Herring fillets in various preparations with bread and butter",
            price: 12.5,
            isGlutenFree: false,
          },
        ],
      },
    ],
  },
  {
    title: "Hausgemachte Desserts",
    description:
      "Traditional northern German desserts made from old family recipes",
    category: [
      {
        name: "Sweet Treats",
        items: [
          {
            name: "Rote Grütze",
            description: "Red berry compote with vanilla sauce and fresh mint",
            price: 6.9,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Kieler Rumtopf",
            description:
              "Fruits preserved in rum served with vanilla ice cream",
            price: 7.5,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Friesentorte",
            description: "Traditional Frisian cake with cream and berries",
            price: 6.5,
            isVegetarian: true,
            isGlutenFree: false,
          },
        ],
      },
    ],
  },
  {
    title: "Getränke",
    description:
      "Traditional beverages to complement your north German dining experience",
    category: [
      {
        name: "Regional Specialties",
        items: [
          {
            name: "Kieler Sprotte (Bier)",
            description: "Local dark beer specialty (0.3L)",
            price: 3.9,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: false,
          },
          {
            name: "Alte Kieler Löwensenf",
            description: "Traditional herbal liqueur (2cl)",
            price: 3.5,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Friesentee mit Kluntjes",
            description: "East Frisian tea with rock sugar and cream",
            price: 3.8,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
];
