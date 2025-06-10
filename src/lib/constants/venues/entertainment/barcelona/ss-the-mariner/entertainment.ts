// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "75a71a76-a12a-418d-b4e6-db8fbb8972d1",
    vesselId: "ss-the--mariner",
    type: "Live Music",
    location: {
      deck: 5,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "fe35a462-6e42-4251-9c2f-63f40c22e656",
    vesselId: "ss-the--mariner",
    type: "Comedy",
    location: {
      deck: 6,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "384d9228-68e7-472d-8e5e-ba171d473a5c",
    vesselId: "ss-the--mariner",
    type: "Game Show",
    location: {
      deck: 9,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "29b3ead9-a13f-4932-ad48-880c8fec2080",
    vesselId: "ss-the--mariner",
    type: "Magic Show",
    location: {
      deck: 5,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "ad712da7-2a62-4510-99b5-9ca3f5bfa1e6",
    vesselId: "ss-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 15,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: false,
  }
];
