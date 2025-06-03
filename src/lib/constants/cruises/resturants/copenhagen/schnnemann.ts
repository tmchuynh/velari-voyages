import { ResturantMenu } from "@/lib/types/types";

export const copenhagenschNnemannMenu: ResturantMenu[] = [
  // Food Menu
  {
    title: "Food Menu",
    description:
      "Traditional Danish smørrebrød (open sandwiches) and classic dishes since 1877",
    category: [
      {
        name: "Appetizers",
        items: [
          {
            name: "Marinated Herring Plate",
            description:
              "Selection of herring prepared in various traditional styles",
            price: 18,
          },
          {
            name: "House-Cured Salmon",
            description: "Gravlax with mustard-dill sauce and rye bread",
            price: 22,
          },
          {
            name: "Chicken Liver Pâté",
            description: "Creamy pâté with bacon, mushrooms, and port jelly",
            price: 16,
          },
          {
            name: "Smoked Eel",
            description: "Sliced smoked eel with scrambled egg and chives",
            price: 24,
          },
        ],
      },
      {
        name: "Soups",
        items: [
          {
            name: "Yellow Pea Soup",
            description:
              "Traditional soup with pork, served with rye bread and mustard",
            price: 14,
          },
          {
            name: "Fish Soup",
            description:
              "Rich soup with local fish, shellfish, and fresh herbs",
            price: 16,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Salads",
        items: [
          {
            name: "Danish Potato Salad",
            description:
              "Warm potatoes with herbs, mustard dressing, and crispy onions",
            price: 12,
            isVegetarian: true,
          },
          {
            name: "Beet & Apple Salad",
            description: "Pickled beets with apple, horseradish, and dill",
            price: 14,
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
            name: "Roast Beef Smørrebrød",
            description: "With remoulade, crispy onions, and horseradish",
            price: 18,
          },
          {
            name: "Stjerneskud (Shooting Star)",
            description:
              "Fried and steamed plaice with shrimp, asparagus, and caviar",
            price: 24,
          },
          {
            name: "Dyrlægens Natmad",
            description:
              '"Veterinarian\'s Midnight Snack" with liver pâté, salt beef, and onions',
            price: 20,
          },
          {
            name: "Kartoffelmad",
            description:
              "Buttered rye bread with potatoes, onions, and mayonnaise",
            price: 16,
            isVegetarian: true,
          },
          {
            name: "Flæskesteg",
            description:
              "Roast pork with crackling, red cabbage, and pickled cucumber",
            price: 22,
          },
        ],
      },
      {
        name: "Sides",
        items: [
          {
            name: "Rugbrød",
            description: "Traditional Danish sourdough rye bread",
            price: 6,
            isVegetarian: true,
            isVegan: true,
          },
          {
            name: "Pickled Vegetables",
            description: "Seasonal vegetables in sweet-sour brine",
            price: 8,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Caramelized Potatoes",
            description: "Small potatoes glazed in caramelized sugar",
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
    description: "Classic Danish sweet treats and traditional desserts",
    category: [
      {
        name: "Cake and Pastries",
        items: [
          {
            name: "Danish Apple Cake",
            description:
              "Layered dessert with apples, breadcrumbs, and whipped cream",
            price: 12,
            isVegetarian: true,
          },
          {
            name: "Wienerbrød",
            description: "Traditional Danish pastry with marzipan and icing",
            price: 10,
            isVegetarian: true,
          },
        ],
      },
      {
        name: "Ice Cream",
        items: [
          {
            name: "Vanilla Ice Cream with Warm Berries",
            description: "Vanilla ice cream served with warm berry compote",
            price: 14,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Gammeldags Isvaffel",
            description: "Old-fashioned ice cream cone with chocolate and jam",
            price: 12,
            isVegetarian: true,
          },
        ],
      },
      {
        name: "Custards and Puddings",
        items: [
          {
            name: "Rødgrød med Fløde",
            description: "Red berry pudding with heavy cream",
            price: 12,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Risalamande",
            description: "Rice pudding with almonds, vanilla, and cherry sauce",
            price: 14,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Specialty Desserts",
        items: [
          {
            name: "Ost & Kiks",
            description: "Danish cheese selection with crackers and fruit",
            price: 18,
            isVegetarian: true,
          },
          {
            name: "Citronfromage",
            description: "Lemon mousse with whipped cream and lemon zest",
            price: 15,
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
      "Denmark's largest selection of aquavit and traditional drinks to accompany smørrebrød",
    category: [
      {
        name: "Wines",
        items: [
          {
            name: "House White Wine",
            description: "Dry white wine that pairs well with fish and seafood",
            price: 10,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "House Red Wine",
            description: "Medium-bodied red that complements meat dishes",
            price: 10,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Sparkling Wine",
            description: "Crisp, refreshing bubbles for celebrations",
            price: 12,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Beers",
        items: [
          {
            name: "Carlsberg Pilsner",
            description: "Classic Danish lager beer",
            price: 8,
            isVegan: true,
          },
          {
            name: "Tuborg Classic",
            description: "Darker, fuller-bodied Danish beer",
            price: 8,
            isVegan: true,
          },
          {
            name: "Jacobsen Brown Ale",
            description: "Craft brown ale with notes of caramel and chocolate",
            price: 10,
            isVegan: true,
          },
        ],
      },
      {
        name: "Spirits/Liquors",
        items: [
          {
            name: "Aalborg Taffel Akvavit",
            description: "Classic caraway aquavit, Denmark's national spirit",
            price: 12,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "O.P. Anderson Aquavit",
            description: "Swedish aquavit aged in oak barrels",
            price: 14,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Linie Aquavit",
            description: "Norwegian aquavit that has crossed the equator twice",
            price: 14,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Brøndum Snaps",
            description: "Traditional Danish snaps with caraway and dill",
            price: 12,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Cocktails",
        items: [
          {
            name: "Bloody Mary with Aquavit",
            description: "Classic Bloody Mary with aquavit instead of vodka",
            price: 16,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Danish Coffee",
            description: "Coffee with aquavit and whipped cream",
            price: 14,
            isGlutenFree: true,
          },
          {
            name: "Schønnemanns Negroni",
            description: "Gin, Campari, vermouth, and a splash of aquavit",
            price: 18,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Specialty Drinks",
        items: [
          {
            name: "Aquavit Flight",
            description: "Tasting selection of three different aquavits",
            price: 22,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Danish Kir",
            description: "White wine with a splash of blackcurrant liqueur",
            price: 12,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Homemade Elderflower Drink",
            description:
              "Refreshing non-alcoholic elderflower cordial with sparkling water",
            price: 8,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
];
