import { ResturantMenu } from "@/lib/types/types";

export const southamptonlakazMamanMenu: ResturantMenu[] = [
  {
    title: "Street Food",
    category: [
      {
        name: "Small Bites",
        items: [
          {
            name: "Gateaux Piment",
            description:
              "Spiced chilli and split pea fritters with coriander chutney",
            price: 6.5,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Mauritian Chicken Wings",
            description:
              "Marinated in garlic, ginger and coriander with chilli dipping sauce",
            price: 8.5,
            isGlutenFree: true,
          },
          {
            name: "Prawn Rougaille Flatbread",
            description:
              "Handmade flatbread topped with spiced tomato sauce and prawns",
            price: 9.95,
            isGlutenFree: false,
          },
          {
            name: "Chilli Bites",
            description: "Split pea fritters with tamarind chutney",
            price: 6.25,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "To Share",
        items: [
          {
            name: "Mauritian Mezze",
            description:
              "Selection of fritters, flatbreads, chutneys and pickles",
            price: 18.5,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Creole Platter",
            description: "Chicken wings, fish goujons, chilli bites and dips",
            price: 22,
            isGlutenFree: false,
          },
        ],
      },
    ],
    description: "Authentic Mauritian street food snacks and sharers",
  },
  {
    title: "Currys & Stews",
    category: [
      {
        name: "Mauritian Specialties",
        items: [
          {
            name: "Chicken Curry",
            description:
              "Classic Mauritian curry with potato, thyme and cinnamon, served with fragrant rice",
            price: 15.95,
            isGlutenFree: true,
          },
          {
            name: "Prawn Rougaille",
            description:
              "Prawns cooked in Creole tomato sauce with peppers and herbs, served with rice",
            price: 17.95,
            isGlutenFree: true,
          },
          {
            name: "Fish Vindaye",
            description:
              "Mustard and turmeric marinated fish with onions and pickled vegetables",
            price: 16.95,
            isGlutenFree: true,
          },
          {
            name: "Butter Bean Curry",
            description:
              "Slow-cooked beans in coconut curry sauce with turmeric and cumin",
            price: 14.5,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
    description:
      "Fragrant curries inspired by Mauritius's diverse culinary heritage",
  },
  {
    title: "Grills",
    category: [
      {
        name: "From the BBQ",
        items: [
          {
            name: "Chicken Flat",
            description:
              "Spatchcocked marinated chicken with chilli, garlic and coriander, served with salad and fries",
            price: 16.95,
            isGlutenFree: true,
          },
          {
            name: "Grilled Fish of the Day",
            description:
              "Fresh fish with Creole sauce, herb salad and fragrant rice",
            price: 19.95,
            isGlutenFree: true,
          },
          {
            name: "Mauritian BBQ Ribs",
            description:
              "Slow-cooked pork ribs glazed with tamarind, honey and five spice",
            price: 18.5,
            isGlutenFree: true,
          },
        ],
      },
    ],
    description: "BBQ dishes influenced by Mauritius's Chinese heritage",
  },
  {
    title: "Noodles & Rice",
    category: [
      {
        name: "Wok-Tossed",
        items: [
          {
            name: "Mine Frite",
            description:
              "Stir-fried noodles with vegetables, egg and your choice of chicken, prawn or tofu",
            price: 15.95,
            isGlutenFree: false,
          },
          {
            name: "Fried Rice",
            description:
              "Mauritian-style fried rice with vegetables, egg and your choice of protein",
            price: 14.95,
            isGlutenFree: true,
          },
          {
            name: "Dholl Puri Wrap",
            description:
              "Split pea pancake filled with curry, pickles and chutneys",
            price: 12.95,
            isVegetarian: true,
            isGlutenFree: false,
          },
        ],
      },
    ],
    description: "Hearty street food classics with Sino-Mauritian flavors",
  },
  {
    title: "Sides",
    category: [
      {
        name: "Accompaniments",
        items: [
          {
            name: "Mauritian Salad",
            description: "Mixed leaf salad with palm heart and house dressing",
            price: 4.95,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Achard de Legumes",
            description:
              "Pickled vegetables with turmeric, mustard seeds and chilli",
            price: 4.5,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Roti",
            description: "Traditional flatbread",
            price: 3.5,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: false,
          },
          {
            name: "Fragrant Rice",
            description: "Basmati rice with cardamom and cinnamon",
            price: 3.95,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Hand-Cut Fries",
            description: "With Mauritian spice salt",
            price: 4.25,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
    description: "Perfect additions to your meal",
  },
  {
    title: "Desserts",
    category: [
      {
        name: "Sweet Treats",
        items: [
          {
            name: "Banana Tart Tatin",
            description: "Caramelized bananas with rum and vanilla ice cream",
            price: 7.95,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Coconut & Mango Cheesecake",
            description: "Tropical flavors with passion fruit coulis",
            price: 8.25,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Pineapple Flambé",
            description:
              "Rum-flamed caramelized pineapple with coconut ice cream",
            price: 8.5,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Napolitaine",
            description:
              "Traditional Mauritian shortbread cookies with jam and coconut",
            price: 6.95,
            isVegetarian: true,
            isGlutenFree: false,
          },
        ],
      },
    ],
    description: "Sweet endings with tropical island flavors",
  },
];
