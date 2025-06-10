// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "dab84abf-f7c6-4f96-b7f7-d8388d783dac",
    vesselId: "hms-the--mariner",
    type: "Live Music",
    location: {
      deck: 9,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "7c43b907-7648-4eef-869d-9f733e7e4597",
    vesselId: "hms-the--mariner",
    type: "Dancing",
    location: {
      deck: 15,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "bda0769a-6d52-4495-a963-7292b8566726",
    vesselId: "hms-the--mariner",
    type: "Karaoke",
    location: {
      deck: 8,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "2d1af94b-36c4-46b8-94c8-6449c890e434",
    vesselId: "hms-the--mariner",
    type: "Comedy",
    location: {
      deck: 13,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "17ecec7e-5a02-4229-b37d-3bee89f12811",
    vesselId: "hms-the--mariner",
    type: "Game Show",
    location: {
      deck: 9,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "fec1bebd-1847-4064-895a-2ca2a34b183f",
    vesselId: "hms-the--mariner",
    type: "Magic Show",
    location: {
      deck: 10,
      area: "Entertainment Plaza",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
