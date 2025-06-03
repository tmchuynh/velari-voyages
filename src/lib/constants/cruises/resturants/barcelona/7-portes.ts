import { ResturantMenu } from "@/lib/types/types";

export const barcelona7PortesMenu: ResturantMenu[] = [
  // Food Menu
  {
    title: "Food Menu",
    description:
      "Classic Catalan cuisine from Barcelona's historic restaurant, established in 1836",
    category: [
      {
        name: "Appetizers",
        items: [
          {
            name: "Jamón Ibérico de Bellota",
            description: "Hand-carved acorn-fed Iberian ham",
            price: 28,
            isGlutenFree: true,
          },
          {
            name: "Anchoas del Cantábrico",
            description: "Premium Cantabrian anchovies with pa amb tomàquet",
            price: 18,
          },
          {
            name: "Escalivada",
            description:
              "Roasted eggplant, red peppers, and onions with olive oil",
            price: 14,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Esqueixada de Bacalao",
            description:
              "Traditional Catalan salad with shredded salt cod and tomatoes",
            price: 16,
            isGlutenFree: true,
          },
          {
            name: "Croquetas de Jamón",
            description: "Creamy Iberian ham croquettes",
            price: 15,
          },
          {
            name: "Pulpo a la Gallega",
            description: "Galician-style octopus with paprika and potatoes",
            price: 20,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Soups",
        items: [
          {
            name: "Sopa de Pescado y Marisco",
            description: "Traditional seafood soup with saffron",
            price: 18,
            isGlutenFree: true,
          },
          {
            name: "Escudella i Carn d'Olla",
            description: "Hearty Catalan soup with meat, vegetables, and pasta",
            price: 16,
          },
          {
            name: "Gazpacho Andaluz",
            description: "Chilled tomato and vegetable soup",
            price: 12,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Salads",
        items: [
          {
            name: "Ensalada 7 Portes",
            description:
              "House salad with lettuces, tomatoes, onions, and olives",
            price: 14,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Xató",
            description:
              "Endive salad with cod, anchovies, olives, and romesco sauce",
            price: 16,
            isGlutenFree: true,
          },
          {
            name: "Ensalada de Queso de Cabra",
            description: "Goat cheese salad with mixed greens and walnuts",
            price: 17,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Main Courses",
        items: [
          {
            name: "Paella Parellada",
            description:
              "The house specialty rice with deboned seafood and meat",
            price: 32,
            isGlutenFree: true,
          },
          {
            name: "Arroz Negro",
            description: "Black rice with squid ink and seafood",
            price: 28,
            isGlutenFree: true,
          },
          {
            name: "Zarzuela de Mariscos",
            description:
              "Traditional Catalan seafood stew with lobster and fish",
            price: 36,
            isGlutenFree: true,
          },
          {
            name: "Canelons de la Casa",
            description: "Homemade cannelloni stuffed with roasted meat",
            price: 24,
          },
          {
            name: "Solomillo al Pedro Ximénez",
            description: "Beef tenderloin with Pedro Ximénez sherry sauce",
            price: 34,
            isGlutenFree: true,
          },
          {
            name: "Bacalao a la Llauna",
            description: "Codfish baked in a tin with paprika and garlic",
            price: 29,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Sides",
        items: [
          {
            name: "Patatas Bravas 7 Portes",
            description: "Fried potatoes with spicy sauce and aioli",
            price: 10,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Pa amb Tomàquet",
            description:
              "Toasted bread rubbed with tomato, olive oil, and salt",
            price: 6,
            isVegetarian: true,
            isVegan: true,
          },
          {
            name: "Espinacas a la Catalana",
            description: "Sautéed spinach with pine nuts and raisins",
            price: 8,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Pimientos de Padrón",
            description: "Fried Padrón peppers, some spicy, some not",
            price: 9,
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
      "Traditional Catalan desserts prepared following historic recipes",
    category: [
      {
        name: "Cake and Pastries",
        items: [
          {
            name: "Tarta Santiago",
            description: "Traditional almond cake with powdered sugar",
            price: 10,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Coca de Llavaneres",
            description:
              "Traditional Catalan pastry with sweetened cream filling",
            price: 12,
            isVegetarian: true,
          },
          {
            name: "Xuixos de Girona",
            description: "Deep-fried pastry filled with crema catalana",
            price: 11,
            isVegetarian: true,
          },
        ],
      },
      {
        name: "Ice Cream",
        items: [
          {
            name: "Turron Ice Cream",
            description: "Almond nougat ice cream with honey",
            price: 9,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Lemon Sorbet with Cava",
            description:
              "Refreshing lemon sorbet topped with Spanish sparkling wine",
            price: 10,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Chocolate Fig Ice Cream",
            description: "Rich dark chocolate ice cream with fig swirls",
            price: 9,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Custards and Puddings",
        items: [
          {
            name: "Crema Catalana",
            description: "The original Catalan custard with caramelized sugar",
            price: 9,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Flan de la Casa",
            description: "Homemade caramel custard with a family recipe",
            price: 8,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Arroz con Leche",
            description: "Creamy rice pudding with cinnamon",
            price: 8,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Specialty Desserts",
        items: [
          {
            name: "Mel i Mató",
            description: "Fresh Catalan cheese with honey and walnuts",
            price: 10,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Carpaccio de Piña",
            description: "Thin slices of pineapple with vanilla ice cream",
            price: 12,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Panellets",
            description: "Traditional Catalan marzipan sweets (seasonal)",
            price: 11,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },

  // Alcohol Menu
  {
    title: "Beverage Menu",
    description:
      "Fine Spanish wines and traditional drinks to complement our historic cuisine",
    category: [
      {
        name: "Wines",
        items: [
          {
            name: "Rioja Reserva",
            description: "Aged red wine with notes of vanilla and red fruits",
            price: 14,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Albariño Rías Baixas",
            description: "Aromatic white wine with citrus and floral notes",
            price: 12,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Priorat Crianza",
            description: "Bold red wine from nearby Catalan region",
            price: 16,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Verdejo Rueda",
            description: "Crisp white wine with herbal and citrus notes",
            price: 11,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Cava Brut Nature",
            description: "Dry Spanish sparkling wine, no added sugar",
            price: 13,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Beers",
        items: [
          {
            name: "Estrella Damm",
            description: "The classic Barcelona lager",
            price: 6,
            isVegan: true,
          },
          {
            name: "Voll-Damm Doble Malta",
            description: "Strong amber beer with toasted malt flavors",
            price: 7,
            isVegan: true,
          },
          {
            name: "Moritz Epidor",
            description: "Premium dark lager from Barcelona's oldest brewery",
            price: 7,
            isVegan: true,
          },
          {
            name: "Inedit Damm",
            description: "Malt and wheat beer created by Ferran Adrià",
            price: 8,
            isVegan: true,
          },
        ],
      },
      {
        name: "Spirits/Liquors",
        items: [
          {
            name: "Brandy Torres 10",
            description: "Smooth Spanish brandy aged in oak",
            price: 10,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Licor 43",
            description: "Sweet Spanish liqueur with vanilla notes",
            price: 8,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Anís del Mono",
            description: "Traditional Spanish anisette liqueur",
            price: 7,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Patxaran",
            description: "Sloe berry liqueur from Navarre",
            price: 9,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Cocktails",
        items: [
          {
            name: "Agua de Valencia",
            description: "Cava, orange juice, vodka, and gin",
            price: 12,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Vermut Preparado",
            description: "House vermouth with soda, olive, and orange slice",
            price: 9,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Gintonic Catalán",
            description: "Premium gin with Mediterranean herbs and tonic",
            price: 14,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Rebujito",
            description: "Sherry (Manzanilla or Fino) mixed with lemonade/soda",
            price: 10,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Specialty Drinks",
        items: [
          {
            name: "Cremat",
            description:
              "Traditional Catalan flaming coffee with rum and spices",
            price: 10,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Historic Sangria",
            description: "House recipe sangria with fruit and cinnamon",
            price: 11,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Cava Royale",
            description: "Spanish sparkling wine with blackcurrant liqueur",
            price: 13,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Horchata de Chufa",
            description: "Traditional tiger nut milk drink (non-alcoholic)",
            price: 7,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
];
