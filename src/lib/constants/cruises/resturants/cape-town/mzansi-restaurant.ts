import { ResturantMenu } from "@/lib/types/types";

export const capeTownmzansiRestaurantMenu: ResturantMenu[] = [
  // Food Menu
  {
    title: "Food Menu",
    description:
      "Authentic Cape Malay and traditional South African township cuisine, served family-style in a warm, communal atmosphere",
    category: [
      {
        name: "Appetizers",
        items: [
          {
            name: "Samp and Beans",
            description:
              "Traditional dish of crushed maize and beans, seasoned with herbs",
            price: 10,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Chicken Giblets",
            description: "Slow-cooked chicken giblets in a spicy tomato sauce",
            price: 12,
            isGlutenFree: true,
          },
          {
            name: "Vetkoek and Curry Mince",
            description: "Deep-fried bread filled with spiced minced meat",
            price: 14,
          },
          {
            name: "Grilled Mealies",
            description: "Grilled corn on the cob with spicy peri-peri butter",
            price: 8,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Soups",
        items: [
          {
            name: "Umngqusho Soup",
            description: "Hearty soup with samp, beans, and vegetables",
            price: 12,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Mogodu Soup",
            description: "Traditional tripe soup with vegetables and spices",
            price: 14,
            isGlutenFree: true,
          },
          {
            name: "Pumpkin Soup",
            description:
              "Creamy soup with pumpkin, nutmeg, and a swirl of cream",
            price: 10,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Salads",
        items: [
          {
            name: "Chakalaka Salad",
            description:
              "Spicy vegetable relish with beans, carrots, and peppers",
            price: 10,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Beetroot and Orange Salad",
            description: "Sweet and tangy combination with a hint of cinnamon",
            price: 9,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Green Bean Salad",
            description:
              "Fresh green beans with onion, garlic, and vinaigrette",
            price: 8,
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
            name: "Umleqwa (Traditional Chicken)",
            description:
              "Free-range chicken slow-cooked with onions and traditional spices",
            price: 24,
            isGlutenFree: true,
          },
          {
            name: "Oxtail Potjie",
            description: "Slow-cooked oxtail stew with vegetables and red wine",
            price: 28,
            isGlutenFree: true,
          },
          {
            name: "Cape Malay Lamb Curry",
            description:
              "Fragrant curry with tender lamb pieces and traditional Cape Malay spices",
            price: 26,
            isGlutenFree: true,
          },
          {
            name: "Bobotie",
            description:
              "Spiced minced meat baked with a savory egg custard topping",
            price: 22,
            isGlutenFree: true,
          },
          {
            name: "Vegetable Potjiekos",
            description:
              "Slow-cooked vegetable stew in a traditional three-legged pot",
            price: 18,
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
            name: "Pap",
            description:
              "Traditional maize porridge, a staple in South African cuisine",
            price: 6,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Morogo",
            description: "African spinach sautéed with onions and spices",
            price: 8,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Umngqusho",
            description: "Samp and beans, a traditional Xhosa dish",
            price: 7,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Amagwinya (Vetkoek)",
            description:
              "Deep-fried bread rolls, perfect for dipping in sauces",
            price: 5,
            isVegetarian: true,
            isVegan: true,
          },
        ],
      },
    ],
  },

  // Dessert Menu
  {
    title: "Dessert Menu",
    description:
      "Traditional South African sweet treats and home-style desserts",
    category: [
      {
        name: "Cake and Pastries",
        items: [
          {
            name: "Melktert",
            description:
              "Traditional South African milk tart with cinnamon dusting",
            price: 10,
            isVegetarian: true,
          },
          {
            name: "Koeksisters",
            description: "Plaited dough deep-fried and soaked in sweet syrup",
            price: 8,
            isVegetarian: true,
          },
          {
            name: "Malva Pudding",
            description: "Sweet spongy pudding with apricot jam and custard",
            price: 12,
            isVegetarian: true,
          },
        ],
      },
      {
        name: "Ice Cream",
        items: [
          {
            name: "Amarula Ice Cream",
            description: "Vanilla ice cream infused with Amarula cream liqueur",
            price: 10,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Rooibos Tea Ice Cream",
            description:
              "Homemade ice cream infused with South African rooibos tea",
            price: 9,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Mango Sorbet",
            description: "Refreshing sorbet made with ripe African mangoes",
            price: 8,
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
            name: "Sago Pudding",
            description:
              "Traditional pearl sago pudding with apricot jam and cinnamon",
            price: 9,
            isVegetarian: true,
          },
          {
            name: "Buttermilk Pudding",
            description: "Tangy buttermilk dessert with caramel sauce",
            price: 10,
            isVegetarian: true,
          },
          {
            name: "Pumpkin Fritters",
            description: "Sweet pumpkin fritters dusted with cinnamon sugar",
            price: 8,
            isVegetarian: true,
          },
        ],
      },
      {
        name: "Specialty Desserts",
        items: [
          {
            name: "Peppermint Crisp Tart",
            description:
              "South African favorite with layers of caramel, cream, and peppermint chocolate",
            price: 12,
            isVegetarian: true,
          },
          {
            name: "Dom Pedro",
            description: "Adult milkshake with vanilla ice cream and whisky",
            price: 14,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Cape Brandy Pudding",
            description: "Sticky date pudding with brandy sauce",
            price: 13,
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
      "South African wines, beers, and traditional drinks to complement your township dining experience",
    category: [
      {
        name: "Wines",
        items: [
          {
            name: "House Red",
            description: "Smooth, medium-bodied South African red blend",
            price: 8,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "House White",
            description: "Crisp, refreshing South African Chenin Blanc",
            price: 8,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Pinotage",
            description:
              "South Africa's signature red varietal with dark fruit flavors",
            price: 12,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Chenin Blanc",
            description: "Versatile white wine with apple and pear notes",
            price: 10,
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
            description: "South Africa's flagship lager beer",
            price: 6,
            isVegan: true,
          },
          {
            name: "Black Label",
            description:
              "Full-flavored lager popular in South African townships",
            price: 6,
            isVegan: true,
          },
          {
            name: "Soweto Gold",
            description: "Township craft beer with malty flavors",
            price: 8,
            isVegan: true,
          },
          {
            name: "Hansa Pilsener",
            description: "Light and refreshing South African pilsner",
            price: 6,
            isVegan: true,
          },
        ],
      },
      {
        name: "Spirits/Liquors",
        items: [
          {
            name: "Amarula Cream",
            description:
              "Cream liqueur made from the fruit of the African marula tree",
            price: 8,
            isGlutenFree: true,
          },
          {
            name: "Klipdrift Brandy",
            description: "Popular South African brandy",
            price: 7,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Jameson Whiskey",
            description: "Smooth Irish whiskey, a township favorite",
            price: 9,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Van Ryn's Brandy",
            description: "Premium South African brandy",
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
            name: "Springbok Shot",
            description:
              "Layered shot with Amarula cream and peppermint liqueur",
            price: 8,
            isGlutenFree: true,
          },
          {
            name: "Township Sunrise",
            description: "Vodka, orange juice, and grenadine",
            price: 10,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "African Sunset",
            description: "Rum, amarula, and fruit juices",
            price: 12,
            isGlutenFree: true,
          },
          {
            name: "Soweto Mule",
            description: "Vodka, ginger beer, and lime with African spices",
            price: 10,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Specialty Drinks",
        items: [
          {
            name: "Umqombothi Tasting",
            description:
              "Traditional African sorghum beer (non-alcoholic version available)",
            price: 8,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Mageu",
            description:
              "Traditional non-alcoholic drink made from fermented mealie pap",
            price: 6,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Rooibos Iced Tea",
            description: "South African tea served cold with honey and lemon",
            price: 5,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Dom Pedro",
            description:
              "Alcoholic dessert drink with ice cream, cream, and whisky",
            price: 14,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
];
