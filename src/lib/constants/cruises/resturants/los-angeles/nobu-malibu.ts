import { ResturantMenu } from "@/lib/types/types";

export const losAngelesnobuMalibuMenu: ResturantMenu[] = [
  {
    title: "Cold Dishes",
    description:
      "Chef Nobu Matsuhisa's renowned cold appetizers featuring fresh seafood with Japanese-Peruvian influences",
    category: [
      {
        name: "Signature Cold Dishes",
        items: [
          {
            name: "Yellowtail Jalapeño",
            description: "Thinly sliced yellowtail with jalapeño and yuzu soy",
            price: 26,
            isGlutenFree: false,
          },
          {
            name: "Tiradito Nobu Style",
            description: "Thinly sliced white fish with Peruvian chili sauce",
            price: 28,
            isGlutenFree: true,
          },
          {
            name: "Toro Tartare with Caviar",
            description: "Fatty tuna tartare topped with black caviar",
            price: 42,
            isGlutenFree: false,
          },
          {
            name: "New Style Sashimi",
            description:
              "Choice of salmon, white fish or beef with hot olive and sesame oil",
            price: 30,
            isGlutenFree: false,
          },
        ],
      },
      {
        name: "Salads & Tataki",
        items: [
          {
            name: "Lobster Shiitake Salad with Spicy Lemon Dressing",
            description:
              "Maine lobster with shiitake mushrooms and mixed greens",
            price: 38,
            isGlutenFree: false,
          },
          {
            name: "Baby Spinach Salad with Dry Miso",
            description:
              "Baby spinach, dry miso, grilled shrimp and yuzu dressing",
            price: 24,
            isGlutenFree: true,
          },
          {
            name: "Sashimi Salad",
            description:
              "Assorted sashimi over mixed greens with Matsuhisa dressing",
            price: 32,
            isGlutenFree: false,
          },
        ],
      },
    ],
  },
  {
    title: "Hot Dishes",
    description:
      "Innovative hot appetizers and entrees combining traditional Japanese techniques with global influences",
    category: [
      {
        name: "Signature Hot Dishes",
        items: [
          {
            name: "Black Cod Miso",
            description: "Miso-marinated black cod with yuzu miso sauce",
            price: 42,
            isGlutenFree: false,
          },
          {
            name: "Rock Shrimp Tempura",
            description: "Tempura rock shrimp with creamy spicy sauce or ponzu",
            price: 32,
            isGlutenFree: false,
          },
          {
            name: "Miso Soup with Tofu",
            description:
              "Traditional miso soup with tofu, wakame and green onion",
            price: 9,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "King Crab Tempura Amazu Ponzu",
            description: "King crab tempura with sweet and sour ponzu sauce",
            price: 48,
            isGlutenFree: false,
          },
        ],
      },
      {
        name: "From the Wood Oven",
        items: [
          {
            name: "Roasted Chilean Sea Bass with Yuzu Miso",
            description: "Wood oven-roasted sea bass with yuzu miso sauce",
            price: 48,
            isGlutenFree: false,
          },
          {
            name: "Kushiyaki Malibu",
            description:
              "Skewers of beef, chicken and vegetables with anticucho sauce",
            price: 36,
            isGlutenFree: true,
          },
          {
            name: "Whole Lobster with Wasabi Pepper Sauce",
            description:
              "Wood oven-roasted Maine lobster with spicy wasabi pepper sauce",
            price: 78,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Sushi & Sashimi",
    description:
      "The finest selection of fresh fish prepared by master sushi chefs",
    category: [
      {
        name: "Signature Rolls",
        items: [
          {
            name: "Yellowtail & Scallion Roll",
            description: "Fresh yellowtail with scallions",
            price: 15,
            isGlutenFree: false,
          },
          {
            name: "Spicy Tuna Roll",
            description: "Spicy tuna with cucumber and spicy mayo",
            price: 17,
            isGlutenFree: false,
          },
          {
            name: "California Roll",
            description: "Snow crab, avocado and cucumber",
            price: 15,
            isGlutenFree: false,
          },
          {
            name: "Soft Shell Crab Roll",
            description:
              "Tempura soft shell crab with avocado, cucumber and spicy mayo",
            price: 22,
            isGlutenFree: false,
          },
        ],
      },
      {
        name: "Omakase Experience",
        items: [
          {
            name: "Chef's Daily Omakase",
            description: "Multi-course tasting menu selected by the chef",
            price: 175,
            isGlutenFree: false,
          },
          {
            name: "Premium Omakase",
            description: "Elevated omakase experience with luxury ingredients",
            price: 22,
            isGlutenFree: false,
          },
        ],
      },
    ],
  },
  {
    title: "Wagyu & Premium Beef",
    description:
      "Exceptional cuts of premium Japanese and American beef prepared with Nobu's signature style",
    category: [
      {
        name: "Wagyu Selections",
        items: [
          {
            name: "Japanese A5 Wagyu Beef Tataki",
            description:
              "Lightly seared A5 Wagyu with ponzu sauce and garlic chips",
            price: 58,
            isGlutenFree: false,
          },
          {
            name: "Wagyu Tacos",
            description: "Wagyu beef served in mini tacos with truffle sauce",
            price: 36,
            isGlutenFree: false,
          },
          {
            name: "Wagyu Toban Yaki",
            description:
              "Wagyu beef cooked on a hot stone with seasonal mushrooms and wasabi",
            price: 65,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Desserts",
    description:
      "Innovative desserts blending Japanese flavors with classic techniques",
    category: [
      {
        name: "Sweet Finishes",
        items: [
          {
            name: "Miso Cappuccino",
            description:
              "White chocolate miso cappuccino with milk chocolate mousse",
            price: 17,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Banana Soy Tobanyaki",
            description:
              "Caramelized banana with soy salt caramel, malted milk chocolate and coconut ice cream",
            price: 15,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Bento Box",
            description: "Warm chocolate cake with green tea ice cream",
            price: 17,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Mochi Ice Cream Selection",
            description: "Assorted house-made mochi ice cream",
            price: 15,
            isVegetarian: true,
            isGlutenFree: false,
          },
        ],
      },
    ],
  },
];
