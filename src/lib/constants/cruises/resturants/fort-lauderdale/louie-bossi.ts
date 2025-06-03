import { ResturantMenu } from "@/lib/types/types";

export const fortLauderdalelouieBossiMenu: ResturantMenu[] = [
  {
    title: "Antipasti",
    category: [
      {
        name: "Appetizers",
        items: [
          {
            name: "Salumi e Formaggi",
            description: "Selection of house-cured meats and Italian cheeses",
            price: 26,
          },
          {
            name: "Polpette",
            description: "House-made meatballs, Sunday gravy, whipped ricotta",
            price: 14,
          },
          {
            name: "Burrata",
            description:
              "Creamy burrata, heirloom tomatoes, basil pesto, aged balsamic",
            price: 17,
          },
          {
            name: "Calamari Fritti",
            description:
              "Crispy fried calamari, cherry peppers, marinara sauce, lemon aioli",
            price: 15,
          },
        ],
      },
      {
        name: "Insalate",
        items: [
          {
            name: "Caesar",
            description:
              "Romaine hearts, house-made Caesar dressing, garlic croutons, parmesan",
            price: 14,
          },
          {
            name: "Caprese",
            description:
              "Fresh mozzarella, heirloom tomatoes, basil, balsamic glaze, olive oil",
            price: 15,
          },
          {
            name: "Bossi Chopped",
            description:
              "Mixed greens, salami, provolone, chickpeas, olives, red wine vinaigrette",
            price: 15,
          },
        ],
      },
    ],
    description: "",
  },
  {
    title: "Pizze",
    category: [
      {
        name: "Wood-Fired Pizza",
        items: [
          {
            name: "Margherita",
            description:
              "San Marzano tomatoes, fior di latte mozzarella, basil, olive oil",
            price: 16,
          },
          {
            name: "Diavola",
            description:
              "Spicy salami, San Marzano tomatoes, mozzarella, basil",
            price: 18,
          },
          {
            name: "Funghi",
            description:
              "Wild mushrooms, fontina, caramelized onions, truffle oil",
            price: 20,
          },
          {
            name: "Quattro Formaggi",
            description:
              "Mozzarella, gorgonzola, fontina, ricotta, truffle honey",
            price: 20,
          },
          {
            name: "Prosciutto e Arugula",
            description:
              "Prosciutto di Parma, mozzarella, arugula, parmesan, olive oil",
            price: 21,
          },
        ],
      },
    ],
    description: "",
  },
  {
    title: "Paste Fresche",
    category: [
      {
        name: "House-Made Pasta",
        items: [
          {
            name: "Tagliatelle Bolognese",
            description: "Fresh tagliatelle, traditional meat sauce, parmesan",
            price: 24,
          },
          {
            name: "Paccheri Alla Vodka",
            description: "Large tube pasta, vodka sauce, pancetta, peas",
            price: 22,
          },
          {
            name: "Bucatini Carbonara",
            description:
              "Thick spaghetti, pancetta, egg, pecorino, black pepper",
            price: 23,
          },
          {
            name: "Pappardelle al Cinghiale",
            description: "Wide ribbon pasta, wild boar ragu, pecorino romano",
            price: 26,
          },
          {
            name: "Ravioli di Ricotta",
            description: "Ricotta-filled ravioli, brown butter sage sauce",
            price: 24,
          },
        ],
      },
      {
        name: "Gluten-Free Options",
        items: [
          {
            name: "Spaghetti Pomodoro",
            description: "Gluten-free pasta, San Marzano tomato sauce, basil",
            price: 20,
          },
          {
            name: "Penne Arrabbiata",
            description:
              "Gluten-free penne, spicy tomato sauce, garlic, parsley",
            price: 21,
          },
        ],
      },
    ],
    description: "",
  },
  {
    title: "Secondi",
    category: [
      {
        name: "Main Courses",
        items: [
          {
            name: "Bistecca Fiorentina",
            description:
              "32oz Porterhouse, rosemary, garlic, served with roasted potatoes (for two)",
            price: 89,
          },
          {
            name: "Pollo Parmigiana",
            description:
              "Breaded chicken breast, tomato sauce, mozzarella, served with spaghetti",
            price: 26,
          },
          {
            name: "Branzino",
            description:
              "Mediterranean sea bass, lemon, herbs, roasted vegetables",
            price: 36,
          },
          {
            name: "Osso Buco",
            description: "Slow-braised veal shank, saffron risotto, gremolata",
            price: 42,
          },
          {
            name: "Vitello Milanese",
            description: "Breaded veal cutlet, arugula, cherry tomatoes, lemon",
            price: 38,
          },
        ],
      },
    ],
    description: "",
  },
  {
    title: "Contorni",
    category: [
      {
        name: "Sides",
        items: [
          {
            name: "Patate Arrosto",
            description: "Roasted potatoes, rosemary, garlic",
            price: 9,
          },
          {
            name: "Rapini",
            description: "Sautéed broccoli rabe, garlic, chili flakes",
            price: 10,
          },
          {
            name: "Funghi Trifolati",
            description: "Sautéed wild mushrooms, garlic, parsley",
            price: 12,
          },
          {
            name: "Polenta",
            description: "Creamy polenta, parmesan",
            price: 8,
          },
        ],
      },
    ],
    description: "",
  },
  {
    title: "Dolci",
    category: [
      {
        name: "Desserts",
        items: [
          {
            name: "Tiramisu",
            description:
              "House-made tiramisu, espresso-soaked ladyfingers, mascarpone cream",
            price: 12,
          },
          {
            name: "Panna Cotta",
            description: "Vanilla bean panna cotta, mixed berry compote",
            price: 11,
          },
          {
            name: "Cannoli",
            description:
              "Sicilian pastry shells, sweet ricotta filling, chocolate chips, pistachios",
            price: 10,
          },
          {
            name: "Gelato Artigianale",
            description: "Selection of house-made gelato and sorbetto",
            price: 9,
          },
        ],
      },
    ],
    description: "",
  },
];
