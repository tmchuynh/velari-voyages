// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "c486608f-2a71-4215-aa74-2795f86a822e",
    vesselId: "fv--explorer",
    type: "Live Music",
    location: {
      deck: 10,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "cec47ebf-df66-4169-bdf8-b59fe769d77d",
    vesselId: "fv--explorer",
    type: "Karaoke",
    location: {
      deck: 6,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "23903639-4e7e-4548-bbf6-7171d18c53e5",
    vesselId: "fv--explorer",
    type: "Game Show",
    location: {
      deck: 11,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "6fd95d03-216f-4706-b6d5-59ef1c83b949",
    vesselId: "fv--explorer",
    type: "Nightclub",
    location: {
      deck: 9,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "18850b2a-5fc2-48e0-83de-f838a82a5914",
    vesselId: "fv--explorer",
    type: "Dancing",
    location: {
      deck: 13,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  }
];
