import { ResturantMenu } from "@/lib/types/types";

export const montrealschwartzMenu: ResturantMenu[] = [
  {
    title: "Classics",
    description:
      "Schwartz's world-famous smoked meat and traditional deli offerings since 1928",
    category: [
      {
        name: "Smoked Meat",
        items: [
          {
            name: "Smoked Meat Sandwich",
            description:
              "Classic Montreal smoked meat on rye bread with mustard",
            price: 11,
            isGlutenFree: false,
          },
          {
            name: "Smoked Meat Plate",
            description:
              "Generous portion of smoked meat served with rye bread and mustard",
            price: 18,
            isGlutenFree: false,
          },
          {
            name: "Fat, Medium or Lean",
            description: "Your choice of fat content in any smoked meat order",
            price: 0,
            isGlutenFree: false,
          },
        ],
      },
      {
        name: "Other Sandwiches",
        items: [
          {
            name: "Turkey Sandwich",
            description: "Sliced turkey on rye bread",
            price: 9,
            isGlutenFree: false,
          },
          {
            name: "Salami Sandwich",
            description: "All-beef salami on rye bread",
            price: 8,
            isGlutenFree: false,
          },
          {
            name: "Club Roll",
            description: "Bologna, salami and smoked meat on a roll",
            price: 10,
            isGlutenFree: false,
          },
        ],
      },
    ],
  },
  {
    title: "Sides",
    description: "Traditional accompaniments to complement your smoked meat",
    category: [
      {
        name: "Popular Sides",
        items: [
          {
            name: "French Fries",
            description: "Classic crispy fries",
            price: 4.25,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Coleslaw",
            description: "Homemade traditional deli coleslaw",
            price: 3,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Pickle",
            description: "Sour dill pickle",
            price: 2.5,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Karnatzel",
            description: "Dry smoked beef sausage",
            price: 3.25,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Platters",
    description: "Hearty meals and combination plates",
    category: [
      {
        name: "Combo Plates",
        items: [
          {
            name: "The Special",
            description:
              "Smoked meat sandwich with coleslaw, fries and a pickle",
            price: 18,
            isGlutenFree: false,
          },
          {
            name: "Smoked Meat & Liver",
            description: "Combination platter with smoked meat and beef liver",
            price: 21,
            isGlutenFree: true,
          },
          {
            name: "Hot Dog Special",
            description: "Two all-beef hot dogs with fries and coleslaw",
            price: 15,
            isGlutenFree: false,
          },
        ],
      },
    ],
  },
  {
    title: "Desserts",
    description: "Sweet finishes to a traditional Montreal deli meal",
    category: [
      {
        name: "Sweet Treats",
        items: [
          {
            name: "Cheesecake",
            description: "New York style cheesecake",
            price: 6,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Apple Strudel",
            description: "Traditional apple strudel with cinnamon",
            price: 5,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Chocolate Cake",
            description: "Rich chocolate layer cake",
            price: 6.5,
            isVegetarian: true,
            isGlutenFree: false,
          },
        ],
      },
    ],
  },
  {
    title: "Beverages",
    description: "Classic drinks to wash down your Montreal smoked meat",
    category: [
      {
        name: "Drinks",
        items: [
          {
            name: "Black Cherry Soda",
            description: "Traditional deli black cherry soda",
            price: 3.25,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Cott Cola",
            description: "Classic local cola",
            price: 3.25,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Cream Soda",
            description: "Sweet vanilla cream soda",
            price: 3.25,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
];
