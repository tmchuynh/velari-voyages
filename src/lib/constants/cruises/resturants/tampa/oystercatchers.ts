import { ResturantMenu } from "@/lib/types/types";

export const tampaoystercatchersMenu: ResturantMenu[] = [
  {
    title: "Raw Bar",
    category: [
      {
        name: "Fresh Seafood",
        items: [
          {
            name: "Oysters on the Half Shell",
            description: "Half dozen East or West Coast oysters, mignonette, cocktail sauce, lemon",
            price: 21,
            isGlutenFree: true
          },
          {
            name: "Chilled Seafood Tower",
            description: "Maine lobster, jumbo shrimp, oysters, king crab legs, ceviche (serves 2-4)",
            price: 115,
            isGlutenFree: true
          },
          {
            name: "Colossal Shrimp Cocktail",
            description: "Five jumbo Gulf shrimp, house cocktail sauce, lemon",
            price: 24,
            isGlutenFree: true
          },
          {
            name: "Tuna Poke",
            description: "Ahi tuna, avocado, wakame seaweed, ponzu, wonton chips",
            price: 19,
            isGlutenFree: false
          }
        ]
      }
    ],
    description: "Fresh selections from our raw bar, featuring the finest local and seasonal seafood"
  },
  {
    title: "Starters",
    category: [
      {
        name: "Appetizers",
        items: [
          {
            name: "Jumbo Lump Crab Cake",
            description: "Creole mustard sauce, microgreens, lemon",
            price: 18,
            isGlutenFree: false
          },
          {
            name: "Calamari",
            description: "Flash-fried with charred tomato sauce, lemon aioli",
            price: 16,
            isGlutenFree: false
          },
          {
            name: "Coconut Shrimp",
            description: "Coconut breaded Gulf shrimp, pineapple mango salsa, Thai chili sauce",
            price: 17,
            isGlutenFree: false
          },
          {
            name: "PEI Mussels",
            description: "White wine garlic broth, tomato, herbs, grilled bread",
            price: 18,
            isGlutenFree: false
          }
        ]
      },
      {
        name: "Soups & Salads",
        items: [
          {
            name: "Tampa Bay Seafood Chowder",
            description: "Shrimp, fresh fish, clams, potatoes, corn, bacon",
            price: 12,
            isGlutenFree: true
          },
          {
            name: "Classic Caesar",
            description: "Romaine hearts, house-made dressing, parmesan, croutons, white anchovies",
            price: 13,
            isGlutenFree: false
          },
          {
            name: "Waterfront Salad",
            description: "Mixed greens, vine-ripe tomatoes, cucumber, carrots, hearts of palm, citrus vinaigrette",
            price: 14,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true
          }
        ]
      }
    ],
    description: "Begin your culinary journey with our flavorful starters"
  },
  {
    title: "Fresh Catch",
    category: [
      {
        name: "Today's Selection",
        items: [
          {
            name: "Grouper",
            description: "Locally caught, prepared grilled, blackened, or pan-seared",
            price: 42,
            isGlutenFree: true
          },
          {
            name: "Snapper",
            description: "Gulf red snapper, prepared grilled, blackened, or pan-seared",
            price: 39,
            isGlutenFree: true
          },
          {
            name: "Mahi Mahi",
            description: "Atlantic mahi, prepared grilled, blackened, or pan-seared",
            price: 34,
            isGlutenFree: true
          },
          {
            name: "Scottish Salmon",
            description: "Sustainably raised, prepared grilled, blackened, or pan-seared",
            price: 36,
            isGlutenFree: true
          }
        ]
      }
    ],
    description: "Fresh catch selections prepared your way, served with seasonal vegetables and choice of side"
  },
  {
    title: "Signature Entrées",
    category: [
      {
        name: "Seafood Specialties",
        items: [
          {
            name: "Cioppino",
            description: "Gulf shrimp, scallops, mussels, fresh catch, tomato-fennel broth, grilled bread",
            price: 41,
            isGlutenFree: false
          },
          {
            name: "Jumbo Scallops",
            description: "Pan-seared scallops, sweet corn risotto, asparagus, lemon butter",
            price: 38,
            isGlutenFree: true
          },
          {
            name: "Florida Lobster Tail",
            description: "Broiled Caribbean lobster tail, drawn butter, asparagus, fingerling potatoes",
            price: 58,
            isGlutenFree: true
          },
          {
            name: "Pan-Roasted Grouper",
            description: "Gulf black grouper, lump crab, citrus beurre blanc, spinach, jasmine rice",
            price: 44,
            isGlutenFree: true
          }
        ]
      },
      {
        name: "Land Fare",
        items: [
          {
            name: "Filet Mignon",
            description: "8oz center-cut filet, roasted garlic mashed potatoes, grilled asparagus, cabernet reduction",
            price: 48,
            isGlutenFree: true
          },
          {
            name: "Surf & Turf",
            description: "6oz filet mignon, Caribbean lobster tail, drawn butter, mashed potatoes",
            price: 65,
            isGlutenFree: true
          },
          {
            name: "Free-Range Chicken",
            description: "Herb-roasted half chicken, whipped potatoes, seasonal vegetables, natural jus",
            price: 32,
            isGlutenFree: true
          }
        ]
      }
    ],
    description: "Chef's signature creations featuring the finest seafood and premium meats"
  },
  {
    title: "Sides",
    category: [
      {
        name: "Accompaniments",
        items: [
          {
            name: "Truffle Parmesan Fries",
            description: "Hand-cut fries, truffle oil, parmesan, herbs",
            price: 9,
            isVegetarian: true,
            isGlutenFree: true
          },
          {
            name: "Grilled Asparagus",
            description: "With lemon and olive oil",
            price: 10,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true
          },
          {
            name: "Sweet Corn Risotto",
            description: "Creamy Arborio rice, sweet corn, parmesan",
            price: 11,
            isVegetarian: true,
            isGlutenFree: true
          },
          {
            name: "Sautéed Wild Mushrooms",
            description: "Seasonal mushrooms, garlic, herbs",
            price: 12,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true
          },
          {
            name: "Lobster Mac & Cheese",
            description: "Maine lobster, three-cheese blend, breadcrumbs",
            price: 18,
            isGlutenFree: false
          }
        ]
      }
    ],
    description: "Enhance your meal with these delectable sides"
  },
  {
    title: "Desserts",
    category: [
      {
        name: "Sweet Endings",
        items: [
          {
            name: "Key Lime Pie",
            description: "Graham cracker crust, fresh whipped cream, berry coulis",
            price: 12,
            isVegetarian: true,
            isGlutenFree: false
          },
          {
            name: "Chocolate Lava Cake",
            description: "Warm chocolate cake, molten center, vanilla ice cream, fresh berries",
            price: 14,
            isVegetarian: true,
            isGlutenFree: false
          },
          {
            name: "Seasonal Berries & Cream",
            description: "Fresh berries, Chantilly cream, mint",
            price: 11,
            isVegetarian: true,
            isGlutenFree: true
          },
          {
            name: "Crème Brûlée",
            description: "Tahitian vanilla bean custard, caramelized sugar",
            price: 12,
            isVegetarian: true,
            isGlutenFree: true
          }
        ]
      }
    ],
    description: "Finish with something sweet"
  }
];
