import { ResturantMenu } from "@/lib/types/types";

export const capeTowngoldRestaurantMenu: ResturantMenu[] = [
  // Food Menu
  {
    title: "Food Menu",
    description:
      "A 14-course African taste safari with dishes from across the continent, showcasing authentic flavors and culinary traditions",
    category: [
      {
        name: "Appetizers",
        items: [
          {
            name: "Moroccan Briouats",
            description:
              "Crispy phyllo pastry filled with spiced chicken and almonds",
            price: 15,
          },
          {
            name: "Mozambican Peri-Peri Prawns",
            description: "Flame-grilled prawns with spicy peri-peri sauce",
            price: 18,
            isGlutenFree: true,
          },
          {
            name: "Cape Malay Samoosas",
            description:
              "Triangular pastries filled with curried vegetables or beef",
            price: 12,
          },
          {
            name: "Egyptian Kofta",
            description: "Grilled spiced meatballs with tahini dipping sauce",
            price: 14,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Soups",
        items: [
          {
            name: "Moroccan Harira",
            description:
              "Traditional soup with lentils, chickpeas, and fragrant spices",
            price: 12,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "West African Peanut Soup",
            description:
              "Creamy soup with ground peanuts, sweet potato, and ginger",
            price: 14,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "South African Butternut Soup",
            description:
              "Velvety butternut squash soup with nutmeg and cinnamon",
            price: 13,
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
            name: "Tunisian Carrot Salad",
            description: "Spiced carrots with cumin, orange, and fresh herbs",
            price: 12,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Ethiopian Azifa",
            description:
              "Chilled lentil salad with mustard, onion, and berbere spice",
            price: 14,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Kenyan Kachumbari",
            description: "Fresh tomato and onion salad with cilantro and lime",
            price: 10,
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
            name: "Cape Malay Chicken Curry",
            description:
              "Aromatic curry with apricots, cinnamon, and cardamom, served with yellow rice",
            price: 26,
            isGlutenFree: true,
          },
          {
            name: "Moroccan Tagine",
            description:
              "Slow-cooked lamb with preserved lemon, olives, and apricots",
            price: 32,
            isGlutenFree: true,
          },
          {
            name: "Nigerian Jollof Rice",
            description:
              "Spiced rice cooked in tomato sauce with grilled chicken",
            price: 24,
            isGlutenFree: true,
          },
          {
            name: "Ethiopian Doro Wat",
            description:
              "Spicy chicken stew with berbere spice and hard-boiled egg",
            price: 28,
            isGlutenFree: true,
          },
          {
            name: "Vegetable Tagine",
            description: "Seasonal vegetables and chickpeas in aromatic spices",
            price: 22,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Sides",
        items: [
          {
            name: "Ethiopian Injera",
            description: "Sourdough flatbread, perfect for scooping up stews",
            price: 6,
            isVegetarian: true,
            isVegan: true,
          },
          {
            name: "South African Pap",
            description: "Traditional maize porridge, served with chakalaka",
            price: 8,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Moroccan Couscous",
            description: "Steamed couscous with herbs and olive oil",
            price: 7,
            isVegetarian: true,
            isVegan: true,
          },
          {
            name: "Chakalaka",
            description: "Spicy vegetable relish with beans and carrots",
            price: 6,
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
      "Sweet flavors from across Africa, showcasing traditional recipes with local ingredients",
    category: [
      {
        name: "Cake and Pastries",
        items: [
          {
            name: "Malva Pudding",
            description:
              "Traditional South African sponge cake with apricot jam and cream",
            price: 12,
            isVegetarian: true,
          },
          {
            name: "Moroccan Almond Pastries",
            description:
              "Delicate pastries filled with almond paste and scented with orange blossom",
            price: 14,
            isVegetarian: true,
          },
          {
            name: "Cape Malay Koeksisters",
            description:
              "Spiced doughnuts soaked in sweet syrup and coated in coconut",
            price: 10,
            isVegetarian: true,
          },
        ],
      },
      {
        name: "Ice Cream",
        items: [
          {
            name: "Rooibos Ice Cream",
            description:
              "Creamy ice cream infused with South African rooibos tea",
            price: 10,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Madagascar Vanilla Bean Gelato",
            description:
              "Rich gelato made with premium Madagascar vanilla beans",
            price: 12,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Cape Gooseberry Sorbet",
            description: "Refreshing sorbet made with local cape gooseberries",
            price: 9,
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
            name: "Melktert",
            description: "Traditional South African milk tart with cinnamon",
            price: 10,
            isVegetarian: true,
          },
          {
            name: "Egyptian Umm Ali",
            description: "Warm bread pudding with nuts, raisins, and coconut",
            price: 12,
            isVegetarian: true,
          },
          {
            name: "Moroccan Orange Custard",
            description: "Creamy orange-infused custard with cardamom",
            price: 11,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Specialty Desserts",
        items: [
          {
            name: "Amarula Chocolate Truffles",
            description:
              "Rich chocolate truffles infused with Amarula cream liqueur",
            price: 14,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Ethiopian Coffee Ceremony",
            description:
              "Traditional coffee ceremony with freshly roasted beans and sweet treats",
            price: 16,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Peppermint Crisp Tart",
            description:
              "South African favorite with layers of caramel, cream, and peppermint chocolate",
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
      "A selection of African wines, beers, and spirits, including unique cocktails inspired by the continent",
    category: [
      {
        name: "Wines",
        items: [
          {
            name: "Stellenbosch Pinotage",
            description:
              "Bold South African red wine with notes of dark berries and spice",
            price: 14,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Franschhoek Chenin Blanc",
            description:
              "Crisp white wine with tropical fruit notes and vibrant acidity",
            price: 12,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Constantia Sauvignon Blanc",
            description: "Elegant white with green apple and gooseberry notes",
            price: 13,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Moroccan Syrah",
            description:
              "Full-bodied red with spice and plum notes from the Atlas Mountains",
            price: 15,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Beers",
        items: [
          {
            name: "Castle Lager",
            description:
              "Classic South African lager with crisp, refreshing taste",
            price: 8,
            isVegan: true,
          },
          {
            name: "Windhoek Lager",
            description:
              "Premium Namibian beer brewed according to German purity law",
            price: 9,
            isVegan: true,
          },
          {
            name: "Tusker",
            description: "Kenyan lager with a distinct flavor and golden color",
            price: 9,
            isVegan: true,
          },
          {
            name: "Casablanca Beer",
            description: "Moroccan premium lager with subtle malt flavor",
            price: 10,
            isVegan: true,
          },
        ],
      },
      {
        name: "Spirits/Liquors",
        items: [
          {
            name: "Amarula Cream Liqueur",
            description:
              "South African cream liqueur made with the fruit of the marula tree",
            price: 10,
            isGlutenFree: true,
          },
          {
            name: "Van Ryn's Brandy",
            description:
              "Award-winning South African brandy, aged in oak barrels",
            price: 12,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Inverroche Gin",
            description:
              "South African craft gin infused with fynbos botanicals",
            price: 14,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Smirnoff 1818",
            description: "Popular South African vodka, perfect for cocktails",
            price: 10,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Cocktails",
        items: [
          {
            name: "Cape Town Sunset",
            description:
              "Inverroche gin, rooibos syrup, lemon juice, and sparkling water",
            price: 16,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Marrakech Mojito",
            description: "White rum, fresh mint, lime, and Moroccan spices",
            price: 15,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "African Queen",
            description:
              "Amarula cream liqueur, coffee liqueur, and fresh cream",
            price: 18,
            isGlutenFree: true,
          },
          {
            name: "Kilimanjaro Cooler",
            description: "Vodka, passionfruit, lime, and ginger beer",
            price: 14,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Specialty Drinks",
        items: [
          {
            name: "Dawa Cocktail",
            description:
              "Kenyan specialty with vodka, honey, lime, and brown sugar",
            price: 14,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Rooibos Sun-Downer",
            description:
              "South African rooibos tea infused with brandy and orange liqueur",
            price: 16,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Spiced Palm Wine Cocktail",
            description: "Traditional palm wine with rum and African spices",
            price: 18,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Amarula Coffee",
            description:
              "Hot coffee with Amarula cream liqueur and whipped cream",
            price: 12,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
];
