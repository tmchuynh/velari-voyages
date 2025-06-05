import { RestaurantMenu } from "@/lib/types/types";

/**
 * Menu data for The Pizzeria in roatan
 */
export const roatanthePizzeriaMenu: RestaurantMenu[] = [
  {
    "title": "Main Course Menu",
    "description": "Bold, tasty, and unmistakably American—each dish tells a story",
    "category": [
      {
        "name": "Signature Dishes",
        "description": "Unforgettable signatures that define who we are and what we serve, crafted to perfection.",
        "items": [
          {
            "name": "Deluxe Spiced Local Bounty Harvest Plate (Vegetarian)",
            "price": 25.05,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Traditional Appetizing Whole Roasted Heritage Chicken",
            "price": 33.03,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": false
          },
          {
            "name": "Fresh Crispy Chef's Childhood Inspired Creation",
            "price": 37.8,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Traditional Braised Wood-Fired Peking Duck with Plum Sauce",
            "price": 32.75,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": false,
            "isKosher": false
          },
          {
            "name": "Fresh Appetizing Traditional Family Paella",
            "price": 25.15,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Fresh Grilled Crusted Rack of Lamb with Dijon Herb Crust",
            "price": 33.66,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": false,
            "isKosher": false
          },
          {
            "name": "Authentic Tangy Heritage Recipe Lamb Shank",
            "price": 31.31,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": false
          }
        ]
      },
      {
        "name": "Chef's Specials",
        "description": "A showcase of our chef's creativity, featuring dishes that are as unique as they are delicious.",
        "items": [
          {
            "name": "Premium Stuffed Collaborative Limited Edition Special",
            "price": 32.04,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Hearty Smoked Live-Fire Grilled Feature",
            "price": 26.38,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Organic Juicy Sous Vide Perfection with Molecular Gastronomy Elements",
            "price": 35.62,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Gourmet Juicy Dry-Aged Prime Beef Selection",
            "price": 34.96,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": false,
            "isKosher": true
          },
          {
            "name": "Deluxe Fried Whole Animal Butchery Showcase",
            "price": 32.73,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          }
        ]
      },
      {
        "name": "Appetizers",
        "description": "Flavor-forward starters that introduce our approach to American with balance and creativity.",
        "items": [
          {
            "name": "Fresh Zingy Garlic Bread",
            "price": 15.43,
            "isVegetarian": false,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Gourmet Crunchy Lettuce Wraps",
            "price": 13.79,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Fresh Hearty Nachos",
            "price": 15.01,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Deluxe Crunchy Spring Rolls",
            "price": 8.9,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Fresh Spicy Zucchini Fries",
            "price": 8.78,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "House Special Spiced Dumplings",
            "price": 14.22,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "House Special Baked Prawn Toast",
            "price": 15.14,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Authentic Pan-seared Chicken Satay",
            "price": 13.46,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": false,
            "isKosher": false
          }
        ]
      },
      {
        "name": "Soups",
        "description": "A comforting range of house-made soups, from clear and delicate broths to rich, hearty bowls.",
        "items": [
          {
            "name": "Beef Stew",
            "price": 9.99,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Clam Chowder",
            "price": 11.7,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Gumbo",
            "price": 10.3,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Chicken Noodle Soup",
            "price": 11.73,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": false,
            "isKosher": true
          }
        ]
      },
      {
        "name": "Salads",
        "description": "Lively salads combining texture, temperature, and taste for a refreshing start or light meal.",
        "items": [
          {
            "name": "Apple Pecan Salad",
            "price": 11.18,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Kale Salad",
            "price": 12.11,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Pasta Salad",
            "price": 14.82,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Chickpea Salad",
            "price": 11.78,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Orzo Salad",
            "price": 14.8,
            "isVegetarian": false,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          }
        ]
      },
      {
        "name": "Main Courses",
        "description": "A journey through American flavors, expertly prepared and beautifully presented.",
        "items": [
          {
            "name": "Lamb Chops",
            "price": 20.85,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": false,
            "isKosher": false
          },
          {
            "name": "Roast Duck",
            "price": 31.47,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": false,
            "isKosher": false
          },
          {
            "name": "Coq au Vin",
            "price": 21.34,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Mac and Cheese",
            "price": 28.59,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Jambalaya",
            "price": 28.48,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Risotto",
            "price": 22.93,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Korma",
            "price": 31.04,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Beef Burger",
            "price": 23.08,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": false
          }
        ]
      },
      {
        "name": "Seafood Specialties",
        "description": "Coastal cuisine brought inland with clarity, freshness, and elegance.",
        "items": [
          {
            "name": "Handcrafted Irresistible Seafood Gumbo with Okra",
            "price": 29.66,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Authentic Succulent Alaskan King Crab Legs with Drawn Butter",
            "price": 23.17,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": false,
            "isKosher": false
          },
          {
            "name": "Traditional Enticing Mussels Mariniere in White Wine",
            "price": 27.37,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": false
          },
          {
            "name": "Authentic Roasted Cedar Plank Roasted Salmon",
            "price": 29.47,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": false
          },
          {
            "name": "Hearty Comforting Seafood Risotto with Saffron",
            "price": 28.91,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": false
          }
        ]
      },
      {
        "name": "Side Dishes",
        "description": "From classic to contemporary, our sides are designed to complement and surprise.",
        "items": [
          {
            "name": "Charred Broccolini with Garlic Oil",
            "price": 9.71,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Green Beans Almondine",
            "price": 6.62,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "French Fries",
            "price": 6.52,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Baked Idaho Potato with Sour Cream",
            "price": 7.23,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Roasted Root Vegetables",
            "price": 9.62,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Steamed Jasmine Rice",
            "price": 9.71,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          }
        ]
      },
      {
        "name": "Non-Alcoholic Beverages",
        "description": "Cold-pressed, house-infused, and always refreshing.",
        "items": [
          {
            "name": "Soda",
            "price": 5.22,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Water",
            "price": 5.98,
            "isVegetarian": false,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Iced Tea",
            "price": 4.11,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Hot Chocolate",
            "price": 6.89,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Lemonade",
            "price": 4.03,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Juice",
            "price": 5.58,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          }
        ]
      }
    ]
  },
  {
    "title": "Dessert Menu",
    "description": "Our pastry chef's homemade creations to end your meal on a sweet note",
    "category": [
      {
        "name": "Baked Goods",
        "description": "From flaky pastries to hearty breads, our baked goods are a must-try.",
        "items": [
          {
            "name": "Apple Pie",
            "price": 8.83,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Muffins",
            "price": 10.26,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Cobbler",
            "price": 9.89,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Portuguese Custard Tarts",
            "price": 7.84,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Cupcakes",
            "price": 6.53,
            "isVegetarian": false,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          }
        ]
      },
      {
        "name": "Frozen Desserts",
        "description": "Classic frozen favorites reimagined with gourmet flair and fresh ingredients.",
        "items": [
          {
            "name": "Deluxe Smoked Frozen Pudding",
            "price": 11.49,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Deluxe Hearty Frozen Pie",
            "price": 9.99,
            "isVegetarian": false,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Traditional Luscious Sorbet",
            "price": 10.49,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "House Special Crunchy Frozen Yogurt",
            "price": 8.37,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Organic Grilled Baked Alaska",
            "price": 7.24,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          }
        ]
      }
    ]
  },
  {
    "title": "Drinks Menu",
    "description": "A balanced drinks program blending innovation with tradition",
    "category": [
      {
        "name": "Signature Cocktails",
        "description": "Custom-designed drinks created exclusively by our mixologists to complement our menu.",
        "items": [
          {
            "name": "Hearty Hearty Old Fashioned",
            "price": 15.57,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Authentic Juicy Margarita",
            "price": 11.9,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": false,
            "isKosher": false
          },
          {
            "name": "Authentic Roasted Manhattan",
            "price": 10.55,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": false,
            "isKosher": false
          },
          {
            "name": "Fresh Hearty Cosmopolitan",
            "price": 12.87,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Authentic Hearty Negroni",
            "price": 11.82,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": false,
            "isKosher": false
          },
          {
            "name": "Authentic Juicy Mojito",
            "price": 14.85,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": false
          },
          {
            "name": "Fresh Aromatic Mai Tai",
            "price": 10.74,
            "isVegetarian": false,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          }
        ]
      },
      {
        "name": "Wine Selection",
        "description": "Handpicked selections that reflect our commitment to quality and terroir.",
        "items": [
          {
            "name": "Fiano",
            "price": 13.95,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Sauvignon Blanc",
            "price": 13.31,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Syrah/Shiraz",
            "price": 9.61,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Albariño",
            "price": 10.48,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Petit Verdot",
            "price": 13.23,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Gewürztraminer",
            "price": 8.62,
            "isVegetarian": false,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          }
        ]
      },
      {
        "name": "Spirits and Liqueurs",
        "description": "For aficionados and explorers alike—top-shelf selections with depth and pedigree.",
        "items": [
          {
            "name": "Sambuca",
            "price": 15.35,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Vodka",
            "price": 17.08,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Aquavit",
            "price": 16.89,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Midori",
            "price": 11.67,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Kahlúa",
            "price": 12.41,
            "isVegetarian": false,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          }
        ]
      }
    ]
  }
];
