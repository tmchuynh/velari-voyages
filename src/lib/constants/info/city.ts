import { Location } from "@/lib/types/types";

export const cityFiles = [
  "auckland",
  "amsterdam",
  "barcelona",
  "bali",
  "bermuda",
  "helsinki",
  "st-petersburg",
  "berlin",
  "boston",
  "buenos-aires",
  "cape-town",
  "charleston",
  "copenhagen",
  "dubai",
  "dublin",
  "florence",
  "fort-lauderdale",
  "nassau",
  "st-thomas",
  "cozumel",
  "george-town",
  "roatan",
  "philipsburg",
  "athens",
  "santorini",
  "mykonos",
  "galveston",
  "hong-kong",
  "kiel",
  "kyoto",
  "lisbon",
  "london",
  "los-angeles",
  "malta",
  "dubrovnik",
  "juneau",
  "ketchikan",
  "skagway",
  "sitka",
  "victoria",
  "glacier-bay",
  "melbourne",
  "miami",
  "milan",
  "montreal",
  "montevideo",
  "lima",
  "cartagena",
  "santiago",
  "new-orleans",
  "new-york-city",
  "bangkok",
  "ho-chi-minh-city",
  "paris",
  "quebec-city",
  "rio-de-janeiro",
  "rome",
  "san-francisco",
  "san-juan",
  "seattle",
  "shanghai",
  "singapore",
  "southampton",
  "sydney",
  "tampa",
  "tokyo",
  "toronto",
  "vancouver",
  "venice",
  "yokohama",
  "oslo",
];

export const cruiseDepartureLocations: Location[] = [
  {
    city: "Miami",
    state: "Florida",
    country: "United States",
    region: "Southeast",
    isPopular: true,
    subtitle: "Where Paradise Meets Nightlife",
    quote:
      "Dancing between turquoise waves and neon dreams, Miami whispers the secret language of endless summer.",
    coordinates: {
      latitude: 25.7743,
      longitude: -80.1903,
    },
    address: "PortMiami, 1015 N America Way, Miami, FL",
    postalCode: "33132",
    timezone: "America/New_York",
    timezoneAbbreviation: "EST/EDT",
    additionalInfo:
      "One of the busiest cruise ports in the world, serving the Caribbean and beyond. PortMiami is known as the 'Cruise Capital of the World' with easy access to the Bahamas, Eastern and Western Caribbean. Year-round sailings available with peak season from November to April. The port features excellent pre-cruise amenities and is just 8 miles from Miami International Airport.",
  },
  {
    city: "Fort Lauderdale",
    state: "Florida",
    country: "United States",
    region: "Southeast",
    isPopular: true,
    subtitle: "Venice of America",
    quote:
      "Water-woven streets where yachts and dreams drift equally, beneath golden light that never apologizes for its abundance.",
    coordinates: {
      latitude: 26.0921,
      longitude: -80.1138,
    },
    address: "Port Everglades, 1850 Eller Dr, Fort Lauderdale, FL",
    postalCode: "33316",
    timezone: "America/New_York",
    timezoneAbbreviation: "EST/EDT",
    additionalInfo:
      "Popular for Caribbean and transatlantic voyages. Port Everglades hosts nearly 4 million passengers annually with routes to the Eastern/Western Caribbean, Panama Canal, and seasonal transatlantic crossings. Located just 10 minutes from Fort Lauderdale-Hollywood International Airport and offers convenient access to South Florida attractions before or after your cruise.",
  },
  {
    city: "Los Angeles",
    state: "California",
    country: "United States",
    region: "West Coast",
    isPopular: true,
    subtitle: "City of Angels & Dreams",
    quote:
      "Beneath palm trees and celluloid skies, impossible dreams become everyday realities in this sun-drenched landscape of reinvention.",
    coordinates: {
      latitude: 33.7381,
      longitude: -118.2775,
    },
    address: "Port of Los Angeles, 425 S Palos Verdes St, San Pedro, CA",
    postalCode: "90731",
    timezone: "America/Los_Angeles",
    timezoneAbbreviation: "PST/PDT",
    additionalInfo:
      "Gateway to the Mexican Riviera and Pacific cruises. The Port of Los Angeles in San Pedro offers year-round sailings to Baja California, the Mexican Riviera, and Hawaii, plus seasonal cruises to Alaska. The World Cruise Center features excellent facilities and is approximately 30 minutes from Los Angeles International Airport with convenient access to Southern California attractions.",
  },
  {
    city: "Seattle",
    state: "Washington",
    country: "United States",
    region: "Pacific Northwest",
    isPopular: true,
    subtitle: "Emerald City by Sound",
    quote:
      "Between misty mountains and restless waters, Seattle brews innovation and contemplation in equal measure.",
    coordinates: {
      latitude: 47.6062,
      longitude: -122.3321,
    },
    address: "Smith Cove Cruise Terminal, 2001 W Garfield St, Seattle, WA",
    postalCode: "98119",
    timezone: "America/Los_Angeles",
    timezoneAbbreviation: "PST/PDT",
    additionalInfo:
      "Primary departure port for Alaskan cruises. Seattle's cruise terminals operate primarily from May through September during the Alaska cruise season, with breathtaking Inside Passage and Glacier Bay itineraries. The port offers efficient embarkation processes and is conveniently located just 15 minutes from downtown attractions. Consider arriving a day early to explore Seattle's iconic sights including Pike Place Market and the Space Needle.",
  },
  {
    city: "Vancouver",
    country: "Canada",
    region: "British Columbia",
    isPopular: true,
    subtitle: "Nature's Urban Masterpiece",
    quote:
      "Nestled where forest meets sea, Vancouver holds the conversation between wilderness and civilization in perfect balance.",
    coordinates: {
      latitude: 49.2885,
      longitude: -123.1117,
    },
    address: "Canada Place Cruise Terminal, 999 Canada Pl, Vancouver, BC",
    postalCode: "V6C 3T4",
    timezone: "America/Vancouver",
    timezoneAbbreviation: "PST/PDT",
    additionalInfo:
      "Popular port for Alaska and Pacific Northwest routes. Canada Place offers one of the most scenic departure experiences with views of mountains, forests, and the harbor. The Alaska cruise season runs May through September with access to the Inside Passage. The terminal is conveniently located in downtown Vancouver, allowing easy exploration of Stanley Park, Gastown, and other attractions before boarding.",
  },
  {
    city: "Southampton",
    country: "United Kingdom",
    region: "England",
    isPopular: false,
    subtitle: "Gateway to the World",
    quote:
      "Centuries of departures weave their stories into Southampton's stones, where history breathes with the rhythm of the tides.",
    coordinates: {
      latitude: 50.8985,
      longitude: -1.4042,
    },
    address: "Southampton Cruise Terminal, Dock Gate 10, Western Docks",
    postalCode: "SO15 1HJ",
    timezone: "Europe/London",
    timezoneAbbreviation: "GMT/BST",
    additionalInfo:
      "Main UK port for transatlantic and European cruises. Southampton handles over 2 million cruise passengers annually with routes to the Mediterranean, Northern Europe, Canary Islands, and transatlantic crossings. The port features excellent rail connections to London (1.5 hours) and has multiple terminals handling the world's largest cruise ships. Peak season runs from April to October with Christmas market cruises popular in winter.",
  },
  {
    city: "Barcelona",
    country: "Spain",
    region: "Catalonia",
    isPopular: true,
    subtitle: "Gaudi's Mediterranean Jewel",
    quote:
      "Barcelona dances between order and chaos, where modernist dreams take flight among ancient whispers of the Mediterranean.",
    coordinates: {
      latitude: 41.3525,
      longitude: 2.1575,
    },
    address: "Port de Barcelona, Moll Adossat, Barcelona",
    postalCode: "08039",
    timezone: "Europe/Madrid",
    timezoneAbbreviation: "CET/CEST",
    additionalInfo:
      "Major hub for Mediterranean cruise departures. Barcelona's port handles over 2.5 million cruise passengers annually with routes to the Western Mediterranean, Greek Isles, and seasonally to the Canary Islands. Located just 30 minutes from Barcelona Airport with the cruise terminals offering easy access to the city's famous attractions like Sagrada Familia and Las Ramblas. The Mediterranean cruise season peaks from April through October.",
  },
  {
    city: "Rome",
    country: "Italy",
    region: "Lazio",
    isPopular: true,
    subtitle: "Eternal City of Wonders",
    quote:
      "In Rome's golden light, millennia of human passion materialize in stone and memory, echoing endless conversations with eternity.",
    coordinates: {
      latitude: 41.8992,
      longitude: 12.4731,
    },
    address: "Port of Civitavecchia, Largo della Pace, Civitavecchia",
    postalCode: "00053",
    timezone: "Europe/Rome",
    timezoneAbbreviation: "CET/CEST",
    additionalInfo:
      "Main departure port for central Mediterranean cruises. The Port of Civitavecchia serves as Rome's cruise gateway, hosting itineraries to the Greek Isles, Eastern Mediterranean, and Western Mediterranean shores. Located 80km from Rome with shuttle services available to the city. Consider arriving at least one day early to explore Rome's magnificent ancient sites. Peak cruising season runs April through October with milder weather and fewer crowds in shoulder seasons.",
  },
  {
    city: "Dubai",
    country: "United Arab Emirates",
    region: "Middle East",
    isPopular: true,
    subtitle: "Desert Dreams Touch Sky",
    quote:
      "Rising from ancient sands, Dubai transforms impossibility into skylines, where tomorrow's visions cast shadows on yesterday's horizons.",
    coordinates: {
      latitude: 25.276987,
      longitude: 55.296249,
    },
    address: "Port Rashid, Dubai",
    postalCode: "00000",
    timezone: "Asia/Dubai",
    timezoneAbbreviation: "GST",
    additionalInfo:
      "Gateway for cruises through the Arabian Gulf and Indian Ocean. Port Rashid features an ultra-modern cruise terminal serving destinations including Oman, Qatar, Bahrain, and longer voyages to India or the Mediterranean. The cruise season runs from November to April to avoid summer heat. The port is conveniently located just 15 minutes from Dubai International Airport and offers easy access to the city's spectacular attractions including Burj Khalifa and Palm Jumeirah.",
  },
  {
    city: "Cape Town",
    country: "South Africa",
    region: "Western Cape",
    isPopular: true,
    subtitle: "Where Oceans Meet Mountains",
    quote:
      "Cradled between ancient mountain and timeless ocean, Cape Town whispers of convergence - where worlds, elements, and destinies collide.",
    coordinates: {
      latitude: -33.9249,
      longitude: 18.4241,
    },
    address: "Cape Town Cruise Terminal, Quay 2, V&A Waterfront",
    postalCode: "8001",
    timezone: "Africa/Johannesburg",
    timezoneAbbreviation: "SAST",
    additionalInfo:
      "Key departure for Southern Africa and Antarctic cruises. The Victoria & Alfred Waterfront cruise terminal offers one of the world's most spectacular settings with Table Mountain as backdrop. Cruises operate primarily from November to May with routes along the South African coast, to Namibia, Mozambique, Mauritius, and expedition cruises to Antarctica. The terminal is surrounded by upscale shopping, dining, and cultural attractions with easy access to Cape Town's famous sites.",
  },
  {
    city: "Tokyo",
    country: "Japan",
    region: "Kanto",
    isPopular: true,
    subtitle: "Tradition Meets Future Innovation",
    quote:
      "In Tokyo's electric pulse, centuries fold into moments, where neon haiku writes itself across the canvas of ordered chaos.",
    coordinates: {
      latitude: 35.6762,
      longitude: 139.6503,
    },
    address: "Harumi Passenger Terminal, Tokyo",
    postalCode: "104-0053",
    timezone: "Asia/Tokyo",
    timezoneAbbreviation: "JST",
    additionalInfo:
      "Major port for cruises in Japan and East Asia. The Harumi Passenger Terminal serves routes throughout Japan, South Korea, Taiwan, and China with growing traffic during Japan's cherry blossom season (late March to early April) and autumn foliage (October to November). Located approximately 30 minutes from central Tokyo with convenient transport links. Consider adding pre-cruise days to explore Tokyo's dynamic blend of traditional and ultra-modern attractions.",
  },
  {
    city: "Hong Kong",
    country: "China",
    region: "Special Administrative Region",
    isPopular: true,
    subtitle: "Harbor of Fragrant Waters",
    quote:
      "Suspended between sky and sea, Hong Kong's silhouette is a calligraphy of ambition written in light against the night.",
    coordinates: {
      latitude: 22.3193,
      longitude: 114.1694,
    },
    address: "Ocean Terminal, Tsim Sha Tsui",
    postalCode: "00000",
    timezone: "Asia/Hong_Kong",
    timezoneAbbreviation: "HKT",
    additionalInfo:
      "Important hub for Asia-Pacific cruise itineraries. Ocean Terminal in Tsim Sha Tsui offers one of the world's most spectacular harbor settings with routes to mainland China, Taiwan, Japan, Vietnam, Philippines, and Singapore. Year-round cruising with peak seasons October-December and March-May for ideal weather. The terminal is integrated with a luxury shopping mall and provides stunning views of Victoria Harbour, with easy access to Hong Kong's world-class attractions and dining.",
  },
  {
    city: "Auckland",
    country: "New Zealand",
    region: "North Island",
    isPopular: false,
    subtitle: "City of Many Sails",
    quote:
      "Between two harbors, Auckland breathes with the ocean's rhythm, where Pacific stories converge beneath the watchful gaze of ancient volcanoes.",
    coordinates: {
      latitude: -36.8485,
      longitude: 174.7633,
    },
    address: "Downtown Ferry Terminal, Auckland",
    postalCode: "1010",
    timezone: "Pacific/Auckland",
    timezoneAbbreviation: "NZST/NZDT",
    additionalInfo:
      "Central point for cruises exploring New Zealand and South Pacific. Auckland's downtown terminal offers convenient access to Fiji, Tonga, French Polynesia, and circumnavigation of New Zealand's dramatic coastline. The Southern Hemisphere cruise season peaks from October through April during New Zealand's summer. The port is centrally located in Auckland's waterfront district with easy walking distance to shops, restaurants, and attractions like the Sky Tower, with efficient transport to Auckland International Airport.",
  },
  {
    city: "Buenos Aires",
    country: "Argentina",
    region: "Buenos Aires Province",
    isPopular: true,
    subtitle: "Paris of South America",
    quote:
      "In the city where tango was born, passion moves through streets like wind, transforming ordinary moments into eternal poetry.",
    coordinates: {
      latitude: -34.6037,
      longitude: -58.3816,
    },
    address: "Puerto Madero Cruise Terminal",
    postalCode: "C1107",
    timezone: "America/Argentina/Buenos_Aires",
    timezoneAbbreviation: "ART",
    additionalInfo:
      "Departure for cruises around South America and Antarctica. Puerto Madero serves itineraries along the Argentine coast, to Uruguay, Brazil, the Falkland Islands, and expedition cruises to Antarctica. The South American cruise season runs from October through March during the Southern Hemisphere summer. The modernized terminal is conveniently located near the historic center with excellent access to Buenos Aires' European-influenced architecture, vibrant tango halls, and world-class steakhouses.",
  },
  {
    city: "New York City",
    state: "New York",
    country: "United States",
    region: "Northeast",
    isPopular: true,
    subtitle: "City That Never Sleeps",
    quote:
      "A concrete constellation of eight million dreams, where every corner holds the possibility of becoming the center of the universe.",
    coordinates: {
      latitude: 40.7128,
      longitude: -74.006,
    },
    address: "Cape Liberty Cruise Port, Bayonne, NJ (serves NYC)",
    postalCode: "07002",
    timezone: "America/New_York",
    timezoneAbbreviation: "EST/EDT",
    additionalInfo:
      "Major gateway for Bermuda, Caribbean, and transatlantic cruises. The New York cruise area features multiple terminals: Manhattan's convenient West Side piers and Cape Liberty in nearby Bayonne, NJ. Year-round sailings with routes to Bermuda, the Caribbean, Bahamas, New England/Canada (fall foliage season), and transatlantic crossings. Consider spending pre or post-cruise days exploring iconic New York attractions. Winter departures may feature repositioning cruises to warmer destinations.",
  },
  {
    city: "Galveston",
    state: "Texas",
    country: "United States",
    region: "Gulf Coast",
    isPopular: false,
    subtitle: "Island Time, Texas Style",
    quote:
      "Where Gulf waters kiss resilient shores, Galveston whispers tales of rebirth through hurricanes and history with unwavering dignity.",
    coordinates: {
      latitude: 29.3013,
      longitude: -94.7977,
    },
    address: "Port of Galveston, 2502 Harborside Dr, Galveston, TX",
    postalCode: "77550",
    timezone: "America/Chicago",
    timezoneAbbreviation: "CST/CDT",
    additionalInfo:
      "Popular departure port for Western Caribbean cruises. The island port offers convenient access for central U.S. travelers with year-round sailings to Mexico, Honduras, Belize, and Caribbean islands. The compact cruise terminal area hosts multiple major cruise lines and is located near Galveston's historic Strand District with Victorian architecture and Gulf beaches. Peak season runs from November through April with hurricane season considerations in late summer and fall.",
  },
  {
    city: "New Orleans",
    state: "Louisiana",
    country: "United States",
    region: "Gulf Coast",
    isPopular: true,
    subtitle: "Soul of the Mississippi",
    quote:
      "Jazz-soaked streets where spirits dance between centuries, New Orleans transforms sorrow into celebration with every heartbeat.",
    coordinates: {
      latitude: 29.9511,
      longitude: -90.0715,
    },
    address: "Ernest N. Morial Convention Center Cruise Terminal",
    postalCode: "70130",
    timezone: "America/Chicago",
    timezoneAbbreviation: "CST/CDT",
    additionalInfo:
      "Known for Caribbean and Mexico itineraries. The Port of New Orleans offers a unique cultural pre-cruise experience with year-round sailings to the Western Caribbean including Mexico, Jamaica, and the Cayman Islands. The cruise terminal is located near the historic French Quarter, allowing passengers to enjoy the city's legendary music, cuisine, and architecture. Consider arriving a few days early to experience festivals like Mardi Gras (February/March) or Jazz Fest (April/May).",
  },
  {
    city: "Lisbon",
    country: "Portugal",
    region: "Lisbon District",
    isPopular: true,
    subtitle: "City of Seven Hills",
    quote:
      "Lisbon wears nostalgia like perfume, where melancholic beauty flows through tiled streets toward an ever-changing sea of possibilities.",
    coordinates: {
      latitude: 38.7223,
      longitude: -9.1393,
    },
    address: "Lisbon Cruise Terminal, Santa Apolónia",
    postalCode: "1100-038",
    timezone: "Europe/Lisbon",
    timezoneAbbreviation: "WET/WEST",
    additionalInfo:
      "Gateway for Mediterranean, Atlantic, and Canary Islands cruises. Lisbon's cruise terminals are centrally located with dramatic views of the 25th of April Bridge and Christ the King statue. Routes include the Mediterranean, Atlantic islands (Azores, Madeira, Canaries), Northern Europe, and transatlantic crossings. The primary cruise season runs April through November. The terminals offer easy access to Lisbon's historic neighborhoods, with their yellow trams, Fado music venues, and spectacular miradouros (viewpoints).",
  },
  {
    city: "Sydney",
    country: "Australia",
    region: "New South Wales",
    isPopular: true,
    subtitle: "Harbor City of Light",
    quote:
      "Curved around sapphire waters, Sydney stands as a monument to human aspiration, where sails and dreams catch the same winds.",
    coordinates: {
      latitude: -33.8523,
      longitude: 151.2108,
    },
    address: "Overseas Passenger Terminal, Circular Quay, Sydney",
    postalCode: "2000",
    timezone: "Australia/Sydney",
    timezoneAbbreviation: "AEST/AEDT",
    additionalInfo:
      "Leading cruise hub in the South Pacific region. The Overseas Passenger Terminal offers one of the world's most iconic settings with views of the Opera House and Harbour Bridge. Routes include New Zealand, South Pacific islands, and circumnavigation of Australia. The Southern Hemisphere cruise season peaks from October through April. The terminal is perfectly positioned in the heart of Circular Quay, within walking distance to The Rocks historic district and major Sydney attractions.",
  },
  {
    city: "Singapore",
    country: "Singapore",
    region: "Southeast Asia",
    isPopular: true,
    subtitle: "Garden City of Tomorrow",
    quote:
      "Where nature and technology intertwine as equals, Singapore orchestrates a symphony of cultures beneath tropical skies and futuristic canopies.",
    coordinates: {
      latitude: 1.2644,
      longitude: 103.8201,
    },
    address: "Marina Bay Cruise Centre, 61 Marina Coastal Dr",
    postalCode: "018947",
    timezone: "Asia/Singapore",
    timezoneAbbreviation: "SGT",
    additionalInfo:
      "Strategic hub for Asia-Pacific cruise itineraries. The Marina Bay Cruise Centre is an architectural marvel handling the region's largest ships with routes to Malaysia, Thailand, Vietnam, Indonesia, and longer voyages to China, Japan, and Australia. Year-round cruising with slight preference for November-April outside of monsoon season. The ultramodern terminal is just minutes from Singapore's downtown attractions, renowned dining scene, and Changi Airport - consistently rated among the world's best.",
  },
  {
    city: "Charleston",
    state: "South Carolina",
    country: "United States",
    region: "Southeast",
    isPopular: false,
    subtitle: "Southern Charm Meets Coastal Grace",
    quote:
      "Cobblestone whispers of bygone eras as ocean breezes carry promises of journeys yet to unfold.",
    coordinates: {
      latitude: 32.7765,
      longitude: -79.9311,
    },
    address: "Union Pier Terminal, 32 Washington St, Charleston, SC",
    postalCode: "29401",
    timezone: "America/New_York",
    timezoneAbbreviation: "EST/EDT",
    additionalInfo:
      "Historic port with easy access to the Bahamas and Caribbean. The Union Pier Terminal is nestled in Charleston's picturesque historic district with its distinctive antebellum architecture. Cruise season peaks from February through November with favorable weather conditions. The terminal is located a short walk from Charleston's renowned dining scene and historic sites, and approximately 12 miles from Charleston International Airport.",
  },
  {
    city: "Tampa",
    state: "Florida",
    country: "United States",
    region: "Gulf Coast",
    isPopular: false,
    subtitle: "Sunshine Gateway to Caribbean",
    quote:
      "Where Gulf waters tell sun-drenched stories and each departure carries the gentle promise of tropical horizons.",
    coordinates: {
      latitude: 27.9454,
      longitude: -82.4582,
    },
    address: "Port Tampa Bay, 815 Channelside Dr, Tampa, FL",
    postalCode: "33602",
    timezone: "America/New_York",
    timezoneAbbreviation: "EST/EDT",
    additionalInfo:
      "Convenient departure point for Western Caribbean cruises. Port Tampa Bay offers year-round sailings to destinations including Mexico's Yucatan Peninsula, Grand Cayman, and various Caribbean islands. The cruise terminal features modern amenities and is located just 15 minutes from Tampa International Airport. The port's location offers easy access to Tampa's attractions including Busch Gardens, the Florida Aquarium, and the historic Ybor City district.",
  },
  {
    city: "Kiel",
    country: "Germany",
    region: "Schleswig-Holstein",
    isPopular: false,
    subtitle: "Baltic Sea's Nautical Gateway",
    quote:
      "Between fjord and Baltic Sea, Kiel stands as a quiet sentinel where maritime heritage flows through modern passageways to northern horizons.",
    coordinates: {
      latitude: 54.3233,
      longitude: 10.1228,
    },
    address: "Ostseekai Cruise Terminal, Ostseekai, Kiel",
    postalCode: "24103",
    timezone: "Europe/Berlin",
    timezoneAbbreviation: "CET/CEST",
    additionalInfo:
      "Primary German port for Scandinavia and Baltic cruises. The modern Ostseekai terminal serves destinations including Norway's fjords, Sweden, Finland, Estonia, and Russia. The Baltic cruise season runs from April through September when weather is most favorable. Located just a 5-minute walk from Kiel's main train station with good connections to Hamburg Airport (approximately 90 minutes away).",
  },
  {
    city: "Venice",
    country: "Italy",
    region: "Veneto",
    isPopular: false,
    subtitle: "Floating City of Dreams",
    quote:
      "Upon waters where centuries float like gondolas, Venice remains the world's most beautiful impossibility made real.",
    coordinates: {
      latitude: 45.4408,
      longitude: 12.3155,
    },
    address: "Venice Cruise Terminal, Marittima, Venice",
    postalCode: "30135",
    timezone: "Europe/Rome",
    timezoneAbbreviation: "CET/CEST",
    additionalInfo:
      "Unique departure point for Eastern Mediterranean cruises. Note that due to new regulations, larger ships now dock at Marghera Port outside the historic center, with shuttle services to Venice proper. The main cruise season runs from April to October with itineraries to the Greek Islands, Croatia, and beyond. The terminal offers convenient access to Marco Polo Airport (approximately 30 minutes) and is situated near water taxi stations for access to Venice's iconic attractions.",
  },
  {
    city: "Copenhagen",
    country: "Denmark",
    region: "Zealand",
    isPopular: false,
    subtitle: "Northern Europe's Colorful Gateway",
    quote:
      "Between royal spires and modern design, Copenhagen orchestrates a perfect harmony of tradition and innovation along tidal shores.",
    coordinates: {
      latitude: 55.7047,
      longitude: 12.5982,
    },
    address: "Copenhagen Ocean Quay, Oceankaj, Copenhagen",
    postalCode: "2150",
    timezone: "Europe/Copenhagen",
    timezoneAbbreviation: "CET/CEST",
    additionalInfo:
      "Key port for Baltic Sea and Scandinavian cruises. The Ocean Quay terminal serves routes to Norway, Sweden, Finland, Estonia, Russia, and Iceland with the cruise season running May through September. The modern facility is approximately 20 minutes from central Copenhagen attractions including Tivoli Gardens and the Little Mermaid statue. Consider arriving a day early to explore this cyclist-friendly, design-forward city before departure.",
  },
  {
    city: "San Juan",
    country: "Puerto Rico",
    region: "Caribbean",
    isPopular: false,
    subtitle: "Fortress of Caribbean Dreams",
    quote:
      "Where colonial walls embrace Caribbean freedom, history and vibrance dance together beneath an endless tropical sky.",
    coordinates: {
      latitude: 18.4655,
      longitude: -66.1057,
    },
    address: "San Juan Cruise Port, Calle Marina, Old San Juan",
    postalCode: "00901",
    timezone: "America/Puerto_Rico",
    timezoneAbbreviation: "AST",
    additionalInfo:
      "Strategic homeport for Southern Caribbean itineraries. The San Juan cruise piers are ideally situated adjacent to the 500-year-old historic district with its iconic blue cobblestone streets and Spanish colonial architecture. Year-round sailings with peak season from December through April. The terminal is just 15 minutes from Luis Muñoz Marín International Airport and allows passengers to immediately immerse in Old San Juan's rich culture, cuisine, and vibrant atmosphere.",
  },
  {
    city: "Yokohama",
    country: "Japan",
    region: "Kanto",
    isPopular: false,
    subtitle: "Gateway to Eastern Discovery",
    quote:
      "Where tradition meets tomorrow's horizon, Yokohama's harbor lights guide dreamers between ancient worlds and future voyages.",
    coordinates: {
      latitude: 35.4498,
      longitude: 139.6649,
    },
    address: "Osanbashi International Passenger Terminal, Yokohama",
    postalCode: "231-0002",
    timezone: "Asia/Tokyo",
    timezoneAbbreviation: "JST",
    additionalInfo:
      "Japan's premier international cruise port. The architecturally stunning Osanbashi terminal serves routes throughout East Asia including South Korea, Taiwan, and domestic Japanese destinations. Peak seasons align with Japan's cherry blossom (late March-April) and autumn foliage periods (October-November). Located just 30 minutes from central Tokyo by train and 30 minutes from Haneda Airport, the terminal offers excellent access to both Yokohama's attractions and the greater Tokyo metropolitan area.",
  },
  {
    city: "Melbourne",
    country: "Australia",
    region: "Victoria",
    isPopular: false,
    subtitle: "Cultural Heart of Australia",
    quote:
      "Between hidden laneways and southern seas, Melbourne's artistic soul crafts new stories with each arriving tide.",
    coordinates: {
      latitude: -37.8136,
      longitude: 144.9631,
    },
    address: "Station Pier, Port Melbourne",
    postalCode: "3207",
    timezone: "Australia/Melbourne",
    timezoneAbbreviation: "AEST/AEDT",
    additionalInfo:
      "Important port for Australia and New Zealand cruises. Historic Station Pier serves itineraries including Tasmania, New Zealand, and Pacific Islands with the Southern Hemisphere cruise season running October through April. The terminal is located just 20 minutes from Melbourne's central business district with its renowned dining scene, cultural attractions, and distinctive Victorian architecture. Regular tram services connect the pier to the city center for convenient exploration.",
  },
  {
    city: "Montreal",
    country: "Canada",
    region: "Quebec",
    isPopular: false,
    subtitle: "French Soul of North America",
    quote:
      "Where Old World elegance flows with the St. Lawrence current, Montreal blends European charm with North American spirit.",
    coordinates: {
      latitude: 45.5017,
      longitude: -73.5673,
    },
    address: "Montreal Cruise Terminal, Alexandra Pier, Old Port",
    postalCode: "H2Y 2E2",
    timezone: "America/Montreal",
    timezoneAbbreviation: "EST/EDT",
    additionalInfo:
      "Scenic departure point for Canada/New England cruises. The Alexandra Pier terminal operates primarily from May through October with popular fall foliage cruises along the eastern seaboard in September and October. Located in the heart of Old Montreal with its cobblestone streets and historic architecture, the terminal offers immediate access to the city's European-influenced charm. The facility is approximately 30 minutes from Montreal-Trudeau International Airport and adjacent to public transit options.",
  },
  {
    city: "Amsterdam",
    country: "Netherlands",
    region: "North Holland",
    isPopular: true,
    subtitle: "Venice of the North",
    quote:
      "Where historic canals cradle golden age treasures, Amsterdam invites explorers to wander through centuries of artistic innovation and tolerant thinking.",
    coordinates: {
      latitude: 52.3676,
      longitude: 4.9041,
    },
    address: "Passenger Terminal Amsterdam, Piet Heinkade 27",
    postalCode: "1019 BR",
    timezone: "Europe/Amsterdam",
    timezoneAbbreviation: "CET/CEST",
    additionalInfo:
      "Centrally located European cruise port. The Passenger Terminal Amsterdam is a modern facility situated just minutes from the historic city center and Central Station. Main cruise season runs from April through October with routes to the Baltic Sea, Norwegian Fjords, and British Isles. The terminal provides excellent access to Amsterdam's famous canal ring, museums, and vibrant culture, with Amsterdam Schiphol Airport only 20 minutes away by train.",
  },
  {
    city: "Berlin",
    country: "Germany",
    region: "Brandenburg",
    isPopular: false,
    subtitle: "City of Reinvention",
    quote:
      "Between layers of complex history, Berlin continually reinvents itself as a canvas where past and future engage in perpetual dialogue.",
    coordinates: {
      latitude: 52.52,
      longitude: 13.405,
    },
    address: "Accessed via Warnemünde Cruise Port, Rostock",
    postalCode: "18119",
    timezone: "Europe/Berlin",
    timezoneAbbreviation: "CET/CEST",
    additionalInfo:
      "Capital accessed via Warnemünde cruise port. Berlin itself is landlocked, but cruise passengers access it via the port of Warnemünde (Rostock), approximately 2.5-3 hours away. This port serves Baltic Sea cruises with visits to Scandinavia and Eastern Europe from May through September. The journey to Berlin offers a glimpse of the German countryside, with most cruise lines offering organized excursions that maximize time in the capital with its world-class museums, historic landmarks, and vibrant cultural scene.",
  },
  {
    city: "Boston",
    state: "Massachusetts",
    country: "United States",
    region: "Northeast",
    isPopular: false,
    subtitle: "Cradle of American Liberty",
    quote:
      "Walking Boston's Freedom Trail is to trace the footsteps of revolution, where colonial cobblestones still echo with the birth cries of a nation.",
    coordinates: {
      latitude: 42.3601,
      longitude: -71.0589,
    },
    address: "Flynn Cruiseport Boston, 1 Black Falcon Ave",
    postalCode: "02210",
    timezone: "America/New_York",
    timezoneAbbreviation: "EST/EDT",
    additionalInfo:
      "Historic port for New England and Canadian itineraries. Flynn Cruiseport Boston operates primarily from April through November, with peak season during New England's spectacular fall foliage period. Routes include coastal New England, Canadian Maritime provinces, Bermuda, and occasionally transatlantic crossings. The terminal is located in the trendy Seaport District, just 3 miles from Boston Logan International Airport and walking distance to downtown Boston's historic attractions.",
  },
  {
    city: "Dublin",
    country: "Ireland",
    region: "Leinster",
    isPopular: false,
    subtitle: "City of Literary Legends",
    quote:
      "Where river meets sea, Dublin weaves tales of rebellion and revelation, inviting visitors to join its narrative of warmth and wit.",
    coordinates: {
      latitude: 53.3498,
      longitude: -6.2603,
    },
    address: "Dublin Port, Alexandra Road",
    postalCode: "D01 H4C6",
    timezone: "Europe/Dublin",
    timezoneAbbreviation: "GMT/IST",
    additionalInfo:
      "Gateway to the Emerald Isle's treasures. Dublin Port welcomes cruise ships from April through October, with routes around the British Isles, Northern Europe, and transatlantic voyages. The cruise berths are approximately 3km from Dublin city center with shuttle services available. The port provides easy access to Dublin's literary landmarks, Georgian architecture, historic pubs, and serves as a starting point for explorations of Ireland's lush countryside and ancient sites.",
  },
  {
    city: "Florence",
    country: "Italy",
    region: "Tuscany",
    isPopular: true,
    subtitle: "Cradle of Renaissance",
    quote:
      "In Florence, every stone tells a story of artistic rebirth, where beauty was not created but rather, remembered into existence.",
    coordinates: {
      latitude: 43.7696,
      longitude: 11.2558,
    },
    address: "Accessed via Livorno Cruise Port, Piazzale dei Marmi",
    postalCode: "57123",
    timezone: "Europe/Rome",
    timezoneAbbreviation: "CET/CEST",
    additionalInfo:
      "Tuscan jewel accessed via Livorno port. While Florence is inland, cruise passengers visit via the Port of Livorno, approximately 90 minutes away. The Mediterranean cruise season runs from April through October. From Livorno, visitors can explore Florence's unparalleled Renaissance treasures including the Uffizi Gallery, Duomo, and Ponte Vecchio, as well as nearby Pisa with its famous Leaning Tower. The port area offers excellent transportation connections with cruise lines providing organized excursions to Tuscany's highlights.",
  },
  {
    city: "Kyoto",
    country: "Japan",
    region: "Kansai",
    isPopular: false,
    subtitle: "Soul of Traditional Japan",
    quote:
      "Time moves differently in Kyoto, where ancient traditions breathe quietly between modern moments, preserving Japan's cultural heartbeat.",
    coordinates: {
      latitude: 35.0116,
      longitude: 135.7681,
    },
    address: "Accessed via Osaka or Kobe Cruise Ports",
    postalCode: "650-0042",
    timezone: "Asia/Tokyo",
    timezoneAbbreviation: "JST",
    additionalInfo:
      "Cultural treasure accessed via Osaka or Kobe ports. Though inland, Kyoto is a popular excursion destination for cruise ships docking at Osaka or Kobe ports (approximately 1-1.5 hours away). The cruise season aligns with Japan's spring cherry blossom season (March-April) and autumn foliage (October-November). From these ports, visitors can explore Kyoto's 17 UNESCO World Heritage sites, including its famous temples, shrines, and traditional gardens that epitomize classical Japanese aesthetics and culture.",
  },
  {
    city: "London",
    country: "United Kingdom",
    region: "England",
    isPopular: true,
    subtitle: "Where History Meets Tomorrow",
    quote:
      "London stands as a living museum where ancient stones whisper beside modern glass, creating a metropolis that bridges centuries with unwavering dignity.",
    coordinates: {
      latitude: 51.5074,
      longitude: -0.1278,
    },
    address: "London International Cruise Terminal, Tilbury",
    postalCode: "RM18 7NG",
    timezone: "Europe/London",
    timezoneAbbreviation: "GMT/BST",
    additionalInfo:
      "Global metropolis served by various terminals. Most cruise ships dock at either Tilbury (about 25 miles from central London) or occasionally at Tower Bridge for smaller vessels. The cruise season runs from April through October with routes to Northern Europe, the Baltic, and transatlantic crossings. From Tilbury, London's iconic attractions are accessible via a 45-minute train journey. The historic terminal has undergone recent renovations to enhance the passenger experience while maintaining its Grade II listed heritage status.",
  },
  {
    city: "Milan",
    country: "Italy",
    region: "Lombardy",
    isPopular: false,
    subtitle: "Fashion and Design Capital",
    quote:
      "Milan doesn't display its beauty immediately, preferring to reveal its sophisticated treasures to those who seek beyond the surface.",
    coordinates: {
      latitude: 45.4642,
      longitude: 9.19,
    },
    address: "Accessed via Genoa Cruise Port, Stazione Marittima",
    postalCode: "16126",
    timezone: "Europe/Rome",
    timezoneAbbreviation: "CET/CEST",
    additionalInfo:
      "Design capital accessed via Genoa port. While inland, Milan is reached via the Port of Genoa, approximately 1.5 hours away by train or organized excursions. The Mediterranean cruise season runs from April through November. From Genoa, visitors can explore Milan's world-class attractions including the Gothic Duomo, Leonardo da Vinci's 'The Last Supper,' and the city's renowned fashion district. The Genoa port itself is historic, located close to the city's revitalized waterfront and medieval center.",
  },
  {
    city: "Paris",
    country: "France",
    region: "Île-de-France",
    isPopular: true,
    subtitle: "City of Light and Love",
    quote:
      "Paris exists in two realms: the physical city of stone and river, and the dream city built from millions of artistic imaginings.",
    coordinates: {
      latitude: 48.8566,
      longitude: 2.3522,
    },
    address: "Accessed via Le Havre Cruise Terminal",
    postalCode: "76600",
    timezone: "Europe/Paris",
    timezoneAbbreviation: "CET/CEST",
    additionalInfo:
      "Iconic destination accessed via Le Havre port. Though inland, Paris is accessible from the Port of Le Havre, approximately 2-2.5 hours away. The northern European cruise season runs from April through October. Most cruise lines offer organized excursions to maximize time in Paris exploring landmarks like the Eiffel Tower, Louvre, and Notre-Dame. Le Havre itself was rebuilt after WWII and features distinct modernist architecture that has earned UNESCO World Heritage status.",
  },
  {
    city: "Quebec City",
    country: "Canada",
    region: "Quebec",
    isPopular: false,
    subtitle: "North America's European Enclave",
    quote:
      "Perched above the mighty St. Lawrence, Quebec City preserves a fragment of Old World Europe within the embrace of North American shores.",
    coordinates: {
      latitude: 46.8139,
      longitude: -71.208,
    },
    address: "Port of Québec, 84 Dalhousie St",
    postalCode: "G1K 8M5",
    timezone: "America/Montreal",
    timezoneAbbreviation: "EST/EDT",
    additionalInfo:
      "Picturesque port for Canada/New England cruises. The Port of Québec offers one of North America's most spectacular arrival experiences with views of the iconic Château Frontenac and historic Old Québec. The cruise season runs from May through October, peaking during the spectacular fall foliage period of September-October. Ships dock at the Ross Gaudreault Cruise Terminal, which is walking distance from Old Québec's UNESCO World Heritage streets, allowing passengers to immediately immerse in the city's French colonial charm.",
  },
  {
    city: "Rio de Janeiro",
    country: "Brazil",
    region: "Southeast",
    isPopular: true,
    subtitle: "Marvelous City Between Mountains and Sea",
    quote:
      "Cradled by impossible geography, Rio embodies the joyful defiance of a city that celebrates life between jungle-clad mountains and golden shores.",
    coordinates: {
      latitude: -22.9068,
      longitude: -43.1729,
    },
    address: "Pier Mauá, Avenida Rodrigues Alves",
    postalCode: "20081-250",
    timezone: "America/Sao_Paulo",
    timezoneAbbreviation: "BRT/BRST",
    additionalInfo:
      "Spectacular harbor for South American cruises. Pier Mauá offers one of the world's most dramatic port arrivals with views of Sugarloaf Mountain and Christ the Redeemer statue. The South American cruise season runs from November through March during the Southern Hemisphere summer. The recently revitalized pier complex is located near Rio's historic center and provides easy access to famous beaches like Copacabana and Ipanema. The terminal is approximately 30 minutes from Rio's international airport.",
  },
  {
    city: "San Francisco",
    state: "California",
    country: "United States",
    region: "West Coast",
    isPopular: true,
    subtitle: "City by the Bay",
    quote:
      "Wrapped in fog and possibility, San Francisco balances on its hills like a treasured memory that reinvents itself with each telling.",
    coordinates: {
      latitude: 37.7749,
      longitude: -122.4194,
    },
    address: "Pier 27 Cruise Terminal, The Embarcadero",
    postalCode: "94111",
    timezone: "America/Los_Angeles",
    timezoneAbbreviation: "PST/PDT",
    additionalInfo:
      "Iconic gateway to the Pacific and Alaska. The James R. Herman Cruise Terminal at Pier 27 offers stunning views of the Bay, Alcatraz, and the Golden Gate Bridge. Year-round cruising includes routes to Alaska (May-September), Hawaii, Mexico, and transpacific voyages. The terminal is centrally located along the Embarcadero, within walking distance of Fisherman's Wharf, Ferry Building, and downtown attractions. San Francisco International Airport is approximately 30 minutes away, making pre and post-cruise stays convenient.",
  },
  {
    city: "Toronto",
    country: "Canada",
    region: "Ontario",
    isPopular: false,
    subtitle: "Cosmopolitan Heart of Canada",
    quote:
      "On Lake Ontario's shores, Toronto weaves global influences into a vibrant tapestry that celebrates diversity as its greatest strength.",
    coordinates: {
      latitude: 43.6532,
      longitude: -79.3832,
    },
    address: "Cruise Ship Terminal, 8 Unwin Avenue",
    postalCode: "M5A 1A1",
    timezone: "America/Toronto",
    timezoneAbbreviation: "EST/EDT",
    additionalInfo:
      "Great Lakes cruise destination. Toronto's cruise terminal primarily serves smaller vessels navigating the Great Lakes during the summer and early fall season (June-October). The facility welcomes ships exploring routes between major cities on the Great Lakes including Chicago, Detroit, Milwaukee, and Cleveland. Located at the eastern edge of the harbor, the terminal provides convenient access to Toronto's diverse neighborhoods, CN Tower, Ripley's Aquarium, and vibrant waterfront developments.",
  },
  {
    city: "Oslo",
    country: "Norway",
    region: "Viken",
    isPopular: false,
    subtitle: "Gateway to the Fjords",
    quote:
      "Where the sea meets the forest, Oslo cradles the essence of Norway's natural beauty and maritime heritage.",
    coordinates: {
      latitude: 59.9139,
      longitude: 10.7522,
    },
    address: "Oslo Cruise Terminal, Akershusstranda 31",
    postalCode: "0150",
    timezone: "Europe/Oslo",
    timezoneAbbreviation: "CET/CEST",
    additionalInfo:
      "Main cruise port for Norway, especially for fjord cruises. The terminal is located in the city center, within walking distance to major attractions like the Oslo Opera House, Akershus Fortress, and the Nobel Peace Center. The cruise season typically runs from April to September, coinciding with the best weather for exploring Norway's stunning fjords and coastal scenery. Well-connected by public transport, the port offers easy access to Oslo Gardermoen Airport (about 50 minutes by train).",
  },
  {
    city: "Bali",
    country: "Indonesia",
    region: "Southeast Asia",
    isPopular: true,
    subtitle: "Island of the Gods",
    quote:
      "Where spirituality and paradise merge under volcanic shadows and infinite azure waters.",
    coordinates: {
      latitude: -8.3405,
      longitude: 115.092,
    },
    address: "Benoa Cruise Terminal, Bali",
    postalCode: "80361",
    timezone: "Asia/Makassar",
    timezoneAbbreviation: "WITA",
    additionalInfo:
      "Popular destination for cruises in the Indonesian archipelago. The port at Benoa serves as the gateway to Bali's renowned beaches, terraced rice fields, and ancient temples. Most cruises visit during the dry season from April to October. The terminal provides access to famous areas like Kuta, Ubud, and Seminyak, with Denpasar International Airport approximately 30 minutes away.",
  },
  {
    city: "Bermuda",
    country: "British Overseas Territory",
    region: "North Atlantic",
    isPopular: true,
    subtitle: "The Jewel of the Atlantic",
    quote:
      "Pink sands embrace turquoise waters in this refined island paradise where British charm meets tropical splendor.",
    coordinates: {
      latitude: 32.3078,
      longitude: -64.7505,
    },
    address: "Royal Naval Dockyard, Bermuda",
    postalCode: "MA 01",
    timezone: "Atlantic/Bermuda",
    timezoneAbbreviation: "AST/ADT",
    additionalInfo:
      "Popular destination for East Coast cruises. Most ships dock at the Royal Naval Dockyard on the western tip of the island, with a smaller number using Hamilton or St. George's for smaller vessels. The Bermuda cruise season runs from April through November, with peak months being June through August. The historic Dockyard area offers shopping, dining, and transportation links to Bermuda's famous pink sand beaches and golf courses.",
  },
  {
    city: "Helsinki",
    country: "Finland",
    region: "Northern Europe",
    isPopular: false,
    subtitle: "Daughter of the Baltic",
    quote:
      "Between forest and sea, Helsinki's elegant design and midnight sun create a northern symphony of light and innovation.",
    coordinates: {
      latitude: 60.1699,
      longitude: 24.9384,
    },
    address: "West Harbour (Länsisatama), Helsinki",
    postalCode: "00220",
    timezone: "Europe/Helsinki",
    timezoneAbbreviation: "EET/EEST",
    additionalInfo:
      "Key port for Baltic Sea cruises. Helsinki's main cruise terminals at West Harbour (Länsisatama) and South Harbour (Eteläsatama) welcome ships primarily from May through September. The terminals are located close to the city center with convenient tram connections to major attractions including Senate Square, Helsinki Cathedral, and the famous Temppeliaukio Church (Rock Church). Most Baltic cruises include Helsinki alongside Stockholm, Tallinn, and St. Petersburg.",
  },
  {
    city: "St. Petersburg",
    country: "Russia",
    region: "Northwestern",
    isPopular: true,
    subtitle: "Venice of the North",
    quote:
      "Imperial grandeur and artistic splendor unfold along canals and palaces where Russian history breathes through gilded façades.",
    coordinates: {
      latitude: 59.9343,
      longitude: 30.3351,
    },
    address: "Marine Façade Passenger Port, Saint Petersburg",
    postalCode: "199406",
    timezone: "Europe/Moscow",
    timezoneAbbreviation: "MSK",
    additionalInfo:
      "Highlight destination for Baltic cruises. The modern Marine Façade terminal handles most cruise ships, operating during the Baltic cruise season from May through September. Many itineraries feature extended stays or overnight visits to allow exploration of the Hermitage Museum, Catherine Palace, and Peterhof. The port is approximately 30 minutes from the historic center with shuttle services and visa-free entry available for cruise passengers on organized excursions.",
  },
  {
    city: "Nassau",
    country: "Bahamas",
    region: "Caribbean",
    isPopular: true,
    subtitle: "Paradise Island Gateway",
    quote:
      "Crystal waters lap against colonial history where pirate legends blend with tropical pleasures in endless Bahamian blue.",
    coordinates: {
      latitude: 25.0777,
      longitude: -77.34,
    },
    address: "Prince George Wharf, Nassau",
    postalCode: "00000",
    timezone: "America/Nassau",
    timezoneAbbreviation: "EST/EDT",
    additionalInfo:
      "Major Caribbean cruise destination. Nassau's Prince George Wharf can accommodate multiple large cruise ships simultaneously in the heart of downtown. Year-round sailings with peak season from November through April. The port offers immediate access to Bay Street shopping, the Straw Market, and historic sites, with Paradise Island and Atlantis resort just a short water taxi ride away. Nassau serves as a popular first port of call for cruises from Florida.",
  },
  {
    city: "St. Thomas",
    country: "US Virgin Islands",
    region: "Caribbean",
    isPopular: true,
    subtitle: "Gateway to Caribbean Splendor",
    quote:
      "From harbor heights, a tapestry of turquoise bays and emerald hills reveals the treasure that pirates once sought.",
    coordinates: {
      latitude: 18.3419,
      longitude: -64.9307,
    },
    address: "West Indian Company Dock, Havensight, St. Thomas",
    postalCode: "00802",
    timezone: "America/St_Thomas",
    timezoneAbbreviation: "AST",
    additionalInfo:
      "Popular port for Eastern Caribbean itineraries. St. Thomas features two main cruise facilities: Havensight/WICO dock and Crown Bay, both handling multiple large vessels simultaneously. Year-round cruising with peak season from November through April. The island offers duty-free shopping, spectacular beaches like Magens Bay, and panoramic views from mountain lookouts. As a US territory, Americans can visit without passports or currency exchange.",
  },
  {
    city: "Cozumel",
    country: "Mexico",
    region: "Quintana Roo",
    isPopular: true,
    subtitle: "Island Gem of the Yucatán",
    quote:
      "Beyond crystalline reefs and Mayan whispers, Cozumel's gentle currents carry travelers to underwater wonderlands.",
    coordinates: {
      latitude: 20.5118,
      longitude: -86.9455,
    },
    address: "Punta Langosta Cruise Terminal, Cozumel",
    postalCode: "77600",
    timezone: "America/Cancun",
    timezoneAbbreviation: "EST/EDT",
    additionalInfo:
      "Top Western Caribbean cruise destination. Cozumel hosts three main cruise piers: Punta Langosta (downtown), International Pier, and Puerta Maya, collectively welcoming millions of passengers annually. Year-round cruising with reliable tropical weather. The island is renowned for its spectacular diving and snorkeling opportunities, Mayan ruins, and vibrant waterfront shopping district. Many visitors take ferries to the mainland for excursions to Tulum and other Yucatán attractions.",
  },
  {
    city: "George Town",
    country: "Cayman Islands",
    region: "Caribbean",
    isPopular: true,
    subtitle: "Cayman's Cosmopolitan Harbor",
    quote:
      "Where turquoise meets banking towers, Grand Cayman balances pristine underwater realms with refined island sophistication.",
    coordinates: {
      latitude: 19.2969,
      longitude: -81.3921,
    },
    address: "North & South Cruise Terminals, George Town",
    postalCode: "00000",
    timezone: "America/Cayman",
    timezoneAbbreviation: "EST",
    additionalInfo:
      "Tender port for Western Caribbean cruises. Unlike most Caribbean destinations, George Town is primarily a tender port where passengers are ferried from ships to shore. The busy season runs November through April with 4-6 ships often visiting simultaneously. Famous for Seven Mile Beach, Stingray City, and duty-free shopping along the waterfront. Grand Cayman is known for excellent infrastructure, safety, and cleanliness compared to other Caribbean destinations.",
  },
  {
    city: "Roatán",
    country: "Honduras",
    region: "Caribbean",
    isPopular: false,
    subtitle: "Reef Paradise of Honduras",
    quote:
      "Suspended between sky and coral gardens, Roatán's verdant spine rises from waters where marine life dances in liquid prisms.",
    coordinates: {
      latitude: 16.3209,
      longitude: -86.5298,
    },
    address: "Coxen Hole Cruise Terminal, Roatán",
    postalCode: "00000",
    timezone: "America/Tegucigalpa",
    timezoneAbbreviation: "CST",
    additionalInfo:
      "Growing destination for Western Caribbean cruises. Roatán features two modern cruise terminals: Coxen Hole (Town Center) and Mahogany Bay (Carnival's private facility). Peak season runs November through April. The island is renowned for world-class snorkeling and diving along the Mesoamerican Barrier Reef, with activities including canopy tours, wildlife encounters, and pristine beaches. Cruise facilities have driven significant development on this once-sleepy island.",
  },
  {
    city: "Philipsburg",
    country: "Sint Maarten",
    region: "Caribbean",
    isPopular: true,
    subtitle: "Dual-Nation Caribbean Gem",
    quote:
      "On an island of two flags, azure bays and duty-free treasures welcome travelers to Caribbean cosmopolitanism.",
    coordinates: {
      latitude: 18.0237,
      longitude: -63.0458,
    },
    address: "Dr. A.C. Wathey Cruise & Cargo Facility, Philipsburg",
    postalCode: "00000",
    timezone: "America/Lower_Princes",
    timezoneAbbreviation: "AST",
    additionalInfo:
      "Major Eastern Caribbean cruise destination. The A.C. Wathey terminal can accommodate multiple large vessels simultaneously, serving as a hub for Eastern Caribbean itineraries. Year-round cruising with peak season from November through April. The Dutch side of this shared island is known for excellent duty-free shopping along Front Street, vibrant casinos, and Maho Beach where planes land dramatically over sunbathers. The French side (Saint Martin) offers a more European atmosphere with excellent cuisine.",
  },
  {
    city: "Athens",
    country: "Greece",
    region: "Attica",
    isPopular: true,
    subtitle: "Cradle of Western Civilization",
    quote:
      "Beneath the watchful gaze of the Acropolis, Athens breathes the essence of democracy and philosophy into modern Mediterranean life.",
    coordinates: {
      latitude: 37.9413,
      longitude: 23.6471,
    },
    address: "Piraeus Cruise Terminal, Athens",
    postalCode: "18538",
    timezone: "Europe/Athens",
    timezoneAbbreviation: "EET/EEST",
    additionalInfo:
      "Gateway port for Greek Isles cruises. The Port of Piraeus serves as Athens' cruise harbor, functioning as both a departure point and port of call. The Mediterranean cruise season runs from April through October. Located approximately 10km from central Athens, the port provides access to the Acropolis, Parthenon, and other iconic historical sites. Many Eastern Mediterranean and Greek Isles cruises begin or end here, with excellent connections to Athens International Airport.",
  },
  {
    city: "Santorini",
    country: "Greece",
    region: "South Aegean",
    isPopular: true,
    subtitle: "Aegean's Volcanic Crown",
    quote:
      "White-washed dreams cascade down volcanic cliffs toward waters so blue they challenge the dome of heaven itself.",
    coordinates: {
      latitude: 36.3932,
      longitude: 25.4615,
    },
    address: "Skala Pier, Fira, Santorini",
    postalCode: "84700",
    timezone: "Europe/Athens",
    timezoneAbbreviation: "EET/EEST",
    additionalInfo:
      "Iconic tender port for Greek Isles cruises. As a tender port, cruise ships anchor in the caldera and passengers are transported to shore via small boats. The cruise season runs primarily from April through October. Most visitors arrive at Skala port and take the cable car, ride donkeys, or climb the switchback steps to reach Fira town perched dramatically on the caldera rim. The island is famous for its sunset views from Oia, black sand beaches, and distinctive white-and-blue architecture.",
  },
  {
    city: "Mykonos",
    country: "Greece",
    region: "South Aegean",
    isPopular: true,
    subtitle: "Island of Winds and Dreams",
    quote:
      "Windmills stand sentinel over crystalline waters where glamour and tradition dance together beneath the Aegean sun.",
    coordinates: {
      latitude: 37.4467,
      longitude: 25.3289,
    },
    address: "New Port (Tourlos), Mykonos",
    postalCode: "84600",
    timezone: "Europe/Athens",
    timezoneAbbreviation: "EET/EEST",
    additionalInfo:
      "Popular Greek Isles cruise destination. Mykonos features two ports: the New Port at Tourlos for larger vessels and the Old Port near town where tender operations occur. The Mediterranean cruise season runs from April through October. The island is known for its iconic windmills, Little Venice waterfront district, pristine beaches, and vibrant nightlife. Regular shuttle buses connect the New Port to Mykonos Town, where narrow marble streets house upscale shops and seaside restaurants.",
  },
  {
    city: "Malta",
    country: "Malta",
    region: "Mediterranean",
    isPopular: false,
    subtitle: "Fortress Island of Knights",
    quote:
      "Honey-colored walls tell stories of crusaders and conquerors, where Mediterranean history is written in limestone and light.",
    coordinates: {
      latitude: 35.8989,
      longitude: 14.5146,
    },
    address: "Valletta Cruise Port, Valletta",
    postalCode: "VLT 1921",
    timezone: "Europe/Malta",
    timezoneAbbreviation: "CET/CEST",
    additionalInfo:
      "Historic port for Mediterranean cruise itineraries. The Valletta Cruise Port features both modern facilities and historic waterfront buildings within the Grand Harbour. The cruise season stretches from March through November with peak months in summer. The terminal is located beneath the impressive fortifications of Valletta, a UNESCO World Heritage city, with easy walking access to the capital's Baroque landmarks, cathedrals, and charming streets. Malta offers visitors a unique blend of cultures reflecting its strategic Mediterranean position.",
  },
  {
    city: "Dubrovnik",
    country: "Croatia",
    region: "Dalmatia",
    isPopular: true,
    subtitle: "Pearl of the Adriatic",
    quote:
      "Encircled by ancient walls, Dubrovnik rises from azure waters as a perfectly preserved vision of medieval maritime glory.",
    coordinates: {
      latitude: 42.6507,
      longitude: 18.0944,
    },
    address: "Port Gruž, Dubrovnik",
    postalCode: "20000",
    timezone: "Europe/Zagreb",
    timezoneAbbreviation: "CET/CEST",
    additionalInfo:
      "Highlight port for Adriatic and Eastern Mediterranean cruises. Most ships dock at Port Gruž, approximately 3km from the iconic walled Old City. The Adriatic cruise season runs from April through October, peaking in summer months. The city gained additional fame as a filming location for Game of Thrones, with tours highlighting these sites alongside historic attractions like the Stradun, city walls, and Fort Lovrijenac. Shuttle buses and taxis connect the port with the Old Town entrance.",
  },
  {
    city: "Juneau",
    country: "United States",
    region: "Alaska",
    isPopular: true,
    subtitle: "Alaska's Mountain Capital",
    quote:
      "Where rainforest meets glacier and mountains embrace the sea, Juneau stands as wilderness disguised as a city.",
    coordinates: {
      latitude: 58.3019,
      longitude: -134.4197,
    },
    address: "AJ Dock & South Franklin Street Docks, Juneau, AK",
    postalCode: "99801",
    timezone: "America/Juneau",
    timezoneAbbreviation: "AKST/AKDT",
    additionalInfo:
      "Essential port for Alaska Inside Passage cruises. Juneau's multiple dock facilities accommodate several large ships simultaneously during the Alaska cruise season from May through September. As Alaska's capital city accessed only by air or sea, Juneau offers visitors a unique blend of wilderness experiences including Mendenhall Glacier, whale watching tours, and the Mount Roberts Tramway. The compact downtown area is easily walkable from cruise berths with museums and shopping opportunities.",
  },
  {
    city: "Ketchikan",
    country: "United States",
    region: "Alaska",
    isPopular: false,
    subtitle: "Alaska's First City",
    quote:
      "Mist-shrouded totem poles and salmon-filled waters tell ancient stories in this rainforest gateway to Alaska's soul.",
    coordinates: {
      latitude: 55.3422,
      longitude: -131.6461,
    },
    address: "Ketchikan Cruise Ship Berths, Ketchikan, AK",
    postalCode: "99901",
    timezone: "America/Sitka",
    timezoneAbbreviation: "AKST/AKDT",
    additionalInfo:
      "First port of call for northbound Alaska cruises. Ketchikan features four main berths along its downtown waterfront, welcoming cruise ships during the Alaska season from May through September. Known as the 'Salmon Capital of the World', the port provides easy access to attractions including Creek Street's historic district, Misty Fjords National Monument excursions, Totem Heritage Center, and Great Alaskan Lumberjack Show. The compact downtown is immediately accessible from the cruise docks.",
  },
  {
    city: "Skagway",
    country: "United States",
    region: "Alaska",
    isPopular: false,
    subtitle: "Gateway to the Klondike",
    quote:
      "Time stands still in gold rush streets where fortune seekers once began their treacherous journey into Yukon wilderness.",
    coordinates: {
      latitude: 59.4583,
      longitude: -135.3139,
    },
    address: "Port of Skagway, Alaska",
    postalCode: "99840",
    timezone: "America/Juneau",
    timezoneAbbreviation: "AKST/AKDT",
    additionalInfo:
      "Historic gold rush port for Alaska cruises. Skagway's deep-water port accommodates multiple cruise ships during the Alaska season from May through September. The town is famous for its well-preserved gold rush history, with buildings dating to the 1898 Klondike Gold Rush. Most visitors experience the spectacular White Pass & Yukon Route Railway journey into Canada, which follows the original gold seekers' trail. The compact historic district begins just steps from the cruise docks.",
  },
  {
    city: "Sitka",
    country: "United States",
    region: "Alaska",
    isPopular: false,
    subtitle: "Alaska's Russian Jewel",
    quote:
      "Between volcanic peaks and island-studded waters, Sitka weaves Russian heritage into the vibrant tapestry of Tlingit traditions.",
    coordinates: {
      latitude: 57.0531,
      longitude: -135.33,
    },
    address: "Sitka Sound Cruise Terminal, Sitka, AK",
    postalCode: "99835",
    timezone: "America/Sitka",
    timezoneAbbreviation: "AKST/AKDT",
    additionalInfo:
      "Cultural highlight on Alaska cruise itineraries. The newer Sitka Sound Cruise Terminal accommodates larger vessels, while some smaller ships dock at the Old Sitka Dock. The Alaska cruise season runs from May through September. Unique among Alaskan ports for its Russian heritage, Sitka offers visitors attractions including St. Michael's Russian Orthodox Cathedral, Sitka National Historical Park with its totem poles, and exceptional wildlife viewing opportunities both on land and by sea.",
  },
  {
    city: "Victoria",
    country: "Canada",
    region: "British Columbia",
    isPopular: false,
    subtitle: "Garden City of the Pacific",
    quote:
      "English traditions bloom in Pacific splendor, where manicured gardens meet wild coastline under gentle island skies.",
    coordinates: {
      latitude: 48.4284,
      longitude: -123.3656,
    },
    address: "Ogden Point Cruise Terminal, Victoria, BC",
    postalCode: "V8V 1X2",
    timezone: "America/Vancouver",
    timezoneAbbreviation: "PST/PDT",
    additionalInfo:
      "Popular final port on Alaska cruises. The Ogden Point terminal handles cruise ships primarily from April through October, with many Alaska itineraries stopping here on their return journey to satisfy U.S. cabotage laws. Victoria offers visitors a distinctly British atmosphere with attractions including Butchart Gardens, the Parliament Buildings, Empress Hotel, and a charming downtown harbor area. The terminal is approximately 30 minutes walking distance from downtown, with shuttle services available.",
  },
  {
    city: "Glacier Bay",
    country: "United States",
    region: "Alaska",
    isPopular: true,
    subtitle: "Nature's Ice Sanctuary",
    quote:
      "In silent majesty, colossal ice cathedrals calve into waters where time itself seems suspended in pristine wilderness.",
    coordinates: {
      latitude: 58.6658,
      longitude: -136.9002,
    },
    address: "Glacier Bay National Park (scenic cruising only)",
    postalCode: "99826",
    timezone: "America/Juneau",
    timezoneAbbreviation: "AKST/AKDT",
    additionalInfo:
      "Premier scenic cruising destination in Alaska. Unlike regular ports, Glacier Bay is a controlled-access national park where ships cruise through spectacular fjords without docking. The Alaska cruise season runs from May through September. Park rangers board vessels to provide expert commentary as ships navigate past tidewater glaciers, snow-capped mountains, and abundant wildlife including whales, bears, and eagles. Access is strictly limited with cruise lines securing permits years in advance.",
  },
  {
    city: "Montevideo",
    country: "Uruguay",
    region: "South America",
    isPopular: false,
    subtitle: "Riverside Capital of Uruguay",
    quote:
      "Gentle plazas and historic mercados reveal the unhurried rhythm of a city where European heritage meets South American warmth.",
    coordinates: {
      latitude: -34.9011,
      longitude: -56.1645,
    },
    address: "Montevideo Cruise Terminal, Port of Montevideo",
    postalCode: "11000",
    timezone: "America/Montevideo",
    timezoneAbbreviation: "UYT/UYST",
    additionalInfo:
      "Gateway for South American cruise itineraries. The Port of Montevideo serves as both a port of call and embarkation point for regional cruises including Argentina and Brazil. The South American cruise season runs from October through March during the Southern Hemisphere summer. The terminal is conveniently located near Montevideo's Ciudad Vieja (Old Town), allowing visitors easy access to historic plazas, the Mercado del Puerto, and the city's distinctive blend of colonial and Art Deco architecture.",
  },
  {
    city: "Lima",
    country: "Peru",
    region: "South America",
    isPopular: false,
    subtitle: "City of Kings",
    quote:
      "Where desert meets ocean, Lima's colonial grandeur and culinary genius create a Pacific treasure of unexpected contrasts.",
    coordinates: {
      latitude: -12.0464,
      longitude: -77.0428,
    },
    address: "Accessed via Port of Callao, Peru",
    postalCode: "07021",
    timezone: "America/Lima",
    timezoneAbbreviation: "PET",
    additionalInfo:
      "Cultural capital accessed via Port of Callao. While Lima is slightly inland, cruise ships dock at the Port of Callao, approximately 30 minutes from the historic center. The South American cruise season runs from October through March, with many ships visiting during repositioning between the Caribbean and Alaska. The port serves as gateway to Lima's UNESCO-listed colonial center, world-renowned culinary scene, and as a starting point for excursions to Machu Picchu via flight to Cusco.",
  },
  {
    city: "Cartagena",
    country: "Colombia",
    region: "Caribbean Coast",
    isPopular: false,
    subtitle: "Walled Jewel of the Caribbean",
    quote:
      "Behind rainbow colonial walls, Cartagena's cobblestone streets whisper tales of pirates, treasures, and tropical romance.",
    coordinates: {
      latitude: 10.391,
      longitude: -75.4794,
    },
    address: "Cruise Terminal Cartagena de Indias",
    postalCode: "130001",
    timezone: "America/Bogota",
    timezoneAbbreviation: "COT",
    additionalInfo:
      "Historic port for Caribbean and Panama Canal cruises. The modern cruise terminal welcomes ships year-round with peak season from November through April. Located approximately 10 minutes by taxi from the iconic walled city, the terminal provides access to Cartagena's UNESCO-listed colonial center with its colorful buildings, vibrant plazas, and historic fortifications. The port serves as a popular stop on Panama Canal itineraries and southern Caribbean routes.",
  },
  {
    city: "Santiago",
    country: "Chile",
    region: "Central Chile",
    isPopular: false,
    subtitle: "Andean Gateway to South America",
    quote:
      "Between snow-capped sentinels and Pacific shores, Santiago balances South American vitality with sophisticated charm.",
    coordinates: {
      latitude: -33.4489,
      longitude: -70.6693,
    },
    address: "Accessed via Port of Valparaíso or San Antonio",
    postalCode: "8320000",
    timezone: "America/Santiago",
    timezoneAbbreviation: "CLT/CLST",
    additionalInfo:
      "Capital accessed via Valparaíso or San Antonio ports. Santiago itself is inland, approximately 1.5-2 hours from the cruise ports of Valparaíso or San Antonio. The South American cruise season runs from October through March. These ports serve as gateways to Santiago's cultural attractions, as well as starting points for Chilean wine country tours. Many South American circumnavigation cruises and repositioning voyages between the Pacific and Atlantic Oceans call here.",
  },
  {
    city: "Bangkok",
    country: "Thailand",
    region: "Southeast Asia",
    isPopular: true,
    subtitle: "City of Angels and Canals",
    quote:
      "Sacred temples and modern skyscrapers mirror each other in the Chao Phraya's waters, where ancient spirits embrace the future.",
    coordinates: {
      latitude: 13.7563,
      longitude: 100.5018,
    },
    address: "Accessed via Laem Chabang Port",
    postalCode: "10110",
    timezone: "Asia/Bangkok",
    timezoneAbbreviation: "ICT",
    additionalInfo:
      "Cultural capital accessed via Laem Chabang port. Though Bangkok itself is inland, cruise ships dock at Laem Chabang, approximately 2 hours away. The Southeast Asia cruise season peaks from November through March during the dry season. Most cruise lines offer organized excursions to Bangkok's highlights including the Grand Palace, Wat Pho, floating markets, and vibrant urban districts. Some smaller vessels navigate the Chao Phraya River directly into Bangkok, offering a more convenient approach.",
  },
  {
    city: "Ho Chi Minh City",
    country: "Vietnam",
    region: "Southeast Asia",
    isPopular: false,
    subtitle: "Saigon's Dynamic Spirit",
    quote:
      "Where ancient temples stand beside French boulevards and modern skyscrapers, creating a symphony of resilience and reinvention.",
    coordinates: {
      latitude: 10.8231,
      longitude: 106.6297,
    },
    address: "Accessed via Phu My Port",
    postalCode: "700000",
    timezone: "Asia/Ho_Chi_Minh",
    timezoneAbbreviation: "ICT",
    additionalInfo:
      "Vibrant metropolis accessed via Phu My port. Cruise ships dock at Phu My port, approximately 1.5-2 hours from Ho Chi Minh City center. The Southeast Asia cruise season peaks from November through March during the dry season. The port serves as gateway to the city's French colonial architecture, Vietnam War historical sites, bustling markets, and nearby Mekong Delta excursions. Some smaller vessels travel up the Saigon River, docking closer to the city center for more convenient access.",
  },
  {
    city: "Shanghai",
    country: "China",
    region: "Eastern China",
    isPopular: true,
    subtitle: "Pearl of the Orient",
    quote:
      "Across the river from yesterday, Shanghai's futuristic skyline represents China's soaring ambition reaching toward tomorrow.",
    coordinates: {
      latitude: 31.2304,
      longitude: 121.4737,
    },
    address: "Shanghai Wusongkou International Cruise Terminal",
    postalCode: "200083",
    timezone: "Asia/Shanghai",
    timezoneAbbreviation: "CST",
    additionalInfo:
      "Major cruise hub for East Asian itineraries. Shanghai features two main cruise facilities: Wusongkou International Cruise Terminal in Baoshan district for larger ships and Shanghai Port International Cruise Terminal near the city center for smaller vessels. Peak cruise seasons are spring (March-May) and fall (September-November), avoiding the summer heat and humidity. The terminals provide access to Shanghai's iconic skyline, historic Bund waterfront, ancient gardens, and modern shopping districts.",
  },
];
