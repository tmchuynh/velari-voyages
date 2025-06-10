// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "ee05c7e7-1f32-4ae0-863e-319d6da8862c",
    vesselId: "sv--gale",
    type: "Movie Theater",
    location: {
      deck: 14,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "2fc5c375-028a-455d-9d19-e2908af7c998",
    vesselId: "sv--gale",
    type: "Live Music",
    location: {
      deck: 15,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "b16b3f15-8cf7-48de-8f5b-f02ab8e5d522",
    vesselId: "sv--gale",
    type: "Karaoke",
    location: {
      deck: 14,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "18ad7018-f21a-4936-b6b0-380e37dc9589",
    vesselId: "sv--gale",
    type: "Magic Show",
    location: {
      deck: 7,
      area: "Entertainment Plaza",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "80c76670-dfe9-46da-a47e-1a7b68dee305",
    vesselId: "sv--gale",
    type: "Dancing",
    location: {
      deck: 6,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  }
];
