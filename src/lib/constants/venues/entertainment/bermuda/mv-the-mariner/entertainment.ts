// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "b5a1e389-6928-4552-8d1c-b1f2be02705a",
    vesselId: "mv-the--mariner",
    type: "Game Show",
    location: {
      deck: 10,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "fbf6bda4-8492-467e-a72a-adfd6e8e1132",
    vesselId: "mv-the--mariner",
    type: "Nightclub",
    location: {
      deck: 13,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "e9eaa3cd-9cd7-4915-ba00-12ec71d002bf",
    vesselId: "mv-the--mariner",
    type: "Karaoke",
    location: {
      deck: 15,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "dacaa452-e4fd-4942-9b36-8afaee7fd0c4",
    vesselId: "mv-the--mariner",
    type: "Comedy",
    location: {
      deck: 12,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "f3d10432-d98b-4d7c-9a63-10f56ef0ce74",
    vesselId: "mv-the--mariner",
    type: "Dancing",
    location: {
      deck: 10,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
