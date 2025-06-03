import { ResturantMenu } from "@/lib/types/types";

export const sanJuanlaCasitaBlancaMenu: ResturantMenu[] = [
	{
		title: "Aperitivos",
		description:
			"Traditional Puerto Rican starters served in a homestyle atmosphere",
		category: [
			{
				name: "Traditional Appetizers",
				items: [
					{
						name: "Bacalaítos",
						description:
							"Crispy salt cod fritters served with garlic mojito sauce",
						price: 8,
						isGlutenFree: false,
					},
					{
						name: "Sorullitos de Maíz",
						description:
							"Sweet cornmeal fingers with mayo-ketchup dipping sauce",
						price: 7,
						isVegetarian: true,
						isGlutenFree: false,
					},
					{
						name: "Empanadillas de Carne",
						description: "Beef turnovers with sofrito and olives",
						price: 9,
						isGlutenFree: false,
					},
					{
						name: "Pionono",
						description: "Sweet plantain stuffed with seasoned ground beef",
						price: 10,
						isGlutenFree: true,
					},
				],
			},
			{
				name: "Sopas",
				items: [
					{
						name: "Sopa del Día",
						description: "Homemade soup of the day, served with fresh bread",
						price: 6,
						isGlutenFree: false,
					},
					{
						name: "Asopao de Pollo",
						description:
							"Traditional chicken and rice soup with sofrito and herbs",
						price: 10,
						isGlutenFree: true,
					},
				],
			},
		],
	},
	{
		title: "Platos Principales",
		description:
			"Authentic Puerto Rican main dishes made from family recipes",
		category: [
			{
				name: "Daily Specials",
				items: [
					{
						name: "Plato del Día",
						description:
							"Chef's daily special, served with rice, beans and sweet plantains",
						price: 16,
						isGlutenFree: true,
					},
					{
						name: "Carne Guisada",
						description:
							"Slow-cooked beef stew with potatoes, carrots and traditional seasonings",
						price: 17,
						isGlutenFree: true,
					},
					{
						name: "Pollo en Fricasé",
						description:
							"Chicken fricassee with potatoes in a flavorful tomato-based sauce",
						price: 15,
						isGlutenFree: true,
					},
				],
			},
			{
				name: "Classics",
				items: [
					{
						name: "Mofongo con Camarones",
						description:
							"Mashed plantain with garlic, olive oil and pork cracklings, topped with shrimp in creole sauce",
						price: 19,
						isGlutenFree: true,
					},
					{
						name: "Bistec Encebollado",
						description:
							"Thin steak topped with sautéed onions, served with rice and beans",
						price: 18,
						isGlutenFree: true,
					},
					{
						name: "Chuletas Can Can",
						description: "Fried pork chops with rice, beans and tostones",
						price: 20,
						isGlutenFree: true,
					},
					{
						name: "Bacalao a la Criolla",
						description:
							"Salted cod in creole sauce with potatoes, served with white rice",
						price: 17,
						isGlutenFree: true,
					},
				],
			},
			{
				name: "Vegetarian",
				items: [
					{
						name: "Berenjena a la Criolla",
						description:
							"Eggplant in creole sauce with rice and beans",
						price: 14,
						isVegetarian: true,
						isVegan: true,
						isGlutenFree: true,
					},
					{
						name: "Arroz con Gandules Vegetariano",
						description:
							"Rice with pigeon peas, vegetables, and traditional seasonings",
						price: 13,
						isVegetarian: true,
						isVegan: true,
						isGlutenFree: true,
					},
				],
			},
		],
	},
	{
		title: "Acompañantes",
		description: "Traditional side dishes to complement your meal",
		category: [
			{
				name: "Sides",
				items: [
					{
						name: "Arroz Blanco",
						description: "White rice",
						price: 4,
						isVegetarian: true,
						isVegan: true,
						isGlutenFree: true,
					},
					{
						name: "Habichuelas",
						description: "Stewed red beans",
						price: 5,
						isVegetarian: true,
						isVegan: true,
						isGlutenFree: true,
					},
					{
						name: "Tostones",
						description: "Twice-fried green plantains",
						price: 5,
						isVegetarian: true,
						isVegan: true,
						isGlutenFree: true,
					},
					{
						name: "Amarillos",
						description: "Fried sweet plantains",
						price: 5,
						isVegetarian: true,
						isVegan: true,
						isGlutenFree: true,
					},
					{
						name: "Ensalada Verde",
						description: "Simple green salad with house dressing",
						price: 6,
						isVegetarian: true,
						isVegan: true,
						isGlutenFree: true,
					},
				],
			},
		],
	},
	{
		title: "Postres",
		description: "Traditional Puerto Rican desserts made with love",
		category: [
			{
				name: "Desserts",
				items: [
					{
						name: "Flan de Caramelo",
						description: "Traditional caramel custard",
						price: 7,
						isVegetarian: true,
						isGlutenFree: true,
					},
					{
						name: "Arroz con Dulce",
						description: "Sweet rice pudding with cinnamon and raisins",
						price: 6,
						isVegetarian: true,
						isGlutenFree: true,
					},
					{
						name: "Tembleque",
						description: "Coconut pudding dusted with cinnamon",
						price: 6,
						isVegetarian: true,
						isGlutenFree: true,
					},
					{
						name: "Guava Pastelillo",
						description: "Guava pastry with powdered sugar",
						price: 5,
						isVegetarian: true,
						isGlutenFree: false,
					},
				],
			},
		],
	},
	{
		title: "Bebidas",
		description: "Refreshing traditional Puerto Rican beverages",
		category: [
			{
				name: "Drinks",
				items: [
					{
						name: "Café Puertorriqueño",
						description: "Traditional Puerto Rican coffee",
						price: 3,
						isVegetarian: true,
						isVegan: true,
						isGlutenFree: true,
					},
					{
						name: "Parcha",
						description: "Fresh passion fruit juice",
						price: 5,
						isVegetarian: true,
						isVegan: true,
						isGlutenFree: true,
					},
					{
						name: "Coco Frío",
						description: "Fresh coconut water served in the coconut",
						price: 6,
						isVegetarian: true,
						isVegan: true,
						isGlutenFree: true,
					},
					{
						name: "Mavi",
						description: "Traditional bark-based fermented beverage",
						price: 4,
						isVegetarian: true,
						isVegan: true,
						isGlutenFree: true,
					},
				],
			},
		],
	},
];
