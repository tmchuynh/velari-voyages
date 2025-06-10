// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "a04939b8-ae9e-46dd-aa0c-4aad2fac490d",
    vesselId: "sv-mykonos-voyager",
    type: "Game Show",
    location: {
      deck: 7,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "6cde57c2-6f3d-403a-85ff-aa93961d5e9a",
    vesselId: "sv-mykonos-voyager",
    type: "Movie Theater",
    location: {
      deck: 6,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "28715c94-f6c8-4b36-bfb1-45e02862cbbd",
    vesselId: "sv-mykonos-voyager",
    type: "Dancing",
    location: {
      deck: 10,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "6851c1f4-8582-4c50-ad8a-5ca13737eaed",
    vesselId: "sv-mykonos-voyager",
    type: "Magic Show",
    location: {
      deck: 7,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "d381d951-43ed-48d4-b676-c12bd17375af",
    vesselId: "sv-mykonos-voyager",
    type: "Live Music",
    location: {
      deck: 14,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "51e57585-919d-4325-8efc-4044dc6fefce",
    vesselId: "sv-mykonos-voyager",
    type: "Comedy",
    location: {
      deck: 8,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
