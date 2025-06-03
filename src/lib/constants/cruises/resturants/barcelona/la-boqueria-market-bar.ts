import { ResturantMenu } from "@/lib/types/types";

export const barcelonalaBoqueriaMarketBarMenu: ResturantMenu[] = [
  // Food Menu
  {
    title: "Food Menu",
    description:
      "Fresh market-to-table Spanish cuisine featuring the finest ingredients from La Boqueria Market",
    category: [
      {
        name: "Appetizers",
        items: [
          {
            name: "Fresh Oysters",
            description: "Local oysters with mignonette sauce and lemon",
            price: 17,
            isGlutenFree: true,
          },
          {
            name: "Pan Con Tomate",
            description:
              "Toasted country bread rubbed with tomato, olive oil, and sea salt",
            price: 8,
            isVegetarian: true,
            isVegan: true,
          },
          {
            name: "Boquerones en Vinagre",
            description:
              "Fresh anchovies marinated in vinegar with garlic and parsley",
            price: 12,
            isGlutenFree: true,
          },
          {
            name: "Cantabrian Anchovies",
            description: "Premium salt-cured anchovies on toast with butter",
            price: 14,
          },
          {
            name: "Charcuterie Board",
            description:
              "Selection of cured meats, cheeses, and olives from the market",
            price: 22,
            isGlutenFree: true,
          },
          {
            name: "Market Bruschetta",
            description:
              "Toasted bread topped with seasonal market vegetables and herbs",
            price: 10,
            isVegetarian: true,
            isVegan: true,
          },
        ],
      },
      {
        name: "Soups",
        items: [
          {
            name: "Sopa de Pescado",
            description:
              "Traditional Catalan fish soup with today's catch and saffron",
            price: 15,
            isGlutenFree: true,
          },
          {
            name: "Gazpacho",
            description:
              "Classic cold tomato soup with cucumber and bell peppers",
            price: 12,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Calçots Soup",
            description:
              "Creamy soup made with seasonal calçots (spring onions)",
            price: 14,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Escudella i Carn d'Olla",
            description:
              "Hearty Catalan stew with seasonal vegetables and meats",
            price: 17,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Salads",
        items: [
          {
            name: "Ensalada de Mercado",
            description:
              "Market greens with seasonal vegetables and sherry vinaigrette",
            price: 14,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Burrata with Tomatoes",
            description:
              "Fresh burrata cheese with heirloom tomatoes and basil oil",
            price: 15,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Chickpea and Spinach Salad",
            description:
              "Chickpeas, spinach, red onion, and olives with lemon dressing",
            price: 12,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Roasted Beetroot Salad",
            description: "Roasted beets with goat cheese, walnuts, and arugula",
            price: 15,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Main Courses",
        items: [
          {
            name: "Lubina a la Plancha",
            description: "Grilled sea bass with lemon, herbs, and olive oil",
            price: 26,
            isGlutenFree: true,
          },
          {
            name: "Gambas al Ajillo",
            description: "Garlic shrimp with chili and olive oil",
            price: 24,
            isGlutenFree: true,
          },
          {
            name: "Butifarra con Mongetes",
            description: "Grilled Catalan sausage with white beans and aioli",
            price: 22,
            isGlutenFree: true,
          },
          {
            name: "Seasonal Vegetable Paella",
            description: "Bomba rice with market vegetables and saffron",
            price: 20,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Fideuà",
            description: "Noodle paella with seafood and aioli",
            price: 28,
            isGlutenFree: true,
          },
          {
            name: "Lamb Chops with Romesco Sauce",
            description: "Grilled lamb chops with traditional Catalan romesco",
            price: 30,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Sides",
        items: [
          {
            name: "Patatas Bravas",
            description: "Fried potatoes with spicy brava sauce and aioli",
            price: 8,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Pimientos de Padrón",
            description: "Blistered Padrón peppers with sea salt",
            price: 10,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Escalivada",
            description: "Roasted eggplant, peppers, and onions with olive oil",
            price: 9,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Seasonal Market Vegetables",
            description: "Grilled or sautéed vegetables from La Boqueria",
            price: 12,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Garlic Spinach",
            description: "Sautéed spinach with garlic and olive oil",
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
      "Sweet endings featuring seasonal fruits and traditional Catalan recipes",
    category: [
      {
        name: "Cake and Pastries",
        items: [
          {
            name: "Tarta de Santiago",
            description: "Almond cake with powdered sugar and citrus zest",
            price: 10,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Ensaïmada",
            description: "Traditional spiral pastry dusted with powdered sugar",
            price: 8,
            isVegetarian: true,
          },
          {
            name: "Churros with Chocolate",
            description: "Crispy churros served with rich chocolate sauce",
            price: 9,
            isVegetarian: true,
          },
          {
            name: "Crema de Almendra",
            description: "Almond cream tart with seasonal fruits",
            price: 11,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Apple Tart Tatin",
            description:
              "Upside-down caramelized apple tart with vanilla ice cream",
            price: 12,
            isVegetarian: true,
          },
        ],
      },
      {
        name: "Ice Cream",
        items: [
          {
            name: "Seasonal Fruit Sorbet",
            description: "Handmade sorbet with market fruits",
            price: 8,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Turrón Ice Cream",
            description: "Almond nougat ice cream with honey",
            price: 9,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Chocolate Truffle Ice Cream",
            description: "Rich chocolate ice cream with truffle pieces",
            price: 10,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Vanilla Bean Ice Cream",
            description: "Classic vanilla ice cream with real vanilla beans",
            price: 8,
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
            description:
              "Traditional Catalan custard with caramelized sugar top",
            price: 10,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Flan de Huevo",
            description: "Classic Spanish caramel flan",
            price: 9,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Rice Pudding",
            description: "Creamy rice pudding with cinnamon and lemon zest",
            price: 8,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Chocolate Mousse",
            description: "Rich chocolate mousse with whipped cream",
            price: 11,
            isVegetarian: true,
          },
          {
            name: "Almond Custard",
            description: "Creamy almond custard with a hint of orange blossom",
            price: 10,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Specialty Desserts",
        items: [
          {
            name: "Fresh Market Fruit Platter",
            description: "Selection of seasonal fruit from La Boqueria",
            price: 12,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Mel i Mató",
            description: "Fresh Catalan cheese with honey and walnuts",
            price: 11,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Chocolate Fondant",
            description:
              "Warm chocolate cake with molten center, served with vanilla ice cream",
            price: 12,
            isVegetarian: true,
          },
          {
            name: "Tarta de Queso",
            description: "Creamy cheesecake with a graham cracker crust",
            price: 10,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Pistachio Baklava",
            description:
              "Layers of phyllo pastry with pistachios and honey syrup",
            price: 9,
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
      "Spanish wines and refreshing drinks to complement your market dining experience",
    category: [
      {
        name: "Wines",
        items: [
          {
            name: "House Vermouth",
            description:
              "Traditional Catalan vermouth served with orange and olive",
            price: 7,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Penedès White",
            description: "Local crisp white wine with notes of apple and pear",
            price: 9,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Priorat Red",
            description: "Full-bodied red wine from nearby Priorat region",
            price: 12,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Cava Brut Nature",
            description:
              "Dry sparkling wine from Catalonia, perfect for any occasion",
            price: 10,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Rosé from Montsant",
            description: "Refreshing rosé with strawberry and citrus notes",
            price: 11,
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
            description: "Barcelona's classic lager beer",
            price: 5,
            isVegan: true,
          },
          {
            name: "Moritz",
            description: "Traditional Barcelona pilsner",
            price: 6,
            isVegan: true,
          },
          {
            name: "Craft Beer of the Day",
            description: "Rotating selection of local craft beers",
            price: 7,
            isVegan: true,
          },
          {
            name: "Gluten-Free Beer",
            description: "Refreshing gluten-free beer option",
            price: 8,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Spirits/Liquors",
        items: [
          {
            name: "Patxaran",
            description: "Basque sloe berry liqueur served over ice",
            price: 8,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Hierbas Ibicencas",
            description: "Herbal liqueur from Ibiza",
            price: 9,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Brandy de Jerez",
            description: "Smooth Spanish brandy aged in sherry casks",
            price: 10,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Gin Mare",
            description: "Mediterranean gin with botanicals from the region",
            price: 12,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Vodka Larios",
            description: "Premium Spanish vodka, perfect for cocktails",
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
            name: "Classic Sangria",
            description: "Red wine with fresh fruit and a splash of brandy",
            price: 12,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Market Gin & Tonic",
            description:
              "Spanish gin with premium tonic and seasonal market garnishes",
            price: 14,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Rebujito",
            description: "Fino sherry with lemon-lime soda and fresh mint",
            price: 10,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Hibiscus Mojito",
            description: "Refreshing mojito with hibiscus tea and fresh mint",
            price: 11,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Cava Spritz",
            description: "Sparkling cava with Aperol and a splash of soda",
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
            name: "Cava Mimosa",
            description: "Spanish cava with fresh market orange juice",
            price: 11,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Tinto de Verano",
            description: "Red wine with lemon soda over ice",
            price: 9,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Agua de Valencia",
            description: "Cava, vodka, gin, and fresh orange juice",
            price: 13,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
];
