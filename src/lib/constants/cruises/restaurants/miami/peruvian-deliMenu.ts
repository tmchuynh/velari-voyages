import { RestaurantMenu } from "@/lib/types/types";

/**
 * Menu data for Peruvian Deli in miami
 */
export const miamiperuvianDeliMenu: RestaurantMenu[] = [
  {
    "title": "Main Course Menu",
    "description": "A thoughtfully curated lineup of delicious Peruvian dishes to suit every palate",
    "category": [
      {
        "name": "Signature Dishes",
        "description": "Unforgettable signatures that define who we are and what we serve, crafted to perfection.",
        "items": [
          {
            "name": "House Special Juicy Charcoal Grilled Iberico Pork",
            "price": 37.76,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": false,
            "isKosher": false
          },
          {
            "name": "Premium Herbed Heritage Recipe Lamb Shank",
            "price": 33.6,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": false,
            "isKosher": false
          },
          {
            "name": "Premium Grilled Japanese A5 Wagyu with Ponzu Butter",
            "price": 29.41,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Hearty Satisfying Flambéed Tableside Specialty",
            "price": 35.24,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Traditional Satisfying Secret Recipe Bouillabaisse",
            "price": 29.51,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Premium Herbed Founder's Family Recipe Pasta",
            "price": 29.06,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Deluxe Flavorful Seasonal Tasting Menu Experience",
            "price": 26.4,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          }
        ]
      },
      {
        "name": "Chef's Specials",
        "description": "A showcase of our chef's creativity, featuring dishes that are as unique as they are delicious.",
        "items": [
          {
            "name": "Collaborative Limited Edition Special",
            "price": 33.57,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Heirloom Recipe from Chef's Family",
            "price": 36.35,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Charcoal-Grilled Wagyu Beef",
            "price": 34.98,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": false,
            "isKosher": true
          },
          {
            "name": "Freshly Harvested Seasonal Creation",
            "price": 36.33,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Herb-Crusted Rack of Lamb",
            "price": 29.47,
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
        "description": "Traditional and reimagined Peruvian appetizers made for sharing or solo indulgence.",
        "items": [
          {
            "name": "House Special Exquisite Onion Rings",
            "price": 14.28,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Handcrafted Crispy Stuffed Avocado",
            "price": 13.72,
            "isVegetarian": false,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Classic Enticing Baba Ganoush",
            "price": 14.7,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Authentic Smoked Dumplings",
            "price": 14.27,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": false,
            "isKosher": false
          },
          {
            "name": "Authentic Herbed Spinach Artichoke Dip",
            "price": 10.26,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": false
          },
          {
            "name": "Classic Flavorful Garlic Bread",
            "price": 15.91,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "House Special Braised Samosas",
            "price": 11.78,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Gourmet Herbed Calamari",
            "price": 10.8,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": false
          }
        ]
      },
      {
        "name": "Soups",
        "description": "Each spoonful offers depth, comfort, and craftsmanship.",
        "items": [
          {
            "name": "Clam Chowder",
            "price": 11.17,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Minestrone",
            "price": 10.97,
            "isVegetarian": false,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Pho",
            "price": 10.45,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Tortilla Soup",
            "price": 13.57,
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
        "description": "Fresh-picked greens, vibrant produce, and house dressings made in-house daily.",
        "items": [
          {
            "name": "Quinoa Salad",
            "price": 9.73,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Spinach Salad",
            "price": 15.55,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Waldorf Salad",
            "price": 14.02,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Garden Salad",
            "price": 10.66,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Mango Avocado Salad",
            "price": 13.76,
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
        "description": "From hearty classics to modern interpretations, our mains are a feast for the senses.",
        "items": [
          {
            "name": "Homestyle Creamy Teriyaki Chicken",
            "price": 28.4,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": false,
            "isKosher": true
          },
          {
            "name": "Premium Sweet Beef Wellington",
            "price": 28.6,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": false,
            "isKosher": true
          },
          {
            "name": "Deluxe Marinated Vegetable Stir-Fry",
            "price": 28.5,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Traditional Herbed Pho",
            "price": 26.06,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Homestyle Irresistible Pesto Pasta",
            "price": 27.05,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Gourmet Wholesome Katsu Curry",
            "price": 25.88,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Seasonal Herbed Steak",
            "price": 31.54,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": false
          },
          {
            "name": "Classic Sweet Seafood Platter",
            "price": 30.61,
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
        "description": "A celebration of the sea, featuring seasonal catches and artisanal techniques.",
        "items": [
          {
            "name": "Fresh Hearty Oysters Rockefeller with Pernod Cream",
            "price": 25.24,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": false
          },
          {
            "name": "Premium Delicious Cajun Shrimp and Grits",
            "price": 22.17,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": false
          },
          {
            "name": "Organic Pan-seared Maryland Style Crab Cakes",
            "price": 34.85,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": false
          },
          {
            "name": "House Special Wholesome Classic British Fish and Chips",
            "price": 29.76,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": false
          },
          {
            "name": "Seasonal Wholesome Alaskan King Crab Legs with Drawn Butter",
            "price": 30.84,
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
            "name": "Scalloped Potatoes with Thyme",
            "price": 7.35,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Roasted Root Vegetables",
            "price": 7.61,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Sweet Potato Wedges with Smoked Paprika",
            "price": 9.45,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Sweet Corn and Cheddar Fritters",
            "price": 8.22,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Grilled Zucchini and Peppers",
            "price": 6.94,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Corn on the Cob with Chili Lime Butter",
            "price": 7.37,
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
        "description": "Sophisticated non-alcoholic choices made to complement any dish.",
        "items": [
          {
            "name": "Deluxe Pan-seared Coffee",
            "price": 6.43,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Traditional Aromatic Iced Tea",
            "price": 4.86,
            "isVegetarian": false,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Homestyle Succulent Smoothie",
            "price": 7.21,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Handcrafted Crispy Soda",
            "price": 6.97,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Premium Savory Hot Chocolate",
            "price": 6.64,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Classic Baked Milkshake",
            "price": 6.45,
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
    "description": "A hearty selection of desserts that will leave you wanting more",
    "category": [
      {
        "name": "Baked Goods",
        "description": "From flaky croissants to rich breads—our oven's finest, ready to enjoy.",
        "items": [
          {
            "name": "Classic Stuffed Strawberry Shortcake",
            "price": 9.53,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Homestyle Sweet Carrot Cake",
            "price": 9.76,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Homestyle Enticing Cinnamon Rolls",
            "price": 8.52,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Organic Delicious Cobbler",
            "price": 8.51,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Authentic Smoked Custard Tart",
            "price": 9.05,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": false,
            "isKosher": false
          }
        ]
      },
      {
        "name": "Frozen Desserts",
        "description": "Crafted with the finest ingredients, our frozen desserts are a treat for the senses.",
        "items": [
          {
            "name": "Gourmet Hearty Frozen Custard",
            "price": 9.8,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Homestyle Savory Ice Cream",
            "price": 11.95,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Organic Mouthwatering Sherbet",
            "price": 11.71,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Fresh Grilled Ice Cream Cake",
            "price": 9.84,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Fresh Zesty Ice Cream Sandwich",
            "price": 8.63,
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
    "title": "Drinks Menu",
    "description": "From wines to spirits: delicious choices for every palate",
    "category": [
      {
        "name": "Signature Cocktails",
        "description": "From classic twists to innovative new blends, our cocktails are a celebration of flavor.",
        "items": [
          {
            "name": "Cosmopolitan",
            "price": 10.28,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Bloody Mary",
            "price": 11.33,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Mojito",
            "price": 12.51,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Manhattan",
            "price": 12.45,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Negroni",
            "price": 15.33,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Old Fashioned",
            "price": 13.7,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Mai Tai",
            "price": 10.01,
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
        "description": "Our sommelier's picks, chosen for balance, terroir expression, and quality.",
        "items": [
          {
            "name": "Deluxe Spicy Champagne/Sparkling Wine",
            "price": 8.04,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Homestyle Satisfying Malbec",
            "price": 13.97,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Seasonal Grilled Dolcetto",
            "price": 13.43,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Authentic Flavorful Chardonnay",
            "price": 9.91,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Authentic Zesty Cabernet Franc",
            "price": 10.76,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": false,
            "isKosher": false
          },
          {
            "name": "Deluxe Luscious Petit Verdot",
            "price": 10.36,
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
        "description": "A curated collection of fine spirits and artisan liqueurs from around the world.",
        "items": [
          {
            "name": "House Special Crispy Amaretto",
            "price": 15.3,
            "isVegetarian": false,
            "isVegan": true,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Fresh Satisfying Rum",
            "price": 15.95,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Authentic Marinated Cointreau",
            "price": 12.5,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": false,
            "isKosher": true
          },
          {
            "name": "Gourmet Tangy St-Germain",
            "price": 15.9,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Premium Grilled Sambuca",
            "price": 10.15,
            "isVegetarian": true,
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
