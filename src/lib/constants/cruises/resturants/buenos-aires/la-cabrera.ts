import { ResturantMenu } from "@/lib/types/types";

export const buenosAireslaCabreraMenu: ResturantMenu[] = [
  // Food Menu
  {
    title: "Food Menu",
    description:
      "Authentic Argentine steakhouse experience with premium cuts and traditional preparation methods",
    category: [
      {
        name: "Appetizers",
        items: [
          {
            name: "Provoleta Clásica",
            description:
              "Traditional grilled provolone cheese with oregano and peppers",
            price: 16,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Chorizo y Morcilla",
            description: "House-made pork sausage and blood sausage",
            price: 14,
            isGlutenFree: true,
          },
          {
            name: "Empanadas de Carne",
            description: "Traditional beef empanadas with olives and egg",
            price: 12,
          },
          {
            name: "Mollejas a la Parrilla",
            description: "Grilled sweetbreads with lemon and salt",
            price: 18,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Soups",
        items: [
          {
            name: "Sopa de Calabaza Ahumada",
            description: "Smoked pumpkin soup with crispy pancetta",
            price: 14,
            isGlutenFree: true,
          },
          {
            name: "Carbonada Criolla",
            description:
              "Traditional beef and vegetable soup with dried fruits",
            price: 16,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Salads",
        items: [
          {
            name: "Ensalada La Cabrera",
            description:
              "Mixed greens with cherry tomatoes, avocado, and house vinaigrette",
            price: 14,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Ensalada Rusa",
            description:
              "Classic Argentine potato salad with carrots, peas, and mayonnaise",
            price: 12,
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
            description:
              "Prime sirloin strip steak (14 oz) with house chimichurri",
            price: 36,
            isGlutenFree: true,
          },
          {
            name: "Ojo de Bife",
            description: "Ribeye steak (16 oz) with roasted garlic",
            price: 42,
            isGlutenFree: true,
          },
          {
            name: "Asado de Tira",
            description: "Slow-grilled short ribs with traditional seasoning",
            price: 34,
            isGlutenFree: true,
          },
          {
            name: "Lomo",
            description: "Tenderloin filet (10 oz) with red wine reduction",
            price: 40,
            isGlutenFree: true,
          },
          {
            name: "Parrillada Completa (for two)",
            description:
              "Selection of premium cuts and offal including steak, chorizo, morcilla, and sweetbreads",
            price: 80,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Sides",
        items: [
          {
            name: "Papas Fritas Provenzal",
            description: "Hand-cut fries with garlic and parsley",
            price: 8,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Puré de Papas",
            description: "Creamy mashed potatoes",
            price: 8,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Espinacas a la Crema",
            description: "Creamed spinach with nutmeg",
            price: 10,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Champignones Salteados",
            description: "Sautéed mushrooms with herbs and white wine",
            price: 12,
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
      "Classic Argentine desserts featuring dulce de leche and traditional techniques",
    category: [
      {
        name: "Cake and Pastries",
        items: [
          {
            name: "Panqueques con Dulce de Leche",
            description:
              "Thin crepes filled with dulce de leche and flambéed with cognac",
            price: 14,
            isVegetarian: true,
          },
          {
            name: "Rogel",
            description:
              "Layered crisp pastry with dulce de leche and Italian meringue",
            price: 16,
            isVegetarian: true,
          },
        ],
      },
      {
        name: "Ice Cream",
        items: [
          {
            name: "Dulce de Leche Granizado",
            description: "Dulce de leche ice cream with chocolate shavings",
            price: 12,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Sambayón Helado",
            description: "Traditional zabaione ice cream with Marsala wine",
            price: 12,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Custards and Puddings",
        items: [
          {
            name: "Flan Casero",
            description:
              "Homemade caramel custard with dulce de leche and cream",
            price: 10,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Queso y Dulce",
            description: "Fresh cheese with traditional sweet potato paste",
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
            name: "Volcán de Chocolate",
            description: "Warm chocolate lava cake with vanilla ice cream",
            price: 16,
            isVegetarian: true,
          },
          {
            name: "Don Pedro",
            description: "Vanilla ice cream with walnuts and whisky",
            price: 14,
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
      "Extensive selection of Argentine wines, focusing on Malbec and other regional specialties",
    category: [
      {
        name: "Wines",
        items: [
          {
            name: "Malbec Reserva, Mendoza",
            description:
              "Full-bodied with plum and blackberry notes, hints of vanilla",
            price: 16,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Cabernet Sauvignon, Salta",
            description: "Bold red with blackcurrant and bell pepper notes",
            price: 15,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Torrontés, Cafayate",
            description: "Aromatic white with peach and floral aromas",
            price: 12,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Bonarda, San Juan",
            description: "Rustic red with cherry and earthy notes",
            price: 14,
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
            description: "Traditional Argentine pale lager",
            price: 8,
            isVegan: true,
          },
          {
            name: "Patagonia Bohemian Pilsner",
            description: "Craft pilsner with crisp hop character",
            price: 10,
            isVegan: true,
          },
          {
            name: "Andes Origen Roja",
            description: "Red lager with caramel notes",
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
            description:
              "Italian bitter adopted as Argentina's favorite digestif",
            price: 10,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Grappa de Malbec",
            description: "Pomace brandy distilled from Malbec grape skins",
            price: 14,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Licor de Dulce de Leche",
            description: "Sweet liqueur with caramel and milk notes",
            price: 12,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Cocktails",
        items: [
          {
            name: "Fernet con Coca",
            description:
              "Argentina's national cocktail - Fernet Branca with cola",
            price: 12,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Cinzano y Soda",
            description: "Classic aperitif with Cinzano Rosso and soda water",
            price: 10,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Gancia Batido",
            description: "Gancia Americano with fresh lemon juice and sugar",
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
            name: "Maracuyá Fizz",
            description: "Pisco, passion fruit, lime, and egg white with soda",
            price: 16,
            isGlutenFree: true,
          },
          {
            name: "Yerba Mate Julep",
            description: "Bourbon infused with yerba mate, mint, and sugar",
            price: 18,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Torrontés Spritz",
            description: "Torrontés wine with Aperol, soda, and fresh orange",
            price: 14,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
];
