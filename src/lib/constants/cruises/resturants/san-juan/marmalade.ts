import { ResturantMenu } from "@/lib/types/types";

export const sanJuanmarmaladeMenu: ResturantMenu[] = [
  {
    title: "Tasting Menus",
    description:
      "Chef Peter Schintler's globally inspired culinary experiences",
    category: [
      {
        name: "Chef's Selections",
        items: [
          {
            name: "Four Course Tasting",
            description:
              "A curated selection of four signature courses with optional wine pairing",
            price: 89,
            isGlutenFree: false,
          },
          {
            name: "Six Course Tasting",
            description:
              "An expanded journey through six of Chef Peter's most celebrated creations",
            price: 119,
            isGlutenFree: false,
          },
          {
            name: "Wine Pairing",
            description: "Expert wine pairings to complement your tasting menu",
            price: 69,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Starters",
    description:
      "Innovative appetizers blending global techniques with local ingredients",
    category: [
      {
        name: "Small Plates",
        items: [
          {
            name: "White Bean Soup",
            description:
              "Signature dish with truffle oil, pancetta and black pepper croutons",
            price: 17,
            isGlutenFree: false,
          },
          {
            name: "Tiny Tuna & Foie Tacos",
            description:
              "Crispy corn shells, bluefin tuna tartare, foie gras mousse, caviar",
            price: 24,
            isGlutenFree: true,
          },
          {
            name: "Popcorn Shrimp & Grits",
            description:
              "Tempura Caribbean shrimp, truffled corn grits, paprika butter",
            price: 21,
            isGlutenFree: true,
          },
          {
            name: "Caribbean Octopus",
            description:
              "Sous-vide and flame-finished with sweet potato purée, chorizo crumble",
            price: 22,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Salads & Vegetables",
        items: [
          {
            name: "Organic Arugula Salad",
            description:
              "Poached pears, caramelized walnuts, Gorgonzola cheese, port wine reduction",
            price: 18,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Roasted Beet Salad",
            description:
              "Honey-roasted beets, goat cheese mousse, candied pistachios, citrus vinaigrette",
            price: 19,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Main Courses",
    description:
      "Globally influenced entrées showcasing the finest ingredients with Puerto Rican touches",
    category: [
      {
        name: "Land",
        items: [
          {
            name: "Coffee Crusted Filet Mignon",
            description:
              "Puerto Rican coffee-rubbed beef, truffled potato purée, red wine reduction",
            price: 48,
            isGlutenFree: true,
          },
          {
            name: "Herb Crusted Lamb Rack",
            description:
              "Dijon and herb crust, Manchego polenta, port wine demi-glace",
            price: 52,
            isGlutenFree: false,
          },
          {
            name: "Organic Chicken Breast",
            description:
              "Pan-seared with mushroom risotto, roasted garlic jus, herb oil",
            price: 36,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Sea",
        items: [
          {
            name: "Miso Glazed Black Cod",
            description:
              "48-hour miso marinade, forbidden rice, ginger-scallion emulsion",
            price: 44,
            isGlutenFree: true,
          },
          {
            name: "Pan-Seared Scallops",
            description:
              "U-10 diver scallops, sweet corn purée, crispy pork belly, cider reduction",
            price: 42,
            isGlutenFree: true,
          },
          {
            name: "Caribbean Lobster",
            description:
              "Butter-poached lobster tail, saffron risotto, champagne foam",
            price: 58,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Vegetarian",
        items: [
          {
            name: "Wild Mushroom Risotto",
            description:
              "Truffle-scented arborio rice, seasonal wild mushrooms, aged parmesan",
            price: 32,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Cauliflower Steak",
            description:
              "Roasted cauliflower, romesco sauce, olive tapenade, pine nuts",
            price: 29,
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
      "Artistic sweet creations blending classic techniques with Puerto Rican flavors",
    category: [
      {
        name: "Sweet Finishes",
        items: [
          {
            name: "White Chocolate Bread Pudding",
            description:
              "Signature warm bread pudding with vanilla bean ice cream and rum caramel",
            price: 15,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Passion Fruit Soufflé",
            description:
              "Light and airy soufflé with tropical passion fruit and coconut cream anglaise",
            price: 16,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Chocolate Decadence",
            description:
              "Flourless chocolate cake, coffee ganache, salted caramel, gold leaf",
            price: 17,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Artisanal Cheese Selection",
            description:
              "Curated international cheeses with house-made preserves and crackers",
            price: 24,
            isVegetarian: true,
            isGlutenFree: false,
          },
        ],
      },
    ],
  },
];
