import { ResturantMenu } from "@/lib/types/types";

export const seattlecanlisMenu: ResturantMenu[] = [
  {
    title: "Prix Fixe",
    category: [
      {
        name: "Four-Course Menu",
        items: [
          {
            name: "Four-Course Dining Experience",
            description:
              "Choose one selection from each course category to create your personalized four-course dining experience",
            price: 165,
          },
          {
            name: "Wine Pairing",
            description:
              "Sommelier-selected wines to complement your four-course dinner",
            price: 125,
          },
          {
            name: "Reserve Wine Pairing",
            description:
              "Premium reserve wine selections paired with your four-course experience",
            price: 195,
          },
        ],
      },
    ],
    description: "A contemporary approach to Northwest cuisine",
  },
  {
    title: "First Course",
    category: [
      {
        name: "Beginnings",
        items: [
          {
            name: "Canlis Salad",
            description:
              "Our signature salad with romaine, mint, oregano, and bacon in a lemon vinaigrette (prepared tableside)",
            price: 0,
          },
          {
            name: "Dungeness Crab Cake",
            description:
              "Pacific Northwest crab with celery root remoulade and apple",
            price: 0,
          },
          {
            name: "Foie Gras Torchon",
            description:
              "Hudson Valley foie gras with huckleberry, brioche, and candied hazelnuts",
            price: 0,
          },
          {
            name: "Hamachi Crudo",
            description:
              "Yellowtail with ponzu, radish, avocado, and trout roe",
            price: 0,
          },
        ],
      },
    ],
    description: "",
  },
  {
    title: "Second Course",
    category: [
      {
        name: "Intermediate",
        items: [
          {
            name: "Hand-Cut Tagliatelle",
            description:
              "Fresh pasta with wild mushrooms, black truffle, and aged Parmesan",
            price: 0,
          },
          {
            name: "Scallop",
            description:
              "Pan-seared diver scallop with cauliflower, golden raisin, and brown butter",
            price: 0,
          },
          {
            name: "Smoke Roasted Carrots",
            description:
              "Heritage carrots with ricotta, puffed barley, and carrot top pesto",
            price: 0,
          },
        ],
      },
    ],
    description: "",
  },
  {
    title: "Main Course",
    category: [
      {
        name: "Entrées",
        items: [
          {
            name: "Filet Mignon",
            description:
              "Snake River Farms beef with Yakima Valley asparagus, morels, and sauce Bordelaise",
            price: 0,
          },
          {
            name: "King Salmon",
            description:
              "Copper River salmon (seasonal) with spring vegetables, lemon, and dill",
            price: 0,
          },
          {
            name: "Duck Breast",
            description:
              "Liberty Farms duck with sunchokes, rhubarb, and toasted farro",
            price: 0,
          },
          {
            name: "Alaskan Halibut",
            description:
              "Pan-roasted halibut with peas, young potatoes, and sauce Beurre Blanc",
            price: 0,
          },
        ],
      },
    ],
    description: "",
  },
  {
    title: "Dessert",
    category: [
      {
        name: "Sweet Finishes",
        items: [
          {
            name: "Soufflé",
            description:
              "Grand Marnier soufflé with crème anglaise (please order with main course)",
            price: 0,
          },
          {
            name: "Chocolate Fondant",
            description:
              "Warm chocolate cake with coffee ice cream, cocoa nib, and salted caramel",
            price: 0,
          },
          {
            name: "Pavlova",
            description:
              "Meringue with seasonal berries, vanilla cream, and basil",
            price: 0,
          },
          {
            name: "Northwest Cheese Selection",
            description: "Curated local cheeses with seasonal accompaniments",
            price: 0,
          },
        ],
      },
    ],
    description: "",
  },
  {
    title: "À La Carte",
    category: [
      {
        name: "Bar & Lounge Menu",
        items: [
          {
            name: "Peter Canlis Prawns",
            description:
              "A Canlis classic with vermouth, garlic, lime, and red chili",
            price: 28,
          },
          {
            name: "Wagyu Steak Tartare",
            description: "Egg yolk, capers, shallot, and grilled sourdough",
            price: 30,
          },
          {
            name: "Oysters on the Half Shell",
            description:
              "Pacific Northwest oysters with champagne mignonette (half dozen)",
            price: 26,
          },
          {
            name: "Canlis Burger",
            description:
              "Dry-aged beef, caramelized onions, cheddar, and fries (lounge only)",
            price: 32,
          },
        ],
      },
    ],
    description: "Available exclusively in the lounge",
  },
];
