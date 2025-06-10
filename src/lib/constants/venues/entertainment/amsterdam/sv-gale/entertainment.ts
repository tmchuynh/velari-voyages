// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "5d02b488-54b1-499d-a9a2-7f3b111d96a4",
    vesselId: "sv--gale",
    type: "Movie Theater",
    location: {
      deck: 13,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "fca1f3ad-9297-4126-9753-5df446f449c9",
    vesselId: "sv--gale",
    type: "Game Show",
    location: {
      deck: 6,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "13026185-3f70-4092-bc64-a4b3ef48a21c",
    vesselId: "sv--gale",
    type: "Nightclub",
    location: {
      deck: 15,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "6e3f7458-13fa-4d3a-8c89-904cc20ba0c1",
    vesselId: "sv--gale",
    type: "Karaoke",
    location: {
      deck: 10,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
