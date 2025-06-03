import { ResturantMenu } from "@/lib/types/types";

export const charlestonfIGMenu: ResturantMenu[] = [
  // Food Menu
  {
    title: "Food Menu",
    description:
      "Seasonal farm-to-table cuisine celebrating the Lowcountry's best ingredients",
    category: [
      {
        name: "Appetizers",
        items: [
          {
            name: "Ricotta Gnocchi",
            description: "Pillowy gnocchi with lamb bolognese and pecorino",
            price: 17,
          },
          {
            name: "Chicken Liver Pâté",
            description: "Smooth pâté with port wine gelee and grilled bread",
            price: 15,
          },
          {
            name: "Beet Salad",
            description:
              "Roasted beets with farmer's cheese, pistachio, and honey vinaigrette",
            price: 15,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Fish Stew Provençal",
            description: "Local seafood in a saffron-tomato broth with rouille",
            price: 18,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Soups",
        items: [
          {
            name: "Tomato Bisque",
            description: "Creamy tomato soup with basil oil and crème fraîche",
            price: 12,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Potato Leek Soup",
            description: "Silky soup with crispy leeks and truffle oil",
            price: 14,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Salads",
        items: [
          {
            name: "FIG Salad",
            description:
              "Mixed local greens, seasonal vegetables, and herb vinaigrette",
            price: 14,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Arugula & Parmesan",
            description:
              "Local arugula with shaved parmesan, lemon, and olive oil",
            price: 15,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Heirloom Tomato Salad",
            description: "Seasonal tomatoes with burrata, basil, and balsamic",
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
            name: "Suckling Pig Confit",
            description: "Crispy pork with Sea Island red peas and greens",
            price: 36,
            isGlutenFree: true,
          },
          {
            name: "Pan-Seared Local Catch",
            description:
              "Daily fresh fish with seasonal vegetable accompaniment",
            price: 38,
            isGlutenFree: true,
          },
          {
            name: "Mustard-Crusted Lamb",
            description:
              "Herb and mustard crusted lamb rack with root vegetables",
            price: 42,
          },
          {
            name: "Grass-fed Beef Striploin",
            description: "Local beef with potato puree and red wine jus",
            price: 44,
            isGlutenFree: true,
          },
          {
            name: "Seasonal Vegetable Plate",
            description:
              "Chef's selection of local vegetables prepared in various methods",
            price: 30,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Sides",
        items: [
          {
            name: "Anson Mills Grits",
            description: "Creamy heirloom grits with butter and chives",
            price: 10,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Roasted Mushrooms",
            description: "Local mushrooms with garlic and herbs",
            price: 12,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Glazed Carrots",
            description: "Heritage carrots with honey and thyme",
            price: 9,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Charred Broccolini",
            description: "Wood-fired broccolini with lemon and chili flakes",
            price: 11,
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
      "Seasonal desserts highlighting local ingredients and classic techniques",
    category: [
      {
        name: "Cake and Pastries",
        items: [
          {
            name: "Chocolate Almond Cake",
            description:
              "Flourless chocolate cake with crème anglaise and seasonal berries",
            price: 12,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Lemon Tart",
            description: "Meyer lemon curd in a shortbread crust with meringue",
            price: 11,
            isVegetarian: true,
          },
          {
            name: "Seasonal Fruit Galette",
            description:
              "Rustic pastry with local fruit and house-made ice cream",
            price: 13,
            isVegetarian: true,
          },
        ],
      },
      {
        name: "Ice Cream",
        items: [
          {
            name: "Vanilla Bean Ice Cream",
            description: "House-churned with Madagascar vanilla beans",
            price: 8,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Seasonal Sorbet",
            description: "Made with local fruit at peak ripeness",
            price: 8,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Brown Butter Ice Cream",
            description: "Rich and nutty with caramelized notes",
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
            name: "Vanilla Bean Crème Brûlée",
            description: "Classic French custard with caramelized sugar top",
            price: 10,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Butterscotch Budino",
            description: "Italian-style pudding with caramel and sea salt",
            price: 11,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Banana Pudding",
            description:
              "Southern classic with vanilla wafers and whipped cream",
            price: 10,
            isVegetarian: true,
          },
        ],
      },
      {
        name: "Specialty Desserts",
        items: [
          {
            name: "Cheese Plate",
            description: "Selection of artisanal cheeses with accompaniments",
            price: 17,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Chocolate Soufflé",
            description:
              "Made to order with crème anglaise (please allow 20 minutes)",
            price: 14,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Seasonal Fruit Crisp",
            description:
              "Warm fruit with oat streusel and house-made ice cream",
            price: 12,
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
      "Thoughtfully curated wines, craft cocktails, and artisanal spirits",
    category: [
      {
        name: "Wines",
        items: [
          {
            name: "French Champagne",
            description: "Crisp and elegant with fine bubbles",
            price: 17,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Loire Valley Chenin Blanc",
            description: "Dry white with notes of apple and honey",
            price: 14,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Willamette Valley Pinot Noir",
            description: "Medium-bodied red with cherry and earth notes",
            price: 15,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Napa Valley Cabernet Sauvignon",
            description: "Full-bodied with blackcurrant and cedar notes",
            price: 16,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Côtes du Rhône Rosé",
            description: "Dry and refreshing with red fruit notes",
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
            name: "Local Pilsner",
            description: "Crisp and clean with subtle hop character",
            price: 7,
            isVegan: true,
          },
          {
            name: "Charleston IPA",
            description: "Bold hoppy flavor with citrus notes",
            price: 8,
            isVegan: true,
          },
          {
            name: "Belgian Saison",
            description: "Farmhouse ale with spice and fruit notes",
            price: 9,
            isVegan: true,
          },
          {
            name: "Stout",
            description: "Rich dark beer with coffee and chocolate notes",
            price: 8,
            isVegan: true,
          },
        ],
      },
      {
        name: "Spirits/Liquors",
        items: [
          {
            name: "Bourbon Selection",
            description: "Curated selection of small-batch bourbons",
            price: 14,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Single Malt Scotch",
            description: "Aged Highlands or Islay expressions",
            price: 15,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Artisanal Gin",
            description: "Small-batch gin with botanical complexity",
            price: 12,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Aged Rum",
            description: "Premium rum with caramel and vanilla notes",
            price: 13,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Cocktails",
        items: [
          {
            name: "FIG Manhattan",
            description:
              "House bourbon, vermouth, and bitters with brandied cherry",
            price: 15,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Seasonal Gimlet",
            description: "Gin with seasonal fruit cordial and fresh herbs",
            price: 14,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Charleston Mule",
            description: "Bourbon, house-made ginger beer, and lime",
            price: 13,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Lowcountry Spritz",
            description: "Aperitivo, sparkling wine, and seasonal fruit",
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
            name: "Fig Old Fashioned",
            description:
              "Bourbon infused with figs, orange bitters, and maple syrup",
            price: 15,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Barrel-Aged Negroni",
            description: "House-aged gin, Campari, and vermouth blend",
            price: 16,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Farmer's Market Punch",
            description:
              "Seasonal fruit, herbs, and spirits in a refreshing punch",
            price: 14,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Non-Alcoholic Botanical Spritz",
            description: "House-made herbal syrup, citrus, and sparkling water",
            price: 8,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
];
