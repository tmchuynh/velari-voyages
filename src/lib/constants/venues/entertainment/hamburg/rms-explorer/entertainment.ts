// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "88d9288b-1483-4f1e-88ff-825db1df5bd0",
    vesselId: "rms--explorer",
    type: "Movie Theater",
    location: {
      deck: 6,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "b9f5825e-bcc4-4553-8839-8eff8278b188",
    vesselId: "rms--explorer",
    type: "Dancing",
    location: {
      deck: 14,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "ce8cbfab-ecc8-4e85-8159-52e954771c7b",
    vesselId: "rms--explorer",
    type: "Nightclub",
    location: {
      deck: 14,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "1cdef600-c42c-4aac-b498-a01ce7d1771a",
    vesselId: "rms--explorer",
    type: "Live Music",
    location: {
      deck: 9,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "7c8ccee8-20f8-4eee-8f8d-0d9632d78315",
    vesselId: "rms--explorer",
    type: "Magic Show",
    location: {
      deck: 12,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  }
];
