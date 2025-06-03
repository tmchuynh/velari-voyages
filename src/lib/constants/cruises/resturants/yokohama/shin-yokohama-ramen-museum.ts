import { ResturantMenu } from "@/lib/types/types";

export const yokohamashinYokohamaRamenMuseumMenu: ResturantMenu[] = [
  {
    title: "札幌ラーメン 純連",
    category: [
      {
        name: "Sapporo Ramen Junren",
        items: [
          {
            name: "味噌ラーメン",
            description: "Sapporo-style miso ramen with corn and butter",
            price: 950,
          },
          {
            name: "特製味噌チャーシューメン",
            description: "Special miso ramen with extra chashu pork",
            price: 1300,
          },
          {
            name: "辛味噌ラーメン",
            description: "Spicy miso ramen",
            price: 11,
          },
        ],
      },
    ],
  },
  {
    title: "博多ラーメン 一幸舎",
    category: [
      {
        name: "Hakata Ramen Ikkousha",
        items: [
          {
            name: "博多豚骨ラーメン",
            description: "Hakata-style pork bone tonkotsu ramen",
            price: 880,
          },
          {
            name: "特製とんこつラーメン",
            description: "Premium tonkotsu ramen with all toppings",
            price: 1250,
          },
          {
            name: "替え玉",
            description: "Extra portion of noodles",
            price: 180,
          },
        ],
      },
    ],
  },
  {
    title: "東京ラーメン 六厘舎",
    category: [
      {
        name: "Tokyo Ramen Rokurinsha",
        items: [
          {
            name: "特製つけ麺",
            description: "Special tsukemen (dipping noodles)",
            price: 11,
          },
          {
            name: "大盛りつけ麺",
            description: "Large portion tsukemen",
            price: 1250,
          },
          {
            name: "辛辛つけ麺",
            description: "Spicy tsukemen",
            price: 1200,
          },
        ],
      },
    ],
  },
  {
    title: "広島ラーメン 辛部",
    category: [
      {
        name: "Hiroshima Ramen Karabe",
        items: [
          {
            name: "尾道ラーメン",
            description: "Onomichi-style shoyu ramen with fish and pork broth",
            price: 900,
          },
          {
            name: "広島辛辛ラーメン",
            description: "Hiroshima-style spicy ramen",
            price: 10,
          },
          {
            name: "チャーシュー尾道ラーメン",
            description: "Onomichi ramen with extra chashu",
            price: 1200,
          },
        ],
      },
    ],
  },
  {
    title: "サイドメニュー",
    category: [
      {
        name: "Side Orders",
        items: [
          {
            name: "餃子",
            description: "Pan-fried gyoza dumplings (6 pieces)",
            price: 550,
          },
          {
            name: "チャーハン",
            description: "Fried rice",
            price: 650,
          },
          {
            name: "ビール各種",
            description: "Selection of Japanese beer",
            price: 550,
          },
        ],
      },
    ],
    description: "",
  },
];
