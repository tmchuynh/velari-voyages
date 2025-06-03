import { ResturantMenu } from "@/lib/types/types";

export const romelaPergolaMenu: ResturantMenu[] = [
  {
    title: "Menu Degustazione",
    description: "Chef Heinz Beck's legendary tasting experiences",
    category: [
      {
        name: "Tasting Menus",
        items: [
          {
            name: "Grande Menu Degustazione",
            description:
              "Ten-course gastronomic journey through Chef Beck's most celebrated creations",
            price: 295,
            isGlutenFree: false,
          },
          {
            name: "Menu Tradizione Contemporanea",
            description:
              "Seven-course exploration of modern interpretations of Italian classics",
            price: 245,
            isGlutenFree: false,
          },
          {
            name: "Menu Vegetariano",
            description:
              "Seven-course vegetarian tasting menu featuring seasonal ingredients",
            price: 225,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Wine Pairing",
            description:
              "Expert sommelier selection paired with your chosen tasting menu",
            price: 195,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Antipasti",
    description: "Refined starters featuring the finest Italian ingredients",
    category: [
      {
        name: "Starters",
        items: [
          {
            name: "Carpaccio di Capesante",
            description: "Scallop carpaccio with black truffle and caviar",
            price: 75,
            isGlutenFree: true,
          },
          {
            name: "Insalata di Astice",
            description: "Warm lobster salad with avocado and tomato confit",
            price: 78,
            isGlutenFree: true,
          },
          {
            name: 'Foie Gras "Alla Veneziana"',
            description:
              "Duck foie gras with Amarone wine reduction and spiced bread",
            price: 72,
            isGlutenFree: false,
          },
          {
            name: "Sfogliatella di Carciofi",
            description: "Artichoke phyllo pastry with Parmigiano foam",
            price: 65,
            isVegetarian: true,
            isGlutenFree: false,
          },
        ],
      },
    ],
  },
  {
    title: "Primi Piatti",
    description:
      "Innovative pasta and rice creations showcasing Chef Beck's technical mastery",
    category: [
      {
        name: "Pasta & Rice",
        items: [
          {
            name: 'Fagottelli "La Pergola"',
            description: "Signature carbonara-filled pasta parcels",
            price: 68,
            isGlutenFree: false,
          },
          {
            name: "Risotto con Scampi e Zafferano",
            description: "Carnaroli risotto with langoustines and saffron",
            price: 70,
            isGlutenFree: true,
          },
          {
            name: 'Spaghetti "Cacio e Pepe" con Gamberi Rossi',
            description:
              "Reimagined cacio e pepe with red prawns and lime-infused olive oil",
            price: 72,
            isGlutenFree: false,
          },
          {
            name: "Gnocchi con Funghi Porcini",
            description:
              "Potato gnocchi with porcini mushrooms and aged Parmigiano Reggiano",
            price: 65,
            isVegetarian: true,
            isGlutenFree: false,
          },
        ],
      },
    ],
  },
  {
    title: "Secondi Piatti",
    description:
      "Exquisite main courses that blend Italian tradition with innovative techniques",
    category: [
      {
        name: "Seafood",
        items: [
          {
            name: "Rombo con Carciofi e Patate",
            description:
              "Turbot fillet with artichokes, potatoes, and Mediterranean herbs",
            price: 85,
            isGlutenFree: true,
          },
          {
            name: "Aragosta con Salsa di Corallo",
            description:
              "Blue lobster with coral sauce and seasonal vegetables",
            price: 98,
            isGlutenFree: true,
          },
          {
            name: "Dentice in Crosta di Sale",
            description:
              "Salt-crusted sea bream with citrus and aromatic herbs",
            price: 82,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Meat",
        items: [
          {
            name: "Filetto di Vitello",
            description:
              "Veal tenderloin with porcini mushrooms and black truffle",
            price: 88,
            isGlutenFree: true,
          },
          {
            name: "Piccione al Vino Rosso",
            description: "Roasted squab with red wine reduction and foie gras",
            price: 84,
            isGlutenFree: true,
          },
          {
            name: "Agnello con Carciofi e Mentuccia",
            description: "Lamb cutlets with artichokes and Roman mint",
            price: 86,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Formaggi",
    description:
      "World-class cheese selection aged in La Pergola's dedicated cheese room",
    category: [
      {
        name: "Cheese Selection",
        items: [
          {
            name: "Selezione di Formaggi",
            description:
              "Curated selection of five fine Italian and French cheeses with accompaniments",
            price: 45,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Grande Plateau di Formaggi",
            description:
              "Extended selection of aged and rare cheeses with house-made preserves",
            price: 65,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Dolci",
    description: "Artistic desserts that balance tradition and innovation",
    category: [
      {
        name: "Desserts",
        items: [
          {
            name: "Sfera di Cioccolato",
            description:
              "Chocolate sphere with warm cherry sauce and hazelnut ice cream",
            price: 38,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Soufflé al Lampone",
            description:
              "Raspberry soufflé with vanilla sauce (20-minute preparation)",
            price: 36,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: 'Tiramisù "La Pergola"',
            description: "Contemporary interpretation of the Italian classic",
            price: 34,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Petit Fours",
            description:
              "Selection of miniature confections from the pastry kitchen",
            price: 26,
            isVegetarian: true,
            isGlutenFree: false,
          },
        ],
      },
    ],
  },
];
