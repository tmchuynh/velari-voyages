// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "6d170b95-6ed9-41d8-a751-9ae494a37bec",
    vesselId: "sy--of-the-deep",
    type: "Dancing",
    location: {
      deck: 11,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "3e3550c7-4c5b-4bfd-845b-460996077563",
    vesselId: "sy--of-the-deep",
    type: "Live Music",
    location: {
      deck: 7,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "11a8f3af-ef7c-4464-aa20-40fdc17e6eb4",
    vesselId: "sy--of-the-deep",
    type: "Karaoke",
    location: {
      deck: 8,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "95fd5267-677a-4787-8f06-c654373509f4",
    vesselId: "sy--of-the-deep",
    type: "Comedy",
    location: {
      deck: 13,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  }
];
