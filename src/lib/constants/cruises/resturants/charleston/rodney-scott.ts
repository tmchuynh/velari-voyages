import { ResturantMenu } from "@/lib/types/types";

export const charlestonrodneyScottMenu: ResturantMenu[] = [
  {
    title: "Pit-Cooked BBQ",
    description:
      "Authentic South Carolina whole hog BBQ, slow-smoked over hickory wood",
    category: [
      {
        name: "Whole Hog BBQ",
        items: [
          {
            name: "Whole Hog Plate",
            description:
              "Pit-smoked whole hog pulled pork with Rodney's sauce, choice of two sides",
            price: 16.99,
          },
          {
            name: "Whole Hog Sandwich",
            description:
              "Pit-smoked pulled pork with Rodney's sauce on a potato bun",
            price: 10,
          },
          {
            name: "Combo Plate",
            description: "Choose any two meats with choice of two sides",
            price: 19.99,
          },
        ],
      },
      {
        name: "Other Meats",
        items: [
          {
            name: "Smoked Turkey",
            description: "Slow-smoked turkey breast with choice of two sides",
            price: 14.99,
          },
          {
            name: "Spare Ribs",
            description:
              "Half rack of dry-rubbed spare ribs with choice of two sides",
            price: 17.99,
          },
          {
            name: "BBQ Chicken",
            description:
              "Half chicken smoked and mopped with Rodney's sauce, with two sides",
            price: 15.99,
          },
        ],
      },
    ],
  },
  {
    title: "Sandwiches",
    description: "Served on fresh potato buns with Rodney's sauce",
    category: [
      {
        name: "Between Bread",
        items: [
          {
            name: "Pulled Pork Sandwich",
            description: "Classic whole hog BBQ on a potato bun with sauce",
            price: 10,
          },
          {
            name: "Smoked Turkey Sandwich",
            description: "Sliced turkey breast with sauce on a potato bun",
            price: 11,
          },
          {
            name: "Ribeye Sandwich",
            description:
              "Smoked ribeye with caramelized onions and pimento cheese on a potato roll",
            price: 15.99,
          },
          {
            name: "Pit-Smoked Chicken Sandwich",
            description:
              "Pulled smoked chicken with white sauce on a potato bun",
            price: 10,
          },
        ],
      },
    ],
  },
  {
    title: "Sides",
    description: "Classic Southern sides to complement your meal",
    category: [
      {
        name: "Southern Classics",
        items: [
          {
            name: "Hush Puppies",
            description: "Golden fried cornmeal fritters",
            price: 3.99,
          },
          {
            name: "Collard Greens",
            description: "Slow-cooked greens with smoked pork",
            price: 3.99,
          },
          {
            name: "Mac & Cheese",
            description: "Creamy Southern-style with sharp cheddar",
            price: 3.99,
          },
          {
            name: "Cole Slaw",
            description: "Creamy cabbage slaw with a hint of sweetness",
            price: 3.99,
          },
          {
            name: "Baked Beans",
            description: "Slow-cooked with brown sugar, molasses and pork",
            price: 3.99,
          },
          {
            name: "Potato Salad",
            description: "Classic Southern style with mayo and mustard",
            price: 3.99,
          },
          {
            name: "Banana Pudding",
            description: "Homemade pudding with vanilla wafers and bananas",
            price: 4.99,
          },
        ],
      },
    ],
  },
  {
    title: "Family Meals",
    description: "Perfect for sharing with family or friends",
    category: [
      {
        name: "Feeds 4-6",
        items: [
          {
            name: "Whole Hog Family Meal",
            description: "1 lb pulled pork, 2 pints of sides, 6 buns, sauce",
            price: 59.99,
          },
          {
            name: "Rib Family Meal",
            description: "2 racks of ribs, 2 pints of sides, sauce",
            price: 69.99,
          },
          {
            name: "Mixed Family Meal",
            description:
              "1/2 lb pulled pork, 1/2 rack ribs, 1/2 chicken, 3 pints of sides, sauce",
            price: 79.99,
          },
        ],
      },
    ],
  },
  {
    title: "Specials",
    description: "Weekly specials featuring seasonal ingredients",
    category: [
      {
        name: "Weekly Specials",
        items: [
          {
            name: "Smoked Prime Rib (Friday Only)",
            description: "12oz slow-smoked prime rib with au jus and two sides",
            price: 26,
          },
          {
            name: "Catfish Platter (Wednesday Only)",
            description: "Fried catfish with hush puppies and two sides",
            price: 16.99,
          },
          {
            name: "Rib Tips (Thursday Only)",
            description: "Smoked rib tips with sauce and two sides",
            price: 14.99,
          },
        ],
      },
    ],
  },
  {
    title: "Desserts",
    description: "Homemade Southern desserts to satisfy your sweet tooth",
    category: [
      {
        name: "Sweet Treats",
        items: [
          {
            name: "Banana Pudding",
            description: "Classic Southern banana pudding with Nilla wafers",
            price: 4.99,
          },
          {
            name: "Peach Cobbler",
            description: "Warm cobbler with South Carolina peaches (seasonal)",
            price: 5.99,
          },
          {
            name: "Chocolate Pie",
            description: "Old-fashioned chocolate custard pie",
            price: 5.49,
          },
        ],
      },
    ],
  },
  {
    title: "Drinks",
    description: "Refreshing beverages to complement your meal",
    category: [
      {
        name: "Beverages",
        items: [
          {
            name: "Sweet Tea",
            description: "Southern-style sweet iced tea",
            price: 2.99,
          },
          {
            name: "Lemonade",
            description: "Fresh-squeezed lemonade",
            price: 2.99,
          },
          {
            name: "Soft Drinks",
            description: "Coca-Cola products",
            price: 2.49,
          },
          {
            name: "Local Craft Beer",
            description: "Rotating selection of local brews",
            price: 5.99,
          },
        ],
      },
    ],
  },
];
