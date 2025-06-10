// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "f55a29c9-2a46-4f5f-9c47-4e715e7bdea4",
    vesselId: "sv--gale",
    type: "Karaoke",
    location: {
      deck: 5,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "3b007ec8-fe9c-465d-8ffe-e0b791e27730",
    vesselId: "sv--gale",
    type: "Game Show",
    location: {
      deck: 15,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "0a2bd2da-d657-4218-8f16-61376984ec51",
    vesselId: "sv--gale",
    type: "Comedy",
    location: {
      deck: 10,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "2ed8071a-243c-4d62-a1c5-e6c5759f8298",
    vesselId: "sv--gale",
    type: "Dancing",
    location: {
      deck: 6,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "e01e74b0-1662-4f35-af45-b95e66858196",
    vesselId: "sv--gale",
    type: "Nightclub",
    location: {
      deck: 14,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "224bbc57-1a66-4b76-8791-7c9eb8876961",
    vesselId: "sv--gale",
    type: "Magic Show",
    location: {
      deck: 12,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
