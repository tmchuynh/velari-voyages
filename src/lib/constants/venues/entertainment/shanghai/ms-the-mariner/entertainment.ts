// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "f145e234-2c48-4e52-9dfc-47b6dec329e5",
    vesselId: "ms-the--mariner",
    type: "Comedy",
    location: {
      deck: 9,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "d60057e4-2c21-4e53-b9c8-e044a2fad821",
    vesselId: "ms-the--mariner",
    type: "Nightclub",
    location: {
      deck: 15,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "38b40ba7-33ae-4b31-bd14-e478a640add6",
    vesselId: "ms-the--mariner",
    type: "Dancing",
    location: {
      deck: 10,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "62906f92-1db1-4440-bb18-97d105b68685",
    vesselId: "ms-the--mariner",
    type: "Karaoke",
    location: {
      deck: 10,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "af62242c-d033-4d16-b47c-abd5572f787b",
    vesselId: "ms-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 5,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "1d349c85-7d9a-4197-86c1-d9ea2ab8a743",
    vesselId: "ms-the--mariner",
    type: "Game Show",
    location: {
      deck: 9,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
