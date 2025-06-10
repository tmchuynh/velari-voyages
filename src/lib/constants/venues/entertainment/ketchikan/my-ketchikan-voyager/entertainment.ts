// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "708cb5be-48f3-4d68-acb1-8faffbaad44c",
    vesselId: "my-ketchikan-voyager",
    type: "Live Music",
    location: {
      deck: 15,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "2fd4a6e5-cedb-48dc-a306-f5e1c7c9d876",
    vesselId: "my-ketchikan-voyager",
    type: "Karaoke",
    location: {
      deck: 11,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "92dd31ec-209e-44d2-8e57-7910606bdda6",
    vesselId: "my-ketchikan-voyager",
    type: "Dancing",
    location: {
      deck: 8,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "2fb40891-54ed-409c-a4af-49d94e0b5b7e",
    vesselId: "my-ketchikan-voyager",
    type: "Magic Show",
    location: {
      deck: 12,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "d0b5d4ec-40f6-4380-9a08-bf8be39c0866",
    vesselId: "my-ketchikan-voyager",
    type: "Game Show",
    location: {
      deck: 8,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "4b74e0f0-f3d9-407b-a5cb-fa78782f9961",
    vesselId: "my-ketchikan-voyager",
    type: "Movie Theater",
    location: {
      deck: 8,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
