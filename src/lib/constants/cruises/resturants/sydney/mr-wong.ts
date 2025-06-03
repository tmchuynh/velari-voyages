import { ResturantMenu } from "@/lib/types/types";

export const sydneymrWongMenu: ResturantMenu[] = [
  {
    title: "Dim Sum",
    category: [
      {
        name: "Steamed",
        items: [
          {
            name: "Har Gow",
            description: "Prawn dumplings with bamboo shoots (4 pieces)",
            price: 16,
            isGlutenFree: false,
          },
          {
            name: "Scallop Shumai",
            description:
              "Open-faced dumplings with scallops and tobiko (4 pieces)",
            price: 18,
            isGlutenFree: false,
          },
          {
            name: "Xiao Long Bao",
            description: "Soup dumplings with pork and ginger (4 pieces)",
            price: 16,
            isGlutenFree: false,
          },
          {
            name: "King Crab Dumpling",
            description:
              "Delicate dumpling with fresh king crab meat (4 pieces)",
            price: 24,
            isGlutenFree: false,
          },
        ],
      },
      {
        name: "Fried & Baked",
        items: [
          {
            name: "Duck Spring Rolls",
            description:
              "Crispy rolls with shredded duck and vegetables (3 pieces)",
            price: 18,
            isGlutenFree: false,
          },
          {
            name: "Wagyu Beef Puffs",
            description:
              "Flaky pastry with slow-cooked wagyu filling (3 pieces)",
            price: 22,
            isGlutenFree: false,
          },
          {
            name: "Lobster & Truffle Toast",
            description:
              "Decadent prawn toast with lobster and black truffle (4 pieces)",
            price: 26,
            isGlutenFree: false,
          },
        ],
      },
    ],
    description: "Handmade daily by our dim sum specialists",
  },
  {
    title: "Small Plates",
    category: [
      {
        name: "Cold Starters",
        items: [
          {
            name: "Salmon Sashimi",
            description: "Tasmanian salmon, ginger, shallot, sesame",
            price: 24,
            isGlutenFree: true,
          },
          {
            name: "Cucumber Salad",
            description: "Smashed cucumber, garlic, black vinegar, chili oil",
            price: 14,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Chinese Roast Duck Salad",
            description: "Shredded duck, pomelo, lychee, sesame",
            price: 28,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Hot Starters",
        items: [
          {
            name: "Salt & Pepper Squid",
            description: "Crispy fried with native pepper, chili salt",
            price: 26,
            isGlutenFree: false,
          },
          {
            name: "Typhoon Shelter Crab",
            description: "Wok-fried crab with garlic, chili, black beans",
            price: 42,
            isGlutenFree: true,
          },
          {
            name: "King Prawn & Scallop Sui Mai",
            description: "Open-faced dumplings with XO sauce (4 pieces)",
            price: 22,
            isGlutenFree: false,
          },
        ],
      },
    ],
    description: "Perfect for sharing or starting your meal",
  },
  {
    title: "BBQ & Roast",
    category: [
      {
        name: "Chinese Barbecue",
        items: [
          {
            name: "Cantonese Roast Duck",
            description: "Half or whole duck with plum sauce",
            price: 42,
            isGlutenFree: true,
          },
          {
            name: "Honey-Glazed Char Siu Pork",
            description: "Barbecued pork with sweet soy glaze",
            price: 36,
            isGlutenFree: true,
          },
          {
            name: "Crispy Skin Chicken",
            description: "Whole or half chicken with ginger and shallot sauce",
            price: 38,
            isGlutenFree: true,
          },
          {
            name: "BBQ Platter",
            description:
              "Selection of roast duck, char siu pork, and crispy pork belly",
            price: 68,
            isGlutenFree: true,
          },
        ],
      },
    ],
    description:
      "Traditional roast meats prepared daily in our custom-built barbecue kitchen",
  },
  {
    title: "Live Seafood",
    category: [
      {
        name: "From the Tank",
        items: [
          {
            name: "Live Mud Crab",
            description:
              "Wok-fried with black pepper, chili, or ginger and spring onion (market price)",
            price: 0,
            isGlutenFree: true,
          },
          {
            name: "Live Lobster",
            description:
              "Steamed with garlic butter or wok-fried with XO sauce (market price)",
            price: 0,
            isGlutenFree: true,
          },
          {
            name: "Live Abalone",
            description:
              "Braised with oyster sauce and seasonal vegetables (market price)",
            price: 0,
            isGlutenFree: true,
          },
        ],
      },
    ],
    description:
      "Fresh seafood from our tanks, prepared to your preference (market price)",
  },
  {
    title: "Main Courses",
    category: [
      {
        name: "Seafood",
        items: [
          {
            name: "Steamed Fish",
            description: "Market fish with ginger, spring onion, soy",
            price: 48,
            isGlutenFree: true,
          },
          {
            name: "King Prawns",
            description: "Wok-fried with XO sauce, snow peas, and almonds",
            price: 42,
            isGlutenFree: true,
          },
          {
            name: "Pipis in XO Sauce",
            description:
              "Stir-fried with vermicelli noodles and Chinese sausage",
            price: 46,
            isGlutenFree: false,
          },
        ],
      },
      {
        name: "Meat & Poultry",
        items: [
          {
            name: "Sweet & Sour Pork",
            description:
              "Crispy pork, pineapple, capsicum, with sweet and sour sauce",
            price: 36,
            isGlutenFree: false,
          },
          {
            name: "Kung Pao Chicken",
            description:
              "Wok-fried chicken with Sichuan peppercorns, dried chili, cashews",
            price: 34,
            isGlutenFree: true,
          },
          {
            name: "Wagyu Beef Stir-fry",
            description: "Grain-fed beef with black pepper sauce, mushrooms",
            price: 44,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Vegetarian",
        items: [
          {
            name: "Buddha's Delight",
            description:
              "Stir-fried seasonal vegetables, tofu, bamboo shoots, wood ear mushrooms",
            price: 26,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Mapo Tofu (Vegetarian)",
            description: "Soft tofu in spicy bean sauce with vegetables",
            price: 24,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Stir-fried Chinese Greens",
            description: "Seasonal vegetables with garlic and soy",
            price: 18,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
    description: "Classic Cantonese dishes with a modern interpretation",
  },
  {
    title: "Noodles & Rice",
    category: [
      {
        name: "Accompaniments",
        items: [
          {
            name: "Special Fried Rice",
            description: "With BBQ pork, prawns, and seasonal vegetables",
            price: 24,
            isGlutenFree: true,
          },
          {
            name: "Seafood Fried Rice",
            description: "XO sauce, scallops, prawns, and flying fish roe",
            price: 28,
            isGlutenFree: true,
          },
          {
            name: "Singapore Noodles",
            description: "Vermicelli with BBQ pork, prawns, curry spices",
            price: 24,
            isGlutenFree: false,
          },
          {
            name: "Beef Hor Fun",
            description:
              "Wide rice noodles with wagyu beef, bean sprouts, and dark soy",
            price: 28,
            isGlutenFree: true,
          },
        ],
      },
    ],
    description: "Traditional rice and noodle dishes with premium ingredients",
  },
  {
    title: "Desserts",
    category: [
      {
        name: "Sweet Finishes",
        items: [
          {
            name: "Deep-fried Ice Cream",
            description:
              "Vanilla bean ice cream in crisp batter with butterscotch sauce",
            price: 16,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Mango Pudding",
            description: "Classic dessert with fresh mango, coconut sago",
            price: 14,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Egg Tart",
            description: "Warm flaky pastry with custard filling (2 pieces)",
            price: 12,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Jasmine Tea Crème Brûlée",
            description: "Infused with jasmine tea, with almond cookie",
            price: 16,
            isVegetarian: true,
            isGlutenFree: false,
          },
        ],
      },
    ],
    description: "Traditional Chinese desserts with contemporary touches",
  },
];
