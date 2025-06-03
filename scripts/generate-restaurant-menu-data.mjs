import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Setup dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Base directory where restaurant files are located
const baseDir = path.join(
  __dirname,
  "..",
  "src",
  "lib",
  "constants",
  "cruises",
  "restaurants"
);

// Import constants (must use dynamic import for ES modules)
// Note: Replace this with a direct import if your menuItems file is also an ES module
const restaurantData = await import(
  path.join(__dirname, "../src/lib/constants/info/restaurants.js")
);
const { menuItems, descriptionElements, cuisineTypes } = restaurantData;

// Helper function to get a random element from an array
const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Helper function to get random number between min and max (inclusive)
const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// Generate random opening hours
const generateOpeningHours = () => {
  const openingTime = `${getRandomNumber(6, 12)}:00`;
  const closingTime = `${getRandomNumber(17, 23)}:00`;

  return {
    monday: `${openingTime} - ${closingTime}`,
    tuesday: `${openingTime} - ${closingTime}`,
    wednesday: `${openingTime} - ${closingTime}`,
    thursday: `${openingTime} - ${closingTime}`,
    friday: `${openingTime} - ${closingTime}`,
    saturday: `${getRandomNumber(7, 10)}:00 - ${getRandomNumber(21, 23)}:00`,
    sunday: `${getRandomNumber(7, 11)}:00 - ${getRandomNumber(20, 22)}:00`,
  };
};

// Generate random contact info
const generateContactInfo = () => {
  return {
    contactNumber: `+1-${getRandomNumber(200, 999)}-${getRandomNumber(
      100,
      999
    )}-${getRandomNumber(1000, 9999)}`,
    contactEmail: `contact@${getRandomElement([
      "restaurant",
      "dining",
      "eatery",
      "bistro",
      "cafe",
      "info",
    ])}-${getRandomNumber(100, 999)}.com`,
  };
};

// Generate random food item using imported constants
const generateFoodItem = (category) => {
  let items = [];

  // Different items based on category
  if (category === "Appetizers") {
    items = menuItems.appetizers;
  } else if (category === "Main Courses") {
    items = menuItems.mainCourses;
  } else if (category === "Desserts") {
    items = menuItems.desserts;
  } else if (category === "Non-Alcoholic Beverages") {
    items = menuItems.nonAlcoholicBeverages;
  } else if (category === "Alcoholic Beverages") {
    items = menuItems.alcoholicBeverages;
  } else if (category === "Soups") {
    items = menuItems.soups;
  } else if (category === "Salads") {
    items = menuItems.salads;
  } else if (category === "Side Dishes") {
    items = menuItems.sideDishes;
  } else if (category === "Small Plates" || category === "Shared Plates") {
    items = menuItems.smallPlates;
  } else if (
    category === "Signature Dishes" ||
    category === "Chef's Specials"
  ) {
    items = menuItems.signatureDishes;
  } else if (category === "Seafood Specialties") {
    items = menuItems.seafoodSpecialties;
  } else if (category === "Plant-Based") {
    // Use main courses as fallback if you don't have plant-based items
    items =
      menuItems.plantBased ||
      menuItems.mainCourses.filter(() => Math.random() > 0.5);
  } else if (category === "Seasonal Offerings") {
    // Mix items from different categories for seasonal offerings
    const allItems = [
      ...menuItems.mainCourses,
      ...menuItems.appetizers,
      ...menuItems.seafoodSpecialties,
      ...menuItems.signatureDishes,
    ];
    items = allItems.filter(() => Math.random() > 0.7); // Randomly select some items
  }

  const itemBase = getRandomElement(items);
  const name = `${getRandomElement(menuItems.prefixes)} ${getRandomElement(
    menuItems.descriptors
  )} ${itemBase}`;

  // Update image category selection

  let imageCategory;
  if (category === "Desserts") {
    imageCategory = "dessert,sweet,cake";
  } else if (category === "Alcoholic Beverages") {
    imageCategory = "cocktail,drink,beverage";
  } else if (category === "Soups") {
    imageCategory = "soup,stew,broth";
  } else if (category === "Salads") {
    imageCategory = "salad,greens,fresh";
  } else if (category === "Side Dishes") {
    imageCategory = "side,vegetables,accompaniment";
  } else if (category === "Small Plates" || category === "Shared Plates") {
    imageCategory = "tapas,appetizer,small-plate";
  } else if (category === "Seafood Specialties") {
    imageCategory = "seafood,fish,ocean";
  } else if (
    category === "Signature Dishes" ||
    category === "Chef's Specials"
  ) {
    imageCategory = "gourmet,fine-dining,signature";
  } else if (category === "Plant-Based") {
    imageCategory = "vegetarian,plant-based,vegan";
  } else if (category === "Seasonal Offerings") {
    imageCategory = "seasonal,fresh,special";
  } else {
    imageCategory = "food,dish,meal";
  }

  // Determine price range based on category
  let priceMin, priceMax;
  switch (category) {
    case "Appetizers":
      priceMin = 8;
      priceMax = 19;
      break;
    case "Main Courses":
      priceMin = 24;
      priceMax = 56;
      break;
    case "Desserts":
      priceMin = 10;
      priceMax = 18;
      break;
    case "Non-Alcoholic Beverages":
      priceMin = 4;
      priceMax = 10;
      break;
    case "Alcoholic Beverages":
      priceMin = 12;
      priceMax = 24;
      break;
    case "Soups":
      priceMin = 8;
      priceMax = 16;
      break;
    case "Salads":
      priceMin = 10;
      priceMax = 22;
      break;
    case "Side Dishes":
      priceMin = 6;
      priceMax = 14;
      break;
    case "Chef's Specials":
      priceMin = 55;
      priceMax = 120;
      break;
    case "Signature Dishes":
      priceMin = 34;
      priceMax = 68;
      break;
    case "Seafood Specialties":
      priceMin = 28;
      priceMax = 65;
      break;
    case "Plant-Based":
      priceMin = 18;
      priceMax = 32;
      break;
    case "Small Plates":
      priceMin = 12;
      priceMax = 24;
      break;
    case "Shared Plates":
      priceMin = 15;
      priceMax = 40;
      break;
    case "Seasonal Offerings":
      priceMin = 20;
      priceMax = 50;
      break;
    default:
      priceMin = 8;
      priceMax = 30;
  }

  return {
    name,
    description: generateItemDescription(name, category, itemBase),
    price: getRandomNumber(priceMin, priceMax) + 0.99,
    imageUrl:
      getRandomNumber(1, 10) > 3
        ? `https://source.unsplash.com/random/800x600/?${imageCategory},${itemBase
            .toLowerCase()
            .replace(/\s+/g, "-")}`
        : undefined,
    isVegetarianFriendly: Math.random() > 0.7,
    isVeganFriendly: Math.random() > 0.6,
    isFineDining: Math.random() > 0.8,
    isAdultOnly: Math.random() > 0.5,
    isGlutenFreeFriendly: Math.random() > 0.75,
    isHalalFriendly: Math.random() > 0.8,
    isKosherFriendly: Math.random() > 0.85,
    isIndoorSeating: Math.random() > 0.5,
    isReservationsAccepted: Math.random() > 0.6,
    isRomantic: Math.random() > 0.7,
    isPopular: Math.random() > 0.6,
  };
};

// Generate item description using imported constants
const generateItemDescription = (name, category, itemBase) => {
  // Use the imported description elements
  const { cookingTerms, flavorProfiles, servingStyles, ingredients } =
    descriptionElements;

  // Build appropriate description based on category
  if (category === "Appetizers") {
    return `${getRandomElement([
      `A ${getRandomElement(
        flavorProfiles
      )} starter that combines ${getRandomElement(
        ingredients
      )} to stimulate your appetite.`,
      `This ${getRandomElement(flavorProfiles)} appetizer is ${getRandomElement(
        cookingTerms
      )} with ${getRandomElement(ingredients)} and ${getRandomElement(
        servingStyles
      )}.`,
      `Start your meal with our ${getRandomElement(
        flavorProfiles
      )} ${itemBase}, featuring ${getRandomElement(
        ingredients
      )} and complementary flavors.`,
      `${getRandomElement(
        servingStyles
      )}, this ${itemBase.toLowerCase()} offers a ${getRandomElement(
        flavorProfiles
      )} beginning to your dining experience.`,
      `An inviting ${itemBase.toLowerCase()} crafted with ${getRandomElement(
        ingredients
      )}, ${getRandomElement(cookingTerms)} to highlight its ${getRandomElement(
        flavorProfiles
      )} notes.`,
      `A shareable classic, ${getRandomElement(
        cookingTerms
      )} to deliver ${getRandomElement(flavorProfiles)} satisfaction.`,
      `Perfect for pairing, this ${itemBase.toLowerCase()} balances ${getRandomElement(
        ingredients
      )} and ${getRandomElement(flavorProfiles)} accents.`,
      `A bold take on tradition, this ${itemBase.toLowerCase()} is ${getRandomElement(
        cookingTerms
      )} and ${getRandomElement(servingStyles)}.`,
      `This small plate combines ${getRandomElement(
        ingredients
      )} with ${getRandomElement(
        flavorProfiles
      )} flair, ideal for opening your appetite.`,
      `Made to whet your palate, this appetizer blends ${getRandomElement(
        flavorProfiles
      )} flavor with ${getRandomElement(servingStyles)} appeal.`,
    ])}`;
  } else if (category === "Main Courses") {
    return `${getRandomElement([
      `Our chef's interpretation of ${itemBase.toLowerCase()}, ${getRandomElement(
        cookingTerms
      )} to ${getRandomElement(
        flavorProfiles
      )} perfection and served with seasonal accompaniments.`,
      `This ${getRandomElement(
        flavorProfiles
      )} main course features ${getRandomElement(
        ingredients
      )}, ${getRandomElement(
        cookingTerms
      )} with traditional techniques and modern flair.`,
      `A ${getRandomElement(
        flavorProfiles
      )} entrée that highlights the natural flavors of ${getRandomElement(
        ingredients
      )}, ${getRandomElement(servingStyles)} for your enjoyment.`,
      `${getRandomElement(
        servingStyles
      )}, this signature dish combines ${getRandomElement(
        flavorProfiles
      )} flavors with culinary expertise for an unforgettable dining experience.`,
      `A refined expression of ${itemBase.toLowerCase()}, ${getRandomElement(
        cookingTerms
      )} using ${getRandomElement(ingredients)} and balanced with elegance.`,
      `Robust and ${getRandomElement(
        flavorProfiles
      )}, this dish is thoughtfully ${getRandomElement(
        cookingTerms
      )} and ${getRandomElement(servingStyles)}.`,
      `A satisfying main that pairs ${getRandomElement(
        ingredients
      )} with chef-curated technique and a ${getRandomElement(
        flavorProfiles
      )} finish.`,
      `Made for memorable meals, this ${itemBase.toLowerCase()} highlights premium ingredients and ${getRandomElement(
        cookingTerms
      )} mastery.`,
      `Served with care, this hearty course combines ${getRandomElement(
        ingredients
      )} and layered ${getRandomElement(flavorProfiles)} in every bite.`,
    ])}`;
  } else if (category === "Desserts") {
    return `${getRandomElement([
      `Indulge in this ${getRandomElement(
        flavorProfiles
      )} dessert, ${getRandomElement(
        cookingTerms
      )} with precision and ${getRandomElement(
        servingStyles
      )} to satisfy your sweet tooth.`,
      `A ${getRandomElement(
        flavorProfiles
      )} finale to your meal, featuring ${getRandomElement(
        ingredients
      )} and balanced sweetness.`,
      `This delightful ${itemBase.toLowerCase()} is ${getRandomElement(
        cookingTerms
      )} using traditional recipes with our chef's special touch.`,
      `Our pastry chef's pride, this ${getRandomElement(
        flavorProfiles
      )} creation combines textures and flavors for a memorable sweet ending.`,
      `Delicately ${getRandomElement(
        cookingTerms
      )}, this dessert celebrates ${getRandomElement(
        ingredients
      )} with every bite.`,
      `A ${getRandomElement(
        flavorProfiles
      )} composition, layered with ${getRandomElement(
        ingredients
      )} and ${getRandomElement(servingStyles)} to perfection.`,
      `This dessert experience offers a blend of ${getRandomElement(
        flavorProfiles
      )} notes and artful technique.`,
      `Balanced between comfort and elegance, this dish is ${getRandomElement(
        servingStyles
      )} to highlight its ${getRandomElement(flavorProfiles)} complexity.`,
      `Rich in texture and flavor, this ${itemBase.toLowerCase()} showcases ${getRandomElement(
        ingredients
      )} and refined ${getRandomElement(cookingTerms)}.`,
      `A nostalgic treat reimagined, this dessert balances sweetness with ${getRandomElement(
        flavorProfiles
      )} sophistication.`,
    ])}`;
  } else if (category === "Non-Alcoholic Beverages") {
    return `${getRandomElement([
      `A ${getRandomElement(
        flavorProfiles
      )} beverage that refreshes and delights with every sip.`,
      `This thirst-quenching option features ${getRandomElement(
        flavorProfiles
      )} notes and is served at the perfect temperature.`,
      `Our special ${itemBase.toLowerCase()} blend, crafted to provide a ${getRandomElement(
        flavorProfiles
      )} complement to your meal.`,
      `A ${getRandomElement(
        flavorProfiles
      )} drink prepared with ${getRandomElement(
        ingredients
      )} for ultimate refreshment.`,
      `Carefully ${getRandomElement(cookingTerms)} and ${getRandomElement(
        servingStyles
      )}, this beverage elevates the experience.`,
      `Infused with ${getRandomElement(
        ingredients
      )}, this ${itemBase.toLowerCase()} delivers a ${getRandomElement(
        flavorProfiles
      )} finish.`,
      `Served chilled or warm depending on preference, this drink balances ${getRandomElement(
        flavorProfiles
      )} flavors with a touch of finesse.`,
      `An elevated refreshment, ${getRandomElement(
        cookingTerms
      )} to emphasize its ${getRandomElement(
        flavorProfiles
      )} profile and natural ${getRandomElement(ingredients)}.`,
    ])}`;
  } else if (category === "Alcoholic Beverages") {
    return `${getRandomElement([
      `A ${getRandomElement(
        flavorProfiles
      )} libation crafted by our skilled mixologists to delight the most discerning palate.`,
      `This ${getRandomElement(
        flavorProfiles
      )} specialty drink showcases premium spirits and expert technique.`,
      `Our signature ${itemBase.toLowerCase()}, carefully balanced with complementary flavors and ${getRandomElement(
        servingStyles
      )}.`,
      `A sophisticated ${getRandomElement(
        flavorProfiles
      )} option from our curated selection, perfect for savoring throughout your meal.`,
      `This ${itemBase.toLowerCase()} is ${getRandomElement(
        cookingTerms
      )} with artisanal care, highlighting ${getRandomElement(
        ingredients
      )} and ${getRandomElement(servingStyles)}.`,
      `Elevate your experience with this ${getRandomElement(
        flavorProfiles
      )} cocktail, composed of ${getRandomElement(
        ingredients
      )} and finished with flair.`,
      `Crafted to perfection, this ${itemBase.toLowerCase()} layers ${getRandomElement(
        flavorProfiles
      )} undertones with expert ${getRandomElement(cookingTerms)} technique.`,
      `Hand-poured and ${getRandomElement(
        servingStyles
      )}, this beverage brings together ${getRandomElement(
        ingredients
      )} and a refined ${getRandomElement(flavorProfiles)} character.`,
      `An expressive drink with depth, this cocktail features ${getRandomElement(
        flavorProfiles
      )} notes and a harmonious finish.`,
    ])}`;
  } else if (category === "Soups") {
    return `${getRandomElement([
      `A ${getRandomElement(
        flavorProfiles
      )} soup that warms the soul, featuring ${getRandomElement(
        ingredients
      )} and aromatic herbs.`,
      `This comforting ${itemBase.toLowerCase()} is ${getRandomElement(
        cookingTerms
      )} slowly to develop rich flavors and ${getRandomElement(
        servingStyles
      )}.`,
      `A nourishing bowl of ${itemBase.toLowerCase()}, ${getRandomElement(
        cookingTerms
      )} with ${getRandomElement(ingredients)} for a ${getRandomElement(
        flavorProfiles
      )} experience.`,
      `${getRandomElement(servingStyles)}, this ${getRandomElement(
        flavorProfiles
      )} soup balances textures and depth of flavor.`,
      `Our signature ${itemBase.toLowerCase()} combines ${getRandomElement(
        ingredients
      )} and traditional techniques for a ${getRandomElement(
        flavorProfiles
      )} finish.`,
      `This handcrafted soup is ${getRandomElement(
        cookingTerms
      )} with care, using ${getRandomElement(
        ingredients
      )} and layered with ${getRandomElement(flavorProfiles)} character.`,
      `A soul-satisfying blend of ${getRandomElement(
        ingredients
      )}, this ${itemBase.toLowerCase()} offers a ${getRandomElement(
        flavorProfiles
      )} warmth with every spoonful.`,
      `Slow-simmered and ${getRandomElement(
        servingStyles
      )}, our ${itemBase.toLowerCase()} highlights ${getRandomElement(
        flavorProfiles
      )} undertones and classic depth.`,
    ])}`;
  } else if (category === "Salads") {
    return `${getRandomElement([
      `A ${getRandomElement(flavorProfiles)} melange of ${getRandomElement(
        ingredients
      )}, ${getRandomElement(cookingTerms)} and ${getRandomElement(
        servingStyles
      )}.`,
      `This refreshing ${itemBase.toLowerCase()} combines crisp textures and ${getRandomElement(
        flavorProfiles
      )} flavors for a light yet satisfying experience.`,
      `A vibrant composition of ${getRandomElement(
        ingredients
      )}, this salad is ${getRandomElement(
        cookingTerms
      )} to highlight natural ${getRandomElement(flavorProfiles)} notes.`,
      `${getRandomElement(
        servingStyles
      )}, this seasonal salad brings together ${getRandomElement(
        flavorProfiles
      )} elements and thoughtful balance.`,
      `Our ${itemBase.toLowerCase()} celebrates freshness with ${getRandomElement(
        ingredients
      )} and a ${getRandomElement(flavorProfiles)} dressing.`,
      `A modern take on a classic, this salad is ${getRandomElement(
        cookingTerms
      )} to emphasize ${getRandomElement(
        flavorProfiles
      )} simplicity and vibrant produce.`,
      `Carefully layered with ${getRandomElement(
        ingredients
      )}, this ${itemBase.toLowerCase()} delivers a ${getRandomElement(
        flavorProfiles
      )} mix of crunch and zest.`,
      `This salad showcases ${getRandomElement(
        flavorProfiles
      )} contrasts with ${getRandomElement(
        ingredients
      )} and is ${getRandomElement(servingStyles)}.`,
    ])}`;
  } else if (category === "Side Dishes") {
    return `${getRandomElement([
      `A ${getRandomElement(
        flavorProfiles
      )} accompaniment that perfectly complements your main course.`,
      `This ${itemBase.toLowerCase()} is ${getRandomElement(
        cookingTerms
      )} to ${getRandomElement(
        flavorProfiles
      )} perfection and ${getRandomElement(servingStyles)}.`,
      `A supporting player with star quality, this ${getRandomElement(
        flavorProfiles
      )} side features ${getRandomElement(ingredients)}.`,
      `${getRandomElement(
        servingStyles
      )}, this ${itemBase.toLowerCase()} provides a ${getRandomElement(
        flavorProfiles
      )} contrast to your entrée.`,
      `Our ${itemBase.toLowerCase()} side dish brings ${getRandomElement(
        flavorProfiles
      )} balance to your meal through ${getRandomElement(
        cookingTerms
      )} technique.`,
      `Subtly crafted and ${getRandomElement(
        servingStyles
      )}, this side is a ${getRandomElement(
        flavorProfiles
      )} complement to any dish.`,
      `Rich in texture and flavor, this ${itemBase.toLowerCase()} highlights ${getRandomElement(
        ingredients
      )} for a ${getRandomElement(flavorProfiles)} finish.`,
      `This ${getRandomElement(
        flavorProfiles
      )} side dish is thoughtfully ${getRandomElement(
        cookingTerms
      )} to enhance the overall dining experience.`,
    ])}`;
  } // Add to your generateItemDescription function
  else if (category === "Signature Dishes" || category === "Chef's Specials") {
    return `${getRandomElement([
      `The pride of our kitchen, this ${getRandomElement(
        flavorProfiles
      )} ${itemBase.toLowerCase()} exemplifies our culinary philosophy through meticulous ${getRandomElement(
        cookingTerms
      )} and ${getRandomElement(servingStyles)} presentation.`,
      `Our chef's renowned ${itemBase.toLowerCase()} is ${getRandomElement(
        cookingTerms
      )} with extraordinary attention to detail, harmonizing ${getRandomElement(
        ingredients
      )} into a ${getRandomElement(flavorProfiles)} symphony.`,
      `This signature dish blends ${getRandomElement(
        ingredients
      )} and time-honored techniques perfected over years, culminating in a ${getRandomElement(
        flavorProfiles
      )} masterpiece that delights the senses.`,
      `A house specialty that has earned critical acclaim, this ${itemBase.toLowerCase()} balances ${getRandomElement(
        flavorProfiles
      )} elements with exquisite execution and artistic plating.`,
      `${getRandomElement(
        servingStyles
      )}, this defining dish showcases our commitment to ${getRandomElement(
        flavorProfiles
      )} excellence, innovation, and culinary storytelling.`,
      `Our most requested item features a bold fusion of ${getRandomElement(
        ingredients
      )} and precise ${getRandomElement(
        cookingTerms
      )} that create a memorable and refined dining highlight.`,
      `A dish that narrates our story, this ${itemBase.toLowerCase()} harmonizes ${getRandomElement(
        ingredients
      )} into a ${getRandomElement(
        flavorProfiles
      )} celebration of flavors, textures, and tradition.`,
      `Crafted with passion, this signature ${itemBase.toLowerCase()} combines ${getRandomElement(
        ingredients
      )} and ${getRandomElement(
        servingStyles
      )} for an unforgettable experience that honors culinary artistry.`,
    ])}`;
  } else if (category === "Seafood Specialties") {
    return `${getRandomElement([
      `The freshest catch, expertly ${getRandomElement(
        cookingTerms
      )} to ${getRandomElement(
        flavorProfiles
      )} perfection, highlighting the pristine flavors of the sea with every bite.`,
      `This ocean-to-table ${itemBase.toLowerCase()} features sustainably sourced seafood, skillfully ${getRandomElement(
        cookingTerms
      )} and elegantly ${getRandomElement(servingStyles)}.`,
      `Our chef’s inspired take on ${itemBase.toLowerCase()} showcases vibrant ${getRandomElement(
        ingredients
      )} paired with delicate ${getRandomElement(
        flavorProfiles
      )} notes, capturing the ocean’s essence.`,
      `A seafood lover’s delight, this ${getRandomElement(
        flavorProfiles
      )} dish evokes coastal culinary traditions with fresh ${getRandomElement(
        ingredients
      )} and meticulous preparation.`,
      `${getRandomElement(
        servingStyles
      )}, this premium seafood selection combines handpicked ${getRandomElement(
        ingredients
      )} with expert ${getRandomElement(
        cookingTerms
      )} techniques for balanced flavor.`,
      `Sourced from pristine waters, this ${itemBase.toLowerCase()} is gently ${getRandomElement(
        cookingTerms
      )} to elevate its natural ${getRandomElement(
        flavorProfiles
      )} character and texture.`,
      `A celebration of the ocean’s bounty, featuring ${getRandomElement(
        ingredients
      )} infused with subtle ${getRandomElement(
        flavorProfiles
      )} accents, served with ${getRandomElement(servingStyles)} finesse.`,
      `Delicately ${getRandomElement(
        cookingTerms
      )}, this ${itemBase.toLowerCase()} melds rich ${getRandomElement(
        flavorProfiles
      )} undertones with fresh, sustainably harvested seafood for a sublime taste.`,
    ])}`;
  } else if (category === "Small Plates" || category === "Shared Plates") {
    return `${getRandomElement([
      `Perfectly portioned for sharing, this ${getRandomElement(
        flavorProfiles
      )} small plate blends ${getRandomElement(
        ingredients
      )} into a harmonious and memorable culinary experience.`,
      `A social dining favorite, this ${itemBase.toLowerCase()} is thoughtfully ${getRandomElement(
        cookingTerms
      )} and ${getRandomElement(
        servingStyles
      )} to encourage convivial enjoyment.`,
      `This ${getRandomElement(
        flavorProfiles
      )} tapa-style offering balances robust flavors and ideal shareability with carefully selected ${getRandomElement(
        ingredients
      )}.`,
      `Designed for communal dining, this ${itemBase.toLowerCase()} offers layers of ${getRandomElement(
        flavorProfiles
      )} satisfaction in every bite, encouraging conversation and connection.`,
      `${getRandomElement(
        servingStyles
      )}, this shareable plate celebrates the vibrant flavors of ${getRandomElement(
        ingredients
      )} with ${getRandomElement(flavorProfiles)} intensity and balance.`,
      `A conversation starter, this social dish combines ${getRandomElement(
        ingredients
      )} with expert ${getRandomElement(
        cookingTerms
      )} technique, making it perfect for group enjoyment.`,
      `This communal favorite artfully balances ${getRandomElement(
        flavorProfiles
      )} complexity and ${getRandomElement(
        servingStyles
      )} appeal, ideal for sharing and savoring together.`,
      `Light yet flavorful, this small plate features ${getRandomElement(
        ingredients
      )} and ${getRandomElement(
        flavorProfiles
      )} notes designed to complement any gathering.`,
    ])}`;
  } else if (category === "Plant-Based") {
    return `${getRandomElement([
      `This plant-forward creation showcases vibrant ${getRandomElement(
        ingredients
      )} in a ${getRandomElement(
        flavorProfiles
      )} celebration of earth’s freshest bounty and textures.`,
      `A thoughtfully composed dish featuring ${getRandomElement(
        ingredients
      )}, this vegan option proves that plant-based cuisine can be both deeply satisfying and elegantly ${getRandomElement(
        flavorProfiles
      )}.`,
      `${getRandomElement(
        servingStyles
      )}, this vegan-friendly offering pairs ${getRandomElement(
        ingredients
      )} with bold ${getRandomElement(
        flavorProfiles
      )} depth, perfect for mindful dining.`,
      `Our chef’s plant-based masterpiece features ${getRandomElement(
        ingredients
      )} prepared with careful ${getRandomElement(
        cookingTerms
      )} to bring out their natural ${getRandomElement(
        flavorProfiles
      )} qualities.`,
      `A sustainable choice without compromise on taste, this ${itemBase.toLowerCase()} blends ${getRandomElement(
        flavorProfiles
      )} complexity and wholesome ingredients for an elevated plant-based experience.`,
      `This innovative dish transforms humble ${getRandomElement(
        ingredients
      )} into a ${getRandomElement(
        flavorProfiles
      )} culinary showcase, emphasizing sustainability and flavor.`,
      `Celebrating vegetables in their prime, this dish is ${getRandomElement(
        cookingTerms
      )} to highlight the natural ${getRandomElement(
        flavorProfiles
      )} notes and satisfy diverse palates.`,
      `Expertly crafted with seasonal produce, this plant-based dish delivers layers of ${getRandomElement(
        flavorProfiles
      )} in every carefully prepared bite.`,
    ])}`;
  } else if (category === "Seasonal Offerings") {
    return `${getRandomElement([
      `A celebration of the current season, featuring ${getRandomElement(
        ingredients
      )} at their peak freshness and flavor, expertly prepared to highlight natural qualities.`,
      `This limited-time offering showcases ${getRandomElement(
        flavorProfiles
      )} seasonal bounty, skillfully ${getRandomElement(
        cookingTerms
      )} and thoughtfully ${getRandomElement(servingStyles)}.`,
      `${getRandomElement(
        servingStyles
      )}, this dish captures the essence of the season through vibrant ${getRandomElement(
        ingredients
      )} and meticulous preparation honoring tradition.`,
      `Our chef’s tribute to the season’s harvest, combining ${getRandomElement(
        flavorProfiles
      )} elements in a dish that balances freshness, texture, and flavor with precision.`,
      `A time-sensitive creation that reflects nature’s calendar, this offering features ${getRandomElement(
        ingredients
      )} prepared using ${getRandomElement(
        cookingTerms
      )} techniques to maximize seasonal flavors.`,
      `Enjoy this seasonal specialty while available, ${getRandomElement(
        cookingTerms
      )} to enhance the ${getRandomElement(
        flavorProfiles
      )} attributes unique to this time of year.`,
      `An ephemeral culinary experience celebrating the fleeting beauty of seasonal ${getRandomElement(
        ingredients
      )}, presented with ${getRandomElement(servingStyles)} flair.`,
      `Inspired by local harvests, this dish blends fresh seasonal ingredients with ${getRandomElement(
        flavorProfiles
      )} nuances to provide a taste of the moment.`,
    ])}`;
  } else if (category === "Chef's Specials") {
    return `${getRandomElement([
      `Our chef’s special ${itemBase.toLowerCase()} is a masterclass in ${getRandomElement(
        cookingTerms
      )}, crafted with premium ${getRandomElement(
        ingredients
      )} and presented with ${getRandomElement(servingStyles)} elegance.`,
      `This standout ${itemBase.toLowerCase()} embodies the essence of culinary artistry, combining ${getRandomElement(
        ingredients
      )} with ${getRandomElement(
        flavorProfiles
      )} notes to deliver an exceptional dining experience.`,
      `A hallmark of our kitchen, this chef’s special ${itemBase.toLowerCase()} balances rich ${getRandomElement(
        flavorProfiles
      )} flavors and refined technique, making it a favored choice among discerning guests.`,
      `Expertly ${getRandomElement(
        cookingTerms
      )}, this dish features carefully selected ${getRandomElement(
        ingredients
      )} and is finished with ${getRandomElement(
        servingStyles
      )} finesse to highlight its ${getRandomElement(
        flavorProfiles
      )} character.`,
      `Our signature chef’s special offers a unique blend of ${getRandomElement(
        ingredients
      )} and ${getRandomElement(
        flavorProfiles
      )} complexity, showcasing innovation and tradition in perfect harmony.`,
      `Elevate your meal with this chef-curated special, where premium ${getRandomElement(
        ingredients
      )} meet advanced ${getRandomElement(
        cookingTerms
      )} techniques and a presentation style that captivates.`,
      `This exclusive ${itemBase.toLowerCase()} reflects the chef’s creativity and expertise, combining ${getRandomElement(
        ingredients
      )} with a ${getRandomElement(
        flavorProfiles
      )} profile and impeccable plating.`,
    ])}`;
  }

  // Default description if category doesn't match
  return `Our ${name.toLowerCase()} is prepared with the freshest ingredients, carefully selected by our chef.`;
};

// Generate a full menu with multiple categories
const generateMenu = () => {
  const menus = ["Main Menu", "Dessert Menu", "Alcohol Menu"];

  let description;

  switch (menus) {
    case "Main Menu":
      description = `${getRandomElement([
        `Our chef’s special ${itemBase.toLowerCase()} is a masterclass in ${getRandomElement(
          cookingTerms
        )}, crafted with premium ${getRandomElement(
          ingredients
        )} and presented with ${getRandomElement(servingStyles)} elegance.`,
        `This standout entrée embodies the essence of culinary artistry, blending ${getRandomElement(
          ingredients
        )} with ${getRandomElement(flavorProfiles)} elements.`,
        `A hallmark of our kitchen, this chef-curated ${itemBase.toLowerCase()} delivers balanced ${getRandomElement(
          flavorProfiles
        )} flavors and refined technique.`,
        `Expertly ${getRandomElement(
          cookingTerms
        )}, this main course highlights seasonal ${getRandomElement(
          ingredients
        )} and ${getRandomElement(servingStyles)} sophistication.`,
        `Savor this signature dish — a perfect marriage of ${getRandomElement(
          ingredients
        )} and ${getRandomElement(flavorProfiles)} refinement.`,
        `Elevate your meal with this main course, where innovative preparation meets bold ${getRandomElement(
          flavorProfiles
        )} character.`,
        `Crafted with precision, this chef’s selection unites ${getRandomElement(
          ingredients
        )} and exceptional ${getRandomElement(cookingTerms)} technique.`,
      ])}`;
      break;

    case "Dessert Menu":
      description = `${getRandomElement([
        `A decadent finale — this ${itemBase.toLowerCase()} combines ${getRandomElement(
          ingredients
        )} and ${getRandomElement(flavorProfiles)} sweetness.`,
        `This dessert is ${getRandomElement(
          cookingTerms
        )} to perfection, offering a luxurious blend of ${getRandomElement(
          ingredients
        )} and artistic ${getRandomElement(servingStyles)}.`,
        `Satisfy your sweet cravings with this chef's special — ${getRandomElement(
          ingredients
        )} paired with irresistible ${getRandomElement(flavorProfiles)} tones.`,
        `An indulgent creation, this ${itemBase.toLowerCase()} delivers a sophisticated take on classic flavors.`,
        `Finished with ${getRandomElement(
          servingStyles
        )}, this dessert highlights the interplay between ${getRandomElement(
          flavorProfiles
        )} notes and fine textures.`,
        `A chef-conceived treat where premium ${getRandomElement(
          ingredients
        )} meet elegant ${getRandomElement(cookingTerms)} technique.`,
        `This signature sweet balances richness and finesse — an ideal ending to your meal.`,
      ])}`;
      break;

    case "Alcohol Menu":
      description = `${getRandomElement([
        `A refined pour, this ${itemBase.toLowerCase()} showcases ${getRandomElement(
          ingredients
        )} with a ${getRandomElement(flavorProfiles)} profile.`,
        `Crafted with precision and balance, this cocktail highlights ${getRandomElement(
          ingredients
        )} and ${getRandomElement(servingStyles)} flair.`,
        `This signature beverage blends artisanal spirits and ${getRandomElement(
          cookingTerms
        )} garnishes for a layered flavor experience.`,
        `Sip sophistication — this drink combines ${getRandomElement(
          ingredients
        )} and ${getRandomElement(
          flavorProfiles
        )} accents for a memorable experience.`,
        `Our bartender’s special — a creative expression of mixology featuring ${getRandomElement(
          ingredients
        )} and expertly curated notes.`,
        `Presented with ${getRandomElement(
          servingStyles
        )}, this drink balances strength and nuance in every sip.`,
        `A house favorite that exemplifies the harmony of bold ${getRandomElement(
          flavorProfiles
        )} elements and timeless ingredients.`,
      ])}`;
      break;

    default:
      description = "Menu not found";
      break;
  }
  

  const categories = [
    "Appetizers",
    "Soups",
    "Salads",
    "Main Courses",
    "Side Dishes",
    "Non-Alcoholic Beverages",
  ];

  return menus.map((menuTitle) => {
    return categories.map((categoryName) => {
      return {
        title: menuTitle,
        description: description,
        category: {
          name: categoryName,
          items: Array.from({ length: getRandomNumber(4, 8) }, () =>
            generateFoodItem(categoryName)
          ),
        },
      };
    });
  });
};

const generateDessertMenu = () => {
  return {
    title: `${getRandomElement([
      "Sweet",
      "Delectable",
      "Indulgent",
      "Divine",
      "Gourmet",
    ])} Dessert Menu`,
    description: `Our ${getRandomNumber(
      2020,
      2025
    )} collection of exquisite desserts crafted by our pastry chefs.`,
    category: [
      {
        name: "Desserts",
        items: Array.from({ length: getRandomNumber(6, 12) }, () =>
          generateFoodItem("Desserts")
        ),
      },
    ],
  };
};

const generateAlcoholMenu = () => {
  return {
    title: `${getRandomElement([
      "Premium",
      "Select",
      "Signature",
      "Exclusive",
      "Curated",
    ])} Alcohol Menu`,
    description: `Our ${getRandomNumber(
      2020,
      2025
    )} selection of fine wines, spirits, and craft cocktails.`,
    category: [
      {
        name: "Alcoholic Beverages",
        items: Array.from({ length: getRandomNumber(5, 10) }, () =>
          generateFoodItem("Alcoholic Beverages")
        ),
      },
    ],
  };
};

// Generate a complete restaurant menu entry
const generateRestaurantMenu = (index) => {
  // Determine which menu to generate based on the index
  if (index % 3 === 0) {
    return generateMenu();
  } else if (index % 3 === 1) {
    return generateDessertMenu();
  } else {
    return generateAlcoholMenu();
  }
};

// Add these lines at the beginning of your script, after the imports
const args = process.argv.slice(2);
const shouldReplace = args.includes("--replace");
const shouldAddCategories = args.includes("--add-categories");

// Get custom category name if provided
const categoryArg = args.find((arg) => arg.startsWith("--category="));
const newCategoryName = categoryArg
  ? categoryArg.split("=")[1]
  : "Chef's Specials";

console.log(`Starting menu generation with options:
- Replace existing menus: ${shouldReplace}
- Add new category: ${shouldAddCategories}
- New category name: ${shouldAddCategories ? newCategoryName : "N/A"}`);

// Process all restaurant files in the directory structure
function processRestaurantFiles() {
  // Get all city directories
  const cityDirs = fs
    .readdirSync(baseDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  console.log(`Found ${cityDirs.length} city directories.`);

  // Go through each city directory
  cityDirs.forEach((cityDir) => {
    const cityPath = path.join(baseDir, cityDir);

    // Get city name in a more readable format
    const cityName = cityDir
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    // Get all .ts files in the directory (except restaurants.ts)
    const files = fs
      .readdirSync(cityPath)
      .filter((file) => file.endsWith(".ts") && file !== "restaurants.ts");

    console.log(`Processing ${files.length} restaurant files in ${cityDir}...`);

    // Process each restaurant file
    files.forEach((file) => {
      const filePath = path.join(cityPath, file);
      console.log(`Processing restaurant data for ${file}...`);

      // Generate the variable name from the file name
      const fileNameWithoutExt = file.replace(".ts", "");
      const camelCaseName = fileNameWithoutExt.replace(/-([a-z])/g, (g) =>
        g[1].toUpperCase()
      );
      const cityVarName = cityDir.replace(/-([a-z])/g, (g) =>
        g[1].toUpperCase()
      );
      const varName = `${cityVarName}${
        camelCaseName.charAt(0).toUpperCase() + camelCaseName.slice(1)
      }Menu`;

      // Generate restaurant with all required properties
      const restaurant = generateRestaurant(file, cityName);

      // Create the file content
      const fileContent = `import { Restaurant } from "@/lib/types/types";

export const ${varName}: Restaurant = ${JSON.stringify(restaurant, null, 2)};
`;

      // Write to the file
      fs.writeFileSync(filePath, fileContent);
      console.log(`Updated ${file} with complete restaurant data`);
    });
  });

  console.log(
    "All restaurant files have been updated with full restaurant data!"
  );
}

// Add this restaurant generation function
const generateRestaurant = (fileName, cityName) => {
  // Extract a name from the file name
  const restaurantName = fileName
    .replace(".ts", "")
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  // Get a random cuisine from the imported cuisineTypes array
  const cuisine = getRandomElement(cuisineTypes);

  // Random price range
  const priceRanges = ["$", "$$", "$$$", "$$$$"];
  const priceRange = getRandomElement(priceRanges);

  // Random rating between 3.5 and 5.0
  const rating = parseFloat((Math.random() * 1.5 + 3.5).toFixed(1));

  // Generate contact info
  const contactInfo = generateContactInfo();

  // Generate opening hours
  const openingHours = generateOpeningHours();

  // Generate restaurant menus
  const restaurantMenus = Array.from({ length: 3 }, (_, i) =>
    generateRestaurantMenu(i)
  );

  return {
    name: restaurantName,
    description: `A ${cuisine} culinary experience in the heart of ${cityName}, offering a blend of traditional techniques and innovative flavors.`,
    cuisine,
    priceRange,
    rating,
    contactInfo,
    openingHours,
    menu: restaurantMenus,
    isVegetarianFriendly: Math.random() > 0.3,
    isVeganFriendly: Math.random() > 0.5,
    isGlutenFreeFriendly: Math.random() > 0.6,
    isHalalFriendly: Math.random() > 0.7,
    isKosherFriendly: Math.random() > 0.7,
    isFineDining: priceRange === "$$$$" || priceRange === "$$$",
    isAdultOnly: Math.random() > 0.8,
    isIndoorSeating: true,
    isReservationsAccepted: Math.random() > 0.2,
    isRomantic: Math.random() > 0.4,
    isPopular: Math.random() > 0.3,
  };
};

// Run the script
processRestaurantFiles();
