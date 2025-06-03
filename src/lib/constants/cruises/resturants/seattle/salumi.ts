import { ResturantMenu } from "@/lib/types/types";

export const seattlesalumiMenu: ResturantMenu[] = [
  {
    title: "Sandwiches",
    category: [
      {
        name: "House Specialties",
        items: [
          {
            name: "The Salumi Classic",
            description:
              "Salumi salami, provolone, onions, peppers on freshly baked roll",
            price: 14,
          },
          {
            name: "Porchetta",
            description:
              "Slow-roasted herb-stuffed pork on ciabatta with aioli",
            price: 15,
          },
          {
            name: "Meatball",
            description:
              "House-made meatballs with marinara and provolone on baguette",
            price: 14,
          },
          {
            name: "Muffo",
            description:
              "Salumi cured meats, provolone, olive tapenade on Italian roll",
            price: 16,
          },
        ],
      },
      {
        name: "Build Your Own",
        items: [
          {
            name: "Choose Your Meat",
            description:
              "Select from our house-cured meats on artisan bread with provolone",
            price: 13,
          },
          {
            name: "Extra Meat",
            description: "Add additional serving of any meat",
            price: 4,
          },
          {
            name: "Extra Cheese",
            description: "Add additional serving of any cheese",
            price: 2,
          },
        ],
      },
    ],
    description: "All sandwiches served on house-made bread",
  },
  {
    title: "Salumi Plates",
    category: [
      {
        name: "Cured Meat Platters",
        items: [
          {
            name: "Salumi Sampler",
            description: "Selection of house-cured meats with olives and bread",
            price: 18,
          },
          {
            name: "Antipasto Platter",
            description:
              "Cured meats, cheeses, olives, roasted vegetables and bread",
            price: 24,
          },
          {
            name: "Prosciutto Plate",
            description:
              "Thinly sliced prosciutto with seasonal accompaniments",
            price: 16,
          },
        ],
      },
    ],
    description: "",
  },
  {
    title: "House-Cured Meats",
    category: [
      {
        name: "By Weight (100g)",
        items: [
          {
            name: "Finocchiona",
            description: "Fennel seed salami with a hint of curry",
            price: 12,
          },
          {
            name: "Mole Salami",
            description: "Chocolate, cinnamon and chipotle pepper salami",
            price: 13,
          },
          {
            name: "Hot Sopressata",
            description: "Spicy Italian-style salami with red pepper",
            price: 12,
          },
          {
            name: "Coppa",
            description: "Dry-cured pork shoulder with spices",
            price: 14,
          },
          {
            name: "Culatello",
            description: "Rare specialty from the heart of the prosciutto",
            price: 18,
          },
        ],
      },
    ],
    description: "Available by weight to take home",
  },
  {
    title: "Hot Dishes",
    category: [
      {
        name: "Daily Specials",
        items: [
          {
            name: "Pasta of the Day",
            description:
              "Seasonal pasta with house-made sauce (Tuesday & Friday)",
            price: 16,
          },
          {
            name: "Soup of the Day",
            description: "Made fresh daily with seasonal ingredients",
            price: 8,
          },
          {
            name: "Italian Family Meal",
            description: "Weekly rotating special (Thursday only)",
            price: 18,
          },
        ],
      },
    ],
    description: "Limited availability - first come, first served",
  },
  {
    title: "Sides",
    category: [
      {
        name: "Accompaniments",
        items: [
          {
            name: "Marinated Olives",
            description: "Mixed olives with herbs and citrus",
            price: 6,
          },
          {
            name: "Giardiniera",
            description: "Pickled vegetables in vinegar and spices",
            price: 5,
          },
          {
            name: "Caesar Salad",
            description: "Romaine, house-made dressing, croutons and parmesan",
            price: 8,
          },
          {
            name: "Bread & Olive Oil",
            description: "Fresh-baked bread with extra virgin olive oil",
            price: 4,
          },
        ],
      },
    ],
    description: "",
  },
  {
    title: "Desserts",
    category: [
      {
        name: "Sweet Endings",
        items: [
          {
            name: "Cannoli",
            description:
              "Traditional Sicilian pastry filled with sweet ricotta",
            price: 5,
          },
          {
            name: "Tiramisu Cup",
            description: "Classic Italian coffee-flavored dessert",
            price: 6,
          },
          {
            name: "Biscotti",
            description: "Twice-baked almond cookies",
            price: 2,
          },
        ],
      },
    ],
    description: "",
  },
  {
    title: "Beverages",
    category: [
      {
        name: "Drinks",
        items: [
          {
            name: "Italian Soda",
            description: "Assorted flavors",
            price: 4,
          },
          {
            name: "Espresso",
            description: "Single shot",
            price: 3,
          },
          {
            name: "San Pellegrino",
            description: "Sparkling mineral water",
            price: 3,
          },
          {
            name: "House Wine",
            description: "Red or white (glass)",
            price: 8,
          },
        ],
      },
    ],
    description: "",
  },
];
