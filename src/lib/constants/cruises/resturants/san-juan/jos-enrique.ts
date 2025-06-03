import { ResturantMenu } from "@/lib/types/types";

export const sanJuanjosEnriqueMenu: ResturantMenu[] = [
  {
    title: "Entradas",
    description:
      "Fresh starters showcasing Puerto Rico's local ingredients and traditions",
    category: [
      {
        name: "Appetizers",
        items: [
          {
            name: "Alcapurrias",
            description:
              "Traditional fritters made with green banana and yautía, filled with spiced beef",
            price: 14,
            isGlutenFree: true,
          },
          {
            name: "Ceviche del Día",
            description:
              "Daily catch ceviche with citrus, chili, and local herbs",
            price: 18,
            isGlutenFree: true,
          },
          {
            name: "Charcutería Local",
            description:
              "House-cured meats with fermented vegetables and rustic bread",
            price: 21,
            isGlutenFree: false,
          },
          {
            name: "Amarillos con Mayo-Ketchup",
            description:
              "Twice-fried sweet plantains with José's signature sauce",
            price: 12,
            isVegetarian: true,
            isVegan: false,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Salads",
        items: [
          {
            name: "Ensalada de Aguacate",
            description:
              "Local avocado salad with heirloom tomatoes, citrus vinaigrette and cilantro",
            price: 15,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Ensalada de Papaya",
            description:
              "Green papaya salad with lime, peanuts, and fresh herbs",
            price: 14,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Platos Principales",
    description:
      "Main courses featuring the freshest local seafood and farm-to-table ingredients",
    category: [
      {
        name: "From the Sea",
        items: [
          {
            name: "Pescado del Día",
            description:
              "Catch of the day prepared according to market availability and chef's inspiration",
            price: 34,
            isGlutenFree: true,
          },
          {
            name: "Chillo Entero Frito",
            description:
              "Whole fried red snapper with coconut rice and tropical slaw",
            price: 38,
            isGlutenFree: true,
          },
          {
            name: "Asopao de Mariscos",
            description:
              "Traditional Puerto Rican seafood stew with rice, lobster, shrimp, and crab",
            price: 36,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "From the Land",
        items: [
          {
            name: "Chuleta Kan Kan",
            description:
              "Enormous crispy pork chop with traditional sides and house-made hot sauce",
            price: 40,
            isGlutenFree: true,
          },
          {
            name: "Bistec Encebollado",
            description:
              "Traditional thinly sliced steak with Puerto Rican-style onions and tostones",
            price: 32,
            isGlutenFree: true,
          },
          {
            name: "Lechón Asado",
            description:
              "Slow-roasted pork with crispy skin, garlic mojo, and arroz con gandules",
            price: 35,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Acompañantes",
    description: "Traditional sides to complement your main course",
    category: [
      {
        name: "Sides",
        items: [
          {
            name: "Arroz con Gandules",
            description: "Rice with pigeon peas cooked in sofrito",
            price: 8,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Mofongo",
            description:
              "Mashed green plantains with garlic and pork cracklings",
            price: 9,
            isGlutenFree: true,
          },
          {
            name: "Tostones",
            description: "Twice-fried green plantain discs with garlic mojo",
            price: 8,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Mamposteao",
            description:
              "Rice and beans mixed with sofrito and other seasonings",
            price: 7,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Postres",
    description:
      "Sweet endings featuring tropical fruits and traditional Puerto Rican flavors",
    category: [
      {
        name: "Desserts",
        items: [
          {
            name: "Flan de Queso",
            description:
              "Traditional Puerto Rican cream cheese flan with caramel sauce",
            price: 10,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Tembleque",
            description: "Coconut pudding with cinnamon and tropical fruit",
            price: 9,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Tres Leches de Guayaba",
            description: "Guava-infused three milk cake with whipped cream",
            price: 11,
            isVegetarian: true,
            isGlutenFree: false,
          },
        ],
      },
    ],
  },
  {
    title: "Bebidas",
    description:
      "House-crafted cocktails featuring Puerto Rican spirits and tropical flavors",
    category: [
      {
        name: "Signature Cocktails",
        items: [
          {
            name: "Don Q Reserva Mojito",
            description:
              "Don Q Añejo rum with fresh mint, lime, and sugar cane",
            price: 14,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Parcha Rum Punch",
            description: "House-infused passion fruit rum with fresh juices",
            price: 15,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "El Jíbaro",
            description: "Don Q rum, ginger, lime, and coconut water",
            price: 16,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
];
