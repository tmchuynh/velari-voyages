// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "d3c75271-0a81-4efc-96b0-d78ddaa43b69",
    vesselId: "cs--explorer",
    type: "Live Music",
    location: {
      deck: 10,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "3f876dfb-a5d3-4272-beb2-1da2c0764bcb",
    vesselId: "cs--explorer",
    type: "Nightclub",
    location: {
      deck: 10,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "88281876-01f6-4449-9908-3de93e131dd9",
    vesselId: "cs--explorer",
    type: "Dancing",
    location: {
      deck: 7,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "1fdc3246-80e0-4e11-bb42-41d838964531",
    vesselId: "cs--explorer",
    type: "Karaoke",
    location: {
      deck: 7,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "dbf571ec-fe67-4355-8d64-976945d0e823",
    vesselId: "cs--explorer",
    type: "Movie Theater",
    location: {
      deck: 9,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
