// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "d9e0b55d-d305-4b41-bcfb-b7ea7bcc06b0",
    vesselId: "hms-the--mariner",
    type: "Nightclub",
    location: {
      deck: 15,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "5e8bd118-0e23-421b-89a6-41aaf54ead50",
    vesselId: "hms-the--mariner",
    type: "Live Music",
    location: {
      deck: 8,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "babd378a-a3dd-4380-9b9e-05e5d194d5d9",
    vesselId: "hms-the--mariner",
    type: "Game Show",
    location: {
      deck: 13,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "fc7cb09e-4d5c-4da8-af7c-771beaf001de",
    vesselId: "hms-the--mariner",
    type: "Dancing",
    location: {
      deck: 8,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "c6252610-7bcb-455e-866e-7cff09eb33fd",
    vesselId: "hms-the--mariner",
    type: "Comedy",
    location: {
      deck: 5,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
