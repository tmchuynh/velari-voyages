import { RestaurantMenu } from "@/lib/types/types";

/**
 * Menu data for Lighthouse Taproom in kiel
 */
export const kiellighthouseTaproomMenu: RestaurantMenu[] = [
  {
    "title": "Main Course Menu",
    "description": "Timeless tastes, elevated by our comforting approach to Italian",
    "category": [
      {
        "name": "Signature Dishes",
        "description": "A hand-picked menu selection that reflects the chef’s current inspirations and exceptional skill.",
        "items": [
          {
            "name": "Chef's Special Surf and Turf",
            "price": 25.12,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "House Famous Duck Confit",
            "price": 33.21,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Signature Truffle Pasta with Aged Pecorino",
            "price": 25.41,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Award-Winning Seafood Boil",
            "price": 32.17,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": false
          },
          {
            "name": "Caribbean-Style Jerk Duck with Mango Slaw",
            "price": 35.63,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": false,
            "isKosher": false
          },
          {
            "name": "Traditional Family Paella",
            "price": 30.98,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Local Bounty Harvest Plate (Vegetarian)",
            "price": 27.78,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          }
        ]
      },
      {
        "name": "Chef's Specials",
        "description": "Unique culinary compositions that rotate frequently to keep each visit fresh and surprising.",
        "items": [
          {
            "name": "Authentic Succulent Locally Foraged Mushroom Selection",
            "price": 37.24,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": false
          },
          {
            "name": "Homestyle Mouthwatering Smoked and Slow-Roasted Heritage Meat",
            "price": 34.03,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": false
          },
          {
            "name": "Deluxe Zingy Truffle-Infused Filet Mignon",
            "price": 39.79,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": false,
            "isKosher": true
          },
          {
            "name": "Hearty Flavorful Freshly Harvested Seasonal Creation",
            "price": 33.47,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Gourmet Pan-seared Chef's Tasting Menu Experience",
            "price": 39.95,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          }
        ]
      },
      {
        "name": "Appetizers",
        "description": "Small bites designed to awaken your senses and set the tone for your dining journey.",
        "items": [
          {
            "name": "Bruschetta",
            "price": 8.53,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Spinach Artichoke Dip",
            "price": 8.09,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Calamari",
            "price": 11.56,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": false
          },
          {
            "name": "Tempura",
            "price": 12.46,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Arancini",
            "price": 9.06,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Samosas",
            "price": 11.51,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Mini Empanadas",
            "price": 10.36,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Meatballs",
            "price": 15.15,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": false,
            "isKosher": false
          }
        ]
      },
      {
        "name": "Soups",
        "description": "From light broths to hearty stews, our soups are a comforting embrace in every spoonful.",
        "items": [
          {
            "name": "Premium Comforting Peanut Soup (West African)",
            "price": 9.25,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Authentic Grilled Mushroom Soup",
            "price": 8.9,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": false,
            "isKosher": false
          },
          {
            "name": "Deluxe Spiced Broccoli Cheddar Soup",
            "price": 11.29,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Homestyle Stuffed Thai Coconut Soup",
            "price": 7.01,
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
        "description": "Wholesome creations that blend crunch, freshness, and house-crafted dressings.",
        "items": [
          {
            "name": "Fruit Salad",
            "price": 14.96,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Mediterranean Chopped Salad",
            "price": 14.81,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Arugula Salad",
            "price": 9.01,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Nicoise Salad",
            "price": 10.55,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Watermelon Feta Salad",
            "price": 9.71,
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
        "description": "Signature entrées crafted with precision, embodying the core of our Italian vision.",
        "items": [
          {
            "name": "Homestyle Grilled Steak",
            "price": 29.7,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": false,
            "isKosher": false
          },
          {
            "name": "Authentic Delicious Pesto Pasta",
            "price": 19.87,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": false,
            "isKosher": false
          },
          {
            "name": "Traditional Exquisite Shish Kebabs",
            "price": 18.61,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Handcrafted Smoked Moussaka",
            "price": 29.22,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Authentic Flavorful Pizza",
            "price": 28.44,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": false
          },
          {
            "name": "Traditional Roasted Coq au Vin",
            "price": 21.58,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Seasonal Golden Seafood Platter",
            "price": 23.51,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": false
          },
          {
            "name": "Hearty Grilled Cottage Pie",
            "price": 26.67,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          }
        ]
      },
      {
        "name": "Seafood Specialties",
        "description": "From raw bar delicacies to grilled perfection—our tribute to the ocean.",
        "items": [
          {
            "name": "Hearty Juicy Grilled Lobster with Lemon Butter",
            "price": 27.62,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": false
          },
          {
            "name": "Handcrafted Spicy Steamed Littleneck Clams in Garlic Broth",
            "price": 26.48,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Gourmet Pan-seared Valencian Seafood Paella",
            "price": 25.28,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": false
          },
          {
            "name": "Premium Delectable Stuffed Flounder with Crab and Spinach",
            "price": 26.75,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": false
          },
          {
            "name": "Seasonal Baked Grilled Spanish Octopus with Smoked Paprika",
            "price": 34.89,
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
        "description": "Flavorful companions that round out your meal with harmony and flair.",
        "items": [
          {
            "name": "Roasted Root Vegetables",
            "price": 6.39,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Buttered Egg Noodles",
            "price": 6.97,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Warm Buttermilk Dinner Rolls",
            "price": 6.43,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Creamed Spinach with Nutmeg",
            "price": 9.19,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Corn on the Cob with Chili Lime Butter",
            "price": 7.12,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Soft Polenta with Parmesan",
            "price": 7.1,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
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
            "name": "Fresh Tangy Water",
            "price": 4.54,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Homestyle Roasted Juice",
            "price": 7.11,
            "isVegetarian": false,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Authentic Zesty Lemonade",
            "price": 7.61,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": false
          },
          {
            "name": "Authentic Delicious Coffee",
            "price": 4.07,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": false
          },
          {
            "name": "Fresh Succulent Iced Tea",
            "price": 6.96,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Classic Braised Hot Chocolate",
            "price": 6.14,
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
    "description": "Handcrafted baked to perfection desserts that celebrate Italian traditions",
    "category": [
      {
        "name": "Baked Goods",
        "description": "Comforting, handmade goods perfect for breakfast, dessert, or anytime in between.",
        "items": [
          {
            "name": "Pecan Pie",
            "price": 10.65,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Eclairs",
            "price": 8.48,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Tiramisu",
            "price": 6.83,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Sticky Toffee Pudding",
            "price": 10.86,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Shortbread",
            "price": 10.47,
            "isVegetarian": true,
            "isVegan": false,
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
            "name": "Premium Baked Ice Cream Cake",
            "price": 7.77,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Seasonal Golden Frosty",
            "price": 10.59,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Deluxe Satisfying Frozen Cheesecake",
            "price": 10.16,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Fresh Golden Semifreddo",
            "price": 11.39,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Authentic Flaky Frozen Fruit Bars",
            "price": 9.36,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": false,
            "isKosher": true
          }
        ]
      }
    ]
  },
  {
    "title": "Drinks Menu",
    "description": "Enjoy easygoing cocktails designed to pair effortlessly with our seasonal menu",
    "category": [
      {
        "name": "Signature Cocktails",
        "description": "Crafted with care, our cocktails are a perfect pairing for any dish on our menu.",
        "items": [
          {
            "name": "Mai Tai",
            "price": 12.68,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Martini",
            "price": 10.5,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Bloody Mary",
            "price": 13.67,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Manhattan",
            "price": 13.19,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Negroni",
            "price": 12.68,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Cosmopolitan",
            "price": 14.49,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Old Fashioned",
            "price": 14.31,
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
        "description": "Our sommelier's recommendations, designed to pair perfectly with our menu.",
        "items": [
          {
            "name": "Authentic Spiced Barbera",
            "price": 10.99,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": false
          },
          {
            "name": "Organic Spiced Viognier",
            "price": 8.44,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Fresh Aromatic Syrah/Shiraz",
            "price": 9.66,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Fresh Enticing Fiano",
            "price": 8.51,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Traditional Zesty Pinot Grigio",
            "price": 10.51,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Fresh Grilled Vermentino",
            "price": 13.53,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          }
        ]
      },
      {
        "name": "Spirits and Liqueurs",
        "description": "Explore our selection of small-batch and artisanal spirits, each with a unique story.",
        "items": [
          {
            "name": "Seasonal Grilled Campari",
            "price": 12.64,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Classic Tender Galliano",
            "price": 15,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Deluxe Marinated Grappa",
            "price": 10.53,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Authentic Irresistible Pisco",
            "price": 11.71,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": false
          },
          {
            "name": "Traditional Golden Chambord",
            "price": 17.58,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": false,
            "isKosher": false
          }
        ]
      }
    ]
  }
];
