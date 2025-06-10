// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "cd74b537-602d-4ead-9a9b-202c52da7b36",
    vesselId: "ms--gale",
    type: "Dancing",
    location: {
      deck: 5,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "cc6f2438-d31e-4d8e-89b6-7fb2d836483a",
    vesselId: "ms--gale",
    type: "Karaoke",
    location: {
      deck: 12,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "2cbc759a-97d7-4ee2-bad0-84abe121c7da",
    vesselId: "ms--gale",
    type: "Live Music",
    location: {
      deck: 11,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "59766536-1f27-49db-8093-1dd78dd637cf",
    vesselId: "ms--gale",
    type: "Game Show",
    location: {
      deck: 10,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "bdb809a0-86ee-4fe4-af4f-ea84d9089303",
    vesselId: "ms--gale",
    type: "Comedy",
    location: {
      deck: 12,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
