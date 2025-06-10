// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "4b99a3b4-d104-4055-a899-b7d1bc3eabae",
    vesselId: "ts--gale",
    type: "Dancing",
    location: {
      deck: 11,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "3e84c082-e3b1-4eb7-8829-6b997bf401de",
    vesselId: "ts--gale",
    type: "Live Music",
    location: {
      deck: 5,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "5b5a9cb3-52dd-4975-a8da-da3ad7d6b2d5",
    vesselId: "ts--gale",
    type: "Nightclub",
    location: {
      deck: 8,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "57f0b502-1928-47f2-bd74-ba64742bd3b7",
    vesselId: "ts--gale",
    type: "Comedy",
    location: {
      deck: 11,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "d8b64d51-2d77-4523-93d5-8b6f635475df",
    vesselId: "ts--gale",
    type: "Karaoke",
    location: {
      deck: 12,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  }
];
