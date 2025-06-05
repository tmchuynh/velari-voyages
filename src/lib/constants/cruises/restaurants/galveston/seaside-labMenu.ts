import { RestaurantMenu } from "@/lib/types/types";

/**
 * Menu data for Seaside Lab in galveston
 */
export const galvestonseasideLabMenu: RestaurantMenu[] = [
  {
    "title": "Main Course Menu",
    "description": "From appetizers to main courses: homestyle dishes prepared with passion",
    "category": [
      {
        "name": "Signature Dishes",
        "description": "House favorites that have stood the test of time and showcase our refined approach to American cuisine.",
        "items": [
          {
            "name": "Founder's Family Recipe Pasta",
            "price": 30.86,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Molecular Gastronomy Showcase Tasting",
            "price": 30.78,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Tableside Carved Chateaubriand",
            "price": 27.39,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Flambéed Tableside Specialty",
            "price": 36.48,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": false
          },
          {
            "name": "Crusted Rack of Lamb with Dijon Herb Crust",
            "price": 34.73,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Modernist Foie Gras Sphere with Rhubarb Gel",
            "price": 36.94,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Local Bounty Harvest Plate (Vegetarian)",
            "price": 36.28,
            "isVegetarian": false,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          }
        ]
      },
      {
        "name": "Chef's Specials",
        "description": "Crafted daily based on what’s freshest and most inspiring at the market.",
        "items": [
          {
            "name": "Traditional Juicy Truffle-Infused Filet Mignon",
            "price": 38.55,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": false,
            "isKosher": true
          },
          {
            "name": "Deluxe Pan-seared Heirloom Recipe from Chef's Family",
            "price": 38.21,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Traditional Pan-seared Charcoal-Grilled Wagyu Beef",
            "price": 26.39,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": false,
            "isKosher": false
          },
          {
            "name": "Premium Aromatic Seared Duck Breast with Cherry Reduction",
            "price": 34.67,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": false
          },
          {
            "name": "Homestyle Sweet Tableside Prepared Tartare",
            "price": 26.73,
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
        "description": "Thoughtfully prepared small plates to begin your culinary experience with elegance and taste.",
        "items": [
          {
            "name": "Fresh Hearty Garlic Bread",
            "price": 14.32,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Classic Marinated Charcuterie Board",
            "price": 9.08,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": false,
            "isKosher": false
          },
          {
            "name": "Organic Delicious Potstickers",
            "price": 9.72,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Classic Herbed Sweet Potato Fries",
            "price": 14.57,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Fresh Stuffed Stuffed Jalapeños",
            "price": 14.64,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Fresh Appetizing Mini Quesadillas",
            "price": 11.83,
            "isVegetarian": false,
            "isVegan": true,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Organic Savory Calamari",
            "price": 14.29,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": false
          },
          {
            "name": "Traditional Flavorful Stuffed Peppers",
            "price": 8.16,
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
        "description": "Each spoonful offers depth, comfort, and craftsmanship.",
        "items": [
          {
            "name": "Organic Creamy Lobster Bisque",
            "price": 8.31,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": false
          },
          {
            "name": "Handcrafted Savory Turkey and Wild Rice Soup",
            "price": 11.65,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": false,
            "isKosher": false
          },
          {
            "name": "Hearty Delectable Tomato Soup",
            "price": 9.75,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Handcrafted Flaky Italian Wedding Soup",
            "price": 11.73,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          }
        ]
      },
      {
        "name": "Salads",
        "description": "Light, clean, and energizing—each salad is a visual and flavorful delight.",
        "items": [
          {
            "name": "Caesar Salad",
            "price": 11.86,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Roasted Vegetable Salad",
            "price": 10.08,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Nicoise Salad",
            "price": 15.47,
            "isVegetarian": false,
            "isVegan": true,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Lentil and Feta Salad",
            "price": 14.2,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Watermelon Feta Salad",
            "price": 15.71,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": true,
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
            "name": "Currywurst",
            "price": 19.5,
            "isVegetarian": false,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Lamb Chops",
            "price": 21.62,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": false,
            "isKosher": false
          },
          {
            "name": "Shakshuka",
            "price": 29.99,
            "isVegetarian": false,
            "isVegan": true,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Chili con Carne",
            "price": 25.84,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Fajitas",
            "price": 21.03,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Grilled Tofu",
            "price": 30.65,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Spaghetti Bolognese",
            "price": 22.43,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Pizza",
            "price": 27.84,
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
        "description": "Prepared with simplicity to let the freshness of the sea speak for itself.",
        "items": [
          {
            "name": "Handcrafted Herbed Grilled Spanish Octopus with Smoked Paprika",
            "price": 32.6,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": false
          },
          {
            "name": "Handcrafted Crispy Tempura Soft Shell Crab",
            "price": 22.25,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Homestyle Creamy Steamed Littleneck Clams in Garlic Broth",
            "price": 33.52,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": false
          },
          {
            "name": "House Special Spicy Oysters Rockefeller with Pernod Cream",
            "price": 24.19,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": false
          },
          {
            "name": "Authentic Sweet Basa Fillet with Dill Cream Sauce",
            "price": 26.69,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": false,
            "isKosher": false
          }
        ]
      },
      {
        "name": "Side Dishes",
        "description": "Essential accompaniments, from traditional staples to inventive bites.",
        "items": [
          {
            "name": "Homestyle Grilled Herbed Bulgur Wheat with Lemon",
            "price": 6.84,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "House Special Golden French Fries",
            "price": 5.82,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Premium Satisfying Roasted Root Vegetables",
            "price": 8.41,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Fresh Delectable Creamy Colcannon (Irish Potato Mash)",
            "price": 7.09,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Traditional Mouthwatering Chili Lime Roasted Chickpeas",
            "price": 5.4,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Handcrafted Sautéed Homestyle Baked Beans",
            "price": 5.84,
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
        "description": "Handcrafted drinks designed to hydrate and delight—no spirits necessary.",
        "items": [
          {
            "name": "Homestyle Sweet Coffee",
            "price": 5.34,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Handcrafted Sweet Tea",
            "price": 7.28,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Fresh Steamed Smoothie",
            "price": 7.19,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Traditional Comforting Lemonade",
            "price": 5.69,
            "isVegetarian": false,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Homestyle Enticing Soda",
            "price": 6.26,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Fresh Steamed Juice",
            "price": 4.6,
            "isVegetarian": true,
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
    "description": "Indulge in our delicious sweet creations",
    "category": [
      {
        "name": "Baked Goods",
        "description": "Pastries, breads, and treats prepared in-house using classic and modern methods.",
        "items": [
          {
            "name": "Apple Pie",
            "price": 6.51,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Chocolate Chip Cookies",
            "price": 10.28,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Madeleines",
            "price": 10.53,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Cupcakes",
            "price": 7.38,
            "isVegetarian": false,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Tiramisu",
            "price": 7.46,
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
        "description": "Chilled, house-crafted desserts offering a perfect ending to your meal.",
        "items": [
          {
            "name": "Homestyle Herbed Frozen Mousse",
            "price": 9.79,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Fresh Sweet Semifreddo",
            "price": 9.17,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Fresh Comforting Frozen Pudding",
            "price": 10.82,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Gourmet Spiced Snow Cone",
            "price": 10.42,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Authentic Delicious Baked Alaska",
            "price": 7.63,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": false,
            "isKosher": false
          }
        ]
      }
    ]
  },
  {
    "title": "Drinks Menu",
    "description": "A easygoing selection of alcoholic beverages to complement your meal",
    "category": [
      {
        "name": "Signature Cocktails",
        "description": "Crafted with precision, our cocktails are designed to elevate your dining experience.",
        "items": [
          {
            "name": "Fresh Zesty Martini",
            "price": 15.28,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Deluxe Smoked Margarita",
            "price": 12.45,
            "isVegetarian": false,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Handcrafted Tender Mai Tai",
            "price": 14.8,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Homestyle Zingy Whiskey Sour",
            "price": 15.73,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Fresh Baked Manhattan",
            "price": 15.69,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Fresh Luscious Bloody Mary",
            "price": 11.09,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Hearty Crispy Old Fashioned",
            "price": 11.57,
            "isVegetarian": false,
            "isVegan": true,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          }
        ]
      },
      {
        "name": "Wine Selection",
        "description": "A wine list as thoughtful and layered as our cuisine.",
        "items": [
          {
            "name": "Homestyle Baked Dolcetto",
            "price": 10.81,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Gourmet Steamed Sangiovese",
            "price": 10.2,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Authentic Creamy Fiano",
            "price": 8.57,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Premium Appetizing Syrah/Shiraz",
            "price": 10.3,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Premium Grilled Chenin Blanc",
            "price": 12.58,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": false,
            "isKosher": true
          },
          {
            "name": "Classic Mouthwatering Champagne/Sparkling Wine",
            "price": 10.54,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": false,
            "isKosher": true
          }
        ]
      },
      {
        "name": "Spirits and Liqueurs",
        "description": "From classic spirits to rare finds, our collection is a journey through flavor.",
        "items": [
          {
            "name": "Homestyle Roasted Mezcal",
            "price": 16.49,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Authentic Crunchy Maraschino",
            "price": 14.75,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": false
          },
          {
            "name": "Fresh Delectable Anisette",
            "price": 15.93,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Deluxe Delectable Frangelico",
            "price": 11.7,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Homestyle Smoked Vodka",
            "price": 15.36,
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
