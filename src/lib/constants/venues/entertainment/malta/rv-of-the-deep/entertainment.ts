// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "27deb5d1-1ad5-4d21-8c7b-43f52d8fea53",
    vesselId: "rv--of-the-deep",
    type: "Karaoke",
    location: {
      deck: 7,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "971ff4ec-a28e-4694-912e-b106eb78161b",
    vesselId: "rv--of-the-deep",
    type: "Live Music",
    location: {
      deck: 12,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "d7a708ab-c576-40db-8adc-9cb352dd0b21",
    vesselId: "rv--of-the-deep",
    type: "Dancing",
    location: {
      deck: 11,
      area: "Entertainment Plaza",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "cfd74951-ea6f-4100-8789-f9b3f71100b3",
    vesselId: "rv--of-the-deep",
    type: "Comedy",
    location: {
      deck: 11,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "a8355d0f-e979-4b51-81ec-5e13ce8acd8a",
    vesselId: "rv--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 14,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "cb03d953-2e6a-4a7b-bfc8-20866c61a213",
    vesselId: "rv--of-the-deep",
    type: "Game Show",
    location: {
      deck: 15,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
