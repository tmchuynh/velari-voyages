// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "3250bf1c-e564-4a4d-9d43-ade1810fe799",
    vesselId: "fv--gale",
    type: "Live Music",
    location: {
      deck: 11,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "7437050b-9034-4158-8ea7-caa44677fd50",
    vesselId: "fv--gale",
    type: "Dancing",
    location: {
      deck: 9,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "e6c142f8-febe-4228-a465-e852cb71f77a",
    vesselId: "fv--gale",
    type: "Magic Show",
    location: {
      deck: 5,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "cb0d4738-5b21-497c-92e1-cdb86ac5eb8b",
    vesselId: "fv--gale",
    type: "Movie Theater",
    location: {
      deck: 13,
      area: "Entertainment Plaza",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "41cf16d8-a94e-441c-8bca-3f670084fa13",
    vesselId: "fv--gale",
    type: "Karaoke",
    location: {
      deck: 6,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
