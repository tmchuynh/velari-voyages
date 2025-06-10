// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "b890b33e-7f82-43c8-8228-90256e51ab99",
    vesselId: "cs-rome-voyager",
    type: "Live Music",
    location: {
      deck: 7,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "d9b7846d-0c39-48fd-8769-d044ce6ac85c",
    vesselId: "cs-rome-voyager",
    type: "Dancing",
    location: {
      deck: 15,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "d4cfbfdd-7d54-4705-956f-caf885309c3a",
    vesselId: "cs-rome-voyager",
    type: "Nightclub",
    location: {
      deck: 13,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "53eab88a-7249-419e-8f3c-f2206287f069",
    vesselId: "cs-rome-voyager",
    type: "Game Show",
    location: {
      deck: 13,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "54f5f89d-085b-4bad-a26e-262028bc0229",
    vesselId: "cs-rome-voyager",
    type: "Movie Theater",
    location: {
      deck: 8,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
