// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "8553243f-4864-4f9e-8317-7c9f5deefb82",
    vesselId: "ms--explorer",
    type: "Comedy",
    location: {
      deck: 15,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "dbf74108-b2b7-483b-bbf7-8ef03bf39243",
    vesselId: "ms--explorer",
    type: "Movie Theater",
    location: {
      deck: 8,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "f1ffc99b-fc30-4ae2-98f0-28b0bf8afc1a",
    vesselId: "ms--explorer",
    type: "Magic Show",
    location: {
      deck: 5,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "5e5faedd-fef9-4243-8548-92241076d2a2",
    vesselId: "ms--explorer",
    type: "Dancing",
    location: {
      deck: 12,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "85faa5a2-2c67-4e47-b3c2-b8f2b60dbf1b",
    vesselId: "ms--explorer",
    type: "Nightclub",
    location: {
      deck: 5,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "e6615ab9-8b0d-450d-8b8b-7f077b74b3c5",
    vesselId: "ms--explorer",
    type: "Karaoke",
    location: {
      deck: 11,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
