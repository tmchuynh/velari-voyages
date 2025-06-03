import { ResturantMenu } from "@/lib/types/types";

export const melbournechinChinMenu: ResturantMenu[] = [
  {
    title: "Feed Me",
    category: [
      {
        name: "Curated Experiences",
        items: [
          {
            name: "Just Feed Me",
            description:
              "Chef's selection of Chin Chin favorites - a shared feast experience",
            price: 79.5,
          },
          {
            name: "Feed Me More",
            description:
              "Extended chef's selection with premium dishes and dessert",
            price: 109.5,
          },
        ],
      },
    ],
    description: "Let the kitchen decide - our most popular dining option",
  },
  {
    title: "Small Plates",
    category: [
      {
        name: "Starters",
        items: [
          {
            name: "Kingfish Sashimi",
            description: "Lime, chilli, coconut & Thai basil",
            price: 24,
          },
          {
            name: "Son-in-Law Eggs",
            description: "Chilli jam, Thai basil & coriander",
            price: 16,
          },
          {
            name: "Pad Ping Gai",
            description: "Spicy chicken, peanuts, soy & sesame",
            price: 18,
          },
          {
            name: "Pork & Prawn Spring Rolls",
            description: "Nam phrik pla, lettuce cups & herbs",
            price: 19,
          },
        ],
      },
      {
        name: "Salads",
        items: [
          {
            name: "Papaya Salad",
            description: "Green papaya, peanuts, snake beans & chilli",
            price: 18,
          },
          {
            name: "Crispy Barramundi & Green Apple Salad",
            description: "Caramelized pork, peanuts, nahm yum & herbs",
            price: 26,
          },
          {
            name: "Coconut Poached Chicken Salad",
            description: "Cucumber, lemongrass & coriander",
            price: 22,
          },
        ],
      },
    ],
    description: "Perfect for sharing or as starters",
  },
  {
    title: "Curries & Stir-Frys",
    category: [
      {
        name: "Wok-Tossed",
        items: [
          {
            name: "Pad Thai",
            description: "Prawns, dried tofu, bean shoots, peanuts & lime",
            price: 32,
          },
          {
            name: "Stir Fried Wagyu Beef",
            description: "Oyster mushrooms, black pepper & holy basil",
            price: 36,
          },
          {
            name: "Crispy Pork Belly Stir Fry",
            description: "Snake beans, kaffir lime leaf & chilli",
            price: 34,
          },
        ],
      },
      {
        name: "Curries",
        items: [
          {
            name: "Massaman Curry of Coconut Braised Beef",
            description: "Kipfler potatoes, peanuts & crispy shallots",
            price: 36,
          },
          {
            name: "Yellow Curry of Cauliflower & Roasted Pumpkin",
            description: "Snake beans, Thai eggplant & holy basil",
            price: 29,
            isVegetarian: true,
            isVegan: true,
          },
          {
            name: "Jungle Curry",
            description:
              "Wild ginger, green peppercorn & Thai eggplant with your choice of chicken or tofu",
            price: 32,
          },
        ],
      },
    ],
    description: "Bold and aromatic main courses",
  },
  {
    title: "BBQ & Roasted",
    category: [
      {
        name: "From the Grill",
        items: [
          {
            name: "BBQ King Salmon",
            description: "Chilli, lime & green nahm jim",
            price: 38,
          },
          {
            name: "Twice-Cooked Beef Short Rib",
            description: "Shaved coconut, chilli & tamarind sauce",
            price: 42,
          },
          {
            name: "Soy Braised Pork Belly",
            description: "Five spice, chilli caramel & apple slaw",
            price: 36,
          },
        ],
      },
    ],
    description: "Chargrilled and roasted dishes with complex flavors",
  },
  {
    title: "Sides",
    category: [
      {
        name: "Accompaniments",
        items: [
          {
            name: "Coconut Rice",
            description: "Jasmine rice with toasted coconut",
            price: 5,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Stir Fried Greens",
            description: "Gai lan with oyster sauce and crispy garlic",
            price: 14,
          },
          {
            name: "Roti Canai",
            description: "Flaky Malaysian flatbread",
            price: 8,
            isVegetarian: true,
          },
        ],
      },
    ],
    description: "Complete your meal with these accompaniments",
  },
  {
    title: "Desserts",
    category: [
      {
        name: "Sweet Endings",
        items: [
          {
            name: "Palm Sugar Ice Cream Sundae",
            description: "Salted honeycomb, lime syrup & fresh coconut",
            price: 16,
          },
          {
            name: "Sticky Black Rice",
            description: "Coconut sorbet, mango & passionfruit",
            price: 15,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Banana Roti Pancake",
            description: "Condensed milk, cinnamon sugar & coconut ice cream",
            price: 18,
            isVegetarian: true,
          },
        ],
      },
    ],
    description: "Indulgent sweet treats with an Asian twist",
  },
];
