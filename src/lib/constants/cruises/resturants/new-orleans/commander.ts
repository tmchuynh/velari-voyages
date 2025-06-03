import { ResturantMenu } from "@/lib/types/types";

export const newOrleanscommanderMenu: ResturantMenu[] = [
  {
    title: "Starters",
    description:
      "Classic Commander's Palace appetizers blending Creole traditions with modern refinement",
    category: [
      {
        name: "Soups & Salads",
        items: [
          {
            name: "Turtle Soup",
            description:
              "A Commander's classic finished tableside with a splash of aged sherry",
            price: 14,
            isGlutenFree: false,
          },
          {
            name: "Gumbo du Jour",
            description:
              "Rich, roux-based New Orleans gumbo with seasonal ingredients",
            price: 12,
            isGlutenFree: false,
          },
          {
            name: "Commander's Salad",
            description:
              "Hearts of romaine, Parmesan, pressed egg, bacon, and Romano dressing with warm garlic croutons",
            price: 11,
            isGlutenFree: false,
          },
          {
            name: "Creole Seafood Gumbo",
            description:
              "A rich seafood gumbo with Gulf shrimp, oysters and crabmeat",
            price: 13,
            isGlutenFree: false,
          },
        ],
      },
      {
        name: "Appetizers",
        items: [
          {
            name: "Shrimp & Tasso Henican",
            description:
              "Wild Louisiana white shrimp with tasso ham, pickled okra, sweet onions, pepper jelly and Crystal hot sauce beurre blanc",
            price: 16,
            isGlutenFree: true,
          },
          {
            name: "Oysters & Absinthe Dome",
            description:
              "Plump Gulf oysters poached with bacon, artichokes, tarragon, and Herbsaint in a flaky pastry dome",
            price: 18,
            isGlutenFree: false,
          },
          {
            name: "Foie Gras du Monde",
            description:
              "Hudson Valley foie gras with seasonal accompaniments and toast points",
            price: 24,
            isGlutenFree: false,
          },
        ],
      },
    ],
  },
  {
    title: "Entrées",
    description:
      "Refined main courses reflecting the best of New Orleans culinary traditions",
    category: [
      {
        name: "Seafood",
        items: [
          {
            name: "Pecan Crusted Gulf Fish",
            description:
              "A Commander's Palace classic with crushed corn cream, spiced pecans, petite herbs & Prosecco poached Louisiana blue crab",
            price: 39,
            isGlutenFree: false,
          },
          {
            name: "Blackened Gulf Fish",
            description:
              "Creole seasoned fish with roasted mushrooms, melted leeks and Worcestershire butter sauce",
            price: 38,
            isGlutenFree: true,
          },
          {
            name: "Wild Louisiana Shrimp & Cognac",
            description:
              "Jumbo Gulf shrimp flambéed tableside in a Cognac butter sauce, served with jasmine rice",
            price: 42,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Meat & Poultry",
        items: [
          {
            name: "Creole Bread Pudding Soufflé",
            description:
              "All the richness of Creole bread pudding whipped into a light soufflé, finished with warm whiskey cream",
            price: 12,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Filet Mignon",
            description:
              "Black Angus tenderloin with whipped potatoes, seasonal vegetables, and Marchand de Vin sauce",
            price: 48,
            isGlutenFree: true,
          },
          {
            name: "Tournedos of Black Angus Beef",
            description:
              "Coffee and spice crusted beef tournedos with whiskey smoked onions, mushrooms, and Béarnaise",
            price: 46,
            isGlutenFree: true,
          },
          {
            name: "Creole Spiced Quail",
            description:
              "Chargrilled quail stuffed with boudin over fire-roasted chilis and a Southern-style dirty rice with blackberry jus",
            price: 40,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Desserts",
    description:
      "Legendary sweet finishes from Commander's Palace's acclaimed pastry kitchen",
    category: [
      {
        name: "Classic Desserts",
        items: [
          {
            name: "Creole Bread Pudding Soufflé",
            description:
              "All the richness of Creole bread pudding whipped into a light soufflé, finished with warm whiskey cream",
            price: 12,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Commander's Creole Cream Cheese Cheesecake",
            description:
              "Local Creole cream cheese cheesecake with a honey graham crust and seasonal berry coulis",
            price: 11,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Pecan Pie à la Mode",
            description:
              "Southern-style pecan pie with hand-churned vanilla bean ice cream",
            price: 10,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Bananas Foster",
            description:
              "The original New Orleans tableside flambé dessert with vanilla bean ice cream",
            price: 12,
            isVegetarian: true,
            isGlutenFree: false,
          },
        ],
      },
    ],
  },
  {
    title: "Cocktails",
    description:
      "Signature and classic libations to elevate your Commander's dining experience",
    category: [
      {
        name: "Signature Cocktails",
        items: [
          {
            name: "Commander's Classic Bloody Mary",
            description:
              "Our award-winning house-made Bloody Mary mix with a splash of vodka",
            price: 12,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Afternoon Storm",
            description:
              "Dark rum, passion fruit, lime and ginger topped with a splash of Gosling's Black Seal rum",
            price: 14,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "The Saint 75",
            description:
              "A Commander's twist on the French 75, with gin, St. Germain, lemon and sparkling wine",
            price: 13,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Classic Sazerac",
            description:
              "The official cocktail of New Orleans: rye whiskey, Peychaud's bitters, sugar, and herbsaint",
            price: 14,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
];
