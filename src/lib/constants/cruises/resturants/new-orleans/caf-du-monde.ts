import { ResturantMenu } from "@/lib/types/types";

export const newOrleanscafDuMondeMenu: ResturantMenu[] = [
  {
    title: "Beignets",
    description:
      "World-famous square French-style doughnuts, served hot and covered with powdered sugar",
    category: [
      {
        name: "New Orleans Classic",
        items: [
          {
            name: "Beignets (Order of 3)",
            description:
              "Three hot French-style square doughnuts covered with powdered sugar",
            price: 3.75,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Single Beignet",
            description:
              "One hot French-style square doughnut covered with powdered sugar",
            price: 1.35,
            isVegetarian: true,
            isGlutenFree: false,
          },
        ],
      },
    ],
  },
  {
    title: "Coffee",
    description: "Traditional New Orleans coffee with chicory",
    category: [
      {
        name: "Hot Coffee",
        items: [
          {
            name: "Café au Lait",
            description: "Half coffee with chicory and half hot milk",
            price: 3.5,
            isVegetarian: true,
            isVegan: false,
            isGlutenFree: true,
          },
          {
            name: "Black Coffee",
            description: "Dark roasted coffee with chicory",
            price: 3,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Cold Coffee",
        items: [
          {
            name: "Iced Café au Lait",
            description: "Half coffee with chicory and half milk over ice",
            price: 3.75,
            isVegetarian: true,
            isVegan: false,
            isGlutenFree: true,
          },
          {
            name: "Iced Coffee",
            description: "Cold coffee with chicory over ice",
            price: 3.25,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Other Beverages",
    description: "Additional drink options to complement your beignets",
    category: [
      {
        name: "Non-Coffee Drinks",
        items: [
          {
            name: "Hot Chocolate",
            description: "Rich and creamy hot chocolate",
            price: 3.5,
            isVegetarian: true,
            isVegan: false,
            isGlutenFree: true,
          },
          {
            name: "Milk",
            description: "Cold milk",
            price: 2.5,
            isVegetarian: true,
            isVegan: false,
            isGlutenFree: true,
          },
          {
            name: "Orange Juice",
            description: "Fresh orange juice",
            price: 3,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Bottled Water",
            description: "Purified bottled water",
            price: 2,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Soft Drinks",
            description: "Assorted soft drinks",
            price: 2.5,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Take Home Items",
    description: "Café du Monde products to enjoy at home",
    category: [
      {
        name: "Souvenirs",
        items: [
          {
            name: "Coffee & Chicory",
            description: "Signature coffee blend with chicory (16 oz can)",
            price: 9,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Beignet Mix",
            description: "Make authentic beignets at home (28 oz box)",
            price: 4,
            isVegetarian: true,
            isGlutenFree: false,
          },
        ],
      },
    ],
  },
];
