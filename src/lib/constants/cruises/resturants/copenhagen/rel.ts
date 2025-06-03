import { ResturantMenu } from "@/lib/types/types";

export const copenhagenrelaeMenu: ResturantMenu[] = [
  // Food Menu
  {
    title: "Food Menu",
    description:
      "Sustainable modern Nordic cuisine focusing on organic ingredients and minimal waste",
    category: [
      {
        name: "Appetizers",
        items: [
          {
            name: "Raw Langoustine",
            description:
              "Hand-caught langoustine with Jerusalem artichoke and sea buckthorn",
            price: 26,
            isGlutenFree: true,
          },
          {
            name: "Pickled Herring Tart",
            description:
              "Rye tart with organic herring, fermented cream, and ramps",
            price: 22,
          },
          {
            name: "Cured Beets & Goat Cheese",
            description:
              "Salt-baked beets with whipped goat cheese and hazelnuts",
            price: 20,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Smoked Potato",
            description: "Hay-smoked potato with egg yolk and ramson capers",
            price: 17,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Soups",
        items: [
          {
            name: "Mussel & Parsley Soup",
            description:
              "Creamy organic mussel soup with parsley oil and sourdough croutons",
            price: 22,
          },
          {
            name: "Root Vegetable Broth",
            description:
              "Clear broth with seasonal root vegetables and wild herbs",
            price: 17,
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
            name: "Nordic Leaves",
            description:
              "Seasonal greens with pickled green strawberries and rye bread crumble",
            price: 17,
            isVegetarian: true,
          },
          {
            name: "Kale & Preserved Lemon",
            description:
              "Danish kale with preserved lemon, almonds, and aged cheese",
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
            name: "Bakskuld Fish",
            description:
              "Salted and dried flatfish with brown butter, capers, and parsley",
            price: 38,
            isGlutenFree: true,
          },
          {
            name: "Pork Neck & Cabbage",
            description:
              "Slow-cooked organic pork with fermented cabbage and apple",
            price: 36,
            isGlutenFree: true,
          },
          {
            name: "Baked Celeriac",
            description: "Whole roasted celeriac with mushroom sauce and kale",
            price: 32,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Cod & Mussel Sauce",
            description:
              "Line-caught cod with mussel emulsion and charred leeks",
            price: 40,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Sides",
        items: [
          {
            name: "Roasted Carrots",
            description: "Heritage carrots with caraway and cultured butter",
            price: 12,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "New Potatoes",
            description: "Buttered new potatoes with dill and flaky sea salt",
            price: 10,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Sunchokes & Brown Butter",
            description:
              "Roasted Jerusalem artichokes with browned butter and thyme",
            price: 14,
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
      "Seasonal desserts featuring traditional Nordic ingredients with a modern twist",
    category: [
      {
        name: "Cake and Pastries",
        items: [
          {
            name: "Rye Bread Parfait",
            description:
              "Caramelized rye bread ice cream parfait with sea buckthorn",
            price: 15,
            isVegetarian: true,
          },
          {
            name: "Apple Tarte Tatin",
            description:
              "Caramelized Danish apples with rosemary and buttermilk",
            price: 17,
            isVegetarian: true,
          },
        ],
      },
      {
        name: "Ice Cream",
        items: [
          {
            name: "Brown Butter Ice Cream",
            description: "With caramelized hazelnuts and preserved berries",
            price: 15,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Milk & Honey",
            description: "Frozen milk mousse with raw honey and bee pollen",
            price: 14,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Custards and Puddings",
        items: [
          {
            name: "Skyr & Rhubarb",
            description:
              "Icelandic yogurt mousse with poached rhubarb and oat crumble",
            price: 15,
            isVegetarian: true,
          },
          {
            name: "Buttermilk Pudding",
            description: "With seasonal berries and crisp meringue",
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
            name: "Danish Cheese Plate",
            description:
              "Selection of artisanal Danish cheeses with fruit compote",
            price: 22,
            isVegetarian: true,
          },
          {
            name: "Chocolate & Cardamom",
            description:
              "Dark chocolate tart with cardamom ice cream and preserved cherries",
            price: 17,
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
      "Organic and natural wines, local beers, and seasonal cocktails",
    category: [
      {
        name: "Wines",
        items: [
          {
            name: "Organic Chardonnay",
            description:
              "Danish organic white with fresh apple and mineral notes",
            price: 15,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Biodynamic Pinot Noir",
            description: "Light-bodied red with earthy complexity from Zealand",
            price: 17,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Natural Rosé Pet Nat",
            description: "Cloudy, naturally sparkling rosé with wild yeast",
            price: 16,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Orange Wine",
            description: "Skin-contact Sauvignon Blanc with herbal notes",
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
            name: "Organic Pilsner",
            description: "Clean, crisp local organic pilsner",
            price: 10,
            isVegan: true,
          },
          {
            name: "Wheat Ale With Elderflower",
            description: "Refreshing wheat beer with foraged elderflower",
            price: 12,
            isVegan: true,
          },
          {
            name: "Bøgedal Farmhouse Ale",
            description:
              "Traditional Danish farmhouse ale with complex flavors",
            price: 14,
            isVegan: true,
          },
        ],
      },
      {
        name: "Spirits/Liquors",
        items: [
          {
            name: "Danish Apple Brandy",
            description: "Distilled from heritage apple varieties",
            price: 15,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Nordic Aquavit",
            description: "Traditional spirit with caraway, dill, and citrus",
            price: 14,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Rhubarb Schnapps",
            description: "House-infused schnapps with organic rhubarb",
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
            name: "Nordic G&T",
            description: "Danish gin with spruce shoots and cucumber tonic",
            price: 17,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Elderflower Fizz",
            description: "Aquavit, elderflower, lemon, and sparkling water",
            price: 15,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Blackcurrant Bramble",
            description: "Gin, blackcurrant cordial, and lemon",
            price: 16,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Specialty Drinks",
        items: [
          {
            name: "House Kombucha",
            description: "Fermented tea with seasonal fruits (non-alcoholic)",
            price: 10,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Apple & Woodruff",
            description:
              "Pressed apple juice with woodruff syrup (non-alcoholic)",
            price: 12,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Herb Garden",
            description:
              "Fresh herb infusion with honey and lemon (non-alcoholic)",
            price: 9,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
];
