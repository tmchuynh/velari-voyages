// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "47199a8b-ae32-4f1e-acbd-40db5e57af39",
    vesselId: "sv-the--mariner",
    type: "Live Music",
    location: {
      deck: 8,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "2e1848db-2626-4df9-947b-ddb911678b37",
    vesselId: "sv-the--mariner",
    type: "Game Show",
    location: {
      deck: 10,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "6cff45c5-ff35-45a3-ad6b-f64faa72abed",
    vesselId: "sv-the--mariner",
    type: "Nightclub",
    location: {
      deck: 9,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "337d6bc2-8656-4e40-9d20-ae3ee50b4f55",
    vesselId: "sv-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 8,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "4dfc537d-2caf-4852-b541-7fea5a3dbd53",
    vesselId: "sv-the--mariner",
    type: "Dancing",
    location: {
      deck: 6,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "41a584de-c1ad-4208-85b8-db1aabb4d7a4",
    vesselId: "sv-the--mariner",
    type: "Karaoke",
    location: {
      deck: 9,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
