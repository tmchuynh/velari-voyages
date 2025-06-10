// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "7f5f9030-6241-4600-94b8-604b97f8762f",
    vesselId: "hms--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 10,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "9fba11b1-c5e3-48ec-8057-f798442cba86",
    vesselId: "hms--of-the-deep",
    type: "Karaoke",
    location: {
      deck: 10,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "56e9923d-7487-4a26-ba7c-23ab220f11f4",
    vesselId: "hms--of-the-deep",
    type: "Live Music",
    location: {
      deck: 10,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "e911fb07-3916-4954-a9e7-0243974bf8ef",
    vesselId: "hms--of-the-deep",
    type: "Movie Theater",
    location: {
      deck: 7,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "4a6d8d24-f198-4215-a3a0-25f744c2992b",
    vesselId: "hms--of-the-deep",
    type: "Comedy",
    location: {
      deck: 12,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
