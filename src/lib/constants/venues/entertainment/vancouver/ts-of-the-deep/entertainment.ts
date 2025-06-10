// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "fc39ccb6-84f5-4535-844e-2e6d4af31328",
    vesselId: "ts--of-the-deep",
    type: "Live Music",
    location: {
      deck: 5,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "d5024cfe-75cb-45b4-905e-289e06f99ac2",
    vesselId: "ts--of-the-deep",
    type: "Game Show",
    location: {
      deck: 9,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "85f412c7-108a-44a1-9763-db3fc6035a15",
    vesselId: "ts--of-the-deep",
    type: "Dancing",
    location: {
      deck: 15,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "69e2cb50-072d-4621-8c48-47dcc161370e",
    vesselId: "ts--of-the-deep",
    type: "Karaoke",
    location: {
      deck: 12,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  }
];
