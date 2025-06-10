// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "08558012-a000-4300-be58-2addbf8e6674",
    vesselId: "ts-the--mariner",
    type: "Nightclub",
    location: {
      deck: 6,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "341df269-99e5-4b89-a056-e07934160b4c",
    vesselId: "ts-the--mariner",
    type: "Game Show",
    location: {
      deck: 14,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "9d830584-d882-4819-aebf-68819e3a01a3",
    vesselId: "ts-the--mariner",
    type: "Magic Show",
    location: {
      deck: 12,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "9312b35e-cc69-4f38-bfa6-c6346397f2c6",
    vesselId: "ts-the--mariner",
    type: "Dancing",
    location: {
      deck: 11,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
