import { ResturantMenu } from "@/lib/types/types";

export const aucklandcassiaMenu: ResturantMenu[] = [
  // Food Menu
  {
    title: "Food Menu",
    description:
      "Modern Indian fusion cuisine featuring locally sourced ingredients with traditional spices",
    category: [
      {
        name: "Appetizers",
        items: [
          {
            name: "Tandoori Prawns",
            description: "Tiger prawns marinated in yogurt and tandoori spices",
            price: 18,
            isGlutenFree: true,
          },
          {
            name: "Vegetable Samosas",
            description: "Crisp pastry filled with spiced potatoes and peas",
            price: 12,
            isVegetarian: true,
          },
          {
            name: "Chicken Tikka",
            description:
              "Tender chicken pieces marinated in spices and chargrilled",
            price: 16,
            isGlutenFree: true,
          },
          {
            name: "Lamb Seekh Kebab",
            description:
              "Minced lamb skewers with fresh herbs and spices, tandoor-cooked",
            price: 17,
            isGlutenFree: true,
          },
          {
            name: "Paneer Tikka Achari",
            description:
              "Indian cottage cheese marinated in pickling spices and yogurt, grilled",
            price: 15,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Chaat Platter",
            description:
              "A selection of popular Indian street snacks including papdi chaat, dahi puri, and aloo tikki",
            price: 14,
            isVegetarian: true,
          },
        ],
      },
      {
        name: "Soups",
        items: [
          {
            name: "Mulligatawny Soup",
            description: "Traditional lentil soup with South Indian spices",
            price: 14,
            isVegetarian: true,
            isGlutenFree: true,
            isVegan: true,
          },
          {
            name: "Coconut Seafood Bisque",
            description: "Creamy coconut soup with local seafood",
            price: 16,
          },
          {
            name: "Tomato Shorba",
            description: "Lightly spiced tomato and coriander soup",
            price: 13,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Spinach and Lentil Soup",
            description: "Healthy soup with spinach, lentils, and spices",
            price: 12,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Salads",
        items: [
          {
            name: "Kerala Salad",
            description:
              "Fresh greens with mango, cucumber and citrus dressing",
            price: 14,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Tandoori Chicken Salad",
            description: "Spiced chicken with mixed greens and yogurt dressing",
            price: 18,
            isGlutenFree: true,
          },
          {
            name: "Spiced Chickpea and Avocado Salad",
            description:
              "Warm chickpeas, avocado, mixed greens with a tamarind vinaigrette",
            price: 15,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Roasted Beetroot Salad",
            description:
              "Beetroot, feta cheese, walnuts, and mixed greens with a cumin dressing",
            price: 16,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Quinoa and Pomegranate Salad",
            description:
              "Quinoa, pomegranate seeds, cucumber, and mint with a lemon dressing",
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
            name: "Butter Chicken",
            description: "Tandoor-cooked chicken in creamy tomato sauce",
            price: 28,
            isGlutenFree: true,
          },
          {
            name: "Lamb Rogan Josh",
            description: "Slow-cooked lamb in aromatic Kashmiri spices",
            price: 32,
            isGlutenFree: true,
          },
          {
            name: "Prawn Malai Curry",
            description: "Tiger prawns cooked in coconut cream sauce",
            price: 34,
            isGlutenFree: true,
          },
          {
            name: "Paneer Makhani",
            description: "Cottage cheese in rich tomato and butter sauce",
            price: 26,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Goan Fish Curry",
            description:
              "Local white fish simmered in a tangy coconut and kokum curry",
            price: 30,
            isGlutenFree: true,
          },
          {
            name: "Dal Makhani",
            description:
              "Slow-cooked black lentils and kidney beans in a creamy, buttery sauce",
            price: 24,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Vegetable Korma",
            description:
              "Mixed vegetables in a mild, creamy cashew-based sauce",
            price: 25,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Chicken Biryani",
            description:
              "Fragrant basmati rice with spiced chicken and saffron",
            price: 30,
            isGlutenFree: true,
          },
          {
            name: "Lamb Vindaloo",
            description: "Spicy lamb curry with vinegar and Goan spices",
            price: 32,
            isGlutenFree: true,
          },
          {
            name: "Paneer Tikka Masala",
            description: "Grilled paneer in a spiced tomato and onion gravy",
            price: 26,
            isVegetarian: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Sides",
        items: [
          {
            name: "Garlic Naan",
            description: "Flatbread brushed with garlic butter",
            price: 6,
            isVegetarian: true,
          },
          {
            name: "Saffron Rice",
            description: "Basmati rice infused with saffron",
            price: 7,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Cucumber Raita",
            description: "Cooling yogurt with cucumber and mint",
            price: 5,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Peshwari Naan",
            description: "Naan stuffed with coconut, sultanas, and nuts",
            price: 7,
            isVegetarian: true,
          },
          {
            name: "Jeera Rice",
            description: "Basmati rice tempered with cumin seeds",
            price: 6,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Mixed Vegetable Pickle",
            description: "Assorted vegetables pickled in traditional spices",
            price: 4,
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Papadum",
            description: "Crispy lentil wafers served with chutney",
            price: 3,
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
    description: "Indian-inspired sweet treats with a modern New Zealand twist",
    category: [
      {
        name: "Cake and Pastries",
        items: [
          {
            name: "Gulab Jamun Cake",
            description: "Cardamom-infused cake soaked in rose syrup",
            price: 14,
            isVegetarian: true,
          },
          {
            name: "Chai Spiced Carrot Cake",
            description:
              "Moist carrot cake with chai spice and cream cheese frosting",
            price: 12,
            isVegetarian: true,
          },
          {
            name: "Mango Cheesecake",
            description: "Creamy cheesecake with a mango coulis topping",
            price: 15,
            isVegetarian: true,
          },
        ],
      },
      {
        name: "Ice Cream",
        items: [
          {
            name: "Kulfi",
            description:
              "Traditional Indian ice cream in pistachio, mango, or cardamom",
            price: 10,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Saffron Ice Cream",
            description:
              "Creamy saffron-infused ice cream with crushed pistachios",
            price: 12,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Coconut Sorbet",
            description: "Refreshing coconut sorbet with a hint of lime",
            price: 10,
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
            name: "Cardamom Crème Brûlée",
            description: "Classic crème brûlée with aromatic cardamom",
            price: 14,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Coconut Rice Pudding",
            description: "Warm rice pudding with coconut milk and cinnamon",
            price: 12,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Chocolate Chai Pudding",
            description: "Rich chocolate pudding infused with chai spices",
            price: 13,
            isVegetarian: true,
          },
        ],
      },
      {
        name: "Specialty Desserts",
        items: [
          {
            name: "Rose and Pistachio Rasmalai",
            description:
              "Soft cheese dumplings in sweetened, cardamom-spiced milk",
            price: 16,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Chocolate Ginger Tart",
            description: "Rich chocolate tart infused with ginger",
            price: 14,
            isVegetarian: true,
          },
          {
            name: "Mango Lassi Parfait",
            description:
              "Layers of mango yogurt, granola, and fresh mango slices",
            price: 12,
            isVegetarian: true,
            isGlutenFree: true,
          },
          {
            name: "Spiced Apple Crumble",
            description:
              "Warm apple crumble with a hint of cinnamon and served with vanilla ice cream",
            price: 15,
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
      "Carefully selected wines, craft beers, and signature cocktails to complement our dishes",
    category: [
      {
        name: "Wines",
        items: [
          {
            name: "New Zealand Sauvignon Blanc",
            description: "Marlborough region, crisp and aromatic",
            price: 14,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Central Otago Pinot Noir",
            description: "Elegant with cherry and spice notes",
            price: 16,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Australian Shiraz",
            description: "Full-bodied with dark fruit flavors",
            price: 15,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Indian Riesling",
            description: "Floral and fruity with a hint of sweetness",
            price: 13,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Chenin Blanc",
            description: "Dry white wine with citrus and floral notes",
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
            name: "Kingfisher Lager",
            description: "Classic Indian lager beer",
            price: 9,
            isVegan: true,
          },
          {
            name: "Garage Project IPA",
            description: "Local craft IPA with citrus notes",
            price: 11,
            isVegan: true,
          },
          {
            name: "Steinlager Pure",
            description: "New Zealand premium lager",
            price: 9,
            isVegan: true,
          },
          {
            name: "Monteith's Radler",
            description: "Refreshing beer with a hint of citrus",
            price: 10,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Spirits/Liquors",
        items: [
          {
            name: "Old Monk Rum",
            description: "Dark rum with vanilla notes",
            price: 12,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Amrut Single Malt",
            description: "Award-winning Indian single malt whisky",
            price: 18,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Grey Goose Vodka",
            description: "Premium French vodka",
            price: 14,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Tanqueray Gin",
            description: "Classic London dry gin",
            price: 13,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Bacardi Superior Rum",
            description: "Light rum perfect for cocktails",
            price: 11,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Cocktails",
        items: [
          {
            name: "Mumbai Mule",
            description: "Vodka, ginger beer, lime, and cardamom",
            price: 16,
          },
          {
            name: "Tamarind Margarita",
            description: "Tequila with tamarind and lime",
            price: 17,
          },
          {
            name: "Spiced Old Fashioned",
            description: "Bourbon with cinnamon and star anise",
            price: 18,
          },
          {
            name: "Coconut Mojito",
            description: "Rum, coconut water, mint, and lime",
            price: 16,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Chai Martini",
            description: "Vodka infused with masala chai spices",
            price: 17,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Mango Lassi Cocktail",
            description: "Vodka, mango puree, yogurt, and a hint of cardamom",
            price: 16,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
      {
        name: "Specialty Drinks",
        items: [
          {
            name: "Masala Chai Martini",
            description:
              "Vodka infused with masala chai, shaken for a spirited twist.",
            price: 17,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Mango Saffron Bellini",
            description:
              "A luxurious blend of mango puree, prosecco, and delicate saffron.",
            price: 16,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Spiced Pineapple Mojito",
            description:
              "White rum muddled with fresh pineapple, mint, lime, and a hint of chaat masala.",
            price: 17,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Cardamom & Saffron Gin Fizz",
            description:
              "Aromatic gin, fresh lemon, house-made cardamom syrup, and saffron, topped with soda.",
            price: 18,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Jaipur Gin Garden",
            description:
              "Indian gin, cucumber, mint, lime, and a splash of elderflower tonic.",
            price: 17,
            isVegan: true,
            isGlutenFree: true,
          },
          {
            name: "Coconut & Tamarind Cooler",
            description:
              "Refreshing coconut water, tamarind paste, lime, and a hint of chili.",
            price: 15,
            isVegan: true,
            isGlutenFree: true,
          },
        ],
      },
    ],
  },
];
