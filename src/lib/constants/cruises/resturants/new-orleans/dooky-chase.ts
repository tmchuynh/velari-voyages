import { ResturantMenu } from "@/lib/types/types";

export const newOrleansdookyChaseMenu: ResturantMenu[] = [
  {
    title: "Appetizers",
    description:
      "Traditional Creole starters from Chef Leah Chase's storied kitchen",
    category: [
      {
        name: "Starters",
        items: [
          {
            name: "Creole Gumbo",
            description:
              "Rich, dark roux gumbo with chicken, sausage and seafood",
            price: 12,
            isGlutenFree: false,
          },
          {
            name: "Fried Chicken Livers",
            description:
              "Crispy fried chicken livers with spicy Creole dipping sauce",
            price: 10,
            isGlutenFree: false,
          },
          {
            name: "Crabmeat Stuffed Shrimp",
            description: "Gulf shrimp stuffed with seasoned crabmeat",
            price: 14,
            isGlutenFree: false,
          },
          {
            name: "Shrimp Clemenceau",
            description:
              "Sautéed shrimp with mushrooms, peas and potatoes in garlic butter",
            price: 16,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Salads",
        items: [
          {
            name: "House Salad",
            description: "Fresh greens with house-made Creole dressing",
            price: 8,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Dooky Salad",
            description:
              "Mixed greens with tomatoes, cucumbers, onions, bell peppers and choice of dressing",
            price: 9,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Main Courses",
    description:
      "Legendary Creole main dishes that have made Dooky Chase a New Orleans institution",
    category: [
      {
        name: "Chef Leah's Specialties",
        items: [
          {
            name: "Fried Chicken",
            description:
              "Ms. Chase's famous crispy fried chicken with Creole seasonings",
            price: 21,
            isGlutenFree: false,
          },
          {
            name: "Shrimp Creole",
            description:
              "Gulf shrimp in a spicy tomato sauce with bell peppers, onions, and celery, served with rice",
            price: 24,
            isGlutenFree: true,
          },
          {
            name: "Stuffed Peppers",
            description:
              "Bell peppers stuffed with ground beef, rice, and seasonings, topped with tomato sauce",
            price: 19,
            isGlutenFree: true,
          },
          {
            name: "Crawfish Étouffée",
            description:
              "Smothered Louisiana crawfish tails in a flavorful roux, served over rice",
            price: 23,
            isGlutenFree: false,
          },
        ],
      },
      {
        name: "Traditional Dishes",
        items: [
          {
            name: "Red Beans and Rice with Hot Sausage",
            description:
              "Slow-cooked red beans with smoked sausage and Creole spices, served with rice",
            price: 16,
            isGlutenFree: true,
          },
          {
            name: "Jambalaya",
            description:
              "Classic New Orleans rice dish with chicken, sausage, and vegetables",
            price: 18,
            isGlutenFree: true,
          },
          {
            name: "Smothered Pork Chops",
            description:
              "Tender pork chops braised in a rich onion gravy with rice",
            price: 22,
            isGlutenFree: true,
          },
          {
            name: "Catfish Orleans",
            description:
              "Fried catfish fillets topped with shrimp Creole sauce",
            price: 25,
            isGlutenFree: false,
          },
        ],
      },
    ],
  },
  {
    title: "Lunch Buffet",
    description:
      "Famous weekday lunch buffet featuring a rotating selection of Dooky Chase favorites",
    category: [
      {
        name: "Buffet",
        items: [
          {
            name: "Full Lunch Buffet",
            description:
              "All-you-can-eat access to Dooky Chase's legendary buffet featuring fried chicken, greens, macaroni and cheese, red beans, rice, and rotating daily specials",
            price: 28,
            isGlutenFree: false,
          },
        ],
      },
    ],
  },
  {
    title: "Sides",
    description: "Traditional Southern accompaniments to complete your meal",
    category: [
      {
        name: "Side Dishes",
        items: [
          {
            name: "Greens",
            description: "Slow-cooked collard greens with smoked ham hock",
            price: 6,
            isGlutenFree: true,
          },
          {
            name: "Macaroni and Cheese",
            description: "Baked macaroni with a blend of cheeses",
            price: 7,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Candied Yams",
            description:
              "Sweet potatoes cooked with brown sugar, butter, and spices",
            price: 6,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Cornbread",
            description: "House-made sweet cornbread",
            price: 4,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Rice and Gravy",
            description: "White rice topped with savory brown gravy",
            price: 5,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Desserts",
    description: "Southern sweet traditions with a Creole twist",
    category: [
      {
        name: "Sweet Endings",
        items: [
          {
            name: "Bread Pudding",
            description: "Classic New Orleans bread pudding with whiskey sauce",
            price: 10,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Sweet Potato Pie",
            description:
              "Traditional Southern pie with flaky crust and spiced sweet potato filling",
            price: 8,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Peach Cobbler",
            description: "Warm peach cobbler with buttery crust",
            price: 9,
            isVegetarian: true,
            isGlutenFree: false,
          },
        ],
      },
    ],
  },
];
