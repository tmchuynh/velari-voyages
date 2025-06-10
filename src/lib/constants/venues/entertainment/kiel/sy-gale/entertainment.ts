// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "824f0e09-86f0-4600-8ad5-156dcb27eab8",
    vesselId: "sy--gale",
    type: "Magic Show",
    location: {
      deck: 8,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "636c61f5-4927-436e-acd3-c28aa7094ef3",
    vesselId: "sy--gale",
    type: "Game Show",
    location: {
      deck: 11,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "a449d4f2-c892-4bb9-b56b-d23a8914ec09",
    vesselId: "sy--gale",
    type: "Nightclub",
    location: {
      deck: 5,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "35bfb08a-fe91-4efe-9140-fc5846f77b60",
    vesselId: "sy--gale",
    type: "Live Music",
    location: {
      deck: 15,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "eb79cd07-eb09-41ca-b00b-1e33c3521353",
    vesselId: "sy--gale",
    type: "Comedy",
    location: {
      deck: 7,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "aea57957-eb80-4d64-a4fd-c203a4fc55a3",
    vesselId: "sy--gale",
    type: "Karaoke",
    location: {
      deck: 10,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
