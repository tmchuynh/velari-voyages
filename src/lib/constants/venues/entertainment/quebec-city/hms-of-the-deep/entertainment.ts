// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "151d564e-7e9b-4af6-985d-7c7a37b78d81",
    vesselId: "hms--of-the-deep",
    type: "Live Music",
    location: {
      deck: 14,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "dbba3324-d57c-4004-abf6-3734a98ccc82",
    vesselId: "hms--of-the-deep",
    type: "Karaoke",
    location: {
      deck: 15,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "1ea8447e-deb6-404c-a765-bde72225080a",
    vesselId: "hms--of-the-deep",
    type: "Comedy",
    location: {
      deck: 5,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "84ac2789-53dd-4c9b-adbd-243e7f2b2fdd",
    vesselId: "hms--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 7,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "7a7fdd1f-f20d-462a-85b9-424672dba2f0",
    vesselId: "hms--of-the-deep",
    type: "Game Show",
    location: {
      deck: 10,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "642288ec-153f-4302-b41d-652efefa54d1",
    vesselId: "hms--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 14,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
