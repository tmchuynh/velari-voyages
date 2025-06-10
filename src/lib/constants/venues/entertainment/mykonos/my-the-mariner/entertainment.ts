// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "b43488f2-e6ce-40b6-a1d8-10da1222ee5b",
    vesselId: "my-the--mariner",
    type: "Magic Show",
    location: {
      deck: 12,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "d0ce7ca3-9759-4b2a-a163-6823a61e9679",
    vesselId: "my-the--mariner",
    type: "Nightclub",
    location: {
      deck: 14,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "6d76cbed-4118-4ae0-8285-6bb67a899288",
    vesselId: "my-the--mariner",
    type: "Live Music",
    location: {
      deck: 8,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "f4fddd1a-e5bf-4d9f-b76a-08c9752357b2",
    vesselId: "my-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 10,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "56ff45d6-db9c-4adb-aeda-5b59b70ca4dd",
    vesselId: "my-the--mariner",
    type: "Karaoke",
    location: {
      deck: 14,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
