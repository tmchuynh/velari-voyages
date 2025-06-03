import { ResturantMenu } from "@/lib/types/types";

export const buenosAiresdonJulioMenu: ResturantMenu[] = [
  // Food Menu
  {
    title: "Food Menu",
    description:
      "World-renowned Argentine parrilla featuring premium grass-fed beef and traditional grilling techniques",
    category: [
      {
        name: "Appetizers",
        items: [
          {
            name: "Provoleta Don Julio",
            description:
              "Signature grilled provolone cheese with dried oregano and chili flakes",
            price: 18,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Empanadas de Carne Cortada a Cuchillo",
            description: "Beef empanadas with hand-cut meat, olives, and eggs",
            price: 14,
          },
          {
            name: "Morcilla y Chorizo Criollo",
            description: "Blood sausage and traditional Argentine chorizo",
            price: 16,
            isGlutenFree: true,
          },
          {
            name: "Tablita de Fiambres Artesanales",
            description:
              "Selection of house-cured meats and sausages with pickled vegetables",
            price: 24,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Soups",
        items: [
          {
            name: "Cazuela de Lentejas",
            description: "Hearty lentil soup with vegetables and smoked bacon",
            price: 16,
            isGlutenFree: true,
          },
          {
            name: "Sopa de Cebolla Gratinada",
            description: "French onion soup with melted provolone cheese",
            price: 18,
            isVegetarian: true,
          },
        ],
      },
      {
        name: "Salads",
        items: [
          {
            name: "Ensalada Don Julio",
            description:
              "House salad with arugula, cherry tomatoes, and aged Parmesan",
            price: 16,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Ensalada de Rúcula y Peras",
            description: "Arugula with pears, walnuts, and Roquefort cheese",
            price: 18,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Main Courses",
        items: [
          {
            name: "Bife de Chorizo",
            description: "Premium grass-fed sirloin strip steak (14 oz)",
            price: 42,
            isGlutenFree: true,
          },
          {
            name: "Ojo de Bife",
            description: "Grass-fed ribeye steak (16 oz)",
            price: 46,
            isGlutenFree: true,
          },
          {
            name: "Vacío",
            description: "Traditional flank steak, slow-grilled (12 oz)",
            price: 38,
            isGlutenFree: true,
          },
          {
            name: "Entraña",
            description: "Outside skirt steak with crispy exterior (10 oz)",
            price: 40,
            isGlutenFree: true,
          },
          {
            name: "Bife de Lomo",
            description: "Tenderloin filet (10 oz)",
            price: 48,
            isGlutenFree: true,
          },
          {
            name: "Parrillada Completa para Dos",
            description:
              "Complete grill for two with various cuts of beef and sausages",
            price: 90,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Sides",
        items: [
          {
            name: "Papas Fritas a la Provenzal",
            description: "Hand-cut fries with garlic and parsley",
            price: 10,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Puré de Papas",
            description: "Classic mashed potatoes with butter",
            price: 10,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Verduras Grilladas",
            description: "Assortment of grilled seasonal vegetables",
            price: 12,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Espinacas Salteadas",
            description: "Sautéed spinach with garlic",
            price: 10,
            isVegetarian: true,
            isVegan: true,
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
      "Classic Argentine desserts prepared with traditional recipes and premium ingredients",
    category: [
      {
        name: "Cake and Pastries",
        items: [
          {
            name: "Panqueques con Dulce de Leche",
            description: "Thin crepes filled with dulce de leche",
            price: 16,
            isVegetarian: true,
          },
          {
            name: "Alfajor de Maicena",
            description:
              "Cornstarch cookies sandwiched with dulce de leche, rolled in coconut",
            price: 14,
            isVegetarian: true,
          },
        ],
      },
      {
        name: "Ice Cream",
        items: [
          {
            name: "Helado Artesanal de Dulce de Leche",
            description: "Artisanal dulce de leche ice cream",
            price: 12,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Degustación de Helados",
            description: "Selection of three house-made ice creams",
            price: 16,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Custards and Puddings",
        items: [
          {
            name: "Flan Casero con Dulce de Leche",
            description: "Homemade caramel custard with dulce de leche",
            price: 14,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Arroz con Leche",
            description: "Traditional rice pudding with cinnamon",
            price: 12,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Specialty Desserts",
        items: [
          {
            name: "Queso y Dulce",
            description:
              "Aged cheese with quince paste and sweet potato preserve",
            price: 16,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Marquise de Chocolate",
            description:
              "Dense chocolate cake with dulce de leche and Italian meringue",
            price: 18,
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
      "Award-winning wine cellar featuring Argentina's finest vintages and regional specialties",
    category: [
      {
        name: "Wines",
        items: [
          {
            name: "Catena Zapata Malbec",
            description: "Mendoza Malbec with black cherry and violet notes",
            price: 20,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Achaval Ferrer Cabernet Franc",
            description: "Elegant, medium-bodied red with herbaceous notes",
            price: 24,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Zuccardi Serie A Torrontés",
            description: "Aromatic white with floral notes and tropical fruit",
            price: 16,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Luigi Bosca Malbec D.O.C",
            description: "Single vineyard Malbec with structured tannins",
            price: 22,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Beers",
        items: [
          {
            name: "Quilmes Clásica",
            description: "Argentina's classic golden lager",
            price: 8,
            isVegan: true,
          },
          {
            name: "Patagonia Amber Lager",
            description: "Amber beer with caramel malt profile",
            price: 10,
            isVegan: true,
          },
          {
            name: "Antares Kolsch",
            description: "Light-bodied craft beer with mild hop character",
            price: 10,
            isVegan: true,
          },
        ],
      },
      {
        name: "Spirits/Liquors",
        items: [
          {
            name: "Fernet Branca",
            description: "Bitter Italian amaro, an Argentine favorite",
            price: 10,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Rutini Trumpeter Grappa",
            description: "Premium Argentine grape brandy",
            price: 16,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Antigal Extra Añejo Cognac",
            description: "Argentine cognac-style spirit, aged in oak",
            price: 18,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Cocktails",
        items: [
          {
            name: "Classic Negroni",
            description: "Equal parts gin, Campari, and sweet vermouth",
            price: 16,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Fernet con Cola",
            description: "The quintessential Argentine cocktail",
            price: 14,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Aperol Spritz",
            description: "Aperol, sparkling wine, and soda with orange",
            price: 14,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Specialty Drinks",
        items: [
          {
            name: "Malbec Sangria",
            description:
              "House sangria made with Malbec wine and seasonal fruit",
            price: 16,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Argentine Old Fashioned",
            description: "Bourbon infused with mate, orange bitters, and sugar",
            price: 18,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Don Julio Special Reserve",
            description: "Aged rum, house bitters, and orange essence",
            price: 20,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
];
