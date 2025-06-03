import { ResturantMenu } from "@/lib/types/types";

export const losAngelesprovidenceMenu: ResturantMenu[] = [
  {
    title: "Tasting Menus",
    description:
      "Chef Michael Cimarusti's award-winning seasonal tasting experiences showcasing sustainable seafood",
    category: [
      {
        name: "Signature Tasting Experiences",
        items: [
          {
            name: "Providence Tasting Menu",
            description:
              "Our signature chef's tasting menu featuring the finest seasonal ingredients (12 courses)",
            price: 275,
            isGlutenFree: false,
          },
          {
            name: "Seasonal Tasting Menu",
            description:
              "A curated exploration of the season's best offerings (9 courses)",
            price: 22,
            isGlutenFree: false,
          },
          {
            name: "Market Tasting Menu",
            description:
              "A more concise tasting experience featuring the day's best market selections (6 courses)",
            price: 175,
            isGlutenFree: false,
          },
        ],
      },
    ],
  },
  {
    title: "First Courses",
    description:
      "Delicate starters showcasing pristine ingredients and refined technique",
    category: [
      {
        name: "Appetizers",
        items: [
          {
            name: "Santa Barbara Sea Urchin",
            description:
              "Served in a farm egg with champagne beurre blanc and caviar",
            price: 38,
            isGlutenFree: true,
          },
          {
            name: "Big Eye Tuna",
            description: "Tartare with avocado, radish, wasabi and soy",
            price: 32,
            isGlutenFree: true,
          },
          {
            name: "Wild Japanese Tai Sashimi",
            description: "With cucumber, sudachi, white soy and shiso",
            price: 36,
            isGlutenFree: false,
          },
          {
            name: "Kanpachi Crudo",
            description: "With citrus, olive oil and sea salt",
            price: 34,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Main Courses",
    description:
      "Sustainable seafood and seasonal specialties prepared with precision and respect for the ingredients",
    category: [
      {
        name: "From the Sea",
        items: [
          {
            name: "Wild King Salmon",
            description: "Wood-grilled with summer squash, corn and basil",
            price: 58,
            isGlutenFree: true,
          },
          {
            name: "Channel Islands White Sea Bass",
            description: "With fennel, citrus and saffron",
            price: 54,
            isGlutenFree: true,
          },
          {
            name: "Maine Lobster",
            description:
              "Butter-poached with seasonal vegetables and lobster emulsion",
            price: 72,
            isGlutenFree: true,
          },
          {
            name: "Wild California Black Cod",
            description: "Miso-marinated with shitake mushrooms and dashi",
            price: 52,
            isGlutenFree: false,
          },
        ],
      },
      {
        name: "From the Land",
        items: [
          {
            name: "Sonoma Duck",
            description: "Breast and confit leg with cherries and turnips",
            price: 56,
            isGlutenFree: true,
          },
          {
            name: "A5 Wagyu Beef",
            description:
              "Japanese A5 Miyazaki Wagyu with seasonal accompaniments",
            price: 95,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Cheese & Dessert",
    description:
      "Artisanal cheeses and innovative desserts to complete your dining experience",
    category: [
      {
        name: "Cheese Selection",
        items: [
          {
            name: "Artisanal Cheese Plate",
            description:
              "Chef's selection of three artisanal cheeses with accompaniments",
            price: 28,
            isVegetarian: true,
            isGlutenFree: false,
          },
        ],
      },
      {
        name: "Desserts",
        items: [
          {
            name: "Chocolate Cremeux",
            description: "With hazelnut praline and salted caramel ice cream",
            price: 17,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Seasonal Fruit Composition",
            description: "With herb sorbet and vanilla shortbread",
            price: 15,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Yuzu Souffle",
            description: "With crème anglaise (please allow 20 minutes)",
            price: 18,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
];
