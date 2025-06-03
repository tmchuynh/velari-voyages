import { ResturantMenu } from "@/lib/types/types";

export const tampacolumbiaRestaurantMenu: ResturantMenu[] = [
  {
    title: "Tapas",
    category: [
      {
        name: "Hot Tapas",
        items: [
          {
            name: "Gambas 'Al Ajillo'",
            description:
              "Shrimp sautéed in extra virgin olive oil, garlic, and chili pepper",
            price: 14,
            isGlutenFree: true,
          },
          {
            name: "Champiñones Rellenos",
            description:
              "Silver dollar mushrooms stuffed with crabmeat and shrimp, baked in almond cream sauce",
            price: 12,
            isGlutenFree: true,
          },
          {
            name: "Empanadas de Picadillo",
            description:
              "Savory baked pastry filled with seasoned ground beef, olives, and raisins",
            price: 10,
            isGlutenFree: false,
          },
          {
            name: "Chorizo 'Español'",
            description:
              "Sliced Spanish sausage sautéed with onions and peppers",
            price: 11,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Cold Tapas",
        items: [
          {
            name: "Jamón Serrano",
            description:
              "Spanish cured ham with Manchego cheese, olives, and roasted piquillo peppers",
            price: 16,
            isGlutenFree: true,
          },
          {
            name: "Columbia's Original 1905 Salad®",
            description:
              "Iceberg lettuce with julienne of ham, Swiss cheese, tomato, olives, grated Romano cheese, and garlic dressing",
            price: 14,
            isGlutenFree: true,
          },
          {
            name: "Ceviche 'Costeño'",
            description:
              "Shrimp, scallops, and fresh fish marinated in citrus juices and served with tomatoes, onions, and avocado",
            price: 15,
            isGlutenFree: true,
          },
        ],
      },
    ],
    description:
      "Small plates perfect for sharing, inspired by Spanish and Cuban traditions",
  },
  {
    title: "Sopas",
    category: [
      {
        name: "Soups",
        items: [
          {
            name: "Spanish Bean Soup",
            description:
              "Garbanzo beans simmered with ham, chorizo, and potatoes in a hearty chicken broth",
            price: 8,
            isGlutenFree: true,
          },
          {
            name: "Cuban Black Bean Soup",
            description:
              "Traditional soup topped with raw Spanish onions and olive oil",
            price: 7,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Gazpacho Andaluz",
            description:
              "Cold soup of puréed vegetables with diced vegetables and croutons",
            price: 7,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: false,
          },
        ],
      },
    ],
    description: "Traditional Spanish and Cuban soups",
  },
  {
    title: "Paella",
    category: [
      {
        name: "Spanish Rice Dishes",
        items: [
          {
            name: "Paella 'a la Valenciana'",
            description:
              "Spain's classic dish with chicken, pork, mussels, clams, shrimp, scallops, calamari, and Spanish sausage over saffron rice",
            price: 30,
            isGlutenFree: true,
          },
          {
            name: "Paella Marinera",
            description:
              "A seafood lover's delight with lobster, clams, mussels, shrimp, scallops, and calamari over yellow rice",
            price: 32,
            isGlutenFree: true,
          },
          {
            name: "Arroz con Pollo",
            description:
              "Half a chicken baked with rice, green peppers, onions, tomatoes, and spices",
            price: 24,
            isGlutenFree: true,
          },
        ],
      },
    ],
    description:
      "Made to order, please allow 30 minutes. Each paella serves two people.",
  },
  {
    title: "Platos Tradicionales",
    category: [
      {
        name: "Spanish Classics",
        items: [
          {
            name: "Merluza 'Russian Style'",
            description:
              "Premium white fish breaded and grilled, topped with lemon butter sauce, asparagus, and onions",
            price: 28,
            isGlutenFree: false,
          },
          {
            name: "Filete de Grouper 'Jimmy'",
            description:
              "Grilled grouper fillet topped with lump crabmeat, artichokes, sun-dried tomatoes, and basil lemon butter",
            price: 34,
            isGlutenFree: true,
          },
          {
            name: "Pollo Manchego",
            description:
              "Breaded chicken breast topped with Spanish Manchego cheese, chorizo, and Manzanilla olives in an almond sauce",
            price: 26,
            isGlutenFree: false,
          },
        ],
      },
      {
        name: "Cuban Specialties",
        items: [
          {
            name: "Ropa Vieja",
            description:
              "Shredded beef in a rich sauce of tomatoes, peppers, onions, and spices, served with yellow rice",
            price: 24,
            isGlutenFree: true,
          },
          {
            name: "Lechón Asado",
            description:
              "Roast pork marinated in citrus juice, garlic, and spices, served with yuca and mojo sauce",
            price: 22,
            isGlutenFree: true,
          },
          {
            name: "Boliche 'Criollo'",
            description:
              "Eye round of beef stuffed with chorizo, roasted in flavorful gravy, served with black beans and white rice",
            price: 25,
            isGlutenFree: true,
          },
        ],
      },
    ],
    description:
      "Signature dishes from Spain and Cuba, served with yellow rice and vegetables",
  },
  {
    title: "Carnes",
    category: [
      {
        name: "Steaks & Chops",
        items: [
          {
            name: "Filet Mignon",
            description:
              "8oz center-cut filet with roasted garlic mashed potatoes and seasonal vegetables",
            price: 39,
            isGlutenFree: true,
          },
          {
            name: "Châteaubriand",
            description:
              "Center-cut tenderloin seasoned and grilled tableside, served with vegetables and potatoes (for 2 people)",
            price: 90,
            isGlutenFree: true,
          },
          {
            name: "Pork 'Marbella'",
            description:
              "Bone-in pork chop marinated in Spanish olive oil, garlic, and herbs, served with yellow rice",
            price: 28,
            isGlutenFree: true,
          },
        ],
      },
    ],
    description:
      "Premium cuts of meat, perfectly seasoned and grilled to your preference",
  },
  {
    title: "Postres",
    category: [
      {
        name: "Desserts",
        items: [
          {
            name: "Flan",
            description:
              "Spanish caramel custard made with caramel, eggs, milk, and vanilla",
            price: 9,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Churros 'Tres Amigos'",
            description:
              "Three Spanish pastries served with chocolate, caramel, and guava dipping sauces",
            price: 10,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "White Chocolate Bread Pudding",
            description:
              "Traditional Cuban bread pudding with white chocolate, served warm with vanilla bean ice cream",
            price: 10,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Guava Cheesecake",
            description:
              "New York-style cheesecake topped with guava marmalade",
            price: 10,
            isVegetarian: true,
            isGlutenFree: false,
          },
        ],
      },
    ],
    description: "Sweet endings with Spanish and Cuban influences",
  },
  {
    title: "Signature Drinks",
    category: [
      {
        name: "Beverages",
        items: [
          {
            name: "Sangria",
            description:
              "Columbia's world-famous recipe with premium red wine and fresh citrus juices (glass/pitcher)",
            price: 9,
            isGlutenFree: true,
          },
          {
            name: "White Sangria",
            description:
              "Crisp white wine version of our famous sangria (glass/pitcher)",
            price: 9,
            isGlutenFree: true,
          },
          {
            name: "Mojito",
            description:
              "Bacardi Superior Rum, muddled mint, lime juice and sugar, topped with club soda",
            price: 11,
            isGlutenFree: true,
          },
          {
            name: "Café con Leche",
            description: "Cuban espresso with steamed milk",
            price: 5,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Cuban Bread Basket",
            description: "Fresh-baked loaf, served warm with whipped butter",
            price: 5,
            isVegetarian: true,
            isGlutenFree: false,
          },
        ],
      },
    ],
    description: "Complete your experience with Columbia's famous beverages",
  },
];
