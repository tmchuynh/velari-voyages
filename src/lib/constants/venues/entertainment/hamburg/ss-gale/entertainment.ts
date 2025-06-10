// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "6efcf4a3-18ef-4c0b-8f6c-8c492c117c56",
    vesselId: "ss--gale",
    type: "Movie Theater",
    location: {
      deck: 11,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "7e268969-c230-4ae7-9d8c-b0fbcc39cb46",
    vesselId: "ss--gale",
    type: "Nightclub",
    location: {
      deck: 15,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "3bdf93a7-086d-4448-a572-83057de52691",
    vesselId: "ss--gale",
    type: "Karaoke",
    location: {
      deck: 9,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "cf50d5b7-0d42-4b6b-b602-5dfb30dee9d5",
    vesselId: "ss--gale",
    type: "Live Music",
    location: {
      deck: 5,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "01955588-ca6a-4b4b-9833-2b2c00e2c45d",
    vesselId: "ss--gale",
    type: "Dancing",
    location: {
      deck: 13,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "f06434d5-1752-4a7d-87be-ef14bb53b1d6",
    vesselId: "ss--gale",
    type: "Comedy",
    location: {
      deck: 11,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
