// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "850325b9-c866-4baf-ad5a-8f380cd9eddf",
    vesselId: "nb--explorer",
    type: "Magic Show",
    location: {
      deck: 15,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "52171d24-20f7-4523-8a49-df9afa162f1f",
    vesselId: "nb--explorer",
    type: "Karaoke",
    location: {
      deck: 14,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "f0f69917-ac62-46fc-9f09-00ae6d3b431a",
    vesselId: "nb--explorer",
    type: "Nightclub",
    location: {
      deck: 11,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "2808859f-98d3-4b49-93c2-2ac85d50af38",
    vesselId: "nb--explorer",
    type: "Movie Theater",
    location: {
      deck: 8,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "fb8e34a2-a912-4d8d-99eb-639e6225748f",
    vesselId: "nb--explorer",
    type: "Game Show",
    location: {
      deck: 9,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "f963cd4d-3f88-4c6e-8d07-2e895517f59e",
    vesselId: "nb--explorer",
    type: "Comedy",
    location: {
      deck: 10,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
