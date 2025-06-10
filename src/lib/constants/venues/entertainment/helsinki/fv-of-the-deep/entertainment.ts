// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "a5c08357-ce9c-4a8a-8a2c-35a72ec302e6",
    vesselId: "fv--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 14,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "1ac42f42-c6e0-49eb-97e8-e0c535e5a283",
    vesselId: "fv--of-the-deep",
    type: "Karaoke",
    location: {
      deck: 10,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "cdc64de3-d081-41d3-b33b-d11e1f4d585c",
    vesselId: "fv--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 8,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "4e6ea39e-6e0a-4ee9-946a-73b184184f2b",
    vesselId: "fv--of-the-deep",
    type: "Comedy",
    location: {
      deck: 15,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "50958b0b-c8a8-4358-845e-58f8e3d8ab96",
    vesselId: "fv--of-the-deep",
    type: "Game Show",
    location: {
      deck: 7,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "1e9f3e61-63bc-4de1-b20a-dfb95cb3f6b0",
    vesselId: "fv--of-the-deep",
    type: "Dancing",
    location: {
      deck: 12,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
