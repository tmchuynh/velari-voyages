// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "1bc95912-630b-4725-9bc4-85cd8a6ed67e",
    vesselId: "rms--gale",
    type: "Comedy",
    location: {
      deck: 15,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "20946658-9907-42a5-ad48-9bf84652d806",
    vesselId: "rms--gale",
    type: "Dancing",
    location: {
      deck: 9,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "0ccb1c57-bb45-4338-84ba-e75569e72f37",
    vesselId: "rms--gale",
    type: "Movie Theater",
    location: {
      deck: 8,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "a0042e8e-36f2-43db-8d92-f123184d5b5e",
    vesselId: "rms--gale",
    type: "Karaoke",
    location: {
      deck: 5,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "0ed095c0-5d28-490a-9a32-cd14c2eeec93",
    vesselId: "rms--gale",
    type: "Nightclub",
    location: {
      deck: 5,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "d4f96b27-36ec-4711-9b6e-77758f698c1a",
    vesselId: "rms--gale",
    type: "Game Show",
    location: {
      deck: 11,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
