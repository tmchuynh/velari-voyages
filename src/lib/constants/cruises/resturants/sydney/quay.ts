import { ResturantMenu } from "@/lib/types/types";

export const sydneyquayMenu: ResturantMenu[] = [
  {
    title: "Tasting Menu",
    category: [
      {
        name: "Chef's Experience",
        items: [
          {
            name: "Ten-Course Tasting Menu",
            description:
              "A complete culinary journey through Chef Peter Gilmore's signature dishes",
            price: 320,
            isGlutenFree: false,
          },
          {
            name: "Wine Pairing",
            description:
              "Premium wine pairings selected by our sommelier to complement each course",
            price: 195,
            isGlutenFree: true,
          },
          {
            name: "Non-Alcoholic Pairing",
            description:
              "Innovative alcohol-free beverages curated to enhance each course",
            price: 120,
            isGlutenFree: true,
          },
        ],
      },
    ],
    description:
      "Our menu is a reflection of nature's diversity and Australia's unique terroir",
  },
  {
    title: "First Movements",
    category: [
      {
        name: "Beginning the Journey",
        items: [
          {
            name: "Raw Hand Harvested Seafood",
            description:
              "Tasmanian sea urchin, virgin soy, seaweed, aged vinegar",
            price: 0,
            isGlutenFree: true,
          },
          {
            name: "Salad of Rare Vegetables",
            description:
              "Heirloom varieties, native Australian plants, virgin butter emulsion",
            price: 0,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Gentle Broth of Living Seafood",
            description:
              "Southern rock lobster, hand-dived scallops, line-caught squid",
            price: 0,
            isGlutenFree: true,
          },
        ],
      },
    ],
    description:
      "Delicate flavors to awaken the palate (included in tasting menu)",
  },
  {
    title: "Middle Movements",
    category: [
      {
        name: "Building Depth",
        items: [
          {
            name: "Palm-Sized Hand Cut Noodles",
            description: "Mud crab, umami broth, fresh cultured butter",
            price: 0,
            isGlutenFree: false,
          },
          {
            name: "Smoked Eel Cream",
            description:
              "Sea cucumber dumplings, shiitake, native Australian seaweeds",
            price: 0,
            isGlutenFree: false,
          },
          {
            name: "Maremma Duck",
            description: "Preserved blackcurrant, radicchio, black garlic",
            price: 0,
            isGlutenFree: true,
          },
          {
            name: "Roasted Berkshire Pig Jowl",
            description:
              "Sea scallop silk, shiitake custard, Jerusalem artichoke",
            price: 0,
            isGlutenFree: true,
          },
        ],
      },
    ],
    description:
      "Complex interplays of texture, flavor and aroma (included in tasting menu)",
  },
  {
    title: "Final Movements",
    category: [
      {
        name: "Main Courses",
        items: [
          {
            name: "Dry Aged Riverine Beef",
            description:
              "Black truffle, black lip abalone, fermented mushroom custard",
            price: 0,
            isGlutenFree: true,
          },
          {
            name: "Smoked Heritage Blue-Eye Trevalla",
            description: "Shaved squid, oyster cream, fish maw, coastal herbs",
            price: 0,
            isGlutenFree: true,
          },
          {
            name: "Pasture-Raised Lamb",
            description:
              "Native Australian spices, heirloom carrots, black garlic",
            price: 0,
            isGlutenFree: true,
          },
        ],
      },
    ],
    description:
      "Profound expressions of Australian produce (included in tasting menu)",
  },
  {
    title: "Desserts",
    category: [
      {
        name: "Sweet Conclusion",
        items: [
          {
            name: "White Coral",
            description:
              "Signature aerated frozen white chocolate, feijoa ice cream, coconut cream",
            price: 0,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Moo",
            description:
              "Jersey cream, prune jam, salted caramel, oloroso caramel",
            price: 0,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Cherry Jam Lamington",
            description:
              "Coconut cream, cherry ice cream, rose (Quay's take on Australia's iconic dessert)",
            price: 0,
            isVegetarian: true,
            isGlutenFree: false,
          },
        ],
      },
      {
        name: "Petits Fours",
        items: [
          {
            name: "Selection of House-Made Treats",
            description:
              "Seasonal mignardises to complete your dining experience",
            price: 0,
            isVegetarian: true,
            isGlutenFree: false,
          },
        ],
      },
    ],
    description:
      "Innovative sweet creations to conclude your culinary journey (included in tasting menu)",
  },
  {
    title: "À La Carte",
    category: [
      {
        name: "Individual Selection",
        items: [
          {
            name: "Four-Course Selection",
            description: "Choose any four courses from our menu",
            price: 220,
            isGlutenFree: false,
          },
          {
            name: "Six-Course Selection",
            description: "Choose any six courses from our menu",
            price: 260,
            isGlutenFree: false,
          },
        ],
      },
    ],
    description: "For guests preferring a shorter dining experience",
  },
];
