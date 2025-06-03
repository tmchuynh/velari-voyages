import { ResturantMenu } from "@/lib/types/types";

export const charlestonberthaMenu: ResturantMenu[] = [
  // Food Menu
  {
    title: "Food Menu",
    description:
      "Authentic Lowcountry soul food with family recipes passed down through generations",
    category: [
      {
        name: "Appetizers",
        items: [
          {
            name: "Fried Green Tomatoes",
            description:
              "Crispy cornmeal-crusted green tomatoes with remoulade sauce",
            price: 10,
            isVegetarian: true,
          },
          {
            name: "Pimento Cheese Dip",
            description: "House-made pimento cheese with crostini and celery",
            price: 8,
            isVegetarian: true,
          },
          {
            name: "Gullah Rice Fritters",
            description: "Crispy rice fritters with local vegetables and herbs",
            price: 9,
            isVegetarian: true,
          },
          {
            name: "Deviled Crab Dip",
            description:
              "Creamy blue crab dip with Old Bay seasoning and crackers",
            price: 14,
          },
        ],
      },
      {
        name: "Soups",
        items: [
          {
            name: "Okra Soup",
            description:
              "Traditional Gullah soup with okra, tomatoes, and smoked ham",
            price: 8,
          },
          {
            name: "She-Crab Soup",
            description: "Rich and creamy crab soup with a touch of sherry",
            price: 10,
          },
          {
            name: "Chicken & Sausage Gumbo",
            description:
              "Hearty gumbo with chicken, sausage, and the holy trinity",
            price: 9,
          },
        ],
      },
      {
        name: "Salads",
        items: [
          {
            name: "Cucumber & Tomato Salad",
            description:
              "Fresh cucumber and tomato with red onion and apple cider vinaigrette",
            price: 7,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Coleslaw",
            description: "Homemade slaw with creamy dressing and celery seed",
            price: 6,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Main Courses",
        items: [
          {
            name: "Fried Chicken",
            description:
              "Bertha's famous crispy fried chicken with a secret spice blend",
            price: 16,
          },
          {
            name: "Smothered Pork Chops",
            description: "Slow-cooked pork chops with onion gravy",
            price: 18,
          },
          {
            name: "Shrimp & Grits",
            description:
              "Charleston classic with local shrimp and creamy stone-ground grits",
            price: 19,
            isGlutenFree: true,
          },
          {
            name: "Fried Whiting",
            description: "Cornmeal-crusted whiting fish with tartar sauce",
            price: 16,
          },
          {
            name: "Oxtails",
            description: "Slow-braised oxtails in rich gravy with rice",
            price: 20,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Sides",
        items: [
          {
            name: "Red Rice",
            description:
              "Traditional Gullah rice with tomatoes, bacon, and spices",
            price: 5,
          },
          {
            name: "Collard Greens",
            description: "Slow-simmered greens with smoked turkey",
            price: 5,
            isGlutenFree: true,
          },
          {
            name: "Mac & Cheese",
            description:
              "Baked macaroni with sharp cheddar and breadcrumb topping",
            price: 5,
            isVegetarian: true,
          },
          {
            name: "Lima Beans",
            description: "Stewed lima beans with ham hock",
            price: 5,
            isGlutenFree: true,
          },
          {
            name: "Cornbread",
            description: "Sweet and savory cornbread with honey butter",
            price: 4,
            isVegetarian: true,
          },
        ],
      },
    ],
  },

  // Dessert Menu
  {
    title: "Dessert Menu",
    description: "Southern sweet traditions made from scratch daily",
    category: [
      {
        name: "Cake and Pastries",
        items: [
          {
            name: "Sweet Potato Pie",
            description: "Classic Southern pie with cinnamon and nutmeg",
            price: 7,
            isVegetarian: true,
          },
          {
            name: "Peach Cobbler",
            description:
              "Warm peach cobbler with flaky crust and vanilla ice cream",
            price: 8,
            isVegetarian: true,
          },
        ],
      },
      {
        name: "Ice Cream",
        items: [
          {
            name: "Bourbon Pecan Ice Cream",
            description:
              "Creamy vanilla ice cream with bourbon and candied pecans",
            price: 6,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Sweet Cream Sherbet",
            description: "Light and refreshing homemade sherbet",
            price: 5,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Custards and Puddings",
        items: [
          {
            name: "Banana Pudding",
            description:
              "Southern classic with vanilla wafers and whipped cream",
            price: 7,
            isVegetarian: true,
          },
          {
            name: "Bread Pudding",
            description: "Warm bread pudding with bourbon sauce",
            price: 8,
            isVegetarian: true,
          },
        ],
      },
      {
        name: "Specialty Desserts",
        items: [
          {
            name: "Red Velvet Cake",
            description: "Southern classic with cream cheese frosting",
            price: 8,
            isVegetarian: true,
          },
          {
            name: "Hummingbird Cake",
            description:
              "Traditional Southern cake with banana, pineapple, and pecans",
            price: 8,
            isVegetarian: true,
          },
        ],
      },
    ],
  },

  // Alcohol Menu
  {
    title: "Beverage Menu",
    description: "Southern-inspired drinks and classic refreshments",
    category: [
      {
        name: "Wines",
        items: [
          {
            name: "House White",
            description: "Crisp, medium-bodied white wine",
            price: 7,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "House Red",
            description: "Smooth, easy-drinking red wine",
            price: 7,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Sparkling Wine",
            description: "Bright and bubbly for celebrations",
            price: 8,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Beers",
        items: [
          {
            name: "Palmetto Amber",
            description: "Local Charleston amber ale",
            price: 6,
            isVegan: true,
          },
          {
            name: "Holy City Pilsner",
            description: "Refreshing pilsner from Holy City Brewing",
            price: 6,
            isVegan: true,
          },
          {
            name: "Domestic Bottled Beer",
            description: "Selection of classic American beers",
            price: 4,
            isVegan: true,
          },
        ],
      },
      {
        name: "Spirits/Liquors",
        items: [
          {
            name: "Bourbon",
            description: "Selection of Kentucky and Southern bourbons",
            price: 9,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Vodka",
            description: "Premium vodka for cocktails",
            price: 8,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Rum",
            description: "Dark and white rum options",
            price: 8,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Cocktails",
        items: [
          {
            name: "Bertha's Sweet Tea",
            description: "Sweet tea with bourbon and fresh lemon",
            price: 10,
            isGlutenFree: true,
          },
          {
            name: "Lowcountry Lemonade",
            description: "Fresh lemonade with vodka and mint",
            price: 9,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Carolina Mule",
            description: "Vodka, ginger beer, and lime with a peach twist",
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
            name: "Bertha's Famous Sweet Tea",
            description: "House-brewed Southern sweet tea (non-alcoholic)",
            price: 3,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Fresh-Squeezed Lemonade",
            description: "Classic Southern refreshment (non-alcoholic)",
            price: 3,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Arnold Palmer",
            description: "Half sweet tea, half lemonade (non-alcoholic)",
            price: 4,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
];
