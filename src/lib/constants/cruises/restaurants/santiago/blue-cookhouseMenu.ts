import { RestaurantMenu } from "@/lib/types/types";

/**
 * Menu data for Blue Cookhouse in santiago
 */
export const santiagoblueCookhouseMenu: RestaurantMenu[] = [
  {
    "title": "Main Course Menu",
    "description": "From appetizers to main courses: flavorful dishes prepared with passion",
    "category": [
      {
        "name": "Signature Dishes",
        "description": "A curated collection of our most iconic and requested plates, each a testament to our culinary excellence.",
        "items": [
          {
            "name": "Authentic Aromatic Local Bounty Harvest Plate (Vegetarian)",
            "price": 36.35,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Hearty Zingy Award-Winning Seafood Boil",
            "price": 28.07,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": false
          },
          {
            "name": "Premium Marinated Signature Truffle Pasta with Aged Pecorino",
            "price": 26.65,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Seasonal Crunchy Chef's Childhood Inspired Creation",
            "price": 24.78,
            "isVegetarian": false,
            "isVegan": true,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Authentic Sizzling Executive Chef's Daily Inspiration Entrée",
            "price": 26.56,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": false,
            "isKosher": true
          },
          {
            "name": "Homestyle Smoked 24-Hour Braised Short Ribs",
            "price": 25.21,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": false,
            "isKosher": true
          },
          {
            "name": "Deluxe Tangy Legendary Prime Rib",
            "price": 34.26,
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
        "description": "A showcase of our chef's creativity, featuring dishes that are as unique as they are delicious.",
        "items": [
          {
            "name": "Gourmet Vegetarian Wellington",
            "price": 37.83,
            "isVegetarian": false,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Cold-Smoked Delicacy",
            "price": 28.83,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Tomahawk Ribeye for Two",
            "price": 25.4,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Heirloom Recipe from Chef's Family",
            "price": 39.02,
            "isVegetarian": false,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Tableside Flambé Preparation",
            "price": 33.72,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": false,
            "isKosher": true
          }
        ]
      },
      {
        "name": "Appetizers",
        "description": "Thoughtfully prepared small plates to begin your culinary experience with elegance and taste.",
        "items": [
          {
            "name": "Cheese Platter",
            "price": 11.58,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Cheese Nachos",
            "price": 11.9,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Deviled Eggs",
            "price": 8.42,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Mini Empanadas",
            "price": 12.42,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Zucchini Fries",
            "price": 10.51,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Mini Crab Cakes",
            "price": 12.16,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": false
          },
          {
            "name": "Mozzarella Sticks",
            "price": 15.01,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Spring Rolls",
            "price": 12.66,
            "isVegetarian": true,
            "isVegan": false,
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
            "name": "Pho",
            "price": 7.65,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Borscht",
            "price": 12.04,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Italian Wedding Soup",
            "price": 10.18,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Turkey and Wild Rice Soup",
            "price": 7.82,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": false
          }
        ]
      },
      {
        "name": "Salads",
        "description": "From classic combinations to innovative creations, our salads are a feast for the senses.",
        "items": [
          {
            "name": "Apple Pecan Salad",
            "price": 14.12,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Avocado Corn Salad",
            "price": 15.95,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Chef Salad",
            "price": 10.77,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Watermelon Feta Salad",
            "price": 13.55,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Waldorf Salad",
            "price": 9.18,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          }
        ]
      },
      {
        "name": "Main Courses",
        "description": "From the kitchen to your table, our mains are crafted to delight and satisfy.",
        "items": [
          {
            "name": "Authentic Grilled Pizza",
            "price": 28.15,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Deluxe Flavorful Mac and Cheese",
            "price": 19.07,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Hearty Herbed Pho",
            "price": 25.82,
            "isVegetarian": false,
            "isVegan": true,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "House Special Delectable Pulled Pork Sandwich",
            "price": 29.32,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": false,
            "isKosher": false
          },
          {
            "name": "Gourmet Luscious Fajitas",
            "price": 30.79,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Fresh Succulent Chili con Carne",
            "price": 20.31,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Traditional Hearty Risotto",
            "price": 23.61,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Fresh Comforting Grilled Tofu",
            "price": 20.79,
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
        "description": "Sourced from local fisheries, our seafood dishes are as fresh as they come.",
        "items": [
          {
            "name": "Blackened Mahi-Mahi with Pineapple Salsa",
            "price": 32.32,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Classic British Fish and Chips",
            "price": 27.42,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Traditional Provençal Bouillabaisse",
            "price": 31.31,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Smoked Salmon Platter with Dill Crème",
            "price": 22.44,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Pan-Seared Scallops with Pea Purée",
            "price": 28.11,
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
        "description": "From roasted vegetables to artisanal grains, our sides are a perfect match for any dish.",
        "items": [
          {
            "name": "Crispy Zucchini Fritters",
            "price": 6.55,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Roasted Root Vegetables",
            "price": 5.39,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Steamed Jasmine Rice",
            "price": 9.72,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Grilled Zucchini and Peppers",
            "price": 5.24,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Creamy Colcannon (Irish Potato Mash)",
            "price": 9.18,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Homestyle Baked Beans",
            "price": 9.7,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          }
        ]
      },
      {
        "name": "Non-Alcoholic Beverages",
        "description": "Crafted beverages that offer a sophisticated alternative to traditional drinks.",
        "items": [
          {
            "name": "Hearty Succulent Milkshake",
            "price": 6.9,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Deluxe Grilled Coffee",
            "price": 6.27,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Authentic Pan-seared Soda",
            "price": 7.2,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Fresh Flaky Juice",
            "price": 5.91,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Fresh Exquisite Water",
            "price": 6.53,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Traditional Zesty Tea",
            "price": 7.75,
            "isVegetarian": true,
            "isVegan": true,
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
    "description": "Crafted with passion, our baked to perfection desserts are a must-try",
    "category": [
      {
        "name": "Baked Goods",
        "description": "Indulge in our selection of baked treats, each one a labor of love.",
        "items": [
          {
            "name": "Apple Pie",
            "price": 9.81,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Danish Pastries",
            "price": 7.02,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Fruit Galette",
            "price": 10.6,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Baklava",
            "price": 8.8,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Shortbread",
            "price": 9,
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
        "description": "Classic and contemporary frozen delights that cool and satisfy.",
        "items": [
          {
            "name": "Authentic Exquisite Paletas",
            "price": 7.62,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Authentic Pan-seared Semifreddo",
            "price": 10.06,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": false,
            "isKosher": false
          },
          {
            "name": "Handcrafted Delectable Frozen Yogurt",
            "price": 9.31,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Fresh Grilled Frozen Cheesecake",
            "price": 9.66,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Fresh Fried Ice Cream",
            "price": 7.78,
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
    "description": "Enjoy fine cocktails designed to pair effortlessly with our seasonal menu",
    "category": [
      {
        "name": "Signature Cocktails",
        "description": "Each cocktail is a work of art—balanced, bold, and beautifully presented.",
        "items": [
          {
            "name": "Authentic Flaky Mai Tai",
            "price": 14.13,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": false,
            "isKosher": true
          },
          {
            "name": "Handcrafted Hearty Martini",
            "price": 10.99,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Hearty Appetizing Negroni",
            "price": 10.41,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Fresh Creamy Cosmopolitan",
            "price": 15.15,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Premium Grilled Manhattan",
            "price": 15.26,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Gourmet Spicy Margarita",
            "price": 11.91,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Premium Herbed Old Fashioned",
            "price": 10.92,
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
            "name": "Traditional Aromatic Cabernet Franc",
            "price": 12.17,
            "isVegetarian": false,
            "isVegan": true,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Authentic Mouthwatering Sémillon",
            "price": 9.94,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": false,
            "isKosher": false
          },
          {
            "name": "Fresh Juicy Pinot Noir",
            "price": 12.31,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Traditional Spicy Pinot Grigio",
            "price": 9.28,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Hearty Flaky Gamay",
            "price": 13.25,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Deluxe Stuffed Sauvignon Blanc",
            "price": 10.37,
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
        "description": "A thoughtful balance of classic favorites and rare, small-batch discoveries.",
        "items": [
          {
            "name": "Grappa",
            "price": 14.76,
            "isVegetarian": false,
            "isVegan": true,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Maraschino",
            "price": 16.19,
            "isVegetarian": false,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Tequila",
            "price": 17.53,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Grand Marnier",
            "price": 15.23,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Calvados",
            "price": 17.52,
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
