import { ResturantMenu } from "@/lib/types/types";

export const singaporehawkerChanMenu: ResturantMenu[] = [
  {
    title: "Signature Dishes",
    category: [
      {
        name: "Award-Winning Specialties",
        items: [
          {
            name: "Soya Sauce Chicken (Whole)",
            description:
              "Michelin-starred whole chicken braised in secret soya sauce recipe",
            price: 23,
          },
          {
            name: "Soya Sauce Chicken Rice",
            description:
              "Tender chicken with aromatic rice and signature sauce",
            price: 7.5,
          },
          {
            name: "Soya Sauce Chicken Noodle",
            description: "Signature chicken served with springy egg noodles",
            price: 7.5,
          },
          {
            name: "Char Siu (BBQ Pork) Rice",
            description: "Caramelized barbecue pork with fragrant rice",
            price: 7.5,
          },
        ],
      },
    ],
    description: "Chef Chan Hon Meng's world-famous dishes",
  },
  {
    title: "Combination Plates",
    category: [
      {
        name: "Mix & Match",
        items: [
          {
            name: "Soya Sauce Chicken & Char Siu Rice",
            description: "Combination of signature chicken and BBQ pork",
            price: 8.5,
          },
          {
            name: "Soya Sauce Chicken & Roasted Pork Rice",
            description: "Signature chicken with crispy roasted pork belly",
            price: 8.5,
          },
          {
            name: "Three Combination Platter",
            description:
              "Trio of soya sauce chicken, char siu and roasted pork",
            price: 9.5,
          },
        ],
      },
    ],
    description: "",
  },
  {
    title: "Individual Portions",
    category: [
      {
        name: "À La Carte",
        items: [
          {
            name: "Soya Sauce Chicken (Quarter)",
            description: "Quarter chicken portion with sauce",
            price: 6,
          },
          {
            name: "Soya Sauce Chicken (Half)",
            description: "Half chicken portion with sauce",
            price: 12,
          },
          {
            name: "Char Siu (100g)",
            description: "BBQ pork by weight",
            price: 6,
          },
          {
            name: "Roasted Pork (100g)",
            description: "Crispy roasted pork belly by weight",
            price: 6,
          },
        ],
      },
    ],
    description: "",
  },
  {
    title: "Vegetables",
    category: [
      {
        name: "Sides",
        items: [
          {
            name: "Seasonal Vegetables",
            description: "Stir-fried seasonal greens with garlic",
            price: 6,
          },
          {
            name: "Bean Sprouts",
            description: "Blanched bean sprouts with soy sauce and sesame oil",
            price: 4,
          },
        ],
      },
    ],
    description: "",
  },
  {
    title: "Additional Items",
    category: [
      {
        name: "Extras",
        items: [
          {
            name: "Thai-style Tofu",
            description: "Silky tofu with spicy and sour sauce",
            price: 5,
          },
          {
            name: "Wonton Soup",
            description: "Handmade pork and shrimp dumplings in clear broth",
            price: 5,
          },
          {
            name: "Extra Rice",
            description: "Bowl of aromatic rice",
            price: 1.5,
          },
          {
            name: "Extra Noodles",
            description: "Portion of egg noodles",
            price: 1.5,
          },
        ],
      },
    ],
    description: "",
  },
  {
    title: "Beverages",
    category: [
      {
        name: "Drinks",
        items: [
          {
            name: "Chinese Tea",
            description: "Traditional Chinese tea",
            price: 1.5,
          },
          {
            name: "Barley Water",
            description: "Homemade cooling barley drink",
            price: 2,
          },
          {
            name: "Canned Drinks",
            description: "Selection of soft drinks",
            price: 2,
          },
        ],
      },
    ],
    description: "",
  },
];
