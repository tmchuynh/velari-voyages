import { RestaurantMenu } from "@/lib/types/types";

/**
 * Menu data for Grand Lab in montevideo
 */
export const montevideograndLabMenu: RestaurantMenu[] = [
  {
    "title": "Main Course Menu",
    "description": "Our comforting kitchen honors the soul of Japanese cooking",
    "category": [
      {
        "name": "Signature Dishes",
        "description": "Our chef's pride—carefully selected Japanese specialties that define our culinary identity, honed through years of experience and passion.",
        "items": [
          {
            "name": "Caribbean-Style Jerk Duck with Mango Slaw",
            "price": 26.78,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": false
          },
          {
            "name": "Executive Chef's Daily Inspiration Entrée",
            "price": 31.76,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Modernist Foie Gras Sphere with Rhubarb Gel",
            "price": 36.77,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Signature Truffle Pasta with Aged Pecorino",
            "price": 24.53,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Chef's Special Surf and Turf",
            "price": 29.85,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Seasonal Tasting Platter",
            "price": 28.85,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "24-Hour Braised Short Ribs",
            "price": 29.13,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": false,
            "isKosher": true
          }
        ]
      },
      {
        "name": "Chef's Specials",
        "description": "Expressions of creativity from our chef’s table—ever-changing and inspired by market finds.",
        "items": [
          {
            "name": "Seasonal Grilled Locally Foraged Mushroom Selection",
            "price": 28.77,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Authentic Satisfying Chef's Childhood Favorite Reimagined",
            "price": 38.91,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": false,
            "isKosher": false
          },
          {
            "name": "Classic Zingy Live-Fire Grilled Feature",
            "price": 35.54,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Seasonal Grilled Deconstructed Classic with Modern Technique",
            "price": 34.16,
            "isVegetarian": false,
            "isVegan": true,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "House Special Aromatic Sous Vide Perfection with Molecular Gastronomy Elements",
            "price": 30.29,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          }
        ]
      },
      {
        "name": "Appetizers",
        "description": "A selection of small plates that showcase the essence of Japanese—perfect for sharing or savoring solo.",
        "items": [
          {
            "name": "House Special Enticing Falafel",
            "price": 9.79,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Handcrafted Braised Charcuterie Board",
            "price": 14.1,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Hearty Golden Calamari",
            "price": 12.29,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": false
          },
          {
            "name": "Handcrafted Marinated Garlic Knots",
            "price": 11.05,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Authentic Marinated Mezze Platter",
            "price": 13.98,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": false
          },
          {
            "name": "Handcrafted Succulent Baked Brie",
            "price": 15.37,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Hearty Spiced Potato Skins",
            "price": 8.45,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Seasonal Herbed Tzatziki with Pita",
            "price": 10.26,
            "isVegetarian": false,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          }
        ]
      },
      {
        "name": "Soups",
        "description": "Crafted with care, our soups are a celebration of Japanese flavors and traditions.",
        "items": [
          {
            "name": "Zuppa Toscana",
            "price": 7.24,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Tomato Soup",
            "price": 9.08,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Hot and Sour Soup",
            "price": 8.81,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Egg Drop Soup",
            "price": 7.42,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          }
        ]
      },
      {
        "name": "Salads",
        "description": "Crafted with care, our salads are a celebration of freshness and flavor.",
        "items": [
          {
            "name": "Quinoa Salad",
            "price": 15.89,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Garden Salad",
            "price": 12.3,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Roasted Beet and Goat Cheese Salad",
            "price": 10.68,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Pear and Gorgonzola Salad",
            "price": 11.89,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Broccoli Crunch Salad",
            "price": 13.78,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          }
        ]
      },
      {
        "name": "Main Courses",
        "description": "Signature entrées crafted with precision, embodying the core of our Japanese vision.",
        "items": [
          {
            "name": "Seasonal Spiced Tagine",
            "price": 25.2,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Fresh Sizzling Mac and Cheese",
            "price": 28.29,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Traditional Satisfying Steak",
            "price": 18.98,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": false,
            "isKosher": false
          },
          {
            "name": "Homestyle Delicious Grilled Tofu",
            "price": 23.56,
            "isVegetarian": false,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Deluxe Wholesome Spaghetti Bolognese",
            "price": 28.72,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Organic Sizzling Biryani",
            "price": 30.72,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Homestyle Spicy Salmon",
            "price": 23.6,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": false
          },
          {
            "name": "Homestyle Herbed Grilled Chicken",
            "price": 24.48,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": false,
            "isKosher": true
          }
        ]
      },
      {
        "name": "Seafood Specialties",
        "description": "Ocean-inspired dishes crafted with respect for delicate textures and bold seasoning.",
        "items": [
          {
            "name": "Fresh Marinated Stuffed Flounder with Crab and Spinach",
            "price": 32.96,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": false
          },
          {
            "name": "Organic Roasted Mussels Mariniere in White Wine",
            "price": 35.12,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": false
          },
          {
            "name": "Organic Appetizing Blackened Mahi-Mahi with Pineapple Salsa",
            "price": 23.69,
            "isVegetarian": false,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Authentic Wholesome Maryland Style Crab Cakes",
            "price": 32.21,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Fresh Enticing Garlic Butter Shrimp Skillet",
            "price": 33.67,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          }
        ]
      },
      {
        "name": "Side Dishes",
        "description": "Supportive elements that enhance and elevate the star of your plate.",
        "items": [
          {
            "name": "Authentic Spiced Truffle Parmesan Fries",
            "price": 7.5,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": false,
            "isKosher": false
          },
          {
            "name": "Seasonal Succulent Steamed Jasmine Rice",
            "price": 9.83,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Fresh Roasted Sweet Potato Wedges with Smoked Paprika",
            "price": 8.52,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Classic Succulent Quinoa Pilaf with Herbs",
            "price": 8.31,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Authentic Hearty Roasted Root Vegetables",
            "price": 7.46,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": false,
            "isKosher": false
          },
          {
            "name": "Fresh Zesty Sautéed Garlic Mushrooms",
            "price": 5.91,
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
        "description": "Bright, invigorating options that cleanse the palate and refresh the spirit.",
        "items": [
          {
            "name": "Soda",
            "price": 7.47,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Tea",
            "price": 7.7,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Milkshake",
            "price": 4.98,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Lemonade",
            "price": 7.64,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Iced Tea",
            "price": 6.31,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Juice",
            "price": 4.35,
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
    "description": "Delight in our tasty desserts prepared fresh daily",
    "category": [
      {
        "name": "Baked Goods",
        "description": "Indulge in our selection of baked treats, each one a labor of love.",
        "items": [
          {
            "name": "Hearty Steamed Biscotti",
            "price": 6.96,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Fresh Spiced Cannoli",
            "price": 7.14,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Hearty Baked Madeleines",
            "price": 9.46,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Gourmet Sweet Carrot Cake",
            "price": 9.06,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Authentic Marinated Cupcakes",
            "price": 7.98,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          }
        ]
      },
      {
        "name": "Frozen Desserts",
        "description": "Icy, sweet finishes with flavor that lingers beyond the chill.",
        "items": [
          {
            "name": "Frosty",
            "price": 8.18,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Sorbet",
            "price": 8.24,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Gelato",
            "price": 9.96,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Ice Cream Cake",
            "price": 9.48,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Ice Cream",
            "price": 9.63,
            "isVegetarian": false,
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
    "title": "Drinks Menu",
    "description": "Sip on our authentic cocktails, designed to enhance your dining experience",
    "category": [
      {
        "name": "Signature Cocktails",
        "description": "Sophisticated beverages with depth, character, and a dash of creativity.",
        "items": [
          {
            "name": "Fresh Wholesome Cosmopolitan",
            "price": 15.18,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Fresh Delectable Negroni",
            "price": 15.66,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "House Special Spiced Mojito",
            "price": 13.5,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Hearty Herbed Bloody Mary",
            "price": 12.53,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Traditional Zesty Old Fashioned",
            "price": 12.29,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Organic Marinated Manhattan",
            "price": 15.59,
            "isVegetarian": false,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Gourmet Spiced Mai Tai",
            "price": 10.63,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          }
        ]
      },
      {
        "name": "Wine Selection",
        "description": "An expertly curated wine list featuring standout bottles from around the globe.",
        "items": [
          {
            "name": "Sangiovese",
            "price": 10.21,
            "isVegetarian": false,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Chardonnay",
            "price": 8.28,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Moscato",
            "price": 9.86,
            "isVegetarian": false,
            "isVegan": true,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Pinot Blanc",
            "price": 11.29,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Merlot",
            "price": 11.83,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Viognier",
            "price": 11.45,
            "isVegetarian": false,
            "isVegan": true,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          }
        ]
      },
      {
        "name": "Spirits and Liqueurs",
        "description": "From classic cocktails to sipping spirits, our bar is stocked with quality and character.",
        "items": [
          {
            "name": "Seasonal Grilled Cognac",
            "price": 10.98,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "House Special Pan-seared Sambuca",
            "price": 10.59,
            "isVegetarian": false,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Deluxe Delicious Coffee Liqueur",
            "price": 16.82,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Hearty Grilled Bourbon",
            "price": 16.4,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Handcrafted Delicious Bénédictine",
            "price": 17.47,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          }
        ]
      }
    ]
  }
];
