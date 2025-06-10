// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "bc05964b-8bb6-47f3-b87c-8735ee6d1b26",
    vesselId: "ss--gale",
    type: "Magic Show",
    location: {
      deck: 10,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "075fa845-30a1-4dda-8c15-07046c6e74ca",
    vesselId: "ss--gale",
    type: "Dancing",
    location: {
      deck: 15,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "59b1bf60-7e49-4037-b905-cd70f989515d",
    vesselId: "ss--gale",
    type: "Nightclub",
    location: {
      deck: 15,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "0b54acd2-39bc-452e-b404-d659ef9f1fec",
    vesselId: "ss--gale",
    type: "Movie Theater",
    location: {
      deck: 7,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  }
];
