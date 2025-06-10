// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "7e05488b-e658-4233-b7cf-c0f9025c4170",
    vesselId: "ss--gale",
    type: "Dancing",
    location: {
      deck: 5,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "5bb3c5ca-e744-4147-ac3a-44e348ef2426",
    vesselId: "ss--gale",
    type: "Comedy",
    location: {
      deck: 6,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "2ce415bb-aa2e-42b9-a538-d1dd5ec36c32",
    vesselId: "ss--gale",
    type: "Movie Theater",
    location: {
      deck: 7,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "d7fb387d-71f6-4be6-a5bb-86f68b2fd491",
    vesselId: "ss--gale",
    type: "Nightclub",
    location: {
      deck: 9,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "a33c5668-4a7c-4722-ad62-5795917e84ec",
    vesselId: "ss--gale",
    type: "Live Music",
    location: {
      deck: 10,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "88da2564-add0-46ae-8d19-8af0922abfce",
    vesselId: "ss--gale",
    type: "Magic Show",
    location: {
      deck: 9,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
