// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "87cd2ca3-ea5f-4795-97a2-0ef0f172a180",
    vesselId: "cs--explorer",
    type: "Dancing",
    location: {
      deck: 8,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "8b4c92d5-c188-4f3e-93ec-0917c879faff",
    vesselId: "cs--explorer",
    type: "Live Music",
    location: {
      deck: 7,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "198a9dbe-ef48-4b8e-84e9-597151fb2e28",
    vesselId: "cs--explorer",
    type: "Karaoke",
    location: {
      deck: 9,
      area: "Entertainment Plaza",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "d45874c6-154d-49a2-acc9-7000c20b3caa",
    vesselId: "cs--explorer",
    type: "Nightclub",
    location: {
      deck: 7,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "c2ac85b2-54ac-4916-84a3-d064408d616d",
    vesselId: "cs--explorer",
    type: "Comedy",
    location: {
      deck: 11,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
