// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "3cd4c2c3-21a9-452e-a4e8-c6237c4e5aa5",
    vesselId: "mv-the--mariner",
    type: "Game Show",
    location: {
      deck: 11,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "2128a35d-3ee5-4713-b0e9-aca8f9088332",
    vesselId: "mv-the--mariner",
    type: "Magic Show",
    location: {
      deck: 12,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "1c722868-e649-4651-ab8b-6e5c02c4c810",
    vesselId: "mv-the--mariner",
    type: "Karaoke",
    location: {
      deck: 10,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "bc5794ea-44d9-4a3a-9e53-2053b24de15d",
    vesselId: "mv-the--mariner",
    type: "Live Music",
    location: {
      deck: 9,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "bc1604ad-31a2-40a5-ae96-e326dea4478e",
    vesselId: "mv-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 11,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "59fa461b-3d1b-48ce-8e06-57c5ecee4d6c",
    vesselId: "mv-the--mariner",
    type: "Dancing",
    location: {
      deck: 15,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
