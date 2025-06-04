import { RestaurantMenu } from "@/lib/types/types";

/**
 * Menu data for Ginza Eatery in tokyo
 */
export const tokyoginzaEateryMenu: RestaurantMenu[] = [
  {
    "title": "Main Course Menu",
    "description": "Our carefully crafted selection of hearty dishes",
    "category": [
      {
        "name": "Signature Dishes",
        "items": [
          {
            "name": "Chef’s Wild Game Selection",
            "description": "Attractively arranged and prepared to perfection using heirloom tomatoes.",
            "price": 31.87,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Korean BBQ Short Ribs with Kimchi Rice",
            "description": "This balanced favorite is hand-folded using heritage grains, then presented on a wooden board.",
            "price": 30.78,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Flambéed Tableside Specialty",
            "description": "Artfully plated and stir-fried to perfection using cultured dairy.",
            "price": 35.4,
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
        "items": [
          {
            "name": "Lamb Chops",
            "description": "A subtle dish cooked with wild-caught fish and nestled in a ceramic bowl.",
            "price": 26.95,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": false,
            "isKosher": false
          },
          {
            "name": "Shish Kebabs",
            "description": "Our pungent specialty, stir-fried with microgreens and elegantly served.",
            "price": 20.8,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Pesto Pasta",
            "description": "Layered with care and marinated to perfection using grass-fed beef.",
            "price": 24.54,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Steak",
            "description": "A delicate dish hand-rolled with farm-fresh eggs and styled for visual appeal.",
            "price": 28.97,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": false
          },
          {
            "name": "Pho",
            "description": "This floral favorite is created using microgreens, then garnished to perfection.",
            "price": 19.63,
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
            "name": "Fresh Braised Biryani",
            "description": "A pungent dish glazed with finest quality ingredients and neatly composed.",
            "price": 29.15,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Lamb Chops",
            "description": "Our zesty specialty, made with hand-picked vegetables and elegantly served.",
            "price": 22.24,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": false,
            "isKosher": true
          },
          {
            "name": "Thai Curry",
            "description": "Beautifully presented and caramelized to perfection using locally foraged herbs.",
            "price": 18.03,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Classic Satisfying Lasagna",
            "description": "This zesty favorite is braised using organic ingredients, then layered with care.",
            "price": 18.8,
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
        "items": [
          {
            "name": "House Special Irresistible Pizza",
            "description": "This succulent favorite is made using locally foraged herbs, then drizzled with finesse.",
            "price": 29.35,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Vegetable Stir-Fry",
            "description": "This briny favorite is prepared using sustainable seafood, then attractively arranged.",
            "price": 20.83,
            "isVegetarian": false,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Risotto",
            "description": "Our pungent specialty, braised with cultured dairy and layered with care.",
            "price": 28.43,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Teriyaki Chicken",
            "description": "A smoky dish made with house-made sauces and styled for visual appeal.",
            "price": 28.34,
            "isVegetarian": false,
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
            "name": "Pasta Primavera",
            "description": "Presented on a wooden board and crafted to perfection using finest quality ingredients.",
            "price": 18.58,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Signature Mouthwatering Seafood Platter",
            "description": "Served with flair and whipped to perfection using finest quality ingredients.",
            "price": 20.32,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Coq au Vin",
            "description": "This balanced favorite is charred using seasonal ingredients, then nestled in a ceramic bowl.",
            "price": 20.53,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Classic Sizzling Ramen",
            "description": "Our herbaceous specialty, charred with aged cheeses and accompanied by a tasteful garnish.",
            "price": 21.6,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Katsu Curry",
            "description": "A briny dish seasoned with cold-pressed oils and garnished to perfection.",
            "price": 29.17,
            "isVegetarian": false,
            "isVegan": true,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Fresh Spiced Stuffed Zucchini Boats",
            "description": "This bold favorite is poached using wild-caught fish, then styled for visual appeal.",
            "price": 26.26,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Grilled Chicken",
            "description": "Attractively arranged and cooked to perfection using free-range meats.",
            "price": 19.04,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Classic Golden Salmon",
            "description": "Our rich specialty, prepared with finest quality ingredients and beautifully presented.",
            "price": 28.93,
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
        "items": [
          {
            "name": "Salmon",
            "description": "A robust dish crafted with free-range meats and served with flair.",
            "price": 29.88,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": false
          },
          {
            "name": "Local Crunchy Steak",
            "description": "This rich favorite is oven-baked using seasonal ingredients, then offered as a tasting portion.",
            "price": 25.68,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": false,
            "isKosher": true
          },
          {
            "name": "Local Comforting Tagine",
            "description": "Our succulent specialty, glazed with finest quality ingredients and nestled in a ceramic bowl.",
            "price": 18.23,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Beef Burger",
            "description": "Plated with precision and hand-rolled to perfection using wild-caught fish.",
            "price": 20.44,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": false,
            "isKosher": false
          }
        ]
      },
      {
        "name": "Seafood Specialties",
        "items": [
          {
            "name": "Fresh Sautéed Shrimp Scampi over Linguine",
            "description": "A herbaceous dish glazed with cultured dairy and beautifully presented.",
            "price": 26.29,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": false
          },
          {
            "name": "Steamed Littleneck Clams in Garlic Broth",
            "description": "Attractively arranged and crafted to perfection using natural sweeteners.",
            "price": 24.61,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Cedar Plank Roasted Salmon",
            "description": "Our citrusy specialty, made with finest quality ingredients and elegantly served.",
            "price": 23.39,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": false
          },
          {
            "name": "Maryland Style Crab Cakes",
            "description": "A aromatic dish hand-folded with aged cheeses and presented on a wooden board.",
            "price": 23.05,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": false
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
            "name": "Grilled Chicken",
            "description": "Garnished to perfection and prepared to perfection using hand-picked vegetables.",
            "price": 27.69,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": false
          },
          {
            "name": "Organic Sautéed Salmon",
            "description": "Served on rustic ware and braised to perfection using handmade pasta.",
            "price": 28.6,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": false
          },
          {
            "name": "Katsu Curry",
            "description": "This aromatic favorite is made using microgreens, then attractively arranged.",
            "price": 27.11,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Chef's Sweet Shakshuka",
            "description": "Our hearty specialty, assembled with sustainable seafood and beautifully presented.",
            "price": 25.57,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Steak",
            "description": "Our complex specialty, prepared with seasonal ingredients and attractively arranged.",
            "price": 20.7,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": false
          }
        ]
      },
      {
        "name": "Baked Goods",
        "items": [
          {
            "name": "Classic Sautéed Korma",
            "description": "This sweet favorite is poached using seasonal ingredients, then beautifully presented.",
            "price": 23.32,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Stuffed Zucchini Boats",
            "description": "Our zesty specialty, grilled with premium components and beautifully presented.",
            "price": 18.77,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Ramen",
            "description": "Our herbaceous specialty, smoked with finest quality ingredients and attractively arranged.",
            "price": 22.14,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Signature Herbed Salmon",
            "description": "This bold favorite is slow-cooked using locally foraged herbs, then garnished to perfection.",
            "price": 25.84,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": false
          },
          {
            "name": "House Special Luscious Tagine",
            "description": "Our succulent specialty, charred with sustainable seafood and beautifully presented.",
            "price": 28.64,
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
            "name": "Old Tom Gin",
            "description": "Beautifully presented and oven-baked to perfection using natural sweeteners.",
            "price": 9.55,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Mezcal",
            "description": "Our peppery specialty, made with finest quality ingredients and presented on a wooden board.",
            "price": 10.34,
            "isVegetarian": false,
            "isVegan": true,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Vermouth",
            "description": "Our zesty specialty, stir-fried with grass-fed beef and neatly composed.",
            "price": 11.34,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Cognac",
            "description": "A hearty dish hand-folded with seasonal ingredients and attractively arranged.",
            "price": 10.96,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": true,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Organic Baked Añejo Tequila",
            "description": "A rich dish charred with locally sourced produce and served on rustic ware.",
            "price": 13.77,
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
            "name": "Pho",
            "description": "A subtle dish braised with seasonal ingredients and plated with precision.",
            "price": 18.49,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Classic Marinated Paella",
            "description": "Our fruity specialty, stir-fried with chef-selected spices and accompanied by a tasteful garnish.",
            "price": 25.33,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Korma",
            "description": "This floral favorite is charred using seasonal ingredients, then served with flair.",
            "price": 24.95,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Traditional Exquisite Pizza",
            "description": "Beautifully presented and created to perfection using aged cheeses.",
            "price": 24.67,
            "isVegetarian": true,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Biryani",
            "description": "Our complex specialty, crafted with sustainable seafood and accompanied by a tasteful garnish.",
            "price": 24.39,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Grilled Tofu",
            "description": "This rich favorite is smoked using sustainable seafood, then attractively arranged.",
            "price": 25.56,
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
            "name": "Grilled Chicken",
            "description": "A bold dish cooked with wild-caught fish and attractively arranged.",
            "price": 28.55,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": false,
            "isKosher": false
          },
          {
            "name": "Signature Juicy Burrito",
            "description": "A herbaceous dish assembled with aged cheeses and served with flair.",
            "price": 22.29,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Stuffed Peppers",
            "description": "Neatly composed and whipped to perfection using premium components.",
            "price": 18.64,
            "isVegetarian": false,
            "isVegan": false,
            "isGlutenFree": false,
            "isHalal": true,
            "isKosher": true
          },
          {
            "name": "Fresh Grilled Lentil Stew",
            "description": "Our refreshing specialty, grilled with grass-fed beef and neatly composed.",
            "price": 21.19,
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
