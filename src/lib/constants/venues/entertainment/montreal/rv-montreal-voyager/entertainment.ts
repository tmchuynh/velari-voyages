// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "0063ec36-1cef-45af-b5ed-0257c2187224",
    vesselId: "rv-montreal-voyager",
    type: "Movie Theater",
    location: {
      deck: 15,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "c970106e-81df-4dee-b314-b488321f368e",
    vesselId: "rv-montreal-voyager",
    type: "Magic Show",
    location: {
      deck: 14,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "08d104b7-088f-4490-b557-847db0010805",
    vesselId: "rv-montreal-voyager",
    type: "Live Music",
    location: {
      deck: 10,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "d3ef1502-f435-4ad1-9df9-ee2ca7bcb12a",
    vesselId: "rv-montreal-voyager",
    type: "Karaoke",
    location: {
      deck: 15,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "36cfb2dd-2282-4832-8a98-90c3fa64b8bb",
    vesselId: "rv-montreal-voyager",
    type: "Nightclub",
    location: {
      deck: 7,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "6c0c4667-ac81-45cb-a93c-d88e171dcbf3",
    vesselId: "rv-montreal-voyager",
    type: "Comedy",
    location: {
      deck: 5,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
