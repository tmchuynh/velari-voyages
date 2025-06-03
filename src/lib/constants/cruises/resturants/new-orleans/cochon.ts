import { ResturantMenu } from "@/lib/types/types";

export const newOrleanscochonMenu: ResturantMenu[] = [
  {
    title: "Starters",
    description:
      "Southern-inspired small plates showcasing Louisiana ingredients and traditions",
    category: [
      {
        name: "Small Plates",
        items: [
          {
            name: "Wood-Fired Oysters",
            description: "Roasted oysters with chili garlic butter",
            price: 18,
            isGlutenFree: true,
          },
          {
            name: "Fried Alligator with Chili Garlic Mayonnaise",
            description: "Crispy fried alligator meat with spicy aioli",
            price: 16,
            isGlutenFree: false,
          },
          {
            name: "Smoked Pork Ribs with Watermelon Pickle",
            description:
              "House-smoked ribs with sweet and tangy watermelon pickle",
            price: 18,
            isGlutenFree: true,
          },
          {
            name: "Boucherie Plate",
            description:
              "Selection of house-made cured meats and accompaniments",
            price: 24,
            isGlutenFree: false,
          },
        ],
      },
      {
        name: "Salads & Soups",
        items: [
          {
            name: "Louisiana Shrimp & Deviled Egg Salad",
            description:
              "Gulf shrimp, spicy deviled eggs, fresh herbs and greens",
            price: 16,
            isGlutenFree: true,
          },
          {
            name: "Cucumber & Tomato Salad",
            description:
              "Fresh local tomatoes, cucumbers, herbs, and buttermilk dressing",
            price: 14,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Oyster & Bacon Sandwich",
            description: "Fried oysters with house-cured bacon on white bread",
            price: 15,
            isGlutenFree: false,
          },
        ],
      },
    ],
  },
  {
    title: "Mains",
    description:
      "Hearty dishes celebrating the rich culinary heritage of Louisiana and the American South",
    category: [
      {
        name: "Signatures",
        items: [
          {
            name: "Louisiana Cochon with Turnips, Cabbage & Cracklins",
            description:
              "Slow-roasted pork with seasonal vegetables and crispy skin",
            price: 29,
            isGlutenFree: true,
          },
          {
            name: "Rabbit & Dumplings",
            description:
              "Braised rabbit with house-made dumplings in rich gravy",
            price: 28,
            isGlutenFree: false,
          },
          {
            name: "Smoked Beef Brisket with Sweet Potato Hash",
            description:
              "18-hour smoked beef brisket with sweet potato and pepper hash",
            price: 32,
            isGlutenFree: true,
          },
          {
            name: "Grilled Pork Chop with Black Eyed Peas & Ham Hock",
            description: "Heritage pork with slow-cooked black eyed peas",
            price: 34,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "From the Gulf",
        items: [
          {
            name: "Wood-Fired Gulf Fish with Peas and Corn",
            description:
              "Fresh catch grilled over wood with seasonal vegetables",
            price: 36,
            isGlutenFree: true,
          },
          {
            name: "Shrimp & Grits",
            description:
              "Gulf shrimp over stone-ground grits with tasso and herbs",
            price: 28,
            isGlutenFree: true,
          },
          {
            name: "Catfish Courtbouillon",
            description: "Spicy Cajun stew with local catfish and vegetables",
            price: 26,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Sides",
    description: "Southern accompaniments to complement your meal",
    category: [
      {
        name: "Shareable",
        items: [
          {
            name: "Macaroni & Cheese Casserole",
            description: "Baked mac and cheese with crispy breadcrumb topping",
            price: 12,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Collard Greens",
            description: "Slow-cooked with house-cured bacon",
            price: 10,
            isGlutenFree: true,
          },
          {
            name: "Stone Ground Grits",
            description: "Creamy hominy grits with butter and herbs",
            price: 9,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Corn on the Cob with Spiced Butter",
            description: "Grilled sweet corn with cayenne butter",
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
    description: "Southern sweets with a creative twist",
    category: [
      {
        name: "Sweet Finishes",
        items: [
          {
            name: "Chocolate & Chicory Pudding",
            description: "Rich chocolate pudding infused with chicory coffee",
            price: 12,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Peach Hand Pie",
            description:
              "Flaky pastry filled with spiced local peaches, served with buttermilk ice cream",
            price: 11,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Bacon Praline",
            description: "Sweet pecan praline with house-cured bacon bits",
            price: 10,
            isGlutenFree: true,
          },
          {
            name: "Blueberry Buckle",
            description:
              "Warm blueberry cake with streusel topping and lemon ice cream",
            price: 12,
            isVegetarian: true,
            isGlutenFree: false,
          },
        ],
      },
    ],
  },
];
