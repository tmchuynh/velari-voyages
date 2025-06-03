import { ResturantMenu } from "@/lib/types/types";

export const miamiversaillesRestaurantMenu: ResturantMenu[] = [
  {
    title: "Aperitivos",
    description: "Traditional Cuban appetizers and small plates",
    category: [
      {
        name: "Cold Starters",
        items: [
          {
            name: "Ceviche de Camarones",
            description:
              "Shrimp ceviche with lime, onions, peppers, and cilantro",
            price: 12,
            isGlutenFree: true,
          },
          {
            name: "Jamón Serrano con Melón",
            description: "Spanish serrano ham with cantaloupe",
            price: 14,
            isGlutenFree: true,
          },
          {
            name: "Ensalada de Aguacate",
            description: "Avocado salad with red onions and lime vinaigrette",
            price: 8,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Hot Starters",
        items: [
          {
            name: "Croquetas de Jamón",
            description: "Ham croquettes (3 pieces)",
            price: 6,
            isGlutenFree: false,
          },
          {
            name: "Empanadas de Carne",
            description: "Beef turnovers (2 pieces)",
            price: 6,
            isGlutenFree: false,
          },
          {
            name: "Mariquitas",
            description: "Plantain chips with garlic mojo sauce",
            price: 5,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Chicharrones",
            description: "Crispy fried pork rinds",
            price: 8,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Sopas",
    description: "Traditional Cuban soups and stews",
    category: [
      {
        name: "Soups",
        items: [
          {
            name: "Sopa de Pollo",
            description: "Homemade chicken soup with rice and vegetables",
            price: 5,
            isGlutenFree: true,
          },
          {
            name: "Sopa de Frijoles Negros",
            description: "Black bean soup topped with raw onions",
            price: 4,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Caldo Gallego",
            description:
              "Galician white bean soup with smoked ham, chorizo and potatoes",
            price: 6,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Especialidades de la Casa",
    description: "House specialties and traditional Cuban entrées",
    category: [
      {
        name: "Pork Dishes",
        items: [
          {
            name: "Lechón Asado",
            description:
              "Roast pork marinated in mojo, served with moro rice and yuca",
            price: 16,
            isGlutenFree: true,
          },
          {
            name: "Masas de Puerco Fritas",
            description:
              "Fried pork chunks with onions and mojo, served with rice and beans",
            price: 15,
            isGlutenFree: true,
          },
          {
            name: "Ropa Vieja",
            description:
              "Shredded beef in tomato sauce with peppers and onions, served with white rice and sweet plantains",
            price: 17,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Chicken Dishes",
        items: [
          {
            name: "Arroz con Pollo",
            description: "Yellow rice with chicken, peas, and red peppers",
            price: 16,
            isGlutenFree: true,
          },
          {
            name: "Pollo Asado",
            description:
              "Roast chicken with mojo, served with white rice and black beans",
            price: 15,
            isGlutenFree: true,
          },
          {
            name: "Pechuga de Pollo a la Plancha",
            description:
              "Grilled chicken breast with onions, served with rice and vegetables",
            price: 16,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Mariscos",
    description: "Seafood specialties with Caribbean flavors",
    category: [
      {
        name: "Seafood Entrées",
        items: [
          {
            name: "Camarones al Ajillo",
            description: "Shrimp in garlic sauce served with white rice",
            price: 19,
            isGlutenFree: true,
          },
          {
            name: "Pescado a la Plancha",
            description:
              "Grilled fish fillet with lime and garlic, served with rice and vegetables",
            price: 18,
            isGlutenFree: true,
          },
          {
            name: "Paella Valenciana",
            description:
              "Traditional Spanish rice dish with seafood, chicken, and chorizo",
            price: 24,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Sandwiches",
    description: "Miami's most famous Cuban sandwiches",
    category: [
      {
        name: "Cuban Classics",
        items: [
          {
            name: "Sandwich Cubano",
            description:
              "The original Cuban sandwich with ham, roast pork, Swiss cheese, pickles, and mustard",
            price: 9,
            isGlutenFree: false,
          },
          {
            name: "Media Noche",
            description:
              "Midnight sandwich with ham, roast pork, Swiss cheese on sweet egg bread",
            price: 8,
            isGlutenFree: false,
          },
          {
            name: "Pan con Lechón",
            description:
              "Roast pork sandwich with onions and mojo on Cuban bread",
            price: 9.5,
            isGlutenFree: false,
          },
          {
            name: "Elena Ruz",
            description:
              "Turkey, cream cheese and strawberry preserves on sweet bread",
            price: 8,
            isGlutenFree: false,
          },
        ],
      },
    ],
  },
  {
    title: "Postres",
    description: "Traditional Cuban desserts and sweet treats",
    category: [
      {
        name: "Desserts",
        items: [
          {
            name: "Flan",
            description: "Traditional Cuban caramel custard",
            price: 6,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Tres Leches",
            description: "Sponge cake soaked in three types of milk",
            price: 6,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Arroz con Leche",
            description: "Homemade rice pudding with cinnamon",
            price: 5,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Guava Pastry",
            description: "Puff pastry filled with guava and cream cheese",
            price: 4,
            isVegetarian: true,
            isGlutenFree: false,
          },
        ],
      },
    ],
  },
  {
    title: "Bebidas",
    description: "Traditional Cuban beverages and coffee",
    category: [
      {
        name: "Coffee & Drinks",
        items: [
          {
            name: "Café Cubano",
            description: "Traditional Cuban espresso",
            price: 2.5,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Café con Leche",
            description: "Cuban coffee with steamed milk",
            price: 3.5,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Cortadito",
            description: "Cuban espresso with a splash of milk",
            price: 2.75,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Jugo de Guarapo",
            description: "Fresh pressed sugar cane juice",
            price: 4,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
];
