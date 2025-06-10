// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "f754f6ef-77e0-4e18-84eb-8cbdd267676c",
    vesselId: "cs-the--mariner",
    type: "Live Music",
    location: {
      deck: 14,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "ac31fbb8-e207-4ca6-989f-a2afd0ee1f25",
    vesselId: "cs-the--mariner",
    type: "Dancing",
    location: {
      deck: 11,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "c7a290d8-0563-4973-8996-04758f48f8f3",
    vesselId: "cs-the--mariner",
    type: "Game Show",
    location: {
      deck: 9,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "0593bebe-99aa-476c-a921-600f4512e859",
    vesselId: "cs-the--mariner",
    type: "Karaoke",
    location: {
      deck: 14,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "35b568f3-8b9a-4876-a783-8878097b1ded",
    vesselId: "cs-the--mariner",
    type: "Comedy",
    location: {
      deck: 15,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "592d7147-4f19-499a-bd94-54800a3a914d",
    vesselId: "cs-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 15,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
