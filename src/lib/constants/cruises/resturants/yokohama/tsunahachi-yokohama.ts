import { ResturantMenu } from "@/lib/types/types";

export const yokohamatsunahachiYokohamaMenu: ResturantMenu[] = [
  {
    title: "セット",
    category: [
      {
        name: "Set Meals",
        items: [
          {
            name: "特上天ぷらコース",
            description: "Premium tempura course with seasonal specialties",
            price: 8500,
          },
          {
            name: "天ぷら会席",
            description: "Tempura kaiseki course with appetizers and dessert",
            price: 6800,
          },
          {
            name: "おまかせコース",
            description: "Chef's choice tempura course",
            price: 5500,
          },
        ],
      },
    ],
  },
  {
    title: "一品料理",
    category: [
      {
        name: "Individual Tempura",
        items: [
          {
            name: "海老天ぷら",
            description: "Large prawn tempura (2 pieces)",
            price: 1200,
          },
          {
            name: "穴子天ぷら",
            description: "Sea eel tempura",
            price: 1500,
          },
          {
            name: "鱚天ぷら",
            description: "Whiting fish tempura",
            price: 1300,
          },
          {
            name: "季節野菜の天ぷら",
            description: "Seasonal vegetable tempura assortment",
            price: 1800,
          },
        ],
      },
    ],
  },
  {
    title: "御飯物",
    category: [
      {
        name: "Rice & Noodles",
        items: [
          {
            name: "天丼",
            description: "Tempura donburi with seafood and vegetables",
            price: 2800,
          },
          {
            name: "かき揚げ丼",
            description: "Mixed seafood and vegetable kakiage over rice",
            price: 24,
          },
          {
            name: "天茶",
            description: "Tempura served with soba noodles",
            price: 26,
          },
        ],
      },
    ],
  },
  {
    title: "デザート",
    category: [
      {
        name: "Desserts",
        items: [
          {
            name: "抹茶アイスクリーム",
            description: "Green tea ice cream",
            price: 700,
          },
          {
            name: "季節のフルーツ天ぷら",
            description: "Seasonal fruit tempura with honey",
            price: 1200,
          },
        ],
      },
    ],
  },
];
