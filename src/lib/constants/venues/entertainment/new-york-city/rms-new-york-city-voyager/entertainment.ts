// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "84621dc4-e2a9-4260-bac9-1698135338e6",
    vesselId: "rms-new-york-city-voyager",
    type: "Comedy",
    location: {
      deck: 10,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "88946e56-47d2-49db-a9f6-a6fea26bb8e0",
    vesselId: "rms-new-york-city-voyager",
    type: "Dancing",
    location: {
      deck: 9,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "cf308c45-778e-4282-8272-03a65aeb29e5",
    vesselId: "rms-new-york-city-voyager",
    type: "Karaoke",
    location: {
      deck: 9,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "0f44236b-cd53-4d50-95c2-10493ac2292f",
    vesselId: "rms-new-york-city-voyager",
    type: "Movie Theater",
    location: {
      deck: 9,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "bd092fee-56e9-406d-a9cc-3144cf18c3b8",
    vesselId: "rms-new-york-city-voyager",
    type: "Game Show",
    location: {
      deck: 14,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "e13f51ac-ba08-4d13-99ab-aecca2efc422",
    vesselId: "rms-new-york-city-voyager",
    type: "Nightclub",
    location: {
      deck: 13,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
