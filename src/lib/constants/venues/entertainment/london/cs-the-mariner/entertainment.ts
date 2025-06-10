// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "cbdf0401-87f6-45c0-a489-45af77a0adf6",
    vesselId: "cs-the--mariner",
    type: "Comedy",
    location: {
      deck: 5,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "2cc9ad5a-9f4c-45dd-ad37-933494423e3e",
    vesselId: "cs-the--mariner",
    type: "Game Show",
    location: {
      deck: 7,
      area: "Entertainment Plaza",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "face0ce3-7357-47ab-b90d-c34eec2fd7ea",
    vesselId: "cs-the--mariner",
    type: "Karaoke",
    location: {
      deck: 12,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "608d2e13-d569-4066-a6dd-c0db55cd8add",
    vesselId: "cs-the--mariner",
    type: "Dancing",
    location: {
      deck: 15,
      area: "Entertainment Plaza",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "af56a01b-fc3d-4349-a519-7d3a6d018f2d",
    vesselId: "cs-the--mariner",
    type: "Nightclub",
    location: {
      deck: 7,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
