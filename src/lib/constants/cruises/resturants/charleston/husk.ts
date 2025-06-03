import { ResturantMenu } from "@/lib/types/types";

export const charlestonhuskMenu: ResturantMenu[] = [
  {
    title: "First Courses",
    description:
      "Southern-inspired starters featuring local, seasonal ingredients",
    category: [
      {
        name: "Starters",
        items: [
          {
            name: "Wood-Fired Oysters",
            description:
              "Roasted garlic butter, preserved lemon, Espelette pepper",
            price: 17,
            isGlutenFree: true,
          },
          {
            name: "Cornmeal Fried Catfish",
            description:
              "Carolina Gold rice grits, smoked tomato broth, pickled shrimp",
            price: 15,
            isGlutenFree: false,
          },
          {
            name: "Southern Vegetable Plate",
            description:
              "Seasonal vegetables from local farms, herb vinaigrette",
            price: 14,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "House Charcuterie",
            description:
              "Selection of house-cured meats, pickles, mustard, grilled bread",
            price: 21,
            isGlutenFree: false,
          },
          {
            name: "Crispy Pig Ears",
            description: "Marinated cucumber, cilantro, lime, chili",
            price: 13,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Salads & Soups",
    description:
      "Fresh, seasonal produce showcasing the best of Charleston's local farms",
    category: [
      {
        name: "From the Garden",
        items: [
          {
            name: "Heirloom Tomato Salad",
            description:
              "Local tomatoes, housemade ricotta, basil, aged balsamic, olive oil",
            price: 15,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Field Pea & Ham Hock Soup",
            description:
              "Cornbread croutons, preserved okra, smoked buttermilk",
            price: 13,
            isGlutenFree: false,
          },
          {
            name: "Local Lettuces",
            description:
              "Buttermilk dressing, radish, cornbread crumble, herbs",
            price: 12,
            isVegetarian: true,
            isGlutenFree: false,
          },
        ],
      },
    ],
  },
  {
    title: "Main Courses",
    description:
      "Reimagined Southern classics using heirloom ingredients and modern techniques",
    category: [
      {
        name: "From the Land",
        items: [
          {
            name: "Heritage Pork",
            description:
              "Anson Mills grits, roasted mushrooms, charred onion jus",
            price: 34,
            isGlutenFree: true,
          },
          {
            name: "Cornmeal Dusted Catfish",
            description: "Hoppin' John, tomato gravy, pickled vegetables",
            price: 29,
            isGlutenFree: false,
          },
          {
            name: "Wood Fired Chicken",
            description:
              "Carolina Gold rice pilaf, preserved vegetables, chicken jus",
            price: 32,
            isGlutenFree: true,
          },
          {
            name: "Grass-Fed Beef",
            description:
              "Smoked mushrooms, fingerling potatoes, charred onion soubise",
            price: 42,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "From the Water",
        items: [
          {
            name: "Shrimp & Grits",
            description:
              "Anson Mills heirloom grits, country ham, mushrooms, shellfish broth",
            price: 31,
            isGlutenFree: true,
          },
          {
            name: "Carolina Grouper",
            description:
              "Roasted fennel, heirloom beans, preserved lemon, herb broth",
            price: 36,
            isGlutenFree: true,
          },
          {
            name: "Wood Roasted Snapper",
            description: "Creamed corn, field peas, bacon, tomato broth",
            price: 38,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "From the Garden",
        items: [
          {
            name: "Seasonal Vegetable Plate",
            description:
              "Assortment of local vegetables prepared in various ways",
            price: 26,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Wild Mushroom Farrotto",
            description:
              "Anson Mills farro, roasted mushrooms, aged cheese, herbs",
            price: 28,
            isVegetarian: true,
            isGlutenFree: false,
          },
        ],
      },
    ],
  },
  {
    title: "Sides",
    description: "Southern side dishes with a nod to tradition and innovation",
    category: [
      {
        name: "For the Table",
        items: [
          {
            name: "Anson Mills Grits",
            description: "Heirloom corn grits with aged cheddar",
            price: 9,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Wood-Roasted Mushrooms",
            description: "Seasonal wild mushrooms with herbs and garlic",
            price: 11,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Charred Broccoli",
            description: "Benne seed, garlic, chili flakes",
            price: 10,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Carolina Gold Rice",
            description: "Traditional Charleston rice with butter and herbs",
            price: 8,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Desserts",
    description:
      "Southern desserts with seasonal local fruits and artisanal ingredients",
    category: [
      {
        name: "Sweet Finishes",
        items: [
          {
            name: "Buttermilk Pie",
            description: "Seasonal berries, lemon curd, vanilla crème fraîche",
            price: 12,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Chocolate Chess Pie",
            description: "Coffee crémeux, salted caramel, bourbon ice cream",
            price: 13,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Strawberry Shortcake",
            description:
              "Cornmeal biscuit, Clemson strawberries, buttermilk ice cream",
            price: 12,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Carolina Gold Rice Pudding",
            description:
              "Seasonal fruit compote, Charleston honey, crispy rice",
            price: 11,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
];
