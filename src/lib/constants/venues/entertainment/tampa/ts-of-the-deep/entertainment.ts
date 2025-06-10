// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "c20762b7-1f6e-416a-b250-e0598a3abc2d",
    vesselId: "ts--of-the-deep",
    type: "Karaoke",
    location: {
      deck: 10,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "bbabbf35-e751-449b-889e-2bd6cd923ba9",
    vesselId: "ts--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 12,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "06b13742-4f9f-4794-ab2c-a4161a77e3f6",
    vesselId: "ts--of-the-deep",
    type: "Movie Theater",
    location: {
      deck: 8,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "033e6d2d-42c8-444d-b61b-74d22830f1f2",
    vesselId: "ts--of-the-deep",
    type: "Game Show",
    location: {
      deck: 14,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "75d87b3e-f376-42ad-8b64-ae360d59454c",
    vesselId: "ts--of-the-deep",
    type: "Comedy",
    location: {
      deck: 5,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
