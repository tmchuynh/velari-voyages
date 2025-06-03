import { ResturantMenu } from "@/lib/types/types";

export const buenosAireselPreferidoDePalermoMenu: ResturantMenu[] = [
  // Food Menu
  {
    title: "Food Menu",
    description:
      "Traditional Argentine bodegón cuisine with Spanish and Italian influences in a historic setting",
    category: [
      {
        name: "Appetizers",
        items: [
          {
            name: "Tabla de Fiambres",
            description: "Selection of cured meats, cheeses, and olives",
            price: 22,
            isGlutenFree: true,
          },
          {
            name: "Tortilla Española",
            description: "Traditional Spanish potato and onion omelette",
            price: 14,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Matambre Arrollado",
            description:
              "Cold rolled flank steak stuffed with vegetables and herbs",
            price: 17,
            isGlutenFree: true,
          },
          {
            name: "Berenjenas al Escabeche",
            description: "Pickled eggplant with garlic and herbs",
            price: 12,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Soups",
        items: [
          {
            name: "Sopa de Lentejas",
            description: "Homestyle lentil soup with vegetables and chorizo",
            price: 14,
            isGlutenFree: true,
          },
          {
            name: "Crema de Zapallo",
            description: "Creamy pumpkin soup with croutons and olive oil",
            price: 12,
            isVegetarian: true,
          },
        ],
      },
      {
        name: "Salads",
        items: [
          {
            name: "Ensalada Mixta",
            description:
              "Simple lettuce, tomato, and onion salad with vinaigrette",
            price: 10,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Ensalada Mediterránea",
            description:
              "Mediterranean salad with olives, feta cheese, and roasted peppers",
            price: 14,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Main Courses",
        items: [
          {
            name: "Milanesa Napolitana",
            description:
              "Breaded beef cutlet topped with ham, tomato sauce, and melted cheese",
            price: 24,
          },
          {
            name: "Ravioles de Ricota y Espinaca",
            description:
              "Homemade spinach and ricotta ravioli with butter and sage sauce",
            price: 22,
            isVegetarian: true,
          },
          {
            name: "Bife a Caballo",
            description:
              "Traditional steak topped with fried eggs and served with fries",
            price: 28,
            isGlutenFree: true,
          },
          {
            name: "Cazuela de Mariscos",
            description:
              "Seafood stew with tomato broth, white wine, and herbs",
            price: 32,
            isGlutenFree: true,
          },
          {
            name: "Guiso de Lentejas",
            description: "Hearty lentil stew with vegetables and chorizo",
            price: 20,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Sides",
        items: [
          {
            name: "Papas Fritas",
            description: "Classic Argentine-style french fries",
            price: 8,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Puré de Calabaza",
            description: "Creamy mashed pumpkin with nutmeg",
            price: 8,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Ensalada de Rúcula y Parmesano",
            description: "Arugula and Parmesan salad with lemon dressing",
            price: 10,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },

  // Dessert Menu
  {
    title: "Dessert Menu",
    description:
      "Homemade traditional Argentine and Italian desserts with authentic recipes",
    category: [
      {
        name: "Cake and Pastries",
        items: [
          {
            name: "Pasta Frola",
            description: "Traditional Argentine lattice tart with quince paste",
            price: 10,
            isVegetarian: true,
          },
          {
            name: "Ricotta Cake",
            description:
              "Italian-inspired ricotta and lemon cake with orange zest",
            price: 12,
            isVegetarian: true,
          },
        ],
      },
      {
        name: "Ice Cream",
        items: [
          {
            name: "Helado de Vainilla y Dulce de Leche",
            description: "Vanilla and dulce de leche ice cream duo",
            price: 10,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Copa Almendrado",
            description:
              "Almond ice cream with chocolate sauce and crushed amaretti cookies",
            price: 12,
            isVegetarian: true,
          },
        ],
      },
      {
        name: "Custards and Puddings",
        items: [
          {
            name: "Flan Mixto",
            description:
              "Homemade caramel custard with dulce de leche and whipped cream",
            price: 10,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Budín de Pan",
            description: "Traditional bread pudding with raisins and caramel",
            price: 10,
            isVegetarian: true,
          },
        ],
      },
      {
        name: "Specialty Desserts",
        items: [
          {
            name: "Vigilante",
            description:
              "Classic combination of cheese and sweet quince or sweet potato paste",
            price: 12,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Postre Balcarce",
            description:
              "Layered dessert with meringue, dulce de leche, peaches, and cream",
            price: 14,
            isVegetarian: true,
          },
        ],
      },
    ],
  },

  // Alcohol Menu
  {
    title: "Beverage Menu",
    description:
      "Traditional Argentine wines, aperitifs, and classic drinks served in a nostalgic bodegón atmosphere",
    category: [
      {
        name: "Wines",
        items: [
          {
            name: "Malbec de la Casa",
            description:
              "House Malbec from Mendoza, smooth with plum and cherry notes",
            price: 9,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Bonarda Antigua",
            description:
              "Old-style Bonarda with rustic character and fruit notes",
            price: 10,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Vino Blanco de la Casa",
            description: "House white wine, crisp and refreshing",
            price: 8,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Vino Patero",
            description:
              "Traditional homestyle wine served in penguin-shaped pitchers",
            price: 17,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Beers",
        items: [
          {
            name: "Quilmes",
            description: "Classic Argentine lager",
            price: 6,
            isVegan: true,
          },
          {
            name: "Imperial",
            description: "Premium Argentine lager",
            price: 7,
            isVegan: true,
          },
          {
            name: "Antares Porter",
            description: "Craft dark beer with chocolate and coffee notes",
            price: 9,
            isVegan: true,
          },
        ],
      },
      {
        name: "Spirits/Liquors",
        items: [
          {
            name: "Fernet Branca",
            description: "Traditional Italian amaro popularized in Argentina",
            price: 8,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Hesperidina",
            description: "Historic Argentine orange liqueur",
            price: 7,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Cynar",
            description: "Artichoke-based bitter aperitif",
            price: 7,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Cocktails",
        items: [
          {
            name: "Fernando",
            description: "Classic Argentine cocktail of Fernet and cola",
            price: 10,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Vermú Preparado",
            description:
              "Sweet vermouth with soda, lemon peel, and a green olive",
            price: 8,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Porteño Spritz",
            description: "Aperitif with Cynar, sparkling wine, and soda water",
            price: 12,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Specialty Drinks",
        items: [
          {
            name: "Sidra Tirada",
            description:
              "Traditional draft apple cider served in the Argentine style",
            price: 9,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Cinzano al Sifón",
            description:
              "Cinzano vermouth sprayed with soda water from a siphon",
            price: 8,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Ginebra Bols",
            description: "Traditional Geneva gin served with lemon and sugar",
            price: 10,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
];
