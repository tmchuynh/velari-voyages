import { ResturantMenu } from "@/lib/types/types";

export const galvestonlaKingMenu: ResturantMenu[] = [
  {
    title: "Confectionery",
    category: [
      {
        name: "House-Made Candies",
        items: [
          {
            name: "Salt Water Taffy",
            description:
              "Assorted flavors made in-house, Galveston's specialty",
            price: 12.99,
          },
          {
            name: "Pecan Pralines",
            description: "Traditional Southern pralines with Texas pecans",
            price: 23,
          },
          {
            name: "Handmade Fudge",
            description:
              "Chocolate, vanilla, peanut butter, or flavor of the day",
            price: 18.99,
          },
          {
            name: "Peanut Brittle",
            description: "Crunchy classic made with fresh roasted peanuts",
            price: 14.99,
          },
        ],
      },
      {
        name: "Chocolate Creations",
        items: [
          {
            name: "Chocolate-Dipped Strawberries",
            description:
              "Fresh berries dipped in milk, dark or white chocolate",
            price: 6,
          },
          {
            name: "Turtles",
            description: "Caramel and pecans covered in chocolate",
            price: 22,
          },
          {
            name: "Chocolate Truffles",
            description: "Assorted flavors, handmade in small batches",
            price: 4,
          },
        ],
      },
    ],
    description: "",
  },
  {
    title: "Ice Cream Parlor",
    category: [
      {
        name: "Scoops & Sundaes",
        items: [
          {
            name: "Premium Ice Cream",
            description:
              "Single scoop of house-made ice cream in a cup or cone",
            price: 5,
          },
          {
            name: "La King's Sundae",
            description:
              "Three scoops with choice of toppings, whipped cream, nuts and a cherry",
            price: 8.99,
          },
          {
            name: "Banana Split",
            description:
              "Classic split with three flavors of ice cream, toppings and whipped cream",
            price: 9.99,
          },
          {
            name: "Ice Cream Soda",
            description: "Flavored syrup, soda water and vanilla ice cream",
            price: 6.99,
          },
        ],
      },
      {
        name: "Specialty Treats",
        items: [
          {
            name: "Old-Fashioned Milkshake",
            description: "Thick and creamy, made with premium ice cream",
            price: 7.99,
          },
          {
            name: "Malt",
            description: "Classic milkshake with malted milk powder",
            price: 8.49,
          },
          {
            name: "Float",
            description: "Root beer, Coke, or Dr Pepper with vanilla ice cream",
            price: 6.99,
          },
        ],
      },
    ],
    description: "",
  },
  {
    title: "Bakery",
    category: [
      {
        name: "Fresh Baked Goods",
        items: [
          {
            name: "Cookies",
            description:
              "Chocolate chip, peanut butter, sugar or snickerdoodle",
            price: 2,
          },
          {
            name: "Caramel Apples",
            description:
              "Granny Smith apples dipped in caramel with various toppings",
            price: 7.99,
          },
          {
            name: "Cupcakes",
            description: "Daily selection of freshly baked cupcakes",
            price: 3,
          },
        ],
      },
    ],
    description: "",
  },
  {
    title: "Light Fare",
    category: [
      {
        name: "Sandwiches & Snacks",
        items: [
          {
            name: "Grilled Cheese",
            description: "American cheese on Texas toast",
            price: 6.99,
          },
          {
            name: "Hot Dog",
            description:
              "All-beef hot dog on a steamed bun with choice of toppings",
            price: 7.99,
          },
          {
            name: "Pretzel",
            description:
              "Fresh-baked soft pretzel with mustard or cheese sauce",
            price: 5.99,
          },
        ],
      },
      {
        name: "Beverages",
        items: [
          {
            name: "Classic Phosphate",
            description:
              "Old-fashioned flavored soda with a touch of phosphate",
            price: 4.99,
          },
          {
            name: "Hot Chocolate",
            description: "Made with real chocolate, topped with whipped cream",
            price: 4.99,
          },
          {
            name: "Iced Coffee",
            description: "Cold brewed coffee over ice with cream and syrup",
            price: 5.99,
          },
        ],
      },
    ],
    description: "",
  },
];
