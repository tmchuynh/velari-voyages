import { ResturantMenu } from "@/lib/types/types";

export const montreallMenu: ResturantMenu[] = [
  {
    title: "Les Entrées",
    description: "Contemporary starters featuring local Quebec ingredients",
    category: [
      {
        name: "Appetizers",
        items: [
          {
            name: "Foie Gras Poêlé",
            description:
              "Pan-seared foie gras with brioche, apple compote, and maple glaze",
            price: 28,
            isGlutenFree: false,
          },
          {
            name: "Tartare de Boeuf",
            description:
              "Hand-cut beef tartare with truffle aioli, caper berries, and house chips",
            price: 24,
            isGlutenFree: true,
          },
          {
            name: "Homard et Betterave",
            description:
              "Poached lobster with heirloom beets, citrus, and dill crème fraîche",
            price: 26,
            isGlutenFree: true,
          },
          {
            name: "Champignons Sauvages",
            description:
              "Wild mushroom fricassee with poached egg and parmesan foam",
            price: 17,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Plats Principaux",
    description: "Refined main courses showcasing the best of Quebec cuisine",
    category: [
      {
        name: "Seafood",
        items: [
          {
            name: "Homard du Québec",
            description:
              "Butter-poached Quebec lobster with saffron risotto and seasonal vegetables",
            price: 52,
            isGlutenFree: true,
          },
          {
            name: "Flétan Sauvage",
            description:
              "Pan-seared wild halibut with cauliflower purée, sea asparagus, and beurre blanc",
            price: 46,
            isGlutenFree: true,
          },
          {
            name: "Pétoncles des Îles-de-la-Madeleine",
            description:
              "Seared Magdalen Islands scallops with black truffle, Jerusalem artichoke, and bacon vinaigrette",
            price: 44,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Meat & Poultry",
        items: [
          {
            name: "Carré d'Agneau du Québec",
            description:
              "Rack of Quebec lamb with rosemary jus, roasted heirloom carrots, and potato pavé",
            price: 48,
            isGlutenFree: true,
          },
          {
            name: "Canard Mulard",
            description:
              "Dry-aged Mulard duck breast with cherry gastrique, parsnip purée, and swiss chard",
            price: 42,
            isGlutenFree: true,
          },
          {
            name: "Filet de Boeuf",
            description:
              "Grass-fed beef tenderloin with foie gras, mushroom duxelles, and bordelaise sauce",
            price: 54,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Vegetarian",
        items: [
          {
            name: "Risotto aux Champignons",
            description:
              "Mushroom risotto with black truffle, aged parmesan, and fine herbs",
            price: 34,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Gnocchi Maison",
            description:
              "House-made ricotta gnocchi with spring vegetables, brown butter, and Quebec cheeses",
            price: 32,
            isVegetarian: true,
            isGlutenFree: false,
          },
        ],
      },
    ],
  },
  {
    title: "Les Desserts",
    description:
      "Artful sweet creations marrying French technique with Quebec inspiration",
    category: [
      {
        name: "Sweet Finishes",
        items: [
          {
            name: "Tarte au Sucre d'Érable",
            description:
              "Maple sugar tart with vanilla bean ice cream and candied pecans",
            price: 15,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Chocolat Grand Cru",
            description:
              "Valrhona chocolate mousse with caramel center, cocoa nib tuile",
            price: 17,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Crème Brûlée à la Lavande",
            description: "Lavender-infused crème brûlée with seasonal berries",
            price: 15,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Sélection de Fromages Québécois",
            description:
              "Quebec artisanal cheese selection with house-made preserves and crackers",
            price: 24,
            isVegetarian: true,
            isGlutenFree: false,
          },
        ],
      },
    ],
  },
  {
    title: "Menu Dégustation",
    description: "Chef's tasting menus showcasing seasonal Quebec specialties",
    category: [
      {
        name: "Tasting Experiences",
        items: [
          {
            name: "Menu Dégustation",
            description:
              "Seven-course tasting menu highlighting the best of Quebec terroir",
            price: 120,
            isGlutenFree: false,
          },
          {
            name: "Menu Prestige",
            description:
              "Nine-course luxury tasting menu with premium ingredients including caviar and truffles",
            price: 160,
            isGlutenFree: false,
          },
          {
            name: "Accord des Vins",
            description: "Wine pairing to complement the tasting menu",
            price: 80,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
];
