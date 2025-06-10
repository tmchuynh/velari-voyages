// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "a16dadb4-01cf-4a18-8da9-6349cc049826",
    vesselId: "ps-the--mariner",
    type: "Karaoke",
    location: {
      deck: 14,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "78f7ff78-21f6-49e4-8112-88839bb839f7",
    vesselId: "ps-the--mariner",
    type: "Live Music",
    location: {
      deck: 10,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "0d821c79-dcbb-4c26-ab6a-7f9ef9c08d93",
    vesselId: "ps-the--mariner",
    type: "Comedy",
    location: {
      deck: 10,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "dffbf2ba-db7c-40b3-9184-3c918af501e7",
    vesselId: "ps-the--mariner",
    type: "Dancing",
    location: {
      deck: 15,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "8bdf8dd7-3654-49df-9193-7ff3aa7d2270",
    vesselId: "ps-the--mariner",
    type: "Nightclub",
    location: {
      deck: 5,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
