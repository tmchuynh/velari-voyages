import { ResturantMenu } from "@/lib/types/types";

export const sanJuanlaAlcapurriaQuemMenu: ResturantMenu[] = [
  {
    title: "Frituras",
    description:
      "Traditional Puerto Rican fritters and fried street food specialties",
    category: [
      {
        name: "Signature Fritters",
        items: [
          {
            name: "Alcapurria de Carne",
            description:
              "Traditional green banana and yautía fritter filled with seasoned ground beef",
            price: 3.5,
            isGlutenFree: true,
          },
          {
            name: "Alcapurria de Jueyes",
            description:
              "Green banana and yautía fritter filled with local crab meat",
            price: 4.5,
            isGlutenFree: true,
          },
          {
            name: "Bacalaíto",
            description: "Thin and crispy salt cod fritter with herbs",
            price: 3.0,
            isGlutenFree: false,
          },
          {
            name: "Empanadilla de Carne",
            description: "Half-moon turnover filled with seasoned ground beef",
            price: 2.5,
            isGlutenFree: false,
          },
          {
            name: "Empanadilla de Pollo",
            description: "Half-moon turnover filled with seasoned chicken",
            price: 2.5,
            isGlutenFree: false,
          },
          {
            name: "Empanadilla de Pizza",
            description:
              "Half-moon turnover filled with cheese and pizza sauce",
            price: 2.5,
            isVegetarian: true,
            isGlutenFree: false,
          },
        ],
      },
      {
        name: "Combos",
        items: [
          {
            name: "Combo #1",
            description:
              "2 alcapurrias, 1 bacalaíto, and 1 empanadilla with a canned soda",
            price: 10.0,
            isGlutenFree: false,
          },
          {
            name: "Combo #2",
            description:
              "1 alcapurria, 2 bacalaítos, and 2 empanadillas with a canned soda",
            price: 12.0,
            isGlutenFree: false,
          },
        ],
      },
    ],
  },
  {
    title: "Platos Criollos",
    description: "Traditional Puerto Rican home-style dishes",
    category: [
      {
        name: "Daily Specials",
        items: [
          {
            name: "Arroz con Gandules y Pernil",
            description: "Rice with pigeon peas and roast pork shoulder",
            price: 9.5,
            isGlutenFree: true,
          },
          {
            name: "Arroz con Pollo",
            description: "Yellow rice with chicken and vegetables",
            price: 8.5,
            isGlutenFree: true,
          },
          {
            name: "Bistec Encebollado",
            description: "Thin steak with onions served with rice and beans",
            price: 10.5,
            isGlutenFree: true,
          },
          {
            name: "Mofongo con Caldo de Pollo",
            description:
              "Mashed plantain with garlic and pork cracklings, served with chicken broth",
            price: 8.0,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Pinchos",
    description: "Puerto Rican-style grilled meat skewers",
    category: [
      {
        name: "Skewers",
        items: [
          {
            name: "Pincho de Pollo",
            description: "Grilled chicken skewer with BBQ sauce",
            price: 4.0,
            isGlutenFree: true,
          },
          {
            name: "Pincho de Cerdo",
            description: "Grilled pork skewer with BBQ sauce",
            price: 4.0,
            isGlutenFree: true,
          },
          {
            name: "Pincho de Camarones",
            description: "Grilled shrimp skewer with garlic butter",
            price: 5.5,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Acompañantes",
    description: "Side dishes to accompany your meal",
    category: [
      {
        name: "Sides",
        items: [
          {
            name: "Tostones",
            description: "Twice-fried green plantains",
            price: 3.5,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Amarillos",
            description: "Fried sweet plantains",
            price: 3.5,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Arroz Blanco",
            description: "White rice",
            price: 2.5,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Habichuelas Guisadas",
            description: "Stewed red beans",
            price: 3.0,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Ensalada de Papa",
            description: "Puerto Rican style potato salad",
            price: 3.0,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Bebidas",
    description: "Refreshing drinks and tropical beverages",
    category: [
      {
        name: "Drinks",
        items: [
          {
            name: "Parcha",
            description: "Fresh passion fruit juice",
            price: 3.0,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Jugo de China",
            description: "Fresh orange juice",
            price: 3.0,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Limón",
            description: "Fresh lemonade",
            price: 2.5,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Malta India",
            description: "Non-alcoholic malt beverage",
            price: 2.5,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: false,
          },
          {
            name: "Coco Frío",
            description: "Cold coconut water served in the shell",
            price: 4.0,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Refrescos",
            description: "Assorted soft drinks",
            price: 2.0,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
];
