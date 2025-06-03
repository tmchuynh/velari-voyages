import { ResturantMenu } from "@/lib/types/types";

export const southamptontheOxfordBrasserieMenu: ResturantMenu[] = [
  {
    title: "Hors d'Oeuvres",
    category: [
      {
        name: "Appetizers",
        items: [
          {
            name: "French Onion Soup",
            description: "Classic soup with Gruyère crouton",
            price: 8.5,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Moules Marinières",
            description:
              "Mussels cooked in white wine, garlic, shallots and cream",
            price: 9.95,
            isGlutenFree: true,
          },
          {
            name: "Chicken Liver Parfait",
            description:
              "Smooth pâté with red onion marmalade and toasted brioche",
            price: 9.25,
            isGlutenFree: false,
          },
          {
            name: "Goat's Cheese Soufflé",
            description: "Twice-baked with spinach and walnut salad",
            price: 9.95,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "To Share",
        items: [
          {
            name: "Charcuterie Board",
            description:
              "Selection of cured meats, cornichons, olives and crusty bread",
            price: 16.95,
            isGlutenFree: false,
          },
          {
            name: "Baked Camembert",
            description: "With garlic, rosemary, honey and crusty bread",
            price: 14.5,
            isVegetarian: true,
            isGlutenFree: false,
          },
        ],
      },
    ],
    description: "Classic French starters and sharing plates",
  },
  {
    title: "Les Plats Principaux",
    category: [
      {
        name: "Main Courses",
        items: [
          {
            name: "Beef Bourguignon",
            description:
              "Slow-cooked beef with red wine, lardons, mushrooms and baby onions, served with mashed potatoes",
            price: 19.95,
            isGlutenFree: true,
          },
          {
            name: "Coq au Vin",
            description:
              "Chicken braised in red wine with mushrooms, lardons and herbs, served with mashed potatoes",
            price: 18.5,
            isGlutenFree: true,
          },
          {
            name: "Duck Confit",
            description:
              "Slow-cooked duck leg with Toulouse cassoulet of beans and sausage",
            price: 22.5,
            isGlutenFree: true,
          },
          {
            name: "Bouillabaisse",
            description:
              "Classic Provençal seafood stew with rouille and crusty bread",
            price: 24.95,
            isGlutenFree: false,
          },
        ],
      },
      {
        name: "Grills",
        items: [
          {
            name: "Steak Frites",
            description:
              "8oz sirloin steak with fries, roasted tomato, and peppercorn sauce",
            price: 24.95,
            isGlutenFree: true,
          },
          {
            name: "Côte de Boeuf",
            description:
              "16oz ribeye on the bone with fries, béarnaise sauce, and watercress (for sharing)",
            price: 58,
            isGlutenFree: true,
          },
          {
            name: "Rack of Lamb",
            description:
              "Herb crusted with dauphinoise potatoes, seasonal vegetables and rosemary jus",
            price: 26.95,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Vegetarian",
        items: [
          {
            name: "Ratatouille Tart",
            description:
              "Roasted Mediterranean vegetables in puff pastry with goat's cheese and herb salad",
            price: 16.95,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Wild Mushroom Risotto",
            description:
              "Arborio rice with woodland mushrooms, white wine, parmesan and truffle oil",
            price: 17.5,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
    description: "French classics and contemporary dishes",
  },
  {
    title: "Poisson",
    category: [
      {
        name: "Fish & Seafood",
        items: [
          {
            name: "Sole Meunière",
            description:
              "Classic dish of Dover sole pan-fried in butter with capers, lemon and parsley",
            price: 32,
            isGlutenFree: true,
          },
          {
            name: "Sea Bass en Papillote",
            description:
              "Fillet baked with fennel, tomato, white wine and herbs",
            price: 22.5,
            isGlutenFree: true,
          },
          {
            name: "Moules Frites",
            description:
              "Mussels cooked in white wine, shallots, garlic and cream, served with fries",
            price: 18.95,
            isGlutenFree: true,
          },
        ],
      },
    ],
    description: "Fresh seafood prepared with French flair",
  },
  {
    title: "Les Accompagnements",
    category: [
      {
        name: "Side Dishes",
        items: [
          {
            name: "Pommes Frites",
            description: "Thin-cut French fries",
            price: 4.25,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Gratin Dauphinois",
            description: "Thinly sliced potatoes baked with cream and garlic",
            price: 4.95,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Haricots Verts",
            description: "French green beans with shallot butter",
            price: 4.5,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Salade Verte",
            description: "Green salad with house dressing",
            price: 4.25,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
    description: "Perfect additions to your meal",
  },
  {
    title: "Les Desserts",
    category: [
      {
        name: "Sweet Endings",
        items: [
          {
            name: "Crème Brûlée",
            description: "Classic vanilla custard with caramelized sugar top",
            price: 8.5,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Tarte au Citron",
            description: "Lemon tart with raspberry coulis and crème fraîche",
            price: 8.25,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Chocolate Fondant",
            description:
              "Warm chocolate pudding with molten center and vanilla ice cream",
            price: 8.95,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Crêpes Suzette",
            description:
              "Classic dessert of thin pancakes with caramelized orange sauce and Grand Marnier",
            price: 9.95,
            isVegetarian: true,
            isGlutenFree: false,
          },
        ],
      },
      {
        name: "Fromage",
        items: [
          {
            name: "French Cheese Selection",
            description:
              "Selection of fine French cheeses with grapes, celery, chutney and biscuits",
            price: 12.95,
            isVegetarian: true,
            isGlutenFree: false,
          },
        ],
      },
    ],
    description: "Indulgent French desserts to complete your dining experience",
  },
];
