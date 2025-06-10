// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "3bfdf267-38c6-4623-9795-401387e9906b",
    vesselId: "cs--gale",
    type: "Movie Theater",
    location: {
      deck: 10,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "64bf3b9b-ccc7-4b10-9a8a-cf99aab92f71",
    vesselId: "cs--gale",
    type: "Game Show",
    location: {
      deck: 6,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "17b44721-b921-414e-a744-5b9a933fc082",
    vesselId: "cs--gale",
    type: "Nightclub",
    location: {
      deck: 15,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "3b727e23-aaf3-4e55-9ae6-eaab84c30157",
    vesselId: "cs--gale",
    type: "Live Music",
    location: {
      deck: 12,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "a6f2b82f-6708-4aab-b839-369447b84e74",
    vesselId: "cs--gale",
    type: "Karaoke",
    location: {
      deck: 9,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "4e469e65-594a-4a2b-acf6-e14b79e290dd",
    vesselId: "cs--gale",
    type: "Dancing",
    location: {
      deck: 13,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
