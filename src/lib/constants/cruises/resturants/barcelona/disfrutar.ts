import { ResturantMenu } from "@/lib/types/types";

export const barcelonadisfrutarMenu: ResturantMenu[] = [
  // Food Menu
  {
    title: "Food Menu",
    description:
      "Avant-garde Mediterranean cuisine with innovative techniques and surprising flavor combinations",
    category: [
      {
        name: "Appetizers",
        items: [
          {
            name: "Liquid Salad",
            description:
              "Essence of Mediterranean garden vegetables in spherified form",
            price: 24,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Multi-Spherical Pesto",
            description: "Basil spheres with Parmesan foam and pine nut dust",
            price: 22,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Transparent Parmesan Gnocchi",
            description: "Crystal-clear gnocchi filled with Parmesan cream",
            price: 26,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Gazpacho Sandwich",
            description:
              "Concentrated tomato and cucumber flavors between crispy bread sheets",
            price: 20,
            isVegetarian: true,
          },
          {
            name: "Caviar of Olives",
            description: "Olive oil caviar with citrus foam and herbs",
            price: 17,
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
            name: "Deconstructed Bouillabaisse",
            description:
              "Elements of traditional fish soup presented in novel forms",
            price: 28,
            isGlutenFree: true,
          },
          {
            name: "Cold Stone Soup",
            description:
              "Almond soup with frozen elements that melt as you eat",
            price: 24,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Mushroom Cappuccino",
            description:
              "Rich mushroom broth with truffle foam and crispy mushroom chips",
            price: 26,
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
            name: "Smoke Salad",
            description:
              "Smoked vegetables with contrast of temperatures and textures",
            price: 22,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Inverted Tomato Salad",
            description:
              "Tomato water gel with tomato seeds ice cream and olive oil caviar",
            price: 26,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Beetroot and Citrus Salad",
            description:
              "Roasted beetroot with citrus segments and yogurt foam",
            price: 20,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Main Courses",
        items: [
          {
            name: "Red Mullet with Garum",
            description:
              "Modern take on ancient Roman flavors with edible fish scales",
            price: 42,
            isGlutenFree: true,
          },
          {
            name: "Hare à la Royale Deconstruction",
            description:
              "Contemporary interpretation of the classic French dish",
            price: 46,
          },
          {
            name: "Truffle Umami",
            description: "Mushroom dashi, truffle pearls, and forest essence",
            price: 38,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Pigeon with Kombucha",
            description:
              "Aged pigeon with fermented tea glaze and blood orange",
            price: 44,
            isGlutenFree: true,
          },
          {
            name: "Octopus with Ink Emulsion",
            description:
              "Tender octopus with black garlic and squid ink emulsion",
            price: 40,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Sides",
        items: [
          {
            name: "Crispy Egg Yolk",
            description:
              "Slow-cooked egg yolk with crispy exterior and truffle",
            price: 17,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Edible Landscape",
            description: "Vegetable textures resembling a miniature garden",
            price: 15,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Charcoal Bread",
            description:
              "Black bread made with activated charcoal and olive oil",
            price: 12,
            isVegetarian: true,
            isVegan: true,
          },
          {
            name: "Potato Foam",
            description: "Light potato foam with herbs and spices",
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
      "Boundary-pushing sweet creations that challenge perception and delight the senses",
    category: [
      {
        name: "Cake and Pastries",
        items: [
          {
            name: "Nougat Gastronomic Experience",
            description: "Multiple textures and temperatures of almond nougat",
            price: 22,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Impossible Cheesecake",
            description:
              "Deconstructed cheesecake that reassembles on the palate",
            price: 24,
            isVegetarian: true,
          },
          {
            name: "Chocolate and Olive Oil Cake",
            description:
              "Rich chocolate cake with olive oil infusion and sea salt",
            price: 26,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Ice Cream",
        items: [
          {
            name: "Olive Oil Ice Cream",
            description:
              "Premium olive oil frozen tableside with liquid nitrogen",
            price: 17,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Black Sesame and Yuzu Sorbet",
            description:
              "Asian-inspired sorbet with unexpected texture contrasts",
            price: 15,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Saffron and Pistachio Gelato",
            description:
              "Creamy gelato with aromatic saffron and crunchy pistachios",
            price: 20,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Custards and Puddings",
        items: [
          {
            name: "Cotton Candy Cloud",
            description:
              "Vanilla custard hidden inside a dissolving cloud of spun sugar",
            price: 20,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Chocolate Textures 2023",
            description: "Six different states of chocolate in one dish",
            price: 26,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Caramelized Apple Sphere",
            description:
              "Apple sphere that bursts with caramel flavor when bitten",
            price: 22,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Specialty Desserts",
        items: [
          {
            name: "Edible Perfume",
            description:
              "Aroma-focused dessert with sprayed essence and corresponding flavors",
            price: 28,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "The Disfrutar Orange",
            description:
              "Hyperrealistic orange that transforms with each spoonful",
            price: 24,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Chocolate Explosion",
            description:
              "Chocolate sphere that melts to reveal hidden textures and flavors",
            price: 30,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Frozen Citrus Symphony",
            description:
              "Citrus sorbet with edible flowers and aromatic herbs, served frozen",
            price: 26,
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
      "Innovative libations and carefully curated wines to enhance the gastronomic journey",
    category: [
      {
        name: "Wines",
        items: [
          {
            name: "Xarel·lo Amphora",
            description: "Biodynamic Catalan white aged in clay amphora",
            price: 15,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Rare Priorat",
            description: "Limited production red from old vines on slate soil",
            price: 22,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Vintage Cava Reserva",
            description: "Aged sparkling wine from Penedès with fine bubbles",
            price: 17,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Orange Wine Selection",
            description: "Natural wines with skin contact for unique flavors",
            price: 20,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Beers",
        items: [
          {
            name: "Fermentation Project",
            description: "Collaboration beer aged in wine barrels",
            price: 14,
            isVegan: true,
          },
          {
            name: "Smoked Lager",
            description: "Craft beer with cherry wood smoke notes",
            price: 12,
            isVegan: true,
          },
          {
            name: "Sour Wild Ale",
            description: "Spontaneous fermentation beer with complex acidity",
            price: 15,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Craft IPA",
            description: "Hoppy India Pale Ale with tropical fruit aromas",
            price: 13,
            isVegan: true,
          },
        ],
      },
      {
        name: "Spirits/Liquors",
        items: [
          {
            name: "Aged Gin Selection",
            description: "Flight of three barrel-aged gins from around Spain",
            price: 24,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Vintage Pedro Ximénez",
            description: "30-year aged sweet sherry with raisin notes",
            price: 20,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "House-Infused Brandy",
            description: "Spanish brandy infused with Mediterranean herbs",
            price: 17,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Herbal Liqueur",
            description: "House-made herbal liqueur with local botanicals",
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
            name: "Spherified Martini",
            description: "Classic martini transformed into bursting spheres",
            price: 22,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Smoke & Mirror",
            description:
              "Mezcal cocktail with changing flavors and aromatic smoke",
            price: 24,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Transparent Bloody Mary",
            description:
              "Clear tomato water cocktail with all the flavors of the classic",
            price: 20,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Frozen Mojito Sphere",
            description:
              "Mojito served as a frozen sphere that melts in your mouth",
            price: 17,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Specialty Drinks",
        items: [
          {
            name: "Frozen Fractals",
            description:
              "Gin-based cocktail with edible color-changing ice crystals",
            price: 26,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Levitating Cocktail",
            description:
              "Rum and passion fruit libation with floating elements",
            price: 28,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Olfactory Experience",
            description:
              "Whiskey cocktail with aromatic cloud and flavor transformations",
            price: 30,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Citrus Symphony",
            description:
              "Refreshing cocktail with citrus sorbet and edible flowers",
            price: 24,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
];
