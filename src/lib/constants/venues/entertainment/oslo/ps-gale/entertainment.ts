// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "f33867cf-8b5b-4e14-9bb5-4ff1c48952cc",
    vesselId: "ps--gale",
    type: "Game Show",
    location: {
      deck: 6,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "958be222-d921-4860-a380-b5d99ea5617d",
    vesselId: "ps--gale",
    type: "Comedy",
    location: {
      deck: 5,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "9f27c3ec-52c7-4912-ba09-204264808ecc",
    vesselId: "ps--gale",
    type: "Karaoke",
    location: {
      deck: 5,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "9f9d3948-12db-4f48-b07c-42ef72d8464a",
    vesselId: "ps--gale",
    type: "Movie Theater",
    location: {
      deck: 10,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  }
];
