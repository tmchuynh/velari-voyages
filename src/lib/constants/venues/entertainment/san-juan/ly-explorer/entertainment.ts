// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "ebdf93fd-f1a9-4600-b81a-ed94f0f63204",
    vesselId: "ly--explorer",
    type: "Karaoke",
    location: {
      deck: 5,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "04f43026-dd49-49a0-9e2c-27b088128cd8",
    vesselId: "ly--explorer",
    type: "Comedy",
    location: {
      deck: 12,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "ea8b912c-73ac-48fa-b2e5-1d163f826841",
    vesselId: "ly--explorer",
    type: "Dancing",
    location: {
      deck: 12,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "a5714ef4-681d-4cd3-abce-30f636034f09",
    vesselId: "ly--explorer",
    type: "Live Music",
    location: {
      deck: 9,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "7ef9fe6f-6f0e-4732-a95a-dff1c5df7c4d",
    vesselId: "ly--explorer",
    type: "Magic Show",
    location: {
      deck: 14,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "d7fde2b5-d08b-491d-b416-c4f30a9a08ed",
    vesselId: "ly--explorer",
    type: "Nightclub",
    location: {
      deck: 8,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  }
];
