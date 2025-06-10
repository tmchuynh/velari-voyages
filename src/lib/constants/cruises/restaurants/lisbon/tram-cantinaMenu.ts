import { RestaurantMenu } from "@/lib/types/types";

/**
 * Menu data for Tram Cantina in lisbon
 */
export const lisbontramCantinaMenu: RestaurantMenu[] = [
  {
    "title": "Main Course Menu",
    "description": "Rooted in tradition, driven by satisfying culinary vision",
    "category": [
      {
        "name": "Signature Dishes",
        "description": "Inspired by nature, mood, and season—our chef’s ever-evolving vision on a plate.",
        "items": [
          {
            "name": "Award-Winning Seafood Boil",
            "price": 37.05,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": false
          },
          {
            "name": "Legendary Prime Rib",
            "price": 27.91,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Caribbean-Style Jerk Duck with Mango Slaw",
            "price": 25.43,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": false,
            "isKosher": false
          },
          {
            "name": "Age-Old Recipe Osso Buco with Gremolata",
            "price": 30.01,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Japanese A5 Wagyu with Ponzu Butter",
            "price": 24.63,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Signature Truffle Pasta with Aged Pecorino",
            "price": 28.04,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Flambéed Tableside Specialty",
            "price": 26.57,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": false,
            "isKosher": false
          }
        ]
      },
      {
        "name": "Chef's Specials",
        "description": "Inventive dishes that explore rare ingredients, bold flavors, and progressive cooking techniques.",
        "items": [
          {
            "name": "Deluxe Flavorful Locally Foraged Mushroom Selection",
            "price": 38.22,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "House Special Grilled Chef's Tasting Menu Experience",
            "price": 34.7,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Authentic Pan-seared Lobster and Crab Stuffed Ravioli",
            "price": 35.45,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": false,
            "isKosher": false
          },
          {
            "name": "Fresh Mouthwatering Freshly Harvested Seasonal Creation",
            "price": 39.68,
            "isVegetarian": false,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Deluxe Herbed Braised Short Ribs with Red Wine Sauce",
            "price": 29.89,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": false,
            "isKosher": false
          }
        ]
      },
      {
        "name": "Appetizers",
        "description": "Mouthwatering previews of what's to come—crafted to tease and please.",
        "items": [
          {
            "name": "Seasonal Golden Mini Crab Cakes",
            "price": 8.52,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Classic Stuffed Deviled Eggs",
            "price": 11.11,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Fresh Golden Edamame",
            "price": 13.72,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Fresh Golden Spinach Puffs",
            "price": 14.75,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Gourmet Enticing Prawn Toast",
            "price": 14.6,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Homestyle Steamed Zucchini Fries",
            "price": 10.62,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Hearty Grilled Mini Empanadas",
            "price": 9.42,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Handcrafted Smoked Falafel",
            "price": 12.76,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          }
        ]
      },
      {
        "name": "Soups",
        "description": "Each bowl is a journey through the heart of Seafood, crafted with care and expertise.",
        "items": [
          {
            "name": "Miso Soup",
            "price": 7.77,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Tomato Soup",
            "price": 7.93,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Seafood Chowder",
            "price": 11,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": false
          },
          {
            "name": "Pumpkin Soup",
            "price": 11.75,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          }
        ]
      },
      {
        "name": "Salads",
        "description": "Fresh-picked greens, vibrant produce, and house dressings made in-house daily.",
        "items": [
          {
            "name": "Quinoa Salad",
            "price": 9.4,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Broccoli Crunch Salad",
            "price": 13.58,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Cobb Salad",
            "price": 9.92,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Greek Salad",
            "price": 11.2,
            "isVegetarian": false,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Beet Salad",
            "price": 10.69,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          }
        ]
      },
      {
        "name": "Main Courses",
        "description": "Crafted with the finest ingredients, our mains are a testament to our culinary philosophy.",
        "items": [
          {
            "name": "Stuffed Zucchini Boats",
            "price": 21.75,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Salmon",
            "price": 29.94,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": false
          },
          {
            "name": "Enchiladas",
            "price": 26.98,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Pizza",
            "price": 19.36,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Coq au Vin",
            "price": 26.68,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Pasta Primavera",
            "price": 27.59,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Katsu Curry",
            "price": 31.64,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Fajitas",
            "price": 27.48,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          }
        ]
      },
      {
        "name": "Seafood Specialties",
        "description": "From raw bar selections to grilled specialties, our seafood dishes are a must-try.",
        "items": [
          {
            "name": "Gourmet Spicy Oysters Rockefeller with Pernod Cream",
            "price": 35.23,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": false
          },
          {
            "name": "Deluxe Spicy Tempura Soft Shell Crab",
            "price": 33.64,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": false
          },
          {
            "name": "Fresh Baked Lemon-Herb Calamari Steak",
            "price": 30.34,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": false,
            "isKosher": false
          },
          {
            "name": "Authentic Sizzling Grilled Spanish Octopus with Smoked Paprika",
            "price": 29.81,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Homestyle Baked Seafood Risotto with Saffron",
            "price": 30.96,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": false
          }
        ]
      },
      {
        "name": "Side Dishes",
        "description": "Crafted to enhance your main course, these sides are anything but ordinary.",
        "items": [
          {
            "name": "Crispy Beer-Battered Onion Rings",
            "price": 5.39,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Creamy Colcannon (Irish Potato Mash)",
            "price": 6.32,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "French Fries",
            "price": 6.69,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Roasted Root Vegetables",
            "price": 7.86,
            "isVegetarian": false,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Green Beans Almondine",
            "price": 6.74,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Baked Idaho Potato with Sour Cream",
            "price": 8.99,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          }
        ]
      },
      {
        "name": "Non-Alcoholic Beverages",
        "description": "Bright and revitalizing beverages for all ages and preferences.",
        "items": [
          {
            "name": "House Special Creamy Iced Tea",
            "price": 6.16,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Authentic Appetizing Juice",
            "price": 5.06,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": false
          },
          {
            "name": "Handcrafted Creamy Smoothie",
            "price": 6.97,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Fresh Stuffed Water",
            "price": 5.44,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Fresh Creamy Soda",
            "price": 6.03,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Fresh Appetizing Tea",
            "price": 5.36,
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
    "title": "Dessert Menu",
    "description": "Indulge in our authentic sweet creations",
    "category": [
      {
        "name": "Baked Goods",
        "description": "Warm, fragrant creations baked fresh daily with premium ingredients.",
        "items": [
          {
            "name": "Chocolate Chip Cookies",
            "price": 8.68,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Scones",
            "price": 6.05,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Carrot Cake",
            "price": 10.41,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Crumb Cake",
            "price": 9.04,
            "isVegetarian": false,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Cupcakes",
            "price": 6.63,
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
        "description": "A delightful way to end your meal—cool, creamy, and bursting with flavor.",
        "items": [
          {
            "name": "Fresh Roasted Gelato",
            "price": 10.16,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Hearty Crunchy Granita",
            "price": 10.87,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Classic Delicious Frozen Pudding",
            "price": 8.74,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Authentic Braised Frozen Yogurt",
            "price": 10.86,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": false,
            "isKosher": true
          },
          {
            "name": "House Special Smoked Frozen Banana",
            "price": 11.77,
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
    "description": "A hearty selection of alcoholic beverages to complement your meal",
    "category": [
      {
        "name": "Signature Cocktails",
        "description": "Sophisticated beverages with depth, character, and a dash of creativity.",
        "items": [
          {
            "name": "Fresh Flaky Martini",
            "price": 10.64,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Authentic Sizzling Cosmopolitan",
            "price": 15.43,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": false,
            "isKosher": true
          },
          {
            "name": "Classic Stuffed Bloody Mary",
            "price": 13.8,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Authentic Grilled Mojito",
            "price": 12.98,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": false,
            "isKosher": true
          },
          {
            "name": "Fresh Wholesome Whiskey Sour",
            "price": 15.07,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Deluxe Luscious Manhattan",
            "price": 15.31,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Fresh Irresistible Negroni",
            "price": 11.79,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
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
            "name": "Syrah/Shiraz",
            "price": 11.18,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Gewürztraminer",
            "price": 11.3,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Gamay",
            "price": 9.69,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Fiano",
            "price": 12.66,
            "isVegetarian": false,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Merlot",
            "price": 10.79,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Malbec",
            "price": 10.84,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          }
        ]
      },
      {
        "name": "Spirits and Liqueurs",
        "description": "Crafted for those who appreciate the finer things in life—our spirits selection.",
        "items": [
          {
            "name": "Triple Sec",
            "price": 12.18,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Coffee Liqueur",
            "price": 13.35,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Frangelico",
            "price": 11.98,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Vodka",
            "price": 10.99,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Anisette",
            "price": 10.79,
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
