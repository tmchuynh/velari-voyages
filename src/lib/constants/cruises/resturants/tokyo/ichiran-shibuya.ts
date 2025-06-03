import { ResturantMenu } from "@/lib/types/types";

export const tokyoichiranShibuyaMenu: ResturantMenu[] = [
  {
    title: "ラーメン",
    category: [
      {
        name: "Signature Ramen",
        items: [
          {
            name: "一蘭ラーメン",
            description:
              "Ichiran's classic tonkotsu ramen with signature red sauce",
            price: 980,
          },
          {
            name: "特製ラーメン",
            description: "Special ramen with extra toppings",
            price: 1280,
          },
          {
            name: "替玉",
            description:
              "Extra serving of noodles to add to your remaining broth",
            price: 200,
          },
        ],
      },
    ],
    description:
      "Ichiran specializes in a single type of ramen: tonkotsu (pork bone broth) ramen, perfected through decades of dedication",
  },
  {
    title: "トッピング",
    category: [
      {
        name: "Additional Toppings",
        items: [
          {
            name: "チャーシュー",
            description: "Extra sliced pork",
            price: 200,
          },
          {
            name: "ねぎ",
            description: "Green onions",
            price: 100,
          },
          {
            name: "キクラゲ",
            description: "Wood ear mushrooms",
            price: 100,
          },
          {
            name: "固ゆで玉子",
            description: "Seasoned boiled egg",
            price: 180,
          },
        ],
      },
    ],
    description: "Customize your ramen experience with additional toppings",
  },
  {
    title: "カスタマイズ",
    category: [
      {
        name: "Customization Options",
        items: [
          {
            name: "麺の固さ",
            description:
              "Noodle firmness (soft, medium, firm, very firm, extra firm)",
            price: 0,
          },
          {
            name: "スープの濃さ",
            description: "Broth richness (light, medium, rich)",
            price: 0,
          },
          {
            name: "赤い秘伝のたれ",
            description: "Spice level (none, mild, medium, hot, extra hot)",
            price: 0,
          },
          {
            name: "ニンニク",
            description: "Garlic (none, light, medium, strong)",
            price: 0,
          },
          {
            name: "ネギ",
            description: "Green onions (none, half, full)",
            price: 0,
          },
          {
            name: "チャーシュー",
            description: "Pork (thin, medium, thick slices)",
            price: 0,
          },
        ],
      },
    ],
    description:
      "Ichiran's famous order sheet allows you to customize every aspect of your ramen experience",
  },
  {
    title: "サイドメニュー",
    category: [
      {
        name: "Side Dishes",
        items: [
          {
            name: "一蘭特製ご飯",
            description: "Ichiran's special rice",
            price: 300,
          },
          {
            name: "餃子",
            description: "Pan-fried dumplings (5 pieces)",
            price: 580,
          },
          {
            name: "のり",
            description: "Extra nori seaweed",
            price: 120,
          },
        ],
      },
    ],
    description: "Additional items to complement your ramen",
  },
  {
    title: "ドリンク",
    category: [
      {
        name: "Beverages",
        items: [
          {
            name: "ビール",
            description: "Draft beer",
            price: 550,
          },
          {
            name: "烏龍茶",
            description: "Oolong tea",
            price: 300,
          },
          {
            name: "緑茶",
            description: "Green tea",
            price: 300,
          },
          {
            name: "ソフトドリンク",
            description: "Soft drinks",
            price: 300,
          },
        ],
      },
    ],
    description: "",
  },
];
