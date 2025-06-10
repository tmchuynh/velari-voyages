// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "a8047aaf-a416-4c36-ab6e-b9287c60bf08",
    vesselId: "nx--explorer",
    type: "Karaoke",
    location: {
      deck: 6,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "cac01cea-d7f7-4ba4-b88c-f1999c191a43",
    vesselId: "nx--explorer",
    type: "Dancing",
    location: {
      deck: 12,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "346cfb71-230f-4b09-b99e-405e8a0f7c67",
    vesselId: "nx--explorer",
    type: "Live Music",
    location: {
      deck: 8,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "c086f8bd-60d3-4cd0-8836-50ebb0b8c3c3",
    vesselId: "nx--explorer",
    type: "Comedy",
    location: {
      deck: 15,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
