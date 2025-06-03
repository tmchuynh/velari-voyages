import { ResturantMenu } from "@/lib/types/types";

export const hongKongyardbirdMenu: ResturantMenu[] = [
  {
    title: "Small Plates",
    category: [
      {
        name: "Starters",
        items: [
          {
            name: "KFC – Korean Fried Cauliflower",
            description: "Yuzu and chili glaze, sesame seeds",
            price: 98,
          },
          {
            name: "Corn Tempura",
            description: "Miso butter, shichimi, sea salt",
            price: 88,
          },
          {
            name: "Sweet Potato",
            description: "Gochujang butter, lime, furikake",
            price: 78,
          },
          {
            name: "Edamame",
            description: "Sea salt or chili garlic oil",
            price: 58,
          },
        ],
      },
      {
        name: "Raw & Cold",
        items: [
          {
            name: "Tuna Tartare",
            description: "Avocado, crispy rice, wasabi, sesame",
            price: 168,
          },
          {
            name: "Cucumber Salad",
            description: "Garlic, sesame oil, chili vinegar",
            price: 88,
          },
          {
            name: "Kale Salad",
            description: "Crispy panko, creamy sesame dressing",
            price: 10,
          },
        ],
      },
    ],
    description: "",
  },
  {
    title: "Binchotan Grill",
    category: [
      {
        name: "Yakitori (2 skewers per order)",
        items: [
          {
            name: "Thigh",
            description: "Chicken thigh, sea salt or tare sauce",
            price: 48,
          },
          {
            name: "Breast",
            description: "Chicken breast with wasabi & scallions",
            price: 48,
          },
          {
            name: "Meatball",
            description: "Chicken meatballs, tare, egg yolk",
            price: 58,
          },
          {
            name: "Heart",
            description: "Chicken heart, sea salt or tare sauce",
            price: 48,
          },
          {
            name: "Liver",
            description: "Chicken liver, tare sauce",
            price: 48,
          },
          {
            name: "Skin",
            description: "Crispy chicken skin, sea salt",
            price: 48,
          },
          {
            name: "Tail",
            description: "Chicken tail, sea salt or tare sauce",
            price: 48,
          },
          {
            name: "Knee",
            description: "Chicken cartilage, sea salt or tare sauce",
            price: 48,
          },
          {
            name: "Oyster",
            description: "Chicken oysters, sea salt or tare sauce",
            price: 58,
          },
        ],
      },
      {
        name: "Specialty Skewers",
        items: [
          {
            name: "Wings",
            description: "Chicken wings with garlic and sea salt",
            price: 78,
          },
          {
            name: "Tsukune",
            description: "Hand-minced chicken dumpling",
            price: 58,
          },
          {
            name: "Mushroom",
            description: "Maitake mushroom, butter, sea salt",
            price: 78,
          },
          {
            name: "Asparagus",
            description: "Bacon-wrapped asparagus",
            price: 68,
          },
        ],
      },
    ],
    description: "",
  },
  {
    title: "Rice & Noodles",
    category: [
      {
        name: "Carbs",
        items: [
          {
            name: "Chicken & Egg",
            description: "Chicken rice bowl with soft-cooked egg",
            price: 128,
          },
          {
            name: "Yardbird Fried Rice",
            description: "Crispy chicken skin, vegetables, egg",
            price: 10,
          },
          {
            name: "Udon Carbonara",
            description: "Bacon, onsen egg, parmesan, black pepper",
            price: 158,
          },
        ],
      },
    ],
    description: "",
  },
  {
    title: "Larger Plates",
    category: [
      {
        name: "Sharing Dishes",
        items: [
          {
            name: "Sunday's Chicken",
            description: "Half free-range chicken, roasted on the bone",
            price: 298,
          },
          {
            name: "Katsu Sando",
            description:
              "Breaded chicken thigh, cabbage, tonkatsu sauce, milk bread",
            price: 148,
          },
          {
            name: "Fried Chicken",
            description: "Japanese-style fried chicken, garlic caramel, chili",
            price: 158,
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
        name: "Sweet Endings",
        items: [
          {
            name: "Whisky Ice Cream",
            description: "Salted chocolate cookie crumble, whisky caramel",
            price: 78,
          },
          {
            name: "Coconut Soft Serve",
            description: "Seasonal fruit, brown sugar syrup",
            price: 68,
          },
        ],
      },
    ],
    description: "",
  },
];
