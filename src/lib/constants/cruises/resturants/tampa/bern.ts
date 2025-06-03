import { ResturantMenu } from "@/lib/types/types";

export const tampabernMenu: ResturantMenu[] = [
	{
		title: "Appetizers",
		category: [
			{
				name: "Cold Starters",
				items: [
					{
						name: "Bern's Steak Tartare",
						description:
							"Hand-cut Prime filet with traditional accompaniments prepared tableside",
						price: 24,
						isGlutenFree: true,
					},
					{
						name: "Jumbo Lump Crab Cocktail",
						description: "Chilled Gulf crab with Dijon mustard sauce and lemon",
						price: 26,
						isGlutenFree: true,
					},
					{
						name: "Foie Gras Torchon",
						description:
							"House-made torchon with toasted brioche, seasonal compote, and aged balsamic",
						price: 28,
						isGlutenFree: false,
					},
					{
						name: "Caviar Service",
						description:
							"Osetra, Beluga, or American sturgeon with traditional accompaniments (Market Price)",
						price: 150,
						isGlutenFree: true,
					},
				],
			},
			{
				name: "Hot Starters",
				items: [
					{
						name: "French Onion Soup Gratinée",
						description:
							"Caramelized onions in beef broth with Gruyère cheese",
						price: 14,
						isGlutenFree: false,
					},
					{
						name: "Escargots à la Bourguignonne",
						description: "Burgundy snails in garlic-herb butter",
						price: 18,
						isGlutenFree: true,
					},
					{
						name: "Lump Crab Cake",
						description: "Pan-seared jumbo lump crab with remoulade sauce",
						price: 22,
						isGlutenFree: false,
					},
				],
			},
		],
		description: "Begin your culinary journey with Bern's classic starters",
	},
	{
		title: "Steaks & Chops",
		category: [
			{
				name: "USDA Prime Beef",
				items: [
					{
						name: "Delmonico",
						description: "16oz boneless ribeye, 8-week dry-aged",
						price: 65,
						isGlutenFree: true,
					},
					{
						name: "Châteaubriand for Two",
						description:
							"20oz center-cut of prime tenderloin, carved tableside with béarnaise sauce",
						price: 120,
						isGlutenFree: true,
					},
					{
						name: "Filet Mignon",
						description: "10oz center-cut tenderloin",
						price: 58,
						isGlutenFree: true,
					},
					{
						name: "New York Strip",
						description: "14oz boneless strip loin, 6-week dry-aged",
						price: 62,
						isGlutenFree: true,
					},
					{
						name: "Porterhouse",
						description: "24oz king of steaks, 8-week dry-aged",
						price: 78,
						isGlutenFree: true,
					},
				],
			},
			{
				name: "Specialty Cuts",
				items: [
					{
						name: "American Wagyu Ribeye",
						description:
							"16oz heavily marbled cut with exceptional flavor",
						price: 135,
						isGlutenFree: true,
					},
					{
						name: "Japanese A5 Wagyu",
						description:
							"3oz of the world's finest beef (additional oz available at market price)",
						price: 150,
						isGlutenFree: true,
					},
					{
						name: "Double-cut Lamb Chops",
						description: "Colorado rack of lamb with rosemary jus",
						price: 65,
						isGlutenFree: true,
					},
				],
			},
		],
		description:
			"All steaks are hand-cut, dry-aged in-house, and cooked to your preference",
	},
	{
		title: "Seafood",
		category: [
			{
				name: "From the Waters",
				items: [
					{
						name: "Whole Dover Sole",
						description: "Deboned tableside with brown butter and lemon",
						price: 68,
						isGlutenFree: true,
					},
					{
						name: "Maine Lobster",
						description: "Steamed 2lb lobster with drawn butter",
						price: 75,
						isGlutenFree: true,
					},
					{
						name: "Grilled Swordfish",
						description: "Line-caught swordfish with citrus beurre blanc",
						price: 48,
						isGlutenFree: true,
					},
				],
			},
		],
		description:
			"Fresh seafood delicacies prepared with the same care as our legendary steaks",
	},
	{
		title: "Accompaniments",
		category: [
			{
				name: "Classic Sides",
				items: [
					{
						name: "Whipped Potatoes",
						description: "Silky smooth with butter and cream",
						price: 12,
						isVegetarian: true,
						isGlutenFree: true,
					},
					{
						name: "Baked Potato",
						description: "One-pound Idaho potato with traditional garnishes",
						price: 10,
						isVegetarian: true,
						isGlutenFree: true,
					},
					{
						name: "Onion Rings",
						description: "Hand-breaded and fried to golden perfection",
						price: 12,
						isVegetarian: true,
						isGlutenFree: false,
					},
					{
						name: "Creamed Spinach",
						description: "Classic steakhouse preparation",
						price: 13,
						isVegetarian: true,
						isGlutenFree: true,
					},
					{
						name: "Grilled Asparagus",
						description: "Jumbo spears with hollandaise sauce",
						price: 15,
						isVegetarian: true,
						isGlutenFree: true,
					},
					{
						name: "Sautéed Mushrooms",
						description: "Seasonal mushrooms with garlic and herbs",
						price: 14,
						isVegetarian: true,
						isVegan: true,
						isGlutenFree: true,
					},
				],
			},
			{
				name: "Steak Enhancements",
				items: [
					{
						name: "Roquefort Cheese Crust",
						description: "Aged blue cheese topping",
						price: 8,
						isVegetarian: true,
						isGlutenFree: true,
					},
					{
						name: "Foie Gras",
						description: "Seared Hudson Valley foie gras",
						price: 24,
						isGlutenFree: true,
					},
					{
						name: "Oscar Style",
						description: "Jumbo lump crab, asparagus, and béarnaise sauce",
						price: 18,
						isGlutenFree: true,
					},
					{
						name: "Truffle Butter",
						description: "Black truffle compound butter",
						price: 7,
						isVegetarian: true,
						isGlutenFree: true,
					},
				],
			},
		],
		description:
			"Complete your steak experience with our signature side dishes",
	},
	{
		title: "Desserts",
		category: [
			{
				name: "Sweet Finale",
				items: [
					{
						name: "Chocolate Soufflé",
						description:
							"Made to order with Grand Marnier crème anglaise (please order with entrée)",
						price: 18,
						isVegetarian: true,
						isGlutenFree: false,
					},
					{
						name: "Baked Alaska",
						description: "Flambéed tableside with seasonal ice cream",
						price: 22,
						isVegetarian: true,
						isGlutenFree: false,
					},
					{
						name: "Bananas Foster",
						description: "The classic New Orleans dessert prepared tableside",
						price: 20,
						isVegetarian: true,
						isGlutenFree: false,
					},
					{
						name: "Bern's Signature Macadamia Nut Ice Cream Pie",
						description:
							"House-made ice cream with chocolate ganache and macadamia nuts",
						price: 15,
						isVegetarian: true,
						isGlutenFree: false,
					},
				],
			},
		],
		description:
			"Finish your meal with one of our legendary desserts or visit the Harry Waugh Dessert Room",
	},
];
