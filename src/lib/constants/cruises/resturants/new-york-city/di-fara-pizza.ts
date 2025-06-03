import { ResturantMenu } from "@/lib/types/types";

export const newYorkCitydiFaraPizzaMenu: ResturantMenu[] = [
  {
    title: "Pizzas",
    description:
      "Hand-crafted pizzas made with imported Italian ingredients by Dom DeMarco since 1965",
    category: [
      {
        name: "Classic Pizzas",
        items: [
          {
            name: "Regular Cheese Pizza",
            description:
              "Thin-crust pie with San Marzano tomato sauce, mozzarella, Grana Padano, and fresh basil",
            price: 5,
            isVegetarian: true,
          },
          {
            name: "Square Cheese Pizza",
            description:
              "Sicilian-style thick crust with San Marzano tomato sauce, mozzarella, Grana Padano, and fresh basil",
            price: 6,
            isVegetarian: true,
          },
          {
            name: "Regular Pepperoni Pizza",
            description:
              "Thin-crust pie with San Marzano tomato sauce, mozzarella, Grana Padano, fresh basil, and imported pepperoni",
            price: 6,
          },
          {
            name: "Square Pepperoni Pizza",
            description:
              "Sicilian-style thick crust with San Marzano tomato sauce, mozzarella, Grana Padano, fresh basil, and imported pepperoni",
            price: 7,
          },
        ],
      },
      {
        name: "Specialty Pizzas",
        items: [
          {
            name: "Regular Special",
            description:
              "Thin-crust pie with San Marzano tomato sauce, mozzarella, Grana Padano, fresh basil, sausage, peppers, mushrooms, and onions",
            price: 8,
          },
          {
            name: "Square Special",
            description:
              "Sicilian-style thick crust with San Marzano tomato sauce, mozzarella, Grana Padano, fresh basil, sausage, peppers, mushrooms, and onions",
            price: 9,
          },
          {
            name: "White Pie",
            description:
              "No sauce, topped with mozzarella, ricotta, Grana Padano, garlic, and fresh basil",
            price: 7,
            isVegetarian: true,
          },
        ],
      },
    ],
  },
  {
    title: "By the Slice",
    description: "Famous Di Fara slices cut from freshly made pies",
    category: [
      {
        name: "Slices",
        items: [
          {
            name: "Regular Cheese Slice",
            description:
              "Thin-crust slice with San Marzano tomato sauce, mozzarella, Grana Padano, and fresh basil",
            price: 5,
            isVegetarian: true,
          },
          {
            name: "Square Cheese Slice",
            description:
              "Sicilian-style thick crust slice with San Marzano tomato sauce, mozzarella, Grana Padano, and fresh basil",
            price: 6,
            isVegetarian: true,
          },
          {
            name: "Regular Special Slice",
            description:
              "Thin-crust slice with San Marzano tomato sauce, mozzarella, Grana Padano, fresh basil, sausage, peppers, mushrooms, and onions",
            price: 6.5,
          },
          {
            name: "Square Special Slice",
            description:
              "Sicilian-style thick crust slice with San Marzano tomato sauce, mozzarella, Grana Padano, fresh basil, sausage, peppers, mushrooms, and onions",
            price: 7.5,
          },
        ],
      },
    ],
  },
  {
    title: "Beverages",
    description: "Drinks to complement your pizza",
    category: [
      {
        name: "Drinks",
        items: [
          {
            name: "Bottled Soda",
            description: "Assorted sodas including Coke, Diet Coke, and Sprite",
            price: 2,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Bottled Water",
            description: "Still bottled water",
            price: 1.5,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Italian Soda",
            description: "San Pellegrino flavored sodas",
            price: 2.5,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
];
