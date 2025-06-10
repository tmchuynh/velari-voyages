// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "4b2d2007-59bf-48e8-bcf3-db999e184beb",
    vesselId: "hms-sydney-voyager",
    type: "Magic Show",
    location: {
      deck: 12,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "80735527-2503-4ab1-b996-abe6163e98f0",
    vesselId: "hms-sydney-voyager",
    type: "Live Music",
    location: {
      deck: 8,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "aa096ce0-70fc-4176-b6ff-3d9457be96de",
    vesselId: "hms-sydney-voyager",
    type: "Game Show",
    location: {
      deck: 6,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "23b2ee6b-53c3-4a7f-bb42-d42b5d2abb26",
    vesselId: "hms-sydney-voyager",
    type: "Karaoke",
    location: {
      deck: 9,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: false,
  }
];
