// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "6a4e03c4-620f-4c5a-9748-d86927a2a0dc",
    vesselId: "mv--explorer",
    type: "Live Music",
    location: {
      deck: 12,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "0de9c940-6e13-4227-86c8-f94e2302178a",
    vesselId: "mv--explorer",
    type: "Dancing",
    location: {
      deck: 11,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "9cc650a4-0e88-44de-831d-af704c1a60a4",
    vesselId: "mv--explorer",
    type: "Comedy",
    location: {
      deck: 5,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "5e5570ee-f97c-4894-9420-a96fe1ba567d",
    vesselId: "mv--explorer",
    type: "Game Show",
    location: {
      deck: 13,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
