import { ResturantMenu } from "@/lib/types/types";

export const aucklandtheGroveMenu: ResturantMenu[] = [
  // Food Menu
  {
    title: "Food Menu",
    description:
      "Contemporary fine dining with European influences and New Zealand's finest seasonal ingredients",
    category: [
      {
        name: "Appetizers",
        items: [
          {
            name: "West Coast Crayfish",
            description:
              "Butter poached crayfish with fennel, citrus, and caviar",
            price: 32,
            isGlutenFree: true,
          },
          {
            name: "Foie Gras Parfait",
            description:
              "Silky foie gras with preserved cherry, brioche, and hazelnut",
            price: 28,
          },
          {
            name: "Heirloom Tomato Tart",
            description:
              "Caramelized onion, goat cheese, and basil on puff pastry",
            price: 24,
            isVegetarian: true,
          },
          {
            name: "Seared Scallops",
            description:
              "Scallops with cauliflower puree, capers, and brown butter",
            price: 30,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Soups",
        items: [
          {
            name: "Mushroom Consommé",
            description:
              "Clear wild mushroom broth with truffle dumplings and chives",
            price: 22,
            isVegetarian: true,
          },
          {
            name: "Green-Lipped Mussel Chowder",
            description:
              "Creamy Marlborough mussel soup with saffron and leeks",
            price: 24,
            isGlutenFree: true,
          },
          {
            name: "Pumpkin and Sage Soup",
            description:
              "Roasted pumpkin soup with sage oil and toasted pumpkin seeds",
            price: 20,
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
            name: "Organic Beetroot Salad",
            description:
              "Roasted and raw beets with whipped ricotta, walnuts, and apple balsamic",
            price: 23,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Garden Greens",
            description:
              "Estate-grown lettuces, radish, cucumber, herbs, and champagne vinaigrette",
            price: 21,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Seared Tuna Salad",
            description:
              "Ahi tuna with avocado, sesame, and citrus dressing on mixed greens",
            price: 26,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Main Courses",
        items: [
          {
            name: "Canterbury Lamb",
            description:
              "Rack of lamb, smoked eggplant puree, heirloom carrots, and rosemary jus",
            price: 48,
            isGlutenFree: true,
          },
          {
            name: "Hawke's Bay Beef Fillet",
            description:
              "Grass-fed beef with bone marrow crust, truffle pomme puree, and bordelaise",
            price: 52,
            isGlutenFree: true,
          },
          {
            name: "Market Fish",
            description:
              "Sustainably caught fish with shellfish bisque, fennel, and preserved lemon",
            price: 46,
            isGlutenFree: true,
          },
          {
            name: "Seasonal Vegetable Composition",
            description:
              "Chef's selection of organic vegetables with herbs and edible flowers",
            price: 38,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Wild Mushroom Risotto",
            description:
              "Arborio rice with wild mushrooms, truffle oil, and parmesan",
            price: 42,
            isVegetarian: true,
          },
        ],
      },
      {
        name: "Sides",
        items: [
          {
            name: "Pommes Anna",
            description: "Layered potatoes with cultured butter and thyme",
            price: 14,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Estate Vegetables",
            description:
              "Seasonal vegetables from our garden with olive oil and sea salt",
            price: 12,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Black Truffle Mac & Cheese",
            description: "Gruyère, comté, and black truffle",
            price: 18,
            isVegetarian: true,
          },
          {
            name: "Roasted Brussels Sprouts",
            description: "With pancetta, chestnuts, and balsamic glaze",
            price: 16,
            isVegetarian: true,
          },
        ],
      },
    ],
  },

  // Dessert Menu
  {
    title: "Dessert Menu",
    description:
      "Exquisite sweet creations showcasing artisanal techniques and local ingredients",
    category: [
      {
        name: "Cake and Pastries",
        items: [
          {
            name: "Valrhona Chocolate Soufflé",
            description:
              "Warm chocolate soufflé with tonka bean crème anglaise",
            price: 22,
            isVegetarian: true,
          },
          {
            name: "Caramelized Apple Tarte Tatin",
            description:
              "Puff pastry, caramelized apples, and vanilla bean ice cream",
            price: 20,
            isVegetarian: true,
          },
          {
            name: "Lemon Tart",
            description:
              "Zesty lemon curd tart with meringue and raspberry coulis",
            price: 18,
            isVegetarian: true,
          },
          {
            name: "Pistachio and Rose Water Cake",
            description:
              "Moist pistachio cake with rose water cream and candied rose petals",
            price: 20,
            isVegetarian: true,
          },
        ],
      },
      {
        name: "Ice Cream",
        items: [
          {
            name: "Artisanal Ice Cream Selection",
            description:
              "Three scoops of house-made ice cream with tuile biscuit",
            price: 16,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Manuka Honey & Lavender Sorbet",
            description: "Refreshing sorbet with honeycomb and edible flowers",
            price: 14,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Chocolate and Sea Salt Ice Cream",
            description: "Rich chocolate ice cream with sea salt flakes",
            price: 16,
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
            description:
              "Classic custard with caramelized sugar crust and seasonal berries",
            price: 18,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Lemon Posset",
            description:
              "Silky lemon cream with blueberry compote and shortbread",
            price: 16,
            isVegetarian: true,
          },
          {
            name: "Chocolate Pots de Crème",
            description:
              "Rich chocolate custard with whipped cream and hazelnut praline",
            price: 20,
            isVegetarian: true,
          },
        ],
      },
      {
        name: "Specialty Desserts",
        items: [
          {
            name: "New Zealand Cheese Selection",
            description:
              "Artisanal cheeses with quince paste, honeycomb, and lavosh",
            price: 28,
            isVegetarian: true,
          },
          {
            name: "Dark Chocolate & Cherry Sphere",
            description:
              "Chocolate mousse sphere with cherry center and warm chocolate sauce",
            price: 24,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Spiced Poached Pear",
            description:
              "Poached pear in spiced syrup with almond frangipane and vanilla ice cream",
            price: 22,
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
      "Exceptional wines, craft cocktails, and premium spirits to complement your dining experience",
    category: [
      {
        name: "Wines",
        items: [
          {
            name: "Kumeu River Chardonnay",
            description:
              "Elegant Auckland Chardonnay with notes of citrus and oak",
            price: 18,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Felton Road Pinot Noir",
            description:
              "Central Otago Pinot with red fruit and earthy undertones",
            price: 22,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Cloudy Bay Sauvignon Blanc",
            description:
              "Classic Marlborough Sauvignon with vibrant acidity and tropical notes",
            price: 16,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Craggy Range Syrah",
            description:
              "Hawke's Bay Syrah with black pepper, plum, and violet notes",
            price: 20,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Te Mata Estate Coleraine",
            description:
              "Iconic Bordeaux blend with dark fruit, spice, and velvety tannins",
            price: 45,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Beers",
        items: [
          {
            name: "Liberty 'Yakima Monster' IPA",
            description:
              "Award-winning Auckland craft IPA with bold hop character",
            price: 14,
            isVegan: true,
          },
          {
            name: "8 Wired 'Tall Poppy' Red IPA",
            description: "Complex red IPA with caramel and pine notes",
            price: 15,
            isVegan: true,
          },
          {
            name: "McLeod's 'Longboarder' Lager",
            description: "Clean, crisp premium lager from Northland",
            price: 12,
            isVegan: true,
          },
          {
            name: "Panhead 'Supercharger' APA",
            description: "American Pale Ale with tropical fruit and citrus",
            price: 13,
            isVegan: true,
          },
          {
            name: "Garage Project 'Pils'n' Thrills'",
            description: "Refreshing pilsner with floral and herbal notes",
            price: 14,
            isVegan: true,
          },
        ],
      },
      {
        name: "Spirits/Liquors",
        items: [
          {
            name: "Scapegrace Gold Gin",
            description: "Premium New Zealand gin with botanical complexity",
            price: 16,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Cardrona Single Malt Whisky",
            description:
              "Elegant Central Otago single malt with honey and vanilla notes",
            price: 24,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Dancing Sands Sacred Spring Vodka",
            description: "Pure New Zealand vodka distilled with spring water",
            price: 15,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Broken Shed Vodka",
            description: "Crafted from New Zealand whey with a smooth finish",
            price: 14,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Stolen Rum",
            description: "Aged rum with tropical fruit and caramel notes",
            price: 18,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Cocktails",
        items: [
          {
            name: "Rangitoto Sunset",
            description:
              "Scapegrace gin, elderflower, passionfruit, and prosecco",
            price: 22,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Pohutukawa Negroni",
            description: "New Zealand gin, Campari, kawakawa-infused vermouth",
            price: 24,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Waiheke Island Sour",
            description:
              "Cardrona whisky, local honey, lemon, and Waiheke olive oil",
            price: 26,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Kiwi Mojito",
            description:
              "Fresh mint, lime, kiwi puree, and Dancing Sands vodka",
            price: 20,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Tropical Tiki Punch",
            description:
              "Stolen rum, pineapple, coconut cream, and lime served in a tiki mug",
            price: 24,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Auckland Mule",
            description: "Broken Shed vodka, ginger beer, lime, and fresh mint",
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
            name: "Manuka Champagne",
            description: "Premium champagne with manuka honey and gold leaf",
            price: 32,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Barrel-Aged Boulevardier",
            description:
              "House-aged whisky, Campari, and vermouth with orange zest",
            price: 28,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "The Grove Martini",
            description:
              "Vodka, dry vermouth, and native botanicals, served tableside",
            price: 26,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Spiced Apple Cider",
            description:
              "Warm spiced apple cider with cinnamon, cloves, and a splash of rum",
            price: 16,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Grove's Signature Hot Chocolate",
            description:
              "Rich hot chocolate with whipped cream, marshmallows, and a hint of chili",
            price: 14,
            isVegetarian: true,
            isVegan: false,
          },
        ],
      },
    ],
  },
];
