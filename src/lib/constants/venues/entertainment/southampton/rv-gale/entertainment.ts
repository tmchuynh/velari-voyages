// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "a6dfac23-437d-4990-b563-a2ef2d1445ba",
    vesselId: "rv--gale",
    type: "Game Show",
    location: {
      deck: 8,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "bd8db6b0-f5ed-4428-ae2d-6b4110d4549a",
    vesselId: "rv--gale",
    type: "Comedy",
    location: {
      deck: 15,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "527ee88e-ebb3-457c-b39b-606493a33376",
    vesselId: "rv--gale",
    type: "Karaoke",
    location: {
      deck: 7,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "00a46239-b7d8-41ac-9d77-fa0012993d69",
    vesselId: "rv--gale",
    type: "Nightclub",
    location: {
      deck: 12,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "8afff707-9449-4c57-9ace-0d5e4b1c4bd1",
    vesselId: "rv--gale",
    type: "Live Music",
    location: {
      deck: 15,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "267b4f7f-5f9e-4436-bb72-4b390e2b2fed",
    vesselId: "rv--gale",
    type: "Movie Theater",
    location: {
      deck: 11,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  }
];
