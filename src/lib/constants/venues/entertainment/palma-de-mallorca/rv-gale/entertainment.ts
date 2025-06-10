// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "072f2b69-6456-42f6-9767-abc271a11869",
    vesselId: "rv--gale",
    type: "Game Show",
    location: {
      deck: 12,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "b00febd4-8f99-4120-bb50-f17bc8c2f1aa",
    vesselId: "rv--gale",
    type: "Comedy",
    location: {
      deck: 15,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "5a92a67a-e4eb-44ef-b009-dc1273728988",
    vesselId: "rv--gale",
    type: "Dancing",
    location: {
      deck: 10,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "212349f6-9365-484a-95ab-c7422d0343aa",
    vesselId: "rv--gale",
    type: "Live Music",
    location: {
      deck: 5,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  }
];
