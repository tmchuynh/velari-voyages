// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "963b628a-7dee-4f8c-be35-01804d93ffbf",
    vesselId: "ts-the--mariner",
    type: "Nightclub",
    location: {
      deck: 11,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "c2a4e0a1-646c-45a4-8996-250582f20a4c",
    vesselId: "ts-the--mariner",
    type: "Game Show",
    location: {
      deck: 10,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "13ff48d1-d8ff-4c37-97b3-49be4854808a",
    vesselId: "ts-the--mariner",
    type: "Karaoke",
    location: {
      deck: 8,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "db848c93-10ac-4530-bad2-9b7435838ada",
    vesselId: "ts-the--mariner",
    type: "Magic Show",
    location: {
      deck: 10,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
