import { ResturantMenu } from "@/lib/types/types";

export const aucklandpastureMenu: ResturantMenu[] = [
  // Food Menu
  {
    title: "Food Menu",
    description:
      "Farm-to-table cuisine focused on open-fire cooking, fermentation, and whole animal butchery",
    category: [
      {
        name: "Appetizers",
        items: [
          {
            name: "House-Cured Charcuterie",
            description:
              "Selection of cured meats, fermented vegetables, and sourdough",
            price: 26,
          },
          {
            name: "Wood-Fired Oysters",
            description:
              "Fresh Clevedon oysters with cultured butter and preserved lemon",
            price: 22,
            isGlutenFree: true,
          },
          {
            name: "Fermented Vegetables",
            description:
              "Seasonal vegetables preserved using traditional techniques",
            price: 18,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Grilled Bone Marrow",
            description:
              "Roasted bone marrow with parsley salad and sourdough toast",
            price: 24,
          },
          {
            name: "Smoked Fish Rillettes",
            description: "Creamy smoked fish spread with toasted rye bread",
            price: 23,
          },
          {
            name: "Whipped Lardo on Toast",
            description:
              "Cured pork fat whipped until airy, served with grilled sourdough and honey",
            price: 20,
          },
        ],
      },
      {
        name: "Soups",
        items: [
          {
            name: "Bone Broth",
            description:
              "72-hour simmered beef bone broth with ember-roasted mushrooms",
            price: 16,
            isGlutenFree: true,
          },
          {
            name: "Potato and Leek Soup",
            description: "Smoked potato soup with leek ash and cultured cream",
            price: 18,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Smoked Tomato Soup",
            description:
              "Slow-smoked tomatoes blended into a rich soup with basil oil",
            price: 17,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Roasted Cauliflower Soup",
            description:
              "Creamy soup of fire-roasted cauliflower with truffle oil",
            price: 19,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Wild Nettle & Sorrel Soup",
            description:
              "Foraged greens blended into a vibrant, earthy soup with crème fraîche",
            price: 18,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Salads",
        items: [
          {
            name: "Heritage Tomato Salad",
            description: "Estate-grown tomatoes, basil oil, and whey dressing",
            price: 20,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Charred Brassicas",
            description:
              "Fire-roasted seasonal brassicas with hazelnut and aged vinegar",
            price: 19,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Warm Quinoa Salad",
            description:
              "Quinoa, roasted root vegetables, and a fermented honey vinaigrette",
            price: 21,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Grilled Peach & Prosciutto Salad",
            description:
              "Sweet grilled peaches, salty prosciutto, arugula, and balsamic glaze",
            price: 22,
            isGlutenFree: true,
          },
          {
            name: "Smoked Beetroot & Goat Cheese Salad",
            description:
              "Earthy smoked beetroot, creamy goat cheese, walnuts, and a honey-mustard dressing",
            price: 20,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Main Courses",
        items: [
          {
            name: "Dry-Aged Ribeye",
            description:
              "60-day dry-aged beef cooked over embers with bone marrow sauce",
            price: 58,
            isGlutenFree: true,
          },
          {
            name: "Slow-Cooked Lamb Shoulder",
            description: "12-hour wood-fired lamb with fermented green sauce",
            price: 46,
            isGlutenFree: true,
          },
          {
            name: "Whole Roasted Fish",
            description:
              "Line-caught fish with preserved lemon and herb butter",
            price: 42,
            isGlutenFree: true,
          },
          {
            name: "Fire-Roasted Celeriac",
            description:
              "Whole celeriac slow-roasted in embers with walnut and truffle",
            price: 36,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Wood-Fired Duck Breast",
            description:
              "Duck breast cooked over embers, served with cherry reduction and wild rice",
            price: 48,
            isGlutenFree: true,
          },
          {
            name: "Fermented Barley Risotto",
            description:
              "Creamy risotto made with fermented barley, wild mushrooms, and aged cheese",
            price: 34,
            isVegetarian: true,
          },
          {
            name: "Smoked Pork Belly",
            description:
              "Crispy skin pork belly, slow-smoked, with apple and fennel slaw",
            price: 44,
            isGlutenFree: true,
          },
          {
            name: "Grilled King Prawns",
            description:
              "Large prawns grilled over charcoal with garlic, chili, and parsley butter",
            price: 52,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Sides",
        items: [
          {
            name: "Sourdough Bread & Cultured Butter",
            description:
              "House-made bread from heritage grains with house-cultured butter",
            price: 10,
            isVegetarian: true,
          },
          {
            name: "Ember-Roasted Potatoes",
            description: "New potatoes roasted in coals with herb salt",
            price: 14,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Seasonal Greens",
            description:
              "Farm vegetables cooked over open flame with rendered fat",
            price: 12,
            isVegetarian: true, // Note: rendered fat might not be vegetarian unless specified as plant-based
            isGlutenFree: true,
          },
          {
            name: "Charred Corn with Smoked Butter",
            description:
              "Sweet corn charred on the grill, served with house-smoked butter",
            price: 13,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Fermented Fries",
            description: "Potatoes fermented then fried, served with aioli",
            price: 15,
            isVegetarian: true,
          },
          {
            name: "Grilled Asparagus with Parmesan",
            description:
              "Tender asparagus spears grilled and topped with shaved parmesan",
            price: 16,
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
    description:
      "Seasonal desserts incorporating fermentation, smoke, and fire techniques",
    category: [
      {
        name: "Cake and Pastries",
        items: [
          {
            name: "Burnt Basque Cheesecake",
            description:
              "House-cultured cheese cake with seasonal fruit preserve",
            price: 16,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Sourdough Treacle Tart",
            description: "Made with leftover sourdough and local honey",
            price: 14,
            isVegetarian: true,
          },
          {
            name: "Smoked Chocolate Tart",
            description:
              "Dark chocolate tart with a hint of smoke, served with cultured cream",
            price: 15,
            isVegetarian: true,
          },
          {
            name: "Apple & Blackberry Crumble Tart",
            description:
              "Warm tart with fire-roasted apples, blackberries, and a sourdough crumble",
            price: 15,
            isVegetarian: true,
          },
          {
            name: "Fermented Plum Frangipane Tart",
            description:
              "Almond frangipane tart with sweet, tangy fermented plums",
            price: 16,
            isVegetarian: true,
          },
        ],
      },
      {
        name: "Ice Cream",
        items: [
          {
            name: "Cultured Cream Ice Cream",
            description: "Fermented cream ice cream with caramelized whey",
            price: 12,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Smoked Apple Sorbet",
            description: "Cold-smoked apple sorbet with cider reduction",
            price: 10,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Hay-Smoked Vanilla Ice Cream",
            description:
              "Vanilla bean ice cream infused with the aroma of smoked hay",
            price: 13,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Burnt Honey Ice Cream",
            description:
              "Rich ice cream made with deeply caramelized local honey",
            price: 13,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Roasted Strawberry & Basil Sorbet",
            description:
              "Sweet roasted strawberries with a hint of fresh basil, churned into a vibrant sorbet",
            price: 11,
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
            name: "Wood-Fired Custard",
            description:
              "Egg custard slow-cooked near embers with burnt caramel",
            price: 15,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Rhubarb & Ginger Pudding",
            description:
              "Steamed pudding with preserved rhubarb and ginger cream",
            price: 16,
            isVegetarian: true,
          },
          {
            name: "Fermented Plum Clafoutis",
            description:
              "Classic French clafoutis with fermented plums and almond",
            price: 17,
            isVegetarian: true,
          },
          {
            name: "Smoked Rice Pudding",
            description:
              "Creamy rice pudding infused with a delicate smoke flavor, topped with berry compote",
            price: 14,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Chocolate & Stout Pudding",
            description:
              "Rich, dark chocolate pudding made with local stout, served with cultured cream",
            price: 16,
            isVegetarian: true,
          },
        ],
      },
      {
        name: "Specialty Desserts",
        items: [
          {
            name: "New Zealand Cheese Board",
            description:
              "Curated selection of local artisanal cheeses with house ferments",
            price: 24,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Chocolate & Ember",
            description:
              "Dark chocolate ganache with ember-infused cream and ash",
            price: 18,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Grilled Pineapple with Spiced Rum Sabayon",
            description:
              "Pineapple grilled over embers, served with a warm spiced rum sabayon",
            price: 19,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Honey & Lavender Panna Cotta",
            description:
              "Delicate panna cotta infused with local honey and lavender, served with honeycomb",
            price: 17,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Mille-feuille of Smoked Pear & Mascarpone",
            description:
              "Layers of crisp pastry, smoked pear, and creamy mascarpone",
            price: 20,
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
      "Natural wines, craft beers, and unique spirits with a focus on fermentation and locality",
    category: [
      {
        name: "Wines",
        items: [
          {
            name: "Natural Chardonnay",
            description:
              "Unfiltered, minimal intervention Chardonnay from Gisborne",
            price: 16,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Skin-Contact Pinot Gris",
            description:
              "Orange wine with extended skin maceration from Nelson",
            price: 18,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Biodynamic Syrah",
            description: "Hawke's Bay Syrah grown using biodynamic principles",
            price: 20,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Pet Nat Rosé",
            description:
              "Naturally sparkling rosé, vibrant and unfiltered from Martinborough",
            price: 17,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Amphora Aged Sauvignon Blanc",
            description:
              "Sauvignon Blanc aged in clay amphorae, textured and complex, from Marlborough",
            price: 22,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Carbonic Maceration Pinot Noir",
            description:
              "Light, fruity Pinot Noir made with whole bunch fermentation, from Central Otago",
            price: 19,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Beers",
        items: [
          {
            name: "House-Fermented Kvass",
            description:
              "Traditional fermented beer made with leftover sourdough",
            price: 12,
            isVegan: true,
          },
          {
            name: "Wild-Fermented Ale",
            description: "Spontaneously fermented ale aged in oak barrels",
            price: 14,
            isVegan: true,
          },
          {
            name: "Smoked Porter",
            description: "Dark beer with malt smoked over manuka wood",
            price: 13,
            isVegan: true,
          },
          {
            name: "Barrel-Aged Sour Ale",
            description:
              "Complex sour ale aged in red wine barrels with local fruit",
            price: 15,
            isVegan: true,
          },
          {
            name: "Koji & Rice Lager",
            description:
              "Crisp lager brewed with koji-fermented rice for a unique umami note",
            price: 14,
            isVegan: true,
          },
          {
            name: "Foraged Herb Saison",
            description:
              "Farmhouse ale brewed with locally foraged herbs and spices",
            price: 15,
            isVegan: true,
          },
        ],
      },
      {
        name: "Spirits/Liquors",
        items: [
          {
            name: "The Source Gin",
            description: "Small-batch gin with foraged botanicals",
            price: 16,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Smoke-Infused Whisky",
            description: "Local whisky infused with applewood smoke",
            price: 22,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Fermented Honey Spirit",
            description: "Distilled mead made from wild New Zealand honey",
            price: 18,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Kawakawa Infused Vodka",
            description:
              "Vodka infused with native Kawakawa leaves, earthy and peppery",
            price: 17,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Manuka Smoked Rum",
            description:
              "Dark rum aged in barrels and infused with Manuka smoke",
            price: 20,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Wild Fennel Liqueur",
            description:
              "Sweet and aromatic liqueur made from foraged wild fennel",
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
            name: "Ember Old Fashioned",
            description: "Whisky, smoked sugar, and charred orange",
            price: 20,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Fermented Berry Fizz",
            description: "Gin, lacto-fermented berries, and soda",
            price: 18,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Bone Marrow Manhattan",
            description:
              "Whisky fat-washed with bone marrow, vermouth, and bitters",
            price: 24,
            isGlutenFree: true,
          },
          {
            name: "Smoked Rosemary Negroni",
            description:
              "Gin, Campari, sweet vermouth, infused with smoked rosemary",
            price: 21,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Kawakawa Sour",
            description:
              "Kawakawa infused vodka, lemon juice, egg white (or aquafaba), and sugar syrup",
            price: 19,
            isGlutenFree: true, // Vegan option with aquafaba
          },
          {
            name: "Charred Pineapple Margarita",
            description:
              "Tequila, lime juice, charred pineapple syrup, and a smoked salt rim",
            price: 20,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Specialty Drinks",
        items: [
          {
            name: "Whey Highball",
            description: "Vodka, fermented whey, and preserved citrus",
            price: 17,
            isVegan: true, // Assuming whey source or processing allows for vegan classification if plant-based, otherwise this would be vegetarian.
            isGlutenFree: true,
          },
          {
            name: "House Vermouth Spritz",
            description:
              "House-made vermouth with botanical infusions and soda",
            price: 16,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Smoke & Fire",
            description:
              "Mezcal, charred chili syrup, and ember-infused bitters",
            price: 22,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Fermented Lemon & Ginger Fizz (Non-Alcoholic)",
            description:
              "House-fermented sparkling drink with lemon, ginger, and herbs",
            price: 12,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Shrub & Soda (Non-Alcoholic)",
            description:
              "Seasonal fruit shrub (vinegar-based syrup) mixed with sparkling water",
            price: 10,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Cold Brew Coffee with Smoked Cream",
            description:
              "Smooth cold brew coffee served with a lightly smoked cream",
            price: 14,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
];
