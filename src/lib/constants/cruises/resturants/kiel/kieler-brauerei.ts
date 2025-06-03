import { ResturantMenu } from "@/lib/types/types";

export const kielkielerBrauereiMenu: ResturantMenu[] = [
  {
    title: "Brauhaus Klassiker",
    description:
      "Traditional brewery favorites featuring our house-made craft beers",
    category: [
      {
        name: "Beer Snacks",
        items: [
          {
            name: "Brezel",
            description:
              "Giant pretzel with sea salt, served with beer cheese and sweet mustard",
            price: 5.9,
            isVegetarian: true,
          },
          {
            name: "Currywurst mit Pommes",
            description:
              "Sliced pork sausage with spicy curry ketchup and french fries",
            price: 10,
          },
          {
            name: "Bierbrotzeit",
            description:
              "Selection of local cheeses, cold cuts, pickles and freshly baked bread",
            price: 14.8,
          },
        ],
      },
    ],
  },
  {
    title: "Vorspeisen",
    description: "Appetizers perfect for sharing or starting your meal",
    category: [
      {
        name: "Starters",
        items: [
          {
            name: "Flammkuchen Classic",
            description:
              "Thin crust topped with crème fraîche, bacon and onions",
            price: 9.8,
          },
          {
            name: "Flammkuchen Vegetarisch",
            description:
              "Thin crust topped with crème fraîche, goat cheese, honey and walnuts",
            price: 10,
            isVegetarian: true,
          },
          {
            name: "Kieler Biersuppe",
            description:
              "Creamy beer soup with our house pilsner, croutons and chives",
            price: 6.9,
            isVegetarian: true,
          },
          {
            name: "Garnelen in Knoblauchbutter",
            description:
              "Garlic butter shrimp with fresh herbs and toasted bread",
            price: 12.9,
          },
        ],
      },
    ],
  },
  {
    title: "Hauptgerichte",
    description: "Hearty main courses featuring classic German brewery cuisine",
    category: [
      {
        name: "Brewery Specialties",
        items: [
          {
            name: "Schweinshaxe",
            description:
              "Crispy pork knuckle with beer gravy, sauerkraut and potato dumplings",
            price: 18.9,
          },
          {
            name: "Brauhaus Burger",
            description:
              "Beef patty with beer cheese, bacon, caramelized onions and homemade fries",
            price: 15.8,
          },
          {
            name: "Schnitzel 'Braumeister'",
            description:
              "Breaded pork schnitzel with mushroom cream sauce and spätzle",
            price: 16.9,
          },
        ],
      },
      {
        name: "From the Grill",
        items: [
          {
            name: "Grillplatte (für 2 Personen)",
            description:
              "Mixed grill platter with pork, beef, sausages, bacon and grilled vegetables",
            price: 38.5,
          },
          {
            name: "Lachsfilet",
            description:
              "Grilled salmon fillet with beer hollandaise, roasted potatoes and vegetables",
            price: 21,
            isGlutenFree: true,
          },
          {
            name: "Rumpsteak",
            description:
              "Grilled rump steak with herb butter, baked potato and salad",
            price: 24,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Vegetarian Options",
        items: [
          {
            name: "Kässpatzen",
            description:
              "Homemade egg noodles with melted mountain cheese and crispy fried onions",
            price: 13.9,
            isVegetarian: true,
          },
          {
            name: "Gefüllte Ofenkartoffel",
            description:
              "Baked potato filled with herb quark, roasted vegetables and salad",
            price: 12.5,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Pilzragout",
            description:
              "Creamy mushroom ragout with herb dumplings and mixed salad",
            price: 14.5,
            isVegetarian: true,
          },
        ],
      },
    ],
  },
  {
    title: "Biere vom Fass",
    description: "Our house-brewed draft beers, crafted in our on-site brewery",
    category: [
      {
        name: "Draft Beers",
        items: [
          {
            name: "Kieler Pils",
            description:
              "Classic German pilsner with hoppy character (0.3L/0.5L)",
            price: 3.8,
          },
          {
            name: "Kieler Dunkel",
            description:
              "Dark lager with notes of caramel and chocolate (0.3L/0.5L)",
            price: 4.2,
          },
          {
            name: "Kieler Weizen",
            description:
              "Unfiltered wheat beer with banana and clove notes (0.3L/0.5L)",
            price: 4.5,
          },
          {
            name: "Saisonbier",
            description: "Seasonal specialty beer, ask your server (0.3L/0.5L)",
            price: 4.9,
          },
          {
            name: "Bierprobe",
            description: "Tasting flight with 4 different beers (4 x 0.1L)",
            price: 9.9,
          },
        ],
      },
    ],
  },
  {
    title: "Desserts",
    description: "Sweet treats to end your brewery experience",
    category: [
      {
        name: "Sweet Endings",
        items: [
          {
            name: "Apfelstrudel",
            description:
              "Warm apple strudel with vanilla sauce and whipped cream",
            price: 7.9,
            isVegetarian: true,
          },
          {
            name: "Bierschokoladenkuchen",
            description:
              "Dark beer chocolate cake with cherry compote and beer ice cream",
            price: 8.5,
            isVegetarian: true,
          },
          {
            name: "Kaiserschmarrn",
            description:
              "Shredded pancake with apple sauce and vanilla ice cream",
            price: 8.9,
            isVegetarian: true,
          },
        ],
      },
    ],
  },
];
