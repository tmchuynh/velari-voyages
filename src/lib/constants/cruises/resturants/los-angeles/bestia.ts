import { ResturantMenu } from "@/lib/types/types";

export const losAngelesbestiaMenu: ResturantMenu[] = [
  {
    title: "Antipasti",
    description:
      "Italian-inspired starters featuring house-cured meats and seasonal ingredients",
    category: [
      {
        name: "Cold Starters",
        items: [
          {
            name: "Salumi",
            description: "House-cured meats, pickled vegetables, mustard",
            price: 29,
            isGlutenFree: true,
          },
          {
            name: "Grilled Octopus",
            description: "Fennel, celery, lemon, aged balsamic",
            price: 26,
            isGlutenFree: true,
          },
          {
            name: "Burrata",
            description: "Fava beans, snap peas, mint, preserved lemon",
            price: 24,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Beef Tartare",
            description: "Anchovy cream, pickled mushroom, celery, bone marrow",
            price: 25,
            isGlutenFree: false,
          },
        ],
      },
      {
        name: "Hot Starters",
        items: [
          {
            name: "Roasted Marrow Bone",
            description:
              "Spinach gnocchetti, crispy breadcrumbs, aged balsamic",
            price: 22,
            isGlutenFree: false,
          },
          {
            name: "Calamari",
            description: "Pan-fried with squash blossoms, Meyer lemon aioli",
            price: 23,
            isGlutenFree: false,
          },
          {
            name: "Meatballs",
            description: "House-ground pork, ricotta, san marzano tomatoes",
            price: 18,
            isGlutenFree: false,
          },
        ],
      },
    ],
  },
  {
    title: "Pizze",
    description:
      "Wood-fired Neapolitan-style pizzas with house-made charcuterie and seasonal toppings",
    category: [
      {
        name: "Wood-Fired Pizza",
        items: [
          {
            name: "Margherita",
            description: "San Marzano tomatoes, mozzarella, basil",
            price: 23,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Salsiccia",
            description:
              "House-made sausage, mozzarella, ricotta, fennel pollen",
            price: 26,
            isGlutenFree: false,
          },
          {
            name: "Napoletana",
            description:
              "San Marzano tomatoes, anchovy, olive, oregano, garlic, chili",
            price: 24,
            isGlutenFree: false,
          },
          {
            name: "Pancetta",
            description:
              "House-cured pancetta, ricotta, Brussels sprout leaves, chili",
            price: 27,
            isGlutenFree: false,
          },
        ],
      },
    ],
  },
  {
    title: "Paste",
    description:
      "Hand-crafted pastas made fresh daily with traditional techniques and modern creativity",
    category: [
      {
        name: "Fresh Pasta",
        items: [
          {
            name: "Cavatelli alla Norcina",
            description:
              "Ricotta dumplings, house-made pork sausage, black truffles, grana padano",
            price: 32,
            isGlutenFree: false,
          },
          {
            name: "Agnolotti alla Vaccinara",
            description:
              "Cacao pasta, braised oxtail filling, butter, grana padano",
            price: 29,
            isGlutenFree: false,
          },
          {
            name: "Spaghetti Rustichella",
            description: "Dungeness crab, citrus, Calabrian chili, Thai basil",
            price: 34,
            isGlutenFree: false,
          },
          {
            name: "Pappardelle",
            description: "Beef ragù, wild rocket greens, grana padano",
            price: 31,
            isGlutenFree: false,
          },
        ],
      },
    ],
  },
  {
    title: "Secondi",
    description:
      "Hearty main courses featuring wood-grilled meats and sustainable seafood",
    category: [
      {
        name: "Main Courses",
        items: [
          {
            name: "Whole Branzino",
            description: "Wood-grilled, herbs, olive oil, roasted vegetables",
            price: 48,
            isGlutenFree: true,
          },
          {
            name: "Bone-In New York Strip",
            description:
              "16 oz dry-aged, wood grilled, carrot purée, horseradish",
            price: 68,
            isGlutenFree: true,
          },
          {
            name: "Saffron Shellfish",
            description: "Clams, mussels, calamari, shrimp, chili, sofrito",
            price: 42,
            isGlutenFree: true,
          },
          {
            name: "Wood-Fired Pork Chop",
            description: "24 oz bone-in, fennel spice, grilled apple",
            price: 52,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Contorni",
    description:
      "Seasonal side dishes prepared with locally-sourced ingredients",
    category: [
      {
        name: "Sides",
        items: [
          {
            name: "Roasted Cauliflower",
            description: "Almond-wine vinaigrette, capers, Fresno chili",
            price: 15,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Wood-Roasted Carrots",
            description: "Honey, spicy yogurt, walnuts",
            price: 14,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Charred Broccolini",
            description: "Calabrian chili, lemon, garlic crumbs",
            price: 15,
            isVegetarian: true,
            isVegan: false,
            isGlutenFree: false,
          },
        ],
      },
    ],
  },
  {
    title: "Dolci",
    description:
      "House-made desserts balancing Italian tradition with California innovation",
    category: [
      {
        name: "Desserts",
        items: [
          {
            name: "Chocolate Budino Tart",
            description: "Sea salt, extra virgin olive oil, sable cookie crust",
            price: 15,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Tiramisu",
            description:
              "Espresso-soaked ladyfingers, mascarpone, coffee crumble",
            price: 15,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Valrhona Chocolate Chalupa",
            description: "Sheep's milk cheese gelato, cardamom caramel",
            price: 15,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Olive Oil Cake",
            description: "Crème fraîche, seasonal fruit, honey",
            price: 15,
            isVegetarian: true,
            isGlutenFree: false,
          },
        ],
      },
    ],
  },
];
