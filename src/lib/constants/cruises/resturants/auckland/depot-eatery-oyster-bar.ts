import { ResturantMenu } from "@/lib/types/types";

export const aucklanddepotEateryOysterBarMenu: ResturantMenu[] = [
  // Food Menu
  {
    title: "Food Menu",
    description:
      "Fresh, seasonal New Zealand cuisine with a focus on seafood and local ingredients",
    category: [
      {
        name: "Appetizers",
        items: [
          {
            name: "Freshly Shucked Oysters",
            description:
              "Daily selection of local oysters, served with lemon and mignonette sauce",
            price: 24,
            isGlutenFree: true,
          },
          {
            name: "Tuna Crudo",
            description:
              "Raw yellowfin tuna, avocado, radish, citrus, and chili oil",
            price: 19,
            isGlutenFree: true,
          },
          {
            name: "Beef Carpaccio",
            description:
              "Thinly sliced beef, truffle aioli, capers, parmesan, and rocket",
            price: 18,
            isGlutenFree: true,
          },
          {
            name: "Pork Hock Croquettes",
            description:
              "Crispy croquettes with smoked pork hock and apple sauce",
            price: 16,
          },
          {
            name: "Vegetable Tempura",
            description:
              "Seasonal vegetables in a light tempura batter with dipping sauce",
            price: 15,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: false,
          },
          {
            name: "Charcuterie Board",
            description:
              "Selection of cured meats, pickles, and house-made bread",
            price: 28,
            isGlutenFree: false,
          },
        ],
      },
      {
        name: "Soups",
        items: [
          {
            name: "Seafood Chowder",
            description: "Creamy chowder with local fish, mussels, and prawns",
            price: 17,
          },
          {
            name: "Smoked Fish Soup",
            description: "Rich broth with smoked kahawai, potato, and leeks",
            price: 16,
            isGlutenFree: true,
          },
          {
            name: "Pumpkin and Coconut Soup",
            description:
              "Roasted pumpkin soup with coconut cream and coriander",
            price: 15,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Miso Soup",
            description:
              "Traditional miso soup with tofu, seaweed, and scallions",
            price: 12,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Lentil Soup",
            description:
              "Hearty lentil soup with seasonal vegetables and herbs",
            price: 14,
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
            name: "Market Greens",
            description:
              "Seasonal greens, radish, cucumber, herbs, and citrus dressing",
            price: 14,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Roasted Beet Salad",
            description:
              "Heirloom beets, goat cheese, walnuts, and balsamic reduction",
            price: 16,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Caesar Salad",
            description:
              "Classic Caesar with romaine, croutons, parmesan, and anchovy dressing",
            price: 15,
          },
          {
            name: "Quinoa Salad",
            description:
              "Quinoa, roasted vegetables, feta cheese, and lemon vinaigrette",
            price: 17,
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
            name: "Pan-Fried Market Fish",
            description:
              "Daily catch with seasonal vegetables and lemon butter sauce",
            price: 32,
            isGlutenFree: true,
          },
          {
            name: "Depot Lamb Cutlets",
            description:
              "New Zealand lamb with kumara puree and mint chimichurri",
            price: 36,
            isGlutenFree: true,
          },
          {
            name: "Slow-Roasted Pork Belly",
            description: "Free-range pork with apple, fennel, and crackling",
            price: 34,
            isGlutenFree: true,
          },
          {
            name: "Grilled Portobello Mushrooms",
            description:
              "Marinated mushrooms with polenta, spinach, and truffle oil",
            price: 28,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Beef Short Rib",
            description:
              "Slow-cooked beef short rib with root vegetables and red wine jus",
            price: 38,
          },
          {
            name: "Vegetable Risotto",
            description: "Creamy risotto with seasonal vegetables and parmesan",
            price: 26,
            isVegetarian: true,
            isVegan: false,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Sides",
        items: [
          {
            name: "Potato Gratin",
            description: "Layered potatoes with cream and gruyere cheese",
            price: 12,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Charred Broccolini",
            description: "Wood-fired broccolini with lemon and toasted almonds",
            price: 10,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Handcut Fries",
            description: "Triple-cooked potatoes with aioli",
            price: 9,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Seasonal Vegetables",
            description: "Steamed seasonal vegetables with herb butter",
            price: 11,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Garden Salad",
            description:
              "Mixed greens, cherry tomatoes, cucumber, and balsamic vinaigrette",
            price: 8,
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
    description: "House-made desserts featuring seasonal New Zealand produce",
    category: [
      {
        name: "Cake and Pastries",
        items: [
          {
            name: "Chocolate Fondant",
            description:
              "Warm chocolate cake with molten center and vanilla ice cream",
            price: 16,
            isVegetarian: true,
          },
          {
            name: "Lemon Tart",
            description:
              "Tangy lemon curd in a buttery pastry shell with fresh berries",
            price: 14,
            isVegetarian: true,
          },
          {
            name: "Apple Crumble",
            description:
              "Warm apple crumble with cinnamon and vanilla ice cream",
            price: 15,
            isVegetarian: true,
          },
          {
            name: "Pistachio Baklava",
            description:
              "Layers of filo pastry with pistachios, honey syrup, and rosewater",
            price: 13,
            isVegetarian: true,
          },
        ],
      },
      {
        name: "Ice Cream",
        items: [
          {
            name: "Hokey Pokey Ice Cream",
            description:
              "Classic New Zealand vanilla ice cream with honeycomb toffee",
            price: 12,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Manuka Honey & Thyme Sorbet",
            description: "Refreshing sorbet with local honey and fresh thyme",
            price: 10,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Chocolate & Sea Salt Gelato",
            description: "Rich chocolate gelato with a hint of sea salt",
            price: 11,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Custards and Puddings",
        items: [
          {
            name: "Vanilla Bean Panna Cotta",
            description: "Silky vanilla custard with seasonal fruit compote",
            price: 14,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Sticky Date Pudding",
            description: "Warm date cake with toffee sauce and whipped cream",
            price: 15,
            isVegetarian: true,
          },
          {
            name: "Rice Pudding",
            description: "Creamy rice pudding with cinnamon and raisins",
            price: 12,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Specialty Desserts",
        items: [
          {
            name: "Pavlova",
            description:
              "Classic New Zealand meringue with whipped cream and fresh fruit",
            price: 16,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Cheese Board",
            description:
              "Selection of local and imported cheeses with quince paste and crackers",
            price: 24,
            isVegetarian: true,
          },
          {
            name: "Affogato",
            description: "Espresso poured over vanilla ice cream",
            price: 12,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Chocolate Tart",
            description:
              "Rich chocolate tart with a buttery crust and raspberry coulis",
            price: 15,
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
      "Curated wines, craft beers, and signature cocktails to complement our seafood and dishes",
    category: [
      {
        name: "Wines",
        items: [
          {
            name: "Marlborough Sauvignon Blanc",
            description: "Bright, crisp with notes of citrus and passionfruit",
            price: 14,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Central Otago Pinot Noir",
            description: "Silky texture with cherry and spice notes",
            price: 16,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Hawke's Bay Chardonnay",
            description: "Elegant with stone fruit flavors and subtle oak",
            price: 15,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Waiheke Island Syrah",
            description: "Full-bodied with dark berry and pepper notes",
            price: 18,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Gisborne Pinot Gris",
            description: "Aromatic with pear and floral notes",
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
            name: "Emerson's Pilsner",
            description: "Classic New Zealand craft pilsner",
            price: 10,
            isVegan: true,
          },
          {
            name: "Panhead Supercharger APA",
            description: "American pale ale with citrus hop flavors",
            price: 12,
            isVegan: true,
          },
          {
            name: "Garage Project Hapi Daze",
            description: "Easy drinking Pacific pale ale",
            price: 11,
            isVegan: true,
          },
          {
            name: "Tuatara APA",
            description: "Hoppy and refreshing American pale ale",
            price: 11,
            isVegan: true,
          },
          {
            name: "Liberty C!tra Pale Ale",
            description: "Citrusy and aromatic pale ale",
            price: 12,
            isVegan: true,
          },
        ],
      },
      {
        name: "Spirits/Liquors",
        items: [
          {
            name: "Reid+Reid Native Gin",
            description: "New Zealand gin with native botanicals",
            price: 14,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Thomson Whisky",
            description: "Small batch New Zealand whisky",
            price: 16,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "42Below Vodka",
            description: "Premium New Zealand vodka",
            price: 12,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Stolen Rum",
            description: "Crafted rum with tropical fruit notes",
            price: 13,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Scapegrace Dry Gin",
            description: "Award-winning dry gin with a complex flavor profile",
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
            name: "Coastal Martini",
            description:
              "Reid+Reid gin with a splash of seaweed-infused vermouth",
            price: 18,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Feijoa Mule",
            description: "42Below vodka, feijoa puree, lime, and ginger beer",
            price: 16,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Manuka Old Fashioned",
            description:
              "Thomson whisky, manuka honey syrup, and orange bitters",
            price: 19,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Kiwi Mojito",
            description:
              "Fresh mint, lime, kiwi puree, and Stolen rum topped with soda",
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
            name: "Smoked Kawakawa Negroni",
            description:
              "House-smoked gin with kawakawa-infused Campari and vermouth",
            price: 20,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Pohutukawa Spritz",
            description:
              "New Zealand aperitif with sparkling wine and pohutukawa bitters",
            price: 17,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Horopito Margarita",
            description:
              "Tequila with lime, horopito syrup, and black salt rim",
            price: 18,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Kiwi & Elderflower Mojito",
            description:
              "White rum with kiwifruit, elderflower liqueur, mint, and lime",
            price: 17,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Lemon & Thyme Collins",
            description:
              "Reid+Reid gin with lemon juice, thyme syrup, and soda water",
            price: 16,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
];
