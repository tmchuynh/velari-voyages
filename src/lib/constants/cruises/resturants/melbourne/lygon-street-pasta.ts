import { ResturantMenu } from "@/lib/types/types";

export const melbournelygonStreetPastaMenu: ResturantMenu[] = [
  {
    title: "Antipasti",
    description: "Traditional Italian starters perfect for sharing",
    category: [
      {
        name: "Starters",
        items: [
          {
            name: "Bruschetta",
            description:
              "Toasted ciabatta with fresh tomato, basil, garlic and extra virgin olive oil",
            price: 14.5,
            isVegetarian: true,
            isVegan: false,
          },
          {
            name: "Calamari Fritti",
            description: "Lightly fried calamari with aioli and lemon",
            price: 18.9,
            isGlutenFree: false,
          },
          {
            name: "Arancini",
            description:
              "Mushroom and mozzarella risotto balls with truffle aioli",
            price: 16.8,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Antipasto Plate",
            description:
              "Selection of Italian cured meats, cheeses, olives and grilled vegetables",
            price: 24,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Pasta Fresca",
    description:
      "House-made fresh pasta prepared daily in traditional Italian style",
    category: [
      {
        name: "Fresh Pasta",
        items: [
          {
            name: "Spaghetti Carbonara",
            description: "Pancetta, egg yolk, pecorino cheese and black pepper",
            price: 24,
            isGlutenFree: false,
          },
          {
            name: "Fettuccine Bolognese",
            description:
              "Slow-cooked beef and pork ragù in a rich tomato sauce",
            price: 23.9,
            isGlutenFree: false,
          },
          {
            name: "Linguine alle Vongole",
            description: "Clams, white wine, garlic, chili and parsley",
            price: 28.9,
            isGlutenFree: false,
          },
          {
            name: "Pappardelle al Funghi",
            description: "Mixed wild mushrooms, truffle oil and parmesan cream",
            price: 26,
            isVegetarian: true,
            isGlutenFree: false,
          },
        ],
      },
      {
        name: "Filled Pasta",
        items: [
          {
            name: "Ravioli di Zucca",
            description:
              "Pumpkin and ricotta filled ravioli with burnt butter and sage",
            price: 25.9,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Tortellini di Manzo",
            description:
              "Beef-filled tortellini with red wine reduction and rosemary",
            price: 27.9,
            isGlutenFree: false,
          },
        ],
      },
    ],
  },
  {
    title: "Pizza",
    description:
      "Traditional wood-fired pizzas made with imported Italian flour",
    category: [
      {
        name: "Classic Pizzas",
        items: [
          {
            name: "Margherita",
            description:
              "San Marzano tomato sauce, fior di latte mozzarella, fresh basil and olive oil",
            price: 19.9,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Diavola",
            description:
              "Spicy salami, San Marzano tomato sauce, mozzarella and chili oil",
            price: 22,
            isGlutenFree: false,
          },
          {
            name: "Capricciosa",
            description:
              "Ham, mushrooms, artichokes, olives, San Marzano tomato sauce and mozzarella",
            price: 23.9,
            isGlutenFree: false,
          },
          {
            name: "Quattro Formaggi",
            description:
              "Mozzarella, gorgonzola, parmesan, taleggio and rosemary",
            price: 24,
            isVegetarian: true,
            isGlutenFree: false,
          },
        ],
      },
    ],
  },
  {
    title: "Secondi",
    description:
      "Traditional Italian main courses featuring quality local ingredients",
    category: [
      {
        name: "Main Courses",
        items: [
          {
            name: "Vitello Saltimbocca",
            description:
              "Veal scaloppine with prosciutto and sage in a white wine sauce, served with seasonal vegetables",
            price: 32.9,
            isGlutenFree: true,
          },
          {
            name: "Pollo alla Parmigiana",
            description:
              "Crumbed chicken breast topped with Napoli sauce and melted mozzarella, served with salad and chips",
            price: 28.9,
            isGlutenFree: false,
          },
          {
            name: "Bistecca alla Fiorentina",
            description:
              "Grilled T-bone steak with rosemary, garlic and lemon, served with roasted potatoes",
            price: 42.9,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Dolci",
    description: "Sweet Italian desserts to complete your meal",
    category: [
      {
        name: "Desserts",
        items: [
          {
            name: "Tiramisu",
            description:
              "Classic coffee-soaked savoiardi biscuits with mascarpone cream and cocoa",
            price: 14.9,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Panna Cotta",
            description:
              "Vanilla bean panna cotta with mixed berry compote and almond biscotti",
            price: 13.9,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Cannoli",
            description:
              "Sicilian pastry tubes filled with sweetened ricotta and chocolate chips",
            price: 12.9,
            isVegetarian: true,
            isGlutenFree: false,
          },
        ],
      },
    ],
  },
];
