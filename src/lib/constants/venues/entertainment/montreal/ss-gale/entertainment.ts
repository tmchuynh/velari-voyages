// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "2a23c18c-0c77-4243-99c3-6afd4cb59203",
    vesselId: "ss--gale",
    type: "Magic Show",
    location: {
      deck: 6,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "4c8f211f-08d0-4f2c-a79d-b5d430df34aa",
    vesselId: "ss--gale",
    type: "Live Music",
    location: {
      deck: 11,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "fe328467-f570-44d2-ab69-23404c5e3307",
    vesselId: "ss--gale",
    type: "Dancing",
    location: {
      deck: 15,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "f106239f-5ef5-43f7-ad10-105f68f44a6d",
    vesselId: "ss--gale",
    type: "Game Show",
    location: {
      deck: 12,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "14c4f93f-2380-4dbf-ace1-4ef4cbd076d6",
    vesselId: "ss--gale",
    type: "Movie Theater",
    location: {
      deck: 6,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "536e7e7e-29db-4d02-b261-5097baae1040",
    vesselId: "ss--gale",
    type: "Comedy",
    location: {
      deck: 8,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
