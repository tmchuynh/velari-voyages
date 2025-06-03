import { RestaurantMenu } from "@/lib/types/types";

/**
 * Menu data for Golden Table in venice
 */
export const venicegoldenTableMenu: RestaurantMenu[] = [
  {
    "title": "Main Course Menu",
    "description": "Our carefully crafted selection of hearty dishes",
    "category": [
      {
        "name": "Signature Dishes",
        "items": [
          {
            "name": "Chef's Special Surf and Turf",
            "description": "Served family-style and roasted to perfection using farm-fresh eggs.",
            "price": 35.42,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Chef's Childhood Inspired Creation",
            "description": "Styled for visual appeal and sautéed to perfection using house-made sauces.",
            "price": 25.05,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Fresh Tangy Executive Chef's Daily Inspiration Entrée",
            "description": "Served with flair and pan-seared to perfection using house-made sauces.",
            "price": 37.47,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Classic Crispy Seasonal Tasting Platter",
            "description": "A balanced dish grilled with free-range meats and drizzled with finesse.",
            "price": 31.44,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "House Special Juicy Charcoal Grilled Iberico Pork",
            "description": "This floral favorite is hand-folded using artisanal elements, then stacked artistically.",
            "price": 37.31,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": false,
            "isKosher": true
          }
        ]
      },
      {
        "name": "Main Courses",
        "items": [
          {
            "name": "Jambalaya",
            "description": "This rich favorite is fire-roasted using wild-caught fish, then served with flair.",
            "price": 26.5,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Fresh Delectable Spaghetti Bolognese",
            "description": "Layered with care and grilled to perfection using artisanal elements.",
            "price": 21.08,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Fresh Herbed Moussaka",
            "description": "This creamy favorite is prepared using microgreens, then offered as a tasting portion.",
            "price": 23.83,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Shish Kebabs",
            "description": "This buttery favorite is seasoned using seasonal ingredients, then stacked artistically.",
            "price": 22.42,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Teriyaki Chicken",
            "description": "Our spicy specialty, poached with locally sourced produce and artfully plated.",
            "price": 20.47,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": false,
            "isKosher": true
          },
          {
            "name": "Local Zingy Quiche",
            "description": "A subtle dish whipped with cold-pressed oils and stacked artistically.",
            "price": 28.31,
            "isVegetarian": true,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Katsu Curry",
            "description": "Our briny specialty, braised with heirloom tomatoes and neatly composed.",
            "price": 26.04,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Pho",
            "description": "This rich favorite is assembled using locally sourced produce, then neatly composed.",
            "price": 21.43,
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
        "items": [
          {
            "name": "Fresh Savory Miso-Marinated Chilean Sea Bass",
            "description": "Accompanied by a tasteful garnish and fire-roasted to perfection using sun-ripened fruits.",
            "price": 27.62,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Signature Irresistible Alaskan King Crab Legs with Drawn Butter",
            "description": "A balanced dish charred with sustainable seafood and accompanied by a tasteful garnish.",
            "price": 29.81,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": false
          },
          {
            "name": "Organic Aromatic Smoked Salmon Platter with Dill Crème",
            "description": "A subtle dish hand-folded with grass-fed beef and styled for visual appeal.",
            "price": 22.22,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": false
          },
          {
            "name": "Traditional Provençal Bouillabaisse",
            "description": "A buttery dish infused with locally foraged herbs and artfully plated.",
            "price": 24.67,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Signature Grilled Steamed Littleneck Clams in Garlic Broth",
            "description": "Presented on a wooden board and cooked to perfection using hand-picked vegetables.",
            "price": 23.51,
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
        "name": "Sweet Treats",
        "items": [
          {
            "name": "House Special Sweet Fruit Tart",
            "description": "Presented on a wooden board and assembled to perfection using locally sourced produce.",
            "price": 10.06,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Mango Sticky Rice",
            "description": "Our buttery specialty, created with seasonal ingredients and stacked artistically.",
            "price": 9.67,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Chocolate Fondue",
            "description": "This rich favorite is charred using cold-pressed oils, then beautifully presented.",
            "price": 11.57,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Signature Crunchy Pineapple Upside-down Cake",
            "description": "Our robust specialty, cooked with premium components and layered with care.",
            "price": 10.99,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Signature Exquisite Pineapple Tart",
            "description": "A refreshing dish whipped with premium components and plated with precision.",
            "price": 11.72,
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
    "description": "A selection of fine alcoholic beverages to complement your meal",
    "category": [
      {
        "name": "Signature Cocktails",
        "items": [
          {
            "name": "Fresh Pan-seared Cognac",
            "description": "A creamy dish assembled with heirloom tomatoes and garnished to perfection.",
            "price": 14.62,
            "isVegetarian": false,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Chef's Sautéed Grappa",
            "description": "A creamy dish composed with seasonal ingredients and attractively arranged.",
            "price": 14.23,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Chef's Marinated Cava",
            "description": "Served family-style and glazed to perfection using hand-picked vegetables.",
            "price": 9.82,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "House Special Juicy Brandy",
            "description": "A aromatic dish caramelized with handmade pasta and nestled in a ceramic bowl.",
            "price": 10.8,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Reposado Tequila",
            "description": "A rich dish smoked with non-GMO produce and accompanied by a tasteful garnish.",
            "price": 11.62,
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
            "name": "Port",
            "description": "This floral favorite is assembled using grass-fed beef, then styled for visual appeal.",
            "price": 13.66,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Organic Luscious Cognac",
            "description": "Our zesty specialty, composed with organic ingredients and stacked artistically.",
            "price": 9.27,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Signature Delectable Whiskey Sour",
            "description": "Our zesty specialty, cooked with farm-fresh eggs and neatly composed.",
            "price": 12.05,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Bourbon",
            "description": "A rich dish prepared with sustainable seafood and served with flair.",
            "price": 12.15,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Reposado Tequila",
            "description": "This aromatic favorite is seasoned using seasonal ingredients, then garnished to perfection.",
            "price": 12.18,
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
        "items": [
          {
            "name": "Irish Whiskey",
            "description": "This tangy favorite is pan-seared using handmade pasta, then served with flair.",
            "price": 10.68,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Organic Pan-seared Mead",
            "description": "A aromatic dish created with seasonal ingredients and attractively arranged.",
            "price": 11.45,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Organic Enticing Old Fashioned",
            "description": "Our savory specialty, braised with locally sourced produce and beautifully presented.",
            "price": 9.21,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Vermouth",
            "description": "Plated with precision and caramelized to perfection using locally foraged herbs.",
            "price": 14.22,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Wine",
            "description": "Layered with care and cooked to perfection using artisanal elements.",
            "price": 12.63,
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
