// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "6dbe8601-feca-4902-b237-630e6ce38fd4",
    vesselId: "hms-the--mariner",
    type: "Nightclub",
    location: {
      deck: 12,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "f5cb4a05-20cd-483f-a694-73a8df4c8143",
    vesselId: "hms-the--mariner",
    type: "Live Music",
    location: {
      deck: 15,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "4c452252-b013-457b-83bc-2d0b848e2b75",
    vesselId: "hms-the--mariner",
    type: "Karaoke",
    location: {
      deck: 7,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "21b71ab7-8e85-4a41-9dfa-faa0c3ce99ca",
    vesselId: "hms-the--mariner",
    type: "Magic Show",
    location: {
      deck: 12,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "34c4d7f1-d454-4e38-8b0e-6fcb6dda412b",
    vesselId: "hms-the--mariner",
    type: "Game Show",
    location: {
      deck: 7,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
