import { RestaurantMenu } from "@/lib/types/types";

/**
 * Menu data for The Cafe in galveston
 */
export const galvestontheCafeMenu: RestaurantMenu[] = [
  {
    "title": "Main Course Menu",
    "description": "Our carefully crafted selection of hearty dishes",
    "category": [
      {
        "name": "Signature Dishes",
        "items": [
          {
            "name": "Local Bounty Harvest Plate (Vegetarian)",
            "description": "This hearty favorite is made using natural sweeteners, then drizzled with finesse.",
            "price": 32.92,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Caribbean-Style Jerk Duck with Mango Slaw",
            "description": "Our sweet specialty, prepared with seasonal ingredients and attractively arranged.",
            "price": 27.26,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": false,
            "isKosher": true
          },
          {
            "name": "House Special Crunchy House Famous Duck Confit",
            "description": "This savory favorite is cooked using artisanal elements, then nestled in a ceramic bowl.",
            "price": 27.77,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": false,
            "isKosher": false
          },
          {
            "name": "Chef's Special Surf and Turf",
            "description": "This fruity favorite is smoked using locally sourced produce, then served family-style.",
            "price": 28.34,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Signature Enticing Korean BBQ Short Ribs with Kimchi Rice",
            "description": "A delicate dish glazed with grass-fed beef and attractively arranged.",
            "price": 27.71,
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
        "items": [
          {
            "name": "Traditional Sautéed Shish Kebabs",
            "description": "Our briny specialty, cooked with sun-ripened fruits and presented on a wooden board.",
            "price": 20.07,
            "isVegetarian": false,
            "isVegan": true,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Tacos",
            "description": "Our herbaceous specialty, prepared with house-made sauces and accompanied by a tasteful garnish.",
            "price": 24.87,
            "isVegetarian": false,
            "isVegan": true,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Steak",
            "description": "This briny favorite is made using artisanal elements, then layered with care.",
            "price": 30.77,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Traditional Exquisite Quiche",
            "description": "Our subtle specialty, prepared with grass-fed beef and beautifully presented.",
            "price": 26.29,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Grilled Tofu",
            "description": "This aromatic favorite is poached using handmade pasta, then neatly composed.",
            "price": 18.72,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Chef's Spicy Coq au Vin",
            "description": "This nutty favorite is marinated using locally foraged herbs, then nestled in a ceramic bowl.",
            "price": 20.67,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "House Special Smoked Spaghetti Bolognese",
            "description": "A nutty dish oven-baked with seasonal ingredients and nestled in a ceramic bowl.",
            "price": 31.49,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Paella",
            "description": "A nutty dish prepared with sustainable seafood and nestled in a ceramic bowl.",
            "price": 26.22,
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
        "items": [
          {
            "name": "Traditional Grilled Alaskan King Crab Legs with Drawn Butter",
            "description": "Neatly composed and seasoned to perfection using cultured dairy.",
            "price": 34.18,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Local Sizzling Seafood Risotto with Saffron",
            "description": "This smoky favorite is cooked using seasonal ingredients, then served with flair.",
            "price": 28.01,
            "isVegetarian": false,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Signature Mouthwatering Hearty Italian Cioppino",
            "description": "Our buttery specialty, marinated with farm-fresh eggs and presented on a wooden board.",
            "price": 26.89,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Stuffed Flounder with Crab and Spinach",
            "description": "A aromatic dish poached with organic ingredients and drizzled with finesse.",
            "price": 33.53,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": false
          },
          {
            "name": "Garlic Butter Shrimp Skillet",
            "description": "Our buttery specialty, stir-fried with hand-picked vegetables and artfully plated.",
            "price": 34.03,
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
    "title": "Dessert Menu",
    "description": "Indulge in our delicious sweet creations",
    "category": [
      {
        "name": "Sweet Treats",
        "items": [
          {
            "name": "Signature Delectable Crepes",
            "description": "This rich favorite is grilled using cold-pressed oils, then layered with care.",
            "price": 7.73,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Classic Marinated Chocolate Chip Cookies",
            "description": "A succulent dish pan-seared with microgreens and offered as a tasting portion.",
            "price": 8.54,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Chocolate Mousse",
            "description": "A bold dish charred with artisanal elements and presented on a wooden board.",
            "price": 10.89,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Crème Brûlée",
            "description": "A earthy dish caramelized with free-range meats and styled for visual appeal.",
            "price": 8.12,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Fresh Creamy Cookies",
            "description": "Presented on a wooden board and smoked to perfection using sustainable seafood.",
            "price": 11.84,
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
    "description": "A selection of fine alcoholic beverages to complement your meal",
    "category": [
      {
        "name": "Signature Cocktails",
        "items": [
          {
            "name": "Rum",
            "description": "Our spicy specialty, fire-roasted with grass-fed beef and styled for visual appeal.",
            "price": 11.7,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Port",
            "description": "Layered with care and oven-baked to perfection using finest quality ingredients.",
            "price": 13.79,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Fresh Grilled Sake",
            "description": "Layered with care and prepared to perfection using grass-fed beef.",
            "price": 10.59,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Blanco Tequila",
            "description": "A citrusy dish hand-rolled with locally foraged herbs and served with flair.",
            "price": 10.3,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Mezcal",
            "description": "Accompanied by a tasteful garnish and oven-baked to perfection using artisanal elements.",
            "price": 13.6,
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
        "items": [
          {
            "name": "Arak",
            "description": "Our citrusy specialty, smoked with seasonal ingredients and served with flair.",
            "price": 10.33,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Fresh Flavorful Sake",
            "description": "A spicy dish cooked with house-made sauces and accompanied by a tasteful garnish.",
            "price": 13.49,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Classic Spiced Shochu",
            "description": "Our buttery specialty, marinated with sun-ripened fruits and attractively arranged.",
            "price": 13.12,
            "isVegetarian": false,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Organic Pan-seared Rum",
            "description": "A hearty dish grilled with farm-fresh eggs and drizzled with finesse.",
            "price": 12.87,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Organic Pan-seared Manhattan",
            "description": "This nutty favorite is stir-fried using cultured dairy, then artfully plated.",
            "price": 11.69,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          }
        ]
      },
      {
        "name": "Spirits and Liqueurs",
        "items": [
          {
            "name": "Tennessee Whiskey",
            "description": "A refreshing dish made with natural sweeteners and beautifully presented.",
            "price": 12.39,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Signature Flaky Bloody Mary",
            "description": "This buttery favorite is roasted using sun-ripened fruits, then plated with precision.",
            "price": 13.79,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Classic Satisfying Pina Colada",
            "description": "Beautifully presented and poached to perfection using locally sourced produce.",
            "price": 11.17,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Absinthe",
            "description": "Our herbaceous specialty, oven-baked with artisanal elements and accompanied by a tasteful garnish.",
            "price": 13.43,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Fresh Marinated Pisco",
            "description": "Styled for visual appeal and assembled to perfection using locally foraged herbs.",
            "price": 13.68,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          }
        ]
      }
    ]
  }
];
