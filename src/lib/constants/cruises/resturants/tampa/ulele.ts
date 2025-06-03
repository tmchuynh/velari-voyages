import { ResturantMenu } from "@/lib/types/types";

export const tampauleleMenu: ResturantMenu[] = [
	{
		title: "Appetizers",
		category: [
			{
				name: "Native-Inspired Starters",
				items: [
					{
						name: "Alligator Hush Puppies",
						description:
							"Alligator, country ham, duck bacon, and sweet corn, with honey datil pepper sauce and freshly-ground horseradish aioli",
						price: 16,
						isGlutenFree: false,
					},
					{
						name: "Oysters Barbacoa",
						description:
							"Half dozen charbroiled oysters with garlic butter, grated parmesan and Romano cheeses",
						price: 19,
						isGlutenFree: true,
					},
					{
						name: "Okra Fries",
						description: "Hand-cut and lightly fried, with house-made ketchup",
						price: 9,
						isVegetarian: true,
						isVegan: true,
						isGlutenFree: false,
					},
					{
						name: "Florida Native Chili",
						description:
							"Alligator, wild boar, venison, duck, ground chuck, cranberry beans and chili spices",
						price: 14,
						isGlutenFree: true,
					},
				],
			},
			{
				name: "From the Waters",
				items: [
					{
						name: "Tuna Poke",
						description:
							"Sashimi-grade tuna, soy sauce, sesame oil, avocado, scallions, cucumber and Hawaiian pink salt",
						price: 17,
						isGlutenFree: true,
					},
					{
						name: "Crab Mac & Cheese",
						description: "Blue crab, Havarti cheese, fire-roasted breadcrumbs",
						price: 16,
						isGlutenFree: false,
					},
				],
			},
		],
		description:
			"Begin your journey with flavors inspired by Florida's indigenous past",
	},
	{
		title: "Salads",
		category: [
			{
				name: "Fresh Greens",
				items: [
					{
						name: "Ulele Mixed Green Salad",
						description:
							"Mixed greens, cranberry beans, fire-roasted peppers, pine nuts, onions, balsamic vinaigrette",
						price: 12,
						isVegetarian: true,
						isVegan: true,
						isGlutenFree: true,
					},
					{
						name: "Florida Avocado & Grapefruit Salad",
						description:
							"Local avocado, ruby red grapefruit, arugula, red onion, pumpkin seeds, citrus vinaigrette",
						price: 14,
						isVegetarian: true,
						isVegan: true,
						isGlutenFree: true,
					},
					{
						name: "Ancient Grain Salad",
						description:
							"Farro, quinoa, amaranth, peppers, onions, fire-roasted corn, almonds, avocado, tomato",
						price: 15,
						isVegetarian: true,
						isVegan: true,
						isGlutenFree: false,
					},
				],
			},
		],
		description: "Fresh, local ingredients combined in creative ways",
	},
	{
		title: "Seafood",
		category: [
			{
				name: "Gulf Coast Favorites",
				items: [
					{
						name: "Gulf Grouper",
						description:
							"Grilled or blackened with pineapple-coconut scalloped potatoes, mango butter and chef's vegetable",
						price: 38,
						isGlutenFree: true,
					},
					{
						name: "Pompano",
						description:
							"Cast-iron seared, with garlic spinach, sun-dried tomato risotto and citrus herb butter",
						price: 36,
						isGlutenFree: true,
					},
					{
						name: "Florida Pompano",
						description:
							"Grilled with crispy fried carrot ribbons, arugula-citrus salad and Florida citrus beurre blanc",
						price: 34,
						isGlutenFree: true,
					},
					{
						name: "Snapper",
						description:
							"Grilled with fire-roasted corn salsa, roasted fingerling potatoes, and avocado-lime butter",
						price: 32,
						isGlutenFree: true,
					},
				],
			},
		],
		description:
			"Locally-sourced seafood prepared with indigenous and contemporary techniques",
	},
	{
		title: "Land & Fire",
		category: [
			{
				name: "From the Grill",
				items: [
					{
						name: "Water Works Meatloaf",
						description:
							"Ground strip loin, fresh vegetables, motherhood gravy, white cheddar popcorn mashed potatoes",
						price: 22,
						isGlutenFree: true,
					},
					{
						name: "Crackling Pork Shank",
						description:
							"Slow-braised pork shank, firecracker applesauce, white cheddar popcorn mashed potatoes",
						price: 29,
						isGlutenFree: true,
					},
					{
						name: "Native Spiced Venison Loin",
						description:
							"Herb-crusted venison, rainbow carrots, whipped sweet potato, blackberry port wine reduction",
						price: 42,
						isGlutenFree: true,
					},
					{
						name: "Grilled Filet Mignon",
						description:
							"Choice Angus beef, white truffle butter, garlic spinach, butternut squash risotto",
						price: 38,
						isGlutenFree: true,
					},
				],
			},
			{
				name: "House Specialties",
				items: [
					{
						name: "Ulele's Three Sisters",
						description:
							"Fresh grilled zucchini, squash, portobello mushroom, red pepper, corn, cranberry beans, carrot ribbons, tomato herb vinaigrette",
						price: 22,
						isVegetarian: true,
						isVegan: true,
						isGlutenFree: true,
					},
					{
						name: "Fire-Roasted Chicken",
						description:
							"Grilled half chicken, white cheddar popcorn mashed potatoes, chef's vegetable",
						price: 25,
						isGlutenFree: true,
					},
				],
			},
		],
		description:
			"Flame-kissed specialties inspired by Florida's native traditions",
	},
	{
		title: "Sandwiches & Handhelds",
		category: [
			{
				name: "Lunch Favorites",
				items: [
					{
						name: "The Ulele Burger",
						description:
							"Ground short rib, brisket and chuck, with house-made tomato bacon jam, arugula, white cheddar and hand-cut fries",
						price: 19,
						isGlutenFree: false,
					},
					{
						name: "Gulf Grouper Sandwich",
						description:
							"Grilled or blackened, on brioche with lettuce, tomato, red onion, house-made tartar sauce and hand-cut fries",
						price: 21,
						isGlutenFree: false,
					},
					{
						name: "Fire-Roasted Chicken Sandwich",
						description:
							"Grilled chicken breast, avocado, bacon, lettuce, tomato, Swiss cheese, herb aioli on brioche with hand-cut fries",
						price: 16,
						isGlutenFree: false,
					},
				],
			},
		],
		description:
			"Midday specialties featuring local flavors and ingredients",
	},
	{
		title: "Desserts",
		category: [
			{
				name: "Sweet Endings",
				items: [
					{
						name: "Fortune Taylor's Guava Pie",
						description:
							"Shortbread cookie crust, whipped cream, guava reduction sauce",
						price: 10,
						isVegetarian: true,
						isGlutenFree: false,
					},
					{
						name: "Flourless Chocolate Torte",
						description: "Raspberry port wine reduction, whipped cream",
						price: 11,
						isVegetarian: true,
						isGlutenFree: true,
					},
					{
						name: "Key West Key Lime Stack",
						description: "Layers of graham cracker, key lime pie, brûléed meringue",
						price: 10,
						isVegetarian: true,
						isGlutenFree: false,
					},
					{
						name: "Candied Bacon Maple Ice Cream",
						description: "House-made bacon maple ice cream with candied bacon",
						price: 9,
						isGlutenFree: true,
					},
				],
			},
		],
		description:
			"House-made desserts featuring indigenous ingredients and Florida flavors",
	},
];
