// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "44033bf7-3c3f-49d6-b79a-1d06f28a71a2",
    vesselId: "rms--gale",
    type: "Dancing",
    location: {
      deck: 12,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "bda04599-6d22-4ba5-80d1-3ed9f6fb7cae",
    vesselId: "rms--gale",
    type: "Live Music",
    location: {
      deck: 15,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "2ad7d62f-4405-41e7-ba40-59dbeace6474",
    vesselId: "rms--gale",
    type: "Karaoke",
    location: {
      deck: 7,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "16df7b51-290b-4682-80de-b41a0d790495",
    vesselId: "rms--gale",
    type: "Game Show",
    location: {
      deck: 12,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "91883b65-4106-40fb-bf8b-8d43a4514d7e",
    vesselId: "rms--gale",
    type: "Magic Show",
    location: {
      deck: 12,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "909fa18d-8051-463f-8c89-642553f507d8",
    vesselId: "rms--gale",
    type: "Movie Theater",
    location: {
      deck: 10,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  }
];
