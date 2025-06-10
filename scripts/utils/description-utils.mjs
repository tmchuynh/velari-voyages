import { cruiseExperiences } from "scripts/create-city-cruise-files.mjs";

import { cityToRegionMap } from "./geo-utils.mjs";

// Generate more intriguing title
export const cruiseAdjectives = [
  "Breathtaking",
  "Unforgettable",
  "Mesmerizing",
  "Exquisite",
  "Spectacular",
  "Opulent",
  "Enchanting",
  "Captivating",
  "Majestic",
  "Extraordinary",
  "Luxurious",
  "Epic",
  "Hidden",
  "Legendary",
  "Mythic",
  "Golden",
  "Celestial",
  "Whispering",
  "Secret",
  "Forbidden",
  "Timeless",
  "Infinite",
  "Midnight",
  "Radiant",
  "Mystical",
  "Serene",
  "Azure",
  "Starlit",
  "Crystalline",
  "Eternal",
  "Velvet",
  "Immersive",
  "Tranquil",
  "Alluring",
  "Gilded",
  "Pristine",
  "Dreamlike",
  "Refined",
  "Ornate",
  "Luminous",
  "Sublime",
  "Majestic",
  "Lavish",
  "Heavenly",
  "Awe-Inspiring",
  "Secluded",
  "Oceanic",
  "Floating",
  "Whimsical",
  "Radiant",
  "Harmonious",
  "Serendipitous",
  "Whispering",
  "Mystical",
  "Ethereal",
  "Celestial",
  "Glistening",
  "Sun-Kissed",
  "Moonlit",
  "Twilight",
  "Dawn-Embraced",
  "Dusk-Kissed",
  "Star-Studded",
  "Ocean-Bound",
  "Coastal",
  "Harbor-Lit",
  "Seaside",
  "Tide-Kissed",
  "Wave-Crested",
  "Coral-Embraced",
  "Island-Hopping",
  "Lagoon-Exploring",
  "Bay-Drifting",
  "Harbor-Gliding",
  "Coastline-Cruising",
  "Shoreline-Exploring",
  "Seascape-Discovering",
  "Ocean-Embracing",
  "Wave-Whispered",
  "Tide-Whispered",
  "Coral-Kissed",
  "Island-Embraced",
  "Horizon-Kissed",
  "Moonlit",
  "Sun-Drenched",
  "Pearlescent",
  "Charming",
  "Idyllic",
  "Infinite",
  "Verdant",
  "Panoramic",
  "Transcendent",
  "Riveting",
  "Harmonic",
  "Radiance-Drenched",
  "Tide-Washed",
];

export const cityDescriptors = {
  auckland: [
    "City of Sails",
    "Harbor Haven",
    "Ocean-Bound Metropolis",
    "Gateway to New Zealand",
    "Wind-Danced Waterfront",
    "Sapphire Mooring",
  ],
  amsterdam: [
    "Canal Crown",
    "Dutch Jewel",
    "Golden Age Haven",
    "Mist-Wrapped Lattices",
    "Reflections of the Past",
    "Waterborne Enigma",
  ],
  athens: [
    "Cradle of Civilization",
    "Mythic Metropolis",
    "Ruins and Radiance",
    "Olive-Toned Legend",
    "Temple-Held Horizon",
    "Whispers of Olympus",
  ],
  bali: [
    "Island of Gods",
    "Tropical Paradise",
    "Emerald Haven",
    "Mystical Retreat",
    "Sun-Kissed Shores",
    "Cultural Oasis",
  ],
  bangkok: [
    "City of Angels",
    "Venice of the East",
    "Street Food Capital",
    "Golden Temples",
    "Vibrant Metropolis",
    "River of Kings",
  ],
  barcelona: [
    "Catalan Gem",
    "Gaudí’s Playground",
    "Mosaic by the Sea",
    "Whispers of Color",
    "Spires and Spirits",
    "Sun-Kissed Labyrinth",
  ],
  berlin: [
    "Cultural Capital",
    "Wall of Stories",
    "Modern Mosaic",
    "City of Echoes",
    "Stone and Shadow",
    "Time-Threaded Metropolis",
  ],
  bermuda: [
    "Jewel of the Atlantic",
    "Pink Sand Paradise",
    "Island Triangle",
    "Coral Kingdom",
    "Shipwreck Shores",
    "Turquoise Escape",
  ],
  boston: [
    "Revolutionary Port",
    "Colonial Gateway",
    "Harbor of History",
    "Freedom’s Harbor",
    "Lantern-Lit Legacy",
    "Cradle of Resistance",
  ],
  "buenos-aires": [
    "Paris of South America",
    "Tango Capital",
    "Riverfront Elegance",
    "Melancholy Rhythms",
    "Passion by the Plate",
    "Twilight Tango City",
  ],
  "cape-town": [
    "Tabletop Treasure",
    "Cape of Wonders",
    "Cradle of Two Oceans",
    "Mountain-Guarded Mystique",
    "Where Currents Converge",
    "Ocean’s Edge Citadel",
  ],
  cartagena: [
    "Walled City",
    "Caribbean Jewel",
    "Colonial Charm",
    "Emerald Coast",
    "Pirate's Cove",
    "Historic Port",
  ],
  charleston: [
    "Southern Charm",
    "Historic Waterfront",
    "Echoes of Elegance",
    "Porch-Lined Dreams",
    "Magnolia Veins",
    "Maritime Whisper",
  ],
  copenhagen: [
    "Scandinavian Pearl",
    "Harbor of Hygge",
    "Nordic Fairytale Port",
    "Mist & Midsummer",
    "Royal Stillness",
    "Frosted Serenity",
  ],
  dubai: [
    "Golden Metropolis",
    "Oasis of Luxury",
    "City of Mirages",
    "Sand-Crafted Skyline",
    "Desert Dreamcraft",
    "Opulence in Bloom",
  ],
  dublin: [
    "Emerald Gateway",
    "Literary Capital",
    "Ale & Verse Port",
    "Story-Woven Streets",
    "City of Quiet Fire",
    "Twilight in Stone",
  ],
  dubrovnik: [
    "Pearl of the Adriatic",
    "King's Landing",
    "Medieval Fortress",
    "Dalmatian Coast Gem",
    "Sun-Soaked Walls",
    "Adriatic Majesty",
  ],
  florence: [
    "Cradle of the Renaissance",
    "Tuscan Treasure",
    "Canvas of Civilization",
    "Marble & Muse",
    "Sunlit Fresco Realm",
    "Dreams in Terra Cotta",
  ],
  "fort-lauderdale": [
    "Venice of America",
    "Sunlit Seaway",
    "Canal-Threaded Escape",
    "Tropical Constellation",
    "Harbor Mirage",
    "Waters of Leisure",
  ],
  galveston: [
    "Lone Star Port",
    "Gulf Gateway",
    "Windswept Sentinel",
    "Historic Strand Portal",
    "Salt and Steam Legacy",
    "Texan Tidepost",
  ],
  "george-town": [
    "Cayman Capital",
    "Caribbean Crossroads",
    "Island Financial Hub",
    "Turquoise Waters",
    "Seven Mile Gateway",
    "Tropical Charm",
  ],
  "glacier-bay": [
    "Ice Age Wonder",
    "Alaskan Wilderness",
    "Tidewater Glaciers",
    "Frozen Majesty",
    "Wildlife Sanctuary",
    "Pristine Fjordland",
  ],
  helsinki: [
    "Daughter of the Baltic",
    "White City of the North",
    "Design Capital",
    "Archipelago City",
    "Nordic Innovation",
    "Suomi Spirit",
  ],
  "ho-chi-minh-city": [
    "Saigon Soul",
    "Pearl of the Far East",
    "Mekong Delta Gateway",
    "Dynamic Vietnam",
    "Motorbike Metropolis",
    "French Colonial Echoes",
  ],
  "hong-kong": [
    "Pearl of the Orient",
    "Vertical City",
    "Sky-Scrawled Destiny",
    "Lantern-Lit Labyrinth",
    "City of Rising Mist",
    "Mirrored Futurescape",
  ],
  juneau: [
    "Alaskan Capital",
    "Gateway to Glaciers",
    "Mendenhall's Majesty",
    "Gold Rush Heart",
    "Wilderness Port",
    "Tongass Treasure",
  ],
  ketchikan: [
    "Salmon Capital of the World",
    "Totem Pole City",
    "Misty Fjords Gateway",
    "Rainforest Port",
    "Creek Street Charm",
    "First Alaskan City",
  ],
  kiel: [
    "Gateway to the Baltic",
    "German Maritime Hub",
    "Canal Whisper Port",
    "Steel and Salt Artery",
    "Waves of Memory",
    "Frost-Lit Dock",
  ],
  kyoto: [
    "Cultural Heart of Japan",
    "Temple Haven",
    "Zen-Stilled Veil",
    "Shrine of Seasons",
    "Whispers of Bamboo",
    "Timeless Echo",
  ],
  lima: [
    "City of Kings",
    "Gastronomic Capital of the Americas",
    "Pacific Pearl",
    "Colonial Grandeur",
    "Incan Legacy",
    "Coastal Mist City",
  ],
  lisbon: [
    "Hillside Haven",
    "Portuguese Pearl",
    "Tiled Melancholy",
    "City of Seven Fados",
    "Riverside Reverie",
    "Sun-Drenched Verse",
  ],
  london: [
    "Royal Metropolis",
    "Thames Capital",
    "Fog-Laced Legacy",
    "Empire’s Veil",
    "Clocktower Shadow",
    "Midnight Monarchy",
  ],
  "los-angeles": [
    "Golden Coastline",
    "City of Dreams",
    "Cinematic Mirage",
    "Neon & Nostalgia",
    "Palm-Shaded Horizon",
    "Stage of Stars",
  ],
  malta: [
    "Mediterranean Fortress",
    "Knights' Island",
    "Honey-Coloured Stone",
    "Crossroads of History",
    "Azure Waters",
    "Valletta's Grandeur",
  ],
  melbourne: [
    "Cultural Capital of Australia",
    "Laneway Wonderland",
    "Graphite Dreamscape",
    "Jazz of the Streets",
    "Rain-Polished Rhythm",
    "Art on Every Brick",
  ],
  miami: [
    "Magic City",
    "Coastal Pulse",
    "Heatwave Muse",
    "Tropical Firelight",
    "City of Endless Summer",
    "Crystalline Currents",
  ],
  milan: [
    "Fashion Capital",
    "Lombard Jewel",
    "Threaded with Elegance",
    "Marble-Runway Realm",
    "Design in Motion",
    "Chic Fortress",
  ],
  montreal: [
    "French-Canadian Heart",
    "Island Metropolis",
    "Bilingual Canvas",
    "River's Rhythm",
    "Stone-Walled Allure",
    "Snow-Kissed Bohemia",
  ],
  montevideo: [
    "Uruguayan Charm",
    "River Plate Port",
    "Tango's Other Home",
    "Coastal Rambla",
    "Mercado del Puerto",
    "Southern Cone Gem",
  ],
  mykonos: [
    "Island of the Winds",
    "Cycladic Gem",
    "Whitewashed Beauty",
    "Aegean Nightlife",
    "Little Venice",
    "Pelican Paradise",
  ],
  nassau: [
    "Bahamian Capital",
    "Pirate's Paradise",
    "Turquoise Gateway",
    "Colonial Charm",
    "Straw Market Hub",
    "Junkanoo Rhythms",
  ],
  "new-orleans": [
    "Jazz Capital",
    "Crescent City",
    "Bayou Beat",
    "Voodoo Murmurs",
    "Parade of Shadows",
    "Soul-Stirred Streets",
  ],
  "new-york-city": [
    "Empire Gateway",
    "Big Apple",
    "Gotham Pulse",
    "Sky-Bound Collage",
    "City of Never",
    "Steel & Spirit Metropolis",
  ],
  oslo: [
    "Viking Capital",
    "Fjord City",
    "Nobel Peace Home",
    "Scandinavian Design",
    "Green Metropolis",
    "Opera by the Water",
  ],
  paris: [
    "City of Light",
    "Romantic Capital",
    "Midnight Louvre",
    "Velvet Shadows",
    "Cathedral Echoes",
    "Rosé-Washed Dreams",
  ],
  philipsburg: [
    "Dutch Caribbean Capital",
    "Friendly Island Port",
    "Great Bay Beauty",
    "Duty-Free Haven",
    "Sint Maarten Gem",
    "Caribbean Crossroads",
  ],
  "quebec-city": [
    "Walled Wonder",
    "French-Canadian Crown",
    "Time-Frozen Ramparts",
    "Snow-Wrapped Citadel",
    "Frosted Charm",
    "Old World’s Flame",
  ],
  "rio-de-janeiro": [
    "Carnival Capital",
    "Marvelous City",
    "Sun-Sculpted Rhythm",
    "Mountain & Myth",
    "Tide of Passion",
    "Golden Samba Shore",
  ],
  roatan: [
    "Bay Islands Jewel",
    "Caribbean Diving Mecca",
    "West End Wonder",
    "Coral Reef Paradise",
    "Honduran Escape",
    "Tropical Hideaway",
  ],
  rome: [
    "Eternal City",
    "Ancient Empire’s Core",
    "Stone-Written History",
    "Temple of Time",
    "Whispers in Marble",
    "Sunset Over Seven Hills",
  ],
  "san-francisco": [
    "Bay City",
    "Golden Gateway",
    "Fog-Draped Haven",
    "Crimson Bridge Dream",
    "Cable-Laced Wonder",
    "Harbor of Horizons",
  ],
  "san-juan": [
    "Spanish Caribbean Jewel",
    "Colorful Coastline",
    "Fortress of Tides",
    "Painted Port",
    "Colonial Echo",
    "Sun-Worn Stones",
  ],
  santiago: [
    "Andean Capital",
    "Chilean Heart",
    "Gateway to Wine Country",
    "Plaza de Armas",
    "Mountain Views",
    "Latin American Hub",
  ],
  santorini: [
    "Volcanic Beauty",
    "Caldera Views",
    "Blue-Domed Churches",
    "Aegean Sunset",
    "Cycladic Icon",
    "Black Sand Beaches",
  ],
  seattle: [
    "Emerald City",
    "Rain-Crowned Harbor",
    "Sky-Reflected Stillness",
    "Mist and Mountains",
    "Forest by the Sea",
    "Sound of Silence",
  ],
  shanghai: [
    "Pearl of the Orient (Modern)",
    "The Bund",
    "Futuristic Skyline",
    "East Meets West",
    "Paris of the East",
    "Dynamic Metropolis",
  ],
  singapore: [
    "Lion City",
    "Futuristic Haven",
    "Jungle of Light",
    "Glass and Garden",
    "Neon Tropics",
    "Arcology Nexus",
  ],
  sitka: [
    "Russian America's Capital",
    "Island Wilderness",
    "Totem Park",
    "Baranof Island Gem",
    "Alaskan Heritage",
    "Coastal Scenery",
  ],
  skagway: [
    "Gateway to the Klondike",
    "Gold Rush Town",
    "White Pass Railway",
    "Historic District",
    "Alaskan Adventure Port",
    "Trail of '98",
  ],
  southampton: [
    "Maritime Crossroads",
    "Titanic Port",
    "Fog-Bound Gateway",
    "Atlantic Departure Point",
    "Echoes of Steam",
    "Harbor of Legends",
  ],
  "st-petersburg": [
    "Venice of the North (Russia)",
    "Imperial Capital",
    "Winter Palace",
    "Hermitage City",
    "White Nights",
    "Neva River Beauty",
  ],
  "st-thomas": [
    "US Virgin Islands Gem",
    "Charlotte Amalie Charm",
    "Magens Bay Beauty",
    "Duty-Free Shopping",
    "Caribbean Paradise",
    "Island Vistas",
  ],
  stockholm: [
    "Venice of the North",
    "Scandinavian Capital",
    "Frosted Archipelago",
    "Isle-Woven Empire",
    "Nordic Silence",
    "Aurora Harbor",
  ],
  sydney: [
    "Harbor Icon",
    "Sun-Kissed Capital",
    "Opera-Lit Skies",
    "Crescent Bay Beauty",
    "Southern Cross City",
    "Seafront Radiance",
  ],
  tampa: [
    "Bayfront Beauty",
    "Sunshine Gateway",
    "Warm Currents Hub",
    "Palmetto Breeze",
    "Golden Tide Rise",
    "Wharf of Color",
  ],
  tokyo: [
    "Neon Capital",
    "Skyline of the Rising Sun",
    "City of Still Chaos",
    "Shimmering Contradiction",
    "Temple of Lights",
    "Wired Infinity",
  ],
  toronto: [
    "Urban Mosaic",
    "Great Lakes Metropolis",
    "Maple-Lit Majesty",
    "North Star City",
    "Skyline on Ice",
    "Towered Threshold",
  ],
  vancouver: [
    "Pacific Jewel",
    "Mountain-Edge Metropolis",
    "Glass and Fir",
    "Sea-Bound Solace",
    "Harbor of Mist",
    "Forest-Kissed Skyline",
  ],
  venice: [
    "Floating City",
    "Canal Kingdom",
    "Laced in Silence",
    "Lagoon Reverie",
    "Misty Reflections",
    "Gondola Phantom",
  ],
  victoria: [
    "Garden City",
    "British Columbia Capital",
    "Inner Harbour Charm",
    "Butchart Gardens Gateway",
    "Pacific Northwest Gem",
    "Victorian Architecture",
  ],
  yokohama: [
    "Gateway to Japan",
    "Bayside Metropolis",
    "Wind-Touched Wharf",
    "Bridge to Tradition",
    "Harbor of Rebirth",
    "Pearl Wake City",
  ],
};

export const regionDescriptors = {
  "Southern Italy": [
    "Ancient Ruins & Coastal Drives",
    "Sun-Drenched Landscapes & Historic Ports",
    "Volcanic Vistas & Mediterranean Flavors",
  ],
  "Central Italy": [
    "Renaissance Art & Rolling Hills",
    "Eternal Cities & Culinary Traditions",
    "Tuscan Sun & Umbrian Charm",
  ],
  "Northern Italy": [
    "Alpine Peaks & Sparkling Lakes",
    "Fashion Capitals & Industrial Hubs",
    "Venetian Canals & Dolomite Adventures",
  ],
  "Greek Islands": [
    "Azure Waters & Whitewashed Villages",
    "Mythological Landscapes & Sunken Calderas",
    "Ancient History & Island Rhythms",
  ],
  "Mainland Greece": [
    "Cradle of Democracy & Olympian Gods",
    "Archaeological Wonders & Byzantine Monasteries",
    "Mountain Ranges & Olive Groves",
  ],
  "Southern Spain": [
    "Flamenco Rhythms & Moorish Palaces",
    "Andalusian Sunshine & Whitewashed Pueblos",
    "Sherry Bodegas & Tapas Culture",
  ],
  "Western Spain": [
    "Historic Capitals & Royal Palaces",
    "Pilgrimage Routes & Roman Ruins",
    "Green Landscapes & Celtic Traditions",
  ],
  Portugal: [
    "Age of Discoveries & Fado Melodies",
    "Coastal Cliffs & Golden Beaches",
    "Port Wine Cellars & Azulejo Tiles",
  ],
  "French Riviera": [
    "Glamorous Coastlines & Azure Seas",
    "Artistic Heritage & Perfume Capitals",
    "Chic Resorts & Hilltop Villages",
  ],
  "Croatian Coast": [
    "Adriatic Gems & Medieval Fortresses",
    "Island Hopping & Crystal Clear Waters",
    "Dalmatian Culture & Roman Ruins",
  ],
  Croatia: [
    "Historical Cities & National Parks",
    "Adriatic Beauty & Inland Charm",
    "Medieval Architecture & Waterfall Wonders",
  ],
  "Bosnia and Herzegovina": [
    "East Meets West & Ottoman Heritage",
    "Historic Bridges & Mountain Landscapes",
    "Resilient Spirit & Diverse Cultures",
  ],
  Serbia: [
    "Balkan Crossroads & Orthodox Monasteries",
    "Vibrant Nightlife & Historical Cities",
    "Danube River Views & Roman Legacy",
  ],
  Georgia: [
    "Caucasus Mountains & Ancient Wine Culture",
    "Cave Monasteries & Silk Road History",
    "Warm Hospitality & Unique Alphabet",
  ],
  Catalonia: [
    "Modernist Architecture & Mediterranean Beaches",
    "Independent Spirit & Pyrenees Peaks",
    "Artistic Hubs & Culinary Delights",
  ],
  France: [
    "Eiffel Tower & Louvre Masterpieces",
    "Gourmet Cuisine & Vineyard Valleys",
    "Romantic Cities & Alpine Adventures",
  ],
  Netherlands: [
    "Windmills & Tulip Fields",
    "Canal Cities & Golden Age Art",
    "Innovative Design & Cycling Culture",
  ],
  England: [
    "Royal History & Iconic Landmarks",
    "Rolling Countryside & Bustling Cities",
    "Literary Heritage & Pub Culture",
  ],
  Scotland: [
    "Highland Lochs & Tartan Kilts",
    "Historic Castles & Whisky Distilleries",
    "Edinburgh Festivals & Isle Adventures",
  ],
  Ireland: [
    "Emerald Isle & Celtic Legends",
    "Guinness Pints & Traditional Music",
    "Coastal Cliffs & Friendly Pubs",
  ],
  Denmark: [
    "Viking History & Fairytale Castles",
    "Hygge Lifestyle & Design Innovation",
    "Cycling Routes & Coastal Towns",
  ],
  Sweden: [
    "Archipelago Islands & Northern Lights",
    "ABBA Museum & Nobel Prizes",
    "Sleek Design & Fika Culture",
  ],
  Norway: [
    "Fjord Landscapes & Viking Heritage",
    "Midnight Sun & Scenic Railways",
    "Outdoor Adventures & Coastal Villages",
  ],
  Finland: [
    "Land of a Thousand Lakes & Santa Claus Village",
    "Sauna Culture & Northern Lights",
    "Design District & National Parks",
  ],
  Iceland: [
    "Volcanoes & Glaciers",
    "Geothermal Spas & Northern Lights",
    "Unique Landscapes & Viking Sagas",
  ],
  Latvia: [
    "Art Nouveau Architecture & Baltic Beaches",
    "Medieval Towns & Forest Trails",
    "Amber Coast & Song and Dance Festivals",
  ],
  Austria: [
    "Alpine Scenery & Imperial Palaces",
    "Classical Music & Coffee House Culture",
    "Ski Resorts & Historic Cities",
  ],
  "Czech Republic": [
    "Fairytale Castles & Medieval Towns",
    "Prague's Astronomical Clock & Bohemian Crystal",
    "Beer Culture & Spa Towns",
  ],
  Germany: [
    "Oktoberfest & Bavarian Alps",
    "Historic Cities & Rhine River Cruises",
    "Engineering Marvels & Christmas Markets",
  ],
  Hungary: [
    "Thermal Baths & Danube River Views",
    "Goulash & Paprika",
    "Budapest's Ruin Bars & Lake Balaton",
  ],
  Russia: [
    "Red Square & Bolshoi Ballet",
    "Trans-Siberian Railway & Imperial Palaces",
    "Matryoshka Dolls & Winter Landscapes",
  ],
  Japan: [
    "Cherry Blossoms & Bullet Trains",
    "Ancient Temples & Modern Skyscrapers",
    "Sushi & Sumo Wrestling",
  ],
  Thailand: [
    "Golden Temples & Bustling Markets",
    "Tropical Beaches & Spicy Cuisine",
    "Floating Markets & Elephant Sanctuaries",
  ],
  Vietnam: [
    "Ha Long Bay & Mekong Delta",
    "Pho Noodles & French Colonial Architecture",
    "Motorbike Adventures & War History",
  ],
  Cambodia: [
    "Angkor Wat & Ancient Temples",
    "Khmer Culture & Floating Villages",
    "Resilient People & Rich History",
  ],
  Singapore: [
    "Gardens by the Bay & Marina Bay Sands",
    "Multicultural Cuisine & Hawker Centers",
    "Futuristic Architecture & Shopping Malls",
  ],
  Indonesia: [
    "Volcanic Islands & Tropical Rainforests",
    "Diverse Cultures & Ancient Temples",
    "Komodo Dragons & Balinese Beaches",
  ],
  Vanuatu: [
    "Active Volcanoes & Pristine Beaches",
    "Unique Cultures & Blue Holes",
    "Shipwrecks & Island Adventures",
  ],
  India: [
    "Taj Mahal & Ganges River",
    "Bollywood & Spicy Curries",
    "Diverse Religions & Colorful Festivals",
  ],
  Nepal: [
    "Himalayan Peaks & Sherpa Culture",
    "Ancient Temples & Trekking Adventures",
    "Mount Everest & Kathmandu Valley",
  ],
  China: [
    "Great Wall & Forbidden City",
    "Terracotta Warriors & Giant Pandas",
    "Diverse Landscapes & Ancient Dynasties",
  ],
  "South Korea": [
    "K-Pop & Kimchi",
    "Historic Palaces & Modern Cities",
    "DMZ & Buddhist Temples",
  ],
  Taiwan: [
    "Taipei 101 & Night Markets",
    "Bubble Tea & Hot Springs",
    "Mountain Scenery & Coastal Drives",
  ],
  Australia: [
    "Great Barrier Reef & Sydney Opera House",
    "Outback Adventures & Unique Wildlife",
    "Surfing Beaches & Aboriginal Culture",
  ],
  "New Zealand": [
    "Lord of the Rings Landscapes & Maori Culture",
    "Adventure Sports & Geothermal Wonders",
    "Kiwi Birds & Stunning Fjords",
  ],
  "French Polynesia": [
    "Overwater Bungalows & Turquoise Lagoons",
    "Black Pearl Farms & Volcanic Peaks",
    "Tahitian Dance & Island Hospitality",
  ],
  Fiji: [
    "Coral Reefs & Soft Coral Diving",
    "Friendly Locals & Kava Ceremonies",
    "Tropical Islands & White Sand Beaches",
  ],
  California: [
    "Golden Gate Bridge & Hollywood Stars",
    "National Parks & Pacific Coast Highway",
    "Wine Country & Tech Innovation",
  ],
  Oregon: [
    "Crater Lake & Columbia River Gorge",
    "Craft Breweries & Foodie Scene",
    "Forest Trails & Coastal Dunes",
  ],
  Washington: [
    "Space Needle & Mount Rainier",
    "Coffee Culture & Tech Giants",
    "Puget Sound & Olympic National Park",
  ],
  Massachusetts: [
    "Freedom Trail & Cape Cod Beaches",
    "Ivy League Universities & Colonial History",
    "Lobster Rolls & Fall Foliage",
  ],
  "New York": [
    "Statue of Liberty & Times Square",
    "Broadway Shows & World-Class Museums",
    "Diverse Neighborhoods & Niagara Falls",
  ],
  "District of Columbia": [
    "White House & National Mall",
    "Smithsonian Museums & Historic Monuments",
    "Political Hub & Cherry Blossoms",
  ],
  "South Carolina": [
    "Historic Charleston & Myrtle Beach",
    "Southern Charm & Lowcountry Cuisine",
    "Plantation Homes & Golf Courses",
  ],
  Georgia: [
    "Antebellum Architecture & Peach Orchards",
    "Civil Rights History & Southern Hospitality",
    "Atlanta's Skyline & Savannah's Squares",
  ],
  Texas: [
    "Alamo & Big Bend National Park",
    "BBQ & Tex-Mex Cuisine",
    "Rodeos & Space Exploration",
  ],
  Nevada: [
    "Las Vegas Strip & Hoover Dam",
    "Desert Landscapes & Red Rock Canyon",
    "Area 51 & Extraterrestrial Highway",
  ],
  Illinois: [
    "Chicago Skyline & Route 66",
    "Deep Dish Pizza & Blues Music",
    "Abraham Lincoln History & Lake Michigan",
  ],
  Quebec: [
    "Old Montreal & Chateau Frontenac",
    "French-Canadian Culture & Maple Syrup",
    "Winter Carnivals & European Charm",
  ],
  Ontario: [
    "Niagara Falls & CN Tower",
    "Great Lakes & Parliament Hill",
    "Multicultural Cities & Cottage Country",
  ],
  "British Columbia": [
    "Rocky Mountains & Pacific Coast",
    "Whistler Ski Resort & Stanley Park",
    "Indigenous Culture & Rainforests",
  ],
  Alaska: [
    "Denali National Park & Northern Lights",
    "Glacier Cruises & Wildlife Viewing",
    "Iditarod Trail & Gold Rush History",
  ],
  Oahu: [
    "Waikiki Beach & Pearl Harbor",
    "North Shore Surfing & Diamond Head",
    "Polynesian Culture & Luau Feasts",
  ],
  Maui: [
    "Road to Hana & Haleakala National Park",
    "Whale Watching & Snorkeling",
    "Lavender Farms & Upcountry Charm",
  ],
  Florida: [
    "Walt Disney World & Everglades National Park",
    "Miami Beaches & Kennedy Space Center",
    "Art Deco Architecture & Key West Sunsets",
  ],
  Louisiana: [
    "New Orleans Jazz & French Quarter",
    "Bayou Swamps & Cajun Cuisine",
    "Mardi Gras & Plantation Homes",
  ],
  "Puerto Rico": [
    "Old San Juan & El Yunque Rainforest",
    "Bioluminescent Bays & Salsa Dancing",
    "Spanish Colonial Architecture & Caribbean Beaches",
  ],
  Bermuda: [
    "Pink Sand Beaches & Crystal Caves",
    "British Colonial History & Golf Courses",
    "Shipwreck Diving & Rum Swizzle",
  ],
  Bahamas: [
    "Nassau's Straw Market & Paradise Island",
    "Swimming Pigs & Turquoise Waters",
    "Junkanoo Festival & Pirate History",
  ],
  "US Virgin Islands": [
    "Trunk Bay & Magens Bay",
    "Duty-Free Shopping & Sailing",
    "Caribbean Culture & Historic Forts",
  ],
  Mexico: [
    "Ancient Mayan Ruins & Tequila Tastings",
    "Colorful Fiestas & Mariachi Music",
    "Pacific Coast Beaches & Colonial Cities",
  ],
  "Cayman Islands": [
    "Seven Mile Beach & Stingray City",
    "Scuba Diving & Offshore Banking",
    "Turtle Farms & Caribbean Cuisine",
  ],
  Honduras: [
    "Mayan Ruins of Copan & Roatan's Reefs",
    "Cloud Forests & Garifuna Culture",
    "Coffee Plantations & Caribbean Beaches",
  ],
  "Sint Maarten": [
    "Maho Beach (Airplane Spotting) & Duty-Free Shopping",
    "Dutch & French Cultures",
    "Caribbean Beaches & Island Hopping",
  ],
  Colombia: [
    "Cartagena's Walled City & Coffee Plantations",
    "Amazon Rainforest & Andean Peaks",
    "Salsa Dancing & Emerald Mines",
  ],
  Jamaica: [
    "Reggae Music & Dunn's River Falls",
    "Blue Mountains Coffee & Jerk Cuisine",
    "Bob Marley Museum & White Sand Beaches",
  ],
  "Dominican Republic": [
    "Punta Cana Beaches & Colonial Santo Domingo",
    "Merengue Music & Baseball",
    "Whale Watching & Amber Mines",
  ],
  Panama: [
    "Panama Canal & Casco Viejo",
    "Rainforest Adventures & Indigenous Cultures",
    "San Blas Islands & Coffee Plantations",
  ],
  Peru: [
    "Machu Picchu & Sacred Valley",
    "Amazon Rainforest & Nazca Lines",
    "Ceviche & Pisco Sours",
  ],
  Ecuador: [
    "Galapagos Islands & Andean Highlands",
    "Quito's Colonial Center & Amazon Rainforest",
    "Indigenous Markets & Avenue of the Volcanoes",
  ],
  Chile: [
    "Patagonia & Atacama Desert",
    "Easter Island & Wine Valleys",
    "Andean Peaks & Valparaiso's Street Art",
  ],
  Argentina: [
    "Tango & Patagonia Glaciers",
    "Iguazu Falls & Mendoza Wine Region",
    "Buenos Aires' European Charm & Gaucho Culture",
  ],
  Brazil: [
    "Amazon Rainforest & Rio's Carnival",
    "Iguazu Falls & Christ the Redeemer",
    "Samba Music & Copacabana Beach",
  ],
  Egypt: [
    "Pyramids of Giza & Nile River Cruises",
    "Luxor's Temples & Valley of the Kings",
    "Ancient Hieroglyphs & Red Sea Diving",
  ],
  Morocco: [
    "Marrakech Souks & Sahara Desert Treks",
    "Atlas Mountains & Chefchaouen's Blue City",
    "Tagine Cuisine & Berber Culture",
  ],
  Uganda: [
    "Gorilla Trekking & Murchison Falls",
    "Source of the Nile & Queen Elizabeth National Park",
    "Diverse Wildlife & Friendly Locals",
  ],
  Tanzania: [
    "Serengeti Safari & Mount Kilimanjaro",
    "Zanzibar Beaches & Ngorongoro Crater",
    "Maasai Culture & Great Migration",
  ],
  Kenya: [
    "Maasai Mara Safari & Great Rift Valley",
    "Mount Kenya & Amboseli National Park",
    "Swahili Culture & Coastal Beaches",
  ],
  "South Africa": [
    "Kruger National Park & Table Mountain",
    "Cape Winelands & Garden Route",
    "Apartheid History & Diverse Cultures",
  ],
  "United Arab Emirates": [
    "Burj Khalifa & Desert Safaris",
    "Luxury Shopping & Modern Architecture",
    "Palm Jumeirah & Cultural Heritage",
  ],
  Jordan: [
    "Petra's Ancient City & Wadi Rum Desert",
    "Dead Sea Floating & Roman Ruins",
    "Bedouin Culture & Biblical Sites",
  ],
};

export const positiveAdjectives = [
  "incredible",
  "exceptional",
  "remarkable",
  "heavenly",
  "luminous",
  "vivid",
  "glimmering",
  "divergent",
  "artful",
  "refined",
  "sublime",
  "immaculate",
  "exquisite",
  "opulent",
  "lavish",
  "sumptuous",
  "elegant",
  "majestic",
  "regal",
  "prestigious",
  "glorious",
  "sublime",
  "sophisticated",
  "refined",
  "magnificent",
  "exclusive",
  "premium",
  "divine",
  "heavenly",
  "immaculate",
  "grand",
  "stately",
  "elite",
  "gilded",
  "ornate",
  "radiant",
  "resplendent",
  "glittering",
  "deluxe",
  "pristine",
  "golden",
  "first-class",
  "distinguished",
  "polished",
  "luminous",
  "enchanted",
  "impeccable",
  "flawless",
  "world-class",
  "sophisticated",
  "divine",
  "enchanting",
  "captivating",
  "unforgettable",
  "serene",
  "blissful",
  "celestial",
  "idyllic",
  "charming",
  "engaging",
  "ethereal",
  "whimsical",
  "golden",
  "prestigious",
  "timeless",
  "pristine",
  "venerable",
  "radiating",
  "heartwarming",
  "euphoric",
  "luxurious",
  "transcendent",
  "exquisite",
  "marvelous",
  "exquisite",
  "divine",
  "heavenly",
];

export const atmosphereAdjectives = [
  "cozy",
  "elegant",
  "charming",
  "vibrant",
  "relaxing",
  "inviting",
  "lively",
  "stylish",
  "sophisticated",
  "warm",
  "welcoming",
  "intimate",
  "stylish",
  "comfortable",
  "pleasant",
  "appealing",
  "delightful",
  "ambient",
  "serene",
  "peaceful",
  "chic",
  "sophisticated",
  "casual",
  "upscale",
  "luxurious",
  "rustic",
  "chic",
  "elegant",
  "modern",
  "traditional",
  "artistic",
  "bohemian",
  "whimsical",
  "charming",
  "inviting",
  "relaxed",
  "intimate",
  "bustling",
  "energetic",
  "vibrant",
  "tranquil",
  "romantic",
  "modern",
  "classic",
  "refined",
  "airy",
  "spacious",
  "rustic",
  "lively",
];

export const serviceAdjectives = [
  "attentive",
  "friendly",
  "professional",
  "excellent",
  "prompt",
  "efficient",
  "polite",
  "courteous",
  "helpful",
  "kind",
  "thoughtful",
  "accommodating",
  "responsive",
  "welcoming",
  "exceptional",
  "superb",
  "remarkable",
  "outstanding",
  "impressive",
  "dedicated",
  "knowledgeable",
  "skilled",
  "charming",
  "gracious",
  "respectful",
  "warm",
  "inviting",
  "friendly",
  "supportive",
  "engaging",
  "enthusiastic",
  "approachable",
  "efficient",
  "reliable",
  "trustworthy",
  "dependable",
  "punctual",
  "diligent",
  "meticulous",
  "thorough",
  "exemplary",
  "stellar",
  "top-notch",
  "first-rate",
  "superior",
  "impeccable",
  "outstanding",
  "fantastic",
  "courteous",
  "helpful",
  "prompt",
  "knowledgeable",
  "exceptional",
  "wonderful",
  "superb",
  "efficient",
  "gracious",
  "respectful",
  "welcoming",
  "dedicated",
  "considerate",
  "timely",
  "pleasant",
  "personalized",
  "thoughtful",
];

export const cityDescriptions = {
  auckland: {
    landmarks: [
      "Auckland Harbour Bridge",
      "Sky Tower",
      "Waitemata Harbour",
      "Rangitoto Island",
      "Auckland Domain",
      "Mount Eden",
      "Viaduct Harbour",
      "Waiheke Island",
    ],
    features: [
      "harbor views",
      "Pacific-inspired decor",
      "Kiwi hospitality",
      "locally-sourced seafood",
      "Maori cultural influences",
      "outdoor dining",
      "lush native greenery",
      "laid-back coastal vibe",
    ],
    specialties: [
      "green-lipped mussels",
      "lamb dishes",
      "pavlova",
      "hangi",
      "manuka honey",
      "whitebait fritters",
      "Kina (sea urchin)",
      "seafood chowder",
    ],
  },
  amsterdam: {
    landmarks: [
      "the canals",
      "Vondelpark",
      "Jordaan district",
      "Dam Square",
      "Anne Frank House",
      "Rijksmuseum",
      "Royal Palace",
      "Amsterdam Central Station",
    ],
    features: [
      "canal-side dining",
      "17th century building",
      "cozy brown café atmosphere",
      "Dutch design elements",
      "bike-friendly streets",
      "artisanal markets",
      "historic courtyards",
      "colorful tulip displays",
    ],
    specialties: [
      "stroopwafels",
      "bitterballen",
      "Dutch pancakes",
      "herring",
      "Gouda cheese",
      "poffertjes",
      "licorice",
      "kibbeling (fried fish)",
    ],
  },
  barcelona: {
    landmarks: [
      "La Rambla",
      "Sagrada Familia",
      "Gothic Quarter",
      "Barceloneta Beach",
      "Park Güell",
      "Casa Batlló",
      "Montjuïc",
      "Magic Fountain",
    ],
    features: [
      "Gaudi-inspired decor",
      "Catalonian charm",
      "mosaic details",
      "Mediterranean terrace",
      "vibrant street art",
      "seaside promenades",
      "historic plazas",
      "open-air markets",
    ],
    specialties: [
      "paella",
      "tapas",
      "jamón ibérico",
      "pan con tomate",
      "crema catalana",
      "escalivada",
      "bombas",
      "cava",
    ],
  },
  berlin: {
    landmarks: [
      "Brandenburg Gate",
      "Museum Island",
      "Tiergarten",
      "East Side Gallery",
      "Berlin Wall Memorial",
      "Checkpoint Charlie",
      "Reichstag Building",
      "Alexanderplatz",
    ],
    features: [
      "industrial chic decor",
      "beer garden",
      "historic building",
      "avant-garde atmosphere",
      "street art culture",
      "modernist architecture",
      "techno club scene",
      "green parks",
    ],
    specialties: [
      "currywurst",
      "döner kebab",
      "schnitzel",
      "pretzels",
      "German beer",
      "Kartoffelsalat",
      "Berliner Pfannkuchen",
      "Eisbein",
    ],
  },
  boston: {
    landmarks: [
      "Faneuil Hall",
      "Boston Harbor",
      "Beacon Hill",
      "Fenway Park",
      "Boston Common",
      "Freedom Trail",
      "New England Aquarium",
      "Harvard University",
    ],
    features: [
      "historic setting",
      "New England charm",
      "waterfront views",
      "colonial architecture",
      "brick-lined streets",
      "seafood shacks",
      "old-world pubs",
      "academic ambiance",
    ],
    specialties: [
      "clam chowder",
      "lobster rolls",
      "Boston cream pie",
      "oysters",
      "baked beans",
      "scrod",
      "stuffed quahogs",
      "cranberry desserts",
    ],
  },
  "buenos-aires": {
    landmarks: [
      "La Boca",
      "Recoleta",
      "Plaza de Mayo",
      "Puerto Madero",
      "Teatro Colón",
      "Palermo Soho",
      "San Telmo Market",
      "Caminito Street",
    ],
    features: [
      "tango shows",
      "parilla-style grill",
      "European elegance",
      "vibrant atmosphere",
      "historic cafés",
      "art nouveau architecture",
      "street murals",
      "nightlife hotspots",
    ],
    specialties: [
      "asado",
      "empanadas",
      "dulce de leche",
      "Malbec wine",
      "mate",
      "choripán",
      "medialunas",
      "provoleta",
    ],
  },
  "cape-town": {
    landmarks: [
      "Table Mountain",
      "V&A Waterfront",
      "Robben Island",
      "Cape Peninsula",
      "Kirstenbosch Botanical Gardens",
      "Bo-Kaap",
      "Signal Hill",
      "Cape Winelands",
    ],
    features: [
      "panoramic mountain views",
      "African-inspired decor",
      "vineyard setting",
      "ocean views",
      "multicultural influences",
      "beachfront cafes",
      "artisan markets",
      "historic slave lodge",
    ],
    specialties: [
      "bobotie",
      "biltong",
      "Cape Malay curry",
      "Pinotage wine",
      "fresh seafood",
      "snoek fish",
      "malva pudding",
      "roosterkoek",
    ],
  },
  charleston: {
    landmarks: [
      "Rainbow Row",
      "Charleston Harbor",
      "The Battery",
      "French Quarter",
      "Fort Sumter",
      "Magnolia Plantation",
      "King Street",
      "Angel Oak Tree",
    ],
    features: [
      "Southern hospitality",
      "antebellum architecture",
      "courtyard dining",
      "plantation charm",
      "historic cobblestone streets",
      "oak-lined avenues",
      "waterfront promenades",
      "garden tours",
    ],
    specialties: [
      "shrimp and grits",
      "she-crab soup",
      "oysters",
      "biscuits",
      "sweet tea",
      "frogmore stew",
      "pecan pie",
      "Lowcountry boil",
    ],
  },
  copenhagen: {
    landmarks: [
      "Nyhavn",
      "Tivoli Gardens",
      "The Little Mermaid",
      "Christiansborg Palace",
      "Rosenborg Castle",
      "Frederiksborg Castle",
      "Amalienborg Palace",
      "Strøget",
    ],
    features: [
      "hygge atmosphere",
      "Nordic design",
      "waterfront dining",
      "minimalist elegance",
      "eco-friendly spaces",
      "bicycle culture",
      "artisan bakeries",
      "seasonal menus",
    ],
    specialties: [
      "smørrebrød",
      "Danish pastries",
      "herring",
      "frikadeller",
      "new Nordic cuisine",
      "rødgrød med fløde",
      "Æbleskiver",
      "flæskesteg",
    ],
  },
  dubai: {
    landmarks: [
      "Burj Khalifa",
      "Palm Jumeirah",
      "Dubai Marina",
      "Dubai Mall",
      "Burj Al Arab",
      "Dubai Creek",
      "Dubai Frame",
      "Al Fahidi Historic District",
    ],
    features: [
      "luxurious setting",
      "skyline views",
      "opulent decor",
      "air-conditioned terraces",
      "desert backdrop",
      "high-end shopping",
      "fusion cuisines",
      "modern architecture",
    ],
    specialties: [
      "mezze",
      "shawarma",
      "lamb ouzi",
      "date desserts",
      "camel milk specialties",
      "falafel",
      "kebabs",
      "saffron rice",
    ],
  },
  dublin: {
    landmarks: [
      "Temple Bar",
      "Trinity College",
      "Dublin Castle",
      "St. Stephen's Green",
      "Guinness Storehouse",
      "Phoenix Park",
      "Christ Church Cathedral",
      "Ha'penny Bridge",
    ],
    features: [
      "traditional Irish pub atmosphere",
      "live music",
      "historic stone walls",
      "cozy fireplaces",
      "literary heritage",
      "cobblestone alleys",
      "pub quizzes",
      "green parks",
    ],
    specialties: [
      "Irish stew",
      "boxty",
      "colcannon",
      "soda bread",
      "Guinness",
      "black pudding",
      "seafood chowder",
      "coddle",
    ],
  },
  "hong-kong": {
    landmarks: [
      "Victoria Harbour",
      "The Peak",
      "Lan Kwai Fong",
      "Kowloon",
      "Tian Tan Buddha",
      "Ngong Ping 360",
      "Star Ferry",
      "Temple Street Night Market",
    ],
    features: [
      "harbor views",
      "rooftop dining",
      "dim sum carts",
      "fusion of East and West",
      "neon-lit streets",
      "bustling markets",
      "skyscraper skyline",
      "urban parks",
    ],
    specialties: [
      "dim sum",
      "roast goose",
      "wonton noodles",
      "pineapple buns",
      "milk tea",
      "egg tarts",
      "congee",
      "snake soup",
    ],
  },
  florence: {
    landmarks: [
      "Duomo",
      "Ponte Vecchio",
      "Uffizi Gallery",
      "Piazza della Signoria",
      "Boboli Gardens",
      "Santa Croce",
      "Palazzo Pitti",
      "Michelangelo's David",
    ],
    features: [
      "Renaissance architecture",
      "terrace dining",
      "Tuscan countryside views",
      "historic palazzo setting",
      "artisan workshops",
      "cobblestone streets",
      "river views",
      "open-air markets",
    ],
    specialties: [
      "bistecca alla fiorentina",
      "ribollita",
      "pappardelle with wild boar",
      "Chianti wine",
      "cantucci",
      "truffle dishes",
      "lampredotto",
      "crostini",
    ],
  },
  "fort-lauderdale": {
    landmarks: [
      "Las Olas Boulevard",
      "Fort Lauderdale Beach",
      "Intracoastal Waterway",
      "Riverwalk",
      "Bonnet House Museum",
      "NSU Art Museum",
      "Hollywood Beach",
      "Everglades National Park",
    ],
    features: [
      "waterfront dining",
      "yacht views",
      "tropical ambiance",
      "outdoor patios",
      "boating culture",
      "vibrant nightlife",
      "palm-lined streets",
      "art deco elements",
    ],
    specialties: [
      "fresh seafood",
      "stone crab",
      "key lime pie",
      "tropical cocktails",
      "fusion cuisine",
      "conch fritters",
      "grouper sandwiches",
      "caribbean jerk",
    ],
  },
  galveston: {
    landmarks: [
      "Historic Pleasure Pier",
      "Galveston Seawall",
      "Moody Gardens",
      "Bishop's Palace",
      "The Strand Historic District",
      "Galveston Island State Park",
      "Schlitterbahn Waterpark",
      "Ocean Star Offshore Drilling Rig Museum",
    ],
    features: [
      "beach town vibe",
      "Victorian architecture",
      "boardwalk dining",
      "sea breeze",
      "family-friendly",
      "fishing piers",
      "maritime heritage",
      "colorful cottages",
    ],
    specialties: [
      "Gulf shrimp",
      "blackened fish",
      "shrimp gumbo",
      "pecan pie",
      "fried oysters",
      "red snapper",
      "cajun spices",
      "peach cobbler",
    ],
  },
  honolulu: {
    landmarks: [
      "Waikiki Beach",
      "Diamond Head",
      "Pearl Harbor",
      "Iolani Palace",
      "Hanauma Bay",
      "Punchbowl Crater",
      "Kahala",
      "Ala Moana Center",
    ],
    features: [
      "tropical gardens",
      "oceanfront views",
      "Polynesian decor",
      "surf culture",
      "luau events",
      "volcanic landscapes",
      "beachside cafes",
      "rainforest backdrop",
    ],
    specialties: [
      "poke",
      "kalua pork",
      "haupia",
      "shave ice",
      "spam musubi",
      "loco moco",
      "malasadas",
      "fresh coconut",
    ],
  },
};

export const defaultCityDesc = {
  landmarks: [
    "downtown",
    "the waterfront",
    "the historic district",
    "the main square",
    "central park",
    "the city museum",
    "the old town walls",
    "the cultural center",
    "the river promenade",
    "the iconic clock tower",
  ],
  features: [
    "elegant atmosphere",
    "beautiful decor",
    "friendly service",
    "local ambiance",
    "charming streetscapes",
    "seasonal floral displays",
    "artisan markets",
    "live street performances",
    "ambient lighting",
    "boutique shops",
  ],
  specialties: [
    "signature dishes",
    "local ingredients",
    "fresh produce",
    "artisanal creations",
    "handcrafted desserts",
    "regional wines",
    "farm-to-table meals",
    "seasonal specialties",
    "heritage recipes",
    "gourmet street food",
  ],
};

export const fineDiningMenuAdjectives = [
  "exquisite",
  "sophisticated",
  "artfully prepared",
  "gourmet",
  "luxurious",
  "refined",
  "sumptuous",
  "elegant",
  "masterfully crafted",
  "culinary masterpiece",
  "delectable",
  "sublime",
  "artisanal",
  "innovative",
  "creative",
  "meticulously crafted",
  "refined",
  "elegant",
];

export const adultOnlyRestaurantAdjectives = [
  "premium",
  "bold",
  "signature",
  "distinctive",
  "luxurious",
  "sophisticated",
  "indulgent",
  "rich",
  "decadent",
  "tempting",
  "irresistible",
  "sumptuous",
  "elegant",
  "refined",
  "exclusive",
  "special",
  "unique",
  "specialty",
  "artisan",
  "exceptional",
  "hearty",
  "classic",
];

export const familyFriendlyRestaurantAdjectives = [
  "delightful",
  "wholesome",
  "comforting",
  "kid-approved",
  "nourishing",
  "heartwarming",
  "home-cooked",
  "traditional",
  "filling",
  "satisfying",
  "crowd-pleasing",
  "flavorful",
];

export const casualDiningRestaurantAdjectives = [
  "tasty",
  "hearty",
  "fresh",
  "delicious",
  "satisfying",
  "simple",
  "comforting",
  "homestyle",
  "flavorful",
  "authentic",
  "classic",
];

const adjective =
  cruiseAdjectives[Math.floor(Math.random() * cruiseAdjectives.length)];
const experience =
  cruiseExperiences[Math.floor(Math.random() * cruiseExperiences.length)];
const regionType = cityToRegionMap[cityName] || capitalizeWords(cityName);

export const cityCruiseDescriptors = [
  `Embark on an unforgettable ${experience.toLowerCase()} from the vibrant port of ${cityDisplayName}, where you'll discover hidden gems and iconic landmarks across the ${regionType} region. With stops at ${destinations.join(
    ", "
  )}, this journey combines cultural immersion with breathtaking scenery.`,

  `Set sail from ${cityDisplayName} on this ${adjective.toLowerCase()} ${experience.toLowerCase()} through the heart of ${regionType}. Experience the perfect blend of relaxation and adventure as you explore ${destinations.join(
    " and "
  )}, with personalized service and unforgettable experiences awaiting at every port.`,

  `Discover the wonders of ${regionType} aboard this ${adjective.toLowerCase()} cruise departing from ${cityDisplayName}. Journey through crystal waters to explore the treasures of ${destinations.join(
    ", "
  )}, where each day brings new adventures and evenings are filled with elegant dining and entertainment.`,

  `This extraordinary ${experience.toLowerCase()} from ${cityDisplayName} offers the ultimate ${regionType} exploration. Immerse yourself in the rich cultures and stunning landscapes of ${destinations
    .slice(0, -1)
    .join(", ")} and ${destinations.slice(
    -1
  )}, creating memories that will last a lifetime.`,

  `Begin your ${experience.toLowerCase()} in ${cityDisplayName}, a gateway to the soul of ${regionType}. Enjoy days spent exploring ${destinations.join(
    ", "
  )} and evenings immersed in onboard luxury, fine dining, and panoramic sea views.`,

  `Sail away from the charming harbor of ${cityDisplayName} on this ${adjective.toLowerCase()} journey across ${regionType}. Uncover the beauty and history of ${destinations.join(
    ", "
  )} with curated excursions, world-class cuisine, and exceptional service.`,

  `Your ${experience.toLowerCase()} begins in ${cityDisplayName}, where the spirit of exploration meets modern luxury. From the sun-drenched shores of ${
    destinations[0]
  } to the historic streets of ${
    destinations[1]
  }, each stop in the ${regionType} will leave a lasting impression.`,

  `Experience the elegance of the seas on this ${adjective.toLowerCase()} ${experience.toLowerCase()} through ${regionType}, starting from the illustrious port of ${cityDisplayName}. From ${destinations
    .slice(0, -1)
    .join(", ")} to ${destinations.slice(
    -1
  )}, each destination offers its own story, culture, and breathtaking views.`,

  `From the lively departure port of ${cityDisplayName}, this curated ${experience.toLowerCase()} showcases the finest of ${regionType}. With visits to ${destinations.join(
    ", "
  )}, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.`,

  `Set course from ${cityDisplayName} for an inspiring ${adjective.toLowerCase()} journey across ${regionType}. Whether exploring ancient ruins in ${
    destinations[0]
  } or soaking up coastal views in ${
    destinations[1]
  }, every day offers a perfect mix of discovery and relaxation.`,

  `Launch into adventure from ${cityDisplayName} and sail deep into the heart of the ${regionType}. With ports of call like ${destinations.join(
    ", "
  )}, expect a voyage filled with scenic wonders and luxurious comforts.`,

  `This ${adjective.toLowerCase()} cruise from ${cityDisplayName} is your ticket to the captivating charm of the ${regionType}. Discover the delights of ${destinations.join(
    ", "
  )} with enriching excursions and award-winning service.`,

  `Begin an epic ${experience.toLowerCase()} from ${cityDisplayName}, where the seas meet culture. Visit the remarkable ports of ${destinations.join(
    ", "
  )} while indulging in fine dining, entertainment, and unmatched hospitality.`,

  `Sail into splendor from ${cityDisplayName} on a ${adjective.toLowerCase()} voyage through ${regionType}. Let each stop—from ${
    destinations[0]
  } to ${destinations[1]}—reveal the unique flavors and colors of the region.`,

  `Depart from ${cityDisplayName} on this thoughtfully designed ${experience.toLowerCase()} across the ${regionType}. Savor coastal charm, cultural treasures, and ocean views with stops at ${destinations.join(
    ", "
  )}.`,

  `Escape into the calm waters of ${regionType} with this ${adjective.toLowerCase()} journey from ${cityDisplayName}. Explore vibrant markets, sun-soaked beaches, and architectural marvels at ${destinations.join(
    ", "
  )}.`,

  `This handpicked ${experience.toLowerCase()} begins in ${cityDisplayName} and travels through ${regionType}'s iconic waterscapes. Discover ${destinations.join(
    ", "
  )} as each day brings new stories and every night offers elegant repose.`,

  `Set sail from ${cityDisplayName} for a voyage like no other. From the picturesque landscapes of ${
    destinations[0]
  } to the lively ambiance of ${
    destinations[1]
  }, this ${adjective.toLowerCase()} cruise will redefine your view of ${regionType}.`,

  `Cruise into cultural richness aboard this ${adjective.toLowerCase()} ${experience.toLowerCase()} departing ${cityDisplayName}. Savor local cuisine and uncover regional beauty from ${
    destinations[0]
  } to ${destinations[1]}.`,

  `Depart ${cityDisplayName} on a relaxing ${experience.toLowerCase()} through the ${regionType} region. Highlights include the stunning coastlines of ${destinations.join(
    ", "
  )}, all while enjoying first-class amenities on board.`,

  `This ${experience.toLowerCase()} takes you beyond the ordinary, starting in ${cityDisplayName}. With breathtaking stops in ${destinations.join(
    ", "
  )}, your cruise delivers immersive moments and unforgettable vistas.`,

  `Escape the everyday with this ${adjective.toLowerCase()} journey through ${regionType}, departing from ${cityDisplayName}. You'll visit ${destinations.join(
    ", "
  )}, where every stop is a new adventure.`,

  `Let the winds of the ${regionType} carry you from ${cityDisplayName} to the most stunning ports in the region. With destinations like ${destinations.join(
    ", "
  )}, this ${experience.toLowerCase()} redefines luxury travel.`,

  `Depart from iconic ${cityDisplayName} and traverse the ${regionType} with visits to ${destinations.join(
    ", "
  )}. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.`,

  `An unforgettable ${experience.toLowerCase()} awaits as you cruise from ${cityDisplayName} across ${regionType}. Dive into history, flavor, and culture with stops including ${destinations.join(
    ", "
  )}.`,

  `Depart from the iconic port of ${cityDisplayName} and sail through the enchanting ${regionType}. Explore vibrant destinations like ${destinations.join(
    ", "
  )}, each offering its own unique charm and local flair.`,

  `Step aboard in ${cityDisplayName} and begin a ${adjective.toLowerCase()} journey through the scenic ${regionType}. From historic cities to coastal hideaways like ${destinations.join(
    ", "
  )}, every day is unforgettable.`,

  `Set off on a ${experience.toLowerCase()} from ${cityDisplayName} that captures the essence of ${regionType}. Discover cultural gems and culinary delights across ${destinations.join(
    ", "
  )}.`,

  `Your journey through the ${regionType} begins in ${cityDisplayName}, where elegance meets adventure. Explore the shores of ${destinations.join(
    ", "
  )}, with curated excursions and luxurious onboard amenities.`,

  `Board in ${cityDisplayName} for a hand-crafted ${experience.toLowerCase()} through the breathtaking ${regionType}. Highlights include sun-drenched beaches, historic ports, and immersive culture in ${destinations.join(
    ", "
  )}.`,

  `Escape to sea from ${cityDisplayName} on a ${adjective.toLowerCase()} voyage exploring the magic of ${regionType}. Visit unforgettable locales like ${destinations.join(
    ", "
  )}, where each stop inspires awe.`,

  `Experience coastal elegance on this ${experience.toLowerCase()} from ${cityDisplayName}, where the journey through ${regionType} includes stops in ${destinations.join(
    ", "
  )}, each more enchanting than the last.`,

  `Leave ordinary behind as you sail from ${cityDisplayName} across the captivating ${regionType}. Discover the distinctive personality of each destination, from ${destinations.join(
    ", "
  )}.`,

  `This ${adjective.toLowerCase()} ${experience.toLowerCase()} begins in ${cityDisplayName} and ventures deep into the heart of ${regionType}. Wander through colorful markets, historic streets, and serene coastlines at ${destinations.join(
    ", "
  )}.`,

  `Join us in ${cityDisplayName} for a ${experience.toLowerCase()} of a lifetime. Sail across the serene waters of ${regionType}, stopping at ports like ${destinations.join(
    ", "
  )} where timeless traditions meet modern luxuries.`,

  `Sail away from ${cityDisplayName} into the beautiful expanse of ${regionType}. Along the way, enjoy rich cultural experiences in ${destinations.join(
    ", "
  )}, where history, nature, and cuisine collide.`,

  `This inspiring ${experience.toLowerCase()} departs from ${cityDisplayName}, navigating the diverse landscapes and vibrant cities of ${regionType}. Must-see stops include ${destinations.join(
    ", "
  )}.`,

  `Explore a new side of ${regionType} with this ${adjective.toLowerCase()} ${experience.toLowerCase()} starting in ${cityDisplayName}. Visit charming ports such as ${destinations.join(
    ", "
  )}, each offering its own unique rhythm.`,

  `Unwind and explore on this ${experience.toLowerCase()} through ${regionType}, departing from ${cityDisplayName}. With every stop—from ${
    destinations[0]
  } to ${destinations.slice(-1)}—you’ll collect memories that last a lifetime.`,

  `Let the spirit of exploration guide your ${adjective.toLowerCase()} journey from ${cityDisplayName}. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like ${destinations.join(
    ", "
  )}.`,

  `Start in the vibrant city of ${cityDisplayName} and venture into the iconic ${regionType}. Discover authentic local cultures, cuisine, and coastal wonders in ${destinations.join(
    ", "
  )}.`,

  `Savor each moment of this ${adjective.toLowerCase()} escape through ${regionType}, starting in ${cityDisplayName}. Visit renowned locations like ${destinations.join(
    ", "
  )}, where adventure and relaxation intertwine.`,

  `Your ${experience.toLowerCase()} begins in ${cityDisplayName}, where every sunset on the ${regionType} horizon promises another day of discovery—from ${destinations.join(
    ", "
  )} to hidden ports of charm.`,

  `Leave stress behind with this curated ${experience.toLowerCase()} from ${cityDisplayName}. Sail across the best of ${regionType} and explore treasures like ${destinations.join(
    ", "
  )} with comfort and style.`,

  `A voyage of contrasts awaits from ${cityDisplayName}. Discover the historical and natural richness of ${regionType} as you cruise to spectacular destinations like ${destinations.join(
    ", "
  )}.`,

  `Embark from ${cityDisplayName} and traverse the ${regionType} in style. Whether it’s the energy of ${destinations[0]} or the calm of ${destinations[1]}, each destination reveals a new side of paradise.`,

  `Begin a captivating ${experience.toLowerCase()} through the ${regionType}, departing ${cityDisplayName}. With visits to ${destinations.join(
    ", "
  )}, each day brings a new adventure and deeper connection to the region.`,

  `This hand-selected ${adjective.toLowerCase()} cruise offers a true taste of ${regionType}. Depart from ${cityDisplayName} and explore ports like ${destinations.join(
    ", "
  )}, each telling a story through food, music, and tradition.`,

  `Step into a world of elegance and exploration from ${cityDisplayName}. This ${experience.toLowerCase()} through the ${regionType} unveils stunning stops including ${destinations.join(
    ", "
  )}, all with first-class service.`,

  `Enjoy seamless luxury on this ${adjective.toLowerCase()} ${experience.toLowerCase()} beginning in ${cityDisplayName}. Visit breathtaking ${regionType} locales such as ${destinations.join(
    ", "
  )} on this unforgettable itinerary.`,

  `Set sail from historic ${cityDisplayName} for a modern escape into the ${regionType}. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in ${destinations.join(
    ", "
  )}.`,

  `Let the waves lead you from ${cityDisplayName} on this ${adjective.toLowerCase()} ${experience.toLowerCase()}. Traverse the iconic waters of ${regionType} and discover the beauty of ${destinations.join(
    ", "
  )}.`,

  `Begin your journey in ${cityDisplayName}, where tradition meets travel. This immersive ${experience.toLowerCase()} reveals the finest of ${regionType}, from the beaches of ${
    destinations[0]
  } to the streets of ${destinations[1]}.`,

  `From bustling ${cityDisplayName} to serene ${regionType} shores, this cruise invites you to relax, explore, and indulge. Stops at ${destinations.join(
    ", "
  )} deliver a balanced blend of culture and comfort.`,

  `Sail from ${cityDisplayName} into a world of wonder. The ${regionType} beckons with unforgettable ports like ${destinations.join(
    ", "
  )}, where every view is picture-perfect and every moment is priceless.`,

  `Let this ${adjective.toLowerCase()} voyage redefine your idea of travel. From ${cityDisplayName}, explore the ${regionType} in luxurious comfort, stopping at ${destinations.join(
    ", "
  )} where every port offers a new chapter.`,

  `An escape like no other begins in ${cityDisplayName}, where your ${experience.toLowerCase()} launches into the heart of ${regionType}. Discover the magic of ${destinations.join(
    ", "
  )} with style and sophistication.`,

  `This ${adjective.toLowerCase()} cruise from ${cityDisplayName} is your gateway to the wonders of ${regionType}. Experience the best of coastal life with stops at ${destinations.join(
    ", "
  )}, where each destination is a treasure waiting to be explored.`,
  `Embark on a ${experience.toLowerCase()} from ${cityDisplayName} that promises to captivate your senses. From the vibrant markets of ${
    destinations[0]
  } to the tranquil beaches of ${
    destinations[1]
  }, this journey through ${regionType} is one you won't forget.`,
  `Experience the allure of ${regionType} on this ${adjective.toLowerCase()} cruise departing from ${cityDisplayName}. With stops at ${destinations.join(
    ", "
  )}, you'll immerse yourself in the rich tapestry of cultures and landscapes that define this stunning region.`,
  `Set sail from ${cityDisplayName} on a ${adjective.toLowerCase()} ${experience.toLowerCase()} that explores the hidden gems of ${regionType}. From the bustling streets of ${
    destinations[0]
  } to the serene shores of ${
    destinations[1]
  }, each stop offers a unique glimpse into the heart of this enchanting region.`,
  `Join us for a ${adjective.toLowerCase()} ${experience.toLowerCase()} from ${cityDisplayName}, where the journey through ${regionType} is as enriching as the destinations themselves. Visit ${destinations.join(
    ", "
  )} and create memories that will last a lifetime.`,
  `Discover the beauty of ${regionType} on this ${adjective.toLowerCase()} cruise from ${cityDisplayName}. With stops at ${destinations.join(
    ", "
  )}, you'll experience a perfect blend of relaxation, adventure, and cultural immersion.`,
  `This ${experience.toLowerCase()} from ${cityDisplayName} invites you to explore the diverse landscapes and vibrant cultures of ${regionType}. From the historic charm of ${
    destinations[0]
  } to the natural beauty of ${
    destinations[1]
  }, each port offers a unique experience that will leave you enchanted.`,
  `Embark on a ${adjective.toLowerCase()} ${experience.toLowerCase()} from ${cityDisplayName}, where the wonders of ${regionType} await. With stops at ${destinations.join(
    ", "
  )}, you'll discover the rich history, stunning scenery, and warm hospitality that define this remarkable region.`,
  `Experience the magic of ${regionType} on this ${adjective.toLowerCase()} cruise departing from ${cityDisplayName}. From the vibrant culture of ${
    destinations[0]
  } to the breathtaking landscapes of ${
    destinations[1]
  }, this journey promises unforgettable moments and lasting memories.`,
  `Set sail from ${cityDisplayName} on a ${adjective.toLowerCase()} ${experience.toLowerCase()} that takes you through the heart of ${regionType}. With stops at ${destinations.join(
    ", "
  )}, you'll explore the rich tapestry of cultures, landscapes, and experiences that make this region so special.`,

  `Discover the wonders of ${regionType} on this ${adjective.toLowerCase()} cruise departing from ${cityDisplayName}. From the stunning coastlines of ${
    destinations[0]
  } to the vibrant cities of ${
    destinations[1]
  }, this journey promises to be a feast for the senses.`,
];
