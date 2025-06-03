import { ResturantMenu } from "@/lib/types/types";

export const capeTownlaColombeMenu: ResturantMenu[] = [
  // Food Menu
  {
    title: "Food Menu",
    description:
      "Contemporary French-Asian fusion cuisine featuring South African ingredients and expert technique",
    category: [
      {
        name: "Appetizers",
        items: [
          {
            name: "Saldanha Bay Oysters",
            description: "Fresh local oysters with Asian mignonette and lemon",
            price: 24,
            isGlutenFree: true,
          },
          {
            name: "Foie Gras Parfait",
            description:
              "Creamy foie gras with cape gooseberry compote and brioche",
            price: 28,
          },
          {
            name: "Yellowfin Tuna Tataki",
            description: "Lightly seared tuna with ponzu, avocado, and radish",
            price: 22,
            isGlutenFree: true,
          },
          {
            name: "Beef Carpaccio",
            description:
              "Thinly sliced Angus beef with black truffle emulsion and parmesan",
            price: 26,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Soups",
        items: [
          {
            name: "Roasted Butternut Velouté",
            description:
              "Silky butternut soup with coconut, lemongrass, and toasted pumpkin seeds",
            price: 18,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "French Onion Consommé",
            description:
              "Clear, intense onion broth with thyme and aged Gruyère crouton",
            price: 20,
            isVegetarian: true,
          },
          {
            name: "Shellfish Bisque",
            description: "Rich shellfish soup with cognac cream and herb oil",
            price: 22,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Salads",
        items: [
          {
            name: "Heirloom Tomato Salad",
            description:
              "Multicolored tomatoes with buffalo mozzarella, basil, and aged balsamic",
            price: 20,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Cape Greens",
            description:
              "Local baby leaves with candied walnuts, goat cheese, and citrus dressing",
            price: 18,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Roasted Beet Salad",
            description:
              "Red and golden beets with whipped feta, honey, and dukkah spice",
            price: 19,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Main Courses",
        items: [
          {
            name: "Line-caught Kabeljou",
            description:
              "Local fish with Jerusalem artichoke, samphire, and champagne sauce",
            price: 42,
            isGlutenFree: true,
          },
          {
            name: "Karoo Lamb Rack",
            description:
              "Free-range lamb with aubergine puree, chermoula, and lamb jus",
            price: 46,
            isGlutenFree: true,
          },
          {
            name: "Chalmar Beef Fillet",
            description:
              "Prime beef with bone marrow crust, truffle pomme purée, and red wine jus",
            price: 48,
            isGlutenFree: true,
          },
          {
            name: "Duck Breast",
            description:
              "Roasted duck with spiced orange glaze, confit leg croquette, and seasonal vegetables",
            price: 44,
          },
          {
            name: "Wild Mushroom Risotto",
            description:
              "Arborio rice with foraged mushrooms, truffle, and aged parmesan",
            price: 36,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Sides",
        items: [
          {
            name: "Truffle Pomme Purée",
            description: "Silky potato purée with black truffle",
            price: 14,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Seasonal Vegetables",
            description: "Local vegetables cooked in herb butter",
            price: 12,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Wild Mushrooms",
            description: "Sautéed seasonal mushrooms with garlic and thyme",
            price: 16,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Triple-cooked Fries",
            description: "Crispy hand-cut potatoes with truffle salt",
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
      "Artfully crafted desserts combining French technique with local South African ingredients",
    category: [
      {
        name: "Cake and Pastries",
        items: [
          {
            name: "Chocolate Délice",
            description:
              "Valrhona chocolate mousse with hazelnut praline and salted caramel",
            price: 18,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Lemon Meringue Tart",
            description:
              "Reimagined classic with Cape lemon curd and Italian meringue",
            price: 16,
            isVegetarian: true,
          },
          {
            name: "Opera Cake",
            description:
              "Coffee and chocolate layered cake with gold leaf and espresso ice cream",
            price: 18,
            isVegetarian: true,
          },
        ],
      },
      {
        name: "Ice Cream",
        items: [
          {
            name: "Madagascan Vanilla Bean Ice Cream",
            description: "Classic vanilla ice cream with vanilla bean seeds",
            price: 12,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Rooibos and Honey Ice Cream",
            description:
              "South African rooibos tea infused ice cream with local honey",
            price: 14,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Granadilla Sorbet",
            description: "Passion fruit sorbet with fresh granadilla pulp",
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
            name: "Crème Brûlée",
            description:
              "Classic vanilla custard with caramelized sugar and fresh berries",
            price: 16,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Milk Tart Soufflé",
            description:
              "South African milk tart reimagined as a light soufflé",
            price: 18,
            isVegetarian: true,
          },
          {
            name: "Malva Pudding",
            description:
              "Traditional South African dessert with crème anglaise and vanilla ice cream",
            price: 16,
            isVegetarian: true,
          },
        ],
      },
      {
        name: "Specialty Desserts",
        items: [
          {
            name: "Cheese Selection",
            description: "Local and imported cheeses with preserves and lavosh",
            price: 24,
            isVegetarian: true,
          },
          {
            name: "Dessert Tasting Experience",
            description:
              "Selection of miniature desserts featuring the chef's favorites",
            price: 28,
            isVegetarian: true,
          },
          {
            name: "Chocolate Sphere",
            description:
              "Chocolate sphere with hot fondant center and seasonal berries",
            price: 20,
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
      "Carefully curated wines from the Cape Winelands and beyond, with signature cocktails and premium spirits",
    category: [
      {
        name: "Wines",
        items: [
          {
            name: "Constantia Sauvignon Blanc",
            description:
              "Elegant white wine with bright acidity and citrus notes",
            price: 15,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Stellenbosch Cabernet Sauvignon",
            description: "Full-bodied red with blackcurrant and cedar notes",
            price: 18,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Franschhoek Méthode Cap Classique",
            description:
              "Traditional method sparkling wine with brioche and citrus notes",
            price: 16,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Walker Bay Pinot Noir",
            description: "Elegant red with red cherry and earthy undertones",
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
            name: "Devil's Peak King's Blockhouse IPA",
            description: "Local craft IPA with citrus hop character",
            price: 10,
            isVegan: true,
          },
          {
            name: "CBC Pilsner",
            description: "Cape Brewing Company's crisp, classic pilsner",
            price: 9,
            isVegan: true,
          },
          {
            name: "Stellenbrau Craven Craft Lager",
            description:
              "Smooth lager from Stellenbosch with balanced maltiness",
            price: 9,
            isVegan: true,
          },
          {
            name: "Woodstock Brewery Happy Pills",
            description: "Refreshing pilsner with floral notes",
            price: 10,
            isVegan: true,
          },
        ],
      },
      {
        name: "Spirits/Liquors",
        items: [
          {
            name: "KWV 15 Year Brandy",
            description:
              "Premium South African brandy with notes of dried fruit and spice",
            price: 18,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Inverroche Classic Gin",
            description: "Fynbos-infused gin from the Western Cape",
            price: 14,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Bain's Cape Mountain Whisky",
            description: "Award-winning single grain whisky from South Africa",
            price: 16,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Uitkyk Estate Brandy",
            description: "Aged potstill brandy from a historic Cape estate",
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
            name: "Table Mountain Sunset",
            description: "Inverroche gin, rooibos syrup, lemon, and egg white",
            price: 18,
            isGlutenFree: true,
          },
          {
            name: "Cape Botanist",
            description:
              "South African gin with fynbos tonic, rosemary, and cucumber",
            price: 16,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "African Negroni",
            description: "Classic negroni with local gin and Cape herbs",
            price: 17,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Franschhoek French 75",
            description:
              "South African gin, fresh lemon, sugar, and Cap Classique",
            price: 19,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Specialty Drinks",
        items: [
          {
            name: "La Colombe Espresso Martini",
            description:
              "House blend espresso with premium vodka and coffee liqueur",
            price: 18,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Rooibos Old Fashioned",
            description:
              "Bourbon infused with rooibos tea, bitters, and orange zest",
            price: 20,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Constantia Wine Flight",
            description:
              "Tasting of three premium wines from the Constantia Valley",
            price: 24,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Amarula Affogato",
            description:
              "Vanilla ice cream with espresso and Amarula cream liqueur",
            price: 16,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
];
