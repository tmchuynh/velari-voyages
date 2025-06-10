// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "a3661e6d-b9b9-48b0-9aa8-d48b11809731",
    vesselId: "ly--of-the-deep",
    type: "Karaoke",
    location: {
      deck: 14,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "9935636d-d806-4193-b5a9-18bb457cbc45",
    vesselId: "ly--of-the-deep",
    type: "Game Show",
    location: {
      deck: 8,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "2668d85c-bb7f-4fcc-8d3f-d9020324ba4c",
    vesselId: "ly--of-the-deep",
    type: "Live Music",
    location: {
      deck: 10,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "0c119602-0662-4df2-95e9-847d82e05cf5",
    vesselId: "ly--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 12,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
