import { ResturantMenu } from "@/lib/types/types";

export const barcelonaticketsMenu: ResturantMenu[] = [
  // Food Menu
  {
    title: "Food Menu",
    description:
      "Modern Spanish tapas with molecular gastronomy techniques from the Adrià legacy",
    category: [
      {
        name: "Appetizers",
        items: [
          {
            name: "Spherical Olives",
            description: "Liquid olive spheres that burst in your mouth",
            price: 12,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Jamón Ibérico de Bellota",
            description:
              "Hand-carved acorn-fed Iberian ham with crystal bread and tomato",
            price: 32,
            isGlutenFree: true,
          },
          {
            name: "Croquetas de Jamón",
            description: "Creamy Iberian ham croquettes with crispy exterior",
            price: 14,
          },
          {
            name: "Nordic Landscape",
            description:
              "Smoked salmon, dill, yogurt snow, and pickled vegetables",
            price: 18,
            isGlutenFree: true,
          },
          {
            name: "Caviar with Potato Foam",
            description: "Potato espuma topped with premium caviar",
            price: 40,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Soups",
        items: [
          {
            name: "Gazpacho Air",
            description: "Traditional gazpacho transformed into a light foam",
            price: 16,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Consommé Tapioca",
            description:
              "Clear chicken consommé with tapioca pearls and micro herbs",
            price: 18,
            isGlutenFree: true,
          },
          {
            name: "Seafood Bisque",
            description:
              "Rich bisque with lobster, shrimp, and a touch of saffron",
            price: 20,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Salads",
        items: [
          {
            name: "Tomato Tartare",
            description:
              "Diced heirloom tomatoes with mustard ice cream and olive oil caviar",
            price: 14,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Avocado & King Crab",
            description: "Avocado cannelloni filled with king crab and citrus",
            price: 24,
            isGlutenFree: true,
          },
          {
            name: "Beetroot Salad",
            description:
              "Roasted beetroot with goat cheese foam, walnuts, and balsamic pearls",
            price: 16,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Main Courses",
        items: [
          {
            name: "Squid in its Ink",
            description:
              "Tender squid with ink sauce, served with squid-ink rice cracker",
            price: 28,
            isGlutenFree: true,
          },
          {
            name: "Mini Airbags",
            description:
              "Delicate pastry filled with Manchego cheese espuma and caviar",
            price: 30,
          },
          {
            name: "Josper-grilled Wagyu",
            description: "Grade A5 Wagyu beef with smoke-infused potato purée",
            price: 45,
            isGlutenFree: true,
          },
          {
            name: "Deconstructed Spanish Tortilla",
            description: "Slow-cooked egg, potato foam, and onion air",
            price: 22,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Sea Bass with Citrus Foam",
            description:
              "Pan-seared sea bass with citrus-infused foam and seasonal vegetables",
            price: 32,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Sides",
        items: [
          {
            name: "Patatas Bravas 2.0",
            description:
              "Hollow potato cubes filled with spicy brava sauce and aioli",
            price: 12,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Tender Stem Broccoli",
            description: "Charred broccoli with romesco sauce and almonds",
            price: 10,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Truffled Parmesan Gnocchi",
            description:
              "Light potato gnocchi with parmesan foam and fresh truffle",
            price: 16,
            isVegetarian: true,
          },
          {
            name: "Seasonal Vegetables",
            description: "Grilled seasonal vegetables with herb oil",
            price: 14,
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
      "Revolutionary sweet creations combining traditional flavors with avant-garde techniques",
    category: [
      {
        name: "Cake and Pastries",
        items: [
          {
            name: "The Golden Egg",
            description:
              "Caramelized egg custard inside a gold-dusted sugar shell",
            price: 16,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Chocolate Forest",
            description:
              "Multiple textures of chocolate with pine nut soil and mint air",
            price: 18,
            isVegetarian: true,
          },
          {
            name: "Lemon Meringue Sphere",
            description:
              "Lemon curd encased in a meringue shell with citrus foam",
            price: 15,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Ice Cream",
        items: [
          {
            name: "Parmesan Ice Cream",
            description:
              "Savory parmesan ice cream with balsamic pearls and strawberry dust",
            price: 14,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Liquid Nitrogen Sorbet",
            description:
              "Instant-frozen seasonal fruit sorbet prepared tableside",
            price: 16,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Saffron and Pistachio Gelato",
            description:
              "Creamy gelato infused with saffron and topped with pistachio dust",
            price: 15,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Custards and Puddings",
        items: [
          {
            name: "Deconstructed Crema Catalana",
            description: "Elements of traditional crema catalana reimagined",
            price: 15,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Coconut Flan",
            description: "Coconut flan with passion fruit caviar and rum foam",
            price: 14,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Chocolate Pudding",
            description:
              "Rich chocolate pudding with raspberry gel and mint air",
            price: 16,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Specialty Desserts",
        items: [
          {
            name: "The Map of Chocolate",
            description:
              "Global chocolate varieties in different textures and forms",
            price: 22,
            isVegetarian: true,
          },
          {
            name: "Cotton Candy Tree",
            description:
              "Spun sugar with embedded fruit jellies and edible flowers",
            price: 20,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Fruit Sphere",
            description:
              "Seasonal fruit encapsulated in a thin gel shell with fruit air",
            price: 18,
            isVegetarian: true,
            isVegan: true,
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
      "Creative cocktails and carefully selected wines to complement our molecular gastronomy",
    category: [
      {
        name: "Wines",
        items: [
          {
            name: "Albariño, Rías Baixas",
            description: "Crisp white wine with notes of peach and minerals",
            price: 14,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Tempranillo, Ribera del Duero",
            description: "Bold red with black fruit and vanilla notes",
            price: 16,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Cava Reserva Brut Nature",
            description:
              "Dry sparkling wine with fine bubbles and citrus notes",
            price: 15,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Priorat Red Blend",
            description: "Intense red with dark fruit and mineral undertones",
            price: 18,
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
            description: "Classic Barcelona lager beer",
            price: 8,
            isVegan: true,
          },
          {
            name: "Moritz Epidor",
            description: "Strong dark amber beer with malty notes",
            price: 9,
            isVegan: true,
          },
          {
            name: "La Pirata Hop Collection IPA",
            description: "Craft IPA with citrus and pine hop character",
            price: 10,
            isVegan: true,
          },
          {
            name: "Cerveza Artesana",
            description: "Local craft beer with seasonal flavors",
            price: 11,
            isVegan: true,
          },
        ],
      },
      {
        name: "Spirits/Liquors",
        items: [
          {
            name: "Gin Mare",
            description:
              "Mediterranean gin with rosemary, thyme, and olive botanicals",
            price: 14,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Torres 20 Brandy",
            description: "Premium aged Spanish brandy",
            price: 18,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Licor 43",
            description:
              "Sweet Spanish liqueur with 43 different herbs and spices",
            price: 12,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Pisco Barros",
            description: "Peruvian pisco with floral and fruity notes",
            price: 15,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Cocktails",
        items: [
          {
            name: "Spherical Gin & Tonic",
            description: "Classic G&T with bursting tonic spheres",
            price: 18,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Nitrogen Caipirinha",
            description: "Flash-frozen caipirinha with lime air",
            price: 16,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Smoking Whisky Sour",
            description: "Hickory-smoked whisky sour with citrus foam",
            price: 17,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Molecular Mojito",
            description: "Mojito with mint caviar and lime air",
            price: 15,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Specialty Drinks",
        items: [
          {
            name: "Olive Oil Martini",
            description:
              "Vodka infused with Arbequina olive oil and olive dust",
            price: 20,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Edible Cocktail Spheres",
            description:
              "Selection of encapsulated cocktails with different flavors",
            price: 24,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Hibiscus Air",
            description:
              "Rum-based cocktail with hibiscus foam and lychee pearls",
            price: 22,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Cucumber & Basil Cooler",
            description:
              "Refreshing cocktail with cucumber, basil, and lime air",
            price: 18,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
];
