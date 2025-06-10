// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "f82746c2-6dba-434e-b2e6-5dd3b5f384fc",
    vesselId: "rms--of-the-deep",
    type: "Live Music",
    location: {
      deck: 12,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "2782f29d-6b3b-4cd0-b404-c2bdfbd83207",
    vesselId: "rms--of-the-deep",
    type: "Movie Theater",
    location: {
      deck: 10,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "f10f19d5-c849-4b1e-986c-46e4645828ea",
    vesselId: "rms--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 15,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "7d4260e7-f823-4894-a2e9-cf4431b1635d",
    vesselId: "rms--of-the-deep",
    type: "Game Show",
    location: {
      deck: 15,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "ff641e9c-9d65-4894-8ce4-780d40e3b483",
    vesselId: "rms--of-the-deep",
    type: "Karaoke",
    location: {
      deck: 7,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "ceaed95d-4eb5-4e57-98a7-4a76b65f5fb1",
    vesselId: "rms--of-the-deep",
    type: "Dancing",
    location: {
      deck: 13,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
