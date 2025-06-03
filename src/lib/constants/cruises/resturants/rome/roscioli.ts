import { ResturantMenu } from "@/lib/types/types";

export const romeroscioliMenu: ResturantMenu[] = [
  {
    title: "Antipasti",
    description: "Classic Roman starters featuring Italy's finest ingredients",
    category: [
      {
        name: "Salumi & Formaggi",
        items: [
          {
            name: "Tagliere di Salumi",
            description: "Selection of artisanal cured meats from around Italy",
            price: 24,
            isGlutenFree: true,
          },
          {
            name: "Degustazione di Formaggi",
            description:
              "Selection of fine Italian cheeses with honey and preserves",
            price: 22,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Burrata con Pomodorini",
            description:
              "Creamy burrata cheese with heirloom cherry tomatoes and basil",
            price: 18,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Prosciutto di Parma 36 Mesi",
            description: "36-month aged Parma ham with buffalo mozzarella",
            price: 22,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Small Plates",
        items: [
          {
            name: "Carciofi alla Giudia",
            description: "Jewish-style fried artichokes (seasonal)",
            price: 16,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Baccalà Mantecato",
            description: "Whipped salt cod with grilled bread and olive oil",
            price: 18,
            isGlutenFree: false,
          },
          {
            name: "Puntarelle con Alici",
            description: "Roman chicory salad with anchovy dressing (seasonal)",
            price: 14,
            isGlutenFree: true,
          },
          {
            name: "Bruschetta al Pomodoro",
            description: "Toasted bread with fresh tomatoes, garlic and basil",
            price: 10,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: false,
          },
        ],
      },
    ],
  },
  {
    title: "Primi Piatti",
    description:
      "Handcrafted pasta dishes prepared with traditional Roman techniques",
    category: [
      {
        name: "Pasta",
        items: [
          {
            name: "Carbonara",
            description:
              "Housemade spaghetti with guanciale, Pecorino Romano, egg, and black pepper",
            price: 18,
            isGlutenFree: false,
          },
          {
            name: "Cacio e Pepe",
            description:
              "Tonnarelli pasta with Pecorino Romano and black pepper",
            price: 16,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Amatriciana",
            description:
              "Bucatini pasta with tomato sauce, guanciale, and Pecorino Romano",
            price: 17,
            isGlutenFree: false,
          },
          {
            name: "Ravioli di Ricotta",
            description:
              "Handmade ricotta-filled ravioli with sage butter sauce",
            price: 19,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Rigatoni alla Gricia",
            description:
              "Rigatoni with guanciale, Pecorino Romano, and black pepper",
            price: 17,
            isGlutenFree: false,
          },
        ],
      },
    ],
  },
  {
    title: "Secondi Piatti",
    description: "Main courses highlighting the best of Roman cuisine",
    category: [
      {
        name: "Meat & Fish",
        items: [
          {
            name: "Saltimbocca alla Romana",
            description:
              "Veal escalopes with prosciutto and sage in white wine sauce",
            price: 24,
            isGlutenFree: true,
          },
          {
            name: "Trippa alla Romana",
            description:
              "Roman-style tripe with tomato sauce, mint, and Pecorino Romano",
            price: 22,
            isGlutenFree: true,
          },
          {
            name: "Abbacchio al Forno",
            description: "Roasted milk-fed lamb with rosemary and potatoes",
            price: 28,
            isGlutenFree: true,
          },
          {
            name: "Baccalà alla Romana",
            description: "Salt cod with tomatoes, pine nuts, and raisins",
            price: 26,
            isGlutenFree: true,
          },
          {
            name: "Coda alla Vaccinara",
            description:
              "Slow-braised oxtail stew with celery, carrots, and pine nuts",
            price: 25,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Contorni",
    description: "Seasonal side dishes to complement your meal",
    category: [
      {
        name: "Sides",
        items: [
          {
            name: "Cicoria Ripassata",
            description: "Sautéed chicory with garlic and chili",
            price: 9,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Carciofi alla Romana",
            description:
              "Roman-style braised artichokes with mint and garlic (seasonal)",
            price: 12,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Patate al Forno",
            description: "Roasted potatoes with rosemary",
            price: 8,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Puntarelle",
            description: "Seasonal Roman chicory salad",
            price: 10,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Dolci",
    description: "Traditional Italian desserts made daily in-house",
    category: [
      {
        name: "Desserts",
        items: [
          {
            name: "Tiramisù",
            description:
              "Classic coffee-flavored dessert with mascarpone and ladyfingers",
            price: 12,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Panna Cotta",
            description: "Vanilla bean panna cotta with seasonal fruit compote",
            price: 10,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Torta della Nonna",
            description:
              "Traditional 'grandmother's cake' with custard and pine nuts",
            price: 11,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Semifreddo al Pistacchio",
            description: "Pistachio semi-frozen dessert with chocolate sauce",
            price: 12,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
];
