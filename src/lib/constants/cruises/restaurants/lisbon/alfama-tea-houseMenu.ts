import { RestaurantMenu } from "@/lib/types/types";

/**
 * Menu data for Alfama Tea House in lisbon
 */
export const lisbonalfamaTeaHouseMenu: RestaurantMenu[] = [
  {
    "title": "Main Course Menu",
    "description": "A flavorful fusion of tasty and authentic Mediterranean dishes",
    "category": [
      {
        "name": "Signature Dishes",
        "description": "Unforgettable signatures that define who we are and what we serve.",
        "items": [
          {
            "name": "Seasonal Tasting Menu Experience",
            "price": 35.65,
            "isVegetarian": false,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Restaurant's Namesake Signature Entrée",
            "price": 26.2,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Founder's Family Recipe Pasta",
            "price": 26.12,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Chef’s Wild Game Selection",
            "price": 30.61,
            "isVegetarian": false,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Award-Winning Seafood Boil",
            "price": 36.9,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": false
          },
          {
            "name": "Tableside Carved Chateaubriand",
            "price": 24.59,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Traditional Family Paella",
            "price": 29.17,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          }
        ]
      },
      {
        "name": "Chef's Specials",
        "description": "Seasonal offerings crafted by our executive chef, available for a limited time to reflect peak freshness.",
        "items": [
          {
            "name": "Classic Roasted Live-Fire Grilled Feature",
            "price": 30.06,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Gourmet Pan-seared Chef's Tasting Menu Experience",
            "price": 27.11,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Gourmet Delectable Grilled Venison with Juniper Berry Sauce",
            "price": 34.18,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "House Special Herbed Daily Fresh Catch with Seasonal Accompaniments",
            "price": 29.45,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Hearty Smoked Miso-Glazed Black Cod",
            "price": 37.46,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": false
          }
        ]
      },
      {
        "name": "Appetizers",
        "description": "A selection of small plates that showcase the essence of Mediterranean—perfect for sharing or savoring solo.",
        "items": [
          {
            "name": "Bruschetta",
            "price": 8.17,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Stuffed Avocado",
            "price": 15.61,
            "isVegetarian": false,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Edamame",
            "price": 10.08,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Stuffed Peppers",
            "price": 11.23,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Prawn Toast",
            "price": 12.19,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Spinach Puffs",
            "price": 12.47,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Hummus Platter",
            "price": 13.99,
            "isVegetarian": false,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Potato Skins",
            "price": 11.84,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          }
        ]
      },
      {
        "name": "Soups",
        "description": "Each bowl is a journey through the heart of Mediterranean, crafted with care and expertise.",
        "items": [
          {
            "name": "Clam Chowder",
            "price": 7.95,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Chicken Noodle Soup",
            "price": 11.49,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": false,
            "isKosher": true
          },
          {
            "name": "Zuppa Toscana",
            "price": 10.15,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Seafood Chowder",
            "price": 9.89,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          }
        ]
      },
      {
        "name": "Salads",
        "description": "Crisp and colorful salads that balance flavor, nutrition, and beautiful presentation.",
        "items": [
          {
            "name": "Caesar Salad",
            "price": 12.93,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Garden Salad",
            "price": 11.13,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Pear and Gorgonzola Salad",
            "price": 13.3,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Orzo Salad",
            "price": 9.8,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Avocado Corn Salad",
            "price": 11.71,
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
        "description": "A selection of mains that reflect the heart and soul of Mediterranean, prepared with care.",
        "items": [
          {
            "name": "Authentic Sizzling Jambalaya",
            "price": 24.45,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": false
          },
          {
            "name": "Homestyle Comforting Salmon",
            "price": 21.66,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": false
          },
          {
            "name": "Classic Baked Grilled Tofu",
            "price": 24.04,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Authentic Crispy Stuffed Peppers",
            "price": 28.65,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": false,
            "isKosher": true
          },
          {
            "name": "Handcrafted Tangy Spaghetti Bolognese",
            "price": 29.92,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Seasonal Aromatic Pho",
            "price": 26.28,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Traditional Steamed Ramen",
            "price": 31.27,
            "isVegetarian": false,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Homestyle Baked Steak",
            "price": 27.14,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": false,
            "isKosher": false
          }
        ]
      },
      {
        "name": "Seafood Specialties",
        "description": "A celebration of the sea, featuring seasonal catches and artisanal techniques.",
        "items": [
          {
            "name": "Crab-Stuffed Mushrooms",
            "price": 32.96,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Grilled Spanish Octopus with Smoked Paprika",
            "price": 25.09,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": false
          },
          {
            "name": "Hearty Italian Cioppino",
            "price": 28.55,
            "isVegetarian": false,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Linguine with Clam Sauce",
            "price": 24.57,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Tempura Soft Shell Crab",
            "price": 32.01,
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
        "description": "Flavorful companions that round out your meal with harmony and flair.",
        "items": [
          {
            "name": "Mashed Potatoes",
            "price": 5.33,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Yukon Gold Potato Gratin",
            "price": 6.13,
            "isVegetarian": false,
            "isVegan": true,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Crispy Beer-Battered Onion Rings",
            "price": 7.17,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Sautéed Garlic Mushrooms",
            "price": 6.39,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Crispy Zucchini Fritters",
            "price": 6.98,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Roasted Root Vegetables",
            "price": 7.56,
            "isVegetarian": false,
            "isVegan": true,
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
            "name": "Fresh Herbed Hot Chocolate",
            "price": 6.5,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Fresh Marinated Coffee",
            "price": 6.54,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Deluxe Satisfying Water",
            "price": 5.28,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Classic Crunchy Iced Tea",
            "price": 6.6,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Classic Spicy Juice",
            "price": 6.95,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Deluxe Sautéed Soda",
            "price": 6.05,
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
    "description": "A tasty selection of desserts to complement your dining experience",
    "category": [
      {
        "name": "Baked Goods",
        "description": "A selection of sweet and savory baked delights, crafted with love and care.",
        "items": [
          {
            "name": "Biscotti",
            "price": 8.07,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Crumb Cake",
            "price": 6.35,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Sticky Toffee Pudding",
            "price": 8.12,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Madeleines",
            "price": 8.92,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Banana Bread",
            "price": 10.56,
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
        "description": "Icy, sweet finishes with flavor that lingers beyond the chill.",
        "items": [
          {
            "name": "Fresh Zesty Ice Cream Cake",
            "price": 7.44,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Hearty Stuffed Gelato",
            "price": 11.59,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Authentic Tangy Frozen Fruit Bars",
            "price": 11.12,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": false
          },
          {
            "name": "Seasonal Grilled Ice Cream",
            "price": 9.76,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Seasonal Flaky Semifreddo",
            "price": 10.18,
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
    "title": "Drinks Menu",
    "description": "Unwind with our comforting beverages crafted for connoisseurs and casual sippers alike",
    "category": [
      {
        "name": "Signature Cocktails",
        "description": "From reinvented classics to bold new creations, every glass is an experience.",
        "items": [
          {
            "name": "Premium Sizzling Bloody Mary",
            "price": 15.2,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Hearty Spiced Manhattan",
            "price": 13.09,
            "isVegetarian": false,
            "isVegan": true,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Handcrafted Steamed Whiskey Sour",
            "price": 11.53,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Authentic Mouthwatering Mojito",
            "price": 11.49,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": false,
            "isKosher": true
          },
          {
            "name": "House Special Marinated Martini",
            "price": 15.96,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Hearty Herbed Old Fashioned",
            "price": 10.42,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Homestyle Irresistible Margarita",
            "price": 15.3,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          }
        ]
      },
      {
        "name": "Wine Selection",
        "description": "A spectrum of vintages and varietals—from structured reds to bright, crisp whites.",
        "items": [
          {
            "name": "Organic Marinated Gamay",
            "price": 8.35,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Classic Stuffed Sauvignon Blanc",
            "price": 11.93,
            "isVegetarian": false,
            "isVegan": true,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Hearty Spiced Fiano",
            "price": 9.61,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "House Special Tangy Petit Verdot",
            "price": 9.35,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Handcrafted Stuffed Verdicchio",
            "price": 13.95,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Fresh Smoked Malbec",
            "price": 8.73,
            "isVegetarian": true,
            "isVegan": false,
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
            "name": "Amaretto",
            "price": 13.38,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Campari",
            "price": 17.57,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Tequila",
            "price": 10.96,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Grand Marnier",
            "price": 15.73,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Frangelico",
            "price": 14.92,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          }
        ]
      }
    ]
  }
];
