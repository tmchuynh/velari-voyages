import { ResturantMenu } from "@/lib/types/types";

export const tokyosukiyabashiJiroMenu: ResturantMenu[] = [
  {
    title: "すきやばし次郎おまかせコース",
    category: [
      {
        name: "Omakase Course",
        items: [
          {
            name: "おまかせ寿司コース",
            description:
              "Chef Jiro's renowned 20-piece sushi course, served piece by piece in the traditional Edomae style",
            price: 40000,
          },
        ],
      },
    ],
    description:
      "The legendary sushi experience is served as a single, carefully sequenced omakase course that lasts approximately 30 minutes. Reservations required one month in advance.",
  },
  {
    title: "コースの流れ",
    category: [
      {
        name: "Course Progression",
        items: [
          {
            name: "軽い白身魚",
            description: "Light white fish (such as squid, flounder)",
            price: 0,
          },
          {
            name: "中脂の魚",
            description: "Medium-fatty fish (such as yellowtail)",
            price: 0,
          },
          {
            name: "赤身魚",
            description: "Red fish (such as lean tuna)",
            price: 0,
          },
          {
            name: "光物",
            description: "Silver-skinned fish (such as mackerel, gizzard shad)",
            price: 0,
          },
          {
            name: "貝類",
            description: "Shellfish varieties",
            price: 0,
          },
          {
            name: "穴子",
            description: "Sea eel",
            price: 0,
          },
          {
            name: "海老",
            description: "Shrimp varieties",
            price: 0,
          },
          {
            name: "中トロと大トロ",
            description: "Medium-fatty and fatty tuna",
            price: 0,
          },
          {
            name: "玉子焼き",
            description: "Sweet egg omelet (traditional course finale)",
            price: 0,
          },
        ],
      },
    ],
    description:
      "Each piece is served directly from the chef to your plate, to be eaten immediately. The progression is carefully designed to build flavors throughout the experience.",
  },
  {
    title: "飲み物",
    category: [
      {
        name: "Beverages",
        items: [
          {
            name: "日本茶",
            description: "Traditional Japanese green tea",
            price: 0,
          },
          {
            name: "日本酒",
            description: "Selected premium sake (by the glass)",
            price: 3000,
          },
          {
            name: "ビール",
            description: "Japanese beer",
            price: 1500,
          },
        ],
      },
    ],
    description:
      "A select range of beverages to complement your sushi experience",
  },
];
