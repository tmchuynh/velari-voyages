import { RestaurantMenu } from "@/lib/types/types";

/**
 * Menu data for Rhine Brasserie in berlin
 */
export const berlinrhineBrasserieMenu: RestaurantMenu[] = [
  {
    "title": "Main Course Menu",
    "description": "Our carefully crafted selection of hearty dishes",
    "category": [
      {
        "name": "Signature Dishes",
        "items": [
          {
            "name": "Secret Recipe Bouillabaisse",
            "description": "A fruity dish braised with wild-caught fish and plated with precision.",
            "price": 26.29,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Dry-Aged Tomahawk Steak",
            "description": "A refreshing dish hand-rolled with seasonal ingredients and offered as a tasting portion.",
            "price": 24.51,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": false
          },
          {
            "name": "Fresh Crunchy Award-Winning Seafood Boil",
            "description": "Presented on a wooden board and seasoned to perfection using artisanal elements.",
            "price": 25.61,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Organic Pan-seared Charcoal Grilled Iberico Pork",
            "description": "A zesty dish slow-cooked with hand-picked vegetables and beautifully presented.",
            "price": 30.73,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": false,
            "isKosher": false
          },
          {
            "name": "Chef's Tender Flambéed Tableside Specialty",
            "description": "Layered with care and caramelized to perfection using organic ingredients.",
            "price": 26.54,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": false,
            "isKosher": true
          }
        ]
      },
      {
        "name": "Main Courses",
        "items": [
          {
            "name": "Traditional Flavorful Stir-fry",
            "description": "Beautifully presented and composed to perfection using sun-ripened fruits.",
            "price": 20.02,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Fresh Herbed Roast Duck",
            "description": "Our tangy specialty, braised with free-range meats and attractively arranged.",
            "price": 19.04,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": false,
            "isKosher": false
          },
          {
            "name": "Chef's Steamed Coq au Vin",
            "description": "A bold dish prepared with non-GMO produce and offered as a tasting portion.",
            "price": 30.44,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Fresh Crunchy Grilled Tofu",
            "description": "Our savory specialty, roasted with grass-fed beef and offered as a tasting portion.",
            "price": 29.61,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Signature Herbed Lasagna",
            "description": "Beautifully presented and sautéed to perfection using aged cheeses.",
            "price": 28.2,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Pho",
            "description": "Our rich specialty, infused with seasonal ingredients and offered as a tasting portion.",
            "price": 24.87,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Signature Grilled Fish and Chips",
            "description": "This sweet favorite is sautéed using hand-picked vegetables, then served family-style.",
            "price": 27.6,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Local Zesty Lentil Stew",
            "description": "Our sweet specialty, pan-seared with grass-fed beef and drizzled with finesse.",
            "price": 28.46,
            "isVegetarian": true,
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
            "name": "Lemon-Herb Calamari Steak",
            "description": "Elegantly served and seasoned to perfection using microgreens.",
            "price": 35.73,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": false,
            "isKosher": false
          },
          {
            "name": "Classic Flaky Grilled Lobster with Lemon Butter",
            "description": "A nutty dish created with chef-selected spices and styled for visual appeal.",
            "price": 35.87,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": false
          },
          {
            "name": "New England Lobster Roll",
            "description": "Our creamy specialty, seasoned with microgreens and stacked artistically.",
            "price": 27.88,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": false
          },
          {
            "name": "Chef's Grilled Stuffed Flounder with Crab and Spinach",
            "description": "This rich favorite is smoked using heritage grains, then accompanied by a tasteful garnish.",
            "price": 35.54,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": false
          },
          {
            "name": "Crab-Stuffed Mushrooms",
            "description": "This fruity favorite is braised using heritage grains, then artfully plated.",
            "price": 30.83,
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
            "name": "Organic Sweet Pistachio Ice Cream",
            "description": "This rich favorite is braised using cold-pressed oils, then plated with precision.",
            "price": 11.94,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Classic Braised Tiramisu",
            "description": "Our bold specialty, smoked with heirloom tomatoes and accompanied by a tasteful garnish.",
            "price": 9.97,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Classic Exquisite Cheesecake",
            "description": "A complex dish created with handmade pasta and styled for visual appeal.",
            "price": 10.75,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Pistachio Baklava",
            "description": "This nutty favorite is marinated using locally sourced produce, then offered as a tasting portion.",
            "price": 9.8,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Banana Split",
            "description": "Our robust specialty, grilled with non-GMO produce and attractively arranged.",
            "price": 10.31,
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
    "description": "A selection of fine alcoholic beverages to complement your meal",
    "category": [
      {
        "name": "Signature Cocktails",
        "items": [
          {
            "name": "Fresh Herbed Bourbon",
            "description": "Served on rustic ware and sautéed to perfection using natural sweeteners.",
            "price": 11.01,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Tom Collins",
            "description": "Beautifully presented and stir-fried to perfection using aged cheeses.",
            "price": 13.48,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Espresso Martini",
            "description": "A complex dish infused with heritage grains and beautifully presented.",
            "price": 11.98,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Traditional Crunchy Tennessee Whiskey",
            "description": "Our creamy specialty, prepared with sustainable seafood and garnished to perfection.",
            "price": 12.73,
            "isVegetarian": false,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "House Special Juicy Martini",
            "description": "This pungent favorite is slow-cooked using organic ingredients, then served on rustic ware.",
            "price": 12.27,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          }
        ]
      },
      {
        "name": "Wine Selection",
        "items": [
          {
            "name": "Scotch",
            "description": "A fruity dish composed with microgreens and neatly composed.",
            "price": 11.14,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Whiskey Sour",
            "description": "A rich dish charred with sun-ripened fruits and stacked artistically.",
            "price": 14.35,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Whiskey",
            "description": "A sweet dish prepared with natural sweeteners and artfully plated.",
            "price": 9.36,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Signature Fried Pisco",
            "description": "Served family-style and slow-cooked to perfection using locally sourced produce.",
            "price": 14.25,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Mead",
            "description": "This smoky favorite is slow-cooked using finest quality ingredients, then beautifully presented.",
            "price": 10.89,
            "isVegetarian": false,
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
            "name": "Chef's Crunchy Port",
            "description": "This peppery favorite is prepared using non-GMO produce, then garnished to perfection.",
            "price": 9.83,
            "isVegetarian": false,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Cosmopolitan",
            "description": "Our subtle specialty, made with natural sweeteners and elegantly served.",
            "price": 9.69,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Cider",
            "description": "Served with flair and hand-rolled to perfection using free-range meats.",
            "price": 11.5,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Signature Herbed Mead",
            "description": "Our subtle specialty, sautéed with natural sweeteners and served family-style.",
            "price": 10.64,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Fresh Satisfying Vermouth",
            "description": "Attractively arranged and stir-fried to perfection using free-range meats.",
            "price": 13.09,
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
