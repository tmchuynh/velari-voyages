import { ResturantMenu } from "@/lib/types/types";

export const buenosAiresteguiMenu: ResturantMenu[] = [
  // Food Menu
  {
    title: "Food Menu",
    description:
      "Contemporary Argentinian cuisine with European influences, featuring seasonal local ingredients",
    category: [
      {
        name: "Appetizers",
        items: [
          {
            name: "Provoleta Moderna",
            description:
              "Grilled provolone cheese with herbs, cherry tomatoes, and olive oil",
            price: 17,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Vitello Tonnato",
            description: "Thinly sliced veal with creamy tuna and caper sauce",
            price: 22,
            isGlutenFree: true,
          },
          {
            name: "Empanadas de Cordero",
            description: "Lamb empanadas with mint and chimichurri",
            price: 15,
          },
          {
            name: "Carpaccio de Ciervo",
            description:
              "Venison carpaccio with truffle oil, arugula, and Parmesan",
            price: 24,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Soups",
        items: [
          {
            name: "Locro Refinado",
            description:
              "Traditional Argentinian stew with pork, beef, corn, and beans, refined presentation",
            price: 20,
            isGlutenFree: true,
          },
          {
            name: "Sopa de Calabaza",
            description:
              "Roasted pumpkin soup with toasted pepitas and crème fraîche",
            price: 15,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Salads",
        items: [
          {
            name: "Ensalada de Remolacha",
            description:
              "Roasted beet salad with goat cheese, walnuts, and orange vinaigrette",
            price: 17,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Ensalada de Quinoa",
            description:
              "Andean quinoa with grilled vegetables, herbs, and citrus dressing",
            price: 15,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Main Courses",
        items: [
          {
            name: "Bife de Chorizo",
            description:
              "Prime New York strip steak with bone marrow chimichurri",
            price: 42,
            isGlutenFree: true,
          },
          {
            name: "Cordero Patagónico",
            description:
              "Slow-roasted Patagonian lamb with rosemary jus and potato confit",
            price: 48,
            isGlutenFree: true,
          },
          {
            name: "Pesca del Día",
            description:
              "Catch of the day with seafood reduction and seasonal vegetables",
            price: 38,
            isGlutenFree: true,
          },
          {
            name: "Risotto de Hongos",
            description:
              "Wild mushroom risotto with black truffle and aged Parmesan",
            price: 32,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Sides",
        items: [
          {
            name: "Puré de Papas Trufado",
            description: "Truffle mashed potatoes with brown butter",
            price: 14,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Espárragos a la Parrilla",
            description: "Grilled asparagus with Parmesan and lemon",
            price: 12,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Papas Rústicas",
            description: "Rustic potatoes with rosemary and garlic",
            price: 10,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },

  // Dessert Menu
  {
    title: "Dessert Menu",
    description: "Innovative desserts inspired by traditional Argentine sweets",
    category: [
      {
        name: "Cake and Pastries",
        items: [
          {
            name: "Alfajor Deconstruido",
            description:
              "Deconstructed alfajor with dulce de leche mousse and chocolate textures",
            price: 15,
            isVegetarian: true,
          },
          {
            name: "Torta Rogel Moderna",
            description:
              "Modern interpretation of layered meringue cake with dulce de leche",
            price: 17,
            isVegetarian: true,
          },
        ],
      },
      {
        name: "Ice Cream",
        items: [
          {
            name: "Helado de Dulce de Leche",
            description:
              "Artisanal dulce de leche ice cream with caramelized walnuts",
            price: 14,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Sorbete de Malbec",
            description: "Malbec wine sorbet with seasonal berries",
            price: 12,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Custards and Puddings",
        items: [
          {
            name: "Flan Casero con Dulce",
            description:
              "Homemade caramel flan with traditional dulce de leche",
            price: 14,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Budín de Pan",
            description:
              "Bread pudding with raisins, cinnamon, and warm caramel sauce",
            price: 15,
            isVegetarian: true,
          },
        ],
      },
      {
        name: "Specialty Desserts",
        items: [
          {
            name: "Vigilante Artesanal",
            description:
              "Aged cheese paired with housemade quince paste and membrillo",
            price: 17,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Volcán de Chocolate",
            description:
              "Warm chocolate fondant with liquid dulce de leche center and vanilla ice cream",
            price: 20,
            isVegetarian: true,
          },
        ],
      },
    ],
  },

  // Alcohol Menu
  {
    title: "Beverage Menu",
    description:
      "Premium Argentinian wines and craft cocktails featuring local spirits",
    category: [
      {
        name: "Wines",
        items: [
          {
            name: "Catena Zapata Malbec",
            description:
              "Intense, full-bodied Mendoza Malbec with dark fruit notes and vanilla",
            price: 17,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Luigi Bosca Cabernet Sauvignon",
            description:
              "Elegant red with blackcurrant notes and smooth tannins",
            price: 15,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Rutini Chardonnay",
            description:
              "Rich, buttery Chardonnay with tropical fruit and oak nuances",
            price: 14,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Zuccardi Torrontés",
            description:
              "Aromatic white with floral notes and refreshing acidity",
            price: 12,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Beers",
        items: [
          {
            name: "Antares Kolsch",
            description: "Craft golden ale with subtle malt character",
            price: 10,
            isVegan: true,
          },
          {
            name: "Patagonia Amber Lager",
            description: "Medium-bodied amber beer with caramel notes",
            price: 10,
            isVegan: true,
          },
          {
            name: "Quilmes Stout",
            description: "Dark, creamy stout with chocolate and coffee flavors",
            price: 9,
            isVegan: true,
          },
        ],
      },
      {
        name: "Spirits/Liquors",
        items: [
          {
            name: "Príncipe de los Apóstoles Gin",
            description: "Argentine craft gin infused with yerba mate",
            price: 14,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Hesperidina",
            description: "Traditional bitter orange liqueur from Argentina",
            price: 12,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Legui",
            description: "Herbal liqueur with cinnamon and spice notes",
            price: 10,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Cocktails",
        items: [
          {
            name: "Fernet con Cola",
            description:
              "The classic Argentine combination of Fernet Branca and cola",
            price: 14,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Gancia Batido",
            description: "Gancia aperitif shaken with fresh lemon and sugar",
            price: 15,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Clericot Moderno",
            description:
              "Modern take on clericot with white wine, fruit, and herbs",
            price: 17,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Specialty Drinks",
        items: [
          {
            name: "Mate Old Fashioned",
            description:
              "Bourbon infused with yerba mate, orange bitters, and sugar",
            price: 20,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Patagonian Negroni",
            description:
              "Argentine gin, Campari, and local vermouth with Patagonian herbs",
            price: 22,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Malbec Sour",
            description: "Pisco and Malbec reduction with egg white and lemon",
            price: 20,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
];
