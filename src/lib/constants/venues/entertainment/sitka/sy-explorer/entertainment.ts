// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "4e8d3eda-e7d6-4ef8-b35a-ffadde0053ce",
    vesselId: "sy--explorer",
    type: "Movie Theater",
    location: {
      deck: 5,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "b6f96f5d-8869-4e78-8e60-33eb1181d36a",
    vesselId: "sy--explorer",
    type: "Game Show",
    location: {
      deck: 11,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "bd8350cc-8461-4635-8c09-a0cf9f753e4f",
    vesselId: "sy--explorer",
    type: "Live Music",
    location: {
      deck: 13,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "cac39e44-b0b5-4421-8574-634b32bcb808",
    vesselId: "sy--explorer",
    type: "Dancing",
    location: {
      deck: 7,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "05b0f5ae-71b6-4d85-b9cb-8a3e4bea03c0",
    vesselId: "sy--explorer",
    type: "Magic Show",
    location: {
      deck: 10,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "1ea91170-0aac-40dd-b866-7b189ce1d22a",
    vesselId: "sy--explorer",
    type: "Karaoke",
    location: {
      deck: 15,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
