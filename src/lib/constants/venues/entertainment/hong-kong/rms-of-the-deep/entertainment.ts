// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "7b872765-aac6-4372-8c3c-665172a03f44",
    vesselId: "rms--of-the-deep",
    type: "Comedy",
    location: {
      deck: 10,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "16a71a9e-791e-4e9a-8587-20b6df454ead",
    vesselId: "rms--of-the-deep",
    type: "Dancing",
    location: {
      deck: 9,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "2926148e-13ca-411d-ada8-a2b26ea37bda",
    vesselId: "rms--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 5,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "87a263dd-2faf-426b-a27b-5719defa7aad",
    vesselId: "rms--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 14,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "03b26f09-c614-4e4a-aace-f93aa73e1fc4",
    vesselId: "rms--of-the-deep",
    type: "Karaoke",
    location: {
      deck: 5,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "480e650a-788d-4203-b1c8-56a83aaac778",
    vesselId: "rms--of-the-deep",
    type: "Live Music",
    location: {
      deck: 5,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "7d4e6e3c-c8cd-413f-a0fb-fff27e00322a",
    vesselId: "rms--of-the-deep",
    type: "Movie Theater",
    location: {
      deck: 14,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "d7aa190d-e322-4aa1-8e1b-0138a651d7d9",
    vesselId: "rms--of-the-deep",
    type: "Game Show",
    location: {
      deck: 15,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  }
];
