import { ResturantMenu } from "@/lib/types/types";

export const yokohamakaikayaByTheSeaMenu: ResturantMenu[] = [
  {
    title: "前菜",
    category: [
      {
        name: "Appetizers",
        items: [
          {
            name: "マグロのタタキ",
            description: "Seared tuna tataki with ponzu sauce and garlic chips",
            price: 1600,
          },
          {
            name: "カルパッチョ盛り合わせ",
            description: "Assorted fresh fish carpaccio with yuzu dressing",
            price: 1800,
          },
          {
            name: "アボカドと海老のタルタル",
            description: "Avocado and shrimp tartar with wasabi mayonnaise",
            price: 1500,
          },
        ],
      },
    ],
    description: "",
  },
  {
    title: "刺身",
    category: [
      {
        name: "Sashimi",
        items: [
          {
            name: "本日の刺身盛り合わせ",
            description: "Today's assorted sashimi platter (5 kinds)",
            price: 2800,
          },
          {
            name: "特選刺身盛り合わせ",
            description: "Premium sashimi selection (7 kinds)",
            price: 3800,
          },
          {
            name: "本マグロ赤身と大トロ",
            description: "Bluefin tuna akami and otoro sashimi",
            price: 4200,
          },
        ],
      },
    ],
    description: "",
  },
  {
    title: "グリルメニュー",
    category: [
      {
        name: "Grilled Dishes",
        items: [
          {
            name: "本日の魚のガーリックバターグリル",
            description: "Today's grilled fish with garlic butter sauce",
            price: 24,
          },
          {
            name: "マグロのステーキ バルサミコソース",
            description: "Tuna steak with balsamic reduction",
            price: 26,
          },
          {
            name: "サーモンのハーブグリル",
            description: "Herb-crusted grilled salmon with yuzu pepper",
            price: 22,
          },
        ],
      },
    ],
    description: "",
  },
  {
    title: "フュージョン料理",
    category: [
      {
        name: "Fusion Specialties",
        items: [
          {
            name: "タイ風シーフードカレー",
            description: "Thai-inspired seafood curry with coconut milk",
            price: 1900,
          },
          {
            name: "メキシカンマグロタコス",
            description: "Tuna tacos with guacamole and jalapeño",
            price: 1700,
          },
          {
            name: "海鮮トマトパスタ",
            description: "Seafood tomato pasta with basil and garlic",
            price: 1800,
          },
        ],
      },
    ],
    description: "",
  },
  {
    title: "デザート",
    category: [
      {
        name: "Desserts",
        items: [
          {
            name: "抹茶ティラミス",
            description: "Green tea tiramisu",
            price: 850,
          },
          {
            name: "黒ごまクリームブリュレ",
            description: "Black sesame crème brûlée",
            price: 900,
          },
          {
            name: "季節のフルーツと柚子シャーベット",
            description: "Seasonal fruit with yuzu sorbet",
            price: 800,
          },
        ],
      },
    ],
    description: "",
  },
];
