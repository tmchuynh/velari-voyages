// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "a2233d7d-dfac-4206-9945-0b55721dbb23",
    vesselId: "ss-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 6,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "bd938e4f-7dff-4f56-8035-80f765f5ce08",
    vesselId: "ss-the--mariner",
    type: "Comedy",
    location: {
      deck: 8,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "e7d692f2-6998-4c24-a685-b671fe61401a",
    vesselId: "ss-the--mariner",
    type: "Karaoke",
    location: {
      deck: 5,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "4754a816-5da1-45b5-9015-6fdd6a41307a",
    vesselId: "ss-the--mariner",
    type: "Game Show",
    location: {
      deck: 14,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "915a41a7-06b7-4deb-b2e6-39f30f81e1ff",
    vesselId: "ss-the--mariner",
    type: "Dancing",
    location: {
      deck: 12,
      area: "Entertainment Plaza",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  }
];
