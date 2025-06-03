import { ResturantMenu } from "@/lib/types/types";

export const copenhagennomaMenu: ResturantMenu[] = [
  // Food Menu
  {
    title: "Food Menu",
    description:
      "Revolutionary New Nordic cuisine focused on seasonal ingredients, fermentation, and foraging",
    category: [
      {
        name: "Appetizers",
        items: [
          {
            name: "Reindeer Moss & Cep Dust",
            description: "Crispy reindeer moss with mushroom powder and spruce",
            price: 24,
            isGlutenFree: true,
          },
          {
            name: "Æbleskiver with Fermented Grasshopper",
            description:
              "Traditional Danish pancake puffs with fermented insect paste",
            price: 26,
          },
          {
            name: "Sea Urchin & Hazelnuts",
            description: "Fresh sea urchin with hazelnut milk and seaweed",
            price: 34,
            isGlutenFree: true,
          },
          {
            name: "Mahogany Clam & Kelp",
            description: "Ancient clam thinly sliced with seaweed broth",
            price: 32,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Soups",
        items: [
          {
            name: "Fermented Potato Soup",
            description:
              "Creamy potato soup with pine oil and preserved mushrooms",
            price: 22,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Wild Game Broth",
            description: "Clear consommé with fermented berries and wild herbs",
            price: 24,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Salads",
        items: [
          {
            name: "Vegetable Field",
            description: "Seasonal vegetables and herbs with edible soil",
            price: 28,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Fermented Beechnut & Herbs",
            description: "Foraged herbs with beechnut paste and flowers",
            price: 26,
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
            name: "Wild Duck & Seasonal Berries",
            description:
              "Aged wild duck with fermented berry sauce and preserved pine",
            price: 48,
            isGlutenFree: true,
          },
          {
            name: "Roasted Bone Marrow",
            description: "With beef tartare, ants, and wood sorrel",
            price: 44,
            isGlutenFree: true,
          },
          {
            name: "Langoustine & Nasturtium",
            description: "Barely cooked langoustine with fermented nasturtium",
            price: 52,
            isGlutenFree: true,
          },
          {
            name: "Caramelized Milk & Monkfish Liver",
            description: "Crisp milk skin with cured monkfish liver and kelp",
            price: 38,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Sides",
        items: [
          {
            name: "Fermented Wild Greens",
            description: "Assortment of lacto-fermented wild plants",
            price: 18,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Caramelized Koji Rice",
            description: "With pine needles and roasted yeast",
            price: 16,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Egg Yolk & Smoked Butter",
            description:
              "Preserved egg yolk with cultured butter and wild herbs",
            price: 20,
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
      "Boundary-pushing sweet creations featuring foraged ingredients and fermentation techniques",
    category: [
      {
        name: "Cake and Pastries",
        items: [
          {
            name: "Malt Flatbread & Plum",
            description: "Warm flatbread with fermented plum and bee pollen",
            price: 20,
            isVegetarian: true,
          },
          {
            name: "Forest Floor Cake",
            description:
              "Layered chocolate cake with moss cream and forest berries",
            price: 22,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Ice Cream",
        items: [
          {
            name: "Frozen Reindeer Brain",
            description:
              "Creamy brain-shaped sorbet with lingonberry and herbs",
            price: 18,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Birch Ice & Wood Ants",
            description: "Birch sap ice cream with wood ants and birch oil",
            price: 20,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Custards and Puddings",
        items: [
          {
            name: "Whey Pudding",
            description:
              "Creamy whey custard with caramelized milk skin and oxalis",
            price: 18,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Fermented Rice Pudding",
            description: "Tangy rice pudding with forest berry compote",
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
            name: "Moss & Cep Truffle",
            description: "Chocolate truffle with moss cream and mushroom dust",
            price: 22,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Beehive",
            description:
              "Honeycomb structure with fermented honey, pollen, and flowers",
            price: 24,
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
      "Natural wines, foraged ingredient cocktails, and unique fermented drinks",
    category: [
      {
        name: "Wines",
        items: [
          {
            name: "Skin-Contact Grüner Veltliner",
            description: "Austrian natural wine with extended skin contact",
            price: 24,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Jura Savagnin",
            description: "Oxidative French white wine with nutty notes",
            price: 28,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Biodynamic Gamay",
            description: "Minimal intervention red wine from Beaujolais",
            price: 22,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Pét-Nat Rosé",
            description:
              "Naturally sparkling rosé with wild yeast fermentation",
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
            name: "Noma Wild Ferment Ale",
            description: "House-brewed ale using foraged ingredients",
            price: 18,
            isVegan: true,
          },
          {
            name: "Spruce Tip Lager",
            description: "Light beer brewed with young spruce shoots",
            price: 16,
            isVegan: true,
          },
          {
            name: "Mushroom Stout",
            description: "Dark beer with forest mushrooms and malt",
            price: 17,
            isVegan: true,
          },
        ],
      },
      {
        name: "Spirits/Liquors",
        items: [
          {
            name: "Woodruff Snaps",
            description: "House-infused woodruff schnapps",
            price: 18,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Birch Spirit",
            description: "Distilled spirit from fermented birch sap",
            price: 22,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Aged Pine Aquavit",
            description: "Traditional aquavit infused with pine needles",
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
            name: "Nordic Negroni",
            description: "Gin, birch sap vermouth, and fermented lingonberry",
            price: 24,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Sea Buckthorn Sour",
            description: "Aquavit with sea buckthorn juice and woodruff foam",
            price: 22,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Wild Herb Martini",
            description: "Foraged herb-infused gin with fermented honey water",
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
            name: "Fermented Juice Pairing",
            description:
              "Selection of house-fermented fruit and vegetable juices (non-alcoholic)",
            price: 32,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Roasted Barley Tea",
            description:
              "Warm fermented tea with rosehip and dried berries (non-alcoholic)",
            price: 16,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Green Juniper & Bee Larvae",
            description:
              "Cold infusion with green juniper and fermented honey (non-alcoholic)",
            price: 18,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
];
