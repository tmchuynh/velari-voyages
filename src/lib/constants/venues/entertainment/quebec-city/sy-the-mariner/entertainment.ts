// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "b9769e99-0dbd-4b3d-978a-b1339ebe393f",
    vesselId: "sy-the--mariner",
    type: "Karaoke",
    location: {
      deck: 7,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "256092fd-47b4-4251-ae64-25677a19fafe",
    vesselId: "sy-the--mariner",
    type: "Live Music",
    location: {
      deck: 6,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "d93c6daa-0785-4198-acd9-d1b230daea3b",
    vesselId: "sy-the--mariner",
    type: "Dancing",
    location: {
      deck: 12,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "9c97f49d-589f-44ed-a8b2-370c295347f8",
    vesselId: "sy-the--mariner",
    type: "Magic Show",
    location: {
      deck: 8,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
