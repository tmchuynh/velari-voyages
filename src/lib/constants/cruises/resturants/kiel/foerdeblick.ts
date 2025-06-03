import { ResturantMenu } from "@/lib/types/types";

export const kielfoerdeblickMenu: ResturantMenu[] = [
  {
    title: "Vorspeisen & Salate",
    description:
      "Fresh starters and salads featuring local ingredients with a view of Kiel Fjord",
    category: [
      {
        name: "Starters",
        items: [
          {
            name: "Kieler Garnelen",
            description:
              "Local shrimp cocktail with mango, avocado and cocktail sauce",
            price: 14.5,
            isGlutenFree: true,
          },
          {
            name: "Geräuchertes Forellenfilet",
            description:
              "Smoked trout fillet with apple-horseradish cream and salad bouquet",
            price: 12.9,
            isGlutenFree: true,
          },
          {
            name: "Ziegenkäse im Speckmantel",
            description:
              "Goat cheese wrapped in bacon with honey, thyme and walnuts",
            price: 13.8,
          },
        ],
      },
      {
        name: "Salads",
        items: [
          {
            name: "Fördeblick Salat",
            description:
              "Mixed greens with cherry tomatoes, cucumber, radishes and house dressing",
            price: 9.9,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Caesar Salat",
            description:
              "Romaine lettuce with parmesan, croutons and Caesar dressing",
            price: 10,
            isVegetarian: true,
          },
          {
            name: "Salat mit Räucherlachs",
            description:
              "Mixed salad with smoked salmon, dill-mustard dressing and potato rösti",
            price: 15.9,
          },
        ],
      },
    ],
  },
  {
    title: "Suppen",
    description: "Warming soups for a perfect start or light meal",
    category: [
      {
        name: "Homemade Soups",
        items: [
          {
            name: "Fischsuppe Fördeblick",
            description:
              "Creamy fish soup with Baltic Sea catch, saffron and Pernod",
            price: 8.9,
          },
          {
            name: "Tomatencremesuppe",
            description: "Tomato cream soup with basil pesto and crème fraîche",
            price: 7.5,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Kartoffelsuppe mit Würstchen",
            description:
              "Creamy potato soup with sliced smoked sausage and chives",
            price: 7.9,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Meeresfrüchte & Fisch",
    description:
      "Seafood and fish specialties with panoramic views of the Baltic Sea",
    category: [
      {
        name: "From the Sea",
        items: [
          {
            name: "Fischpfanne Fördeblick",
            description:
              "Assorted fish fillets pan-fried with herb butter, vegetables and potatoes",
            price: 23.9,
            isGlutenFree: true,
          },
          {
            name: "Gebratener Ostsee-Lachs",
            description:
              "Pan-seared Baltic salmon with dill sauce, spinach and crushed potatoes",
            price: 22,
            isGlutenFree: true,
          },
          {
            name: "Scholle Finkenwerder Art",
            description:
              "Whole plaice with North Sea shrimps, bacon and parsley potatoes",
            price: 25.8,
            isGlutenFree: true,
          },
          {
            name: "Miesmuscheln Klassisch",
            description:
              "Mussels steamed in white wine with herbs, garlic and french fries (seasonal)",
            price: 21,
          },
        ],
      },
    ],
  },
  {
    title: "Fleischgerichte",
    description: "Classic meat dishes with a Schleswig-Holstein influence",
    category: [
      {
        name: "Meat Specialties",
        items: [
          {
            name: "Wiener Schnitzel",
            description:
              "Traditional veal schnitzel with warm potato salad and cranberries",
            price: 23.9,
          },
          {
            name: "Rinderfilet",
            description:
              "Grilled beef tenderloin with herb butter, vegetables and potato gratin",
            price: 29.8,
            isGlutenFree: true,
          },
          {
            name: "Geschmorte Lammhaxe",
            description:
              "Braised lamb shank with red wine sauce, rosemary and mashed potatoes",
            price: 24,
            isGlutenFree: true,
          },
          {
            name: "Hausgemachte Frikadellen",
            description:
              "Homemade meat patties with onion sauce, mashed potatoes and pickled beetroot",
            price: 16.9,
          },
        ],
      },
    ],
  },
  {
    title: "Vegetarische Gerichte",
    description: "Flavorful vegetarian options showcasing seasonal produce",
    category: [
      {
        name: "Vegetarian Mains",
        items: [
          {
            name: "Tagliatelle mit Waldpilzen",
            description:
              "Tagliatelle pasta with forest mushrooms, garlic, herbs and cream sauce",
            price: 15.9,
            isVegetarian: true,
          },
          {
            name: "Ofenkartoffel mit Quark",
            description:
              "Baked potato with herb quark, grilled vegetables and salad",
            price: 13.5,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Gemüse-Risotto",
            description: "Creamy risotto with seasonal vegetables and parmesan",
            price: 14.9,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Desserts",
    description: "Sweet endings to enjoy with the panoramic fjord views",
    category: [
      {
        name: "Sweet Treats",
        items: [
          {
            name: "Hausgemachtes Tiramisu",
            description: "Classic tiramisu with Amaretto and cocoa",
            price: 7.9,
            isVegetarian: true,
          },
          {
            name: "Warmer Apfelstrudel",
            description:
              "Warm apple strudel with vanilla sauce and cinnamon ice cream",
            price: 8.5,
            isVegetarian: true,
          },
          {
            name: "Crème Brûlée",
            description: "Classic vanilla crème brûlée with fresh berries",
            price: 8.9,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Käseauswahl",
            description:
              "Selection of regional cheeses with fig mustard and grapes",
            price: 12.5,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
];
