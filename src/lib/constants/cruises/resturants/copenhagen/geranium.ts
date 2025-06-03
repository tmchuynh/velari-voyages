import { ResturantMenu } from "@/lib/types/types";

export const copenhagengeraniumMenu: ResturantMenu[] = [
  // Food Menu
  {
    title: "Food Menu",
    description:
      "Artful modern Nordic cuisine with a focus on seasonal ingredients and innovative techniques",
    category: [
      {
        name: "Appetizers",
        items: [
          {
            name: "Crispy Jerusalem Artichoke",
            description: "Leaves, walnut cream, and pickled walnut",
            price: 28,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Razor Clam & Søl",
            description:
              "Thinly sliced razor clam with Nordic seaweed and dill",
            price: 32,
            isGlutenFree: true,
          },
          {
            name: "Dried Flowers & Dried Apples",
            description: "With aromatic herbs and fruit vinegar",
            price: 26,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Lobster & Milk",
            description: "Poached lobster with milk curd and coastal herbs",
            price: 36,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Soups",
        items: [
          {
            name: "Wild Mushroom Essence",
            description:
              "Forest mushroom consommé with pine oil and crisp lichens",
            price: 24,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Fermented Celeriac Soup",
            description: "Creamy celeriac with aged cheese and truffle",
            price: 26,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Salads",
        items: [
          {
            name: "Winter Greens",
            description:
              "Foraged coastal herbs with buttermilk dressing and rye crumble",
            price: 22,
            isVegetarian: true,
          },
          {
            name: "Salt-baked Beetroot",
            description:
              "With aromatic seeds, beach herbs, and horseradish cream",
            price: 24,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Main Courses",
        items: [
          {
            name: "Salted Cod",
            description:
              "Served with fermented cabbage, caviar, and chicken skin",
            price: 46,
            isGlutenFree: true,
          },
          {
            name: "Aged Venison",
            description:
              "With Jerusalem artichoke purée, pickled pine and juniper",
            price: 52,
            isGlutenFree: true,
          },
          {
            name: "King Crab & Beach Plants",
            description:
              "Steamed king crab with coastal herbs and shellfish emulsion",
            price: 58,
            isGlutenFree: true,
          },
          {
            name: "Grilled Vegetables & Truffle",
            description:
              "Seasonal root vegetables with caramelized milk and black truffle",
            price: 42,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Sides",
        items: [
          {
            name: "Crispy Potato Leaves",
            description: "With smoked bone marrow and herbs",
            price: 18,
            isGlutenFree: true,
          },
          {
            name: "White Asparagus",
            description:
              "With egg yolk, hazelnut oil, and pickled onion (seasonal)",
            price: 24,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Glazed Beets",
            description: "With aged vinegar and wild berries",
            price: 16,
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
      "Artistic, nature-inspired dessert creations showcasing Nordic ingredients",
    category: [
      {
        name: "Cake and Pastries",
        items: [
          {
            name: "Beech Tree & Chocolate",
            description:
              "Chocolate sphere with beech nut cream and crisp beech leaves",
            price: 24,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Apple Tart",
            description:
              "Compressed Nordic apples with woodruff and crisp pastry",
            price: 22,
            isVegetarian: true,
          },
        ],
      },
      {
        name: "Ice Cream",
        items: [
          {
            name: "Milk Ice Cream",
            description:
              "With caramelized milk skin, aromatic seeds, and chervil",
            price: 18,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Birch Sap Sorbet",
            description: "With frozen herbs and lemon thyme oil",
            price: 20,
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
            name: "Wild Blueberry Cloud",
            description:
              "Airy blueberry mousse with pine cream and frozen berries",
            price: 22,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Buttermilk Panna Cotta",
            description:
              "With wood sorrel, caramelized rhubarb, and crisp malt",
            price: 20,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Specialty Desserts",
        items: [
          {
            name: "Danish Cheese Selection",
            description:
              "Curated Danish cheeses with homemade crackers and preserves",
            price: 26,
            isVegetarian: true,
          },
          {
            name: "A Walk Through Nature",
            description:
              "Multiple dessert elements representing the Nordic landscape",
            price: 30,
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
      "Exquisite wines, craft cocktails, and artisanal non-alcoholic options to complement your dining experience",
    category: [
      {
        name: "Wines",
        items: [
          {
            name: "Danish White Wine",
            description:
              "Biodynamic white wine from Lilleø island with apple and floral notes",
            price: 22,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "French Burgundy",
            description:
              "Elegant pinot noir with earthy undertones and red fruit",
            price: 28,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Austrian Riesling",
            description: "Dry riesling with minerality and citrus notes",
            price: 24,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Natural Orange Wine",
            description:
              "Skin-contact wine with complex aromas and tannic structure",
            price: 26,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Beers",
        items: [
          {
            name: "Geranium House Pilsner",
            description: "Bespoke pilsner brewed with local herbs",
            price: 14,
            isVegan: true,
          },
          {
            name: "Mikkeller Wild Ale",
            description: "Spontaneously fermented ale with wild yeast",
            price: 16,
            isVegan: true,
          },
          {
            name: "To Øl Botanical IPA",
            description: "IPA brewed with Nordic botanicals",
            price: 15,
            isVegan: true,
          },
        ],
      },
      {
        name: "Spirits/Liquors",
        items: [
          {
            name: "Copenhagen Distillery Gin",
            description: "Artisanal gin with Nordic botanicals",
            price: 20,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Aged Danish Aquavit",
            description: "Caraway-flavored spirit aged in oak barrels",
            price: 18,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Stauning Whisky",
            description: "Danish single malt whisky with smoky notes",
            price: 24,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Cocktails",
        items: [
          {
            name: "Nordic Forest",
            description: "Gin, spruce shoot cordial, lemon, and birch sap",
            price: 22,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Sea Buckthorn Martini",
            description: "Vodka, sea buckthorn purée, and coastal herbs",
            price: 24,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Caraway Old Fashioned",
            description: "Whisky, aquavit, birch syrup, and caraway bitters",
            price: 26,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Specialty Drinks",
        items: [
          {
            name: "Birch Sap & Apple",
            description:
              "Fresh birch sap with apple and woodruff (non-alcoholic)",
            price: 16,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Mushroom & Pine Tea",
            description:
              "Warm infusion of forest mushrooms and pine needles (non-alcoholic)",
            price: 14,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Fermented Berry Juice",
            description:
              "Lightly fermented Nordic berries with herbs (non-alcoholic)",
            price: 18,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
];
