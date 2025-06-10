// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "ceb368b6-dcf6-4659-bcaf-4b874187e395",
    vesselId: "ss-the--mariner",
    type: "Magic Show",
    location: {
      deck: 7,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "f7114fe7-d94b-4f40-93ed-54a9477ea1d7",
    vesselId: "ss-the--mariner",
    type: "Live Music",
    location: {
      deck: 6,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "849450d7-ccd4-4cb5-81fe-66193e7374f1",
    vesselId: "ss-the--mariner",
    type: "Dancing",
    location: {
      deck: 12,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "62803418-76a1-4c8c-be1b-b7c15cc200e0",
    vesselId: "ss-the--mariner",
    type: "Karaoke",
    location: {
      deck: 11,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "dcb1abe1-cbb9-4156-97cf-c3f1682a4698",
    vesselId: "ss-the--mariner",
    type: "Comedy",
    location: {
      deck: 15,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
