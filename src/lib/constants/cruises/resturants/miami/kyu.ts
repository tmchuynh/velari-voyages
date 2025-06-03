import { ResturantMenu } from "@/lib/types/types";

export const miamikyuMenu: ResturantMenu[] = [
  {
    title: "Snacks",
    description: "Small bites to start your wood-fired Asian journey",
    category: [
      {
        name: "Small Plates",
        items: [
          {
            name: "Beef Tartare",
            description:
              "Prime beef with black garlic aioli, pickled mustard seeds, and lotus root chips",
            price: 18,
            isGlutenFree: true,
          },
          {
            name: "Shishito Peppers",
            description: "Smoked salt, lemon, and parmesan",
            price: 14,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Crispy Pork Belly Steamed Buns",
            description: "Cucumber kimchi and hoisin sauce (2 pieces)",
            price: 15,
            isGlutenFree: false,
          },
          {
            name: "Hamachi Tartare",
            description:
              "Yellowtail with smoked coconut milk, avocado, and crispy rice crackers",
            price: 17,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Vegetables",
    description: "Wood-fired and grilled vegetables with Asian influences",
    category: [
      {
        name: "From the Garden",
        items: [
          {
            name: "Roasted Cauliflower",
            description: "Goat cheese, shishito vinaigrette, and herb salad",
            price: 15,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Mom's Coconut Creamed Spinach",
            description: "A KYU staple with fresh spinach in coconut cream",
            price: 14,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Baby Bok Choy",
            description: "Ginger, garlic, and miso butter",
            price: 15,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Crispy Brussels Sprouts",
            description: "Herb salad, fish sauce vinaigrette, and chili",
            price: 15,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Raw & Chilled",
    description: "Fresh seafood with Asian-inspired flavors",
    category: [
      {
        name: "Seafood",
        items: [
          {
            name: "Sliced Yellowtail",
            description: "With avocado, green chili, and ponzu sauce",
            price: 21,
            isGlutenFree: true,
          },
          {
            name: "Tuna Tataki",
            description: "Seared tuna with pickled cucumber and yuzu kosho",
            price: 22,
            isGlutenFree: true,
          },
          {
            name: "Korean Bento Box",
            description:
              "Tuna, salmon, hamachi, and vegetables with seasoned rice",
            price: 30,
            isGlutenFree: false,
          },
        ],
      },
    ],
  },
  {
    title: "Wood-Fired & Smoked",
    description: "Meats and fish slow-smoked over oak and aged wood",
    category: [
      {
        name: "From the Smoker",
        items: [
          {
            name: "Wagyu Beef Brisket",
            description:
              "12-hour smoked USDA Prime brisket with black garlic and heritage soy",
            price: 48,
            isGlutenFree: true,
          },
          {
            name: "Korean Style Short Ribs",
            description: "Grilled and smoked with ssamjang and cucumber kimchi",
            price: 52,
            isGlutenFree: true,
          },
          {
            name: "Roasted Bone Marrow",
            description: "Yuzu kosho chimichurri and smoked salt",
            price: 22,
            isGlutenFree: true,
          },
          {
            name: "Thai Coconut Fired Roasted Whole Fish",
            description: "Whole fish with coconut cream, lime, and fresh herbs",
            price: 46,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Rice & Noodles",
    description: "Asian influenced rice and noodle dishes",
    category: [
      {
        name: "Carbs",
        items: [
          {
            name: "Fried Rice",
            description: "Duck breast, foie gras, and soft herbs",
            price: 29,
            isGlutenFree: true,
          },
          {
            name: "Udon Noodles",
            description: "Garlic butter, wild mushrooms, and pecorino",
            price: 25,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Crispy Rice",
            description: "Spicy tuna tartare, serrano chili, and sweet soy",
            price: 23,
            isGlutenFree: false,
          },
        ],
      },
    ],
  },
  {
    title: "Desserts",
    description: "Unique Asian-influenced sweet finishes",
    category: [
      {
        name: "Sweet Endings",
        items: [
          {
            name: "Mom's Coconut Cake",
            description:
              "KYU's signature coconut layer cake with cream cheese frosting",
            price: 14,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Yuzu Cloud Cake",
            description:
              "Light yuzu mousse cake with graham cracker crust and citrus",
            price: 15,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Matcha Tres Leches",
            description:
              "Green tea-infused tres leches cake with white chocolate",
            price: 13,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Miso Chocolate Cake",
            description:
              "Dark chocolate cake with miso caramel and vanilla ice cream",
            price: 15,
            isVegetarian: true,
            isGlutenFree: false,
          },
        ],
      },
    ],
  },
];
