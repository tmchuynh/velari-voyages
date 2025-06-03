import { ResturantMenu } from "@/lib/types/types";

export const newYorkCitykatzMenu: ResturantMenu[] = [
  {
    title: "Signature Sandwiches",
    description:
      "Famous hand-carved sandwiches that made Katz's a NYC institution since 1888",
    category: [
      {
        name: "Classics",
        items: [
          {
            name: "Pastrami on Rye",
            description: "Hand-carved pastrami on rye bread with mustard",
            price: 24,
            isGlutenFree: false,
          },
          {
            name: "Corned Beef on Rye",
            description: "Hand-carved corned beef on rye bread with mustard",
            price: 24,
            isGlutenFree: false,
          },
          {
            name: "Brisket on Rye",
            description: "Hand-carved juicy brisket on rye bread with gravy",
            price: 24,
            isGlutenFree: false,
          },
          {
            name: "Reuben",
            description:
              "Corned beef or pastrami with sauerkraut, Swiss cheese and Russian dressing on grilled rye",
            price: 26,
            isGlutenFree: false,
          },
        ],
      },
      {
        name: "Other Sandwiches",
        items: [
          {
            name: "Turkey on Rye",
            description: "Hand-carved roasted turkey on rye bread",
            price: 22,
            isGlutenFree: false,
          },
          {
            name: "Roast Beef on Rye",
            description: "Hand-carved roast beef on rye bread",
            price: 22,
            isGlutenFree: false,
          },
          {
            name: "Hard Salami on Rye",
            description: "Hand-sliced salami on rye bread",
            price: 21,
            isGlutenFree: false,
          },
          {
            name: "Bologna on Rye",
            description: "Hand-sliced bologna on rye bread",
            price: 19,
            isGlutenFree: false,
          },
        ],
      },
    ],
  },
  {
    title: "Hot Dogs & Knockwurst",
    description: "Traditional New York style frankfurters",
    category: [
      {
        name: "From the Grill",
        items: [
          {
            name: "Hot Dog",
            description: "Grilled all-beef frankfurter on a bun",
            price: 3,
            isGlutenFree: false,
          },
          {
            name: "Knockwurst",
            description: "Thick German-style sausage on a bun",
            price: 15,
            isGlutenFree: false,
          },
          {
            name: "Knoblewurst",
            description: "Garlic sausage on a bun",
            price: 15,
            isGlutenFree: false,
          },
        ],
      },
    ],
  },
  {
    title: "Platters",
    description:
      "Generous portions of our famous meats served with bread on the side",
    category: [
      {
        name: "Meat Platters",
        items: [
          {
            name: "Pastrami Platter",
            description:
              "Hand-carved pastrami served with rye bread on the side",
            price: 28,
            isGlutenFree: false,
          },
          {
            name: "Corned Beef Platter",
            description:
              "Hand-carved corned beef served with rye bread on the side",
            price: 28,
            isGlutenFree: false,
          },
          {
            name: "Combo Platter",
            description:
              "Choice of two meats served with rye bread on the side",
            price: 32,
            isGlutenFree: false,
          },
        ],
      },
    ],
  },
  {
    title: "Soups",
    description: "Traditional Jewish deli soups made from scratch daily",
    category: [
      {
        name: "Homemade Soups",
        items: [
          {
            name: "Matzo Ball Soup",
            description: "Chicken soup with a fluffy matzo ball",
            price: 8,
            isGlutenFree: false,
          },
          {
            name: "Chicken Noodle Soup",
            description: "Classic chicken soup with noodles and vegetables",
            price: 8,
            isGlutenFree: false,
          },
          {
            name: "Split Pea Soup",
            description: "Thick and hearty split pea soup with ham",
            price: 8,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Sides",
    description: "Traditional deli accompaniments and side dishes",
    category: [
      {
        name: "Side Dishes",
        items: [
          {
            name: "French Fries",
            description: "Crispy golden fries",
            price: 7,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Potato Knish",
            description: "Traditional baked potato pastry",
            price: 5,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Potato Salad",
            description: "Homemade creamy potato salad",
            price: 6,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Coleslaw",
            description: "Homemade creamy cabbage slaw",
            price: 6,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Sour Pickles",
            description: "Full or half-sour deli pickles",
            price: 3,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Desserts",
    description: "Classic New York deli sweets",
    category: [
      {
        name: "Sweet Treats",
        items: [
          {
            name: "New York Cheesecake",
            description: "Classic rich and creamy New York-style cheesecake",
            price: 8,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Chocolate Babka",
            description: "Traditional twisted chocolate pastry",
            price: 7,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Black & White Cookie",
            description: "Classic half-chocolate, half-vanilla frosted cookie",
            price: 4,
            isVegetarian: true,
            isGlutenFree: false,
          },
        ],
      },
    ],
  },
];
