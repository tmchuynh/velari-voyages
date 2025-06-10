// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "896aba68-9d25-40b3-a3ec-8bad86514dbb",
    vesselId: "ps-the--mariner",
    type: "Magic Show",
    location: {
      deck: 10,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "695d383d-9309-403a-90fa-eb5dd506ef56",
    vesselId: "ps-the--mariner",
    type: "Dancing",
    location: {
      deck: 8,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "fad00e45-8b9a-4f9f-9b74-c4ba591d6c7a",
    vesselId: "ps-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 7,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "14e0dd7d-8dcf-4565-bd15-64bb17015b11",
    vesselId: "ps-the--mariner",
    type: "Nightclub",
    location: {
      deck: 10,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "eaa1a49a-d7ee-4b86-ba34-7d98c4247e59",
    vesselId: "ps-the--mariner",
    type: "Game Show",
    location: {
      deck: 10,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "6f6480be-9a89-4334-9c74-6ee8ca4715a8",
    vesselId: "ps-the--mariner",
    type: "Live Music",
    location: {
      deck: 7,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
