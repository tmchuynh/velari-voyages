import { ResturantMenu } from "@/lib/types/types";

export const southamptonwhiteStarTavernMenu: ResturantMenu[] = [
  {
    title: "Bar Snacks",
    category: [
      {
        name: "To Share",
        items: [
          {
            name: "Hampshire Charcuterie Board",
            description:
              "Selection of local cured meats, cornichons, sourdough, and chutney",
            price: 16.5,
            isGlutenFree: false,
          },
          {
            name: "Baked Camembert",
            description:
              "Whole baked cheese with rosemary, garlic, and crusty bread for dipping",
            price: 14,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Scotch Eggs",
            description:
              "Hand-made with free range eggs, served with house piccalilli",
            price: 8.95,
            isGlutenFree: false,
          },
          {
            name: "Pork Scratchings",
            description: "With apple sauce",
            price: 4.5,
            isGlutenFree: true,
          },
        ],
      },
    ],
    description: "Perfect with a pint of local ale or glass of wine",
  },
  {
    title: "Starters",
    category: [
      {
        name: "To Begin",
        items: [
          {
            name: "Smoked Haddock Chowder",
            description: "Creamy soup with leeks, potatoes and parsley oil",
            price: 8.95,
            isGlutenFree: true,
          },
          {
            name: "Crispy Buttermilk Chicken",
            description: "With sriracha mayonnaise and house slaw",
            price: 9.5,
            isGlutenFree: false,
          },
          {
            name: "Salt & Pepper Squid",
            description:
              "Lightly dusted and fried, with garlic aioli and lemon",
            price: 10.5,
            isGlutenFree: true,
          },
          {
            name: "Roasted Beetroot Salad",
            description: "With goat's cheese, walnuts and honey dressing",
            price: 8.95,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
    description: "Starters to whet your appetite",
  },
  {
    title: "Pub Classics",
    category: [
      {
        name: "Hearty Mains",
        items: [
          {
            name: "White Star Beef Burger",
            description:
              "Hampshire beef patty, mature cheddar, bacon, lettuce, tomato, onion, brioche bun with fries",
            price: 16.95,
            isGlutenFree: false,
          },
          {
            name: "Ale-Battered Fish & Chips",
            description:
              "South coast cod, triple-cooked chips, mushy peas, tartare sauce",
            price: 17.5,
            isGlutenFree: false,
          },
          {
            name: "Steak & Ale Pie",
            description:
              "Slow-cooked beef in rich ale gravy, buttery pastry, mashed potatoes and seasonal greens",
            price: 16.95,
            isGlutenFree: false,
          },
          {
            name: "Cumberland Sausage & Mash",
            description:
              "Local butcher's sausages, creamy mash, caramelized onion gravy and seasonal greens",
            price: 15.5,
            isGlutenFree: false,
          },
        ],
      },
      {
        name: "From the Grill",
        items: [
          {
            name: "10oz Ribeye Steak",
            description:
              "28-day aged Hampshire beef with triple-cooked chips, roasted tomato, mushroom and peppercorn sauce",
            price: 28.95,
            isGlutenFree: true,
          },
          {
            name: "Grilled Gammon Steak",
            description:
              "With free-range fried egg, pineapple, triple-cooked chips and garden peas",
            price: 16.5,
            isGlutenFree: true,
          },
          {
            name: "Mixed Grill",
            description:
              "Steak, lamb chop, sausage, gammon, black pudding, egg, tomato, mushroom and chips",
            price: 24.95,
            isGlutenFree: false,
          },
        ],
      },
    ],
    description: "Traditional tavern fare using quality local ingredients",
  },
  {
    title: "Vegetarian & Vegan",
    category: [
      {
        name: "Plant-Based",
        items: [
          {
            name: "Plant-Based Burger",
            description:
              "Beyond Meat patty, vegan cheese, lettuce, tomato, onion, vegan brioche with fries",
            price: 15.95,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: false,
          },
          {
            name: "Wild Mushroom Risotto",
            description:
              "Arborio rice with forest mushrooms, truffle oil and parmesan (vegan option available)",
            price: 15.5,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Roasted Vegetable Tart",
            description:
              "Seasonal vegetables, Mediterranean herbs in puff pastry with side salad",
            price: 14.95,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: false,
          },
        ],
      },
    ],
    description: "Creative plant-based options that don't compromise on flavor",
  },
  {
    title: "Sides",
    category: [
      {
        name: "Extras",
        items: [
          {
            name: "Triple-Cooked Chips",
            description:
              "Hand-cut potatoes, triple-cooked for perfect crispness",
            price: 4.5,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Onion Rings",
            description: "Beer-battered and crispy",
            price: 4,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: false,
          },
          {
            name: "House Salad",
            description: "Mixed leaves with house dressing",
            price: 4,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Seasonal Vegetables",
            description: "Simply prepared with butter",
            price: 4.25,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
    description: "Perfect accompaniments to your meal",
  },
  {
    title: "Puddings",
    category: [
      {
        name: "Sweet Treats",
        items: [
          {
            name: "Sticky Toffee Pudding",
            description: "With butterscotch sauce and vanilla ice cream",
            price: 7.95,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Apple & Blackberry Crumble",
            description:
              "Seasonal fruit topped with oat crumble and served with custard",
            price: 7.5,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Chocolate Brownie",
            description:
              "Rich chocolate brownie with chocolate sauce and vanilla ice cream",
            price: 7.95,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Hampshire Cheese Board",
            description:
              "Selection of local cheeses with crackers, grapes, celery and chutney",
            price: 10.95,
            isVegetarian: true,
            isGlutenFree: false,
          },
        ],
      },
    ],
    description: "Indulgent desserts to end your meal",
  },
];
