import { RestaurantMenu } from "@/lib/types/types";

/**
 * Menu data for Golden Eatery in montreal
 */
export const montrealgoldenEateryMenu: RestaurantMenu[] = [
  {
    "title": "Main Course Menu",
    "description": "Our carefully crafted selection of hearty dishes",
    "category": [
      {
        "name": "Signature Dishes",
        "items": [
          {
            "name": "Restaurant's Namesake Signature Entrée",
            "description": "A sweet dish charred with seasonal ingredients and beautifully presented.",
            "price": 33.47,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Fresh Grilled Heritage Recipe Lamb Shank",
            "description": "Our peppery specialty, braised with cold-pressed oils and accompanied by a tasteful garnish.",
            "price": 24.94,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": false,
            "isKosher": false
          },
          {
            "name": "Traditional Sizzling Dry-Aged Tomahawk Steak",
            "description": "Drizzled with finesse and made to perfection using artisanal elements.",
            "price": 30.12,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": false
          }
        ]
      },
      {
        "name": "Appetizers",
        "items": [
          {
            "name": "Local Steamed Teriyaki Chicken",
            "description": "A spicy dish grilled with natural sweeteners and nestled in a ceramic bowl.",
            "price": 25.92,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": false,
            "isKosher": false
          },
          {
            "name": "Organic Succulent Stuffed Peppers",
            "description": "This smoky favorite is prepared using aged cheeses, then served on rustic ware.",
            "price": 28.66,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Stuffed Zucchini Boats",
            "description": "This aromatic favorite is grilled using sustainable seafood, then presented on a wooden board.",
            "price": 24.4,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Stir-fry",
            "description": "A briny dish crafted with heirloom tomatoes and accompanied by a tasteful garnish.",
            "price": 27.23,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Enchiladas",
            "description": "Presented on a wooden board and composed to perfection using heirloom tomatoes.",
            "price": 18.28,
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
        "items": [
          {
            "name": "Moussaka",
            "description": "A spicy dish grilled with heirloom tomatoes and garnished to perfection.",
            "price": 18.34,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Grilled Tofu",
            "description": "A complex dish whipped with microgreens and presented on a wooden board.",
            "price": 25.94,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Organic Spicy Katsu Curry",
            "description": "This pungent favorite is cooked using finest quality ingredients, then artfully plated.",
            "price": 29.77,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Pulled Pork Sandwich",
            "description": "A creamy dish fire-roasted with sustainable seafood and accompanied by a tasteful garnish.",
            "price": 23.82,
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
        "items": [
          {
            "name": "Chef's Luscious Chicken Parmesan",
            "description": "This robust favorite is assembled using grass-fed beef, then served on rustic ware.",
            "price": 19.21,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": false
          },
          {
            "name": "House Special Juicy Steak",
            "description": "A aromatic dish hand-folded with finest quality ingredients and served family-style.",
            "price": 18.5,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": false,
            "isKosher": true
          },
          {
            "name": "Signature Mouthwatering Grilled Chicken",
            "description": "Styled for visual appeal and composed to perfection using sustainable seafood.",
            "price": 22.1,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": false,
            "isKosher": true
          },
          {
            "name": "Currywurst",
            "description": "A pungent dish glazed with natural sweeteners and nestled in a ceramic bowl.",
            "price": 27.23,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          }
        ]
      },
      {
        "name": "Main Courses",
        "items": [
          {
            "name": "Local Satisfying Lasagna",
            "description": "A bold dish assembled with locally sourced produce and served with flair.",
            "price": 30.98,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Enchiladas",
            "description": "Garnished to perfection and grilled to perfection using artisanal elements.",
            "price": 20.99,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Stir-fry",
            "description": "Our savory specialty, crafted with grass-fed beef and presented on a wooden board.",
            "price": 21.69,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Signature Grilled Chili con Carne",
            "description": "This balanced favorite is prepared using sustainable seafood, then elegantly served.",
            "price": 25.7,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Salmon",
            "description": "This aromatic favorite is stir-fried using free-range meats, then nestled in a ceramic bowl.",
            "price": 26.44,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": false
          },
          {
            "name": "Mac and Cheese",
            "description": "A savory dish created with natural sweeteners and served with flair.",
            "price": 20.13,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Traditional Grilled Paella",
            "description": "This hearty favorite is sautéed using farm-fresh eggs, then drizzled with finesse.",
            "price": 28.64,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Classic Grilled Coq au Vin",
            "description": "A robust dish glazed with finest quality ingredients and nestled in a ceramic bowl.",
            "price": 25.9,
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
        "items": [
          {
            "name": "Chef's Tender Stuffed Peppers",
            "description": "Nestled in a ceramic bowl and poached to perfection using organic ingredients.",
            "price": 19.07,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Classic Sautéed Chili con Carne",
            "description": "Our complex specialty, pan-seared with hand-picked vegetables and presented on a wooden board.",
            "price": 27.33,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Local Golden Vegetable Stir-Fry",
            "description": "Garnished to perfection and created to perfection using cold-pressed oils.",
            "price": 18.02,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Salmon",
            "description": "Accompanied by a tasteful garnish and grilled to perfection using premium components.",
            "price": 25.9,
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
        "items": [
          {
            "name": "Organic Grilled Lemon-Herb Calamari Steak",
            "description": "This complex favorite is composed using grass-fed beef, then garnished to perfection.",
            "price": 27.56,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": false,
            "isKosher": true
          },
          {
            "name": "Seared Tuna Steak with Sesame Crust",
            "description": "A rich dish sautéed with aged cheeses and beautifully presented.",
            "price": 27.22,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": false,
            "isKosher": false
          },
          {
            "name": "Traditional Smoked Garlic Butter Shrimp Skillet",
            "description": "Our sweet specialty, made with locally foraged herbs and accompanied by a tasteful garnish.",
            "price": 25.51,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": false
          },
          {
            "name": "Signature Stuffed Seafood Alfredo with Spinach Fettuccine",
            "description": "A briny dish oven-baked with finest quality ingredients and garnished to perfection.",
            "price": 27.12,
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
    "description": "Indulge in our delicious sweet creations",
    "category": [
      {
        "name": "Frozen Desserts",
        "items": [
          {
            "name": "Eggplant Parmesan",
            "description": "This delicate favorite is fire-roasted using free-range meats, then served with flair.",
            "price": 27.67,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Lamb Chops",
            "description": "Our bold specialty, roasted with house-made sauces and neatly composed.",
            "price": 23.93,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": false,
            "isKosher": false
          },
          {
            "name": "Jambalaya",
            "description": "This complex favorite is pan-seared using organic ingredients, then styled for visual appeal.",
            "price": 22.33,
            "isVegetarian": false,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Thai Curry",
            "description": "Elegantly served and hand-folded to perfection using cultured dairy.",
            "price": 22.6,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Signature Grilled Mac and Cheese",
            "description": "This floral favorite is seasoned using cold-pressed oils, then accompanied by a tasteful garnish.",
            "price": 22.43,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          }
        ]
      },
      {
        "name": "Baked Goods",
        "items": [
          {
            "name": "Tacos",
            "description": "This refreshing favorite is crafted using free-range meats, then beautifully presented.",
            "price": 25.64,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Steak",
            "description": "Beautifully presented and fire-roasted to perfection using organic ingredients.",
            "price": 21.46,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": false,
            "isKosher": false
          },
          {
            "name": "Signature Creamy Seafood Platter",
            "description": "Served with flair and grilled to perfection using cold-pressed oils.",
            "price": 24.68,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Signature Flavorful Coq au Vin",
            "description": "This tangy favorite is pan-seared using heritage grains, then served on rustic ware.",
            "price": 28.51,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Classic Roasted Grilled Chicken",
            "description": "Our creamy specialty, hand-folded with locally foraged herbs and styled for visual appeal.",
            "price": 24.23,
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
    "description": "A selection of fine alcoholic beverages to complement your meal",
    "category": [
      {
        "name": "Signature Cocktails",
        "items": [
          {
            "name": "House Special Savory Margarita",
            "description": "A subtle dish sautéed with seasonal ingredients and nestled in a ceramic bowl.",
            "price": 9.47,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Tom Collins",
            "description": "Layered with care and created to perfection using free-range meats.",
            "price": 12.67,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Espresso Martini",
            "description": "A robust dish glazed with wild-caught fish and offered as a tasting portion.",
            "price": 12.5,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Baijiu",
            "description": "This peppery favorite is roasted using heritage grains, then artfully plated.",
            "price": 14.2,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Cava",
            "description": "A complex dish slow-cooked with organic ingredients and plated with precision.",
            "price": 10.3,
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
        "items": [
          {
            "name": "Traditional Flaky Roast Duck",
            "description": "Served family-style and stir-fried to perfection using sustainable seafood.",
            "price": 23.46,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": false,
            "isKosher": false
          },
          {
            "name": "Signature Pan-seared Lentil Stew",
            "description": "A zesty dish smoked with finest quality ingredients and served family-style.",
            "price": 19.12,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Currywurst",
            "description": "Beautifully presented and fire-roasted to perfection using farm-fresh eggs.",
            "price": 18.56,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Chef's Pan-seared Pulled Pork Sandwich",
            "description": "Offered as a tasting portion and poached to perfection using seasonal ingredients.",
            "price": 19.72,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Pesto Pasta",
            "description": "A subtle dish assembled with handmade pasta and artfully plated.",
            "price": 18.01,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Organic Grilled Steak",
            "description": "Our peppery specialty, oven-baked with free-range meats and offered as a tasting portion.",
            "price": 27.15,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": false
          }
        ]
      },
      {
        "name": "Spirits and Liqueurs",
        "items": [
          {
            "name": "Classic Appetizing Quiche",
            "description": "This smoky favorite is whipped using seasonal ingredients, then accompanied by a tasteful garnish.",
            "price": 20.37,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Organic Crunchy Spaghetti Bolognese",
            "description": "This creamy favorite is pan-seared using farm-fresh eggs, then garnished to perfection.",
            "price": 26.01,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Risotto",
            "description": "A earthy dish prepared with handmade pasta and garnished to perfection.",
            "price": 25.62,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Coq au Vin",
            "description": "This refreshing favorite is composed using seasonal ingredients, then neatly composed.",
            "price": 25.4,
            "isVegetarian": true,
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
