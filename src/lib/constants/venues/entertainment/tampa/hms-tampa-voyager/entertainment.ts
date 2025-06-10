// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "6464d8fb-7d4a-4b93-baf2-7f990bab89b8",
    vesselId: "hms-tampa-voyager",
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
    id: "73d3a992-9e90-404e-a1f5-1594ef8ae395",
    vesselId: "hms-tampa-voyager",
    type: "Game Show",
    location: {
      deck: 12,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "8aa0caad-35bc-4140-b12b-efdc3366ec9d",
    vesselId: "hms-tampa-voyager",
    type: "Movie Theater",
    location: {
      deck: 14,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "5441683a-3344-4a9f-9ea3-82137aa675eb",
    vesselId: "hms-tampa-voyager",
    type: "Nightclub",
    location: {
      deck: 13,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "dfdf804a-ce6e-4c52-97f9-06e79dfb64b4",
    vesselId: "hms-tampa-voyager",
    type: "Dancing",
    location: {
      deck: 14,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "346447bc-dadb-4371-bea5-c88e049e315f",
    vesselId: "hms-tampa-voyager",
    type: "Magic Show",
    location: {
      deck: 13,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "7e7b7db8-b49c-44e1-9ae0-c47706fbe0c1",
    vesselId: "hms-tampa-voyager",
    type: "Comedy",
    location: {
      deck: 12,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
