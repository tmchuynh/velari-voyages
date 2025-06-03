import { ResturantMenu } from "@/lib/types/types";

export const yokohamayokohamaChinatownManchinroMenu: ResturantMenu[] = [
  {
    title: "前菜",
    category: [
      {
        name: "Appetizers",
        items: [
          {
            name: "春巻き",
            description: "Spring rolls filled with vegetables and pork",
            price: 980,
          },
          {
            name: "フカヒレスープ",
            description: "Shark fin soup (specialty)",
            price: 22,
          },
          {
            name: "クラゲの冷菜",
            description: "Chilled jellyfish salad with sesame dressing",
            price: 1300,
          },
        ],
      },
    ],
  },
  {
    title: "点心",
    category: [
      {
        name: "Dim Sum",
        items: [
          {
            name: "小籠包",
            description: "Shanghai-style soup dumplings",
            price: 1500,
          },
          {
            name: "焼売",
            description: "Steamed pork shumai dumplings",
            price: 1200,
          },
          {
            name: "蝦餃",
            description: "Crystal shrimp dumplings",
            price: 1400,
          },
        ],
      },
    ],
  },
  {
    title: "主菜",
    category: [
      {
        name: "Main Dishes",
        items: [
          {
            name: "北京ダック",
            description:
              "Peking duck with pancakes, spring onions and sweet bean sauce",
            price: 8500,
          },
          {
            name: "麻婆豆腐",
            description: "Mapo tofu with Szechuan peppercorns",
            price: 1800,
          },
          {
            name: "チリソース海老",
            description: "Shrimp in chili sauce",
            price: 2500,
          },
        ],
      },
    ],
  },
  {
    title: "お食事",
    category: [
      {
        name: "Rice & Noodles",
        items: [
          {
            name: "チャーハン",
            description: "Special fried rice with XO sauce",
            price: 1600,
          },
          {
            name: "担々麺",
            description: "Tantanmen spicy noodle soup",
            price: 1800,
          },
          {
            name: "五目焼きそば",
            description: "Gomoku yakisoba with seafood and vegetables",
            price: 1700,
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
            name: "杏仁豆腐",
            description: "Almond jelly with fruit",
            price: 800,
          },
          {
            name: "マンゴープリン",
            description: "Mango pudding with evaporated milk",
            price: 900,
          },
        ],
      },
    ],
  },
];
