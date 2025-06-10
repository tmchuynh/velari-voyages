// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "54447de7-6942-4779-a014-b682e3860e52",
    vesselId: "sy--of-the-deep",
    type: "Movie Theater",
    location: {
      deck: 12,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "bd4eade8-d0fa-45b0-8d3c-c75d254d5466",
    vesselId: "sy--of-the-deep",
    type: "Live Music",
    location: {
      deck: 13,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "0c6d0061-8ebe-49a3-afcf-29be99b3fd59",
    vesselId: "sy--of-the-deep",
    type: "Comedy",
    location: {
      deck: 15,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "834b95b5-05c6-4cd5-99e0-a207cabc4ec3",
    vesselId: "sy--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 11,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "efc886a9-3e72-473f-a72c-3deb33b2cd54",
    vesselId: "sy--of-the-deep",
    type: "Game Show",
    location: {
      deck: 8,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "504efd38-8979-4a22-8e0b-5127e9d9d05f",
    vesselId: "sy--of-the-deep",
    type: "Dancing",
    location: {
      deck: 13,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  }
];
