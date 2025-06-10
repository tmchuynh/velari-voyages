// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "aee701f2-2076-4a5a-9120-303a2f1dec73",
    vesselId: "mv--explorer",
    type: "Magic Show",
    location: {
      deck: 9,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "f081b1ff-b64c-4227-bb1e-02367ea6bc74",
    vesselId: "mv--explorer",
    type: "Game Show",
    location: {
      deck: 10,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "2d986734-86ec-4c23-8e24-02617c63e457",
    vesselId: "mv--explorer",
    type: "Nightclub",
    location: {
      deck: 9,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "0d319f25-7d20-48d2-9981-40ea98763d4d",
    vesselId: "mv--explorer",
    type: "Comedy",
    location: {
      deck: 8,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  }
];
