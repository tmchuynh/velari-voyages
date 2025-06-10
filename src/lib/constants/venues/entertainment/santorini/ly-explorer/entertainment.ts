// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "ed688539-f7dd-4509-bf17-69c3e8d0a446",
    vesselId: "ly--explorer",
    type: "Game Show",
    location: {
      deck: 5,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "324843ea-7186-404a-b729-6bd143e7dead",
    vesselId: "ly--explorer",
    type: "Live Music",
    location: {
      deck: 11,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "bc602d9b-8cfe-4635-bc39-f0a1419b7567",
    vesselId: "ly--explorer",
    type: "Karaoke",
    location: {
      deck: 8,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "0b2ff777-e4db-43bd-8bdf-1fc9458378ee",
    vesselId: "ly--explorer",
    type: "Magic Show",
    location: {
      deck: 14,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
