// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "602159ae-e9d9-4f0c-8a0e-ebdcda898e1a",
    vesselId: "ts--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 10,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "08203a26-2e0c-4971-b350-2a51db5cdeed",
    vesselId: "ts--of-the-deep",
    type: "Karaoke",
    location: {
      deck: 8,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "7da0dca1-733c-4bba-8b27-a9213ab24055",
    vesselId: "ts--of-the-deep",
    type: "Movie Theater",
    location: {
      deck: 9,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "eb14829b-9cf6-4c9c-a2e3-3c5d5535589c",
    vesselId: "ts--of-the-deep",
    type: "Game Show",
    location: {
      deck: 6,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "541059ff-6475-4f9b-ae07-8c8cafdb94f6",
    vesselId: "ts--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 6,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "d3263611-0d7b-4bf9-9c1e-9c6d51b4aa62",
    vesselId: "ts--of-the-deep",
    type: "Comedy",
    location: {
      deck: 12,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  }
];
