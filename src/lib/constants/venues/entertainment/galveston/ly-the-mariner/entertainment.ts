// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "fcb5b668-f5f1-490d-b38e-53167094e0a1",
    vesselId: "ly-the--mariner",
    type: "Comedy",
    location: {
      deck: 11,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "452a5a8f-ae88-4a21-866f-df91aed9dea7",
    vesselId: "ly-the--mariner",
    type: "Dancing",
    location: {
      deck: 6,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "93e8dc73-f140-40af-a7cf-d8feff00098f",
    vesselId: "ly-the--mariner",
    type: "Karaoke",
    location: {
      deck: 10,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "4e6e6e57-2206-4065-b27b-62b06e62d083",
    vesselId: "ly-the--mariner",
    type: "Live Music",
    location: {
      deck: 5,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "7106b138-b024-42cd-b123-3e45a973a898",
    vesselId: "ly-the--mariner",
    type: "Magic Show",
    location: {
      deck: 8,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "af2785e3-10c4-479b-b2bb-ab23e9a82365",
    vesselId: "ly-the--mariner",
    type: "Nightclub",
    location: {
      deck: 14,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
