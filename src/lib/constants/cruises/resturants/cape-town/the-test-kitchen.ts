import { ResturantMenu } from "@/lib/types/types";

export const capeTowntheTestKitchenMenu: ResturantMenu[] = [
  // Food Menu
  {
    title: "Food Menu",
    description:
      "Innovative, globally-inspired cuisine with a South African twist, featuring locally-sourced ingredients and cutting-edge techniques",
    category: [
      {
        name: "Appetizers",
        items: [
          {
            name: "Smoked Yellowtail",
            description:
              "Local yellowtail with ajo blanco, compressed apple, and dill oil",
            price: 24,
            isGlutenFree: true,
          },
          {
            name: "Cured Springbok",
            description:
              "Thinly sliced springbok carpaccio with pickled mushrooms and nasturtium",
            price: 26,
            isGlutenFree: true,
          },
          {
            name: "Caramelized Scallop",
            description:
              "Hand-dived scallop with cauliflower textures, raisin, and burnt butter",
            price: 28,
            isGlutenFree: true,
          },
          {
            name: "Fermented Vegetable Tartare",
            description:
              "House-fermented vegetables with smoked aubergine and crisp sourdough",
            price: 20,
            isVegetarian: true,
            isVegan: true,
          },
        ],
      },
      {
        name: "Soups",
        items: [
          {
            name: "Tomato Water Consommé",
            description:
              "Clear tomato essence with basil oil and confit heirloom tomatoes",
            price: 17,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Charred Corn Soup",
            description: "Smoky corn soup with lime cream and popcorn dust",
            price: 15,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Shellfish Bisque",
            description:
              "Intense seafood broth with local crayfish and cognac foam",
            price: 22,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Salads",
        items: [
          {
            name: "Roasted Beet Composition",
            description:
              "Multicolored beets with whipped goat cheese, walnut, and aged balsamic",
            price: 17,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Garden Salad",
            description:
              "Seasonal vegetables and herbs from our garden with fermented garlic dressing",
            price: 15,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Foraged Sea Herbs",
            description:
              "Local sea herbs with cured fish, citrus, and seaweed vinaigrette",
            price: 22,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Main Courses",
        items: [
          {
            name: "Cape Malay Kingklip",
            description:
              "Local kingklip with Cape Malay curry sauce, cucumber raita, and charred lime",
            price: 38,
            isGlutenFree: true,
          },
          {
            name: "Free-range Karoo Lamb",
            description:
              "Rack of lamb with smoked yogurt, aubergine, and harissa jus",
            price: 42,
            isGlutenFree: true,
          },
          {
            name: "Aged Chalmar Beef",
            description:
              "21-day aged sirloin with bone marrow, truffle, and red wine jus",
            price: 46,
            isGlutenFree: true,
          },
          {
            name: "Vegetable Garden",
            description:
              "Seasonal vegetables with multiple techniques, textures, and flavors",
            price: 32,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Pan-seared Duck Breast",
            description:
              "Free-range duck with fermented plum, celeriac, and five-spice jus",
            price: 40,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Sides",
        items: [
          {
            name: "Triple-cooked Potatoes",
            description: "Crispy outside, fluffy inside, with charcoal salt",
            price: 12,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Charred Brassicas",
            description:
              "Fire-roasted seasonal greens with lemon and smoked garlic",
            price: 14,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Truffle Mac & Cheese",
            description: "Aged cheddar, Parmesan, and black truffle",
            price: 15,
            isVegetarian: true,
          },
          {
            name: "Roasted Bone Marrow",
            description:
              "Slow-roasted bone marrow with herb salad and sourdough toast",
            price: 14,
          },
        ],
      },
    ],
  },

  // Dessert Menu
  {
    title: "Dessert Menu",
    description:
      "Creative and visually stunning desserts that challenge conventional expectations",
    category: [
      {
        name: "Cake and Pastries",
        items: [
          {
            name: "Dark Chocolate Sphere",
            description:
              "Chocolate sphere with molten center, salted caramel, and cocoa nib tuile",
            price: 17,
            isVegetarian: true,
          },
          {
            name: "Vanilla Bean Mille-feuille",
            description:
              "Crisp pastry layered with Madagascar vanilla cream and seasonal berries",
            price: 15,
            isVegetarian: true,
          },
          {
            name: "Deconstructed Malva Pudding",
            description:
              "South African classic reimagined with apricot, crème anglaise, and burnt butter ice cream",
            price: 15,
            isVegetarian: true,
          },
        ],
      },
      {
        name: "Ice Cream",
        items: [
          {
            name: "Test Kitchen Ice Cream Selection",
            description:
              "Three house-made ice creams with complementary garnishes",
            price: 14,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Burnt Honey and Thyme Ice Cream",
            description: "Sweet-savory ice cream with honeycomb and lemon dust",
            price: 12,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Coconut and Passion Fruit Sorbet",
            description: "Tropical sorbet with lime meringue and fresh coconut",
            price: 12,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Custards and Puddings",
        items: [
          {
            name: "Rooibos Crème Brûlée",
            description:
              "Tea-infused custard with a perfectly caramelized sugar top",
            price: 14,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Lemon Posset",
            description: "Silky lemon cream with raspberry gel and shortbread",
            price: 13,
            isVegetarian: true,
          },
          {
            name: "Milk & Honey",
            description:
              "Honey panna cotta with milk foam, honeycomb, and bee pollen",
            price: 15,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Specialty Desserts",
        items: [
          {
            name: "Cheese Experience",
            description:
              "Selection of local and imported cheeses with innovative accompaniments",
            price: 22,
            isVegetarian: true,
          },
          {
            name: "Nitro Chocolate Popcorn",
            description:
              "Liquid nitrogen frozen chocolate mousse with caramel popcorn",
            price: 17,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Dessert Garden",
            description:
              "Edible landscape featuring multiple dessert components and techniques",
            price: 24,
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
      "Innovative cocktails and expertly selected wines to complement the Test Kitchen experience",
    category: [
      {
        name: "Wines",
        items: [
          {
            name: "Signature Wine Pairing",
            description: "Six wines paired with our tasting menu courses",
            price: 45,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Swartland Chenin Blanc",
            description: "Complex white with stone fruit notes and minerality",
            price: 15,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Elgin Pinot Noir",
            description: "Elegant red with cherry and earthy undertones",
            price: 17,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Constantia Sauvignon Blanc",
            description:
              "Bright, expressive white with green notes and fresh acidity",
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
            name: "Woodstock Brewery Happy Pills",
            description: "Local craft pilsner with bright hoppy notes",
            price: 9,
            isVegan: true,
          },
          {
            name: "Devil's Peak IPA",
            description: "Aromatic India Pale Ale with citrus hop character",
            price: 10,
            isVegan: true,
          },
          {
            name: "CBC Amber Weiss",
            description:
              "Cape Brewing Company's amber wheat beer with banana and clove notes",
            price: 9,
            isVegan: true,
          },
          {
            name: "Stellenbrau Craven Lager",
            description: "Crisp, refreshing lager from Stellenbosch",
            price: 8,
            isVegan: true,
          },
        ],
      },
      {
        name: "Spirits/Liquors",
        items: [
          {
            name: "Inverroche Fynbos Gin",
            description: "Craft gin with indigenous Cape botanicals",
            price: 15,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Bain's Single Grain Whisky",
            description: "Award-winning South African whisky",
            price: 15,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "KWV 15 Year Brandy",
            description: "Premium South African potstill brandy",
            price: 17,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Jorgensen's Savingnac",
            description: "South African craft distiller's take on Armagnac",
            price: 20,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Cocktails",
        items: [
          {
            name: "Test Kitchen G&T",
            description:
              "House gin with custom botanical tonic and seasonal garnish",
            price: 15,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Woodstock Old Fashioned",
            description:
              "Bourbon with house-made bitters and sugar smoked with fynbos",
            price: 17,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Cape Negroni",
            description:
              "Local gin, vermouth, and bitters aged in small oak barrels",
            price: 16,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Cucumber & Dill Martini",
            description:
              "Vodka infused with cucumber and dill, served with a salt air foam",
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
            name: "Smoke & Mirrors",
            description:
              "Theatrical cocktail with dry ice presentation and changing flavors",
            price: 22,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Molecular Bloody Mary",
            description:
              "Deconstructed classic with tomato spheres and celery foam",
            price: 20,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Chef's Flight",
            description:
              "Three mini cocktails designed to pair with specific dishes",
            price: 28,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Non-alcoholic Tasting Journey",
            description:
              "Four custom-crafted non-alcoholic beverages paired with your meal",
            price: 30,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
];
