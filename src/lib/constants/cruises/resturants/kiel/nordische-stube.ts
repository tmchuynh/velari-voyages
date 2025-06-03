import { ResturantMenu } from "@/lib/types/types";

export const kielnordischeStubeMenu: ResturantMenu[] = [
  {
    title: "Vorspeisen",
    description:
      "Traditional Northern German appetizers featuring fresh local ingredients and seafood",
    category: [
      {
        name: "Cold Starters",
        items: [
          {
            name: "Matjes Teller",
            description:
              "Traditional young herring fillets with apple-onion sauce and potatoes",
            price: 12.5,
            isGlutenFree: true,
          },
          {
            name: "Geräucherter Lachs",
            description:
              "House-smoked salmon with dill mustard sauce and rye bread",
            price: 13.8,
            isGlutenFree: false,
          },
          {
            name: "Nordfriesische Garnelen",
            description:
              "North Frisian shrimp cocktail with avocado and homemade cocktail sauce",
            price: 14.5,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Warm Starters",
        items: [
          {
            name: "Fischsuppe",
            description:
              "Creamy fish soup with North Sea catch, vegetables and a splash of cognac",
            price: 8.9,
            isGlutenFree: false,
          },
          {
            name: "Grünkohl Creme",
            description: "Creamed kale soup with smoked sausage croutons",
            price: 7.5,
            isGlutenFree: false,
          },
          {
            name: "Kartoffelpuffer",
            description: "Potato pancakes with apple sauce and sour cream",
            price: 8.8,
            isVegetarian: true,
          },
        ],
      },
    ],
  },
  {
    title: "Hauptgerichte",
    description:
      "Hearty main courses featuring regional specialties from land and sea",
    category: [
      {
        name: "Seafood Specialties",
        items: [
          {
            name: "Pannfisch",
            description:
              "Pan-fried cod with mustard sauce, fried potatoes and pickled beetroot",
            price: 21,
            isGlutenFree: true,
          },
          {
            name: "Scholle 'Finkenwerder Art'",
            description:
              "Plaice with North Sea shrimps, bacon and parsley butter, served with potatoes",
            price: 24,
            isGlutenFree: true,
          },
          {
            name: "Kieler Sprotte",
            description:
              "Smoked sprats with scrambled eggs, fried potatoes and mixed salad",
            price: 19.8,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Meat Dishes",
        items: [
          {
            name: "Labskaus",
            description:
              "Traditional sailor's meal with corned beef, beetroot, pickles, fried egg and herring",
            price: 18.5,
            isGlutenFree: false,
          },
          {
            name: "Holsteiner Schnitzel",
            description:
              "Breaded pork cutlet with fried egg, capers and anchovy, served with fried potatoes",
            price: 19.9,
            isGlutenFree: false,
          },
          {
            name: "Grünkohl mit Pinkel",
            description:
              "Kale with smoked sausage, cured pork and caramelized potatoes (seasonal)",
            price: 17.8,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Vegetarian Options",
        items: [
          {
            name: "Käsespätzle",
            description:
              "Homemade egg noodles with melted cheese, caramelized onions and mixed salad",
            price: 14.9,
            isVegetarian: true,
          },
          {
            name: "Gemüsegratin",
            description:
              "Seasonal vegetables au gratin with herb potatoes and sour cream",
            price: 13.5,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Desserts",
    description: "Sweet endings with traditional North German flavors",
    category: [
      {
        name: "Sweet Treats",
        items: [
          {
            name: "Rote Grütze",
            description:
              "Red berry compote with vanilla sauce and crumbled shortbread",
            price: 7.5,
            isVegetarian: true,
          },
          {
            name: "Apfel Strudel",
            description:
              "Warm apple strudel with vanilla ice cream and whipped cream",
            price: 8.9,
            isVegetarian: true,
          },
          {
            name: "Kieler Rumtopf",
            description:
              "Seasonal fruits preserved in rum with vanilla ice cream",
            price: 9.5,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Getränke",
    description: "Regional beverages and spirits to complement your meal",
    category: [
      {
        name: "Local Specialties",
        items: [
          {
            name: "Flensburger Pilsener",
            description: "Traditional North German pilsner (0.3L)",
            price: 3.8,
          },
          {
            name: "Küstennebel",
            description:
              "Traditional herb liqueur from the North Sea coast (2cl)",
            price: 4.2,
          },
          {
            name: "Holsteiner Apfelsaft",
            description: "Freshly pressed apple juice from Holstein orchards",
            price: 3.5,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
];
