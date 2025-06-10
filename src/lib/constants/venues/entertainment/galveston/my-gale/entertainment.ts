// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "d08fc7e1-5d6b-4c76-a056-27cb3e7c0833",
    vesselId: "my--gale",
    type: "Movie Theater",
    location: {
      deck: 15,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "b4cdc571-8c41-444a-97aa-6051d3f9c66c",
    vesselId: "my--gale",
    type: "Nightclub",
    location: {
      deck: 11,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "8bbfa5a1-2c70-4d90-b812-c5b66514605b",
    vesselId: "my--gale",
    type: "Dancing",
    location: {
      deck: 11,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "b51b36d8-940c-4946-b7ee-1b0962381200",
    vesselId: "my--gale",
    type: "Live Music",
    location: {
      deck: 14,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "9b66dd86-b48f-425d-8649-5682e1f9adc5",
    vesselId: "my--gale",
    type: "Game Show",
    location: {
      deck: 6,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "92a921f4-79eb-4b71-938a-3524726e082f",
    vesselId: "my--gale",
    type: "Magic Show",
    location: {
      deck: 13,
      area: "Entertainment Plaza",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
