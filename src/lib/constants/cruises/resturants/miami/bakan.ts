import { ResturantMenu } from "@/lib/types/types";

export const miamibakanMenu: ResturantMenu[] = [
  {
    title: "Appetizers",
    description: "Traditional Mexican starters and antojitos",
    category: [
      {
        name: "Para Compartir",
        items: [
          {
            name: "Guacamole",
            description:
              "Fresh avocado, tomato, onion, cilantro, serrano chili, and lime",
            price: 15,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Queso Fundido",
            description:
              "Melted Oaxacan cheese with your choice of chorizo, mushrooms or poblano peppers",
            price: 15,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Ceviche de Camarón",
            description:
              "Shrimp marinated in lime juice with tomatoes, onions, cilantro, and avocado",
            price: 18,
            isGlutenFree: true,
          },
          {
            name: "Aguachile Negro",
            description:
              "Shrimp in black lime sauce, red onion, cucumber, and avocado",
            price: 21,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Tacos",
    description:
      "Authentic corn tortillas with traditional and innovative fillings",
    category: [
      {
        name: "Tacos de la Casa",
        items: [
          {
            name: "Al Pastor",
            description: "Adobo-marinated pork, pineapple, onion, and cilantro",
            price: 15,
            isGlutenFree: true,
          },
          {
            name: "Barbacoa de Res",
            description: "Slow-cooked beef, onion, cilantro, and salsa verde",
            price: 17,
            isGlutenFree: true,
          },
          {
            name: "Pescado",
            description:
              "Grilled fish, cabbage slaw, chipotle aioli, and avocado",
            price: 18,
            isGlutenFree: true,
          },
          {
            name: "Hongos",
            description: "Grilled mushrooms, epazote, corn, and queso fresco",
            price: 15,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Especialidades",
        items: [
          {
            name: "Tacos de Langosta",
            description:
              "Grilled lobster, black beans, avocado, and habanero aioli",
            price: 32,
            isGlutenFree: true,
          },
          {
            name: "Tacos de Chapulines",
            description:
              "Traditional Oaxacan grasshopper tacos with guacamole and salsa verde",
            price: 24,
            isGlutenFree: true,
          },
          {
            name: "Tacos de Lengua",
            description: "Beef tongue, salsa verde, onion, and cilantro",
            price: 17,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Mezcal & Tequila",
    description:
      "One of Miami's largest selections of artisanal mezcal and premium tequilas",
    category: [
      {
        name: "Mezcal Flights",
        items: [
          {
            name: "Espadin Flight",
            description:
              "Three varieties of espadin mezcal with orange slices and sal de gusano",
            price: 34,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Wild Agave Flight",
            description:
              "Three varieties of wild agave mezcal (Tobalá, Tepeztate, Madrecuixe)",
            price: 46,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Rare Mezcal Experience",
            description:
              "Three unique and rare mezcal varieties selected by our mezcalier",
            price: 60,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Premium Tequilas",
        items: [
          {
            name: "Añejo Tequila Flight",
            description: "Three premium aged tequilas with sangrita and lime",
            price: 42,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Extra Añejo Tequila",
            description: "2oz pour of ultra-premium extra añejo tequila",
            price: 38,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Platos Fuertes",
    description:
      "Traditional Mexican main courses cooked over wood-fire and open flame",
    category: [
      {
        name: "From the Grill",
        items: [
          {
            name: "Carne Asada",
            description:
              "Grilled skirt steak, guacamole, grilled onions, nopales, and salsa roja",
            price: 32,
            isGlutenFree: true,
          },
          {
            name: "Pollo a la Leña",
            description:
              "Wood-fired half chicken marinated in achiote, served with salsa verde and rice",
            price: 28,
            isGlutenFree: true,
          },
          {
            name: "Costillas de Res",
            description:
              "Wood-grilled beef short ribs with mole negro, sesame seeds, and plantains",
            price: 36,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Classics",
        items: [
          {
            name: "Mole Poblano",
            description:
              "Bone-in chicken breast with traditional Oaxacan mole, sesame seeds, and plantains",
            price: 29,
            isGlutenFree: true,
          },
          {
            name: "Pescado a la Talla",
            description:
              "Whole grilled fish marinated in adobo, served with tortillas and lime",
            price: 45,
            isGlutenFree: true,
          },
          {
            name: "Chile Relleno",
            description:
              "Roasted poblano pepper stuffed with Oaxacan cheese, topped with tomato sauce",
            price: 24,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Sides",
    description: "Traditional Mexican accompaniments",
    category: [
      {
        name: "Acompañamientos",
        items: [
          {
            name: "Arroz a la Mexicana",
            description:
              "Traditional Mexican rice with tomatoes and vegetables",
            price: 8,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Frijoles Charros",
            description: "Pinto beans with bacon, chorizo, and epazote",
            price: 8,
            isGlutenFree: true,
          },
          {
            name: "Esquites",
            description:
              "Mexican street corn off the cob with mayo, cotija cheese, and chili",
            price: 9,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Nopales Asados",
            description: "Grilled cactus paddles with queso fresco and lime",
            price: 9,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
  {
    title: "Desserts",
    description: "Traditional Mexican sweet treats",
    category: [
      {
        name: "Postres",
        items: [
          {
            name: "Churros con Cajeta",
            description:
              "Traditional fried dough pastry with cinnamon sugar and goat's milk caramel",
            price: 12,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Tres Leches",
            description:
              "Three milk-soaked cake with fresh berries and whipped cream",
            price: 13,
            isVegetarian: true,
            isGlutenFree: false,
          },
          {
            name: "Flan de Cajeta",
            description:
              "Traditional Mexican caramel custard with goat's milk caramel",
            price: 12,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Pastel de Elote",
            description:
              "Sweet corn cake with vanilla ice cream and caramel sauce",
            price: 13,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
];
