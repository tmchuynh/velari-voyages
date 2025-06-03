import { ResturantMenu } from "@/lib/types/types";

export const losAngelesgrandCentralMarketMenu: ResturantMenu[] = [
  {
    title: "Eggslut",
    description:
      "Gourmet egg sandwiches with cage-free eggs and artisanal ingredients",
    category: [
      {
        name: "Signature Sandwiches",
        items: [
          {
            name: "Fairfax Sandwich",
            description:
              "Soft scrambled eggs, chives, caramelized onions, cheddar cheese and sriracha mayo on a brioche bun",
            price: 12,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Gaucho",
            description:
              "Seared wagyu tri-tip, chimichurri, red onions and over-medium egg on a brioche bun",
            price: 14,
            isGlutenFree: false,
          },
          {
            name: "Bacon, Egg & Cheese",
            description:
              "Hardwood smoked bacon, over-medium egg, cheddar cheese and chipotle ketchup on a brioche bun",
            price: 13,
            isGlutenFree: false,
          },
        ],
      },
    ],
  },
  {
    title: "Sarita's Pupuseria",
    description:
      "Authentic Salvadoran pupusas and Central American specialties",
    category: [
      {
        name: "Pupusas",
        items: [
          {
            name: "Pupusa Revuelta",
            description:
              "Handmade corn tortilla filled with pork, cheese and beans, served with curtido and salsa roja",
            price: 5.5,
            isGlutenFree: true,
          },
          {
            name: "Pupusa de Queso",
            description:
              "Cheese-filled pupusa served with curtido and salsa roja",
            price: 5,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Pupusa de Frijol y Queso",
            description:
              "Bean and cheese-filled pupusa served with curtido and salsa roja",
            price: 5.5,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Plates",
        items: [
          {
            name: "Combo Plate",
            description:
              "Two pupusas of your choice with rice, beans, plantains and curtido",
            price: 12,
            isVegetarian: false,
            isGlutenFree: true,
          },
          {
            name: "Tamales",
            description: "Traditional Salvadoran tamales with chicken or pork",
            price: 4.5,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Tacos Tumbras a Tomas",
    description: "Generous portions of authentic Mexican tacos and plates",
    category: [
      {
        name: "Tacos",
        items: [
          {
            name: "Carnitas Taco",
            description:
              "Slow-cooked pork with cilantro, onions and salsa on corn tortilla",
            price: 4,
            isGlutenFree: true,
          },
          {
            name: "Carne Asada Taco",
            description:
              "Grilled steak with cilantro, onions and salsa on corn tortilla",
            price: 4,
            isGlutenFree: true,
          },
          {
            name: "Al Pastor Taco",
            description:
              "Marinated pork with pineapple, cilantro and onions on corn tortilla",
            price: 4,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Plates",
        items: [
          {
            name: "Burrito",
            description:
              "Choice of meat with rice, beans, cheese, sour cream and salsa in a large flour tortilla",
            price: 12,
            isGlutenFree: false,
          },
          {
            name: "Combo Plate",
            description: "Choice of meat with rice, beans, tortillas and salsa",
            price: 14,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "McConnell's Fine Ice Creams",
    description:
      "Premium ice cream made with local, sustainable and organic ingredients",
    category: [
      {
        name: "Ice Cream",
        items: [
          {
            name: "Single Scoop",
            description: "One scoop of your choice from seasonal flavors",
            price: 5.5,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Double Scoop",
            description: "Two scoops of your choice from seasonal flavors",
            price: 7.5,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Ice Cream Sandwich",
            description:
              "Ice cream of your choice between two fresh-baked cookies",
            price: 8,
            isVegetarian: true,
            isGlutenFree: false,
          },
        ],
      },
      {
        name: "Signature Flavors",
        items: [
          {
            name: "Eureka Lemon & Marionberries",
            description: "Tart Eureka lemons with sweet Oregon marionberries",
            price: 5.5,
            isVegetarian: true,
            isVegan: false,
            isGlutenFree: true,
          },
          {
            name: "Sea Salt Cream & Cookies",
            description:
              "Sweet cream ice cream with sea salt and house-made chocolate cookies",
            price: 5.5,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Double Peanut Butter Chip",
            description:
              "Intense peanut butter ice cream loaded with chocolate chips",
            price: 5.5,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Wexler's Deli",
    description:
      "Traditional Jewish deli featuring house-smoked meats and hand-sliced fish",
    category: [
      {
        name: "Sandwiches",
        items: [
          {
            name: "The O.G.",
            description: "Hand-sliced pastrami on rye with mustard",
            price: 15,
            isGlutenFree: false,
          },
          {
            name: "Lox & Cream Cheese Bagel",
            description:
              "House-smoked salmon with cream cheese, capers, tomato and onion on a bagel",
            price: 14,
            isGlutenFree: false,
          },
          {
            name: "Reuben",
            description:
              "Hot pastrami, sauerkraut, Russian dressing and Swiss cheese on rye",
            price: 17,
            isGlutenFree: false,
          },
          {
            name: "MacArthur Park",
            description: "Roast turkey, coleslaw and Swiss cheese on rye",
            price: 15,
            isGlutenFree: false,
          },
        ],
      },
      {
        name: "Sides & Extras",
        items: [
          {
            name: "Matzo Ball Soup",
            description: "Classic chicken soup with matzo ball",
            price: 8,
            isGlutenFree: false,
          },
          {
            name: "Potato Salad",
            description: "House-made traditional potato salad",
            price: 5,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Cole Slaw",
            description: "Creamy house-made coleslaw",
            price: 5,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
];
