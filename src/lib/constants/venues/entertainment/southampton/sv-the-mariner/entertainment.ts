// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "3c15633a-7d08-473b-8ff5-5f91b0707b50",
    vesselId: "sv-the--mariner",
    type: "Magic Show",
    location: {
      deck: 5,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "c13dbac5-e7a9-444d-99a7-451fa6d51a99",
    vesselId: "sv-the--mariner",
    type: "Karaoke",
    location: {
      deck: 13,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "e3ad2c7a-27ad-48a6-8507-e69ffe2c642f",
    vesselId: "sv-the--mariner",
    type: "Nightclub",
    location: {
      deck: 9,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "3ccafdf2-00fa-4a0b-808e-ab9dc31195e1",
    vesselId: "sv-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 13,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "927c68fc-2743-48a1-844d-dbcbbb90dced",
    vesselId: "sv-the--mariner",
    type: "Game Show",
    location: {
      deck: 6,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "cb995c0e-9c8d-4c9d-997a-00df8613de08",
    vesselId: "sv-the--mariner",
    type: "Comedy",
    location: {
      deck: 8,
      area: "Entertainment Plaza",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
