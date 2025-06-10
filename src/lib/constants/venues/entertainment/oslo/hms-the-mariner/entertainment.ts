// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "93b4f42d-ce37-4453-bdc3-9fa93da2b2ef",
    vesselId: "hms-the--mariner",
    type: "Live Music",
    location: {
      deck: 8,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "3cc06c65-a2a1-4e2a-b4f6-540f7ecfb2af",
    vesselId: "hms-the--mariner",
    type: "Nightclub",
    location: {
      deck: 5,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "406830ea-d93a-4f64-b8a0-7b44d27425d9",
    vesselId: "hms-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 14,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "94af87b5-6aca-4423-92a3-52f8ea389be8",
    vesselId: "hms-the--mariner",
    type: "Karaoke",
    location: {
      deck: 8,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "148afd4c-4f24-455e-9e12-1a2bd80e4058",
    vesselId: "hms-the--mariner",
    type: "Comedy",
    location: {
      deck: 13,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
