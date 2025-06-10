// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "08616621-9b8d-4757-a9d7-ec860f209481",
    vesselId: "rms--gale",
    type: "Karaoke",
    location: {
      deck: 13,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "7e4f4b38-1447-4dff-84cd-a4a2418671d0",
    vesselId: "rms--gale",
    type: "Game Show",
    location: {
      deck: 12,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "23454ae9-78c0-4f68-8827-27a6ad3e7167",
    vesselId: "rms--gale",
    type: "Comedy",
    location: {
      deck: 15,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "f6452343-80e9-43ac-a8be-6031a10e56e1",
    vesselId: "rms--gale",
    type: "Nightclub",
    location: {
      deck: 9,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "072deb66-25dd-4274-aac5-e6a5a41f3d52",
    vesselId: "rms--gale",
    type: "Movie Theater",
    location: {
      deck: 11,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "626d185d-a24c-48e9-986f-976479097d03",
    vesselId: "rms--gale",
    type: "Magic Show",
    location: {
      deck: 14,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  }
];
