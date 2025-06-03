import { ResturantMenu } from "@/lib/types/types";

export const montrealauPiedDeCochonMenu: ResturantMenu[] = [
  {
    title: "Entrées",
    description:
      "Indulgent starters showcasing Chef Martin Picard's rich Québécois cuisine",
    category: [
      {
        name: "Appetizers",
        items: [
          {
            name: "Foie Gras Poutine",
            description:
              "Legendary dish with Quebec cheese curds, gravy, and generous foie gras",
            price: 28,
            isGlutenFree: true,
          },
          {
            name: "Plogue à Champlain",
            description:
              "Buckwheat pancake with potatoes, bacon, and foie gras topped with maple syrup and cheddar",
            price: 26,
            isGlutenFree: false,
          },
          {
            name: "Cromesquis de Foie Gras",
            description:
              "Deep-fried foie gras bites with a liquid center (2 pieces)",
            price: 17,
            isGlutenFree: false,
          },
          {
            name: "Tartare de Bison",
            description:
              "Bison tartare with mustard, capers, and house-made chips",
            price: 22,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Fruits de Mer",
    description: "Fresh seafood with decadent Québécois twists",
    category: [
      {
        name: "Seafood",
        items: [
          {
            name: "Seafood Platter",
            description:
              "Selection of fresh seafood including lobster, crab, oysters, and shrimp",
            price: 135,
            isGlutenFree: true,
          },
          {
            name: "Lobster with PDC Sauce",
            description: "Whole lobster in a rich cream and cognac sauce",
            price: 65,
            isGlutenFree: true,
          },
          {
            name: "Oysters",
            description:
              "Fresh East Coast oysters with mignonette (half dozen)",
            price: 24,
            isGlutenFree: true,
          },
          {
            name: "Cod Fritters",
            description: "Salt cod fritters with garlic aioli",
            price: 18,
            isGlutenFree: false,
          },
        ],
      },
    ],
  },
  {
    title: "Spécialités de la Maison",
    description:
      "House specialties featuring indulgent preparations of duck, foie gras, and pork",
    category: [
      {
        name: "Duck",
        items: [
          {
            name: "Duck in a Can",
            description:
              "Iconic dish: duck breast, foie gras, cabbage, and balsamic glaze, sealed and cooked in a can, opened tableside",
            price: 52,
            isGlutenFree: true,
          },
          {
            name: "Canard PDC",
            description:
              "Half duck with maple syrup glaze, served with mashed potatoes and seasonal vegetables",
            price: 46,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Cochon",
        items: [
          {
            name: "Pied de Cochon",
            description:
              "Signature stuffed pig's foot with foie gras and mushrooms, served with PDC mash",
            price: 42,
            isGlutenFree: true,
          },
          {
            name: "Planche de Cochon",
            description:
              "Pork board with various cuts and preparations for two to share",
            price: 58,
            isGlutenFree: true,
          },
          {
            name: "Tomahawk Pork Chop",
            description: "32oz pork chop with maple glaze and PDC mash",
            price: 45,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Plats Principaux",
    description:
      "Main courses featuring hearty Québécois fare and modern French classics",
    category: [
      {
        name: "Meat & Poultry",
        items: [
          {
            name: "Steak Frites",
            description: "AAA ribeye with red wine sauce and crispy fries",
            price: 42,
            isGlutenFree: true,
          },
          {
            name: "Poutine au Foie Gras",
            description: "Large portion of poutine topped with foie gras sauce",
            price: 32,
            isGlutenFree: true,
          },
          {
            name: "Lamb Shoulder",
            description:
              "Slow-roasted Quebec lamb shoulder with rosemary jus and roasted vegetables",
            price: 39,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Desserts",
    description:
      "Indulgent sweet endings with Quebec maple and seasonal ingredients",
    category: [
      {
        name: "Sweet Finishes",
        items: [
          {
            name: "Pouding Chômeur",
            description:
              "Traditional Quebec maple syrup pudding with crème fraîche",
            price: 14,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Profiteroles au Foie Gras",
            description:
              "Cream puffs filled with foie gras ice cream and chocolate sauce",
            price: 17,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Tarte au Sucre",
            description: "Quebec maple sugar pie with maple whipped cream",
            price: 13,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Crème Brûlée à l'Érable",
            description: "Maple-infused crème brûlée",
            price: 12,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
];
