// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "38299690-a590-4b83-94be-331d8adbf78e",
    vesselId: "nb-the--mariner",
    type: "Karaoke",
    location: {
      deck: 10,
      area: "Entertainment Plaza",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "718b8d3a-cc4c-4629-b006-4b18b43d1637",
    vesselId: "nb-the--mariner",
    type: "Live Music",
    location: {
      deck: 7,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "8f72f559-090e-4e6d-8d04-26f8dbadef3f",
    vesselId: "nb-the--mariner",
    type: "Nightclub",
    location: {
      deck: 7,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "16e26456-4421-489a-9782-485a2129f9af",
    vesselId: "nb-the--mariner",
    type: "Dancing",
    location: {
      deck: 5,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "f86ac71a-0cff-4c0b-823b-05bec7c1b667",
    vesselId: "nb-the--mariner",
    type: "Comedy",
    location: {
      deck: 10,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "e01431ea-884b-40b5-b25c-b16ab165b999",
    vesselId: "nb-the--mariner",
    type: "Game Show",
    location: {
      deck: 15,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
