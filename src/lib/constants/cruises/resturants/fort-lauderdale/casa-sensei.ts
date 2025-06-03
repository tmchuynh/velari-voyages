import { ResturantMenu } from "@/lib/types/types";

export const fortLauderdalecasaSenseiMenu: ResturantMenu[] = [
  {
    title: "Small Plates",
    category: [
      {
        name: "Pan-Asian Tapas",
        items: [
          {
            name: "Edamame",
            description: "Steamed soybeans, sea salt or spicy garlic",
            price: 15,
          },
          {
            name: "Gyoza",
            description: "Pan-seared pork & vegetable dumplings, ponzu sauce",
            price: 14,
          },
          {
            name: "Rock Shrimp Tempura",
            description: "Crispy tempura shrimp, spicy mayo, sweet chili sauce",
            price: 15,
          },
          {
            name: "Lobster Guacamole",
            description: "Fresh avocado, Maine lobster, plantain chips, yuzu",
            price: 22,
          },
        ],
      },
      {
        name: "Latin-Inspired Starters",
        items: [
          {
            name: "Pork Belly Bao Buns",
            description:
              "Slow-braised pork, hoisin, pickled vegetables, cilantro",
            price: 15,
          },
          {
            name: "Tuna Tataki",
            description: "Seared tuna, avocado, jalapeño, yuzu ponzu",
            price: 17,
          },
          {
            name: "Crispy Calamari",
            description: "Flash-fried with sweet chili glaze, cilantro aioli",
            price: 15,
          },
        ],
      },
    ],
    description: "",
  },
  {
    title: "Sushi & Sashimi",
    category: [
      {
        name: "Traditional & Fusion Rolls",
        items: [
          {
            name: "Sensei Roll",
            description:
              "Spicy tuna, tempura shrimp, avocado, jalapeño, topped with seared salmon, yuzu sauce",
            price: 22,
          },
          {
            name: "Las Olas Roll",
            description:
              "Crab, avocado, cucumber, topped with tuna, salmon, white fish, yuzu ponzu",
            price: 24,
          },
          {
            name: "Dragon Roll",
            description:
              "Eel, cucumber, topped with avocado, eel sauce, sesame seeds",
            price: 17,
          },
          {
            name: "Latinista Roll",
            description:
              "Tempura shrimp, avocado, topped with spicy crab salad, chipotle mayo",
            price: 20,
          },
        ],
      },
      {
        name: "Chef's Selection",
        items: [
          {
            name: "Sashimi Platter",
            description: "Chef's selection of 15 pieces of fresh fish",
            price: 35,
          },
          {
            name: "Sushi & Sashimi Combo",
            description:
              "Chef's selection of 8 pieces sushi, 9 pieces sashimi, and 1 specialty roll",
            price: 42,
          },
        ],
      },
    ],
    description: "",
  },
  {
    title: "Ramen & Noodles",
    category: [
      {
        name: "House Specialties",
        items: [
          {
            name: "Tonkotsu Ramen",
            description:
              "Pork broth, chashu pork, soft egg, bean sprouts, scallions",
            price: 17,
          },
          {
            name: "Spicy Miso Ramen",
            description:
              "Spicy miso broth, chicken, corn, soft egg, bean sprouts",
            price: 18,
          },
          {
            name: "Chili Garlic Noodles",
            description:
              "Wok-tossed egg noodles, vegetables, chili garlic sauce",
            price: 15,
          },
          {
            name: "Pad Thai",
            description:
              "Rice noodles, egg, bean sprouts, peanuts, tamarind sauce with choice of protein",
            price: 20,
          },
        ],
      },
    ],
    description: "",
  },
  {
    title: "Land & Sea",
    category: [
      {
        name: "Asian-Latin Fusion",
        items: [
          {
            name: "Miso Glazed Chilean Sea Bass",
            description:
              "Sweet miso glaze, bok choy, shiitake mushrooms, ginger soy broth",
            price: 42,
          },
          {
            name: "Korean BBQ Short Ribs",
            description:
              "Slow-braised boneless short ribs, kimchi fried rice, gochujang sauce",
            price: 36,
          },
          {
            name: "Churrasco Steak",
            description:
              "Grilled skirt steak, chimichurri, wasabi mashed potatoes, grilled vegetables",
            price: 34,
          },
          {
            name: "Bangkok Curry",
            description:
              "Choice of protein, coconut curry, vegetables, jasmine rice",
            price: 20,
          },
        ],
      },
      {
        name: "Wok Specialties",
        items: [
          {
            name: "Kung Pao Chicken",
            description:
              "Wok-fried chicken, bell peppers, peanuts, dried chili, scallions",
            price: 22,
          },
          {
            name: "Mongolian Beef",
            description: "Wok-seared beef, scallions, onions, sweet soy glaze",
            price: 26,
          },
          {
            name: "Buddha's Feast",
            description: "Stir-fried mixed vegetables, tofu, garlic sauce",
            price: 20,
          },
        ],
      },
    ],
    description: "",
  },
  {
    title: "Sides",
    category: [
      {
        name: "Accompaniments",
        items: [
          {
            name: "Kimchi Fried Rice",
            description: "Wok-fried rice, house kimchi, vegetables, egg",
            price: 12,
          },
          {
            name: "Wok-Charred Brussels Sprouts",
            description: "Sweet chili glaze, sesame seeds",
            price: 10,
          },
          {
            name: "Truffle Mushroom Rice",
            description: "Shiitake, enoki and button mushrooms, truffle oil",
            price: 14,
          },
          {
            name: "Yuca Fries",
            description: "Crispy yuca, garlic aioli",
            price: 8,
          },
        ],
      },
    ],
    description: "",
  },
  {
    title: "Desserts",
    category: [
      {
        name: "Sweet Finale",
        items: [
          {
            name: "Green Tea Mochi Ice Cream",
            description: "Assorted mochi ice cream, fresh berries",
            price: 10,
          },
          {
            name: "Banana Tempura",
            description:
              "Crispy tempura bananas, caramel sauce, vanilla ice cream",
            price: 12,
          },
          {
            name: "Churro Bites",
            description:
              "Cinnamon sugar churros, dulce de leche, chocolate sauce",
            price: 10,
          },
          {
            name: "Coconut Flan",
            description: "Classic Latin flan with coconut, caramelized sugar",
            price: 10,
          },
        ],
      },
    ],
    description: "",
  },
];
